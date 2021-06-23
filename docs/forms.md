# Forms

Forms are handled by `eleventy-plugin-forms`. This plugin takes an config object and scaffolds form html for you.

## Config

You'll find a default config in `./templates/_data/forms.js`. Here you can define the fields you need for your form.

### Available Fields

-   text
-   textarea
-   select
-   checkbox

More are being added all the time, this plugin is very young so please report any issues to https://github.com/chrismademe/eleventy-forms.

## Template

To use a form, use the `renderForm` shortcode in your template, like so:

```html
{% renderForm "form-name" %}
```
