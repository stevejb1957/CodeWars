function chooseBestSum(t, k, ls) {
  var ans = []
  var result = []
  var answers = []

  if (k == 1) {
    one()
  } else if (k == 2) {
    two()
  } else if (k == 3) {
    three()
  } else if (k == 4) {
    four()
  } else {
    five()
  }

  function one() {
    for (x = 0; x < ls.length; x++) {
      ans = parseInt(ls[x])
      result.push(ans)
    }
  }

  function two() {
    for (x = 0; x < ls.length; x++) {
      for (i = x + 1; i <= ls.length - (k - 1); i++) {
        ans = parseInt(ls[x] + ls[i])
        result.push(ans)
      }
    }
  }

  function three() {
    for (x = 0; x < ls.length; x++) {
      for (i = x + 1; i <= ls.length - (k - 1); i++) {
        for (j = i + 1; j <= ls.length - (k - 2); j++) {
          ans = parseInt(ls[x] + ls[i] + ls[j])
          result.push(ans)
        }
      }
    }
  }

  function four() {
    for (x = 0; x < ls.length; x++) {
      for (i = x + 1; i <= ls.length - (k - 1); i++) {
        for (j = i + 1; j <= ls.length - (k - 2); j++) {
          for (l = j + 1; l <= ls.length - (k - 3); l++) {
            ans = parseInt(ls[x] + ls[i] + ls[j] + ls[l])
            result.push(ans)
          }
        }
      }
    }
  }

  function five() {
    for (x = 0; x < ls.length; x++) {
      for (i = x + 1; i <= ls.length - (k - 1); i++) {
        for (j = i + 1; j <= ls.length - (k - 2); j++) {
          for (l = j + 1; l <= ls.length - (k - 3); l++) {
            for (m = j + 1; m <= ls.length - (k - 4); m++) {
              ans = parseInt(ls[x] + ls[i] + ls[j] + ls[l] + ls[m])
              result.push(ans)
            }
          }
        }
      }
    }
  }

  for (x = 0; x < result.length; x++) {
    if (result[x] <= t) {
      answers.push(result[x])
    }
  }

  if (!answers.length) {
    return null
  }

  alert(Math.max.apply(Math, answers))
}

var ts = [91, 74, 73, 85, 73, 81, 87, 91, 56, 23, 12, 45, 78, 45, 34, 67, 45]
chooseBestSum(38, 5, ts)