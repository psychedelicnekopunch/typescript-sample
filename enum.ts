

import { GetFruit, Fruit, Color as c } from "./enum2"

console.log(Fruit.Apple)
console.log(typeof Fruit.Apple)

GetFruit(Fruit.Banana)
c(Fruit.Banana)

// エラー
// GetFruit("banana")// Argument of type '"banana"' is not assignable to parameter of type 'Fruit'.

enum Color {
	Red,
	Green,
	Blue,
}

enum Color2 {
	Red,
	Green,
	Blue,
}

console.log(Color.Red)

// エラー
// console.log(Color.Red == Color2.Red)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'Color2' have no overlap.

// エラー
// console.log(Color.Red == false)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'boolean' have no overlap.

console.log(Color.Red == 0)// true

// エラー
// console.log(Color.Green == 0)// error TS2367: This comparison appears to be unintentional because the types 'Color.Green' and '0' have no overlap.

console.log(Color.Green == 1)// true

const red: number = 0
console.log(Color.Red == red)// true


const green: Color = Color.Green

// エラー
// console.log(Color.Red == green)// error TS2367: This comparison appears to be unintentional because the types 'Color.Red' and 'Color.Green' have no overlap.

console.log(Color.Green == green)// true


