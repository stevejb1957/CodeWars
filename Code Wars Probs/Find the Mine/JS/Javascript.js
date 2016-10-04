function minelocation(field) {
  var rc = [];
  for (i = 0; i < field.length; i++) {
    for (x = 0; x < field.length; x++) {
      if (field[i][x] == 1) {
        rc.push(i, x );
        return rc;
        break;
      }

    }

  }

}
minelocation([[0,0,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]])