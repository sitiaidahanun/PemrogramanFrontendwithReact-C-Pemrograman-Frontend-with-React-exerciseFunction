// TODO: answer here
function shortName(name, options) {
    // Memeriksa apakah nama terdiri dari 2 kata
    const nameParts = name.split(' ');
    if (nameParts.length !== 2) {
        return 'Invalid Name';
    }

    const firstName = nameParts[0];
    const lastName = nameParts[1];

    // Mengembalikan hasil sesuai dengan opsi yang diberikan
    switch (options) {
        case 'first':
            return `${firstName.charAt(0)}. ${lastName}`;
        case 'last':
            return `${firstName} ${lastName.charAt(0)}.`;
        case 'full':
            return name;
        default:
            return 'Invalid option';
    }
}

// Mengekspor fungsi
module.exports = shortName;

// pengujian
console.log(shortName("Anton", "first"));              // Output: Invalid Name
console.log(shortName("Djarot Purnomo", "first"));     // Output: D. Purnomo
console.log(shortName("Ginanjar Prakoso", "last"));    // Output: Ginanjar P.
console.log(shortName("Andre Sembiring", "full"));      // Output: Andre Sembiring
console.log(shortName("John Doe", "invalid"));          // Output: Invalid option
