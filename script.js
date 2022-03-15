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

