function RoundUp(n){
for ( i = 0; i < 5; i++){
  if(n%5 == 0 || n == 0){
    alert(n)
    break;
  }else{
    n = n+1
  }
}
}
RoundUp(7)