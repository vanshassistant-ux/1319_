# Spreadsheets

## In 30 Seconds

A spreadsheet is a grid of cells arranged in lettered columns and numbered rows, so every cell has an address like B3. You type text, numbers, or dates into cells, and you make a cell calculate by writing a formula that begins with an equals sign, such as `=SUM(B2:B6)`. Built-in functions like SUM, AVERAGE, COUNT, and IF do common jobs. Understanding how cell references adjust when you copy a formula is the skill that makes spreadsheets powerful rather than just a tidy table.

## Why This Matters

Spreadsheets are the default tool for turning raw numbers into answers, whether you are tracking a budget, grading a class, or summarizing a lab dataset. In college they appear in accounting, statistics, science labs, and any assignment that asks you to organize and calculate. Employers across fields expect basic spreadsheet fluency, and the same core ideas transfer between Microsoft Excel, Google Sheets, and LibreOffice Calc. The relative-versus-absolute reference distinction in particular separates people who retype formulas by hand from people who write one formula and copy it across hundreds of rows correctly.

## Learning Objectives

- Define a cell, a cell reference, and a formula in a spreadsheet.
- Distinguish relative references from absolute references and predict how each changes when a formula is copied.
- Apply SUM, AVERAGE, and COUNT to a range of cells.
- Explain how charts, sorting, and filtering help interpret spreadsheet data.

## The College Version

### The grid of cells

A spreadsheet organizes data into a grid. Vertical columns are labeled with letters (A, B, C, and so on) and horizontal rows are numbered (1, 2, 3, and so on). The box where a column and a row meet is a cell, and its address combines the two: the cell in column B, row 3, is B3. This address is called a cell reference. One cell is always the active cell, highlighted and ready for input. A single file can hold several sheets, each its own grid, so related tables can live side by side. Because every value sits at a precise, predictable address, other cells can point at it and pull it into a calculation. That addressing is the quiet foundation of everything else a spreadsheet does: without stable names for locations, formulas would have nothing reliable to refer to.

### Entering and formatting data

Each cell holds one piece of information. A cell can contain text (a label such as "Rent"), a number (850), or a date (2026-08-19), and the program treats these types differently. Numbers and dates can be added, averaged, and sorted in order, while text is stored as written and ignored by numeric functions. Spreadsheets usually detect the type automatically from what you type, though you can also set a cell's format explicitly, for example to display a number as currency or a percentage. Formatting changes how a value looks, not the value stored underneath. Keeping one consistent data type per column is what lets formulas, sorting, and charts behave predictably; a number accidentally stored as text, perhaps because of a stray space, will quietly drop out of a sum and produce a wrong total.

### Formulas and functions

A cell becomes a calculator when its content begins with an equals sign. Everything after the `=` is evaluated and the result is displayed in the cell, while the formula itself stays visible in the formula bar. You can write plain arithmetic, such as `=B2+B3`, or call a function, which is a named, built-in operation. Common ones include SUM to add a range, AVERAGE to find the mean, COUNT to count how many cells in a range hold numbers, and IF to return one value or another depending on a condition. A range is written with a colon between two corners: `B2:B6` means every cell from B2 through B6, which is five cells. So `=SUM(B2:B6)` adds those five values. The payoff is that results are live: if any referenced cell changes, every formula that depends on it recalculates instantly, with no retyping.

### Relative and absolute references

By default a cell reference is relative: it describes a position relative to the formula's own cell, so when you copy the formula elsewhere the reference shifts to match. Copy `=SUM(A1:A9)` one column to the right and it becomes `=SUM(B1:B9)` on its own, which is usually exactly what you want when filling a row of column totals. But sometimes a formula must always point at one fixed cell, such as a tax rate, an exchange rate, or a single grand total. Putting a dollar sign before the column letter and the row number locks that part in place: `$B$1` will not move no matter where the formula is copied. A reference can be fully absolute (`$B$1`), fully relative (`B1`), or mixed (`$B1` or `B$1`), locking only the column or only the row. Many programs let you cycle through these forms with the F4 key while you edit a reference.

### Seeing and organizing data: charts, sorting, filtering

Numbers in a grid are hard to read in bulk, so spreadsheets can turn a range into a chart: a bar chart to compare categories, a line chart to show change over time, or a pie chart for parts of a whole. Because the chart is tied to the cells, it redraws itself when the underlying data changes. Sorting reorders rows by the values in a chosen column, alphabetically or from largest to smallest, and a proper sort moves each entire row so a row's values stay together with its label. Filtering temporarily hides rows that do not meet a condition, letting you show only expenses above 500, for instance, without deleting anything; clearing the filter brings every row back. Together these tools let you move from a wall of numbers to a specific, defensible answer.

## Key Vocabulary

- **Cell** — A single box in a spreadsheet grid, formed where one column meets one row, holding one value.
- **Cell reference** — The address of a cell, written as its column letter followed by its row number, such as B3.
- **Formula** — An instruction typed into a cell, starting with an equals sign, that calculates a result from values or other cells.
- **Function** — A named, built-in operation such as SUM or AVERAGE that performs a common calculation on the values you give it.
- **Range** — A block of cells written with a colon between two corners, such as B2:B6, covering every cell in between.
- **Relative reference** — A cell reference that shifts to a new position when the formula containing it is copied to another cell.
- **Absolute reference** — A cell reference locked with dollar signs, such as $B$1, that stays fixed when the formula is copied.
- **Chart** — A visual such as a bar, line, or pie graph that represents the values in a range of cells.
- **Sort** — To reorder the rows of a table by the values in a chosen column.
- **Filter** — To temporarily hide rows that do not meet a chosen condition, without deleting them.

## Eli-10

Picture a huge sheet of graph paper where every little square has a name made from its column letter and row number: B3, D7, and so on. You can write a word, a number, or a date in any square. The trick that makes a spreadsheet more than a table is that a square can hold an instruction instead of a value. Start the square with an equals sign and it does math for you: `=B2+B3` shows the total of those two squares, and if you change B2, the total fixes itself. When you copy an instruction to a new square, it rewrites itself to point at the squares near its new home, and that is a relative reference. If you want one square to stay pinned no matter where you copy the instruction, you nail it down with dollar signs, like `$B$1`.

## Eli's Analogy

A spreadsheet formula is like a recipe card that says "add the two jars to my left" instead of naming specific jars. Copy that card to a different shelf and it still means "the two jars to my left," so it now adds different jars. Writing `$B$1` is like taping on a note that says "always use the big jar on the top shelf," which stays true wherever you carry the card.

**Where the analogy breaks down:** The recipe image captures how relative references move and absolute ones stay put, but it misses that a spreadsheet recalculates instantly and on its own every time any ingredient changes, while a paper recipe never updates its own results. It also hides that functions like AVERAGE or IF can act on hundreds of cells at once, far more than a short shelf of jars.

## Worked Example

Suppose column A lists five products and column B their prices in B2:B6: 1200, 850, 430, 610, and 300. In B7 you type `=SUM(B2:B6)`; the cell shows **3390**, the total of the five prices, and `=AVERAGE(B2:B6)` would show **678**. Now put a sales-tax rate of 0.08 in cell E1. In C2 you enter `=B2*$E$1`, which gives **96**. Copy C2 down to C3, C4, C5, and C6: the relative part B2 advances to B3, B4, B5, B6, but the absolute `$E$1` stays locked on the rate, so C3 computes 850 × 0.08 = **68**, C4 gives **34.40**, C5 gives **48.80**, and C6 gives **24**. If you had written `=B2*E1` instead, copying down would drag the rate reference to E2, E3, and so on, which are empty, so every tax after the first would wrongly come out as 0. The dollar signs are what keep one formula correct across every row.

## Common Mistakes

- **Starting a calculation without an equals sign, so the cell shows the text "B2+B3" instead of a result.** Every formula must begin with `=`. Without it, the program treats the entry as plain text and does no math.
- **Copying a formula that should point at one fixed cell while leaving that reference relative, so it drifts off the intended cell.** Lock the fixed cell with dollar signs (`$E$1`) before copying, or press F4 while editing the reference to add them.
- **Assuming `=SUM(B2:B6)` covers four cells because 6 minus 2 is 4.** A range includes both endpoints, so B2:B6 is five cells: B2, B3, B4, B5, and B6.
- **Entering numbers with stray characters or as text, then wondering why SUM ignores them.** Keep numeric data as actual numbers in a consistent column; a value that only looks like a number is not counted by numeric functions.
- **Sorting a single column of a table by itself and scrambling the rows.** Sort the whole table so each row's values stay attached to its label; selecting one column alone can separate data from the rows it belongs to.

## Compare / Contrast

- **Relative reference (B1)** vs **Absolute reference ($B$1)** — A relative reference shifts to match its new position when the formula is copied; an absolute reference stays fixed on the same cell.
- **Formula** vs **Function** — A formula is any `=`-instruction in a cell; a function is a named built-in operation, like SUM, that a formula can call.
- **Sorting** vs **Filtering** — Sorting reorders all rows by a column's values; filtering hides rows that fail a condition without deleting them or changing the rest.

## Key Takeaway

A spreadsheet is a grid of addressable cells where formulas beginning with `=` turn data into live calculations. Knowing when to lock a reference with dollar signs is what lets one formula stay correct as you copy it across many rows.

## Practice Question Bank

1. **In a spreadsheet, what does the cell reference B3 identify?**
   - A. The third worksheet in the file
   - B. The cell where column B meets row 3 ✓
   - C. A block of three cells in column B
   - D. A function named B3

   *A cell reference names a single cell by its column letter and row number, so B3 is the cell at the intersection of column B and row 3. It is not a sheet, a range, or a function.*

2. **You type `=A2*$B$1` in cell C2 and copy it down to cell C3. What does C3 contain?**
   - A. `=A2*$B$1`
   - B. `=A3*$B$2`
   - C. `=$A$3*B1`
   - D. `=A3*$B$1` ✓

   *Copying down one row advances the relative reference A2 to A3, but the absolute reference $B$1 is locked and does not move. So C3 becomes `=A3*$B$1`.*

3. **Which entry correctly adds all the values in cells B2 through B6?**
   - A. `=SUM(B2:B6)` ✓
   - B. `SUM(B2:B6)`
   - C. `=TOTAL(B2:B6)`
   - D. `=B2:B6`

   *A formula must start with =, use a real function name (SUM, not TOTAL), and give the range with a colon. "SUM(B2:B6)" lacks the equals sign, TOTAL is not a standard function, and =B2:B6 does not add anything.*

4. **A single tax rate lives in cell E1. You want a formula that multiplies a price by that rate and stays pointed at E1 when you copy it down a column and across into other columns. How should you reference E1?**
   - A. `E1`
   - B. `E$1`
   - C. `$E$1` ✓
   - D. `$E1`

   *Copying both down and across can change the row and the column of a reference, so both must be locked: $E$1. E1 drifts entirely; E$1 locks only the row (breaks when copied across); $E1 locks only the column (breaks when copied down).*

5. **Why does copying one formula with relative references down a column produce a different, correct result in each row instead of repeating the first row's answer?**
   - A. The references are broken and should always be replaced with absolute ones.
   - B. Each copied formula adjusts its relative references to its own position, so every row calculates from that row's data. ✓
   - C. The spreadsheet fills the cells with random sample values.
   - D. Absolute references force each row to recalculate differently.

   *A relative reference describes a position relative to the formula's own cell. When copied down, each copy points at the cells beside its new location, so row 5's formula uses row 5's data. That adjustment is the intended behavior, not a fault.*

## Sources

- **Addresses and References, Absolute and Relative — LibreOffice Calc Help** (The Document Foundation). Reference-only documentation. <https://help.libreoffice.org/latest/en-US/text/scalc/guide/relativ_absolut_ref.html>
- **LibreOffice Calc Features (Help overview)** (The Document Foundation). Reference-only documentation. <https://help.libreoffice.org/latest/en-US/text/scalc/main0503.html>
- **The Most EXCELlent OER Spreadsheets Textbook Published (in 2025)** — Marcus Lacher, Minnesota State (Open Textbook Library). CC BY-NC-SA. <https://open.umn.edu/opentextbooks/textbooks/the-most-excellent-oer-spreadsheets-textbook-published-in-2025>
- **Beginning Excel 2019** — Brown, Lave, Romey, Open Oregon Educational Resources (Open Textbook Library). CC BY-NC-SA. <https://open.umn.edu/opentextbooks/textbooks/70>

## Related Topics

- computer-literacy:foundations:word-processing
- computer-literacy:foundations:presentation-software
- computer-literacy:foundations:collaboration-platforms
- computer-literacy:foundations:files-and-folders

## Editorial Metadata

- **Editorial status:** READY_TO_PUBLISH
- **Researched:** 2026-08-19
- **Rights:** Reference-only LibreOffice documentation and two CC BY-NC-SA open textbooks; no source prose adapted, all facts synthesized in original wording. Product names used only as examples of the category.
- **Verification:** Worked-example arithmetic (SUM = 3390, AVERAGE = 678, and the per-row tax figures 96 / 68 / 34.40 / 48.80 / 24) checked in Bash; reference-copy behavior verified against LibreOffice documentation.
