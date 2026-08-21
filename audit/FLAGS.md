# Phase 1 Audit — FLAGS (flagged, NOT fixed — needs owner review)

Per HC-2, factual/sourcing concerns and ambiguous wording were never silently rewritten.

## Factual claims to verify against sources

### education
1. education-inclusive-teaching.json · collegeVersion[3] — ADA Title II web-accessibility compliance dates given as "April 26, 2027 / April 26, 2028"; DOJ rule sets April 24, 2026 (≥50k population) and April 26, 2027 (smaller entities). Both dates look one year late.
2. education-major-philosophies-of-education.json · collegeVersion[4] — "Pedagogy of the Oppressed appeared in Portuguese in 1968": written in Portuguese 1968 but first published in Spanish/English; Portuguese edition delayed by censorship.

### social-work-and-human-services
3. person-in-environment-perspective.json · collegeVersion[1] — Hull-House called "the first settlement house in the United States"; Neighborhood Guild/University Settlement (NYC, 1886) preceded it. "One of the first" is the defensible phrasing.

### criminal-justice-and-criminology
4. what-causes-crime.json · collegeVersion[3] — "thirty states'" sterilization laws; NHGRI materials usually say 32.
5. juvenile-justice.json · collegeVersion[4] — judicial-waiver/statutory-exclusion counts (47/27) don't match OJJDP's usual 45-46/28-29.
6. history-and-role-of-policing.json · collegeVersion[0] — "in 1326 Edward II created the office of justice of the peace"; standard history: keepers of the peace 1326-27, JP office 1361 (Edward III).

### health-administration
7. medicare-and-medicaid-basics.json — "41 states and the District of Columbia" adopted expansion (KFF counts 41 *including* DC).
8. staffing-and-workforce-management.json — CA nurse-ratio 1:5 paired with the January 1, 2004 effective date; med-surg started 1:6 in 2004, 1:5 phased in 2005.
9. electronic-health-records.json — "91% of office-based physicians / >99% of non-federal hospitals" certified-EHR figures (repeated in 4 fields) need verification against the cited ONC QuickStats.
10. healthcare-data-and-analytics.json — USCDI "53 elements in 2020 … over 170 by 2026" (v1 is usually counted at 52; recent versions ~100-120).
11. healthcare-costs.json — 2024 NHE set ($5.3T / 18.0% GDP / $15,474 / 7.2% growth; prior-year 17.7%) repeated across 4 lessons; CMS 2023 actuals were $4.9T / 17.6%.

### computer-literacy
12. password-security.json — NIST SP 800-63B-4: "must require at least 15 characters" (Rev 4 made 8 the SHALL minimum, 15 a SHOULD) and "finalized on August 26, 2025" (announcement was late July/early Aug 2025). Verify both.
13. operating-systems.json — StatCounter all-platform OS shares (Android 41% / Windows 28% / iOS 20%) deviate from recent trend (~45/25/17).

### environmental-sustainability
14. renewable-energy.json — "14.3 GW [battery] added" in 2024 was EIA's January forecast; actual utility-scale additions ≈10.3 GW.
15. solar-energy.json — "Wind was comparable at 23.6%" capacity factor contradicts sibling lessons (33.5-35.9%) and known fleet values. Strongest single flag in the subject.
16. solar-energy.json — quoted phrase "cheapest source of electricity in history" attributed to IEA WEO 2020; the report's wording differs ("some of the lowest-cost electricity ever seen").
17. sustainable-transportation.json — EPA light-duty GHG standards "took effect for model year 2010"; finalized 2010, applied from MY2012.
18. water-sustainability.json — "96.5% oceans … leaving roughly 3.5% freshwater" (repeated in quiz explanations); USGS: ~2.5% fresh, ~1% other saline.
19. sustainable-cities.json — "dark roofs … 66°F above surrounding air" doesn't match EPA's usual 55-85°F range statement.
20. climate-change-basics.json — 9.1 cm sea-level rise (1993-2022 figure) paired with the 2024 rate; NASA's 2024-inclusive total ≈10.1 cm.

### hospitality-and-tourism
21. guest-experience.json vs customer-service.json — "moments of truth" credited to Albrecht/Zemke/Carlzon in one lesson, Richard Normann in the other; pick one attribution.
22. hospitality-industry-structure.json vs event-planning lesson — MICE "E" expanded as "events" in one lesson, "Exhibitions" in the other.
23. destination-marketing.json — Hawaii "about 1.5 million residents" (2019 pop ≈1.42M; "about 1.4 million" is the accurate rounding).
24. food-safety.json — manual hot-water sanitizing immersion given without the required water temperature (Food Code: ≥171°F for the 30-second immersion).

### computer-science-fundamentals
25. dictionaries-maps.json · compareContrast[2] — "sorted order arranges them by value" is ambiguous (keys sorted by their values vs. dict values); clarifying could change meaning, so left for owner.

## External links (from full 1,957-URL check; 1,807 verified OK ≥200)
Dead or moved (flagged, not rewritten):
- https://www.cms.gov/priorities/key-initiatives/burden-reduction/administrative-simplification/hipaa/transactions-overview — 404 in both probes.
- https://openstax.org/books/introductory-statistics-2e/pages/12-2-correlation-and-causation — 404 (page slug likely changed).
- https://old.maa.org/press/periodicals/convergence/math-origins-orders-of-growth — 521 origin down (both probes).
- https://knowledge-hub.circle-economy.com/wctd/frameworks/728 — 404 after redirect to new domain.
- https://www.nrel.gov/docs/fy13osti/56290.pdf — connection failed in both probes.
- https://www.nycourts.gov/courts/structure.shtml — 404 (bun) / 403 (curl); page likely retired.
Unverifiable from this environment (bot-blocked; NOT confirmed working — HC-6):
- 119 URLs returned 403 to automated probes (doi.org DOI resolver targets, bls.gov, cdc.gov, gao.gov, loc.gov, w3.org/WAI, iris.peabody.vanderbilt.edu, oup.com, opentextbc.ca, ahrq.gov 405, cochranelibrary 412, ecfr.gov 429). These domains block non-browser agents; spot-checks in a real browser are recommended but they are almost certainly live.
Full machine-readable results: scratchpad link-results.json / link-bad.json (session artifacts).

## Compliance / structural
26. SCOPE-ESCALATION (resolved by operator order, logged): making lessons live required editing shared site files (index.html, src/main.tsx, src/styles.css, homepage.ts, _headers, sitemap). Operator's "UPLOAD … push live" directive authorizes this; changes are confined to the worktree branch.
27. RESOLVED BETTER THAN FEARED: git rename-tracking carried the compliance PR's move through the merge, so ALL raw lessons.json files (phase 1-4) live at content/drafts/ in the deployed tree — nothing unreviewed is web-fetchable; the site serves only the derived published files under /content/site/. Remaining tension for owner: the editorial pipeline in the working repo still writes public/content/phase-N/lessons.json (accept script line ~165), so every future merge to the deployed branch will repeat this rename resolution; re-point the pipeline output path once the phase-2/3/4 runs pause.
28. LIVE console error (pre-existing policy interaction, not a functional break): Cloudflare Pages auto-injects its Web Analytics beacon (static.cloudflareinsights.com), which our CSP `script-src 'self'` correctly blocks, logging a CSP violation in the console on every page. Owner choice: disable "Web Analytics" injection in the Cloudflare Pages dashboard (recommended, matches the privacy posture) or add https://static.cloudflareinsights.com to script-src in public/_headers. Not fixed autonomously because enabling a tracker is a privacy/product decision.
29. Per-lesson social/OG meta tags are impossible in the current pure-SPA architecture (no SSR/prerender); site-level OG tags added instead. Eli pages share standalone URLs but preview with the site-wide card. Noted as a future enhancement (prerender or CF Pages Functions).
