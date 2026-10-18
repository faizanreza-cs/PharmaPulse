# Spec: PDF Narrator (working name)

An Android app that reads technical books aloud: the prose word for word, the code and diagrams explained. Free for everyone, built only on open-source tools, paid for by Google ads. See [MISSION.md](MISSION.md) for the promises behind it.

Status: draft v0.3, nothing built yet · 2026-10-18

Changed in v0.3:
- Decisions made:
  - An opt-in rewarded ad unlocks Walkthrough explanations for one book.
  - Full mode needs 6 GB of RAM (the spike confirms the number).
  - The code lives in its own private repo; open-sourcing is decided at launch.
- New Design Direction section: a premium, calm look inspired by Xodo's reader experience.

Changed in v0.2:
- The app is free.
- All AI and voice work runs on the phone with open-source models.
- Revenue comes from Google AdMob. AdSense doesn't allow ads inside apps.

## Problem Statement

People who learn from technical books (developers, students, engineers) want to keep learning when they can't look at a screen: commuting, walking, doing chores, or resting their eyes. Read-aloud apps exist, but they read everything literally. Code comes out as a stream of symbols ("open bracket, user, dot, get…"), diagrams are skipped without a word, and running headers, page numbers and footnote markers interrupt every page. That makes them close to unusable for exactly the books where listening would help most.

Tools that explain documents (podcast-style summaries) go the other way: they replace the author's words entirely, so you lose the book itself. Nothing reads the prose as written and explains only the parts that only make sense on the page.

## Solution

An Android app that opens a PDF and narrates it the way a narrator who knows tech would:

- Prose is read word for word, in a natural, human-sounding voice.
- Code listings, diagrams, tables and equations are explained briefly, in the context of the chapter, instead of being read literally.
- Headers, footers, page numbers, the index and similar page furniture are skipped.

Each book is prepared once: the app sorts every part of every page and an AI writes the explanations. After that it plays like an audiobook: in the background, with the screen off, with lock-screen and headset controls. With the screen on, the PDF follows along with the current sentence highlighted, and any passage can be explained on demand.

Everything runs on the phone with open-source AI and voice models, so the app is free, works offline, and books never leave the device. Google ads pay for it. They appear only on screens people are already looking at, never inside the audio.

It should feel premium: fast, calm and polished, never cluttered or boring.

## User Stories

Stories marked *(later)* are planned but not in the first version.

### Getting started

1. As a new user, I want to hear a short demo narration of a sample page (one we write ourselves, with a code listing and a diagram) before importing anything, so that I understand the app in under a minute.
2. As a new user, I want the app to check what my phone can handle and recommend Full or Lite mode, so that it runs well on my phone.
3. As a reader, I want to download the AI and voice packs once, on Wi-Fi, with their sizes shown first, so that everything works offline afterwards.
4. As a reader with an older or low-memory phone, I want a Lite mode that uses the phone's built-in voice and reads captions instead of AI explanations, so that I can still use the app.

### Home and library

5. As a reader, I want a "Continue listening" card at the top of the home screen, so that getting back to my book takes one tap.
6. As a reader, I want to import a PDF from my phone, Downloads or Google Drive through the system file picker, so that I can listen to books I already own.
7. As a reader, I want to open a PDF from another app with "Open with" or "Share", so that adding a book takes one tap.
8. As a reader, I want the title, author, cover and chapter list filled in from the PDF automatically, so that I don't have to type anything.
9. As a reader, I want my library as a grid of covers or a list, filtered by All, In progress, Ready and Finished, so that I can find a book at a glance.
10. As a reader, I want to see how much storage each book and each AI or voice pack uses, and delete them, so that I can manage space on my phone.
11. As a reader, I want to be told clearly when a PDF is a scan with no text, so that I know it isn't supported yet instead of getting bad narration.

### Reading on screen

12. As a reader, I want to read the PDF with smooth scrolling and pinch-to-zoom, in continuous or single-page mode, so that the app is also a good PDF reader.
13. As a reader, I want the controls to hide while I read and come back with a tap, so that the page gets the whole screen.
14. As a reader, I want a Text view that reflows the page into phone-sized text with code and figures in place, so that I can read comfortably on a small screen.
15. As a reader, I want Light, Sepia and Dark page colours, so that reading is comfortable at any time of day.
16. As a reader, I want a page scrubber and a grid of page thumbnails, so that I can find a page fast.
17. As a reader, I want to jump to any chapter from the book's outline, so that I can move around quickly.
18. As a reader, I want to search the book's text, so that I can find a topic.
19. As a reader, I want the app to remember my page and listening position across restarts, so that I never lose my place.
20. As a reader, I want to bookmark pages, so that I can return to important parts.

### Preparing a book for listening

21. As a reader, I want to see how long preparing a book will take on my phone before it starts, so that I can plan around it.
22. As a reader, I want the first chapter ready quickly (target: under 10 minutes on a mid-range phone), so that I can start listening soon.
23. As a reader, I want the rest of the book prepared in the background, by default only while my phone is charging, so that it doesn't drain my battery.
24. As a reader, I want preparation to pause when the battery is low or the phone gets hot, and carry on later by itself, so that it never harms my phone.
25. As a reader, I want to prepare only the chapters I choose, so that I don't wait for parts I'll skip.
26. As a reader, I want to see preparation progress per chapter, so that I know what's ready to play.
27. As a reader, I want a part that fails to prepare to be read word for word with a short spoken note, so that one bad page never blocks the book.

### What gets read, and how

28. As a listener, I want the body text read word for word in the right order (columns, sidebars, sentences that cross a page break), so that I hear exactly what the author wrote.
29. As a listener, I want running headers, footers, page numbers, line-end hyphens and footnote markers removed, so that the narration flows like an audiobook.
30. As a listener, I want the copyright page, table of contents and index skipped automatically, so that listening starts at the content.
31. As a listener, I want chapter and section headings announced with a short pause, so that I can follow the book's structure by ear.
32. As a listener, I want each code listing explained in plain speech (what it does and why it matters at this point) instead of read symbol by symbol, so that I understand the code without seeing it.
33. As a listener, I want code names inside a sentence spoken naturally ("get user by ID" for `getUserById`), so that sentences stay easy to follow.
34. As a listener, I want diagrams and figures described and explained (what they show and the point they make), so that I don't miss content that only exists as a picture.
35. As a listener, I want tables summarized (what's being compared and the takeaway), so that I get the point without hearing every cell.
36. As a listener, I want equations read the way a teacher would say them, and explained when they're complex, so that I can follow the maths by ear.
37. As a listener, I want notes, tips and warnings announced as such ("Tip: …"), so that I know they're asides.
38. As a listener, I want footnotes skipped by default, with an option to hear them at the end of the paragraph, so that they don't break the flow.
39. As a listener, I want a short sound and a slightly different voice for the app's explanations, so that I always know what's the author and what's the app.
40. As a listener, I want explanations short by default and connected to what the chapter just covered, so that they help instead of interrupting.
41. As a listener, I want to choose the explanation level (Skip, Brief, or Walkthrough, which goes through code step by step), so that I control the depth.
42. As a listener, I want separate settings per content type (for example, explain diagrams but skip code), so that it fits how I learn.
43. As a listener, I want tech terms pronounced correctly ("kubectl", "nginx", "SQL", "JSON") and the ability to fix any word myself, so that the narrator sounds like an engineer.

### Voice and playback

44. As a listener, I want a natural, human-sounding voice that runs on my phone, with a few voices to choose from, so that hours of listening stay pleasant without paying anything.
45. As a listener, I want to switch to my phone's built-in voice at any time, so that I can trade voice quality for speed and battery.
46. As a listener, I want a mini player on every screen that expands into a full player, so that playback controls are always one tap away.
47. As a listener, I want speed control from 0.5× to 3× that keeps the voice natural, so that I can listen at my own pace.
48. As a listener, I want play/pause, skip back and forward, previous/next paragraph and previous/next chapter, so that I can move around by ear.
49. As a listener, I want playback to keep going with the screen off, with lock-screen, notification and Bluetooth headset controls, so that it works like any audiobook app.
50. As a listener, I want playback to pause for phone calls, get quieter for navigation prompts, and pause when headphones disconnect, so that it behaves like a well-made audio app.
51. As a listener, I want a sleep timer (a number of minutes, or end of chapter), so that I can listen in bed.
52. As a listener, I want everything to work offline once a book is prepared, so that I can listen on a plane or underground.

### Listening along on screen

53. As a reader, I want the sentence being read highlighted on the page, with the page following along, so that I can switch between reading and listening.
54. As a reader, I want to tap any paragraph to start narration from there, so that I can jump to what I'm looking at.
55. As a reader, I want the page to show the listing or figure while its explanation plays, so that I can glance at it when I'm able to.
56. As a reader, I want to select any passage, listing or figure and ask for an explanation, so that I get help exactly where I'm stuck.

### Free, with ads

57. As a reader, I want the app free with no subscription and no sign-up, so that anyone can use it.
58. As a listener, I want ads never to interrupt or play inside the narration, so that listening stays uninterrupted.
59. As a reader, I want ads only in places I'm already looking (my library, the preparation screen, a natural break with the screen on), so that the app never feels spammy.
60. As a reader, I want the option to watch a short ad to unlock Walkthrough explanations for a book, so that I get the deeper explanations without paying and decide when I see ads.
61. As a reader in the EU or UK, I want a clear choice about personalised ads when I first open the app, so that my privacy rights are respected.

### Privacy and settings

62. As a reader, I want my books, narrations and audio never to leave my phone, so that my library stays private.
63. As a reader, I want a plain-language privacy screen saying what the ads collect and that my books are never uploaded, so that I know exactly what's shared.
64. As a reader, I want to flag a bad explanation or misread passage and have it redone, so that the book gets better as I listen.
65. As a blind or low-vision reader, I want every control, including ads, to work with TalkBack and follow the system text size, so that I can use the app without sight.

### Later

66. *(later)* As a listener, I want to ask a question out loud ("wait, what's a closure?") and hear the answer before narration carries on, so that I can learn hands-free.
67. *(later)* As a listener coming back after a break, I want a short "previously…" recap of the chapter so far, so that I can pick up the thread.
68. *(later)* As a listener, I want to save a note by voice while listening, so that I can capture ideas hands-free.
69. *(later)* As a reader, I want scanned PDFs and EPUB books supported, so that my whole library works.
70. *(later)* As a listener, I want explanations in my own language while the book is read in its original language, so that hard parts are easier to follow.
71. *(later)* As a reader, I want my library and progress synced across devices, so that I can switch between phone and tablet.
72. *(later)* As a listener, I want to use the app from Android Auto, so that I can listen safely while driving.

## Design Direction (UI and UX)

The goal is premium and calm, never boring. The reference is Xodo's reader experience: clean home screens with thumbnail grids, a fast viewer, reflowed text, night mode, a quick outline. We borrow the feel, not the look: no Xodo names, icons, assets or exact layouts.

### Look

- Material 3 with our own theme instead of the default look:
  - one brand accent (proposal: deep teal), used only for primary actions, progress and the read-along highlight;
  - one neutral grey family;
  - warm "paper" surfaces in light mode, true dark in dark mode.
- Open-source fonts under the SIL Open Font License: Inter for the interface, Literata for Text view, JetBrains Mono for code.
- One corner-radius scale (for example: buttons fully rounded, cards 16 dp, sheets 28 dp) and one icon set (Material Symbols Rounded).
- Depth comes from tonal surfaces, with soft shadows only on things that float (the player, sheets).
- Book covers are the hero: large and crisp. The full player's background takes its colours from the cover.

### Key screens

1. **Home.** A large "Continue listening" card (cover, chapter, progress, one-tap play) above the library: a grid of covers, switchable to a list, with filter chips (All, In progress, Ready, Finished) and an "Add book" button.
2. **Book viewer.** Opens edge to edge. A tap shows or hides the top bar (back, title, search, view options) and the bottom page scrubber (page bubble, chapter marks). View options: Continuous or Single page; Text view (reflowed text with code and figures in place); Light, Sepia or Dark page colours. Sheets hold the outline, page thumbnails and bookmarks.
3. **Player.** A mini player docked at the bottom of every screen expands into a full player. The full player has:
   - a large cover;
   - the chapter and section;
   - a scrubber with chapter marks;
   - play/pause with 15-second skips, and previous/next chapter;
   - chips for speed, sleep timer and voice.

   While an explanation plays, a pill in the accent colour says, for example, "Explaining Figure 3.2".
4. **Read-along.** The sentence being read sits under a soft, rounded highlight that glides to the next sentence instead of jumping. The page keeps it in the upper third of the screen. If the reader scrolls away, following pauses and a "Back to narration" pill appears.
5. **Preparation.** A calm per-chapter timeline (queued, preparing, ready) with the time left and a "waiting for the charger" state. The banner ad lives here, laid out as part of the design.
6. **Onboarding.** Three short steps: what the app does (with the demo narration), the phone check (Full or Lite), and the AI and voice pack download.

### Motion and feel

- Shared-element transitions: a cover grows from the library into the viewer and into the player.
- Sheets and the player move with springs, follow the finger, and can be flung.
- Press feedback is immediate. Small haptic ticks mark the scrubber crossing a chapter.
- Smooth at the screen's full refresh rate (60–120 Hz), measured on a release build on the mid-range reference phone.
- Respects the system setting that removes animations.
- Material 3 Expressive motion and shapes are adopted once they're stable in Compose. Until then, our own motion settings give the same feel.

### States and ads

- Every screen has designed empty, loading and error states. The empty library shows one clear action ("Add your first book"). Loading uses placeholders shaped like the real content.
- Ads look intentional, are always labelled "Ad", and sit well away from playback controls so nobody taps one by accident.

### Accessibility

- TalkBack labels on every control, touch targets of at least 48 dp, text contrast that meets WCAG AA in all three page colours, and layouts that hold up at the largest system font size.

## Implementation Decisions

### Platform and licences

- Native Android app in Kotlin with Jetpack Compose. Lite mode runs on Android 8.0 and up. Full mode is offered on phones with 6 GB of RAM or more; the spike confirms the number.
- No server, no paid APIs, no API keys. All processing happens on the phone.
- The code lives in its own private repository, `pdf-narrator`. Whether to open-source it (for example, under Apache-2.0) is decided at launch.
- Open-source components only, under permissive licences (Apache-2.0, MIT, BSD, and the SIL Open Font License for fonts). The app also ships Google's closed-source ads SDK, so GPL and AGPL components are avoided. They could force the whole app to be released under the GPL, and they don't mix with a closed SDK. Known traps:
  - MuPDF (AGPL);
  - espeak-ng (GPL), which many open voices use to work out pronunciation.
- The only closed parts are Google's free AdMob and consent SDKs (needed for ads) and Android's built-in text-to-speech (a system service, not bundled). The app ships on Google Play. F-Droid doesn't list apps with closed ad SDKs.

### Modules

Each module hides a lot of work behind a small interface.

1. **Design system.** One Compose theme (colours, type, shapes, motion) and a small set of shared components: cover card, mini player, sheets, page scrubber, chips. Screens are built only from these, so the app stays consistent.
2. **Device check and packs.** On first run, checks memory and chip and recommends Full or Lite mode. Downloads the AI and voice model packs into app storage: Wi-Fi by default, resumable, checksum-verified, sizes shown first. Packs are versioned so better models can replace them later.
3. **Library.** Imports PDFs through the system file picker and copies them into app storage. Reads metadata and the PDF outline. Tracks progress, bookmarks and storage per book in a local database.
4. **PDF engine.** Renders pages and thumbnails with Android's built-in PDF renderer. Extracts text with on-page positions and font names using a PDF parsing library (candidate: PdfBox-Android, Apache-2.0; confirm in a spike). Crops figures as images.
5. **Book preparation (the core).** Takes a book or chapter range and produces a Narration Script for each chapter:
   - *Sort the page, with rules.* Rules handle reading order across columns; headers and footers (text repeated at the same spot on many pages); page numbers; line-end hyphens; front and back matter (from the outline); code (fixed-width fonts, shaded boxes, "Listing 3.2" captions); figures (embedded images or dense drawings with "Figure 3.2" captions); tables; equations; callouts; footnotes.
   - *Explain, with an open model on the phone.* An open-weight vision-language model runs through an open-source runtime (candidate: llama.cpp, MIT). Candidate models, all Apache-2.0 per their model cards (verify each):
     - MiniCPM-V 4.6 (1.3B);
     - Qwen3-VL 2B or 4B;
     - SmolVLM2.

     The spike picks the smallest one that explains well enough and runs fast enough on a mid-range phone. Gemma models are excluded: their terms are not an open-source licence.
   - *One small job per segment.* Each listing, figure, table or equation is one job, with the nearby paragraphs as context. Small models do better with short, focused input, and small jobs can pause and resume. Walkthrough explanations are generated only when the listener picks that level.
   - *Quality guard.* An explanation that's empty, too long or repetitive is replaced by the fallback below. Prompts tell the model to describe only what's on the page.
   - *Fallback (also Lite mode).* No AI. A figure, table or equation gets its caption read. A code listing gets "A 25-line code listing: <caption>. It's shown on screen."
6. **Narration Script.** The contract between preparation and playback, and the source for Text view: an ordered list of segments. Each segment has a type, source page and on-page rectangles (for highlighting), the text to speak (the author's words or an explanation), and a flag for explanations. It carries a version number so books can be re-prepared when models improve.
7. **Speech.** An open-source neural voice running on the phone (candidate: Kokoro-82M, Apache-2.0, through the sherpa-onnx runtime, Apache-2.0).
   - Pronunciation comes from a dictionary-based step instead of espeak-ng, to stay GPL-free. Confirm in the spike that this covers English well.
   - Android's built-in voice is the Lite and fallback voice.
   - If the phone can generate speech faster than real time, audio is made a little ahead of playback. Otherwise whole chapters are generated during preparation (while charging) and cached, roughly 150–250 MB of compressed audio per book.
   - A pronunciation dictionary of tech terms plus the user's fixes is applied before synthesis.
   - Explanations use a second voice and a short chime.
8. **Player.** Media3 (ExoPlayer with a media session service) handles background playback, lock screen, notification, Bluetooth controls, audio focus, speed changes without pitch change, and the sleep timer. The position (chapter, segment, sentence) is saved continuously.
9. **Read-along.** The PDF view and Text view follow the player position: they highlight the current sentence's rectangles (the whole box for a listing or figure) and scroll with it. Tapping a paragraph plays from there. "Explain this" runs the on-phone model on the selection.
10. **Ads.** Google AdMob (Google Mobile Ads SDK), with Google's consent tool (User Messaging Platform) for the EU and UK.
    - Placements: a native ad in the library list; a banner on the preparation screen; an interstitial only at a natural break while the screen is on (for example, when a book finishes preparing), with a frequency cap and never on app open or close; an opt-in rewarded ad that unlocks Walkthrough explanations for one book.
    - Never in the audio, on the lock screen, in the notification, or while the app is in the background.
    - Ads must not trap TalkBack focus.
    - Development uses test ads only. Clicks on your own live ads can get the AdMob account banned.
11. **Background work.** WorkManager runs preparation and pack downloads with constraints: charging (default), battery not low, storage not low. Work pauses when the phone reports it's getting hot. Every job resumes after interruption and is safe to retry.

### What it costs to run

| Item | Cost |
|---|---|
| AI explanations | free, on the phone |
| Voice | free, on the phone |
| Servers | none |
| Google Play developer account | one-time registration fee (verify the current amount) |
| Website for the privacy policy and AdMob's app-ads.txt | free (for example, GitHub Pages) |

The trade-off: users pay nothing and you pay almost nothing, but the phone does all the work.
- The AI and voice packs are large downloads, roughly 1–2 GB.
- Preparing a whole book may take hours on a mid-range phone; the spike measures this.
- Small on-device models explain less well than large cloud models, especially diagrams.

## Testing Decisions

- **What makes a good test.** It checks behaviour through a module's public interface ("given this PDF, the narration script says this"), not internal details.
- **Seam 1, the main one: book preparation.** A PDF goes in, Narration Scripts come out. We make our own fixture PDFs, so there are no copyright issues; the onboarding sample page is one of them. They cover two-column pages, running headers and footers, a code listing split across a page break, a figure with a caption, a table, an equation, a footnote, and a scanned page. Tests check:
  - reading order;
  - no header, footer or page-number text in the narration;
  - code is never spoken symbol by symbol;
  - every listing and figure gets an explanation or the caption fallback;
  - scans are detected.

  Model outputs are recorded and replayed, so automated tests are fast and repeatable.
- **Seam 2: the player.** A Narration Script goes in, playback behaviour comes out: resume, next and previous, sleep timer, speed, saved position. A fake voice stands in for real speech.
- **Explanation quality** can't be unit-tested. The candidate models run on the same set of about 30 real listings and figures from books you own, and the results are judged by listening. The smallest model that's good enough wins. Re-run the set whenever a model or prompt changes.
- **Design.** Screenshot tests (for example, Roborazzi, Apache-2.0) of the key screens in Light, Sepia and Dark and at the largest font size catch visual regressions. Scrolling and transitions are checked for dropped frames on a release build on the reference phone.
- **Phone performance.** On one mid-range reference phone, measure:
  - time per segment;
  - whether speech generates faster than real time;
  - memory use;
  - battery drain and heat while preparing a 400-page book.

  These numbers set the Full and Lite thresholds.
- **Ads.** Test ad units only. Check placements against AdMob policy. Test the consent flow with the consent tool's EU debug setting.
- **Audio behaviour on real devices** is covered by a manual checklist: calls, Bluetooth, screen off, battery saver.
- **Prior art:** none. This is a new codebase.

## Out of Scope (v1)

- Paid plans, subscriptions, in-app purchases and a paid "remove ads" option. Revenue is ads only.
- Any server or cloud AI, including self-hosted models.
- iOS and web.
- Scanned PDFs (OCR), EPUB, and DRM-protected books.
- Accounts and sync.
- Tabs for several open books.
- Editing or annotating PDFs.
- Sharing or exporting narrated audio, or a store of pre-narrated books (that needs publishers' rights).
- Voice questions, recaps and voice notes (stories 66–68).
- Word-by-word highlighting; v1 highlights whole sentences.
- Explanations in another language.
- Android Auto and Wear OS.

## Further Notes

- **AdSense vs AdMob.** AdSense is for websites, and Google's policies don't allow AdSense ads inside apps. AdMob is Google's ads business for apps, paid out through the same Google payments system.
- **Biggest business risk: ads and listening pull in opposite directions.** AdMob shows only visual ads, and only while the app is on screen. Listening with the phone in a pocket, the main use case, earns nothing. Revenue depends on screen-on moments: the library, the preparation screen, read-along and the rewarded ad. Measure revenue per daily user from the first release. If it's thin, a one-time "remove ads" purchase is the usual add-on; it's out of scope for now, as decided.
- **Biggest product risk: on-device quality and speed.** Spike 0 runs the candidate open models and voice on one real chapter, first on a laptop (same models, quick to try), then on a mid-range phone. Listen to the result before building the app.
- **Design reference.** Xodo, for its clean, fast reading experience. Borrow the feel, never the brand, icons or exact screens.
- **Privacy.** Books never leave the phone, which is a selling point. The ads SDK does collect device and usage data, so the app needs a privacy policy and an accurate Google Play Data safety form.
- **Competition** (checked 2026-10-18):
  - CastReader skips code and figures, and only for O'Reilly books.
  - ElevenReader reportedly reads code aloud and drops diagrams.
  - Paper2Audio summarizes tables and formulas in research papers.
  - NotebookLM explains documents but reads nothing word for word.

  Being free, offline, private and polished sets this app apart, on top of the explanations.
- **A possible wedge:** blind and low-vision developers are poorly served by every option above.
- **Still open:** the app's name ("PDF Narrator" is a working name) and the exact accent colour.
