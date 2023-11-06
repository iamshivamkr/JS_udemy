// 'use strict';

// function describeCountry(country,population,capitalCity){
//     let result= `${country} has ${population} million people and its capital city is ${capitalCity}.`
//     return result;
// }
// console.log(describeCountry("Finland",6,"Helsinki"));
// let gg=describeCountry("Finland",6,"Helsinki");
// console.log(gg)



const worldPopulation=7900;
function percentageOfWorld1(Population){
    return Population*100/worldPopulation;
    
}

console.log(percentageOfWorld1(1441))
// let PerOfInd = percentageOfWorld1(1350);
// let PerOfUSA = percentageOfWorld1(450);
// console.log(PerOfInd,PerOfUSA);

// const percentageOfWorld2 = function percentageOfWorld1(Population){
//     return Population*100/worldPopulation;
    
// }
// console.log(percentageOfWorld2(1441))


const describePopulation=function (country,Population){
    const percentage= percentageOfWorld1(Population);
    const description = `${country} has ${Population} million people, which is about ${percentage} of the world`
    console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
describePopulation('India',1350);


let populations=[10,1441,332,1350]
// let percentage2=[]
// for (let i=0;i=populations.length;i++){
//     const perc=percentageOfWorld1(populations[i])
//     percentage2.push(perc);
// }
// console.log(percentage2);

populations.length===4? console.log(true) : console.log(false);

let percentages=[   
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];


//console.log(percentages);


// let neighbours=["pakistan","nepal","srilanka","china","afghanistan"]
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")){
//     console.log("probably not a central European country :D")
// }
// neighbours[neighbours.indexOf("nepal")]="Republic of nepal";
// console.log(neighbours);


