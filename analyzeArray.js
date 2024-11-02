function analyzeArray(array){
    const object = {};
    
    object.average = array.reduce((total, num)=>{return total + num}, 0) / array.length;
    object.min = array.reduce((minimum, num)=>{return Math.min(minimum, num)});
    object.max = array.reduce((maximum, num)=>{return Math.max(maximum, num)});
    object.length = array.length;

    return object;
}

module.exports = analyzeArray;
