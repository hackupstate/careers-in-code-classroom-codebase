import { myFunc1 } from "./export2.js";
import myFunc2 from "./export2.js";
import camelCaser from "camelcase";

myFunc1();
myFunc2();
console.log(camelCaser("Sentence case fixer"));
