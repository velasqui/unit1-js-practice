document.write("JavaScript works!");
console.log("Hello console.");
console.warn("This is only a test");

var myName = "Ian";
var workFromHome = "false";
var side = "15";
var radius = "10";

console.log("My name is " + myName);
console.log("I work from home: " + workFromHome);
console.log("The length of each side of the square is " + side);
console.log("The radius of the circle is " + radius);

var squareArea = side * side;
var squarePerimeter = 4 * side;
var circleArea = Math.PI * (radius * radius);
var circlePerimeter = 2 * Math.PI * radius;

console.log("The area of the square is " + squareArea + " and the perimeter is " + squarePerimeter);
console.log("The area of the circle is " + circleArea + " and the perimeter is " + circlePerimeter);

var travelOptions = ["foot" , "bike" , "car" , "airplane"];

console.log(`The travels options are: `);
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

var travelType = prompt("How would you like to travel?");

console.log("Travel Type: " + travelType);

let distance = 100;
let time = 0;
let cost = 0;

if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
} else if (travelType === "bike") {
    var rentBike = prompt("Do you need to rent a bike? (yes or no)")
    if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph.");
        cost = 45;
    } else {
        console.log("Biking is free! Speed is 10mph.");
        cost = 0;
    }
    time = distance / 10;
} else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
} else if (travelType === "airplane") {
    var passengerCount = prompt("How many passengers?");
    console.log("Flying is $0.10/mi. Speed is 400mph.");
    cost = 0.10 * distance * passengerCount;
    time = distance / 400;
} else {
    console.log("Sorry. " + travelType + " isn't an option.");
}

console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);