// UNION
// LITERAL TYPES
// TYPE ALIASES
// UNION
// Union types are used when we want to work with more than one type of data
// We use the pipe operator '|' to define a union type
// Union types can be used with any type of data
function combine(num1, num2) {
    var data;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        data = num1 + num2;
    }
    else {
        data = num1.toString() + num2.toString();
    }
    return data;
}
var a = combine("suraj +", 10);
console.log(a);
// LITERAL TYPES
// Literal types are used when we want to restrict the values that a variable can take
// We use the pipe operator '|' to define a union type
// Literal types can be used with any type of data
function combine2(num1, num2, coversionType) {
    var data;
    if (typeof num1 === 'number' && typeof num2 === 'number' || coversionType === 'as-number') {
        data = +num1 + +num2; // + sign is used to convert string to number
    }
    else {
        data = num1.toString() + num2.toString();
    }
    return data;
}
var b = combine2("suraj +", 10, "as-string");
var c = combine2("10", "10", "as-number");
console.log("b", b);
console.log("c", c);
function combine3(num1, num2, coversionType) {
    var data;
    if (typeof num1 === 'number' && typeof num2 === 'number' || coversionType === 'as-number') {
        data = +num1 + +num2; // + sign is used to convert string to number
    }
    else {
        data = num1.toString() + num2.toString();
    }
    return data;
}
var user = {
    name: "Suraj",
    age: 21,
    skills: ['React', 'Node']
};
// ---------------------------------------------------------------
// FUNCTION TYPES
function greet(user) {
    console.log("Hello ".concat(user.name));
}
greet(user);
