const palindromes = function (string) {
    // 1.  .replace(/[^a-zA-Z0-9]/g, "") removes all non-alphanumeric characters from the string
    // 2.  .toLowerCase() makes all characters in the string lower case
    // 3.  .split('') converts the string into an array of characters
    // 3.5 .reverse() reverses the array. (This is done only to alphaNumStr because we want to compare it forward to reversed)
    // 4.  .join('') converts the array back into a string
    let modString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('').join('');
    let alphaNumStr = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('').reverse().join('');

    if(alphaNumStr === modString) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
