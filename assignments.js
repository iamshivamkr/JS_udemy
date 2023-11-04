/*
let country="India";
let continent="Asia";
let Population=12;
console.log(country);
console.log(continent);
console.log(Population);
const isIsland=true;
let language='English';
console.log(typeof isIsland);
console.log(typeof Population);
console.log(typeof country);
console.log(typeof language);

const halfPopulation=Population/2;
console.log(halfPopulation)
Population+=1;
console.log(Population);
const Finland=6;
console.log(Population>Finland);
const avg_Population=33;
console.log(Population<avg_Population);

country='Portugal';
continent="Europe";
Population=11;
language='portuguese';
console.log(`${country} is in ${continent} and its ${Population} million people speak ${language}`);
console.log((country)+ " is in " +(continent)+" and its "+(Population)+" million people speak "+(language));


Population=13;
if (Population>33){
    console.log(`Portugal population is above average`);
}
else{
    console.log(`Portugal's population is ${33-Population} million below average.`)
}
let height =0;
if (height){
    console.log("Good")
}else{
    console.log("not good")
}

let favourite= Number(prompt("Enter any number:-"));
console.log(favourite, typeof favourite)
if (favourite==25){
   console.log("Cool man")
}else{
   console.log("Uncool")
} 

console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123'<57);
console.log(5+6+'4'+9-4-2);

let numNeighbours=Number(prompt("How many neighbour countries does your country have? "))
if (numNeighbours===1){
    console.log("Only 1 border")
}else if (numNeighbours>1){
    console.log("More than 1 border")
}else{
    console.log("No borders")
} 

if (Population<50 && language==="English" && !isIsland){
    console.log(`${country} is good`)

}else{
    console.log("portugal does not meet the criteria")
}


let day="Monday";
switch (day){
    case "Monday":
        console.log("....")
}

let age=20;
age>=18 ? console.log("Gg") : console.log("Not GG");

let language = "hindi";
switch (language){
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers")
        break;
    case "spanish":
        console.log("2nd place in number of native speakers")
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language")
        break;
    default:
        console.log("Great language too :D")
}

let age=Number(prompt("Enter age : "));
console.log(`he will drink ${age>=18 ? "🍷" : "🌊"}`)

console.log(`${country}'s population is ${Population > 33 ? 'above' : 'below'} average`,);


let myCountry={
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: "1.3B",
    neighbours:["Pak","Nepal","sriLanks","China"],

    describe: function(){
      
    }
}
console.log(myCountry["cap"+"ital"])

myCountry["location"]="ggwp"

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people,
 ${myCountry.neighbours.length} neighbouring countries and a capital called
  ${myCountry.capital}.`);

myCountry.population="1.5B"
console.log(myCountry.population)
myCountry["population"]="1.1B"
console.log(myCountry.population)

const worldPopulation=7900;
function percentageOfWorld1(Population){
    return Population*100/worldPopulation;
    
}
let populations=[10,1441,332,1350]
let percentage2=[]
for (let i=0;i=populations.length;i++){
    const perc=percentageOfWorld1(populations[i])
    percentage2.push(perc);
}
console.log(percentage2);

let listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
// for (let i=0;i<listOfNeighbours.length;i++){
//   for (let j=0;j<listOfNeighbours[i].length;j++){
//     console.log(`Neighbour:${listOfNeighbours[i][j]}`)
//   }
// }

let i=0;
let j=0;
while(i<listOfNeighbours.length){
  while(j<listOfNeighbours[i].length){
    console.log(`Neighbour:${listOfNeighbours[i][j]}`)
    
    j++;
  }
   i++;
}
*/
