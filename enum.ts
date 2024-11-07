

enum Color {
	Red,
	Green,
	Blue,
}


enum Fruit {
	Apple,
	Lemon,
	Banana,
}


console.log(Color.Red)

// console.log(Color.Red == Fruit.Apple)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'Fruit' have no overlap.
// console.log(Color.Red == false)// error TS2367: This comparison appears to be unintentional because the types 'Color' and 'boolean' have no overlap.
console.log(Color.Red == 0)// true

const red: number = 0
console.log(Color.Red == red)// true
