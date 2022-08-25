const analyzeArray = (arr) => {

    const average = arr.reduce((a,b) => a + b, 0) / arr.length;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {min, max, length, average}
}


module.exports = analyzeArray;