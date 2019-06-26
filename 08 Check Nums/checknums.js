function CheckNums(num1,num2){
    if(num2 > num1){ 
        return "verdadero"};
    if(num1 > num2){ 
        return "falso"};
    if(num1 === num2){ 
        return "-1"};
}

console.log(CheckNums(3,122));