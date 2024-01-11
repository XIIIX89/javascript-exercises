const fibonacci = function(num) {
    // first two fibonacci numbers are 0 and 1
    let a = 0;
    let b = 1;
    
    if (typeof num !== Number) {num = parseInt(num);} // turn strings into numbers
    if (num < 0) {return 'OOPS'} // does not accept negative numbers

    for (let i = 2; i <= num; i++) {
        let nextNum = a + b;
        a = b;
        b = nextNum;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
