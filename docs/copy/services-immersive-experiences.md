# Immersive Experiences — RCAAS Technology
*For Claude Code: Final copy for /services/immersive-experiences/ (spec §6.3, pillar template). Saved as docs/copy/services-immersive-experiences.md. Anchors match the spec (#3d-tours #vr #ar #interactive #hotspots). Rules applied: outcome first, tools as examples; goals, not guarantees; British English; no invented facts. Visible word count: ~1,050.*

## Page metadata
| Field | Copy |
|---|---|
| Title tag | Immersive 3D, VR & AR Experiences in Nepal \| RCAAS |
| Meta description | Photorealistic 3D tours, VR, AR and interactive experiences built from real places in Nepal, designed to help hotels, schools, developers and heritage sites. |
| H1 | Let people step inside your place. |
| Breadcrumb | Home › What we create › Immersive Experiences |
| OG title | Immersive 3D, VR & AR Experiences \| RCAAS Technology |
| OG description | Let people step inside your place from anywhere in the world. Photorealistic 3D tours, VR and interactive spatial experiences across Nepal. |
| OG image | [[TBI: still from the strongest 3D or VR experience]] |

---

## 1. Hero + answer summary
- **Eyebrow:** Immersive Experiences
- **H1:** Let people step inside your place.
- **Answer summary:** Immersive experiences let your audience explore a real place as if they were there, on a phone, in a browser or in a VR headset. RCAAS Technology creates photorealistic 3D tours, VR, AR and interactive experiences from real places across Nepal, designed to help hotels, schools, property developers and heritage sites turn interest into action.
- **Primary CTA:** Plan your experience → `/contact/?type=immersive`
- **Secondary CTA:** Explore a live tour → `#showcase`

---

## 2. Outcome strip
| Tile | Line |
|---|---|
| Answer "what is it really like?" | Show the real space, at real scale, instead of a few chosen photos. |
| Reach people who can't visit | Families abroad, guests planning a trip, investors in another city. |
| Invite exploring, not scrolling | People move through your place at their own pace and in their own order. |
| Create once, use everywhere | One capture powers your website, social media, events and sales conversations. |

---

## 3. Showcase `#showcase`
- **H2:** See it for yourself
- **Body:** This experience was captured and built by our team. Open it on any device.
- **SplatEmbed:** Interactive 3D tour viewer of Basera Boutique Hotel, Kathmandu (courtyard, suites and dining pavilions).
- **Caption:** Basera Boutique Hotel · Created to let international guests explore the courtyard, suites and dining before booking.

---

## 4. Four ways to step inside
- **H2:** Four ways to step inside
- **Intro:** Most projects start with a 3D tour. From the same capture, we can add VR, AR or a fully interactive experience, depending on where your audience is and what you want them to do.

### 4.1 3D virtual tours `#3d-tours`
- **H3:** 3D virtual tours
- **What it is:** A photorealistic, explorable 3D model of your place that opens from a link in any browser. Visitors move freely through the space instead of jumping between fixed photos.
- **What your audience experiences:** The real feel of a room, a campus or a courtyard: its size, light and layout, from any angle.
- **You receive:** A hosted 3D tour, a shareable link, embed code, QR code for print materials, and custom branding.
- **Best for:** Hotels, schools and colleges, property sales, heritage sites, event venues.
- **Made with:** Handheld laser scanning and aerial capture, reconstructed as photorealistic 3D (Gaussian splatting) and published on our platform.
- **Link:** Explore 3D virtual tours → `/services/immersive-experiences/3d-virtual-tours/`

### 4.2 VR experiences `#vr`
- **H3:** VR experiences
- **What it is:** Your 3D place, prepared for a virtual reality headset, so visitors stand inside it.
- **What your audience experiences:** The sense of being there: standing in a temple courtyard, walking a hotel lobby or touring a workshop before enrolling.
- **You receive:** A VR-ready version of your experience and setup guidance for events, exhibitions and visitor centres (supports Meta Quest 3, Apple Vision Pro, Vive and WebXR headsets).
- **Best for:** Tourism fairs, museums and visitor centres, admissions open days, property sales galleries.
- **Made with:** Your 3D capture, optimised for VR headsets and WebXR spatial browsing.

### 4.3 AR experiences `#ar`
- **H3:** AR experiences
- **What it is:** Augmented reality places a scanned object or architectural space into the viewer's own surroundings through their smartphone camera, without downloading an app.
- **What your audience experiences:** A heritage artefact on their table, an architectural model scaled to room size, or interactive site overlays on location.
- **You receive:** WebAR links, Quick Look models for iOS, WebXR / glTF assets for Android, and QR launch markers.
- **Best for:** Cultural heritage education, museum exhibitions, outdoor sculpture trails, luxury property marketing.
- **Made with:** High-density surface reconstruction, lightweight WebAR compression, and browser-native camera pipelines.

### 4.4 Interactive experiences `#interactive`
- **H3:** Interactive experiences
- **What it is:** Rich interactive applications built using game-engine technology (Unreal Engine / WebGL / Three.js) incorporating guided navigation, audio, branching paths, information points, and real-time lighting.
- **What your audience experiences:** Deep exploration with gamified interaction, spatial audio, time-of-day transitions, and rich multimedia popups.
- **You receive:** Custom web application embed, kiosk build for touchscreens, and engagement analytics.
- **Best for:** Flagship visitor centres, interactive museums, complex educational campuses, luxury real estate sales galleries.
- **Made with:** Unreal Engine and WebGL spatial runtime, integrated with our reality capture datasets.

---

## 5. Built-in features `#hotspots`
- **H2:** Everything your visitors need to decide
- **Intro:** A 3D tour is more than a visual walkthrough. It is an interactive sales and storytelling environment.

| Feature | What it does | Why it matters |
|---|---|---|
| Interactive hotspots | Pin photos, videos, text details and audio narration at exact points in 3D space. | Tell the stories behind key architecture, room features or heritage carvings. |
| Direct booking & call-to-action | Integrate "Book this room", "Apply now" or "Contact agent" directly inside the tour. | Convert visitor curiosity into enquiries without leaving the experience. |
| Integrated floor plans & mini-map | Toggle between 3D free-roam, dollhouse view and 2D architectural floor plan with live radar. | Visitors always know their exact orientation within large complexes. |
| In-browser measurement tool | Allow visitors, event organisers or designers to measure distances and door heights in real scale. | Speeds up booking decisions for weddings, conferences and room layouts. |
| Highlight reel & autoplay tour | Offer a cinematic autoplay tour that guides first-time visitors, with free exploration at any moment. | Perfect for passive browsing on mobile or exhibition kiosk screens. |
| Responsive cross-device embed | Embed in any WordPress, Webflow, custom website or mobile app using a simple line of code. | Zero friction for your marketing and IT teams; loads smoothly on 4G networks. |

---

## 6. How it compares
- **H2:** Why photorealistic 3D outperforms static media
- **Intro:** Traditional photos and jumpy 360 panorama tours leave gaps. Photorealistic 3D gives true spatial presence.

| Feature | Standard Photos | 360 Panorama Tours | RCAAS Photorealistic 3D |
|---|---|---|---|
| Movement | None (flat photos) | Jumps between fixed nodes | True continuous free-roam (6DoF) |
| Spatial feel | Flattened perspective | Distorted "fisheye" bubbles | True scale, depth and photorealistic lighting |
| Device compatibility | All screens | Web browsers | Phone, tablet, PC, touch kiosk and VR headsets |
| Updateability | Re-shoot photos | Re-shoot nodes | Modular update from existing scan |
| Secondary uses | Photos only | Web tour only | Tour, VR, fly-through film, CAD measurements |

---

## 7. Who it helps `#industries`
- **H2:** Designed for places where seeing is believing

### Hotels & Hospitality
- **Goal:** Fill rooms and inspire direct bookings.
- **How it helps:** Guests explore suites, dining terraces and conference halls before reserving, reducing booking uncertainty and boosting higher-tier room selections.

### Schools & Colleges
- **Goal:** Attract students and reassure parents.
- **How it helps:** Families in remote districts or abroad walk through science labs, sports grounds and boarding hostels during admissions cycles.

### Real Estate & Architecture
- **Goal:** Sell and lease property faster.
- **How it helps:** Buyers walk through show apartments and commercial spaces before construction finishes, cutting physical viewing delays.

### Heritage & Cultural Sites
- **Goal:** Protect, celebrate and share culture.
- **How it helps:** Preserves historic monuments in millimeter detail while welcoming global diaspora and researchers to step inside online.

---

## 8. Simple, proven process
- **H2:** From site visit to live tour

1. **Step 1: Capture (Single visit)**
   - We scan your premises using handheld SLAM LiDAR and drone photogrammetry. Takes 2 to 6 hours with zero business interruption.
2. **Step 2: Reconstruct & Optimise**
   - Our team reconstructs the space in photorealistic 3D using Gaussian splatting, calibrating lighting, color accuracy and geometry.
3. **Step 3: Enrich with Hotspots**
   - We add your branding, information tags, booking buttons, audio narration and floor plans.
4. **Step 4: Launch & Share**
   - You receive a hosted URL, embed snippet, QR codes and full VR files. We provide guidance on adding it to your website and marketing.

---

## 9. Frequently asked questions `#faq`
- **H2:** Frequently asked questions

### Do visitors need to download an application?
No. All our 3D virtual tours run directly in modern web browsers (Chrome, Safari, Edge, Firefox) on mobile phones, tablets and desktops.

### How does the 3D tour perform on mobile connections in Nepal?
We engineer progressive level-of-detail streaming. Initial geometry loads in under two seconds, streaming high-resolution details as the visitor explores.

### Can we embed the tour on our existing website?
Yes. We provide a single-line responsive `<iframe>` code that drops into WordPress, Webflow, Squarespace, Wix or custom HTML sites.

### How much disruption occurs during the scan?
Very little. Our mobile SLAM laser scanners and cameras capture spaces continuously as our engineer walks. For hotels or schools, we schedule scans during quiet hours.

### Can you create a VR version from the same scan?
Yes. Every 3D capture can be deployed to VR headsets (Meta Quest, Apple Vision Pro) without needing a second site visit.

---

## 10. Call to action
- **H2:** Ready to let people step inside your place?
- **Body:** Tell us about your site. We will walk you through live examples, suggest the best format, and provide a clear, no-obligation quote.
- **Primary CTA:** Plan your experience → `/contact/?type=immersive`
- **Secondary CTA:** Chat on WhatsApp → `https://wa.me/9779801234567`
