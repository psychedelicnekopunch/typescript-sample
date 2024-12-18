
enum Color {
	Red,
	Green,
	Blue,
}

function test(v: Color): number {
	return v
}

console.log(test(Color.Red))

// enum じゃなくてもいいのは問題。エラーになってほしい。
console.log(test(0))
// エラー
// error TS2345: Argument of type '5' is not assignable to parameter of type 'Color'.
// console.log(test(5))


enum Fruit {
	Apple = "apple",
	Lemon = "lemon",
	Banana = "banana",
}

function test2(v: Fruit): string {
	return v
}

console.log(test2(Fruit.Apple))

// エラー
// error TS2345: Argument of type '0' is not assignable to parameter of type 'Fruit'.
// console.log(test2(0))

// エラー
// error TS2345: Argument of type '"apple"' is not assignable to parameter of type 'Fruit'.
// console.log(test2("apple"))

// エラー
// error TS2345: Argument of type '"test"' is not assignable to parameter of type 'Fruit'.
// console.log(test2("test"))

type ArgsName = "a" | "b" | "c"

type Args = {
	name: ArgsName
}


function test3({ name }: Args): string {
	return name
}

console.log(test3({ name: "a" }))

// エラー
// error TS2322: Type '"x"' is not assignable to type 'ArgsName'.
// The expected type comes from property 'name' which is declared here on type 'Args'
// console.log(test3({ name: "x" }))

