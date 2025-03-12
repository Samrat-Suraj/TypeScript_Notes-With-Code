// number , string , boolean 

function add(num1: number, num2: number, printResult: boolean, someText?: string) {
    if (printResult) {
        console.log('Result is : ' + (num1 + num2))
        console.log("Some Text For test String Pass In TypeStript ----- ", someText)
    } else {
        return num1 + num2 || someText;
    }
}

const printResult = true;
const someText = "Hello World"
const ans = add(1, 2, printResult, someText)
console.log(ans)
