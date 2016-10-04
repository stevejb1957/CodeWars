function strongEnough(earthquake, age) {
var  Total = 0;
var quakeStrength = 1;

buildStrength = 1000 * Math.exp(-0.01*age)
addArray(earthquake);
function addArray(earthquake) {
    
  for (x = 0; x < 3; x++) {
    for (i = 0; i < earthquake.length; i++) {
      Total = Total + earthquake[x][i]
    }
   quakeStrength = quakeStrength * Total
    Total = 0;
  }
  return quakeStrength
}
if ( quakeStrength < buildStrength){
return "Safe!";
}
return "Needs Reinforcement!"
}

strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2)