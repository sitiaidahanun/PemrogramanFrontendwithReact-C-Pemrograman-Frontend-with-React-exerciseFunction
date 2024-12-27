function checkDatatype(input) {
    // Memeriksa tipe data
    if (Array.isArray(input)) {
        return "array";
    } else if (input === null) {
        return "null";
    } else {
        return typeof input;
    }
}

// Ekspor fungsi
module.exports = checkDatatype;

// Test Cases
console.log(checkDatatype("Ruang Guru")); // OUTPUT: "string"
console.log(checkDatatype(123));          // OUTPUT: "number"
console.log(checkDatatype(true));         // OUTPUT: "boolean"
console.log(checkDatatype([1, 2, 3]));    // OUTPUT: "array"
console.log(checkDatatype(null));         // OUTPUT: "null"
console.log(checkDatatype({}));           // OUTPUT: "object"
console.log(checkDatatype(function() {})); // OUTPUT: "function"
console.log(checkDatatype(undefined));    // OUTPUT: "undefined"
console.log(checkDatatype(NaN));          // OUTPUT: "number"
console.log(checkDatatype(new Date()));   // OUTPUT: "object"
console.log(checkDatatype(/regex/));      // OUTPUT: "object"
