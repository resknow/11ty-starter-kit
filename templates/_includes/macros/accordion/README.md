### Usage

```
{% from "macros/accordion/macro.njk" import accordion %}

{{ accordion({
    items: [
        {
            title: "About Us",
            content: "Vestibulum rhoncus ut ante non lobortis. Vivamus vel magna nisi. Mauris semper augue tortor, eu imperdiet ipsum maximus ut."
        },
        {
            title: "Our Services",
            content: "Duis at rhoncus magna. Praesent sit amet mauris nec massa porta venenatis. Aenean nec mi sit amet lectus mollis faucibus. Cras auctor pretium volutpat."
        }
    ]
}) }}
```

### Arguments

| Name               | Type   | Description                                                                 |
| ------------------ | ------ | --------------------------------------------------------------------------- |
| `id`               | String | Unique ID for this set of tabs, required if you have more than one per page |
| `items`            | Array  | Accordion content, each item requires title and content.                    |
| `items.[].title`   | String | Accordion title                                                             |
| `items.[].content` | String | Accordion content                                                           |
| `class`            | String | Optional class to add to the component wrapper                              |
