# Spec: PDF Narrator (working name)

An Android app that reads technical books aloud: the prose word for word, the code and diagrams explained. Free for everyone, built only on open-source tools, paid for by Google ads.

Status: draft v0.2 for review, nothing built yet · 2026-10-18

Changed in v0.2:
- The app is free for users.
- All AI and voice work now runs on the phone with open-source models: no paid APIs, no API keys, no server.
- Revenue comes from Google AdMob ads. AdSense doesn't allow ads inside apps.

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

## User Stories

Stories marked *(later)* are planned but not in the first version.

### Getting started

1. As a new user, I want the app to check what my phone can handle and recommend Full or Lite mode, so that it runs well on my phone.
2. As a reader, I want to download the AI and voice packs once, on Wi-Fi, with their sizes shown first, so that everything works offline afterwards.
3. As a reader with an older or low-memory phone, I want a Lite mode that uses the phone's built-in voice and reads captions instead of AI explanations, so that I can still use the app.

### Getting books in

4. As a reader, I want to import a PDF from my phone, Downloads or Google Drive through the system file picker, so that I can listen to books I already own.
5. As a reader, I want to open a PDF from another app with "Open with" or "Share", so that adding a book takes one tap.
6. As a reader, I want the title, author, cover and chapter list filled in from the PDF automatically, so that I don't have to type anything.
7. As a reader, I want a library that shows each book's cover, progress and whether it's ready to listen, so that I can pick up where I left off.
8. As a reader, I want to see how much storage each book and each AI or voice pack uses, and delete them, so that I can manage space on my phone.
9. As a reader, I want to be told clearly when a PDF is a scan with no text, so that I know it isn't supported yet instead of getting bad narration.

### Reading on screen

10. As a reader, I want to read the PDF with smooth scrolling and pinch-to-zoom, so that the app also works as a normal PDF reader.
11. As a reader, I want to jump to any chapter from the book's table of contents, so that I can move around quickly.
12. As a reader, I want to search the book's text, so that I can find a topic.
13. As a reader, I want the app to remember my page and listening position across restarts, so that I never lose my place.
14. As a reader, I want to bookmark pages, so that I can return to important parts.
15. As a reader, I want a dark theme with an optional dark page mode, so that reading at night is comfortable.

### Preparing a book for listening

16. As a reader, I want to see how long preparing a book will take on my phone before it starts, so that I can plan around it.
17. As a reader, I want the first chapter ready quickly (target: under 10 minutes on a mid-range phone), so that I can start listening soon.
18. As a reader, I want the rest of the book prepared in the background, by default only while my phone is charging, so that it doesn't drain my battery.
19. As a reader, I want preparation to pause when the battery is low or the phone gets hot, and carry on later by itself, so that it never harms my phone.
20. As a reader, I want to prepare only the chapters I choose, so that I don't wait for parts I'll skip.
21. As a reader, I want to see preparation progress per chapter, so that I know what's ready to play.
22. As a reader, I want a part that fails to prepare to be read word for word with a short spoken note, so that one bad page never blocks the book.

### What gets read, and how

23. As a listener, I want the body text read word for word in the right order (columns, sidebars, sentences that cross a page break), so that I hear exactly what the author wrote.
24. As a listener, I want running headers, footers, page numbers, line-end hyphens and footnote markers removed, so that the narration flows like an audiobook.
25. As a listener, I want the copyright page, table of contents and index skipped automatically, so that listening starts at the content.
26. As a listener, I want chapter and section headings announced with a short pause, so that I can follow the book's structure by ear.
27. As a listener, I want each code listing explained in plain speech (what it does and why it matters at this point) instead of read symbol by symbol, so that I understand the code without seeing it.
28. As a listener, I want code names inside a sentence spoken naturally ("get user by ID" for `getUserById`), so that sentences stay easy to follow.
29. As a listener, I want diagrams and figures described and explained (what they show and the point they make), so that I don't miss content that only exists as a picture.
30. As a listener, I want tables summarized (what's being compared and the takeaway), so that I get the point without hearing every cell.
31. As a listener, I want equations read the way a teacher would say them, and explained when they're complex, so that I can follow the maths by ear.
32. As a listener, I want notes, tips and warnings announced as such ("Tip: …"), so that I know they're asides.
33. As a listener, I want footnotes skipped by default, with an option to hear them at the end of the paragraph, so that they don't break the flow.
34. As a listener, I want a short sound and a slightly different voice for the app's explanations, so that I always know what's the author and what's the app.
35. As a listener, I want explanations short by default and connected to what the chapter just covered, so that they help instead of interrupting.
36. As a listener, I want to choose the explanation level (Skip, Brief, or Walkthrough, which goes through code step by step), so that I control the depth.
37. As a listener, I want separate settings per content type (for example, explain diagrams but skip code), so that it fits how I learn.
38. As a listener, I want tech terms pronounced correctly ("kubectl", "nginx", "SQL", "JSON") and the ability to fix any word myself, so that the narrator sounds like an engineer.

### Voice and playback

39. As a listener, I want a natural, human-sounding voice that runs on my phone, with a few voices to choose from, so that hours of listening stay pleasant without paying anything.
40. As a listener, I want to switch to my phone's built-in voice at any time, so that I can trade voice quality for speed and battery.
41. As a listener, I want speed control from 0.5× to 3× that keeps the voice natural, so that I can listen at my own pace.
42. As a listener, I want play/pause, skip back and forward, previous/next paragraph and previous/next chapter, so that I can move around by ear.
43. As a listener, I want playback to keep going with the screen off, with lock-screen, notification and Bluetooth headset controls, so that it works like any audiobook app.
44. As a listener, I want playback to pause for phone calls, get quieter for navigation prompts, and pause when headphones disconnect, so that it behaves like a well-made audio app.
45. As a listener, I want a sleep timer (a number of minutes, or end of chapter), so that I can listen in bed.
46. As a listener, I want everything to work offline once a book is prepared, so that I can listen on a plane or underground.

### Listening along on screen

47. As a reader, I want the sentence being read highlighted on the page, with the page following along, so that I can switch between reading and listening.
48. As a reader, I want to tap any paragraph to start narration from there, so that I can jump to what I'm looking at.
49. As a reader, I want the page to show the listing or figure while its explanation plays, so that I can glance at it when I'm able to.
50. As a reader, I want to select any passage, listing or figure and ask for an explanation, so that I get help exactly where I'm stuck.

### Free, with ads

51. As a reader, I want the app free with no subscription and no sign-up, so that anyone can use it.
52. As a listener, I want ads never to interrupt or play inside the narration, so that listening stays uninterrupted.
53. As a reader, I want ads only in places I'm already looking (my library, the preparation screen, a natural break with the screen on), so that the app never feels spammy.
54. As a reader, I want the choice to watch a short ad in exchange for an extra, so that I decide when I see ads. *(Which extras: see Decisions to confirm.)*
55. As a reader in the EU or UK, I want a clear choice about personalised ads when I first open the app, so that my privacy rights are respected.

### Privacy and settings

56. As a reader, I want my books, narrations and audio never to leave my phone, so that my library stays private.
57. As a reader, I want a plain-language privacy screen saying what the ads collect and that my books are never uploaded, so that I know exactly what's shared.
58. As a reader, I want to flag a bad explanation or misread passage and have it redone, so that the book gets better as I listen.
59. As a blind or low-vision reader, I want every control, including ads, to work with TalkBack and follow the system text size, so that I can use the app without sight.

### Later

60. *(later)* As a listener, I want to ask a question out loud ("wait, what's a closure?") and hear the answer before narration carries on, so that I can learn hands-free.
61. *(later)* As a listener coming back after a break, I want a short "previously…" recap of the chapter so far, so that I can pick up the thread.
62. *(later)* As a listener, I want to save a note by voice while listening, so that I can capture ideas hands-free.
63. *(later)* As a reader, I want scanned PDFs and EPUB books supported, so that my whole library works.
64. *(later)* As a listener, I want explanations in my own language while the book is read in its original language, so that hard parts are easier to follow.
65. *(later)* As a reader, I want my library and progress synced across devices, so that I can switch between phone and tablet.
66. *(later)* As a listener, I want to use the app from Android Auto, so that I can listen safely while driving.

## Implementation Decisions

### Platform and licences

- Native Android app in Kotlin with Jetpack Compose. Lite mode runs on Android 8.0 and up. Full mode needs a phone with enough memory (target 6 GB of RAM or more; the spike confirms the number).
- No server, no paid APIs, no API keys. All processing happens on the phone.
- Open-source components only, under permissive licences (Apache-2.0, MIT, BSD). The app also ships Google's closed-source ads SDK, so GPL and AGPL components are avoided. They could force the whole app to be released under the GPL, and they don't mix with a closed SDK. Known traps:
  - MuPDF (AGPL);
  - espeak-ng (GPL), which many open voices use to work out pronunciation.
- The only closed parts are Google's free AdMob and consent SDKs (needed for ads) and Android's built-in text-to-speech (a system service, not bundled). The app ships on Google Play. F-Droid doesn't list apps with closed ad SDKs.

### Modules

Each module hides a lot of work behind a small interface.

1. **Device check and packs.** On first run, checks memory and chip and recommends Full or Lite mode. Downloads the AI and voice model packs into app storage: Wi-Fi by default, resumable, checksum-verified, sizes shown first. Packs are versioned so better models can replace them later.
2. **Library.** Imports PDFs through the system file picker and copies them into app storage. Reads metadata and the PDF outline. Tracks progress, bookmarks and storage per book in a local database.
3. **PDF engine.** Renders pages with Android's built-in PDF renderer. Extracts text with on-page positions and font names using a PDF parsing library (candidate: PdfBox-Android, Apache-2.0; confirm in a spike). Crops figures as images.
4. **Book preparation (the core).** Takes a book or chapter range and produces a Narration Script for each chapter:
   - *Sort the page, with rules.* Rules handle reading order across columns; headers and footers (text repeated at the same spot on many pages); page numbers; line-end hyphens; front and back matter (from the outline); code (fixed-width fonts, shaded boxes, "Listing 3.2" captions); figures (embedded images or dense drawings with "Figure 3.2" captions); tables; equations; callouts; footnotes.
   - *Explain, with an open model on the phone.* An open-weight vision-language model runs through an open-source runtime (candidate: llama.cpp, MIT). Candidate models, all Apache-2.0 per their model cards (verify each):
     - MiniCPM-V 4.6 (1.3B);
     - Qwen3-VL 2B or 4B;
     - SmolVLM2.

     The spike picks the smallest one that explains well enough and runs fast enough on a mid-range phone. Gemma models are excluded: their terms are not an open-source licence.
   - *One small job per segment.* Each listing, figure, table or equation is one job, with the nearby paragraphs as context. Small models do better with short, focused input, and small jobs can pause and resume. Walkthrough explanations are generated only when the listener picks that level.
   - *Quality guard.* An explanation that's empty, too long or repetitive is replaced by the fallback below. Prompts tell the model to describe only what's on the page.
   - *Fallback (also Lite mode).* No AI. A figure, table or equation gets its caption read. A code listing gets "A 25-line code listing: <caption>. It's shown on screen."
5. **Narration Script.** The contract between preparation and playback: an ordered list of segments. Each segment has a type, source page and on-page rectangles (for highlighting), the text to speak (the author's words or an explanation), and a flag for explanations. It carries a version number so books can be re-prepared when models improve.
6. **Speech.** An open-source neural voice running on the phone (candidate: Kokoro-82M, Apache-2.0, through the sherpa-onnx runtime, Apache-2.0).
   - Pronunciation comes from a dictionary-based step instead of espeak-ng, to stay GPL-free. Confirm in the spike that this covers English well.
   - Android's built-in voice is the Lite and fallback voice.
   - If the phone can generate speech faster than real time, audio is made a little ahead of playback. Otherwise whole chapters are generated during preparation (while charging) and cached, roughly 150–250 MB of compressed audio per book.
   - A pronunciation dictionary of tech terms plus the user's fixes is applied before synthesis.
   - Explanations use a second voice and a short chime.
7. **Player.** Media3 (ExoPlayer with a media session service) handles background playback, lock screen, notification, Bluetooth controls, audio focus, speed changes without pitch change, and the sleep timer. The position (chapter, segment, sentence) is saved continuously.
8. **Read-along.** The PDF view follows the player position: it highlights the current sentence's rectangles (the whole box for a listing or figure) and scrolls with it. Tapping a paragraph plays from there. "Explain this" runs the on-phone model on the selection.
9. **Ads.** Google AdMob (Google Mobile Ads SDK), with Google's consent tool (User Messaging Platform) for the EU and UK.
   - Placements: a native ad in the library list; a banner on the preparation progress screen; an interstitial only at a natural break while the screen is on (for example, when a book finishes preparing), with a frequency cap and never on app open or close; optional rewarded ads.
   - Never in the audio, on the lock screen, in the notification, or while the app is in the background.
   - Ads must not trap TalkBack focus.
   - Development uses test ads only. Clicks on your own live ads can get the AdMob account banned.
10. **Background work.** WorkManager runs preparation and pack downloads with constraints: charging (default), battery not low, storage not low. Work pauses when the phone reports it's getting hot. Every job resumes after interruption and is safe to retry.

Removed in v0.2: Claude, Google Cloud Text-to-Speech, ElevenLabs, API keys, the cost meter and the spending cap.

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
- **Seam 1, the main one: book preparation.** A PDF goes in, Narration Scripts come out. We make our own fixture PDFs, so there are no copyright issues. They cover two-column pages, running headers and footers, a code listing split across a page break, a figure with a caption, a table, an equation, a footnote, and a scanned page. Tests check:
  - reading order;
  - no header, footer or page-number text in the narration;
  - code is never spoken symbol by symbol;
  - every listing and figure gets an explanation or the caption fallback;
  - scans are detected.

  Model outputs are recorded and replayed, so automated tests are fast and repeatable.
- **Seam 2: the player.** A Narration Script goes in, playback behaviour comes out: resume, next and previous, sleep timer, speed, saved position. A fake voice stands in for real speech.
- **Explanation quality** can't be unit-tested. The candidate models run on the same set of about 30 real listings and figures from books you own, and the results are judged by listening. The smallest model that's good enough wins. Re-run the set whenever a model or prompt changes.
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
- Sharing or exporting narrated audio, or a store of pre-narrated books (that needs publishers' rights).
- Voice questions, recaps and voice notes (stories 60–62).
- Word-by-word highlighting; v1 highlights whole sentences.
- Explanations in another language.
- Android Auto and Wear OS.
- Editing or annotating PDFs.

## Further Notes

- **AdSense vs AdMob.** AdSense is for websites, and Google's policies don't allow AdSense ads inside apps. AdMob is the same Google ads business for apps, paid out through the same Google payments system.
- **Biggest business risk: ads and listening pull in opposite directions.** AdMob shows only visual ads, and only while the app is on screen. Listening with the phone in a pocket, the main use case, earns nothing. Revenue depends on screen-on moments: the library, the preparation screen, read-along and rewarded ads. Measure revenue per daily user from the first release. If it's thin, a one-time "remove ads" purchase is the usual add-on; it's out of scope for now, as requested.
- **Biggest product risk: on-device quality and speed.** Spike 0 now runs the candidate open models and voice on one real chapter, first on a laptop (same models, quick to try), and then on a mid-range phone. Listen to the result before building the app.
- **Licences.** Permissive licences only, because the app ships a closed ads SDK. The app's own code can be open-sourced (for example, Apache-2.0) or kept closed; either works with permissive libraries.
- **Privacy.** Books never leave the phone, which is a selling point. The ads SDK does collect device and usage data, so the app needs a privacy policy and an accurate Google Play Data safety form.
- **Competition** (checked 2026-10-18):
  - CastReader skips code and figures, and only for O'Reilly books.
  - ElevenReader reportedly reads code aloud and drops diagrams.
  - Paper2Audio summarizes tables and formulas in research papers.
  - NotebookLM explains documents but reads nothing word for word.

  Being free, offline and private sets this app apart, on top of the explanations.
- **A possible wedge:** blind and low-vision developers are poorly served by every option above.
- **Decisions to confirm before building:**
  - Rewarded ads: offer extras (for example, Walkthrough explanations for a whole book) in exchange for watching an ad, or no rewarded ads at all?
  - Which phones get Full mode (for example, 6 GB of RAM or more), with Lite mode for the rest?
  - Open-source the app's own code, or keep it closed?
  - Where the code lives: its own GitHub repo (recommended) or a folder in this one?
