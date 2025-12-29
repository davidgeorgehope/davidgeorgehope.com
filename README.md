# davidgeorgehope.com

Personal website. Built with Astro.

## Quick Start

```bash
npm install
npm run dev      # localhost:4321
```

## Add a Project

Edit `src/data/projects.json`:

```json
{
  "title": "Project Name",
  "description": "What it does.",
  "url": "https://github.com/davidgeorgehope/repo",
  "tags": ["Tag1", "Tag2"]
}
```

## Add Photo

Drop image in `public/photo.jpg`, then edit `src/pages/index.astro` and replace the photo placeholder comment with `<img src="/photo.jpg" alt="David George Hope" />`.

## Deploy

```bash
npm run build
# Copy dist/ to server
```

## Full Context

See `CLAUDE.md` for research notes, design decisions, and detailed instructions.
