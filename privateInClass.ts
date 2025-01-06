
// $ tsc -t es2023 privateInClass.ts



type SampleInterface = {
	// name: string,
	// #name: string,
	readonly name: string
}


class Sample implements SampleInterface {

	private noHasInType = "test"
	// error TS2420: Class 'Sample' incorrectly implements interface 'SampleInterface'.
	// Property 'name' is private in type 'Sample' but not in type 'SampleInterface'.
	// private name = "test"

	// error TS18016: Private identifiers are not allowed outside class bodies.
	// #name = "test"

	readonly name = "test"
	// name = "test"
}


const sample = new Sample()
// sample.name = "t"
// console.log(sample.noHasInType)
console.log(sample.name)
