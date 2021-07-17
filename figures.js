// Square code
console.group("Squares");
// const squareSide = 5;
// console.log("The sides of the square measure: " + squareSide + "cm");

function squarePerimeter(side) {
  return side * 4;
}
// console.log("The perimeter of the square is: " + squarePerimeter + "cm");

function squareArea(side) {
  return side * side;
}
// console.log("The area of the square is: " + squareArea + "cm²");
console.groupEnd();


// Triangle code
console.group("Triangles");
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// console.log(
//     "The sides of the triangle measure: " 
//     + triangleSide1 + "cm, " 
//     + triangleSide2 + "cm and " 
//     + triangleBase + "cm"
// );

// const triangleHeight = 5.5;
// console.log("The height of the triangle is: " + triangleHeight + "cm");

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}
// console.log("The perimeter of the triangle is: " + trianglePerimeter + "cm");

function triangleArea(base, height) {
  return (base * height) / 2;
}
// console.log("The area of the triangle is: " + triangleArea + "cm²");
console.groupEnd();


// Circle code
console.group("Circles");
// const circleRadius = 4;
// console.log("The radius of the circle is: " + circleRadius + "cm");

function circleDiameter(radius) {
  return radius * 2;
}

const PI = Math.PI;
console.log("PI is: " + PI);

function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return diameter * PI;
}

function circleArea(radius) {
  return (radius * radius) * PI; 
}

console.groupEnd();


// Interact with HTML
function calculatePerimeterSquare() {
  const input = document.getElementById("InputSquare");
  const value = input.value;
  
  const perimeter = squarePerimeter(value);
  alert(perimeter);
}

function calculateAreaSquare() {
  const input = document.getElementById("InputSquare");
  const value = input.value;
  
  const area = squareArea(value);
  alert(area);

}