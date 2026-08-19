# Raster versus Vector

## In 30 Seconds

A digital picture is stored one of two ways. A raster (bitmap) image is a fixed grid of colored pixels: it captures photographs beautifully but is resolution-dependent, so enlarging it past its pixel count turns crisp edges into blur or blocks. A vector graphic stores shapes as math—points, paths, and Bezier curves—so software re-renders it sharply at any size. Vectors suit logos, icons, and type; rasters suit photos.

## Why This Matters

Nearly every design decision starts with this fork. Save a logo as a raster and it pixelates the moment someone scales it to a billboard; force a photograph into vectors and it cannot hold the continuous tones a camera records. Knowing which model a file uses tells you whether it will survive enlargement, roughly how large the file will be, and which format to export. It also underlies later topics: image resolution, file formats, and print production all assume you can already tell a grid of pixels from a set of mathematical paths.

## Learning Objectives

- Define raster (bitmap) and vector images by how each stores picture data.
- Explain why vector graphics scale losslessly while raster images degrade when enlarged.
- Distinguish the tasks each model suits, from photographs to logos and line art.
- Apply the distinction to choose a model and predict what happens when a file is scaled or converted.

## The College Version

### Two ways to store a picture

Every digital image is encoded in one of two fundamentally different ways, and the encoding—not the subject—determines what you can do with the file. A raster image, also called a bitmap, is a rectangular grid of tiny colored squares called pixels. Each pixel holds one color value, and the picture emerges from the mosaic of the whole grid, the way a photo does when you zoom in far enough to see the individual dots. The W3C's PNG specification defines a raster image precisely as a rectangular array of pixels. Because the grid is fixed the moment the file is made, a raster image has a set number of pixels and therefore a native size at which it looks its best.

A vector graphic stores no pixels at all. Instead it records shapes as mathematics: anchor points at specific coordinates, the straight or curved paths that connect them, and instructions for fill and stroke color. The curves are usually Bezier curves, defined by anchor points and control handles that set how the line bends. The W3C names this model in the title of its standard—SVG stands for Scalable Vector Graphics—and defines its content as vector graphic shapes such as paths consisting of straight lines and curves. When you open a vector file, software reads the math and draws the shapes fresh; nothing in the file commits it to a particular pixel count.

### Why one scales and the other cannot

The consequence of that difference is scalability. A vector shape is resolution-independent: the stored description is effectively "a circle of this radius centered here, filled with this color," so the renderer can redraw it at postage-stamp size or billboard size and the edges stay mathematically exact. Enlarging costs nothing in quality because the picture is recomputed, not stretched. This is the same reason outline fonts—which store each glyph as points and Bezier curves—print crisply on a low-resolution laser printer and a high-resolution imagesetter alike: the outline is re-rendered at whatever resolution the device offers.

A raster image is resolution-dependent, and that is a hard limit rather than a quality setting. The file contains a specific number of pixels; when you enlarge it beyond those dimensions, the software must invent color values for pixels that were never captured. It can only guess by interpolating from neighbors, which smears detail into blur or, without smoothing, into visible blocks. The BCcampus print-production text puts it bluntly about the raster image processor that drives print devices: it does not do a good job of interpolating more data to produce additional detail in a photo or shape if that information is missing to begin with. You cannot add detail a raster never recorded. Shrinking a raster is safe—you are discarding data—but enlarging past its native dimensions is where quality collapses.

### Choosing the right model

Match the model to the content. Photographs and other continuous-tone images—anything with subtle gradations of light, shadow, and texture—are naturally raster, because a camera sensor samples the scene into millions of pixels and there is no small set of shapes that would describe a human face. Raster is also the model for painted digital art and any effect built up pixel by pixel. Its costs are that files grow with pixel count and that the image cannot be enlarged past its capture resolution.

Flat, hard-edged artwork is the domain of vector: logos, icons, symbols, type set as outlines, maps, diagrams, and line art. A logo must look identical on a business card and on the side of a truck, so it has to be resolution-independent, which forces it to be vector. Vector files for such art are also usually small, because "a circle and two paths" is far less data than a grid of thousands of pixels, and each shape stays individually editable. Vector's weakness is the mirror image of raster's strength: it cannot represent a photograph's continuous tone, because doing so would demand an unmanageable number of tiny shapes. So the working rule is simple—continuous tone means raster, scalable flat art means vector—and most real projects, a photo inside a logo-topped layout, end up using both.

### Converting between them, and where the formats live

The two models convert, but not symmetrically. Turning a vector into a raster is called rasterizing: the software picks a resolution and renders the math into a fixed pixel grid—exactly what a raster image processor does when it converts a page of vector outlines into the dot pattern a printer lays down. Rasterizing is routine and clean at the chosen size, but the result is now a raster and inherits every raster limitation. Going the other way is harder. Converting a raster to vector, called tracing, asks software to guess the shapes hidden in the pixels; it works acceptably for simple, high-contrast art but throws away the fine gradations of a photograph, so a traced photo looks like a poster reduction rather than the original.

Which specific file you save depends on the model. Common raster formats include JPEG, PNG, GIF, and TIFF; common vector formats include SVG, EPS, and AI, while PDF can carry both. The detailed catalog of what each format compresses, preserves, and is best for belongs to the File Formats topic; here the point is only that a format is downstream of the model—you first decide raster or vector, and the sensible format follows. Likewise, exactly how many pixels per inch a raster needs for a given print or screen size is the province of Image Resolution; this topic settles only the prior question of which of the two kinds of image you are holding.

## Key Vocabulary

- **Raster image (bitmap):** An image stored as a rectangular grid of pixels, each holding one color value; the picture is the whole mosaic of the grid.
- **Vector graphic:** An image stored as mathematical shapes—anchor points, paths, and curves with fill and stroke—rather than as pixels.
- **Pixel:** The smallest element of a raster image: a single cell in the grid carrying one color value.
- **Path:** A line or shape in a vector graphic defined by connected anchor points and the straight or curved segments between them.
- **Bezier curve:** A curve defined by anchor points and control handles that determine how it bends; the standard way vector software draws smooth curves.
- **Resolution-dependent:** Describes an image whose quality is tied to a fixed pixel count, so it degrades when enlarged beyond its native dimensions.
- **Resolution-independent:** Describes an image defined by math that can be re-rendered at any size without loss of quality.
- **Rasterize:** To convert a vector graphic into a raster image by rendering its shapes into a fixed grid of pixels at a chosen resolution.

## Eli-10

Imagine two ways to keep a drawing of a star. The first way is a sheet of graph paper where you color in squares to make the star shape—that's a raster image, and the star is only as smooth as your squares are small. Blow the paper up on a photocopier and the squares get bigger, so the edges look chunky. The second way is a written instruction: "a five-pointed star, this wide, this color." That's a vector. Hand that instruction to anyone and they can redraw the star at any size, always smooth, because they are following the recipe instead of copying colored squares. Photos have to use the graph-paper way, because there is no short recipe for every freckle and shadow. Logos use the recipe way, so they stay sharp whether they sit on a phone screen or a stadium banner.

## Eli's Analogy

A raster image is a mosaic made of fixed tiles; a vector graphic is the blueprint that tells you how to lay the tiles at any size.

**Where the analogy breaks down:** The blueprint idea suggests you could always write a blueprint for any picture, but you cannot practically describe a photograph as a compact set of shapes—the tiles (pixels) are the only workable way to store continuous tone, which is exactly why photos stay raster.

## Worked Example

A studio designs a logo as vector art. On business cards it prints at a few centimeters; scaled up for a storefront sign three meters wide, it renders just as crisply, because the software recomputes the paths at the larger size—there are no pixels to stretch. The team also has a product photo, a raster JPEG that is 1,500 pixels wide. Dropped onto the same three-meter sign, those 1,500 pixels must cover a huge area, so each one balloons into a visible block and the photo turns soft and stair-stepped. The fix is not to enlarge the small raster but to re-shoot or re-export the photo at higher pixel dimensions; the logo needed no such fix because a vector carries no fixed resolution.

## Common Mistakes

- **Believing you can restore sharpness to a small, blurry raster by enlarging it and raising its resolution setting.** Enlarging cannot add detail that was never captured; interpolation only guesses at missing pixels. You must obtain the image at higher pixel dimensions from the original source.
- **Saving a logo only as a JPEG or PNG and treating that as the master file.** Those are raster formats with a fixed size. Keep the master as vector (for example SVG, EPS, or AI) so it scales to any use, and export rasters only when a specific size is needed.
- **Assuming a vector file can hold a photograph well.** Photographs are continuous-tone and need pixels; forcing them into vectors by tracing discards the gradations and leaves a flat, posterized result.
- **Confusing file size with resolution or image quality.** A vector logo can be tiny in bytes yet print huge; a raster's byte size grows with its pixel count, which is a separate question from whether the picture looks good at a given size.
- **Thinking "raster" and "vector" are names of file formats.** They name how an image is stored. Formats like SVG or JPEG are the downstream choice, and some formats such as PDF can hold both kinds.

## Compare / Contrast

- **Raster (bitmap) image vs. Vector graphic:** Raster stores a fixed grid of pixels and is resolution-dependent; vector stores mathematical shapes and is resolution-independent.
- **Enlarging a raster vs. Enlarging a vector:** Enlarging a raster stretches existing pixels and must invent missing ones, causing blur or blocks; enlarging a vector recomputes the shapes and stays sharp.
- **Best for photographs vs. Best for logos and line art:** Continuous-tone photos need the per-pixel sampling of raster; flat, hard-edged art that must scale to many sizes needs vector.

## Key Takeaway

Raster stores a fixed grid of pixels—great for photographs but degrading when enlarged; vector stores shapes as math—infinitely scalable and ideal for logos, icons, and type. Choose the model by the content and the sizes you will need.

## Practice Question Bank

1. **What fundamentally distinguishes a raster image from a vector graphic?**
   - A. Raster images are colored while vector graphics are only black and white.
   - B. A raster image stores a fixed grid of pixels, while a vector graphic stores shapes defined mathematically by points and paths.
   - C. Raster images are always smaller files than vector graphics.
   - D. Vector graphics can display photographs but raster images cannot.
   - **Answer: B.** The defining difference is how each stores the picture—raster as a fixed grid of pixels, vector as mathematical shapes. Color is not the distinction, file size depends on content, and raster (not vector) is what handles photographs.

2. **Why can a vector logo be enlarged to almost any size without losing sharpness?**
   - A. Its shapes are stored as math and re-rendered at the requested size, so the edges stay exact.
   - B. It simply contains many more pixels than a raster image does.
   - C. Its pixels automatically multiply when the file is opened larger.
   - D. Enlarging compresses the file, and compression sharpens the edges.
   - **Answer: A.** A vector is resolution-independent: the renderer recomputes the paths at any size. Vectors hold no pixels (ruling out B and C), and compression is unrelated to edge sharpness (D).

3. **A designer enlarges a 600-pixel-wide photo to fill a large banner. What is the most likely result, and why?**
   - A. It stays perfectly sharp, because photographs are resolution-independent.
   - B. The file automatically converts itself into a vector graphic.
   - C. It gains detail, because the software adds new information about the scene.
   - D. It looks blurry or blocky, because the software must guess color values for pixels that were never captured.
   - **Answer: D.** A raster is resolution-dependent; enlarging past 600 pixels forces interpolation of pixels that were never captured. Photos are not resolution-independent, files do not change model on their own, and enlargement cannot add real detail.

4. **Which project is the clearest case for using a vector graphic rather than a raster image?**
   - A. Retouching the colors of a wedding photograph.
   - B. Storing a scanned continuous-tone oil painting.
   - C. A company icon that must look crisp both as a tiny favicon and on a building sign.
   - D. A digital painting built up brushstroke by brushstroke.
   - **Answer: C.** An icon that must scale from favicon to building sign needs resolution-independence, which only vector provides. The others are continuous-tone or pixel-built images and belong to the raster model.

5. **Which statement best describes converting between the two models?**
   - A. Both directions are equally lossless and fully reversible.
   - B. Rasterizing a vector renders it into a fixed pixel grid, but tracing a photo into vectors discards its continuous tones.
   - C. A vector can never be converted into a raster at all.
   - D. Tracing a photograph into vectors increases its detail and resolution.
   - **Answer: B.** Conversion is asymmetric: rasterizing renders vector math into pixels (routine), while tracing a photo estimates shapes and throws away continuous tone. So the directions are not equally reversible, vectors rasterize readily, and tracing cannot add detail.

## Sources

- **Graphic Design and Print Production Fundamentals**, Chapter 5 (Pre-press), section 5.2 "Raster Image Processing" — BCcampus / Graphic Communications Open Textbook Collective (Wayne Collins), CC BY 4.0. <https://opentextbc.ca/graphicdesign/> (read via the Internet Archive full-text copy after the canonical host returned 403). Supports the mechanism of raster resolution-dependence (a RIP cannot interpolate detail that was never captured), the description of glyphs as points and vector curves rendered at each device's resolution, and photographs captured as pixels.
- **Scalable Vector Graphics (SVG) 1.1 (Second Edition)**, Introduction — World Wide Web Consortium (W3C), reference only. <https://www.w3.org/TR/SVG11/> Supports that a vector graphic is composed of mathematically described paths of straight lines and curves and is inherently scalable.
- **Portable Network Graphics (PNG) Specification (Third Edition)** — World Wide Web Consortium (W3C), reference only. <https://www.w3.org/TR/png/> Supports that a raster image is a rectangular array of pixels and that PNG is a lossless raster format.

## Related Topics

- graphic-design-and-digital-media:foundations:image-resolution
- graphic-design-and-digital-media:foundations:file-formats
- graphic-design-and-digital-media:foundations:logo-design-principles
- graphic-design-and-digital-media:foundations:digital-illustration

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Sources:** 3 (one CC BY OER adapted with attribution; two reference-only W3C standards)
- **Rights:** Original prose; no substantial source wording reproduced; no copyrighted images, logos, or font files reproduced.
- **Transformation:** Facts synthesized from the BCcampus OER and the W3C SVG and PNG specifications into original prose; the machine-generated draft was discarded as boilerplate.
- **Notice:** Original EliExplains lesson for owner review; educational material, not professional design or legal advice.
