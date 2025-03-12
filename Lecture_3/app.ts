// UNION
// LITERAL TYPES
// TYPE ALIASES

// UNION
// Union types are used when we want to work with more than one type of data
// We use the pipe operator '|' to define a union type
// Union types can be used with any type of data

function combine(num1: number | string, num2: number | string) {
    let data;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        data = num1 + num2;
    } else {
        data = num1.toString() + num2.toString();
    }
    return data;
}

const a = combine("suraj +", 10)
console.log(a)

// LITERAL TYPES

// Literal types are used when we want to restrict the values that a variable can take
// We use the pipe operator '|' to define a union type
// Literal types can be used with any type of data

function combine2(num1: number | string, num2: number | string, coversionType: 'as-number' | 'as-string') {
    let data;
    if (typeof num1 === 'number' && typeof num2 === 'number' || coversionType === 'as-number') {
        data = +num1 + +num2; // + sign is used to convert string to number
    } else {
        data = num1.toString() + num2.toString();
    }
    return data;
}

const b = combine2("suraj +", 10, "as-string")
const c = combine2("10", "10", "as-number")
console.log("b", b)
console.log("c", c)

// TYPE ALIASES / CUSTOM TYPES

// Type aliases are used to create custom types
// We can use type aliases to define complex types
// We can use type aliases to define union types
// We can use type aliases to define literal types


type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine3(num1: Combinable, num2: Combinable, coversionType: ConversionDescriptor) {
    let data;
    if (typeof num1 === 'number' && typeof num2 === 'number' || coversionType === 'as-number') {
        data = +num1 + +num2; // + sign is used to convert string to number
    } else {
        data = num1.toString() + num2.toString();
    }
    return data;
}

// ---------------------------------------------------------------
// OBJECT TYPES

type USER = {
    name: string,
    age: number,
    skills?: string[]
}

const user: USER = {
    name: "Suraj",
    age: 21,
    skills: ['React', 'Node']
}

// ---------------------------------------------------------------
// FUNCTION TYPES

function greet(user : USER) {
    console.log(`Hello ${user.name}`)
}

greet(user)




