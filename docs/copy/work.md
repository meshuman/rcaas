# Our Work (Showcase Hub) — RCAAS Technology
*For Claude Code: Final copy for /work/ (spec §6.7). Saved as docs/copy/work.md. Design intent: show, don't tell. The page leads with explorable experiences, then the stories behind them. Text stays short. Rules applied: goals, not guarantees; British English; no invented results or clients. Visible word count: ~400.*

## Page metadata

| Field | Copy |
|---|---|
| Title tag | Our Work: 3D Experiences & Digital Heritage Projects \| RCAAS |
| Meta description | Explore 3D experiences RCAAS has built for heritage sites, schools, colleges and hotels in Nepal, and the stories behind each project. |
| H1 | Step inside our work |
| Breadcrumb | Home › Our Work |
| OG image | [[TBI: grid of 4 project stills]] |

---

## 1. Hero

- **H1:** Step inside our work
- **Intro:** Every project here started with a real place and a clear goal. Open any of them, move around, and see what your audience would see.
- **Filter chips:** All · Heritage · Education · Hospitality *(all cards present in HTML; filter is progressive enhancement)*

---

## 2. Experience showcase (#showcase)

- **H2:** Explore in 3D
- **Intro:** Tap any place to open it. Nothing to install.

| Tile | Industry | Poster alt | Action |
|---|---|---|---|
| **Chilancho Stupa** | Heritage | 3D view of Chilancho Stupa | Explore in 3D → SplatEmbed modal [[TBI: URL]] |
| **Nepathya School and College** | Education | 3D view of Nepathya School and College campus | Explore in 3D [[TBI]] |
| **Madan Ashrit Polytechnic Institute** [[TBC: official name]] | Education | 3D view of workshops at Madan Ashrit Polytechnic Institute | Explore in 3D [[TBI]] |
| **Basera Boutique Hotel** | Hospitality | 3D view of Basera Boutique Hotel | Explore in 3D [[TBI]] |

- **Note under grid:** Each experience loads only when you open it. Typical size about [[TBI]] MB.
- *Build note: Tiles use ExperienceShowcase; the modal uses SplatEmbed and fires model_open with the project slug. Hide a tile if its embed URL is missing.*

---

## 3. The stories behind them (#stories)

- **H2:** The stories behind them

### Card 1 — Chilancho Stupa
- **Tag:** Heritage · [[TBI: location]]
- **Goal:** Preserve a cultural monument's form, proportions and detail.
- **What we created:** A measured 3D record and a photorealistic model.
- **Result:** [[TBI: one line, or omit]]
- **Link:** Read the story → `/work/chilancho-stupa-digital-heritage/`

### Card 2 — Nepathya School and College
- **Tag:** Education · [[TBI: location]]
- **Goal:** Let families explore the campus before they visit.
- **What we created:** An interactive 3D campus tour.
- **Result:** [[TBI]]
- **Link:** Read the story → `/work/nepathya-school-college-3d-campus-tour/`

### Card 3 — Madan Ashrit Polytechnic Institute
- **Tag:** Education · [[TBI: location]]
- **Goal:** Show workshops and labs that photos can't convey.
- **What we created:** An interactive 3D tour of the institute's facilities.
- **Result:** [[TBI]]
- **Link:** Read the story → `/work/madan-ashrit-polytechnic-3d-campus-tour/`

### Card 4 — Basera Boutique Hotel
- **Tag:** Hospitality · [[TBI: location]]
- **Goal:** Let guests feel the hotel's atmosphere before they book.
- **What we created:** A photorealistic, explorable 3D experience on our platform.
- **Result:** [[TBI]]
- **Link:** Read the story → `/work/basera-boutique-hotel-3d-experience/`

*Build note: Cards use StoryCaseCard. Omit the "Result" line until real data exists. Cards for draft: true case studies are hidden.*

---

## 4. Proof strip — hidden until filled

| Number | Label |
|---|---|
| [[TBI]] | places captured |
| [[TBI]] | visits to our experiences |
| [[TBI]] | average minutes spent exploring |

---

## 5. More on request

- **Body:** Some of our work is private to our clients. [[TBC: "Ask us and we'll share relevant examples for your project."]]

---

## 6. CTA band

- **H2:** Your place could be next
- **Body:** Tell us about your place and what you want people to do. We'll show you what's possible and send a clear proposal.
- **Primary CTA:** Plan your experience → `/contact/?type=project`
- **Secondary CTA:** Chat on WhatsApp → [[TBI: wa.me link]]

---

## Schema notes
CollectionPage → ItemList of the four case-study Article URLs; each showcase tile's 3DModel is defined on its case-study page, not here. BreadcrumbList.

## Placeholders
W01–W04 locations, embed URLs, results, official names · P06 file size · proof numbers · private-work line · G06 WhatsApp.
