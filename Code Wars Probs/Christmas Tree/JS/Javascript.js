function christmasTree(height){
   tree = '';
   stars = 1;
   width = 2*height-1;
     
   for( var i = 0;i < height;i++)
   {
     spaces = (width - stars)/2
     for(var j = 0;j < spaces;j++)
     {
      tree += ' ';
     }
     for(j = 0;j < stars;j++)
     {
      tree += '*'
      
     }
     for(var j = 0;j < spaces;j++)
     {
      tree += ' ';
     }
     tree += '\n'
     stars += 2;
    }  
      return tree.slice(0,tree.length-1)
}