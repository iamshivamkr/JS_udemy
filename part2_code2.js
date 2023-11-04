
let tip;
const calTip = function (bill){
    return bill>=50 && 300<=bill ? bill*0.15 : bill * 0.20;
}
let bills=[125,555,44];
let tips= [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];
console.log(bills,tips)
let Total= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(Total)