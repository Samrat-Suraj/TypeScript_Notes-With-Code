// Function Return Number
function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(10, 20))

// Function Return String
function greet(name: string): string {
    return `Welcome back ${name}`;
}

console.log(greet('John'));


// Function Return Void
function greet1(name: string): void {
    console.log(`Welcome back ${name}`);
}

console.log(greet('Rohan'));


// ---------------------------------------------------------
// Bad Practice
let combineFunction: Function;
combineFunction = add;
combineFunction = greet; // Possible but not good practice
console.log(combineFunction(10, 500));
console.log(combineFunction('John'));
// ----------------------------OR----------------------------
combineFunction = function () {
    console.log('Hello');
}
console.log(combineFunction());


// Good Practice
let combineFunction1: (a: number, b: number) => number;
combineFunction1 = add;
// combineFunction1 = greet; // Error not possible passing parameter
console.log(combineFunction1(10, 500));


// Funtions Type And Callbacks
type CB = (n: number) => void
function addAndHandle(num1: number, num2: number, cb: CB) {
    const result = num1 + num2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
})

// Never return type

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occured', 500);

