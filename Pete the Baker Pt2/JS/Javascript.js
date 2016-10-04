// continue with this problem. how to now added items in missing array
function getMissingIngredients(recipe, added) {
  ans = {}
  same = []
  ingredients = []
  missing = []
  lessThan = []
  function correctMix() {
    for (var x in recipe) {
      for (i in added) {
        diff = added[i] % recipe[x]
        if(diff == 0){
            ans[x] = recipe[x]
        }else{
         ans[x] = add           
        }
        multiplier(added[x], diff, recipe[x])
        return
      }
    }
      
  }

  function multiplier(original, add, devider) {
    New = parseInt(original) + parseInt(add)
    times = New / devider                      
  }
  
  function next(){
      missingX = recipe[missing] * times
      ans[missing] = missingX
      
  }
  
  function andAgain(){
      var missingAgain = missingOne(Object.keys(recipe),Object.keys(ans))
      var timesL = (recipe[missingAgain] * times) - added[missingAgain]
      ans[missingAgain] = timesL
      return
  }
    
  function missingOne(ingredients) {
    
  for (var x in recipe) {
    ingredients.push(x)
    for (i in added) {
      if (x == i) {
        same.push(x)
      }
    }
  }

    var i = 0,
      lenC = ingredients.length;

    for (; i < lenC; i++) {
      if (same.indexOf(ingredients[i]) == -1) missing.push(ingredients[i]);
    }
    return missing
  }
    
  // Check to see if empty and return recipe
  size = Object.keys(added).length

  if (size == 0) {
    ans = recipe
    return ans
  }
  // Check to see what ingredients are missing from added
    
  var missing = missingOne(ingredients, same)

  for (var x in recipe) {
    for (i in added) {
      if (x == i) {
        var add = recipe[x] - added[i]
        if (add < 0) {
         lessThan.push(added[i])
          correctMix()
          next()
          andAgain()
          return ans
        }
        if (add == 0) {
          break
        }
        ans[x] = add;
        //added[x] = added[x] + parseInt(add)
        //correctMix()
      }
    }
  }
  ans[missing] = recipe[missing]
  return ans
}



var recipe = {flour: 200, eggs: 1, sugar: 100};
    
//getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
//getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}
//getMissingIngredients(recipe, { flour: 100 }); // must return {flour: 100, eggs: 1, sugar: 100} 