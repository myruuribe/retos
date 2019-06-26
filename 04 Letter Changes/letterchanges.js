function LetterChanges(string){
    var alfabeto= "abcdefghijklmnopqrstuvwxyz";
    var vocales= "aeiou";
    var palabra= "";

    for (var i = 0; i < string.length; i++){
        var letra= string[i];
        var otraletra= string[i].toLowerCase();

        if(letra.toLowerCase()=== "Z"){
            palabra += "A";
        }
        else if(alfabeto.indexOf(otraletra) !== -1){
            var palabra2 = alfabeto.charAt(alfabeto.indexOf(otraletra)+1);

            if(vocales.indexOf(palabra2) !== -1){
                palabra += palabra2.toUpperCase();
            }
            else{
                palabra += palabra2;
            }
        }
        else{
            palabra += letra;
        }
    }
    return palabra;
}

console.log(LetterChanges("hello*3"));