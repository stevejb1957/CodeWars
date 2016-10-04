function cakes(recipe, available) {
  ans = []
  for (var x in recipe) {

    for (i in available) {

      if (x == i) {
        ans.push(Math.floor(available[i] / recipe[x]))

        break
      }

    }
  }
  if (ans.length < Object.keys(recipe).length) {
    ans = 0
    return (ans)
  } else {
    return (Math.min.apply(Math, ans))
  }
}


