
function persistence(num) {

  count = 0
  var array = ((num).toString(10).split("").map(function(t) {
    return parseInt(t)
  }))

  for (i = 0; i < (array.length + i); i++) {
    if (array.length < 2) {
      return count
      break

    } else {

      var array = array.reduce((a, b) => a * b).toString(10).split("").map(function(t) {
        return parseInt(t)
      })
      count++

    }
  }
}
