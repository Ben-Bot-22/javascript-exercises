const fibonacci = function(seq) {
    if (seq < 0) return "OOPS";
    let fib = [];
    fib.push(1);
    fib.push(1);
    for (let i = 0; i < seq; i++) {
        fib[i + 2] = fib[i] + fib[1 + i];
    }
    return fib[seq-1];
};

// Do not edit below this line
module.exports = fibonacci;
