var bowlingScore = function(rolls) {
  pairs = [];
  result = [];
  score = [];
  strike = false;
  spare = false;
  roll = Math.ceil(rolls.length / 2);

  function strikeSpare() {
    if (pairs[j][k] == 10) {
      strike = true;
    } else if (
      pairs[j][k] + pairs[j][k + 1] == 10)
      spare = true;
  }

  for (x = 0; x < 10; x++) {
    pairs[x] = [];
    if (rolls[x] == 10) {
      pairs[x].push(rolls[0])

    } else {
      for (i = 0; i < 2; i++) {
        pairs[x].push(rolls[0]);
        rolls.shift();
      }
    }
  }
  for (j = 0; j < roll; j++) {
    for (k = 0; k < 1; k++)
      if (pairs[j][k + 1] == undefined) {
        pairs[j][k + 1] = 0;
        result = pairs[j][k] + pairs[j][k + 1];
        score.push(result);
      } else {
        result = pairs[j][k] + pairs[j][k + 1];
        strikeSpare();

        if (spare == true) {
          result = result + pairs[j + 1][0];
          spare = false;
        }

        if (strike == true) {
          if (pairs[j + 1][0] < 10) {
            result = result + pairs[j + 1][0] + pairs[J + 1][1];
            strike = false;
          } else {
            result = result + pairs[j + 1][0] + pairs[j + 2][0];
            strike = false;
          }
        }
        score.push(result);
      }
  }

  answer = score.reduce(function(a, b) {
    return a + b;
  });

  if (roll == 11) {
    return finalScore = answer - score[10];
  } else if (roll == 12) {
    return finalScore = answer - score[11];
  } else {
    return answer;
  }

}
 bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9])