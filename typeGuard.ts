

type Sample = {}
class SampleClass implements Sample {}
class SampleClass2 implements Sample {}


let sample: Sample = new SampleClass
console.log(typeof sample)// object
// console.log(sample instanceof Sample)// 'Sample' only refers to a type, but is being used as a value here.
console.log(sample instanceof SampleClass)// true
console.log(sample instanceof SampleClass2)// false
console.log(sample instanceof Object)// true




type Sample2 = {
	name: string
}
type Sample3 = {
	name: string
}
type Sample4 = {
	name: string
}
class SampleClass3 implements Sample2 {
	name: string = "test"
}


function isSample(arg: any): arg is Sample4 {
	return arg.name !== undefined
}

let sample3: Sample3 = new SampleClass3


// console.log(sample == Sample)
console.log(isSample(sample))// false
console.log(isSample(sample3))// true
console.log(isSample({ name: "123" }))// true
