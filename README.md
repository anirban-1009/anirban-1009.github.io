# Anirban.codes

[![Live Site](https://img.shields.io/badge/site-live-brightgreen)](https://www.anirban.space/)

It is a repository for the code of the portfolio of Anirban Sikdar(me). The live server is at [anirban.space](anirban.space).

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                      | Action                                                                           |
| :--------------------------- | :------------------------------------------------------------------------------- |
| `npm install`                | Installs dependencies                                                            |
| `npm run dev`                | Starts local dev server at `localhost:4321`                                      |
| `npm run build`              | Generates embeddings and builds production site to `./dist/`                     |
| `npm run preview`            | Preview your build locally, before deploying                                     |
| `npm run generate-embeddings`| Generates vector embeddings from MDX content for RAG chatbot                     |
| `npm run changelog`          | Generates changelog entry from git commits since last tag                        |
| `npm run release`            | Bumps patch version, creates git tag, and pushes to main (alias for release:patch) |
| `npm run release:patch`      | Bumps patch version (0.0.x) - for bug fixes                                      |
| `npm run release:minor`      | Bumps minor version (0.x.0) - for new features                                   |
| `npm run release:major`      | Bumps major version (x.0.0) - for breaking changes                               |
| `npm run astro ...`          | Run CLI commands like `astro add`, `astro check`                                 |
| `npm run astro -- --help`    | Get help using the Astro CLI                                                     |

## 🤖 RAG Chatbot

This portfolio includes an AI-powered chatbot using Retrieval-Augmented Generation (RAG) that can answer questions about the content:

- **Content Source**: All `.md` and `.mdx` files in `src/content/` (blog posts, work projects, about page)
- **Embedding Generation**: Run `npm run generate-embeddings` to create vector embeddings from your content
- **Auto-Generation**: Embeddings are automatically generated during `npm run build`
- **Vector Store**: Stored in `src/lib/vector-store.json` (generated, not committed)

## 📦 Versioning & Releases

This project follows [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

- **Patch (0.0.x)**: Bug fixes and minor changes → `npm run release:patch` or `npm run release`
- **Minor (0.x.0)**: New features (backward compatible) → `npm run release:minor`  
- **Major (x.0.0)**: Breaking changes → `npm run release:major`

Each release command automatically:
1. Bumps the version in `package.json`
2. Generates a changelog entry from git commits
3. Creates a git commit with the version change and changelog
4. Creates a git tag (e.g., `v0.0.6`)
5. Pushes changes and tags to the main branch

### 📝 Changelog

The project uses [Keep a Changelog](https://keepachangelog.com/) format. Changelog entries are automatically generated from commit messages:

- **feat:** → Features
- **fix:** → Bug Fixes  
- **docs:** → Documentation
- **chore:** → Chores
- Messages with "breaking" → BREAKING CHANGES

**Tip**: Use [Conventional Commits](https://www.conventionalcommits.org/) format for better changelog organization!

## Tailwind CSS

As part of the development it also has Tailwind CSS integrated to the project you can checkout the local configurations at [tsconfig.json](tsconfig.json).

As tailwind CSS is a Mobile oriented styling framework it has been difficult, and a grave mistake to start from developing from the desktop then back to a responsive view of the site.

This page supports both Desktop and Mobile view. You can checkout the crazy framework of tailwind here at [Tailwind CSS](https://tailwindcss.com/) ✨✨.

## UI/UX

Designing a project before developing the frontend really help and in this project I have learnt a handful of UI/UX. Skills and can brag about it so check them out here [WireFrames](https://www.figma.com/file/UaF8U2ntQDSajEHV6K8gK0/Portfolio?type=design&t=FcqbpQPlOKtMDQSt-6).

## Contributing

We welcome contributions from the community! If you're interested in contributing to this project, please read our [Contribution Guidelines](contribution.md) to get started.

## License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).
