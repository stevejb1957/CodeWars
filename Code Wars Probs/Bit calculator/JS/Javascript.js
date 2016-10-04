var num1 = num1
var num2 = num2
answer1 = 0;
for(i = 0;i < num1.length;i++){
    var result = num1[i] * Math.pow(2,(num1.length-1)-i);
   answer1 = result + answer1;
}
   answer2 = 0;
   for(i = 0;i < num2.length;i++){
    var result = num2[i] * Math.pow(2,(num2.length-1)-i);
   answer2 = result + answer2;
}

return answer1+answer2

