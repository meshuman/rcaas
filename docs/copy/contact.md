Contact (+ Thank-you and 404)
For Claude Code: Final copy for /contact/ (spec §6.14), plus /thank-you/ and the custom 404 (spec §6.15). Save as docs/copy/contact.md. Form principle: ask about the goal first, then the place. Keep required fields to the minimum. Visible word count: ~550 (contact page).

Page metadata
Field
Copy
Title tag
Plan Your 3D Experience | Contact RCAAS Technology
Meta description
Tell RCAAS Technology about your place and your goal. We'll suggest the right 3D tour, VR, film or survey and send a clear proposal. Based in Kathmandu.
H1
Tell us about your place and your goal.
Breadcrumb
Home › Contact


1. Intro
H1: Tell us about your place and your goal. Body: Share where your place is, what you'd like to create and what you want people to do after they see it. We'll reply with ideas and a clear proposal.

2. Form #form
#
Label
Type
Required
Notes
1
Your name
Text
Yes


2
Email
Email
Yes


3
Phone or WhatsApp
Tel
No
Helper: "Include country code if outside Nepal."
4
Organisation
Text
No


5
What do you want to achieve?
Select
Yes
Options below; preselect from ?type=
6
What kind of place is it?
Select
No
Hotel or resort · School, college or university · Property · Heritage site or museum · Public space or municipality · Office or venue · Other
7
Location
Text
No
Placeholder: "e.g. Lalitpur, Pokhara"
8
Approximate size
Text
No
Placeholder: "e.g. 20 rooms, 2 floors, 1 hectare"
9
When do you need it?
Select
No
As soon as possible · Within 1 month · 1–3 months · Just exploring
10
Budget range
Select
No
[[TBC: include? If yes, ranges in NPR]]
11
Tell us more
Textarea
Yes
Placeholder: "What should people feel, see or do?"
12
Consent
Checkbox
Yes
"I agree to RCAAS Technology contacting me about my enquiry. See our Privacy Policy." (link /privacy/)
—
Honeypot
Hidden
—
Spam trap; plus time-trap

Field 5 options and ?type= mapping
Option label
?type= values that preselect it
More bookings or visits
hospitality, 3d-tour, immersive
More applications or enrolments
education
Sell or lease property
real-estate
Design or renovation data
digital-twin, laser-scanning
Mapping or survey
drone-mapping, government
Preserve heritage
heritage, research
Films or storytelling
storytelling
Platform early access
platform
Partnership
partnership
Something else / a question
project, question, default

Button: Send my enquiry Sending state: Sending… Error: We couldn't send your message. Please try again, or email us at [[TBI: email]]. On success: redirect to /thank-you/ Submits to: [[TBI: form handler]] · Event: form_submit with goal = field 5 value

3. Side panel #direct
H2: Prefer to talk?




WhatsApp
[[TBI: number + wa.me link]]
Phone
[[TBI]]
Email
[[TBI]]
Office
[[TBI: full address]], Kathmandu, Nepal
Hours
[[TBI: e.g. Sunday–Friday, 10:00–18:00 NPT]]

Response line: We reply within [[TBI: response time]].
Map: static map image linking to Google Maps [[TBI: Maps URL]] · Alt: Map showing the RCAAS Technology office in Kathmandu
Build note: NAP must match the footer, Google Business Profile and Organization schema exactly. Phone/WhatsApp/email links fire phone_click, whatsapp_click, email_click.

4. What happens next
H2: What happens next
Step
Line
1
We read your enquiry and reply within [[TBI]], often with a few questions.
2
We discuss your goal, your place and your audience, by call or a short site visit.
3
We send a clear proposal with scope, timeline and price.


5. Partners and researchers
Line: Exploring a partnership, joint venture or research project? Choose "Partnership" above, or read how we work with partners → /about/#partner

Schema notes (contact)
ContactPage; Organization contactPoint (contactType "sales", telephone, email, availableLanguage ["English", "Nepali"]); BreadcrumbList.

/thank-you/ (noindex)
Field
Copy
Title tag
Thank You | RCAAS Technology
Meta robots
noindex, follow
H1
Thank you. We've got your message.

Body: We'll reply within [[TBI: response time]]. In the meantime, step inside some of our work. Primary CTA: Explore our work → /work/ Secondary CTA: Chat on WhatsApp → [[TBI: wa.me link]]

Custom 404
Field
Copy
Title tag
Page Not Found | RCAAS Technology
H1
This place hasn't been captured yet.

Body: The page you're looking for doesn't exist or has moved. Try one of these instead: Links: Home → / · What we create → /services/ · Our work → /work/ · Contact → /contact/

Placeholders
G06 phone, WhatsApp, email, address, hours, Maps URL · G14 response time · G11 form handler · G18 budget field.
