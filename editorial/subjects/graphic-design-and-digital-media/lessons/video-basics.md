# Video Basics

## In 30 Seconds

Digital video is just still frames shown fast. Four numbers describe almost any clip: frame rate (frames per second, like 24 for film or 60 for smooth motion), resolution (pixel size, such as 1080p or 4K), aspect ratio (shape, like 16:9 wide or 9:16 vertical), and bitrate (data per second, which trades quality against file size). A codec such as H.264 compresses the footage; a container such as MP4 wraps the compressed video, audio, and metadata into one file. Editing then means importing, trimming, sequencing on a timeline, adding titles, and exporting.

## Why This Matters

Video is now the default medium for social feeds, ads, product pages, and course material, so designers are expected to shoot, edit, or at least spec it correctly. Knowing that frame rate, resolution, aspect ratio, and bitrate are independent controls lets you hit a platform's requirements and a file-size budget on purpose instead of guessing. The codec-versus-container distinction explains why an MP4 sometimes will not play, why H.265 files are smaller, and why an export takes so long. These are the same trade-offs behind streaming quality, page-load speed, and print-versus-screen delivery, so the reasoning carries directly into everyday production decisions and conversations with clients, developers, and printers.

## Learning Objectives

- Define frame rate, resolution, aspect ratio, and bitrate and explain what each controls.
- Distinguish a codec from a container and give an example of each.
- Explain why video is compressed and how bitrate trades quality against file size.
- Calculate the number of frames in a clip from its frame rate and duration.
- Distinguish an animation keyframe from a codec key frame (I-frame).
- Apply these traits to choose settings for a given delivery scenario.

## The College Version

### Frames, frame rate, resolution, and aspect ratio

A video is a stack of still images, called frames, displayed fast enough that the eye reads them as continuous motion. Frame rate, measured in frames per second (fps), is how many of those frames play each second. Below roughly 12 fps the illusion breaks and you see a slideshow; 24 fps is the traditional cinema rate; about 30 fps is standard for television; and 60 fps renders fast motion, such as sports or gameplay, more smoothly. Higher rates look smoother but, all else equal, mean more frames to store and a larger file, and 24 fps is still chosen deliberately for its filmic look. Because a clip is literally frames laid end to end, its frame count is just frame rate times duration: a 30 fps clip running 10 seconds is 300 frames.

Resolution is the pixel dimensions of each frame. Common steps are 720p (1280 by 720), 1080p or Full HD (1920 by 1080, standardized for HDTV in ITU-R BT.709), and 4K UHD (3840 by 2160, defined for ultra-high-definition TV in ITU-R BT.2020, which also defines 8K at 7680 by 4320). More pixels capture more detail but enlarge the file. Aspect ratio is the shape of the frame, its width compared to its height: 16:9 is the standard wide landscape used by HD and UHD, 9:16 is vertical for phone-first video, and 1:1 is square. Frame rate, resolution, and aspect ratio are independent choices, and each has to match where the video will be shown.

### Why video is compressed: codecs and bitrate

Raw video is enormous. A single full-color 1920-by-1080 frame at four bytes per pixel is about 8.3 million bytes; at 30 fps that is roughly 249 megabytes for one second, so a feature film would run into terabytes. Storing or streaming that is impractical, so video is compressed by a codec, software that encodes the picture into a compact form and decodes it again for playback or editing. Most video codecs are lossy: the decoded picture is not a pixel-perfect match for the original, and the harder you compress, the more fine detail you give up. H.264, also called AVC, is the broadly compatible workhorse that plays almost everywhere. H.265, or HEVC, is engineered to reach about half the file size of H.264 at similar quality, which is valuable for 4K, but it is less universally supported.

The dial that governs this trade is bitrate, the amount of data used per second of video, usually quoted in megabits per second (Mbps). A higher bitrate keeps more detail and yields a larger file; a lower bitrate shrinks the file but can introduce blocky compression artifacts. Bitrate, resolution, and frame rate interact: a 4K, 60 fps clip needs a far higher bitrate than a 720p, 30 fps clip to look clean, because it has many more pixels changing many more times per second.

### Codec versus container

One of the most common points of confusion is the difference between a codec and a container, because a filename like `clipMP4` names only the container. A container, also called a media file format, is a wrapper: it encapsulates one or more streams, typically a video track and an audio track, along with metadata such as timing and titles, so they store and play back together. MP4, QuickTime's MOV, and WebM are containers. A codec is the compression method used inside that wrapper, and audio and video have their own codecs. The same container can hold different codecs; an MP4 commonly carries H.264 video with AAC audio, but it can carry other combinations.

This is exactly why a video file sometimes refuses to play even though its `MP4` extension looks fine: the device supports the MP4 container but not the specific codec inside it. On the web, authors sidestep this by offering more than one source, for example a modern codec first with an H.264/MP4 fallback, so each browser plays the best format it understands. Separating the wrapper from the compression also clarifies exporting: you choose a container and a codec as two distinct settings.

### The editing workflow and keyframes

Most editing happens in a non-linear editor (NLE), so called because you can rearrange any part at any time rather than working strictly front to back. The workflow is consistent across tools. First you import your footage, audio, and graphics into the project. Then you cut and trim clips, keeping the good takes and removing the rest. You arrange those clips on a sequence, or timeline, the horizontal track-based view that represents time left to right. You add transitions between clips, such as cuts or crossfades, and titles and lower-thirds, the text overlays that name a speaker or topic. Finally you export, or render, the finished sequence into a delivery file, which is the moment you choose container, codec, resolution, frame rate, and bitrate together.

Two of those steps involve something called a keyframe, and the word means two different things worth keeping straight. In animation and motion graphics, a keyframe fixes a property, say a title's position or opacity, at a specific point on the timeline, and the software interpolates, or tweens, the values in between, so two keyframes can slide a title on screen. In compression, a key frame (also called an intra-frame or I-frame) is a complete, self-contained frame in the encoded stream; the frames between key frames record only what changed, and periodic key frames reset accumulated error and make seeking possible. Same word, two ideas: one is an animation control you set, the other is a structural frame the codec inserts.

## Key Vocabulary

- **Frame** — A single still image in a video; playing many frames per second produces the illusion of motion.
- **Frame rate (fps)** — The number of frames displayed per second. Common rates include 24 (cinema), 30 (television), and 60 (extra-smooth motion).
- **Resolution** — The pixel dimensions of each frame, such as 1280x720 (720p), 1920x1080 (1080p/Full HD), or 3840x2160 (4K UHD). More pixels mean more detail and a larger file.
- **Aspect ratio** — The proportion of frame width to height: 16:9 (wide landscape), 9:16 (vertical), or 1:1 (square).
- **Codec** — Software that compresses (encodes) and decompresses (decodes) video or audio data. H.264/AVC and H.265/HEVC are common video codecs; most are lossy.
- **Container (media file format)** — A file wrapper such as MP4, MOV, or WebM that bundles compressed video and audio streams with metadata. The extension names the container, not the codec inside.
- **Bitrate** — The amount of data used per second of video, often in megabits per second (Mbps). Higher bitrate generally means better quality and a larger file.
- **Lossy compression** — Compression that permanently discards some detail to shrink the file; the decoded video does not exactly match the original. Most video codecs are lossy.
- **Animation keyframe** — A marker that fixes a property value (position, scale, opacity) at a point on the timeline; the software interpolates (tweens) the frames between keyframes.
- **Key frame (I-frame)** — In compression, a full self-contained reference frame in the encoded stream; frames between key frames store only differences from it.

## Eli-10

A video is really a flip-book: lots of pictures shown so fast they look like they move. Frame rate is how many pictures flash by each second; more pictures per second looks smoother but makes a bigger file. Resolution is how many tiny dots make up each picture, so 4K has way more dots than 720p and looks sharper. Aspect ratio is the shape of the screen, wide like a TV or tall like a phone. Because all those pictures would take up a mountain of space, a codec squishes them down, and a bit of detail gets thrown away to make them small. Then a container is like a lunchbox: the codec makes the food small, and the MP4 or MOV box holds the video and sound together so they travel as one file. Sometimes a video will not play because your device can open the lunchbox but cannot unwrap the particular food inside.

## Eli's Analogy

Think of a codec and a container like shipping a couch. The codec is the vacuum-pack that compresses the couch small so it is cheap to ship; the container (MP4, MOV) is the cardboard box that holds the packed couch and its instructions together. You pick how tightly to vacuum-pack it (bitrate) separately from which box you use.

**Where it breaks down:** A vacuum-packed couch springs back to exactly its old shape, while lossy video compression throws real detail away for good. The analogy also ignores that one box (container) can hold many different kinds of packing (codecs), and that audio and video are packed separately inside the same box.

## Worked Example

A team is cutting a 10-second product clip and needs to plan frames and file size. Frames first: frame count equals frame rate times duration, so at 24 fps the clip is 24 × 10 = 240 frames, at 30 fps it is 300 frames, and at 60 fps it is 600 frames, which is why the 60 fps version is heavier to store and slower to render. Now file size from bitrate: file size in bits is roughly bitrate times duration, so a 1-minute export at 8 Mbps is 8,000,000 × 60 = 480,000,000 bits, and dividing by 8 gives 60,000,000 bytes, about 60 MB. Bump the same minute to a 45 Mbps 4K master and it balloons to 45,000,000 × 60 / 8 = about 338 MB. Same length, very different weight, because bitrate is the quality-versus-size dial. The team keeps 24 fps for the filmic look and picks a bitrate that fits their upload limit.

## Common Mistakes

- **Thinking the file extension (MP4, MOV) tells you how the video is compressed.** The extension names only the container. The codec inside (H.264, H.265, and so on) is a separate thing, which is why two MP4 files can behave very differently and why one may not play on a given device.
- **Assuming a higher frame rate or higher resolution is always better.** More fps and more pixels increase smoothness and detail but also file size, render time, and bandwidth. 24 fps is chosen on purpose for cinema, and 1080p is often the right target; match the setting to the delivery, not to the biggest number.
- **Confusing an animation keyframe with a compression key frame.** An animation keyframe is a value you set on the timeline that the software tweens between; a codec key frame (I-frame) is a full reference frame the encoder inserts. Same word, unrelated jobs.
- **Treating bitrate, resolution, and frame rate as one "quality" setting.** They are independent. A 4K clip at a low bitrate can look worse (blocky) than a well-compressed 1080p clip; you must set bitrate high enough for the resolution and frame rate you chose.
- **Exporting a vertical or square video in a 16:9 project (or vice versa).** Set the sequence aspect ratio to the target (9:16 for phone-first, 1:1 for square, 16:9 for landscape) before editing, or the footage ends up with black bars or awkward crops.

## Compare / Contrast

- **Codec (H.264, H.265) vs Container (MP4, MOV, WebM):** The codec is the compression method that encodes and decodes the streams; the container is the file wrapper that bundles the compressed video, audio, and metadata. One container can hold different codecs.
- **Frame rate (fps) vs Resolution:** Frame rate is how many frames play per second (temporal smoothness); resolution is how many pixels are in each frame (spatial detail). They are set independently.
- **H.264 / AVC vs H.265 / HEVC:** H.264 is broadly compatible and plays almost everywhere; H.265 reaches roughly half the file size at similar quality but is less universally supported.
- **Animation keyframe vs Codec key frame (I-frame):** An animation keyframe sets a property value at a time and the software interpolates between them; a codec key frame is a full self-contained frame in the compressed stream that other frames reference.
- **Higher bitrate vs Lower bitrate:** Higher bitrate preserves more detail but makes a larger file; lower bitrate shrinks the file but risks visible compression artifacts. Bitrate is the quality-versus-size dial.

## Key Takeaway

Describe any clip with four independent numbers: frame rate (fps), resolution (pixels), aspect ratio (shape), and bitrate (data per second, the quality-versus-size dial). A codec compresses the footage and a container wraps it, so the MP4 you see names the box, not the compression inside.

## Practice Question Bank

1. **In digital video, what is the difference between a codec and a container?**
   - A. The codec compresses (encodes and decodes) the video and audio streams, while the container, such as MP4 or MOV, is the file wrapper that bundles those streams with metadata. ✓
   - B. The container compresses the video while the codec only stores metadata such as the title.
   - C. They are two names for the same thing; both refer to the file extension.
   - D. The codec sets the aspect ratio and the container sets the frame rate.

   *A codec is the compression method that encodes and later decodes the streams (for example H.264); a container like MP4, MOV, or WebM is the wrapper that holds the compressed video and audio tracks plus metadata. They are separate, which is why one MP4 can play and another may not.*

2. **A clip is recorded at 30 frames per second and lasts 10 seconds. How many frames does it contain, and what general rule did you use?**
   - A. 30 frames, because frame rate alone gives the frame count.
   - B. 300 frames, because frame count equals frame rate multiplied by duration. ✓
   - C. 3 frames, because you divide the duration by the frame rate.
   - D. 1,080 frames, because the count comes from the resolution (1080p).

   *A video is frames laid end to end, so the number of frames is frame rate times duration: 30 fps × 10 s = 300 frames. Frame rate alone is per-second, not the total, and 1080 refers to resolution, not frame count.*

3. **Which pairing of resolution and aspect ratio is correct?**
   - A. 720p means 3840x2160 pixels at a 1:1 aspect ratio.
   - B. 4K UHD means 1920x1080 pixels at a 9:16 aspect ratio.
   - C. 1080p (Full HD) means 1920x1080 pixels at a 16:9 aspect ratio. ✓
   - D. 1080p means 1280x720 pixels at a 4:3 aspect ratio.

   *1080p, or Full HD, is 1920x1080 pixels with a 16:9 aspect ratio, as standardized for HDTV in ITU-R BT.709. 720p is 1280x720, 4K UHD is 3840x2160, and standard HD/UHD uses 16:9.*

4. **You export the same 1080p clip twice, once at a high bitrate and once at a much lower bitrate. What is the most accurate expectation?**
   - A. Both files are identical in size and quality, because they share a resolution.
   - B. The lower-bitrate file is larger but sharper, because low bitrate adds data.
   - C. The higher-bitrate file is smaller, because bitrate only affects the audio track.
   - D. The higher-bitrate file is larger and generally cleaner, while the lower-bitrate file is smaller but may show blocky compression artifacts. ✓

   *Bitrate is the amount of data used per second, so a higher bitrate keeps more detail and produces a larger file, while a lower bitrate shrinks the file but can introduce visible artifacts. Bitrate governs the whole stream, not just audio.*

5. **An editor slides a title across the screen by setting its position at second 1 and a new position at second 3, and the software fills in the motion between. Separately, the export dialog mentions inserting a "key frame" every two seconds. Which statement correctly distinguishes these two uses of "keyframe"?**
   - A. Both are the same feature; the export just renames the animation keyframes the editor placed.
   - B. Both are compression settings; neither has anything to do with animating a title.
   - C. The animation is controlled by a codec I-frame, while the export setting places motion-graphics keyframes.
   - D. The title uses animation keyframes that the software interpolates between, while the export's key frame is a full self-contained reference frame (I-frame) inserted into the compressed stream. ✓

   *In animation, a keyframe fixes a property value at a moment on the timeline and the software interpolates (tweens) the frames in between. In compression, a key frame (intra-frame / I-frame) is a complete reference frame in the encoded stream. They share a name but do unrelated jobs.*

## Sources

- MDN Web Docs — Web video codec guide: <https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs> (reference only)
- MDN Web Docs — Media container formats (file types): <https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Containers> (reference only)
- Recommendation ITU-R BT.709 — HDTV parameter values (1920x1080, 16:9): <https://www.itu.int/rec/R-REC-BT.709> (reference only)
- Recommendation ITU-R BT.2020 — UHDTV parameter values (3840x2160, 7680x4320, 16:9): <https://www.itu.int/rec/R-REC-BT.2020> (reference only)
- MDN Web Docs — Using CSS animations (keyframes and interpolation): <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations> (reference only)

## Related Topics

- graphic-design-and-digital-media:foundations:file-formats
- graphic-design-and-digital-media:foundations:image-resolution
- graphic-design-and-digital-media:foundations:social-media-graphics
- graphic-design-and-digital-media:foundations:photo-editing

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Researched at:** 2026-08-19
- **Research status:** source-verified
- **Rights status:** Reference-only sources (MDN Web Docs; ITU-R recommendations); no wording reproduced, all prose original.
- **Transformation:** Frame rate, resolution, bitrate, compression, and the codec/container distinction synthesized from the MDN video-codec and media-container guides; 1080p and 4K UHD figures grounded in ITU-R BT.709 and BT.2020; the animation-keyframe definition from MDN's CSS animations guide, disambiguated from codec I-frames. Worked arithmetic executed in Bash. Still-image formats, ppi resolution, platform graphic specs, and RGB/CMYK color deferred to their own topics. No copyrighted footage reproduced.
