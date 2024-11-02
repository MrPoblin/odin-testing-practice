function caesarCipher(string, shift){
    if(string == '')return '';
    string = string.toString();
    string = Array.from(string);
    string = string.map((symbol)=>{
        symbol = symbol.charCodeAt()
        if(symbol >= 65 && symbol <= 90){
            symbol += shift;
            if(symbol > 90){
                symbol -= 26;
            }
        }
        else if(symbol >= 97 && symbol <= 122){
            symbol += shift;
            if(symbol > 122){
                symbol -= 26;
            }
        }
        return String.fromCharCode(symbol);
    });
    return string.join(''); 
}

module.exports = caesarCipher;
