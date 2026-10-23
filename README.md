# davidgeorgehope.com

Personal website. Built with Astro.

## Quick Start

Requires Node.js 22.23.4 or newer (see `.nvmrc`). Astro 7 does not run on Node 20.

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

The build is static HTML in `dist/`. nginx serves that directory. There is no Node adapter and production does not run `astro preview`.

```bash
npm run build
rsync -av --delete dist/ user@your-hetzner-server:/var/www/davidgeorgehope.com/
```

`deploy/nginx.conf` is the site config: `root` points at the copied files, `/path` and `/path/` both return the page, and `*.md` is served as `text/markdown`. No redirects are configured.

## Full Context

See `CLAUDE.md` for research notes, design decisions, and detailed instructions.
