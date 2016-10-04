function movingShift(s, shift) {
  var letter = []
  var code = []
  var arr = []
  num1 = 0
  answer = []
  console.log(s)
  Word = s.toLowerCase();
  console.log(Word)
  for (i = 0; i < Word.length; i++) {

    letter.push(Word[i].charCodeAt(0) - 96)

  }
  console.log(letter)
  for (i = 0; i < letter.length; i++) {

    code.push(letter[i] + shift + i)

  }
  console.log(code)
  for (i = 0; i < code.length; i++) {
    if (code[i] > 26) {
      code[i] = code[i] - 26
    }
  }

  for (i = 0; i < code.length; i++) {
    if (code[i] > 26) {
      code[i] = code[i] - 26
    }
  }

  var num14 = Math.ceil(code.length / 5)
  var num5 = code.length - (4 * num14)

  for (i = 0; i < 4; i++) {
    for (j = 0; j < num14; j++) {
      arr.push(code[num1])
      num1++

    }

  }
  console.log(arr)
  for (i = 0; i < num5; i++) {
    arr.push(code[num1])
    num1++
  }

  for (i = 0; i < arr.length; i++) {
    answer.push(String.fromCharCode(96 + arr[i]))
  }
  console.log(answer)
  alert(answer)
  var result = answer.toString();
  console.log(result)
  for (i = 0; i < result.length; i++) {
    var Code = result.charCodeAt(i)
    if (Code < 97 && Code != 44) {

     answer.splice(i / 2, 1,'');

    }
  }
 for (var i = 0; i < answer.length; i++) {
   answer[i] = answer[i].replace(/,/g, " ");
}

  console.log(answer)
alert(answer)

}

movingShift("I should have known that you would have a perfect answer for me!!!", 1)