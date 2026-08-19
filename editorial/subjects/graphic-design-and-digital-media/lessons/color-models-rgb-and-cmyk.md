# Color Models: RGB and CMYK

## In 30 Seconds

A color model is a system for producing and encoding color. Screens build color with light using red, green, and blue (RGB), an additive system where all three at full strength make white. Print builds color with cyan, magenta, yellow, and black ink (CMYK), a subtractive system where inks absorb light and stacking them heads toward dark. Because the two work so differently, they can reproduce different ranges of color, which is why a design often looks different on screen than in print.

## Why This Matters

Almost every design lives in two worlds: the glowing screen where it is made and the printed page or other output where it may end up. RGB and CMYK are how those worlds encode color, and they do not overlap perfectly. Knowing which model applies, and that a vivid on-screen color may be impossible to print, saves you from the classic surprise of a proof that looks muddy or dull. The same understanding underpins hex codes in web design, color management with ICC profiles, and the choice between spot and process inks. This is foundational literacy for anyone who moves images and layouts between devices.

## Learning Objectives

- Define a color model as a system for producing and encoding color.
- Distinguish additive color (RGB, light) from subtractive color (CMYK, ink) and explain what happens when each is fully combined.
- Explain why black (K) is added to cyan, magenta, and yellow in print.
- Define color gamut and explain why a design can look different on screen versus in print.
- Interpret hex notation as an RGB encoding and describe the role of color management and ICC profiles at a high level.
- Distinguish spot color from process color, and identify Pantone as a proprietary spot-color system.

## The College Version

### Additive color: how screens make color with light

A color model is a system for producing color and encoding it as numbers a device can use. Screens use the additive model. A monitor, tablet, or projector emits light in three channels: red, green, and blue, the RGB or additive primaries. Human color vision starts with three types of cones in the eye, each sensitive to roughly one-third of the visible spectrum in the red, green, and blue regions, so any color sensation can be produced by mixing appropriate amounts of these three lights. The word additive is literal: you are adding light to light. With all three channels off, the screen emits nothing and you see black. With all three at full strength, the light combines to white. Mixing pairs produces the other familiar colors: red plus green light makes yellow, green plus blue makes cyan, and red plus blue makes magenta. Each channel is usually stored as a value from 0 to 255 (8 bits), so an RGB triple like (46, 134, 222) names one specific color. This is the model behind digital cameras, displays, and everything you design for the web.

### Subtractive color: how print makes color with ink

Print uses the subtractive model, and it runs the logic in reverse. Ink on paper does not emit light; it absorbs, or subtracts, part of the light that strikes it and reflects the rest back to your eye. The subtractive primaries are cyan, magenta, and yellow (CMY), and each acts as a filter that removes one additive primary: cyan absorbs red, magenta absorbs green, and yellow absorbs blue. Start with white paper, which reflects everything, and each layer of ink takes something away. Because you are subtracting, the absence of ink is white and combining all the inks heads toward dark. In theory cyan, magenta, and yellow together would make black, but real inks are imperfect, so equal amounts produce a muddy brown rather than a clean, dense black. Print therefore adds a fourth ink, black, giving the four process colors abbreviated CMYK. The K stands for key, a term from traditional printing where the black plate, the key plate, carried the fine detail and the other plates were registered (aligned) to it. Black also makes text crisp, deepens shadows, and reduces how much total ink soaks the paper.

### Gamut, and why screen and print disagree

A color gamut is the full range of colors a given device or model can actually produce. This is the crux of why the same file can look different on screen than in print: RGB light and CMYK ink have different gamuts, and neither contains the other completely. In practice the RGB gamut of a good screen is larger and includes vivid, saturated colors, especially bright oranges, greens, purples, and neon tones, that no combination of standard process inks can reproduce. When a color you chose on screen falls outside what the printer can make, it is out of gamut, and it must be replaced by the nearest printable color, which is why a glowing on-screen blue may print flatter and darker. Converting an RGB file to CMYK almost always shrinks the range of colors it contains. Understanding gamut turns an unpleasant surprise into a design decision: you can check for out-of-gamut colors and adjust them deliberately instead of letting the conversion do it blindly.

### Encoding, color management, spot versus process

RGB values are encoded in several notations. On the web the most common is the hex triplet, written as a hash sign followed by six hexadecimal digits, #RRGGBB. Each pair of digits is a base-16 number from 00 to FF that gives one channel's value from 0 to 255: in #2E86DE the pairs 2E, 86, and DE mean red 46, green 134, blue 222. A three-digit shorthand like #2AD simply doubles each digit to #22AADD. Hex is an sRGB encoding, a specific, standardized RGB color space. Because a raw RGB or CMYK number means slightly different things on different hardware, the industry uses color management: an ICC profile, defined by the International Color Consortium, characterizes exactly what colors a particular device produces, and a color-management system uses these profiles to translate a color from one device's space to another through a device-independent connection space. That is how a photo can look consistent from camera to screen to press. Finally, print distinguishes two ways of applying color. Process color builds images from the four CMYK inks combined in tiny dots. Spot color uses a single, pre-mixed ink for one exact color, applied on its own printing unit, which gives more reliable, consistent results for things like logos. Pantone runs the best-known spot-color system, a proprietary library of numbered ink recipes matched to printed swatch books; its exact values are proprietary and are named here only as a reference.

## Key Vocabulary

- **Color model** — A system for producing color and representing it as numbers a device can store and reproduce, such as RGB or CMYK.
- **Additive color** — Color made by adding light. Red, green, and blue light combine toward white; with no light the result is black. Used by screens.
- **Subtractive color** — Color made by inks or pigments that absorb (subtract) part of the light and reflect the rest. Combining inks heads toward dark; no ink is white. Used in print.
- **RGB** — The additive primaries red, green, and blue, and the channels a screen uses to emit color, typically as three values from 0 to 255.
- **CMYK** — The four process inks used in full-color printing: cyan, magenta, yellow, and key (black).
- **Color gamut** — The full range of colors a particular device or color model can reproduce.
- **Out-of-gamut color** — A color that one device or model can show but another cannot reproduce, so it must be substituted with the nearest available color.
- **Hex color notation** — An sRGB encoding that writes a color as #RRGGBB, where each two-digit hexadecimal pair gives a red, green, or blue value from 0 to 255.
- **ICC profile** — A standardized data set from the International Color Consortium describing the colors a specific device or color space produces, used by color management to translate color between devices.
- **Spot vs. process color** — Process color builds images from the four CMYK inks; spot color uses a single pre-mixed ink for one exact color. Pantone is a proprietary spot-color system.

## Eli-10

There are two opposite ways to make a color, and which one you use depends on whether you are working with light or with paint. A screen makes color by shining tiny red, green, and blue lights and adding them together. Turn all three up full and you get white; turn them all off and you get black darkness. Printing is the reverse. Ink cannot shine; it can only soak up some of the light hitting the paper and bounce the rest back. So printers start with white paper and lay down cyan, magenta, and yellow ink to subtract light, plus black ink because the three colored inks alone only muddy to brown. Here is the catch that trips people up: light can make brighter, punchier colors than ink can. That is why a glowing color on your screen sometimes prints looking dull or darker: the printer simply cannot mix an ink that bright.

## Eli's Analogy

Additive color is like aiming red, green, and blue flashlights at the same spot on a wall: pile them all on and the spot goes white. Subtractive color is like stacking sheets of colored cellophane over a lamp: each sheet blocks more light, so the more you stack, the darker it gets.

**Where the analogy breaks down:** The flashlights and cellophane show why adding light brightens and adding ink darkens, but they understate the precision: real screens and printers use exact numeric values per channel, and real inks are imperfect, which is exactly why print needs a separate black ink and cannot hit every bright color the flashlights can.

## Worked Example

Take the hex color #2E86DE and decode it as RGB. Hex is base 16, so each digit runs 0-9 then A-F, where A is 10 up to F which is 15. Split the six digits into three pairs, one per channel: 2E is red, 86 is green, DE is blue. Convert each pair: 2E means 2x16 + 14 = 46, so red is 46. 86 means 8x16 + 6 = 134, so green is 134. DE means 13x16 + 14 = 222, so blue is 222. The color is RGB (46, 134, 222), a medium blue. Two checks confirm the additive logic: #FFFFFF is (255, 255, 255), every channel maxed, which is white, and #000000 is (0, 0, 0), no light, which is black. Mixing pure red light #FF0000 with pure green light #00FF00 gives #FFFF00, or (255, 255, 0), which is yellow, exactly what adding red and green light should produce.

## Common Mistakes

- **Thinking mixing all colors always makes black, or always makes white.** It depends on the model. Adding all RGB light makes white; combining all CMY inks subtracts light and heads toward dark (with black added for a true, dense black).
- **Designing artwork in RGB and expecting the printed piece to match the screen exactly.** RGB and CMYK have different gamuts. Vivid on-screen colors can be out of gamut for ink and will shift. Preview or convert to CMYK and check colors before printing.
- **Believing hex codes or CMYK numbers mean the same color on every device.** Raw values are device-dependent. Color management with ICC profiles is what keeps a color consistent as it moves between camera, screen, and press.
- **Assuming black in print is made by mixing cyan, magenta, and yellow.** Real CMY inks combine to a muddy brown, so a dedicated black (K) ink is added for true black, sharp text, and less total ink on the paper.
- **Treating Pantone (spot) and CMYK (process) as interchangeable.** Process color builds an image from four inks; a spot color is one pre-mixed ink for one exact hue. Some spot colors, including many Pantones, cannot be matched with process inks.

## Compare / Contrast

- **Additive (RGB) vs. Subtractive (CMYK)** — Additive builds color by emitting and combining light (all channels on = white); subtractive builds color by absorbing light with ink (more ink = darker, no ink = white).
- **RGB gamut vs. CMYK gamut** — Both are limited ranges of reproducible color, but they do not match; screens can typically show vivid colors that standard process inks cannot print, so converting RGB to CMYK usually loses colors.
- **Process color vs. Spot color** — Process color simulates a hue from tiny dots of the four CMYK inks; spot color lays down one pre-mixed ink for an exact, consistent hue. Pantone is a proprietary spot-color library.
- **Raw color value vs. Color management** — A raw RGB or CMYK number is device-dependent and can look different everywhere; ICC profiles and a color-management system translate it so the intended color stays consistent across devices.

## Key Takeaway

Screens make color by adding red, green, and blue light (RGB, all on = white); print makes color by subtracting light with cyan, magenta, yellow, and black ink (CMYK, more ink = darker). Their gamuts differ, so a design can look different on screen than in print, and color management with ICC profiles exists to keep color consistent across devices.

## Practice Question Bank

1. **In the additive (RGB) color model used by screens, what results when red, green, and blue light are all combined at full strength?**
   - A. White ✓
   - B. Black
   - C. Muddy brown
   - D. Gray

   *Additive color adds light to light, so all three channels at full strength combine to white; the absence of all light is black. Muddy brown describes combining CMY inks (subtractive), not RGB light, and gray is not the result of maxing all channels.*

2. **Why is a fourth ink, black (K), added to cyan, magenta, and yellow in process printing?**
   - A. Because screens require a black channel to display images
   - B. Because black is one of the additive primaries
   - C. Because combining C, M, and Y inks yields a muddy brown rather than a true black, and black also sharpens text and deepens shadows ✓
   - D. Because CMYK must always contain exactly five inks

   *Real cyan, magenta, and yellow inks are imperfect and combine to a muddy brown, so a dedicated black (K) ink is added for a dense, true black, crisp text, and less total ink. Screens use RGB light, not ink; black is not an additive primary; and process printing uses four inks, not five.*

3. **A designer picks a vivid neon-orange on screen, but the printed proof looks noticeably duller. What is the most accurate explanation?**
   - A. The monitor was set to CMYK instead of RGB
   - B. The neon-orange is out of the CMYK gamut, so it was replaced by the nearest printable color ✓
   - C. Hex codes cannot represent orange
   - D. The printer ran out of black ink

   *Screen RGB can display saturated colors, such as neon oranges, that standard process inks cannot reproduce. Such a color is out of gamut for CMYK and must be substituted with the closest printable color, which looks duller. Monitors emit RGB light regardless of a document's color mode, hex can encode orange, and a black-ink shortage would not selectively dull one bright hue.*

4. **The hex color #2E86DE encodes which RGB values? (Hex pairs: 2E, 86, DE.)**
   - A. R 222, G 134, B 46
   - B. R 46, G 134, B 222 ✓
   - C. R 46, G 222, B 134
   - D. R 43, G 128, B 224

   *Each two-digit hex pair maps to a 0-255 channel value in order red, green, blue: 2E = 2x16+14 = 46 (red), 86 = 8x16+6 = 134 (green), DE = 13x16+14 = 222 (blue). Option A reverses the channels, C swaps green and blue, and D miscomputes the conversions.*

5. **Which statement about spot color, process color, and color management is correct?**
   - A. Spot color builds every hue from the four CMYK inks combined in dots
   - B. An ICC profile is a proprietary Pantone ink recipe
   - C. Hex codes are a CMYK encoding used only for print
   - D. Color management keeps color consistent across devices, and spot color uses a single pre-mixed ink while process color combines CMYK; Pantone is a proprietary spot-color system ✓

   *Process color combines the four CMYK inks in dots, while spot color applies one pre-mixed ink for an exact hue, and Pantone is a proprietary spot-color library; color management, via ICC profiles, translates color so it stays consistent across devices. Option A describes process (not spot) color, an ICC profile is a device color characterization rather than a Pantone recipe, and hex is an sRGB (RGB) encoding used on screens, not a CMYK print encoding.*

## Sources

- BCcampus / Graphic Communications Open Textbook Collective. *Graphic Design and Print Production Fundamentals*, 4.2 Colour Science and 5.3 Colour. CC BY 4.0. https://opentextbc.ca/graphicdesign/ (read via the eCampusOntario Pressbooks mirror when the canonical host blocked the fetcher)
- International Color Consortium. "Profile" (ICC profiles and the profile connection space). Reference only. https://www.color.org/profile.xalter
- W3C. *CSS Color Module Level 4* (hexadecimal color notation). Reference only. https://www.w3.org/TR/css-color-4/
- Color Vision Printing. "Why is the color Black designated by the letter K in CMYK?" Reference only. https://www.colorvisionprinting.com/blog/why-is-the-color-black-designated-by-the-letter-k-in-cmyk

## Related Topics

- graphic-design-and-digital-media:foundations:color-theory
- graphic-design-and-digital-media:foundations:file-formats
- graphic-design-and-digital-media:foundations:image-resolution
- graphic-design-and-digital-media:foundations:photo-editing

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Estimated minutes:** 9
- **Researched at:** 2026-08-19
- **Rights:** One CC BY 4.0 open textbook (attributed, no wording reproduced) plus three reference-only sources (ICC, W3C, a printing reference); all prose original. No proprietary Pantone values reproduced.
- **Transformation:** Additive/subtractive color, the CMYK black ink, spot versus process color, and Pantone synthesized from the BCcampus OER; gamut and ICC-profile framing from the International Color Consortium; hex-to-sRGB encoding from the W3C CSS Color spec. The worked example was computed and verified in Bash.
