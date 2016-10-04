function tongues(code) {
  var Decode = [];
  var decode = [];
  var com = [];
  var pos = [];
  var Pos = false
  var Com = false
  var vowels = ['a', 'i', 'y', 'e', 'o', 'u', 'a', 'i', 'y'];
  var conts = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f', 'b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g'];
  var puncNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '(', ')', '?','*']

  for (p = 0; p < code.length; p++) {
    if (code[p] == code[p].toUpperCase() && code[p] != code[p].toLowerCase()) {
      pos.push(p);
      Pos = true;
    }
  }

  for (p = 0; p < code.length; p++) {
    if (code[p] == ',') {
      com.push(p);
      Com = true;

    }
  }
  var code = code.toLowerCase();

  function Vowels() {
    for (i = 0; i < vowels.length; i++) {
      if (code[x] == vowels[i]) {
        decode.push(vowels[i + 3]);
        break;
      }
    }
  }

  function Conts() {
    for (i = 0; i < conts.length; i++) {
      if (code[x] == conts[i]) {
        decode.push(conts[i + 10]);
        break;
      }
    }
  }

  function Space() {
    for (i = 0; i < conts.length; i++) {
      if (code[x] == ' ') {
        decode.push(' ');
        break;
      }
    }
  }

  function fullStop() {
    for (i = 0; i < conts.length; i++) {
      if (code[x] == '.') {
        decode.push('.');
        break;
      }
    }
  }

  function Nums() {
    for (i = 0; i < puncNums.length; i++) {
      if (code[x] == puncNums[i]) {
        decode.push(puncNums[i]);
        break;
      }
    }
  }

  for (x = 0; x < code.length; x++) {
    Vowels();
    Conts();
    Space();
    fullStop();
    Nums();
  }

  if (pos == [] || Pos == false) {
    Decode = decode;
  } else {

    for (x = 0; x < decode.length; x++) {
      var count = false;
      for (i = 0; i < pos.length; i++) {
        if (x == pos[i] || x == pos[i + 1]) {
          var up = decode[x].toUpperCase();
          Decode.push(up);
          break
        } else if (count == false) {
          Decode.push(decode[x]);
          count = true;
        }
      }
    }
  }

  var answer = Decode.toString();
  answer = answer.replace(/,/g, "");

  if (com == [] || Com == false) {
    return answer;
  } else {
    var answers = answer.slice(0, com) + "," + answer.slice(com);
    return answers;
  }

}