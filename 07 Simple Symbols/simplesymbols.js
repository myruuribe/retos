function SimpleSymbols(string){
    var alfabeto= "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < string.length; i++){
        var cadena= string[i];
        var antes= string[i - 1];
        var despues = string[i + 1];

        if (alfabeto.indexOf(cadena) !== -1){
            if(antes !== "+" || despues !== "+"){
                return false;
            }
        }
    }
    return true;
}

console.log(SimpleSymbols("+d+=3=+s+"));