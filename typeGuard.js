var SampleClass = /** @class */ (function () {
    function SampleClass() {
    }
    return SampleClass;
}());
var SampleClass2 = /** @class */ (function () {
    function SampleClass2() {
    }
    return SampleClass2;
}());
var sample = new SampleClass;
console.log(typeof sample); // object
// console.log(sample instanceof Sample)// 'Sample' only refers to a type, but is being used as a value here.
console.log(sample instanceof SampleClass); // true
console.log(sample instanceof SampleClass2); // false
console.log(sample instanceof Object); // true
var SampleClass3 = /** @class */ (function () {
    function SampleClass3() {
        this.name = "test";
    }
    return SampleClass3;
}());
function isSample(arg) {
    return arg.name !== undefined;
}
var sample3 = new SampleClass3;
// console.log(sample == Sample)
console.log(isSample(sample)); // false
console.log(isSample(sample3)); // true
console.log(isSample({ name: "123" })); // true
