function combine() {

  var result = [];
  var answer = [];
  var arr = [];
  var numbers = [];
  var MaxNum = [];

  for (i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i].length)
  }

  MaxNum = Math.max.apply(Math, numbers);

  for (i = 0; i < MaxNum; i++) {
    for (j = 0; j < arguments.length; j++) {
      result.push(arguments[j][i]);

    }
  }

  var filtered = result.filter(function(value){
  return value != undefined;
  });

  alert(filtered);

}

combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])