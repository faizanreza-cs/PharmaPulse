# Spec: PDF Narrator (working name)

An Android app that reads technical books aloud: the prose word for word, the code and diagrams explained.

Status: draft for review, nothing built yet · 2026-10-18

## Problem Statement

People who learn from technical books (developers, students, engineers) want to keep learning when they can't look at a screen: commuting, walking, doing chores, or resting their eyes. Read-aloud apps exist, but they read everything literally. Code comes out as a stream of symbols ("open bracket, user, dot, get…"), diagrams are skipped without a word, and running headers, page numbers and footnote markers interrupt every page. That makes them close to unusable for exactly the books where listening would help most.

Tools that explain documents (podcast-style summaries) go the other way: they replace the author's words entirely, so you lose the book itself. Nothing reads the prose as written and explains only the parts that only make sense on the page.

## Solution

An Android app that opens a PDF and narrates it the way a narrator who knows tech would:

- Prose is read word for word, in a natural, human-sounding voice.
- Code listings, diagrams, tables and equations are explained briefly, in the context of the chapter, instead of being read literally.
- Headers, footers, page numbers, the index and similar page furniture are skipped.

Each book is prepared once: the app sorts every part of every page and an AI writes the explanations. After that it plays like an audiobook: in the background, with the screen off, with lock-screen and headset controls. With the screen on, the PDF follows along with the current sentence highlighted, and any passage can be explained on demand. The listener decides how much explanation they get.

## User Stories

Stories marked *(later)* are planned but not in the first version.

### Getting books in

1. As a reader, I want to import a PDF from my phone, Downloads or Google Drive through the system file picker, so that I can listen to books I already own.
2. As a reader, I want to open a PDF from another app with "Open with" or "Share", so that adding a book takes one tap.
3. As a reader, I want the title, author, cover and chapter list filled in from the PDF automatically, so that I don't have to type anything.
4. As a reader, I want a library that shows each book's cover, progress and whether it's ready to listen, so that I can pick up where I left off.
5. As a reader, I want to see how much storage each book uses and delete a book with its narration and audio, so that I can manage space on my phone.
6. As a reader, I want to be told clearly when a PDF is a scan with no text, so that I know it isn't supported yet instead of getting bad narration.

### Reading on screen

7. As a reader, I want to read the PDF with smooth scrolling and pinch-to-zoom, so that the app also works as a normal PDF reader.
8. As a reader, I want to jump to any chapter from the book's table of contents, so that I can move around quickly.
9. As a reader, I want to search the book's text, so that I can find a topic.
10. As a reader, I want the app to remember my page and listening position across restarts, so that I never lose my place.
11. As a reader, I want to bookmark pages, so that I can return to important parts.
12. As a reader, I want a dark theme with an optional dark page mode, so that reading at night is comfortable.

### Preparing a book for listening

13. As a reader, I want an estimate of how long preparing a book will take and what it will cost before it starts, so that I'm never surprised by a bill.
14. As a reader, I want the first chapter ready within a few minutes, so that I can start listening almost straight away.
15. As a reader, I want the rest of the book prepared in the background, even after I close the app, so that a whole book can be ready by the next day.
16. As a reader, I want to prepare only the chapters I choose, so that I don't pay for parts I'll skip.
17. As a reader, I want background preparation limited to Wi-Fi if I choose, so that I save mobile data.
18. As a reader, I want to see preparation progress per chapter, so that I know what's ready to play.
19. As a reader, I want a page that fails to prepare to be read word for word with a short spoken note, so that one bad page never blocks the book.

### What gets read, and how

20. As a listener, I want the body text read word for word in the right order (columns, sidebars, sentences that cross a page break), so that I hear exactly what the author wrote.
21. As a listener, I want running headers, footers, page numbers, line-end hyphens and footnote markers removed, so that the narration flows like an audiobook.
22. As a listener, I want the copyright page, table of contents and index skipped automatically, so that listening starts at the content.
23. As a listener, I want chapter and section headings announced with a short pause, so that I can follow the book's structure by ear.
24. As a listener, I want each code listing explained in plain speech (what it does and why it matters at this point) instead of read symbol by symbol, so that I understand the code without seeing it.
25. As a listener, I want code names inside a sentence spoken naturally ("get user by ID" for `getUserById`), so that sentences stay easy to follow.
26. As a listener, I want diagrams and figures described and explained (what they show and the point they make), so that I don't miss content that only exists as a picture.
27. As a listener, I want tables summarized (what's being compared and the takeaway), so that I get the point without hearing every cell.
28. As a listener, I want equations read the way a teacher would say them, and explained when they're complex, so that I can follow the maths by ear.
29. As a listener, I want notes, tips and warnings announced as such ("Tip: …"), so that I know they're asides.
30. As a listener, I want footnotes skipped by default, with an option to hear them at the end of the paragraph, so that they don't break the flow.
31. As a listener, I want a short sound and a slightly different voice for the app's explanations, so that I always know what's the author and what's the app.
32. As a listener, I want explanations short by default and connected to what the chapter just covered, so that they help instead of interrupting.
33. As a listener, I want to choose the explanation level (Skip, Brief, or Walkthrough, which goes through code step by step), so that I control the depth.
34. As a listener, I want separate settings per content type (for example, explain diagrams but skip code), so that it fits how I learn.
35. As a listener, I want tech terms pronounced correctly ("kubectl", "nginx", "SQL", "JSON") and the ability to fix any word myself, so that the narrator sounds like an engineer.

### Voice and playback

36. As a listener, I want a natural, human-sounding voice with a few voices to choose from, so that hours of listening stay pleasant.
37. As a listener, I want a free voice that works offline as a fallback, so that I can keep listening with no connection or no budget left.
38. As a listener, I want speed control from 0.5× to 3× that keeps the voice natural, so that I can listen at my own pace.
39. As a listener, I want play/pause, skip back and forward, previous/next paragraph and previous/next chapter, so that I can move around by ear.
40. As a listener, I want playback to keep going with the screen off, with lock-screen, notification and Bluetooth headset controls, so that it works like any audiobook app.
41. As a listener, I want playback to pause for phone calls, get quieter for navigation prompts, and pause when headphones disconnect, so that it behaves like a well-made audio app.
42. As a listener, I want a sleep timer (a number of minutes, or end of chapter), so that I can listen in bed.
43. As a listener, I want to download chapters for offline listening, so that I can listen on a plane or underground.

### Listening along on screen

44. As a reader, I want the sentence being read highlighted on the page, with the page following along, so that I can switch between reading and listening.
45. As a reader, I want to tap any paragraph to start narration from there, so that I can jump to what I'm looking at.
46. As a reader, I want the page to show the listing or figure while its explanation plays, so that I can glance at it when I'm able to.
47. As a reader, I want to select any passage, listing or figure and ask for an explanation, so that I get help exactly where I'm stuck.

### Cost, privacy and settings

48. As a reader, I want a monthly spending cap and a running total of what I've spent, so that costs stay predictable.
49. As a reader, I want a one-time plain-language notice that pages are sent to AI and voice services, so that I know where my books go before anything is uploaded.
50. As a reader, I want my books, narrations and audio stored only on my phone, with no account, so that my library stays private.
51. As a reader, I want to enter my own AI and voice service keys, stored encrypted, so that the app works without anyone running a server.
52. As a reader, I want to flag a bad explanation or misread passage and have it redone, so that the book gets better as I listen.
53. As a blind or low-vision reader, I want every control to work with TalkBack and follow the system text size, so that I can use the app without sight.

### Later

54. *(later)* As a listener, I want to ask a question out loud ("wait, what's a closure?") and hear the answer before narration carries on, so that I can learn hands-free.
55. *(later)* As a listener coming back after a break, I want a short "previously…" recap of the chapter so far, so that I can pick up the thread.
56. *(later)* As a listener, I want to save a note by voice while listening, so that I can capture ideas hands-free.
57. *(later)* As a reader, I want scanned PDFs and EPUB books supported, so that my whole library works.
58. *(later)* As a listener, I want explanations in my own language while the book is read in its original language, so that hard parts are easier to follow.
59. *(later)* As a reader, I want my library and progress synced across devices, so that I can switch between phone and tablet.
60. *(later)* As a listener, I want to use the app from Android Auto, so that I can listen safely while driving.

## Implementation Decisions

### Platform

- Native Android app in Kotlin with Jetpack Compose, minimum Android 8.0. Background audio, media controls, PDF rendering and file access are first-class on native Android, and there is no iOS requirement yet.
- No backend server in v1. The app calls the AI and voice services directly with the user's own API keys ("bring your own keys"). A product version would move these calls behind a small server so keys never sit on phones and usage can be billed.

### Modules

Each module hides a lot of work behind a small interface.

1. **Library.** Imports PDFs through the system file picker and copies them into app storage. Reads metadata and the PDF outline. Tracks progress, bookmarks and storage per book in a local database.
2. **PDF engine.** Renders pages with Android's built-in PDF renderer. Extracts text with on-page positions and font names using a PDF parsing library (candidate: PdfBox-Android, Apache-2.0; confirm in a spike). Crops figures as images. Avoid AGPL-licensed engines such as MuPDF unless the app will be open source.
3. **Book preparation (the core).** Takes a book or chapter range and produces a Narration Script for each chapter, in two stages:
   - *Sort the page, on the phone, free.* Rules handle reading order across columns; headers and footers (text repeated at the same spot on many pages); page numbers; line-end hyphens; front and back matter (from the outline); code (fixed-width fonts, shaded boxes, "Listing 3.2" captions); figures (embedded images or dense drawings with "Figure 3.2" captions); tables; equations; callouts; footnotes.
   - *Write the explanations, with Claude.* One request per chapter (long chapters split) carrying the chapter text with segment markers, its code listings and figure images. It returns structured output: a brief spoken explanation per segment, plus corrections for blocks the rules weren't sure about. Model: Claude Opus 5.5 (`claude-opus-5-5`); tune effort on the listening test, starting at the default. The first chapter goes as a normal request so listening can start quickly. The rest go as one Message Batch at half price; batches can take up to 24 hours. Walkthrough-level explanations are generated only when the listener asks for that level.
   - *Failures.* Every response's stop reason is checked. A refused or failed chapter falls back to word-for-word reading with a spoken note. Server-side refusal fallbacks aren't available on batches.
4. **Narration Script.** The contract between preparation and playback: an ordered list of segments. Each segment has a type, source page and on-page rectangles (for highlighting), the text to speak (the author's words or an explanation), and a flag for explanations. It carries a version number so books can be re-prepared when prompts or models improve.
5. **Speech.** One interface with two kinds of voice:
   - a cloud voice, default Google Cloud Text-to-Speech Chirp 3 HD, with ElevenLabs as an optional premium voice;
   - Android's built-in text-to-speech as the free, offline fallback. Playback switches to it if the cloud voice can't be reached, rather than stopping.

   Audio is generated one sentence at a time, a minute or two ahead of playback, and cached, so you pay only for what you actually listen to. Whole chapters are generated only when downloaded for offline use. A pronunciation dictionary (built-in tech terms plus the user's fixes) is applied as text replacement before synthesis, so it works with any voice. Explanations use a second voice preset and a short chime.
6. **Player.** Media3 (ExoPlayer with a media session service) handles background playback, lock screen, notification, Bluetooth controls, audio focus, speed changes without pitch change, and the sleep timer. The position (chapter, segment, sentence) is saved continuously.
7. **Read-along.** The PDF view follows the player position: it highlights the current sentence's rectangles (the whole box for a listing or figure) and scrolls with it. Tapping a paragraph plays from there. "Explain this" sends the selection to Claude as a normal request.
8. **Keys and spending.** API keys are encrypted with an Android Keystore key and never logged. Every AI and voice call goes through one cost meter that records spend and enforces the monthly cap.
9. **Background work.** WorkManager runs preparation and batch polling. Jobs can resume after interruption, are safe to retry chapter by chapter, and respect the Wi-Fi-only setting.

### Cost per book (rough)

Assumes a 400-page tech book: about 25 chapters, 15 hours of audio, 800,000 characters spoken, and per chapter about 22,000 input tokens and 5,000–10,000 output tokens (thinking included).

| Part | Option | Approx. cost per book |
|---|---|---|
| Explanations | Claude Opus 5.5, normal requests | $4–7 |
| Explanations | Claude Opus 5.5, Message Batch (half price) | $2–3.50 |
| Voice | Google Chirp 3 HD ($30 per 1M characters, first 1M characters a month free) | about $24, or free for about one book a month |
| Voice | ElevenLabs ($0.05–0.10 per 1,000 characters) | $40–80 |
| Voice | Android on-device voice | free |

The voice, not the AI, is the main cost. That's why audio is generated only as you listen. Cheaper Claude models (Sonnet 5.5 at half the Opus price, Haiku 5.5 at under 15 cents a book) are an option once the listening test shows their explanations are good enough.

## Testing Decisions

- **What makes a good test.** It checks behaviour through a module's public interface ("given this PDF, the narration script says this"), not internal details.
- **Seam 1, the main one: book preparation.** A PDF goes in, Narration Scripts come out. We make our own fixture PDFs, so there are no copyright issues. They cover two-column pages, running headers and footers, a code listing split across a page break, a figure with a caption, a table, an equation, a footnote, and a scanned page. Tests check:
  - reading order;
  - no header, footer or page-number text in the narration;
  - code is never spoken symbol by symbol;
  - every listing and figure has an explanation;
  - scans are detected.

  Claude responses are recorded and replayed, so automated tests are free and repeatable.
- **Seam 2: the player.** A Narration Script goes in, playback behaviour comes out: resume, next and previous, sleep timer, speed, saved position. A fake voice stands in for real speech.
- **Explanation quality** can't be unit-tested. A small eval set of about 30 real listings and figures from books you own is reviewed by listening (optionally scored by an AI judge) whenever prompts or models change, and before any switch to a cheaper model.
- **Audio behaviour on real devices** is covered by a manual checklist: calls, Bluetooth, screen off, battery saver.
- **Prior art:** none. This is a new codebase.

## Out of Scope (v1)

- iOS and web.
- Scanned PDFs (OCR), EPUB, and DRM-protected books.
- Accounts, sync, subscriptions, payments and any backend server.
- Sharing or exporting narrated audio, or a store of pre-narrated books (that needs publishers' rights).
- Voice questions, recaps and voice notes (stories 54–56).
- Word-by-word highlighting; v1 highlights whole sentences.
- Explanations in another language.
- Android Auto and Wear OS.
- Editing or annotating PDFs.

## Further Notes

- **Riskiest assumption:** that a smart narration of a tech chapter is pleasant and useful to listen to. Test it before building the app (spike 0). Turn one chapter of a book you own into a narration script and an MP3, and listen on a walk. If explanations are too long or break the flow, tune the prompts first.
- **Competition** (checked 2026-10-18):
  - CastReader skips code and figures, and only for O'Reilly books.
  - ElevenReader reportedly reads code aloud and drops diagrams.
  - Paper2Audio summarizes tables and formulas in research papers.
  - NotebookLM explains documents but reads nothing word for word.

  The edge is the quality of in-context explanations, not the feature itself.
- **A possible wedge:** blind and low-vision developers are poorly served by every option above.
- **Privacy and copyright:** users bring their own files. Page text and images are sent to Anthropic and Google to be processed. Nothing is shared or redistributed.
- **Prices** come from Anthropic's model table and from Google's and third-party pricing pages as of 2026-10-18. ElevenLabs figures vary between sources. Re-check before launch.
- **Decisions to confirm before building:**
  - Personal tool first (your own keys, no server) or a product from day one (accounts, backend, payments)?
  - Voice: Google Chirp 3 HD (default), ElevenLabs, or on-device only?
  - AI model: Opus 5.5 (default), or a cheaper model after the listening test?
  - Where the code lives: its own GitHub repo (recommended) or a folder in this one?
