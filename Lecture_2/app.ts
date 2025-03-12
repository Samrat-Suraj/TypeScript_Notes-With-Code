// Object, Array , Tuple , Enum

// Object
const person: {
    firstName: string; // Defining Type Of String
    lastName: string;
    age: number;
    location: {
        city: string;
        country: string;
    }
} = {
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    location: {
        city: "Delhi",
        country: "India"
    }
}

console.log(person.firstName);
console.log(person.location.city);

// Sahil but we cant access if property is not present in object but in javascript we can access it
// Also we can pass number as strings but in javascript we can pass any type of value

// Array In Object
const person2: {
    firstName: string;
    lastName: string;
    age: number;
    skiils: string[]; // Defining Type Of Array
} = {
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    skiils: ['C++', 'Python', 'JavaScript']
}

console.log(person2.firstName);
console.log(person2.skiils[0]);

// Array
let favouriteFruits1 : string[] // Defining Type Of Array Of String
favouriteFruits1 = ['Apple', 'Banana', 'Orange']
console.log(favouriteFruits1[0]);

let favouriteFruits2 : any[] // Defining Type Of Array Of All Type like number, string, boolean , etc lose ts power
favouriteFruits2 = ['Apple', 'Banana', 'Orange']
console.log(favouriteFruits2[0]);

// Tuple
const person3: {
    firstName: string;
    lastName: string;
    age: number;
    skills : string[];
    product : [string, number]; // Defining Type Of Tuple => Fixed Length Array
} = {
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    skills : ['Admin'],
    product: ['Shoes', 1000] // Fixed Length Array
}

console.log(person3.product[0]);


// Enum
enum Role { ADMIN, READ_ONLY, AUTHOR }; // Defining Enum

const person4 ={
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    role: Role.AUTHOR
}

if(person4.role === Role.ADMIN){
    console.log("Is Admin");
}else if(person4.role === Role.READ_ONLY){
    console.log("Is Read Only");
} else if (person4.role === Role.AUTHOR){
    console.log("Is Author");
}


