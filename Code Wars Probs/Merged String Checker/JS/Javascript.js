 function isMerge(s, part1, part2) {

   word = s;
   Word = word.replace(/\s/g, '');
   code1 = part1;
   code2 = part2
   Code1 = code1.replace(/\s/g, '');
   Code2 = code2.replace(/\s/g, '');
   Table = [];
   check = [];
   if (part1.length + part2.length != s.length) {
     return false;
   }

   if (code1 == code2) {
     return false
   }

   for (i = 0; i < word.length; i++) {
     
       if (Code1[0] == Word[0]) {
         Table.push('T');
         Code1 = Code1.slice(1)
       } else {
         Table.push('F');
       }
     


  if (Code1[0] == Code2[0]) {
    check.push(Word[0])
    } else 
      if(Code2[0] == Word[0]) {
        Table.push('T');
        Code2 = Code2.slice(1)
      } else {
        Table.push('F');

      }
    }
 
     Word = Word.slice(1)
   

   for (i = 0; i < Table.length; i = i + 2) {
     if (Table[i] == 'F' && Table[i + 1] == 'F') {
       return false
     }
   }
   return true
 }

 alert(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'))