

export enum Fruit {
	Apple = "apple",
	Lemon = "lemon",
	Banana = "banana",
}

// console.log(Fruit.Apple)


export function GetFruit(fruit: Fruit): void {
	console.log(`I have a ${fruit}. umm, ${fruit} pen.`)
}

// エラー
// Duplicate identifier 'Fruit'.
// function Fruit(fruit: Fruit): void {
// 	console.log(`I have a ${fruit}. umm, ${fruit} pen.`)
// }


export function Color(fruit: Fruit): void {
	console.log(`is ${fruit} yellow?`)
}
