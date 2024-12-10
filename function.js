var sampleFn = function (test) {
    return "hello";
};
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
var sampleFn2 = function (name, age) {
    return "hello";
};
var sampleFn3 = function (test) {
    return "hello";
};
var sampleFn4 = function () {
    return "hello";
};
var sampleFn5 = function () {
    return "hello";
};
var sampleFn6 = function (i) {
    return i * 2;
};
var sampleFn6_2 = function () {
    return 2;
};
console.log(sampleFn6(123));
console.log(sampleFn6_2(123));
var sampleFn7 = function (args) {
    return "I'm ".concat(args.name, ". ").concat(args.age, " years old.");
};
console.log(sampleFn7({
    name: "Thomas",
    age: 30,
}));
