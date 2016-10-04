
function descendingOrder(n){


var array = ((n).toString(10).split("").map(function(t) {
  return parseInt(t)
}))

  if (arguments.length === 0 || !Array.isArray(array)) { // if no numbers entered or not an array
    throw new Error("Error"); // raise a custom error
  }
  var hasHadChange;
  for (var i = 0; i < array.length - 1; i++) { // sets iteration 
    hasHadChange = false; // sets hasHadChange to false
    for (var x = 0; x < array.length - 1; x++) {
      if (array[x] < array[x + 1]) { // if array[index x] is less the array after ie array[x + 1]
        hasHadChange = true; // then hasHadChange becomes true
        var temp = array[x]; // array[x] assigned to var temp
        array[x] = array[x + 1]; // array[x] becomes array[x + 1]
        array[x + 1] = temp; // and array[x + 1] becomes temp ie array[x]
      }
    }
    if (!hasHadChange) { // if hasHadChange id false
        
      result = array.toString()  
      result = parseInt(result.replace(/,/g,''))
      return result
    }
  }
     result = array.toString()  
     result = parseInt(result.replace(/,/g,''))
      return result
};




descendingOrder(953618247)
alert(result)

