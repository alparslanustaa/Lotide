const assertEqual = require("../assertEqual");
const tail = require("../tail");


// TEST CODE
const result = (tail([5, 7, 6]));
assertEqual(result.length, 2);
assertEqual(tail([5, 6, 7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");