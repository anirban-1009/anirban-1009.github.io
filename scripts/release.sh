#!/bin/bash
set -e

# Usage: ./scripts/release.sh [patch|minor|major]

VERSION_TYPE=$1

if [ -z "$VERSION_TYPE" ]; then
    echo "Usage: ./scripts/release.sh [patch|minor|major]"
    exit 1
fi

# 1. Bump version in package.json without creating a git commit/tag yet
npm version $VERSION_TYPE --no-git-tag-version

# 2. Get the new version number
NEW_VERSION=$(node -p "require('./package.json').version")
echo "🚀 Preparing release for v$NEW_VERSION..."

# 3. Generate changelog
echo "📝 Generating changelog..."
node scripts/update-changelog.mjs

# 4. Stage changes (package.json and CHANGELOG.md)
git add package.json CHANGELOG.md

# 5. Commit changes
git commit -m "chore: release v$NEW_VERSION"

# 6. Create git tag
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"

# 7. Push to remote
echo "📤 Pushing changes and tags..."
git push origin main
git push origin "v$NEW_VERSION"

echo "✅ Release v$NEW_VERSION completed successfully!"
