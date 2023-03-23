const wordSearch = (letters, word) => {
    if ((letters.length === 0) || (!word)) {
        return false;
    }

    //finding horizontal word
    const horizontalJoin = letters.map((ls) => ls.join(""));
    console.log("horizontalJoin", horizontalJoin);
    for (l of horizontalJoin) {
        //console.log("l", l);
        if (l.includes(word)) return true;
    }

    //finding horizontal word backwards
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].reverse().join("").includes(word)) {
            return true;
        }
    }

    //creating vertical array
    const verticalArr = [];
    for (let i = 0; i <= letters[0].length; i++) {
        verticalArr.push([]);
        //    console.log("verticalArr", verticalArr);
        for (let j = 0; j < letters.length; j++) {
            verticalArr[i].push(letters[j][i]);
        }
    }
    //console.log(verticalArr);

    //finding vertical word
    const verticalJoin = verticalArr.map((ls) => ls.join(""));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    //finding vertical word backwards
    for (let i = 0; i < verticalArr.length; i++) {
        if (verticalArr[i].reverse().join("").includes(word)) {
            return true;
        }
    }

    return false;
};

module.exports = wordSearch;

//Patterns for Diagonal
// [W  I   F   E   E   Y  I]
// 01  12  21  32  43  54  65 76

// [A E C T Y E A S]
// 00  11  22  33  44   55  66  77

// [S  F  J  S  N  P  A  L]
// 10 21 32 43 54 65 76 87

// 20 31 42 53 64 75 86

module.exports = wordSearch