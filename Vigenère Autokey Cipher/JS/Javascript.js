function VigenèreAutokeyCipher(key, abc, str) {

    function Create2DArray(rows) {
        arr = [];

        for (var i = 0; i < rows; i++) {
            arr[i] = [];
        }

        return arr;
    }

    function FillArray(array, alpha) {

        for (i = 0; i < alpha.length; i++) {
            if (i > 0) {
                var alpha = alpha.substr(1, alpha.length - 1) + alpha.substr(0, 1)
            }
            for (x = 0; x < alpha.length; x++) {
                array[i].push(alpha[0])
                alpha = alpha.substr(1, alpha.length - 1) + alpha.substr(0, 1)
            }
        }
    }

    Create2DArray(abc.length)
    FillArray(arr, abc)

    this.encode = function (str) {
        var Str = []
        var IndexX = []
        var IndexY = []
        var Code = []
        var CodeAns = []
        var Y = str;
        for (x = 0; x < str.length; x++) {
            if (isNaN(str[x])) {
                Str.push(str[x])
            }
        }
        var X = key + Str

        for (x = 0; x < X.length; x++) {
            for (i = 0; i < abc.length; i++)
                if (X[x] == abc[i]) {
                    IndexX.push(i)
                }
        }

        for (x = 0; x < Y.length; x++) {

            for (i = 0; i < arr.length + 1; i++) {
                if (i == arr.length) {
                    IndexY.push(Y[x])
                    break;
                }
                if (Y[x] == arr[i][0]) {
                    IndexY.push(i)
                    break;

                }
            }

        }

        for (j = 0; j < IndexY.length; j++) {
            if (IndexY[j] == !IndexY[j] / 1 || IndexY[j] == '!' || IndexY[j] == "'" || IndexY[j] == '/' || typeof IndexY[j] == 'string') {
                Code.push(IndexY[j])
                IndexY.shift()
                j = j - 1
                continue;
                if (j == IndexY.length) {
                    break
                }
            }
            Code.push(arr[IndexY[j]][IndexX[j]])
        }

        var Y = Y.split("");
        for (x = 0; x < Y.length; x++) {
            CodeAns.push(Code[0])
            Code.shift()
        }

        var EncodeAns = CodeAns.toString().replace(/,/g, '');
        return EncodeAns;
    };

    this.decode = function (str) {

        var deCode = []
        var IndexYd = []
        var IndexXd = []
        var Yd = key
        var Yd = Yd.split("");
        var str = str.split("");
        var Xd = str
        var strSze = str.slice();


        loop1: for (x = 0; x < strSze.length; x++) {
                (function () {
                    loop2: for (i = 0; i < arr.length; i++) {
                            if (Yd[0] == arr[i][0]) {
                                loop3: for (j = 0; j < arr.length + 1; j++) {
                                        if (j == arr.length) {
                                            IndexYd.push(str[0])
                                            str.shift();
                                            i = i - 1
                                            return;
                                        } else if (str[0] == arr[i][j]) {
                                            IndexYd.push(j)
                                            Yd.push(arr[0][j])
                                            Yd.shift();
                                            str.shift();
                                            return;
                                        }
                                    } //loop3
                            }
                        } //loop2
                })()
            } //loop1



        for (x = 0; x < IndexYd.length; x++) {
            if (arr[0][IndexYd[x]] === undefined) {
                deCode.push(IndexYd[x])
            } else if (IndexYd[x] === IndexYd[x].toString()) {
                deCode.push(IndexYd[x])
            } else {
                deCode.push(arr[0][IndexYd[x]])
            }
        }
        var DecodeAns = deCode.toString().replace(/,/g, '');
        return DecodeAns;
    };


}

var str = '6tthmnn1myezwhz14i'
var key = 'attackatdawn';
var abc = 'abcdefghijklmnopqrstuvwxyz';
//Encode 6taomld10mfbzaug14i
//Decode 6tthmnn10myezwhz14i
VigenèreAutokeyCipher(key, abc, str)