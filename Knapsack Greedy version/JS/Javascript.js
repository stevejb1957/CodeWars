var knapsack = function(capacity, items) {
  avg = []
  Avg = []
  Index = []
  count = []
  Count = 0
  answer = []
  Answer = []
  index = 0
  var remainder = capacity
  for (i = 0; i < items.length; i++) {
    avg.push(items[i][1] / items[i][0])
    Avg.push(items[i][1] / items[i][0])
  }
  avg.sort(function(a, b) {
    return b - a
  });

  for (x = 0; x < avg.length; x++) {
    for (j = 0; j < Avg.length; j++) {
      if (avg[x] == Avg[j]) {
        Index.push(j)
      }
    }
  }
   
  for(x=0;x<items.length;x++) {
    loop()
    if (remainder > items[Index[x]][0]) {
      remainder = remainder - items[Index[x]][0]
      count.push([Index[x]])
      if (remainder > items[Index[x]][0]) {
        remainder = remainder - items[Index[x]][0]
        count.push([Index[x]])
      } else {
        continue
      }
    }
  }
  
function loop(){
  while(remainder>0){
    if (remainder - items[Index[x]][0]<0) {
        break
    } else {
        remainder = remainder - items[Index[x]][0]
        count.push([Index[x]])
    }
  }
}
    
  result = {};
  for (i = 0; i < count.length; ++i) {
    if (!result[count[i]])
      result[count[i]] = 0;
    ++result[count[i]];
  }
    
  for(x=0;x<items.length;x++){
      answer.push(result[x])
  }

    for(x=0;x<answer.length;x++){
        if(answer[x]==undefined){
            answer[x]=0
        }
        Answer.push(answer[x])
    }
      return(Answer)
    }

knapsack(100, [[1, 1]])