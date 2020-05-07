
(async ()=>{
  const {NBars} = await import("./dist.mjs");

  //execute and "compile" in one.
  console.log(NBars.transform("Hello this is a {{test}} of {{dank}} memes",{test:"bees?", dank:"fire"}));

  // The Handlebars Way.
  var template = NBars.compile("NBars is such a tiny <b>{{thing}}</b>");
  // execute the compiled template and print the output to the console
  console.log(template({ thing: "mustache!" }));

})();
