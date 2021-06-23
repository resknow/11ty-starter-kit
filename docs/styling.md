# Styling

We recommend a Utility First approach to styling. Not to be confused with something like Tailwind, which is really Utility-only most of the time.

Utility classes should be helpful tokens that get you so far but sometimes you need to make an abstraction, that's where components come in to play.

## Utility Classes

You'll find customisable design tokens in `./assets/sass/_tokens.scss`. These are used to generate utility classes and custom properties that you can use to keep a consistent design across your site.

### Available Utilities

| Utility   | Description                                                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alignment | For use with `flex` containers, responsive utility classes for properties like `align-items` and `justify-content`. See the full list in `./assets/sass/utilities/_alignment.scss`. |
