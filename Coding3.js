let D_score1=Number(prompt("Enter the Score"));
let D_score2=Number(prompt("Enter the Score"));
let D_score3=Number(prompt("Enter the Score"));
let D_Avg=((D_score1+D_score2+D_score3)/3);
console.log(D_Avg);

let K_score1=Number(prompt("Enter the Score"));
let K_score2=Number(prompt("Enter the Score"));
let K_score3=Number(prompt("Enter the Score"));
let K_Avg=((K_score1+K_score2+K_score3)/3);
console.log(K_Avg);

const MinScore=100;

if (D_Avg>=MinScore && D_Avg>K_Avg){
    console.log("Dolphins are winner")
}else if(K_Avg>=MinScore && K_Avg>D_Avg){
    console.log("Koolas are winner")
}else if(K_Avg=D_Avg && K_Avg>=MinScore && MinScore<=D_Avg){
    console.log("Draw")
}else{
    console.log("No team won the trophy");}