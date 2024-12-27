function travelDiscount(id, amount) {
    let status = "";
    let pricePerPerson = 0;
    let discountRate = 0;
    let totalPrice = 0;

    // Menentukan status berdasarkan id voucher
    if (id.includes("STD")) {
        status = "STUDENT";
        pricePerPerson = 20000; // Harga untuk STUDENT
        if (amount > 20) {
            discountRate = 0.20; // Diskon 20%
        }
    } else if (id.includes("CORP")) {
        status = "CORPORATE";
        pricePerPerson = 50000; // Harga untuk CORPORATE
        if (amount > 30) {
            discountRate = 0.25; // Diskon 25%
        }
    } else {
        return "Maaf, voucher yang anda miliki tidak valid!";
    }

    // Menghitung total harga sebelum diskon
    totalPrice = pricePerPerson * amount;

    // Menghitung total harga setelah diskon
    totalPrice -= totalPrice * discountRate;

    // Mengembalikan pesan output
    return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}.`;
}

// pengujian
console.log(travelDiscount("STD9845-8461-121", 11)); // "Selamat! Voucher untuk STUDENT dengan id STD9845-8461-121 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 220000."
console.log(travelDiscount("CORP8135-4612-912", 30)); // "Selamat! Voucher untuk CORPORATE dengan id CORP8135-4612-912 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 1125000."
console.log(travelDiscount("STD7601-639-184", 36)); // "Selamat! Voucher untuk STUDENT dengan id STD7601-639-184 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 576000."
console.log(travelDiscount("CORP5611-8456-999", 31)); // "Selamat! Voucher untuk CORPORATE dengan id CORP5611-8456-999 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 1137500."
console.log(travelDiscount("8347-7-9124365", 99)); // "Maaf, voucher yang anda miliki tidak valid!"
console.log(travelDiscount("XYZ8135461-2-912", 1)); // "Maaf, voucher yang anda miliki tidak valid!"

module.exports = travelDiscount;
