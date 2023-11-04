
const calcAverage=(a,b,c) => (a+b+c)/3;


const scoredolphin = calcAverage(44,23,71)
const scorekoalas = calcAverage(65,54,49)
console.log(scoredolphin,scorekoalas)

const checkWinner= function(avgdolphins,avgKoalas){
    if (avgdolphins>2*avgKoalas){
        console.log(`Dolphin wins ${avgdolphins} vs. ${avgKoalas}`);
    }else if (avgKoalas>2*avgdolphins){
        console.log(`Koalas wins ${avgKoalas} vs. ${avgdolphins}`);
    }else{
        console.log("Ignore Draw this time")
    }
}   
checkWinner(scoredolphin,scorekoalas)
checkWinner(112,55)