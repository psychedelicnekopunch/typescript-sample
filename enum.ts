
// es5
import { GetFruit, Fruit, Color as c } from "./enum2"

// es2017
// error TS5097: An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
// error: $ tsc enum.ts -t es2017 --allowImportingTsExtensions --noEmit
// error: $ tsc enum.ts -t es2017 --allowImportingTsExtensions --emitDeclarationOnly
// import { GetFruit, Fruit, Color as c } from "./enum2.ts"

console.log(`Fruit.Apple: ${Fruit.Apple}`)
console.log(`Fruit.Apple(type): ${typeof Fruit.Apple}`)
console.log(`Fruit(type): ${typeof Fruit}`)

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




// Property 'entries' does not exist on type 'ObjectConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2017' or later.
// tsc enum.ts -t es2017
// for (const [key, value] of Object.entries(Fruit)) {
// 	console.log(`${key}: ${value}`)
// }
// console.log(Object.keys(Fruit))
Object.keys(Color).forEach((key) => {
	console.log(`${key}: ${Color[key]}`)
})

Object.keys(Fruit).forEach((key) => {
	console.log(`${key}: ${Fruit[key]}`)
})

