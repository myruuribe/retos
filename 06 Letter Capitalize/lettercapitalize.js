function LetterCapitalize(string){
    var resultado = "";
    var ultletra= " ";

    for(var i=0; i < string.length; i++){
        if(ultletra === " "){
            resultado += string[i].toUpperCase();
        }
        else{
            resultado += string[i];
        }
        ultletra = string[i];
    }
    return resultado;
}

console.log(LetterCapitalize("hello world"));