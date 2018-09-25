function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var kata = ''

    for (var i = 0; i < kalimat.length; i++) {
        var isFind = false
        for (var j = 0; j < kamus.length; j++) {
            if (kalimat[i] === kamus[j].toUpperCase()) {
                kata = kata + kamus[j]
                isFind = true
                // return kata
                // break
            }
            else if (kalimat[i] === kamus[j].toLowerCase()) {
                isFind = true
                kata = kata + kalimat[i].toUpperCase()
                // break
            }
            else if (kalimat[i] === ' ') {
                isFind = true
                kata = kata + kalimat[i]
                break
            }
        }
        if (isFind === false) {
            kata = kata + kalimat[i]
        }
    }
    return kata
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"