// TODO: answer here
function addNumber(numStr, options) {
    let result = '';

    // Mengonversi string menjadi array angka
    const nums = numStr.split('').map(Number);

    // Menggunakan opsi untuk menentukan arah penjumlahan
    if (options === 'left') {
        for (let i = 0; i < nums.length - 1; i++) {
            const sum = nums[i] + nums[i + 1];
            result += sum;
        }
    } else if (options === 'right') {
        for (let i = nums.length - 1; i > 0; i--) {
            const sum = nums[i] + nums[i - 1];
            result += sum;
        }
    } else {
        return 'Invalid option';
    }

    return result;
}

// Mengekspor fungsi 
module.exports = addNumber;

// pengujian
console.log(addNumber("012345", "left"));  // Output: "13579"
console.log(addNumber("672318", "right")); // Output: "945913"
console.log(addNumber("12345", "up"));     // Output: Invalid option
