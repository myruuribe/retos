function SimpleAdding(num){
    var resultado= 0;

    for(var i=1;i <= num;i++){
        resultado += i;
    }
    return resultado;
}

console.log(SimpleAdding(12));