# Bahrain Polytechnic student website

An IT6012 Web Fundamentals group project: a responsive, seven-page educational and institutional information website. The site is an independent coursework project and is not an official Bahrain Polytechnic service.

## Run the website

Open `index.html` in a browser to launch the home page. You can also open `home.html` directly. The site uses static HTML, CSS and JavaScript, so no build or install step is required. Google Fonts and the embedded map need an internet connection; fallback system fonts and the rest of the site remain available offline.

## Required seven pages

1. `home.html` — introduction, project overview, hero, navigation, call to action and validated registration form
2. `subtopic1.html` — about the institution
3. `subtopic2.html` — study and applied learning
4. `subtopic3.html` — visit and contact information
5. `planning-design.html` — sitemap, user journey, seven low-fidelity wireframes, design decisions, palette, typography and responsive plan
6. `reflection-ai-report.html` — 500–600 word reflection, AI tools and lessons learned
7. `overview.html` — project overview, requirements, AI documentation, sources and ethics

The assessment site contains exactly seven required pages. `index.html` is a small launcher that redirects to `home.html`; it is not an additional content page. The registration form validates first and last names of at least three characters, exactly eight mobile digits and a valid email format. It reports success or field errors in the browser and does not send or store form data.

## Project structure

```text
.
├── home.html
├── index.html (launcher)
├── subtopic1.html
├── subtopic2.html
├── subtopic3.html
├── planning-design.html
├── reflection-ai-report.html
├── overview.html
├── images/
├── scripts/
└── styles/
```

## Before submission

- The Overview page lists Claude, Gemini and ChatGPT and includes recorded prompt/output examples from the ChatGPT/Codex work session.
- Add the group’s actual member roles and collaboration examples to the reflection.
- Verify the original source and license of each local photograph, add appropriate credit or replace images with properly licensed assets.
- Review all pages at desktop, tablet and mobile widths and verify keyboard navigation and form behavior in a browser.

Official university pages and logo reference are linked from `overview.html`. The contact details on the Visit page were checked against Bahrain Polytechnic’s official Admissions FAQ.
