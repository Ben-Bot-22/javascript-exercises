const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let repeatText = '';
    for (let i = 0; i < num; i++)
    {
        repeatText += string;
    }
    return repeatText;
};

// Do not edit below this line
module.exports = repeatString;
