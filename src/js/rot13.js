function rot13(str) {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let cipher = "";
    let checkRegex = /[A-Z]/;
    for (let i = 0; i < str.length; i++) {
        if (checkRegex.test(str[i])) {
            let start = letters.indexOf(str[i]);
            if (start + 13 <= 25) {
                cipher += letters[start + 13];
            } else {
                cipher += letters[12 - (25 - start)];
            }
        } else {
            cipher += str[i];
        }
    }
    return cipher;
}
