function order(words) {
  var result = words.split(" ");
  var stack = [];
  for (i = 0; i < result.length; i++) {
    stack[i] = [];
    for (j = 0; j < result[i].length; j++) {
      if (!isNaN(result[i][j])) {
        stack[i].push(result[i][j])
        stack[i].push(result[i])
      }
    }

  }

  stack.sort();
  answer = [];
  for (k = 0; k < stack.length; k++) {
    answer.push(stack[k][1])

  }
  Result = answer.toString().replace(/,/g, " ")

  return Result

}
