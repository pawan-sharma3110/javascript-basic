
function odd_even(number){
if (number%2===0) {
    console.log("Your number is even");
} else {
    console.log("Your number is odd");
}
}
console.log(odd_even(26));


// grade system

let score = 700 ;

if (score>=80 && score<=100) {
    console.log("Grade A");
}else if(score>=70 && score<=89){
  
        console.log("Grade B");
} else if(score>=60 && score<=69){
    console.log("Grade c");
}else if(score>= 50 && score<=59){
    console.log("Grade D");
}else if(score>=0 && score <=49){
    console.log("Grade F");
}else{
    console.log("Enter number under 100");
}
