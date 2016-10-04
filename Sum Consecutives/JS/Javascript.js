function sumConsecutives(s) {
    answer = [];
    a = [0];
    var add = 0;
    for(x = 0;x <s.length;x++){
        if(s[x]==s[x+1]){
            a.push(s[x])
            
    }else if(s[x-1]==s[x]){
         var sum = a.reduce(function(a, b) { return a + b; }, 0);
         add = s[x] + parseInt(sum)
         answer.push(add)
         sum = [0];
         add = 0;
         a = [0]
        
    }else{
        answer.push(s[x]);
        a = [0];
        add = 0;
    }
    
  }
   return answer; 
}

sumConsecutives([1,4,4,4,0,4,3,3,1])