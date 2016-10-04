function score(dice) {

  var onecount = 0;
  var twocount = 0;
  var threecount = 0;
  var fourcount = 0;
  var fivecount = 0;
  var sixcount = 0;
  var result = 0;

  for (i = 0; i < dice.length; i++) {
    if (dice[i] == 1) {
      onecount++
    } else {
      if (dice[i] == 2) {
        twocount++
      } else {
        if (dice[i] == 3) {
          threecount++
        } else {
          if (dice[i] == 4) {
            fourcount++
          } else {
            if (dice[i] == 5) {
              fivecount++
            } else {
              if (dice[i] == 6) {
                sixcount++
              }
            }
          }
        }
      }
    }

  }

  if (onecount >= 3) {
    result = result + 1000 + ((onecount - 3) * 100)
  }

  if (twocount >= 3) {
    result = result + 200
  }
  if (threecount >= 3) {
    result = result + 300
  }

  if (fourcount >= 3) {
    result = result + 400
  }
  if (fivecount >= 3) {
    result = result + 500 + ((fivecount - 3) * 50)
  }

  if (sixcount >= 3) {
    result = result + 600
  }
  if (onecount < 3) {
    result = result + (onecount * 100)
  }

  if (fivecount < 3) {
    result = result + (fivecount * 50)
  }

  alert(result);
}
