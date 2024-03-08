// EXAMPLE 1: Define an array
let eightiesActionFilms = [
    "kindergarden cop", 
    "roadhouse", 
    "terminator", 
    "rambo", 
    "cliff hanger"
];

// using the .push() method to add "Alien" to the end of array
eightiesActionFilms.push("Alien");

// using .shift() to remove first element of array and assign
// to separate variable
let element = eightiesActionFilms.shift()
// console.log(element);

// note that arrays are objects under the hood
console.log(typeof eightiesActionFilms);



// EXAMPLE 2: 2-dimentional arrays
let celebCouples = [
    ["brad pitt", "Angelina Jolee"],
    ["Kanye", "Kim"],
    ["Will Smith", "Jayda"]
];

//using index notation to reference array elements
let i=1;
let j=0;
console.log(String(celebCouples[i]));

