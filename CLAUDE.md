# David George Hope - Personal Website Project

## Original Request

Rebuild personal website at davidgeorgehope.com.

### Site Structure (3 sections)

1. **Landing Page** - Clean, minimal
   - One sentence about who I am
   - Links to LinkedIn and GitHub
   - Space for photo (to add later)
   - Recruiters spend 30 seconds max

2. **Projects Section** - Visual grid
   - Cards with title, short description, link
   - Dead simple to add new projects (ships things constantly)
   - GitHub repos as starting content
   - Room for non-GitHub projects

3. **Writing/Notes Section** - Optional, not prominent
   - For things that aren't work

### Tech Requirements
- Static site, fast, minimal dependencies
- Hosting on Hetzner server
- Astro or clean HTML/CSS (no frameworks to regret)
- Good looking but not generic
- Character: "I live in a converted 1860s Quaker meeting house"

---

## Research Summary

### Current Role
**Director of Product Marketing, Observability at Elastic**
- Focus: AI-powered observability, OpenTelemetry, AIOps
- Active speaker at DevOpsDays, KubeCon, Elastic events

### Background
- 16+ years: development, DevOps, leadership, sales, product marketing
- Previous: Sales Engineer at AppDynamics, DataRobot, Confluent, Icon Solutions (UK)
- Education: 1st Class BSc, IT in Industrial Systems, Brunel University (2000-2005)
- Won 2005 Scientific Instrument Makers Prize (Wireless Heart Rate Monitor with Symbian C++ and Bluetooth)
- Originally from UK, moved to USA 8 years ago (met wife in Buffalo, NY)

### GitHub Repos (81 total) - github.com/davidgeorgehope

Key projects found:
- **voicecoding** - Voice-activated Claude assistant for Steam Deck with Whisper transcription
- **otel-demo-gen** - OpenTelemetry demo generator
- **vibecaster** - (needs description)
- **ChatGPTMonitoringWithOtel** - Monitor ChatGPT with OpenTelemetry
- **custom-instrumentation-examples** - OpenTelemetry custom instrumentation in Java
- **LogGuid** - Make Parent GUID for transactions available to log files
- **PythonElasticAPMExample** - Python Elastic APM example
- **otel-collector-syslog** - OpenTelemetry collector syslog integration
- **opentelemetry-demo** - OpenTelemetry Community Demo Application
- **otel-finance** - (needs description)
- **elasticlue** - (needs description)
- **log-generator-fast** - (needs description)
- **stock-drop** - (needs description)
- **animated-lines** - (needs description)
- **spring-boot-cassandra-example** - Spring Boot with Cassandra

### Elastic Blog Posts
1. The hidden costs of tool sprawl: An SRE's guide to observability consolidation (Apr 2025)
2. Realizing the business value of OpenTelemetry-native observability (Jan 2025)
3. The evolving role of SREs: Balancing reliability, cost, and innovation (Dec 2024)
4. Leveling up your observability practice — Part 1 & 2 (Nov 2024)
5. The power of effective log management in software development (Sep 2023)
6. A look under the hood at eBPF (Nov 2022)
7. Elastic Universal Profiling (Oct 2022)

### Links
- LinkedIn: https://www.linkedin.com/in/davidgeorgehope/
- GitHub: https://github.com/davidgeorgehope
- Elastic Blog: https://www.elastic.co/blog/author/david-hope
- Elastic Observability Labs: https://www.elastic.co/observability-labs/author/david-hope

---

## Design Direction

### Aesthetic
- Not generic Silicon Valley tech
- Character like an 1860s Quaker meeting house: honest, solid, functional, with soul
- Clean but warm
- Minimal but not sterile

### Suggested Approach
- Astro (simple, fast, good DX for adding projects)
- CSS custom properties for theming
- Markdown or JSON for project data (easy to add new ones)
- No JavaScript frameworks
- System fonts or one tasteful font
- Muted, warm color palette

---

## Implementation (Completed)

### Structure
```
src/
├── layouts/Base.astro    # Main layout with nav, footer, global styles
├── pages/
│   ├── index.astro       # Landing page
│   ├── projects.astro    # Projects grid
│   └── writing.astro     # Writing/notes section
└── data/
    └── projects.json     # Easy to edit project list
```

### Adding a New Project

Edit `src/data/projects.json` and add an entry:

```json
{
  "title": "Project Name",
  "description": "Short description of what it does.",
  "url": "https://github.com/davidgeorgehope/repo-name",
  "tags": ["Tag1", "Tag2"]
}
```

That's it. Rebuild and deploy.

### Adding Your Photo

1. Put your photo in `public/photo.jpg`
2. Edit `src/pages/index.astro`
3. Replace the comment inside `.photo-placeholder` with:
   ```html
   <img src="/photo.jpg" alt="David George Hope" />
   ```

### Adding a Writing Post

Edit the `posts` array in `src/pages/writing.astro`:

```javascript
const posts = [
  {
    title: "Post Title",
    date: "2024-01-15",
    description: "A short description.",
    slug: "post-slug"
  }
];
```

For actual post content, create `src/pages/writing/[slug].astro` or use Astro content collections.

### Commands

```bash
npm run dev      # Local dev server at localhost:4321
npm run build    # Build to ./dist/
npm run preview  # Preview production build
```

### Deployment to Hetzner

Build and copy `dist/` to your server:

```bash
npm run build
rsync -avz dist/ user@your-hetzner-server:/var/www/davidgeorgehope.com/
```

Or set up a simple deploy script.
