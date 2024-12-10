"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum2_1 = require("./enum2");
console.log(enum2_1.Fruit.Apple);
console.log(typeof enum2_1.Fruit.Apple);
(0, enum2_1.Color)(enum2_1.Fruit.Banana);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color.Red);
// エラー
// console.log(Color.Red == Color2.Red)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'Color2' have no overlap.
// エラー
// console.log(Color.Red == false)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'boolean' have no overlap.
console.log(Color.Red == 0); // true
// エラー
// console.log(Color.Green == 0)// error TS2367: This comparison appears to be unintentional because the types 'Color.Green' and '0' have no overlap.
console.log(Color.Green == 1); // true
var red = 0;
console.log(Color.Red == red); // true
var green = Color.Green;
// エラー
// console.log(Color.Red == green)// error TS2367: This comparison appears to be unintentional because the types 'Color.Red' and 'Color.Green' have no overlap.
console.log(Color.Green == green); // true
