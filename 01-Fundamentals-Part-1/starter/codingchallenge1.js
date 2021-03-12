// Coding Challenge #1
console.log(" --- Coding Challenge #1 Begin --- ");
let markMass = 78;
let markHeight = 1.69;
let markBmi = markMass / markHeight ** 2;

let johnMass = 92;
let johnHeight = 1.95;
let johnBmi = johnMass / johnHeight ** 2;

let markHigherBMI = markBmi > johnBmi;
console.log("Mark's BMI:" + markBmi, " John's BMI:" + johnBmi, " Mark's BMI is higher: " + markHigherBMI);

markMass = 95;
markHeight = 1.88;
markBmi = markMass / markHeight ** 2;

johnMass = 85;
johnHeight = 1.76;
johnBmi = johnMass / johnHeight ** 2;

markHigherBMI = markBmi > johnBmi;
console.log("Mark's BMI:" + markBmi, " John's BMI:" + johnBmi, " Mark's BMI is higher: " + markHigherBMI);

console.log(" --- Coding Challenge #1 End --- ");