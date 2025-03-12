// number , string , boolean 
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log('Result is : ' + (num1 + num2));
        console.log("Some Text For test String Pass In TypeStript ----- ", someText);
    }
    else {
        return num1 + num2 || someText;
    }
}
var printResult = true;
var someText = "Hello World";
var ans = add(1, 2, printResult, someText);
console.log(ans);
