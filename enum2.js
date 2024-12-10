"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
exports.GetFruit = GetFruit;
exports.Color = Color;
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "apple";
    Fruit["Lemon"] = "lemon";
    Fruit["Banana"] = "banana";
})(Fruit || (exports.Fruit = Fruit = {}));
// console.log(Fruit.Apple)
function GetFruit(fruit) {
    console.log("I have a ".concat(fruit, ". umm, ").concat(fruit, " pen."));
}
// エラー
// Duplicate identifier 'Fruit'.
// function Fruit(fruit: Fruit): void {
// 	console.log(`I have a ${fruit}. umm, ${fruit} pen.`)
// }
function Color(fruit) {
    console.log("is ".concat(fruit, " yellow?"));
}
