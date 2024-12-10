

let sampleFn: (score: number) => string = function(test: number): string {
	return "hello"
}

// エラー
// Target signature provides too few arguments. Expected 1 or more, but got 0.
// let sampleFn: () => string = function(test: number): string {
// 	return "hello"
// }

// エラー
// Type 'string' is not assignable to type 'number'.
// let sampleFn: (score: number) => number = function(test: number): string {
// 	return "hello"
// }

// エラー
// Type 'string' is not assignable to type 'undefined'.
// let sampleFn: (name: string, age: number) => undefined = function(name: string): string {
// 	return "hello"
// }



let sampleFn2: (name: string, age: number) => string = function(name: string, age: number): string {
	return "hello"
}

let sampleFn3: (name: string, age: number) => string = function(test: string): string {
	return "hello"
}

let sampleFn4: (name: string, age: number) => string = function(): string {
	return "hello"
}

let sampleFn5: (name: string, age: number) => void = function(): string {
	return "hello"
}

// エラー
// Types of parameters 'age' and 'name' are incompatible.
// Type 'string' is not assignable to type 'number'.
// let sampleFn5: (name: string, age: number) => void = function(age: number, name: string): string {
// 	return "hello"
// }

// エラー
// Target signature provides too few arguments. Expected 3 or more, but got 2.
// let sampleFn5: (name: string, age: number) => void = function(test: string, test2: number, test3: string): string {
// 	return "hello"
// }


type SampleFn6 = {
	(i: number): number
}

let sampleFn6: SampleFn6 = (i: number): number => {
	return i * 2
}

let sampleFn6_2: SampleFn6 = (): number => {
	return 2
}

console.log(sampleFn6(123))
console.log(sampleFn6_2(123))


type SampleFn7Args = {
	name: string
	age: number
}

let sampleFn7 = (args: SampleFn7Args): string => {
	return `I'm ${args.name}. ${args.age} years old.`
}

console.log(sampleFn7({
	name: "Thomas",
	age: 30,
}))
