# Gianluca Vespe — Portfolio

Personal portfolio built with [Astro](https://astro.build) and Tailwind CSS. Single-page static site, deployed to GitHub Pages at `https://gianluca-v.github.io`.

All content is data-driven through Astro Content Collections: every job, project, and experiment lives as one JSON file in `src/content/`. Adding an entry means dropping one new file — no component changes required.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npx astro check` | Type-check the project                       |

## Project structure

```text
/
├── public/                      # Static files served as-is (CV PDF, favicon)
├── src/
│   ├── assets/                  # Optimized images referenced from content entries
│   ├── components/              # Astro components (sections, cards, icons)
│   ├── content/
│   │   ├── experience/          # One JSON file per job
│   │   ├── projects/            # One JSON file per featured project
│   │   └── experiments/         # One JSON file per experiment
│   ├── content.config.ts        # Collection schemas (zod)
│   ├── data/site.ts             # Site identity, social links, education & skills
│   ├── layouts/Layout.astro     # HTML shell, meta/OG tags, reveal script
│   ├── pages/index.astro        # The single page, composes the sections
│   └── styles/global.css        # Tailwind theme tokens and global styles
└── astro.config.mjs
```

## Updating personal info

All identity data lives in `src/data/site.ts` — the single source of truth:

- `site` — owner name, tagline, page title/description, positioning line, CV path (`cvHref`), GitHub and LinkedIn links, and the contact-form endpoint. Components (Hero, Nav, Contact, Footer, Layout meta) import these values; never hardcode them in components.
- `profile` — education entries and the `coreSkills` list rendered in the "about.json" hero card. Add a degree or skill by editing only this file; the card derives its layout from the data.

## Adding content

Sections render by iterating their collection sorted by `order` (ascending — lower numbers appear first). Schemas are enforced by zod in `src/content.config.ts`; a typo or missing field fails the build with a clear error.

### Add a job (Experience)

Create `src/content/experience/<company-slug>.json`:

```json
{
  "company": "Company Name",
  "role": "Backend Developer",
  "seniority": "Junior",
  "startDate": "2025",
  "endDate": null,
  "summary": "One sentence describing what you do there.",
  "highlights": [
    "A concrete thing you did or do",
    "Another concrete thing"
  ],
  "tech": ["C#", ".NET", "SQL"],
  "order": 1
}
```

- `endDate: null` renders as "Present".
- `order: 1` is the newest job (top of the timeline). Bump the others down when you add a new one.

### Add a featured project

Create `src/content/projects/<project-slug>.json`:

```json
{
  "title": "Project Name",
  "tagline": "One punchy line under the title",
  "description": "A short paragraph describing what it is and why it matters.",
  "highlights": [
    "A selling point",
    "Another selling point"
  ],
  "tech": ["C#", ".NET 8", "PostgreSQL"],
  "links": [
    { "label": "Repository", "url": "https://github.com/..." },
    { "label": "Live demo", "url": "https://..." }
  ],
  "image": "../../assets/MyProject.png",
  "order": 4
}
```

- `image` is optional. Omit it and the card shows a styled gradient monogram placeholder.
- To use an image, drop the file in `src/assets/` and reference it with a relative path from the JSON file (`../../assets/<file>`). Astro optimizes it at build time.
- `highlights` is optional (defaults to an empty list).

### Add an experiment

Same schema as projects. Create `src/content/experiments/<experiment-slug>.json`:

```json
{
  "title": "Experiment Name",
  "tagline": "One punchy line under the title",
  "description": "A short paragraph describing the experiment.",
  "tech": ["TypeScript", "React"],
  "links": [
    { "label": "Repository", "url": "https://github.com/..." }
  ],
  "image": "../../assets/MyExperiment.png",
  "order": 5
}
```

Experiments render as compact grid cards, so keep descriptions short. `image` and `highlights` are optional here too.

## Updating the CV

Replace `public/CV Gianluca Vespe English.pdf` with the new file, keeping the exact filename (links reference the URL-encoded path).
