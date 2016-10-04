var Morse = {};

Morse.encode = function (message) {
    result = []
    finalAns = []
    Mess = message.slice()
    for (x = 0; x < Mess.length; x++) {
        var char = message.charAt(0)
        if (char == " ") {
            result.push('0000')
            message = message.slice(1)
        } else if (x == Mess.length - 1) {
            var ans = Morse.alpha[char]
            result.push(ans)
            message = message.slice(1)
        } else {
            var ans = Morse.alpha[char]
            result.push(ans)
            result.push('000')
            message = message.slice(1)
        }
    }

    var joinResult = result.join()
    var joinedResult = joinResult.replace(/,/g, '')
    var remResult1 = joinedResult.length / 32
    var remResult2 = Math.ceil(joinedResult.length / 32)
    var remResult3 = remResult2 - remResult1
    var remResult4 = 32 * remResult3
    for (x = 0; x < remResult4; x++) {
        joinedResult = joinedResult + '0'
    }
    var num = joinedResult.length / 32

    for (x = 0; x < num; x++) {
        var cutResult = joinedResult.slice(0, 32)
        var match = cutResult.match(/([1|0])/)
        if (match[0] == '0') {
            var bin2decPlus = parseInt(cutResult, 2)
            finalAns.push(bin2decPlus)
            joinedResult = joinedResult.slice(32)
        } else {
            var dataPlus = cutResult.slice(1, 32)
            var dataMinus = "10000000000000000000000000000000"
            var bin2decPlus = parseInt(dataPlus, 2)
            var bin2decMinus = parseInt(dataMinus, 2)
            finalAns.push(bin2decPlus - bin2decMinus)
            joinedResult = joinedResult.slice(32)
        }

    }
    return finalAns
};


Morse.decode = function (integerArray) {
    var ans = []
    var alpha = []
    var codes = []
    var C = true

    for (x = 0; x < integerArray.length; x++) {
        if (integerArray[x] > 0) {
            ans.push((integerArray[x]).toString(2));
        } else {
            ans.push((integerArray[x] >>> 0).toString(2));
        }

    }

    for (x = 0; x < ans.length; x++) {
        if (ans[x].length < 32) {
            var addon = 32 - ans[x].length
            for (j = 0; j < addon; j++) {
                ans[x] = '0' + ans[x]
            }
        }
    }

    var joinAns = ans.join()
    var joinedAns = joinAns.replace(/,/g, '')

    while (C == true) {
        var gap = joinedAns.match(/(0{3,})/)
        var Cut = joinedAns.match(/([1|0]*?)(?=0{3})/)
        if (gap[0].length == 7) {
            codes.push(Cut[0])
            codes.push('0')
            joinedAns = joinedAns.slice(Cut[0].length)
            joinedAns = joinedAns.slice(7)
        } else {
            codes.push(Cut[0])
            joinedAns = joinedAns.slice(Cut[0].length)
            joinedAns = joinedAns.slice(gap[0].length)
        }

        if (Cut[0] == "" || joinedAns == "") {
            if (codes[codes.length - 1] == '0') {
                codes.pop()
            }
            C = false
        }
    }

    for (x = 0; x < codes.length; x++) {
        for (var key in Morse.alpha) {
            if (Morse.alpha[key] == codes[x]) {
                alpha.push(key);
                break
            }
        }
    }

    alpha = alpha.toString()

    if (alpha == ',,,') {
        alpha = ', ,'
    } else if (alpha == ',') {
        alpha = ','
    } else {
        alpha = alpha.replace(/,/g, '')
    }

    return alpha
};
Morse.alpha = {
    'A': '10111',
    'B': '111010101',
    'C': '11101011101',
    'D': '1110101',
    'E': '1',
    'F': '101011101',
    'G': '111011101',
    'H': '1010101',
    'I': '101',
    'J': '1011101110111',
    'K': '111010111',
    'L': '101110101',
    'M': '1110111',
    'N': '11101',
    'O': '11101110111',
    'P': '10111011101',
    'Q': '1110111010111',
    'R': '1011101',
    'S': '10101',
    'T': '111',
    'U': '1010111',
    'V': '101010111',
    'W': '101110111',
    'X': '11101010111',
    'Y': '1110101110111',
    'Z': '11101110101',
    '0': '1110111011101110111',
    '1': '10111011101110111',
    '2': '101011101110111',
    '3': '1010101110111',
    '4': '10101010111',
    '5': '101010101',
    '6': '11101010101',
    '7': '1110111010101',
    '8': '111011101110101',
    '9': '11101110111011101',
    '.': '10111010111010111',
    ',': '1110111010101110111',
    '?': '101011101110101',
    "'": '1011101110111011101',
    '!': '1110101110101110111',
    '/': '1110101011101',
    '(': '111010111011101',
    ')': '1110101110111010111',
    '&': '10111010101',
    ':': '11101110111010101',
    ';': '11101011101011101',
    '=': '1110101010111',
    '+': '1011101011101',
    '-': '111010101010111',
    '_': '10101110111010111',
    '"': '101110101011101',
    '$': '10101011101010111',
    '@': '10111011101011101',
    ' ': '0' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};

Morse.encode(',')
Morse.decode([ -286334237,
  -1548819800,
  -1145336904,
  -359941192,
  -291259765,
  -1464288328,
  -341591390,
  -299176389,
  -1145521221,
  -1950815325,
  -1465898262,
  -487671250,
  -494227912,
  -1165050994,
  -1461044293,
  -1562133854,
  -1371888710,
  713800586,
  -1951876214,
  -474236373,
  -1148470390,
  -1373106502,
  -298930546,
  -1195662610,
  -1896945526,
  -492656466,
  -1896994066,
  707672760,
  -1372680517,
  -1975800261,
  -1561402712,
  -1433476480 ])