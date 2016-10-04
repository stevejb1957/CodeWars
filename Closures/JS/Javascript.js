var addTo = function(passed) {

  var add = function(inner) {
    return passed + inner;
  };
  return add;
};

var addtwo = new addTo(2)

console.log(addtwo(3))