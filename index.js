function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

module.exports = removeVowels;

//console.log(removeVowels('Type Something'));