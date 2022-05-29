1. [STYLES] - make sure you used grid in this task
2. [BEM] - Check your BEM structure using BEM-linter (`npm run lint`) and
[this list](https://mate-academy.github.io/fe-program/css/typical-bem-mistakes)
3. [BEM] - Make sure to follow BEM naming convention for complex modifiers:
`block-name--modifier-name--modifier-value`;
4. [BEM] - Create a separate file per each BEM block styles that have the same
   name as the block
5. [SASS] - Make use of SASS nesting - write pseudo-class, pseudo-element
selectors inside general selector. As well as media queries.

GOOD example:
```scss
&__buy-link {
  display: flex;
  margin-top: 20px;

  &:hover {
    color: blue;
  }
}
```

BAD example:
```scss
&__buy-link {
  display: flex;
  margin-top: 20px;
}

&__buy-link:hover {
  color: blue;
}
```

6. [SASS] - use variables for the main values so that you'll be able to reuse
them and give them descriptive names. But don't overuse them, don't create
variable for the value that's used just once.
7. [SASS] - Don't use SASS loops for styles that stay the same for all elements
of the group, e.g. `display`, `position` `font-size` etc.
8. [CODE STYLE] - Remember about styles properties order - ([css order](https://codeguide.academy/html-css.html#css-order))
9. [FUNCTIONALITY] - check the demo page with different screen sizes (including those bigger than 1700px)
