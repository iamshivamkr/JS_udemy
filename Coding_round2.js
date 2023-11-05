let MarkMass=95;
let MarkHeight=1.88;
let JohnMass=85;
let JohnHeight=1.76;

let BMIMark= MarkMass/(MarkHeight**2);
let BMIJohn= JohnMass/(JohnHeight**2);
let markHigherBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);

if (BMIMark>BMIJohn){
    console.log(`"Mark's BMI ${BMIMark} is higher than John's ${BMIJohn} "`);
}else{
    console.log(`"John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}"`);
}