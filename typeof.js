var sampleType = {
    name: "test"
};
console.log(typeof sampleType); // object
var sampleType2 = {
    name: "test"
    // test: "test"//error TS2353: Object literal may only specify known properties, and 'test' does not exist in type 'Sample2'.
};
console.log(typeof sampleType2); // object
var sampleObj = {
    name: "test"
};
console.log(typeof sampleObj); // object
var sampleObj2 = {
    name: "test"
};
console.log(typeof sampleObj2); // object
var sampleObj3 = {};
console.log(typeof sampleObj3); // object
var sampleFn = function () {
    return "hello";
};
console.log(typeof sampleFn); // function
var sampleFn2 = function () {
    // return "hello"
};
console.log(typeof sampleFn2); // function
var sampleFn3 = function () { };
console.log(typeof sampleFn3); // function
// console.log(sampleFn3())// undefined
switch (typeof sampleFn3) {
    case "string":
        console.log("stringです");
        break;
    case "function":
        console.log("functionです");
        break;
    default:
        console.log("error");
        break;
}
