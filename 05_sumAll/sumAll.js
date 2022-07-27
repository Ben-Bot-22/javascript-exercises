const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR';
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    if (typeof a === 'string' || a instanceof String) return 'ERROR';
    if (typeof b === 'string' || b instanceof String) return 'ERROR';

    // small number first
    if (b < a)
    {
        let swap = a;
        a = b;
        b = swap;
    }
    let sum = 0;
    // console.log(a);
    for (let i = b; i >= a; i--) 
    {
        sum += i;
        // console.log(sum);
    }
    // console.log(sum);
    return sum;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
