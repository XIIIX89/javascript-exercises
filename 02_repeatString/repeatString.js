const repeatString = function(word, repeat) {       
    let string = '';
    if (repeat < 0) {
        return `ERROR`;
    }
    else {
        for (let i = 0; i < repeat; i++) {
            string += word;
        }
    return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
