function HitCount(number) {
    var OuterArray = []
    var Innerarr1 = []
    var Innerarr2 = []
    var Innerarr3 = []
    var Innerarr4 = []

    OuterArray.push(Innerarr1, Innerarr2, Innerarr3, Innerarr4)

    var Numbers = number.split('')

    for (x = 0; x < Numbers.length; x++) {
        OuterArray[x].push(Numbers[x])

    }
    for (j = 0; j < 4; j++) {
        for (x = 0; x < OuterArray[j][0]; x++) {
            OuterArray[j].push(x)

        }
    }

    for (x = 0; x < 4; x++) {
        OuterArray[x].sort(function (a, b) {
            return a - b
        });
    }

    for (x = 0; x < 4; x++) {
        for (j = 0; j < OuterArray[x].length; j++) {
            OuterArray[x][j] = Number(OuterArray[x][j])
        }
    }

    return OuterArray;
}
HitCount('1250')