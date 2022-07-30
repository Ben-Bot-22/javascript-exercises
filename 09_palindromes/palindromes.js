const palindromes = function (text) {
    //convert to array
    //remove all but letters and numbers
    //compare first letter to last letter, second to second to last
    let textChars = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '').toLowerCase();
    let textArr = [...textChars];
    let isPalindrome = true;
    // console.log(textChars);
    for (let i = 0; i < textArr.length; i++)
    {
        // console.log(textArr[i] + " " + textArr[textArr.length - 1 - i]);
        if (textArr[i] != textArr[textArr.length - 1 - i])
        {
            // console.log("FALSE: " + textArr[i] + " " + textArr[textArr.length - 1 - i]);
            isPalindrome = false;
        } 
    }
    return isPalindrome;
};

// console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
