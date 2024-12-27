// TODO: answer here
function calcAge(age, params) {
    if (age < 1) {
        return "Age cannot be under 1 year";
    }

    const daysInYear = 365;
    const monthsInYear = 12;

    if (params === "months") {
        return age * monthsInYear; // Menghitung umur dalam bulan
    } else if (params === "days") {
        return age * daysInYear; // Menghitung umur dalam hari
    } else {
        return "Invalid parameter"; // Mengembalikan pesan jika parameter tidak valid
    }
}

// Contoh penggunaan dan pengujian
console.log(calcAge(-1, "months")); // Output: "Age cannot be under 1 year"
console.log(calcAge(3, "months"));  // Output: 36
console.log(calcAge(1, "days"));     // Output: 365
console.log(calcAge(2, "days"));     // Output: 730
console.log(calcAge(5, "months"));   // Output: 60
console.log(calcAge(2, "years"));    // Output: "Invalid parameter"

module.exports = calcAge;