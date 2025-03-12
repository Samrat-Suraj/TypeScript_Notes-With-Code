"use strict";
// Generic type
// One Type connnected To Other Type
const fruits = ['apple', 'banana', 'orange'];
fruits.push('mango');
// fruits.push(1); // Error
const fruits2 = ['apple', 'banana', 'orange'];
console.log(fruits2);
fruits2.push('mango');
const boys = [{ name: 'Ali', age: 20 }, { name: 'Ahmed', age: 25 }];
boys.push({ name: 'Asad', age: 30 });
boys.push({ name: "Ram", age: 33 });
for (const b of boys) {
    console.log(b.name);
    console.log(b.age);
}
// Generic Function
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = { name: 'Rohan' };
const obj2 = { age: 4000 };
const obj3 = merge(obj1, obj2);
console.log(obj3);
// Generic Constraints
// if use extends keyword then it will only accept the object which have name property
function createObject(key, value, isActive) {
    return { key, value, isActive };
}
const obj4 = createObject('age', 20, true);
console.log(obj4);
const box1 = { value: 'Hello' };
const box2 = { value: 20 };
console.log(box1.value);
console.log(box2.value);
const user1 = { data: 'success', status: 200 };
const user2 = { data: 200, status: 200 };
const user3 = { data: { name: 'Ali' }, status: 200 };
console.log(user1);
console.log(user2);
console.log(user3);
// Generic Class
class Container {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const stringContainer = new Container('Hello');
console.log(stringContainer.getContent());
const numberContainer = new Container(20);
console.log(numberContainer.getContent());
const booleanContainer = new Container(true);
console.log(booleanContainer.getContent());
const objContainer = new Container({ name: 'Ali' });
console.log(objContainer.getContent());
// Generic With Array
function getArray(arr) {
    return arr[0];
}
console.log(getArray([1, 2, 3]));
console.log(getArray(['a', 'b', 'c']));
console.log(getArray([true, false, true]));
// Generic With KeyOf
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: 'Ali', age: 20, isActive: true };
console.log(getProperty(person, 'name'));
