

type Sample = {}
let sampleType: Sample = {
	name: "test"
}
console.log(typeof sampleType)// object


type Sample2 = {
	name: string
}
let sampleType2: Sample2 = {
	name: "test"
	// test: "test"//error TS2353: Object literal may only specify known properties, and 'test' does not exist in type 'Sample2'.
}
console.log(typeof sampleType2)// object


let sampleObj: {} = {
	name: "test"
}
console.log(typeof sampleObj)// object


let sampleObj2: {
	name: string
} = {
	name: "test"
}
console.log(typeof sampleObj2)// object


let sampleObj3: object = {}
console.log(typeof sampleObj3)// object


let sampleFn: () => string = function(): string {
	return "hello"
}
console.log(typeof sampleFn)// function


let sampleFn2: () => void = function(): void {
	// return "hello"
}
console.log(typeof sampleFn2)// function


let sampleFn3: () => undefined = function(): undefined {}
console.log(typeof sampleFn3)// function
// console.log(sampleFn3())// undefined

switch (typeof sampleFn3) {
case "string":
	console.log("stringです")
	break
case "function":
	console.log("functionです")
	break
default:
	console.log("error")
	break
}
