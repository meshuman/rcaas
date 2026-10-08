Spec, Templates & Copy
For Claude Code: Adds a blog to the site. Save as docs/copy/blog.md and apply the Spec addendum (§7) to docs/SITE_SPEC.md. Role of the blog vs Learn: /learn/ holds a few evergreen guides that answer buyer questions and are updated over time. /blog/ holds dated, first-hand posts: what happened on a capture, what launched, what we think, where we've been. Posts show a publish date; guides show "last updated". Launch rule: the blog stays draft: true (out of navigation, sitemap and RSS) until 3 posts are published. An empty or stale blog does more harm than no blog. Rules applied: first-hand content only; no invented facts, people or results; British English.

> Implementation note (8 October 2026): docs/SITE_SPEC.md is not in the repository, so the §7 addendum below has not been merged into it yet. The site is React + Vite, not Astro, so §9.2 is implemented as: src/content/blog/*.ts (one file per post, frontmatter fields as typed properties), src/pages/BlogHubPage.tsx, src/pages/BlogPostPage.tsx, /blog/page/{n}/ handled by the hub, and /blog/rss.xml written at build by a Vite plugin (vite.config.ts). The launch rule is automatic: BLOG_LAUNCHED in src/content/blog/index.ts turns true once 3 posts are published.

1. Purpose and editorial rules
What the blog is for
Show the work behind the work. Capture days, problems solved, lessons learned. This is first-hand experience no competitor can copy, and it builds trust with buyers.
Show that RCAAS is active. New projects, launches, events, partnerships.
Give social media something worth sharing. Every post should be easy to share on LinkedIn and Facebook.
Feed the rest of the site. Lasting insights from posts move into Learn guides and case studies.
Editorial rules
Rule
Detail
Cadence
[[TBC: 1–2 posts per month]]. Pick a rhythm the team can keep.
Length
500–1,200 words. Shorter is fine for news.
First-hand only
Every post must include something only RCAAS knows: a photo from site, a real number, a decision, a lesson.
Original images
Your own photos and 3D stills. No stock images of other companies' work.
People in photos
Only with consent, or blurred. Extra care with children.
No filler
No mass-produced or AI-padded posts written for search engines. Google treats this as scaled content abuse, and readers notice.
Client permission
Name a client only with their permission.
Every post links somewhere
At least one link to a case study, service or industry page.
One owner
[[TBI: who edits and approves posts]]


2. URL structure
/blog/                          Blog hub (newest first)
/blog/{slug}/                   Post — no dates or categories in the URL
/blog/page/{n}/                 Pagination, only once there are more than 12 posts
/blog/rss.xml                   RSS feed

Categories are shown as labels and client-side filter chips on the hub. No separate category pages at launch (avoids thin, duplicate pages).
Slugs: short and descriptive, e.g. /blog/behind-the-capture-chilancho-stupa/.

3. Categories
Category
Label
What goes here
behind-the-capture
Behind the capture
Stories from site: how a project was captured, what was hard, what we learned
news
News
Launches, new projects, platform updates, team news
ideas
Ideas
Our point of view on immersive experiences, heritage, tourism, education and technology in Nepal
events
Events
Fairs, talks, exhibitions and workshops we've taken part in


4. Blog hub /blog/
Metadata
Field
Copy
Title tag
Blog: Stories from the Field | RCAAS Technology
Meta description
Stories from RCAAS Technology: behind-the-scenes capture days, project launches, ideas and events from our work turning real places into 3D experiences.
H1
Stories from the field
Breadcrumb
Home › Blog

Layout and copy
Hero H1: Stories from the field Intro: What happens when we capture a temple at dawn, a campus during holidays or a hotel between guests. Plus news, ideas and where you can find us next.
Filter chips: All · Behind the capture · News · Ideas · Events
Featured post (newest or pinned) Large card: hero image · category · title · 1–2 sentence summary · author · date · reading time · "Read the story →"
Post grid Cards: image · category · title · summary · date · reading time Order: newest first. 12 per page.
Sidebar or end block: Learn guides H2: Looking for straight answers? Line: Our guides explain 3D tours, Gaussian splatting and planning a project. Link: Visit Learn → /learn/
Follow block H2: Follow our work Line: We share capture days and new projects on [[TBI: LinkedIn, Facebook, Instagram, YouTube links]]. Link: RSS feed → /blog/rss.xml
Empty state (filter with no posts): No posts here yet. See all stories →
Schema
Blog (or CollectionPage) with blogPost → list of BlogPosting URLs; publisher → Organization @id; BreadcrumbList.

5. Post template /blog/{slug}/
#
Element
Copy / rule
1
Breadcrumbs
Home › Blog › {Post title}
2
Category label
e.g. "Behind the capture"
3
H1
Post title. Specific and human, ≤ 70 characters.
4
Summary
1–2 sentences under the title. Also used as meta description (140–160 characters).
5
Byline
"By {Name}, {Role} · {Published date} · {n} min read". Show "Updated {date}" only if meaningfully changed.
6
Hero image
Original photo or 3D still, 16:9, descriptive alt
7
Body
H2 subheads every 200–300 words; short paragraphs; images with captions; optional SplatEmbed or film facade
8
Related box
"From this story": linked case study, service or industry card(s)
9
Author box
Photo, name, discipline, one-line bio, link to /about/#team
10
Share
LinkedIn · Facebook · WhatsApp · Copy link
11
CTA band
Per category (below)
12
More from the blog
3 related posts (same category first)

CTA band by category
Category
H2
Button
Behind the capture
Want your place captured like this?
Plan your experience → /contact/?type=project
News
Want to work with us?
Get in touch → /contact/?type=project
Ideas
Have a place with a story to tell?
Plan your experience → /contact/?type=project
Events
Want us at your event or fair?
Talk to us → /contact/?type=partnership

Microcopy
Element
Copy
Related box heading
From this story
Author box heading
Written by
Share label
Share this story
More posts heading
More from the blog
Back link
← All stories

Metadata pattern
Field
Pattern
Title tag
{Post title} | RCAAS Blog (≤ 60 characters; shorten the title if needed)
Meta description
Post summary
OG image
Post hero image, 1200×630 crop
og:type
article

Schema BlogPosting: headline, description, image, datePublished, dateModified, author → Person @id, publisher → Organization @id, mainEntityOfPage, articleSection (category), about (place entity when the post is about a specific site); BreadcrumbList. Add 3DModel or VideoObject when the post embeds one.

6. Starter posts
Three to publish first (to meet the launch rule), then three more. Each is an outline plus the facts needed; titles are suggestions.
Post 1 — News
Title: Introducing RCAAS Technology: turning Nepal's places into experiences Angle: Who you are, why you started, what you create, and what's next. Outline:
Opening: the problem you saw ([[TBI: founding story]])
Two disciplines, one team: engineers and game developers
What we create: immersive experiences, storytelling, digital twins
Our first projects: Chilancho Stupa, two campuses, a boutique hotel (links)
What's next: platform early access, heritage work, partnerships
CTA: plan your experience / join early access Facts needed: founding story, founding year, team photo, permission to name clients.
Post 2 — Behind the capture
Title: Behind the capture: documenting Chilancho Stupa in 3D Angle: A day on site at a heritage monument: planning, permissions, ground and aerial capture, respect for the site, and what the record makes possible. Outline:
Why this stupa ([[TBI: significance]])
Before we arrived: permissions and planning ([[TBI]])
On site: laser scanning, drone flights, timing around visitors ([[TBI: real details]])
What was hard ([[TBI: e.g. light, crowds, fine carvings]])
From capture to record: what conservators and the public get
Embed: SplatEmbed of the stupa
Link: case study → /work/chilancho-stupa-digital-heritage/ Facts needed: date, team, methods, time on site, 4–6 photos, any lessons.
Post 3 — Ideas
Title: Why photos aren't enough to choose a school Angle: Families in Nepal often choose a school or college without visiting. What a 3D campus tour changes, drawn from your two campus projects. Outline:
The decision families face ([[TBC: observations from Nepathya and Madan Ashrit clients]])
What prospectus photos can't show
What we built for two institutions (links)
How schools can use a tour in admissions season
CTA → /industries/education/ Facts needed: client permission, any feedback or engagement figures.
Later posts
#
Category
Title idea
Needs
4
Behind the capture
Capturing a hotel between guests: how we work around occupancy
Basera details, photos, permission
5
News
Early access is open: put your space on our 3D platform
Platform name, features, sign-up link
6
Ideas
What the 2015 earthquake taught us about recording heritage
Your perspective; careful, respectful tone; sources for any facts
7
Events
[[TBI: first fair, talk or exhibition]]
Event name, date, photos


7. Spec addendum (apply to docs/SITE_SPEC.md)
§3.1 Sitemap — add:
├── /blog/                                   Blog hub (draft until 3 posts)
│   └── /blog/{slug}/                        Posts

Plus /blog/rss.xml and /blog/page/{n}/ (only when > 12 posts).
§3.3 Page register — add:
URL
Template
Intent
P
/blog/
Blog hub
—
P2
/blog/{slug}/
Post
varies
P2

§4.1 Navigation — About ▾ becomes: About us · How we work · Learn · Blog · FAQ · Partner with us · Contact (Blog link hidden while draft). §4.2 Footer — Company column: add Blog. §4.4 Internal linking — add: every post links to ≥ 1 case study, service or industry page; case studies may link back to their "Behind the capture" post.
§9.2 Repo — add:
src/content/blog/*.mdx
src/pages/blog/index.astro
src/pages/blog/[slug].astro
src/pages/blog/page/[page].astro     (when needed)
src/pages/blog/rss.xml.ts            (@astrojs/rss)

§9.3 Frontmatter — add blog collection:
title: string                 // H1, ≤ 70 chars
metaTitle?: string            // ≤ 60 chars incl. suffix
summary: string               // 140–160 chars, also meta description
category: 'behind-the-capture' | 'news' | 'ideas' | 'events'
author: reference('team')
published: date
updated?: date
heroImage: { src: string; alt: string }
featured?: boolean
relatedWork?: reference('work')[]
relatedServices?: reference('pillars' | 'capabilities')[]
relatedIndustries?: reference('industries')[]
draft: boolean

§8 SEO — add:
Posts use BlogPosting schema; hub uses Blog.
Posts are included in the XML sitemap with real lastmod; RSS feed linked in <head> (rel="alternate" type="application/rss+xml").
Paginated hub pages self-canonicalise; no category or tag pages.
llms.txt: list the blog hub only, not individual posts.
§10 Measurement — add: blog_share (+ network), and track posts as a traffic source for form_submit.
§13 Placeholder Register — add:
ID
Item
P
B01
Blog cadence and owner
H
B02
First 3 posts' facts and photos
B (for blog launch)
B03
Social profile links for follow block
H


Placeholders
B01 cadence and owner · B02 starter-post facts, photos and permissions · B03 social links · G10 founding story (Post 1) · W01–W04 project details (Posts 2–4) · P01 platform details (Post 5).
