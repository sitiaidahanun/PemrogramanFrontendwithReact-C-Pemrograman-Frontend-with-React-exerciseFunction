// main.js

function clockConversion(hour, params) {
  if (hour < 1) {
      return "Hour cannot be under 1";
  }

  const minutesInHour = 60;
  const secondsInHour = 3600;

  if (params === "minutes") {
      return hour * minutesInHour; // Menghitung jam dalam menit
  } else if (params === "seconds") {
      return hour * secondsInHour; // Menghitung jam dalam detik
  } else {
      return "Invalid parameter"; // Mengembalikan pesan jika parameter tidak valid
  }
}

// Mengekspor fungsi untuk digunakan di file lain
module.exports = clockConversion;

// Contoh penggunaan dan pengujian
console.log(clockConversion(-1, "minutes")); // Output: "Hour cannot be under 1"
console.log(clockConversion(3, "minutes"));  // Output: 180
console.log(clockConversion(1, "seconds"));   // Output: 3600
console.log(clockConversion(2, "seconds"));   // Output: 7200
console.log(clockConversion(1, "hours"));     // Output: "Invalid parameter"
