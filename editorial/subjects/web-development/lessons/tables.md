# Tables

## In 30 Seconds

An HTML table represents related data arranged in rows and columns, such as a course schedule or a comparison of measurements. Use `table` for data that has that grid relationship, not to position a page's visual layout. Inside it, `tr` makes a row, `th` marks a header cell, and `td` marks a data cell. A `caption` names the table, while `thead` and `tbody` can group its header and body rows. Clear headers make the data easier to read and navigate.

## Why This Matters

Tables turn a two-dimensional data relationship into markup that browsers and assistive technologies can interpret. In college work, they are useful for presenting observations, schedules, and comparisons without flattening the relationships among values. In professional work, correct table structure helps a reader identify which heading belongs to a number before drawing a conclusion. The same discipline prevents a common web mistake: using a table to arrange a page visually. Layout belongs to CSS; a data table should communicate data and its labels.

## Learning Objectives

- Define an HTML table as markup for tabular data rather than page layout.
- Identify the jobs of `table`, `tr`, `th`, and `td`.
- Explain how a `caption`, `thead`, and `tbody` add useful structure.
- Apply `scope` to simple row and column headers.
- Evaluate whether a short grid of information should be marked up as a table.

## The College Version

### A table is a data relationship

An HTML `table` represents data with more than one dimension. A useful test is whether a reader needs both a row label and a column label to interpret a value. In a small enrollment table, for example, the number 28 is incomplete until the reader knows which course and which term it describes. The table model expresses that relationship as a grid of rows, columns, and cells. This is different from a collection of cards, a navigation menu, or two side-by-side page regions. Those may look rectangular, but they do not necessarily express row-and-column data. The HTML standard specifically says that tables must not be used as layout aids. This is more than a style preference: a layout table gives data-extraction and assistive tools a misleading grid to interpret. Keep the division of labor clear. HTML says that information is tabular and identifies its parts; CSS can later control spacing, borders, and responsive presentation. This lesson concerns the data structure, not visual design.

### Cells, rows, captions, and sections

The outer `table` element contains the table's structural parts. A `tr` is a table row. Within a row, `th` is a header cell and `td` is a data cell. A `caption` gives the table a title or identifying description; it describes the table as a whole rather than repeating a column heading. In a basic table, authors often put the column-header row in `thead` and the data rows in `tbody`. These elements group rows into sections. They do not turn ordinary data cells into headers: use `th` for that semantic job. A simple structure might begin with a caption, then a `thead` containing one row of column headers, then a `tbody` containing the records. The standard defines an ordered content model for these elements, so treating them as interchangeable wrappers is a poor habit. A table can be simple without every optional section, but structure should reflect the data honestly. Do not add a `thead` merely because a design mockup has a colored first row; use it when those rows are the table's header group.

### Header associations make values interpretable

A value cell is most useful when its relevant headers are clear. In a table whose first row names columns, each column heading can be a `th` with `scope="col"`. In a table whose first cell in each data row names the record, that row label can be a `th` with `scope="row"`. The `scope` value expresses which direction the header covers. This explicit pattern is especially clear for a simple grid, and it gives authors a way to review the intended association instead of assuming appearance communicates it. A caption supplies the table-level context; headers supply local context for individual cells. Neither is a replacement for the other. Complex tables with multiple levels of headers, merged cells, or irregular groups need deliberate association design and testing, so do not blindly copy a simple pattern into them. For a beginning lesson, the goal is narrower: make a simple table whose columns and rows have unambiguous labels, then ensure each data cell can be understood from those labels.

### Read a table before you write one

Before writing markup, sketch the data relationship. Ask what the table is called, what each column means, whether each record needs a row label, and what each remaining cell measures. Then write the caption and headers in plain language. If a proposed cell cannot be explained by combining its row and column headings, the data model is probably incomplete. This review also catches a frequent accessibility mistake: placing visually bold text in a `td` and assuming it is a header. Visual emphasis may help some readers, but the markup still describes a data cell. Use `th` where the content labels other cells. Next, check whether the example is actually a table. A pair of labels beside form controls belongs in a form; a list of site links belongs in navigation; a product-card grid often is a list. Tables are valuable precisely because they carry a specific meaning. Using them only when that meaning exists produces simpler markup and more reliable reading experiences.

## Key Vocabulary

- **Data table:** An HTML table used to represent related information arranged by rows and columns.
- **Table cell:** One position in a table's row-and-column grid that contains a header or data value.
- **Row:** A horizontal collection of table cells represented in HTML by a `tr` element.
- **Header cell:** A table cell, represented by `th`, that labels related data cells.
- **Data cell:** A table cell, represented by `td`, that holds a data value rather than a label.
- **Caption:** A table child element that supplies the table's title or identifying description.
- **Table head:** The `thead` section that groups a table's header rows.
- **Table body:** The `tbody` section that groups a table's main data rows.
- **Scope:** A `th` attribute that states whether a header applies to a row, column, row group, or column group.

## Eli-10

A data table is a careful way to make a grid of facts. The labels at the top and side are part of the information, not just decoration. When you see a number in the middle, the labels tell you what it means. HTML has special pieces for the table, its rows, its labels, and its values so that a browser can understand the same relationships a person sees. A table is not a tool for shoving a page into columns; it is for facts that belong in a grid.

## Eli's Analogy

Imagine a spreadsheet with name labels taped above each column and beside each row. A cell such as 28 only becomes meaningful when you can trace upward and sideways to those labels. The table caption is the folder label telling you what the whole sheet is about. `th` cells are the row and column labels, while `td` cells are the entries on the sheet.

The spreadsheet picture has limits. HTML is not a spreadsheet program: it does not calculate formulas or decide the best visual layout. Also, a complicated table can have more than one applicable header, so a simple upward-and-sideways tracing picture is not enough for every real table.

## Worked Example

Suppose a department wants to publish course seats for two terms. The table's caption is `Available seats by course and term`. Its column headers are `Course`, `Fall`, and `Spring`, each written as `th scope="col"` in a `thead` row. In the body, the row begins with `<th scope="row">BIO 101</th>`, followed by `<td>28</td>` and `<td>19</td>`. The first data value is therefore read using the column header Fall and the row header BIO 101: it means 28 Fall seats for BIO 101. The `scope` directions match the data relationship. Replacing the first cell with a bold `td` would make it look like a row label but would not mark it as a header cell.

## Common Mistakes

- **Mistake:** Using a table to arrange page columns or visual spacing.  
  **Correction:** Use a table only for tabular data; use CSS for page presentation and layout.
- **Mistake:** Using `td` for text that labels a row or column.  
  **Correction:** Use `th` for a cell that serves as a header, and use `scope` in a simple row-or-column pattern.
- **Mistake:** Treating a caption as one more column heading.  
  **Correction:** Use a caption to identify the table as a whole; use header cells to label columns or rows.
- **Mistake:** Assuming `thead` makes every cell inside it a header.  
  **Correction:** `thead` groups header rows, while `th` is the element that marks an individual header cell.

## Compare / Contrast

- **`th` vs. `td`:** `th` is a header cell that labels related cells; `td` is a data cell holding a value.
- **`caption` vs. column header:** A caption identifies the complete table; a column header identifies the meaning of values in one column.
- **Data table vs. page layout:** A data table communicates a row-and-column relationship; page layout controls visual placement and belongs to CSS.

## Key Takeaway

Use HTML tables for real row-and-column data. Give the table a caption, mark labels with header cells, and make simple row or column relationships explicit with `scope`; do not use tables as a layout mechanism.

## Practice Question Bank

1. What kind of content is an HTML `table` intended to represent? **Answer: A.**
2. Which element marks a header cell that labels related data cells? **Answer: B.**
3. A simple schedule has column headings for Monday and Tuesday. Which markup most clearly states that the Monday heading applies down its column? **Answer: C.**
4. What is the best role for a table caption in a sales table? **Answer: D.**
5. A designer proposes a table solely to put an article beside a sidebar. What is the correct response? **Answer: B.**

## Sources

- WHATWG, *HTML Living Standard — Tabular data*: https://html.spec.whatwg.org/multipage/tables.html
- MDN Web Docs, *HTML table basics*: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics
- W3C Web Accessibility Initiative, *Tables Tutorial*: https://www.w3.org/WAI/tutorials/tables/

## Related Topics

- HTML Document Structure
- Semantic HTML
- CSS
- CSS Grid

## Editorial Metadata

- Status: READY_TO_PUBLISH
- Research: source-verified on 2026-08-20
- Rights: reference-only sources; original synthesis
