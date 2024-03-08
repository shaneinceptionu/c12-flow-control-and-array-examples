let age=75;
console.log("is age an integer: ", Number.isInteger(age));
switch(true) {
    case (age >= 70) && (age < 100):
    case (age >= 40) && (age < 70):
        console.log("experienced");
        console.log("let's take it easy");
        break;
    case (age >= 18) && (age < 40):
        console.log("baby Gronk, on Gyatt looksmaxxing, mews");
        break;
    case (age >= 0) && (age < 18) && Number.isInteger(age):
        console.log("kid, bring dino nuggies!");
        break;
    default:
        console.log("age: ", age);
        console.log("invalid age! get outta here!");
}

