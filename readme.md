# Antisnake
Replace `<your_account>` with your GitHub username and copy the links to the Pull Request description:
- [DEMO LINK](https://<your_account>.github.io/layout_antisnake/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_antisnake/report/html_report/)

> Follow [this instructions](https://github.com/mate-academy/layout_task-guideline#how-to-solve-the-layout-tasks-on-github)
___

## ❗️❗️❗️ This task does not require the approval of a mentor and is automatically approved on the platform when the tests are passed❗️❗️❗️

## The task
Display six colored blocks on the screen without any extra margins:

- Use `grid`
- Each block should be `300px` high.
- Each block should have its number (1 to 6) placed in its center in white Arial 100px font.
  - Block 1 must be `red`
  - Block 2 must be 4/5 `red` and 1/5 `black`
  - Block 3 must be 3/5 `red` and 2/5 `black`
  - Block 4 must be 2/5 `red` and 3/5 `black`
  - Block 5 must be 1/5 `red` and 4/5 `black`
  - Block 6 must be `black`.
- The width of each block should be not less than its height (`300px`)
- Blocks must be put in 2 to 6 rows and stretched: each row must fit either 1, 2, or 3 blocks.
  See the screenshots [here](./reference).
- Each row is to be read from left to right.

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

--> [CHECKLIST](https://github.com/mate-academy/layout_antisnake/blob/master/checklist.md)

| 3 columns | 2 columns | 1 column |
| --------- | --------- | -------- |
| ![1 col](./reference/900.png) | ![1 col](./reference/750.png) | ![1 col](./reference/450.png) |
