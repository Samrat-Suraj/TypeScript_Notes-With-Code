"use strict";
function add(a, b) {
    // Type Guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// const result = add('Max', 'Schwarz');
const result = add(44, 44);
if (typeof result === 'string') {
    console.log(result.split(""));
}
else {
    console.log(result);
}
const emp1 = {
    name: 'Max',
    privileges: ["create-server", "delete-server"],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    // Type Guard --- Use in keyword
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation(emp1);
// 3. Type Guard with Classes
class Car {
    drive() {
        console.log('Driving a car....');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck....');
    }
    loadCargo(amount) {
        console.log('Loading cargo....' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // Type Guard --- Use instanceof keyword
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
// Type Casting / Type Assertion
// 1. Way 1
const inputElement = document.getElementById('user-input');
inputElement.value = 'Hi there!';
// 2. Way 2
const inputElement2 = document.getElementById('user-input');
inputElement2.value = 'Hi there!!!!';
