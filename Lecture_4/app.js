// Function Return Number
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
// Function Return String
function greet(name) {
    return "Welcome back ".concat(name);
}
console.log(greet('John'));
// Function Return Void
function greet1(name) {
    console.log("Welcome back ".concat(name));
}
console.log(greet('Rohan'));
// ---------------------------------------------------------
// Bad Practice
var combineFunction;
combineFunction = add;
combineFunction = greet; // Possible but not good practice
console.log(combineFunction(10, 500));
console.log(combineFunction('John'));
// ----------------------------OR----------------------------
combineFunction = function () {
    console.log('Hello');
};
console.log(combineFunction());
// Good Practice
var combineFunction1;
combineFunction1 = add;
// combineFunction1 = greet; // Error not possible passing parameter
console.log(combineFunction1(10, 500));
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
