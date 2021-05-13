const { myFunc1, myFunc2, color } = require("./export1.js");
const camelCaser = require("camelcase");

// myFunc1();
// myFunc2();
// console.log(color);

console.log(camelCaser("Some sentence goes here"));
