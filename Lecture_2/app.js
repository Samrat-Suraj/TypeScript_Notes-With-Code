// Object, Array , Tuple , Enum
// Object
var person = {
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    location: {
        city: "Delhi",
        country: "India"
    }
};
console.log(person.firstName);
console.log(person.location.city);
// Sahil but we cant access if property is not present in object but in javascript we can access it
// Also we can pass number as strings but in javascript we can pass any type of value
// Array In Object
var person2 = {
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    skiils: ['C++', 'Python', 'JavaScript']
};
console.log(person2.firstName);
console.log(person2.skiils[0]);
// Array
var favouriteFruits1; // Defining Type Of Array Of String
favouriteFruits1 = ['Apple', 'Banana', 'Orange'];
console.log(favouriteFruits1[0]);
var favouriteFruits2; // Defining Type Of Array Of All Type like number, string, boolean , etc lose ts power
favouriteFruits2 = ['Apple', 'Banana', 'Orange'];
console.log(favouriteFruits2[0]);
// Tuple
var person3 = {
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    skills: ['Admin'],
    product: ['Shoes', 1000] // Fixed Length Array
};
console.log(person3.product[0]);
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // Defining Enum
var person4 = {
    firstName: "Sahil",
    lastName: "Kumar",
    age: 21,
    role: Role.AUTHOR
};
if (person4.role === Role.ADMIN) {
    console.log("Is Admin");
}
else if (person4.role === Role.READ_ONLY) {
    console.log("Is Read Only");
}
else if (person4.role === Role.AUTHOR) {
    console.log("Is Author");
}
