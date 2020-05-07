# nbars
The tiniest and fastest javascript templating engine inspired by the fully featured Handlebarsjs only 180 Bytes!

#### install

```bash
npm install nbars --save
```

#### Use

##### Node.js

```javaScript
const {NBars} = await import("nbars");
```

##### Browser

```javascript
import NBars from "nbars";
```

#### Example

```javascript
const {NBars} = await import("nbars");

//execute and "compile" in one.
console.log(
  NBars.transform(
    "Hello this is {{what}} of {{thing}} memes",
    {
      what:"bees?",
      thing:"fire"
    }
  )
);

// The Handlebars Way.
var template = NBars.compile("NBars is such a tiny <b>{{thing}}</b>");
// execute the compiled template and print the output to the console
console.log(
  template(
    {
      thing: "mustache!"
    }
  )
);
```
