function reverseString(string){
    if(string == '')return '';
    string = string.toString();
    string = Array.from(string);
    string.reverse();
    return string.join(''); 
}
module.exports = reverseString;