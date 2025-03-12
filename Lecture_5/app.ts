// UNKNOW
// Any

// let userInput : unknown;
let userInput : any; 
let userName : string;

userInput = 5;
userInput = 'Max';

userName = userInput; // Unknow is not assignable to string
userName = userInput; // But Any is assignable to string