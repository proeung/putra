---
title: "I Got Tired of Manual Headshot Exports, So I Built a Tool"
excerpt: "How I used Claude Code to build a batch face detection and background removal tool for TellyDraft — and what I learned shipping it on Vercel's free tier."
coverImage: ""
coverVideo: "/assets/articles/building-a-headshot-tool-with-claude-code/video-cover.mp4"
coverVideoPoster: "/assets/articles/building-a-headshot-tool-with-claude-code/video-cover-poster.webp"
date: "2026-02-18T05:35:07.322Z"
ogImage:
  url: "/assets/articles/building-a-headshot-tool-with-claude-code/og.webp"
nextTitle: "Fantasy BB: Our Journey to the 7th Launch – Challenges, Triumphs, and 50,000 Users"
nextUrl: "/articles/fantasybb-launch-bb26"
---

Twice a year, like clockwork: a new season of Survivor or Big Brother drops, [TellyDraft.com](https://tellydraft.com)opens up for drafting, and suddenly I need a headshot of every single contestant.

If you've ever done this manually, you know the pain. I used to spend hours removing backgrounds and adjusting crop placement to frame each face correctly within Figma. Some shows, like Big Brother, have cleaner headshots on light backgrounds, which makes it manageable. Survivor, on the other hand, puts contestants in outdoor environments — trees, beaches, uneven lighting — which makes clean extraction a nightmare.

Having used Claude Code exclusively since its release, and feeling the full tediousness of exporting headshots for Survivor 50, I figured it was time to build a proper production tool: batch upload all the images, process them in one go.

## The Stack

Next.js 15 with React 19, Tailwind CSS 4, and Sharp for server-side image manipulation. Face detection runs through UltraFace, an ONNX model that processes a 640×480 input to locate faces and figure out where to crop. Background removal happens client-side using `@imgly/background-removal`, running entirely in the browser via WASM. The split was intentional: let the server do the heavy face detection, let the browser handle the background removal.

## Staying Within Vercel's Limits

Staying within Vercel's 250MB serverless function size limit on the free/hobby tier turned out to be its own puzzle. ONNX Runtime alone eats up a significant chunk, and getting the WASM binary and model file to play nicely together meant carefully wrangling `outputFileTracingIncludes` and `serverExternalPackages` in the Next.js config. The kind of constraint that makes you think really hard about what actually needs to live on the server.

## Building with Claude Code

I spend a lot of time thinking about context engineering: being deliberate about what goes into the conversation, how prompts are structured, and actually guiding the model through decisions instead of just hoping it figures out what I meant. Pair that with Claude Code doing the heavy lifting on implementation, and what could have been a week-long project wrapped up in a day or two.

## Try It

The repo is open source at [github.com/offred/headshot-app](https://github.com/offred/headshot-app), and the live tool is at [headshot.offred.co](https://headshot.offred.co). Fair warning — this isn't built to scale to thousands of concurrent users. But if you need to automatically detect faces, crop, and remove backgrounds from, say, your LinkedIn headshot... it'll do the job.