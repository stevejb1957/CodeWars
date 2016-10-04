function getCommands(field, power) {

    Array = field.split('')

    var moveArray = [];
    var unvisitedNodes = []
    var start = []
    var finish = []
    var i = 0;
    var s = Math.sqrt(field.length)
    for (l = Array.length + 1;
        (i + s) < l; i += s) {
        moveArray.push(Array.slice(i, i + s));
    }

    for (y = 0; y < s; y++) {
        for (x = 0; x < s; x++) {
            if (moveArray[y][x] == 'S') {
                start.push([y, x])
            } else if (moveArray[y][x] == 'T') {
                finish.push([y, x])
            }
        }
    }


    for (y = 0; y < s; y++) {
        for (x = 0; x < s; x++) {
            unvisitedNodes.push([y, x])
        }
    }


}
getCommands('S.......T', 10); // -> ['r', 'f', 'f', 'r', 'f', 'f']