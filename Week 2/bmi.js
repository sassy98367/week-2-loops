let weight = 230; // lbs
let height = 73; // inches
const METRIC_CONVERSION = 703;

let bmi = weight / (height * height) * METRIC_CONVERSION;

console.log("Your weight is: " + weight + " lbs.");
console.log("Your height is: " + height + " inches.");
console.log("BMI: " + bmi);

//If less than 18.5, then underweight
//If less than 24.9, but greater than or equal to 18.5 then normal or healthy
//If less than 29.9, but greater then or equal to 25.0 then overweight
//If less than 39.9, but greater then or equal to 30.0 then obese
//If greater than or equal to 40, them morbidly obese

if (bmi < 18.5) {
    console.log("You're underweight.");
}
//else if ((bmi >= 18.5) && (bmi <= 24.9))
else if (bmi < 24.9) {
    console.log("you're normal or healthy.");
}
//else if ((bmi >= 25) && (bmi <= 29.9))
else if (bmi < 29.9) {
    console.log("You're overweight.")
}
//else if ((bmi >= 30) && (bmi <= 39.9))
else if (bmi < 39.9) {
    console.log("You're obese.");
}
else {
    console.log("You're morbidly obese.");
}
console.log("Have a nice day.");