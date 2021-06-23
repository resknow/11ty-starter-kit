# Styling

We recommend a Utility First approach to styling. Not to be confused with something like Tailwind, which is really Utility-only most of the time.

Utility classes should be helpful tokens that get you so far but sometimes you need to make an abstraction, that's where components come in to play.

## Utility Classes

You'll find customisable design tokens in `./assets/sass/_tokens.scss`. These are used to generate utility classes and custom properties that you can use to keep a consistent design across your site.

### Available Utilities

| Utility       | Description                                                                                                         | File                                          | Responsive |
| ------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------- |
| Alignment     | For use with `flex` containers, responsive utility classes for properties like `align-items` and `justify-content`. | `./assets/sass/utilities/_alignment.scss`     | ✅         |
| Auto Grid     | A small utility for creating automatic grid layouts, it's most useful when you don't or can't write media queries.  | `./assets/sass/utilities/_auto-grid.scss`     | 🚫         |
| Border Radius | Generated from your tokens, a small collection of border radius utilities.                                          | `./assets/sass/utilities/_border-radius.scss` | 🚫         |
| Cluster       | A utility for creating a cluster of elements, useful for tag lists and similar layouts.                             | `./assets/sass/utilities/_cluster.scss`       | 🚫         |
| Color         | Utilities for manipulating text and background color, generated from your tokens.                                   | `./assets/sass/utilities/_color.scss`         | 🚫         |
| Container     | A centred element with a max width.                                                                                 | `./assets/sass/utilities/_container.scss`     | 🚫         |
| Flex          | Sets the `display` property to `flex`.                                                                              | `./assets/sass/utilities/_flex.scss`          | 🚫         |
| Flow          | Sets a consistent vertical rhythm between elements in a container                                                   | `./assets/sass/utilities/_flow.scss`          | 🚫         |
| Font          | Utilities for font size, family, alignment and weight. Generated from your tokens.                                  | `./assets/sass/utilities/_font.scss`          | 🚫         |
| Grid          | Utilities for constructing grid layouts, based on up to 12 columns.                                                 | `./assets/sass/utilities/_grid.scss`          | ✅         |
| Max Width     | Limit the width of an element based on characters per line.                                                         | `./assets/sass/utilities/_max-width.scss`     | 🚫         |
| Shadow        | A set of `box-shadow` utilities, generated from your tokens.                                                        | `./assets/sass/utilities/_shadow.scss`        | 🚫         |
| Space         | Utilites for padding, margin and gap properties, generated from your tokens.                                        | `./assets/sass/utilities/_space.scss`         | 🚫         |
