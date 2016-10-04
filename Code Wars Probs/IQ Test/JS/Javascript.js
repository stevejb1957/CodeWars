function iqTest(numbers) {
  var even = 0;
  var odd = 0;
  var indexOdd;
  var indexEven;

  var array = numbers.replace(/\s/g, ',').split(',').map(function(i) {
    return parseInt(i, 10);
  })

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      even == even++
        indexEven = [i + 1]

    } else {
      odd == odd++
        indexOdd = [i + 1]
    }

  }

  if (odd > even) {
    indexEven = parseInt(indexEven.toString());
    return indexEven

  } else {
    indexOdd = parseInt(indexOdd.toString());
    return indexOdd
  }

}
iqTest("2 4 7 8 10")
