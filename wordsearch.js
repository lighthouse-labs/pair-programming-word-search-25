// Partners: Anastasia Zaika & Nicole Law;

const wordSearch = (letters, word) => {
    if ((letters.length === 0) || (!word)) {
        return false;
    }

  


    //finding horizontal word
    const horizontalJoin = letters.map((ls) => ls.join(""));
    // console.log("horizontalJoin",horizontalJoin);
    for (l of horizontalJoin) {
        //console.log("l", l);
        if (l.includes(word)) return true;
    }

    //finding horizontal word backwards
    const horizontalReverse = letters.map((ls) => ls.reverse().join(""));
    for (l of horizontalReverse) {
        //console.log("l", l);
        if (l.includes(word)) return true;
    }

    // for (let i = 0; i < letters.length; i++) {
    //   if (letters[i].reverse().join("").includes(word)) {
    //     return true;
    //   }
    // }

    //creating vertical array
    const verticalArr = [];
    for (let i = 0; i <= letters[0].length; i++) {
        verticalArr.push([]);
        //console.log("verticalArr", verticalArr);
        for (let j = 0; j < letters.length; j++) {
            verticalArr[i].push(letters[j][i]);
        }
    }

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

      //creating diagonal array
    let diagonalArr = [];
    let j = 0;
    let k = 0;
    for (let i = 0; i < letters.length; i++, j++) {
        console.log("FIRST", word.substring(k, k + 1), i, j, k, letters[i][j]);
        if (word.substring(k, k + 1) === letters[i][j]) { //identify starting point of diagonal
            //take the first letter from the word, search for this element then only we will begin our diagonal search
            diagonalArr.push(letters[i][j]);
        }
        k = k + 1;
    }
    if (diagonalArr.join("").includes(word)) {
        return true;
    }
    console.log("diagonalArr", diagonalArr);

    return false;
};

module.exports = wordSearch;

//Patterns for Diagonal
// [W  I   F   E   E   Y  I]
// 01  12  23  34  45  56  67 78

// [A E C T Y E A S]
// 00  11  22  33  44   55  66  77

// [S  F  J  S  N  P  A  L]
// 10 21 32 43 54 65 76 87

// 20 31 42 53 64 75 86