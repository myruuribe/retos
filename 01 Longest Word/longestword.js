function LongestWord(sen){

    var palabralarga = " ";
    var largo = 0;

    sen = sen.replace(/[^a-zA-Z0-9\s]/g,'');

    sen = sen.split(' ');

    for(var i=0; i<sen.length; i++){
        if(sen[i].length > largo){
            largo = sen[i].length;
            palabralarga = sen[i];
        }
    }
    return palabralarga;
}

console.log(LongestWord("fun&!! time"));