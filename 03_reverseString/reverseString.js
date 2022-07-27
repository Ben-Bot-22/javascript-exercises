const reverseString = function(string) {
    //split string into array
    const stringArray = string.split('');
    //reverse string
    stringArray.reverse();
    //join into string
    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
