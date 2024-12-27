// TODO: answer here
function minMax(str) {
    // Mengubah string menjadi array angka
    const numbers = str.split('').map(Number);
    
    // Menemukan nilai terkecil dan terbesar
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    // Memeriksa kondisi untuk mengembalikan pesan yang sesuai
    if (min === max) {
        return `Nilai terkecil dan terbesar adalah ${min}`;
    } else {
        return `Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`;
    }
}

// Mengekspor fungsi 
module.exports = minMax;

// pengujian
console.log(minMax("9746532")); // Output: Nilai terkecil adalah 2, dan terbesar adalah 9
console.log(minMax("1"));       // Output: Nilai terkecil dan terbesar adalah 1
console.log(minMax("555"));     // Output: Nilai terkecil dan terbesar adalah 5
console.log(minMax("123456789")); // Output: Nilai terkecil adalah 1, dan terbesar adalah 9
