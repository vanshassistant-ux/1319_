# File Formats

## In 30 Seconds

A file format is the container that decides how an image is stored: how it is compressed, whether it can hold transparency or animation, what colors it can carry, and where it works well. JPEG squeezes photographs small by throwing data away. PNG keeps every pixel and adds smooth transparency for web graphics. GIF handles simple animation in 256 colors. TIFF and PDF serve print. WebP and AVIF are the modern, smaller web options. SVG stays razor-sharp at any size. Choosing well means matching the format to the job.

## Why This Matters

Every image you make is saved in some format, and the wrong one shows up as a blurry logo, a photo that takes forever to load, a white box where transparency should be, or a print job that comes back the wrong color. Designers, marketers, and developers make this choice dozens of times a week, and it directly affects page speed, print quality, and how professional the work looks. The reasoning also travels: the same lossy-versus-lossless and web-versus-print logic underlies image optimization, accessibility, and file handoffs between a designer and a printer or developer. Learning to pick a format on purpose, rather than defaulting to whatever a tool suggests, is basic fluency in digital media.

## Learning Objectives

- Define a file format and distinguish lossy from lossless compression.
- Describe the compression, transparency, animation, and color-space traits of JPEG, PNG, GIF, and TIFF.
- Explain what WebP, AVIF, and SVG add, and when each is the right modern choice.
- Apply format traits to choose a format for a given web or print scenario.
- Identify which formats carry CMYK for print versus which are RGB-oriented for screens.

## The College Version

### Compression: lossy versus lossless

A file format is the agreed-upon structure for storing an image so that software can read it back. The single most useful thing to know about any raster (pixel-based) format is how it compresses data, because that splits the whole field in two. Lossy compression makes files small by permanently discarding information the format judges you will not miss, usually fine detail and subtle color differences. You cannot get that data back; save a JPEG, re-open it, and save again, and it degrades a little more each time. Lossless compression also shrinks the file, but it does so by encoding the same pixels more efficiently, so the image can be reconstructed exactly. PNG, GIF, TIFF, and the lossless modes of WebP are all lossless. The trade-off is size versus fidelity: lossy formats win dramatically on file size for photographs, where a little discarded detail is invisible; lossless formats win where every pixel matters, such as text, sharp edges, screenshots, and line art, or where the file will be edited and re-saved repeatedly. This lesson classifies formats; the difference between pixel-based (raster) images and mathematically-described (vector) images is developed in the Raster versus Vector topic, and resolution in the Image Resolution topic.

### The four workhorse raster formats

JPEG is the lossy photograph format. It stores 24-bit color (millions of colors), compresses aggressively, and is the most common format for photos on the web and in cameras. Its limits are the flip side of that strength: no transparency, no animation, and visible blocky artifacts if you compress too hard or save it many times. PNG is the lossless web-graphics format. It keeps every pixel and, crucially, supports an alpha channel, meaning each pixel can be fully opaque, fully transparent, or anywhere in between, which is how a logo sits cleanly over any background. PNG suits screenshots, icons, diagrams, and anything with crisp edges; the cost is larger files than JPEG for photographs. GIF is the old, limited format that survives for one reason: simple animation. It uses lossless LZW compression but caps the palette at 256 colors (8-bit indexed), and its transparency is binary, a pixel is either fully transparent or fully opaque, with no soft edges. TIFF is the print and archival heavyweight: lossless, high bit depth, able to carry CMYK and other color spaces, and trusted by libraries and museums for master copies. Its files are large, and standard TIFF is capped near four gigabytes, a limit the BigTIFF extension removes.

### The modern web formats and vector SVG

WebP and AVIF are newer formats built for the web, and both improve on the old options. Each offers a lossy mode and a lossless mode, supports alpha-channel transparency, and can animate. The payoff is size: lossy WebP images average roughly 25 to 35 percent smaller than JPEGs of similar visual quality, and lossless WebP runs about 26 percent smaller than PNG. AVIF generally compresses even better than WebP. The catch is support: AVIF reached browsers more recently than WebP, so on the web you serve a modern format with an older fallback, commonly using the HTML picture element so each browser gets the best format it understands. SVG is different in kind. It is not a grid of pixels at all but an XML text file describing shapes, paths, and text as drawing commands, so it scales to any size, from a favicon to a billboard, with no blur. That makes SVG ideal for logos, icons, and diagrams, and its shapes can even be styled or animated with CSS. Because it describes geometry rather than photographic detail, SVG is a poor fit for photographs. Alongside SVG, EPS and AI are vector formats used in professional print and editing workflows.

### Choosing a format, and the CMYK question

Put the traits together and the choice usually makes itself. For a photograph on the web, reach for WebP or AVIF with a JPEG fallback. For a graphic that needs a transparent background, use PNG (or WebP). For a logo or icon that must stay sharp at every size, use SVG. For a short looping animation, modern advice favors WebP or animated PNG over GIF, though GIF still works everywhere. For print, the deliverable is usually a press-ready PDF, with TIFF used for high-quality raster images and archival masters. One trait often decides print work: color space. TIFF, EPS, and PDF can carry CMYK, the four-ink model presses use, while JPEG, PNG, GIF, WebP, and SVG live in the RGB world of screens (PNG, GIF, and SVG do not support CMYK at all). That is why sending a printer a PNG of your artwork can cause color surprises, and why print files are prepared as PDF or TIFF instead. The color models themselves, RGB and CMYK and why their gamuts differ, are covered in the Color Models topic; here the point is simply that the format you pick determines whether CMYK can ride along at all.

## Key Vocabulary

- **File format** — A defined structure for storing an image (or other data) so software can write and read it, determining its compression, transparency, animation, and color capabilities.
- **Lossy compression** — Compression that shrinks a file by permanently discarding some image data; the original cannot be fully recovered. Used by JPEG.
- **Lossless compression** — Compression that reduces file size by encoding the same pixels more efficiently, so the exact original image can be reconstructed. Used by PNG, GIF, TIFF, and lossless WebP.
- **Alpha channel (transparency)** — An extra channel storing how opaque each pixel is, allowing smooth partial transparency so an image blends over any background. Supported by PNG, WebP, AVIF, and SVG.
- **Indexed color** — A scheme that stores an image using a limited palette of specific colors referenced by index; GIF is limited to a 256-color (8-bit) indexed palette.
- **Raster (bitmap) image** — An image stored as a fixed grid of pixels. JPEG, PNG, GIF, TIFF, WebP, and AVIF are raster formats; enlarging one past its resolution shows blur or blockiness.
- **Vector image** — An image stored as mathematical drawing commands (points, lines, curves) rather than pixels, so it scales to any size without losing sharpness. SVG, EPS, and AI are vector formats.
- **SVG** — Scalable Vector Graphics: an XML-based vector format for the web, resolution-independent and styleable with CSS, ideal for icons, logos, and diagrams.
- **WebP / AVIF** — Modern web image formats offering both lossy and lossless compression, transparency, and animation, with markedly smaller files than JPEG or PNG at comparable quality.
- **Press-ready PDF** — A portable, page-oriented, device- and resolution-independent file used as the final deliverable for professional printing; can carry CMYK color.

## Eli-10

Saving a picture is like choosing a container to carry it in, and different containers are good at different things. JPEG is a vacuum bag: it squishes a photo really small by throwing away tiny details you would not notice, but you can never get them back. PNG is a sturdy box with a see-through lid: it keeps every detail and lets parts of the picture be transparent, so a logo can float on any background. GIF is a tiny flip-book that can move but only knows 256 crayons. TIFF is a heavy archive crate for perfect print copies. WebP and AVIF are newer, lighter bags that hold more with less weight. And SVG is not a photo at all, it is a recipe of shapes, so you can blow it up to the size of a wall and it still looks crisp. Pick the container that fits what the picture needs to do.

## Eli's Analogy

Choosing an image format is like choosing how to carry water: a paper cup (JPEG) is light and fine for a quick drink but crushes and leaks detail; a sealed thermos (PNG/TIFF) keeps everything perfectly but is heavier; and a written recipe for water (SVG) weighs almost nothing and scales to any amount, but only works because water is simple to describe.

**Where the analogy breaks down:** The water analogy captures the size-versus-fidelity trade-off, but it understates transparency, animation, and color space, which have no water equivalent, and it overstates SVG: real photographs are far too complex to describe as a short recipe, which is exactly why vector formats fail for photos.

## Worked Example

Imagine a coffee shop needs four image files. First, a hero photo of a latte for its homepage: choose WebP (or AVIF) for the smallest file at good quality, with a JPEG fallback for older browsers, because it is a photograph headed for the web. Second, the shop's logo, which appears as a tiny site icon and on a large window decal: choose SVG, because a vector logo stays razor-sharp at both sizes and can be recolored in code, and it must sit transparently over a photo. Third, a short animated "Open" badge: a GIF works everywhere, but animated WebP or APNG gives full color at a smaller size. Fourth, the artwork for a printed menu the shop sends to a print shop: deliver a press-ready PDF, with any embedded photos supplied as CMYK TIFFs, because PDF and TIFF carry the CMYK color the press needs while a PNG cannot. Each choice follows from one question: what does this image have to do, and where?

## Common Mistakes

- **Saving a logo or icon as a JPEG.** JPEG is lossy and has no transparency, so a logo gets fuzzy edges and a solid rectangle background. Use SVG for a scalable vector logo, or PNG when you need a fixed-size raster with transparency.
- **Using PNG for large photographs on a website.** PNG is lossless, so photos become huge files that slow page loads. Use JPEG, or better WebP/AVIF, for photographs; reserve PNG for graphics, screenshots, and images that need transparency or crisp edges.
- **Assuming a PNG is fine to send to a commercial printer.** PNG is RGB-only and does not support CMYK. Prepare print files as a press-ready PDF, with raster images as CMYK TIFF, so the color space the press needs is preserved.
- **Reaching for GIF whenever you need transparency or animation.** GIF is capped at 256 colors with only on/off transparency. For smooth transparency use PNG or WebP; for higher-quality animation use WebP or APNG. GIF is best kept for simple, legacy-compatible loops.
- **Re-saving a JPEG many times during editing.** Each JPEG save discards more data (generation loss). Edit in a lossless format such as PNG or TIFF (or the app's native file) and export to JPEG only once, at the end.

## Compare / Contrast

- **Lossy (JPEG) vs. Lossless (PNG, TIFF):** Lossy permanently discards data for much smaller files, ideal for photos; lossless preserves every pixel for exact reproduction, ideal for graphics, text, edges, and editing.
- **JPEG vs. PNG:** Both are common raster web formats, but JPEG is lossy with no transparency (best for photos), while PNG is lossless with a full alpha channel (best for graphics needing crisp edges or transparency).
- **GIF vs. WebP / AVIF:** All can animate, but GIF is capped at 256 colors with binary transparency, while WebP and AVIF offer full color, smooth alpha, and far better compression.
- **Raster formats (JPEG, PNG, TIFF) vs. Vector SVG:** Raster stores a fixed pixel grid that blurs when enlarged; SVG stores drawing commands that scale to any size sharply, but is unsuitable for photographs.
- **Web formats (PNG, WebP, SVG) vs. Print formats (TIFF, PDF, EPS):** Web-oriented formats work in RGB for screens; TIFF, PDF, and EPS can carry CMYK, which is why print deliverables are prepared as PDF or TIFF rather than PNG.

## Key Takeaway

Match the format to the job: JPEG or WebP/AVIF for photos, PNG for web graphics needing transparency, SVG for logos and icons that must scale, GIF for simple legacy animation, and PDF or TIFF (which carry CMYK) for print and archives. The first question is always lossy versus lossless, and the second is web versus print.

## Practice Question Bank

1. **Which raster format uses lossy compression, stores 24-bit color, and does not support transparency, making it the common default for photographs?**
   - A) JPEG ✓
   - B) PNG
   - C) GIF
   - D) SVG

   JPEG uses lossy compression, stores millions of colors, and has no alpha channel, which is why it is the standard for photographs. PNG is lossless with transparency, GIF is limited to 256 colors, and SVG is a vector format, not a raster photo format.

2. **How does GIF differ from PNG?**
   - A) GIF uses lossy compression while PNG uses lossless compression
   - B) GIF supports a full alpha channel while PNG allows only one transparent color
   - C) GIF is limited to a 256-color palette with on/off transparency and can animate, while PNG supports full color and a smooth alpha channel ✓
   - D) GIF supports CMYK for print while PNG is restricted to the web

   GIF uses an 8-bit indexed palette of at most 256 colors, offers only binary (on/off) transparency, and can animate, whereas PNG supports millions of colors and a smooth alpha channel. GIF is lossless (not lossy), it is PNG that has the fuller transparency, and neither format supports CMYK.

3. **A studio needs one logo file that stays perfectly sharp everywhere, from a tiny site icon to a highway billboard, and whose colors can be restyled in code. Which format best fits?**
   - A) A high-resolution JPEG
   - B) A 256-color GIF
   - C) A large TIFF
   - D) SVG ✓

   SVG stores the logo as vector drawing commands, so it scales to any size without blur and can be styled with CSS. JPEG, GIF, and TIFF are all raster formats with a fixed pixel grid that blurs or pixelates when enlarged beyond its resolution, and none can be recolored in code the way SVG can.

4. **You are publishing a large photograph on a website and want the smallest file at good quality while still displaying for visitors on older browsers. What is the best approach?**
   - A) Use a GIF, because it is universally supported
   - B) Serve a modern format such as WebP or AVIF with a JPEG fallback via the HTML picture element ✓
   - C) Use an SVG so it scales to any screen
   - D) Use an uncompressed TIFF for maximum quality

   WebP and AVIF compress photographs markedly smaller than JPEG at similar quality, and pairing them with a JPEG fallback in a picture element gives older browsers a format they support. GIF's 256-color limit ruins photographs, SVG is a vector format unsuited to photos, and an uncompressed TIFF would be enormous and is not a web delivery format.

5. **A print shop asks for a press-ready file that preserves CMYK color at full quality for a magazine cover, plus an archival master to keep for 20 years. Which pairing fits those two needs?**
   - A) An animated GIF for the cover and a JPEG master
   - B) A PNG for the cover and a WebP master
   - C) An SVG for the cover and a GIF master
   - D) A press-ready PDF (or high-quality TIFF) for the cover and a lossless TIFF archival master ✓

   PDF and TIFF can carry CMYK and full-quality data, so a press-ready PDF (with CMYK TIFF images) suits the cover, and a lossless TIFF is the standard archival master used by libraries and museums. GIF, JPEG, PNG, WebP, and SVG are RGB-oriented or lossy web formats: PNG and SVG cannot carry CMYK, and JPEG and GIF discard quality unsuitable for a print master.

## Sources

- MDN Web Docs, *Image file type and format guide* — https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types (reference only)
- W3C, *Portable Network Graphics (PNG) Specification (Third Edition)* — https://www.w3.org/TR/png-3/ (reference only)
- Library of Congress, *Sustainability of Digital Formats: TIFF, Revision 6.0* — https://www.loc.gov/preservation/digital/formats/fdd/fdd000022.shtml (reference only)
- Library of Congress, *Sustainability of Digital Formats: PDF Family* — https://www.loc.gov/preservation/digital/formats/fdd/fdd000030.shtml (reference only)
- BCcampus, *Graphic Design and Print Production Fundamentals* — https://opentextbc.ca/graphicdesign/ (CC BY 4.0; attributed, no wording reproduced)
- MDN Web Docs, *Including vector graphics in HTML* — https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML (reference only)

## Related Topics

- graphic-design-and-digital-media:foundations:raster-versus-vector
- graphic-design-and-digital-media:foundations:image-resolution
- graphic-design-and-digital-media:foundations:color-models-rgb-and-cmyk
- graphic-design-and-digital-media:foundations:social-media-graphics

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Researched at:** 2026-08-19
- **Rights status:** One CC BY 4.0 open textbook (attributed, no wording reproduced) plus reference-only sources (MDN, W3C, Library of Congress); all prose original.
- **Transformation:** Format traits synthesized from MDN and the W3C PNG spec; TIFF and PDF roles from Library of Congress format descriptions; print-production framing from the BCcampus OER. Raster/vector, resolution, and RGB/CMYK concepts are referenced to their own topics rather than re-taught. No copyrighted images, logos, or font files reproduced.
