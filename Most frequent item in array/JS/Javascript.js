function mostFrequentItemCount(collection) {
  var sortedArr = collection.sort();
  count = 0;
  store = [];
  if(collections.length==0){
      return 0
  }
  for (x = 0; x < sortedArr.length; x++) {
    if (sortedArr[x] == sortedArr[x + 1]) {
      count = count + 1;
    } else {
      count = count + 1;
      store.push(count);
      count = 0;
    }
  }
  return Math.max(...store);
}

var answer = mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])