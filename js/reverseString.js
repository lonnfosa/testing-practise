const reverse = (str) => {
    if (str.length === 0){
        return ''
    }
    return str.split("").reverse().join("");
};

module.exports = reverse;