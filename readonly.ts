
// エラー
// error TS1354: 'readonly' type modifier is only permitted on array and tuple literal types.
// let test: readonly string = "a"


type Test = {
	readonly name: string
}

let test: Test = {
	name: "a",
}

// エラー
// error TS2540: Cannot assign to 'name' because it is a read-only property.
// test.name = "b"


// 定数
const test2: string = "a"
// エラー
// error TS2588: Cannot assign to 'test2' because it is a constant.
// test2 = "b"


let test3 = {
	name: "a",
	titles: {
		b: "b"
	},
} as const


// エラー
// error TS2339: Property 'name' does not exist on type 'object'.
// test3.name = "b"

// エラー
// error TS2540: Cannot assign to 'b' because it is a read-only property.
// test3.titles.b = "c"

// エラー
// error TS2739: Type '{}' is missing the following properties from type '{ readonly name: "a"; readonly titles: { readonly b: "b"; }; }': name, titles
// test3 = {}


let test4: readonly string[] = ["a"]

// エラー
// error TS2339: Property 'push' does not exist on type 'readonly string[]'.
// test4.push("b")




