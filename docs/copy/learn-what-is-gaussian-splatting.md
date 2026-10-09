Guide: What Is Gaussian Splatting?
For Claude Code: Final copy for /learn/what-is-gaussian-splatting/ (spec §6.11, guide template). Save as docs/copy/learn-what-is-gaussian-splatting.md. Why this page exists: Gaussian splatting is the technique behind RCAAS's photorealistic tours. People increasingly ask search engines and AI assistants what it is; a clear, honest answer from a practitioner earns citations and trust. Accuracy note: technical statements below are general and well established. Keep them conservative; do not add performance numbers unless they come from RCAAS's own projects. Publishing rule: the "From our projects" section needs real data (Register L02) before this guide goes live. Visible word count: ~1,200.

Page metadata
Field
Copy
Title tag
What Is Gaussian Splatting? A Plain Guide | RCAAS
Meta description
Gaussian splatting creates photorealistic 3D scenes you can explore in a browser. How it works, what it's good at, its limits, and how it compares to other 3D methods.
H1
What is Gaussian splatting?
Breadcrumb
Home › Learn › What is Gaussian splatting?
Byline
By [[TBI: author name, role]] · Published [[TBI]] · Updated [[TBI]] · [[auto]] min read


1. Direct answer
Short answer: Gaussian splatting (or 3D Gaussian splatting) is a way of creating photorealistic 3D scenes from photos or scans of a real place. Instead of building the scene from flat surfaces, it represents it as millions of tiny, soft, coloured points called Gaussians. The result looks like a photograph you can move around in, and it can be explored in real time, even in a web browser.

2. How it works, in plain words
H2: How it works
Body: Imagine describing a room not with walls and textures, but with millions of tiny, slightly blurred blobs of colour floating in space. Each blob has a position, a size, a shape, a colour and a level of transparency. Seen together from any angle, they blend into a convincing image of the room.
Creating a Gaussian splat scene follows three broad steps:
Step
What happens
1. Capture
The place is photographed or scanned from many angles. Laser scanning can add accurate geometry.
2. Training
Software places the Gaussians and adjusts them until, from every captured angle, the scene matches the real photos as closely as possible.
3. Viewing
The finished scene is displayed by "splatting" the Gaussians onto the screen, fast enough to move through it in real time.

The technique became widely known through a 2023 research paper on real-time rendering of radiance fields, and it has since been adopted by many reality capture tools and platforms.

3. What it's good at
H2: What Gaussian splatting is good at
Photorealism. Light, colour, reflections and fine textures look natural, not like a computer model.
Hard-to-model detail. Foliage, carvings, fabric and cluttered interiors that are difficult to turn into clean surfaces.
Real-time exploration. Scenes can be explored smoothly in a browser or VR headset.
Speed from capture to result. No one has to model the place by hand.

4. Its limits
H2: Its limits, honestly
Best near where it was captured. Views far from the captured angles can look blurry or show stray artefacts. Good capture planning matters.
Large files. Scenes can be heavy, so they are best loaded only when someone chooses to open them.
Not a measured model on its own. A splat scene is built for looks. For reliable measurements, it needs to be paired with laser scanning or survey control.
Harder to edit. Changing part of a scene is less straightforward than editing a traditional 3D model.
Tricky surfaces. Mirrors, glass and moving objects can be difficult.

5. How it compares
H2: Gaussian splatting vs other 3D methods


Photogrammetry mesh
Laser scan point cloud
Gaussian splatting
What it produces
A surface model with textures
Millions of measured points
Millions of soft, coloured Gaussians
Looks
Good, can look flat or melted on fine detail
Technical, not photographic
Photorealistic
Measurement
Possible, depends on control
Strongest
Limited on its own
Best for
Models for CAD and 3D printing
Design, survey and engineering
Visual experiences and tours
Runs in a browser
Yes
Possible, often heavy
Yes, in real time

Body: These methods work best together. At RCAAS, we pair laser scanning for accuracy with Gaussian splatting for the visual experience, so a tour is both beautiful and true to the real size and layout of the place.

6. Where it's used
H2: Where it's used
Use
Why splatting fits
Hotel and property tours
Guests and buyers see the real atmosphere, not a rendering
Campus tours
Families explore classrooms, labs and grounds as they really are
Heritage sites and museums
Carvings, textures and settings are preserved photographically
VR experiences
Real places become immersive scenes for headsets
Films and renders
Camera moves through a photorealistic scene, from one capture

Links: 3D virtual tours → /services/immersive-experiences/3d-virtual-tours/ · Our platform → /platform/

7. From our projects #from-our-projects
H2: What we've learned using it
[[TBI — required before publishing. Use real RCAAS observations, for example:
capture time for a typical room, campus or heritage site
typical scene size and how it loads on mobile in Nepal
what worked well (e.g. carvings at Chilancho Stupa) and what was hard (glass, crowds, low light)
how laser scanning improved the result]]

8. Common questions
H2: Common questions
Q: Is Gaussian splatting the same as a 360° photo? No. A 360° photo is a panorama seen from one point. A Gaussian splat scene is a full 3D scene you can move through and view from any angle.
Q: Is it the same as NeRF? They are related. Both create photorealistic 3D scenes from images. NeRF uses a neural network to represent the scene, while Gaussian splatting uses explicit Gaussians, which makes real-time viewing much more practical.
Q: Can I measure from a Gaussian splat scene? Not reliably on its own. For measurements, the scene should be combined with laser scanning or survey control, which is how we work.
Q: Does it need special software to view? No. Scenes can be viewed in a modern web browser on a phone, tablet or computer. VR needs a headset.

9. CTA band
H2: See Gaussian splatting for yourself Body: Explore a photorealistic 3D scene captured by our team, then tell us about the place you'd like to show. Primary CTA: Try the live demo → /platform/#demo Secondary CTA: Plan your experience → /contact/?type=3d-tour

Sources
Kerbl, B., Kopanas, G., Leimkühler, T. and Drettakis, G. (2023). 3D Gaussian Splatting for Real-Time Radiance Field Rendering. ACM Transactions on Graphics (SIGGRAPH 2023). https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/
[[TBI: any other sources used]]
Schema notes
Article (headline = H1, author → Person @id, publisher → Organization, dates, image, about: "Gaussian splatting"); FAQPage from section 8; BreadcrumbList.
Placeholders
L01 author · L02 project observations · dates.
