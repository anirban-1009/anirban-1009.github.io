#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHANGELOG_PATH = path.join(process.cwd(), 'CHANGELOG.md');

/**
 * Get the new version from package.json
 */
function getVersion() {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.version;
}

/**
 * Get the latest git tag
 */
function getLatestTag() {
    try {
        // Get all tags sorted by creatordate
        const tags = execSync('git tag --sort=-creatordate', { encoding: 'utf8' }).trim().split('\n');

        // If we just created a tag (HEAD is tagged), we want the one BEFORE it
        const headHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
        // Use ^{} to peel the tag and get the referenced commit hash
        const tagHash = execSync(`git rev-parse ${tags[0]}^{}`, { encoding: 'utf8' }).trim();

        if (headHash === tagHash && tags.length > 1) {
            return tags[1]; // Return previous tag
        }

        return tags[0] || null;
    } catch (error) {
        return null; // No tags yet
    }
}

/**
 * Get commits since last tag
 */
function getCommitsSinceLastTag() {
    const previousTag = getLatestTag();
    // If there is a previous tag, get commits from it to HEAD
    // If no previous tag, get all commits
    const range = previousTag ? `${previousTag}..HEAD` : '';

    console.log(`Generating changelog for range: ${range || 'ALL COMMITS'}`);

    try {
        const cmd = range
            ? `git log ${range} --pretty=format:"%s|%h|%an|%ad" --date=short`
            : `git log --pretty=format:"%s|%h|%an|%ad" --date=short`;

        const commits = execSync(cmd, { encoding: 'utf8' }).trim();

        if (!commits) return [];

        return commits.split('\n').map(line => {
            const [message, hash, author, date] = line.split('|');
            return { message, hash, author, date };
        });
    } catch (error) {
        console.error('Error getting commits:', error);
        return [];
    }
}

/**
 * Categorize commits by type
 */
function categorizeCommits(commits) {
    const categories = {
        breaking: [],
        features: [],
        fixes: [],
        docs: [],
        chore: [],
        other: []
    };

    commits.forEach(commit => {
        const msg = commit.message.toLowerCase();

        if (msg.includes('breaking') || msg.startsWith('!')) {
            categories.breaking.push(commit);
        } else if (msg.startsWith('feat:') || msg.startsWith('feature:')) {
            categories.features.push(commit);
        } else if (msg.startsWith('fix:')) {
            categories.fixes.push(commit);
        } else if (msg.startsWith('docs:')) {
            categories.docs.push(commit);
        } else if (msg.startsWith('chore:')) {
            categories.chore.push(commit);
        } else {
            categories.other.push(commit);
        }
    });

    return categories;
}

/**
 * Format commits for changelog
 */
function formatCommits(commits) {
    return commits.map(c => `- ${c.message} ([${c.hash}](../../commit/${c.hash}))`).join('\n');
}

/**
 * Generate changelog entry
 */
function generateChangelogEntry(version, commits) {
    const categories = categorizeCommits(commits);
    const date = new Date().toISOString().split('T')[0];

    let entry = `## [${version}] - ${date}\n\n`;

    if (categories.breaking.length > 0) {
        entry += `### BREAKING CHANGES\n\n${formatCommits(categories.breaking)}\n\n`;
    }

    if (categories.features.length > 0) {
        entry += `### Features\n\n${formatCommits(categories.features)}\n\n`;
    }

    if (categories.fixes.length > 0) {
        entry += `### Bug Fixes\n\n${formatCommits(categories.fixes)}\n\n`;
    }

    if (categories.docs.length > 0) {
        entry += `### Documentation\n\n${formatCommits(categories.docs)}\n\n`;
    }

    if (categories.chore.length > 0) {
        entry += `### Chores\n\n${formatCommits(categories.chore)}\n\n`;
    }

    if (categories.other.length > 0) {
        entry += `### Other Changes\n\n${formatCommits(categories.other)}\n\n`;
    }

    return entry;
}

/**
 * Update CHANGELOG.md
 */
function updateChangelog() {
    const version = getVersion();
    const commits = getCommitsSinceLastTag();

    if (commits.length === 0) {
        console.log('No commits since last tag. Skipping changelog update.');
        return;
    }

    const newEntry = generateChangelogEntry(version, commits);

    // Read existing changelog or create header
    let existingChangelog = '';
    if (fs.existsSync(CHANGELOG_PATH)) {
        existingChangelog = fs.readFileSync(CHANGELOG_PATH, 'utf8');
    }

    // If file is empty or doesn't have a header, add one
    if (!existingChangelog.includes('# Changelog')) {
        existingChangelog = `# Changelog\n\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),\nand this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\n`;
    }

    // Insert new entry after header
    const lines = existingChangelog.split('\n');
    const headerEndIndex = lines.findIndex((line, idx) =>
        idx > 0 && line.startsWith('##')
    );

    if (headerEndIndex > -1) {
        lines.splice(headerEndIndex, 0, newEntry);
    } else {
        lines.push(newEntry);
    }

    const updatedChangelog = lines.join('\n');
    fs.writeFileSync(CHANGELOG_PATH, updatedChangelog);

    console.log(`✅ Updated CHANGELOG.md with version ${version}`);
    console.log(`📝 Added ${commits.length} commits to changelog`);
}

// Run the script
updateChangelog();
