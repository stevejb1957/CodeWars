var lastDigit = function(str1, str2) {

  var str1 = str1.match(/(\d(?!.*\d))/)
  var num1 = parseInt(str1[0])

  if (str2 == 0) {
    return 1
  }

  var patterns = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 4, 8, 6],
    [3, 9, 7, 1],
    [4, 6, 4, 6],
    [5, 5, 5, 5],
    [6, 6, 6, 6],
    [7, 9, 3, 1],
    [8, 4, 2, 6],
    [9, 1, 9, 1]
  ]

  function modulo(NumStr, mod) {
    var temp = "";
    for (i = 0; i < NumStr.length; i++) {
      temp += NumStr.charAt(i);
      var rem = temp % mod;
      temp = rem.toString(10);
    }
    return temp / 1;
  }

  var remainder = modulo(str2, 4)

  if (remainder == 0) {
    var remainder = 4
  }

  var ans = patterns[num1][remainder - 1]
  return ans;
}
lastDigit("7", "5") // 7 (\d(?!.*\d))