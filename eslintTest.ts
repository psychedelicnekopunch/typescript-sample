

// error  'str' is never reassigned. Use 'const' instead  prefer-const
// error  'str' is assigned a value but never used        @typescript-eslint/no-unused-vars
// let str: string = "test"

// error  'srt' is assigned a value but never used. Allowed unused vars must match /^_/u
// const str: string = "test"


// error  '_' is never reassigned. Use 'const' instead
// let _: string = "test"

const _: string = "test"


// error  Use a `type` instead of an `interface`
// error  'Test' is defined but never used. Allowed unused vars must match /^_/u
// interface Test {
// 	str: string
// }


type _ = {
	str: string,
}
