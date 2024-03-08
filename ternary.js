
// let thing = someCondition ? option1:option2;


let pen = "pen";
let apple = "";
let pineapple = "pineapple"

let applePen = (apple && pen) ? "apple-pen" : false;
let pineapplePen = (pineapple && pen) ? "pineapple-pen" : false;

let penPineappleApplePen = (applePen && pineapplePen) ? "pen-Pineapple-Apple-Pen" : "whoops!";

console.log("I have a pen, I have a pineapple, I have an apple: ", penPineappleApplePen);













// const foo = 5

// let rizz = {
//     bar: (foo > 4) ? "The Rizzler": "L ri77"
// }
//REPLACES THIS:
// if (foo > 4) {
//     rizz.bar="The Rizzler";
// } else {
//     rizz.bar="L ri77";
// }



const foo = 5;
// let someVariable;

function someFunc(var1) {
    return var1;
}

//REPLACES THIS:
// if (foo > 4) {
//     someVariable="The Rizzler";
// } else {
//     someVariable="L ri77";
// }

someFunc((foo > 4) ? "The Rizzler": "L ri77")
