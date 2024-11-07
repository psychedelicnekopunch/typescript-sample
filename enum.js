var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Lemon"] = 1] = "Lemon";
    Fruit[Fruit["Banana"] = 2] = "Banana";
})(Fruit || (Fruit = {}));
console.log(Color.Red);
// console.log(Color.Red == Fruit.Apple)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'Fruit' have no overlap.
// console.log(Color.Red == false)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'boolean' have no overlap.
console.log(Color.Red == 0); // true
var red = 0;
console.log(Color.Red == red); // true
