let dictionary = new Object();
dictionary = {};
var value = 0; // gglobal

function fibonacci(n) {
    if (isNaN(n)) {
        throw new TypeError();
    }
    if (n < 0) {
        throw "Negative number";
    }

    if (dictionary.hasOwnProperty(n)) {
        return dictionary[n];
    } else if (n == 0) {
        value = 0;
    } else if (n < 2) {
        value = 1;
    } else {
        value = fibonacci(n - 1) + fibonacci(n - 2);
    }

    dictionary[n] = value;

    return value;
};