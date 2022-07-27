const removeFromArray = function(array, ...itemToRemove) {
    let argArray = itemToRemove;
    console.log(argArray);
    for (let i = 0; i < argArray.length; i++) {
        const index = array.indexOf(argArray[i]);
        if (index > -1)
        {
            array.splice(index, 1);
            console.log(array);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
