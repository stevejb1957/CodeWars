snail = function (array) {

    var i = 0
    var q = 0
    arr = []
    ans = []
    ansy = []
    Origin = [0, 0]
    Points = []
    Nums = []
    n = array.length
    ans.push(Origin[0])
    ansy.push(Origin[0])

    function duplicates() {
        Nums = Nums.filter(function (value, index, array) {
            return array.indexOf(value) == index;
        });
        
    }

    function Ans() {
        for (x = 0; x <= arr.length; x++) {
            Points.push([ansy[x], ans[x]])
        }
        return Points;
    }


    for (x = 0; x < (n - 1); x++) {
        if (x == 0) {
            for (z = 0; z < 3; z++) {
                arr.push(n - 1 + x)
            }
            continue;
        }
        for (j = 0; j < 2; j++) {
            arr.push(n - (1 + x))
        }
    }



    while (i < 2 * array.length) {
        ans.push(ans[i] + arr[i])
        i = i + 1
        if (i == arr.length) {
            i = 0
            break
        }
        ans.push(ans[i])
        i = i + 1
        if (i == arr.length) {
            i = 0
            break
        }
        ans.push(ans[i] - arr[i])
        i = i + 1
        if (i == arr.length) {
            i = 0
            break
        }
        ans.push(ans[i])
        i = i + 1
        if (i == arr.length) {
            i = 0
            break
        }
    }

    while (i < 2 * array.length) {
        ansy.push(ansy[i])
        i = i + 1
        if (i == arr.length) {
            break
        }
        ansy.push(ansy[i] + arr[i])
        i = i + 1
        if (i == arr.length) {
            break
        }
        ansy.push(ansy[i])
        i = i + 1
        if (i == arr.length) {
            break
        }
        ansy.push(ansy[i] - arr[i])
        i = i + 1
        if (i == arr.length) {
            break
        }
    }

    Ans()


    while (q < 2 * array.length) {

        for (x = Points[q][1]; x <= Points[q + 1][1]; x++) {
            Nums.push(array[Points[q][0]][x])
        }
        q = q + 1
        if (q == arr.length) {
            duplicates()
            break
        }

        for (y = Points[q][0]; y <= Points[q + 1][0]; y++) {
            Nums.push(array[y][Points[q][1]])
        }

        q = q + 1
        if (q == arr.length) {
            duplicates()
            break
        }

        for (x = Points[q][1]; x >= Points[q + 1][1]; x--) {
            Nums.push(array[Points[q][0]][x])
        }

        q = q + 1
        if (q == arr.length) {
            duplicates()
            break
        }

        for (y = Points[q][0]; y >= Points[q + 1][0]; y--) {
            Nums.push(array[y][Points[q][1]])
        }

        q = q + 1
        if (q == arr.length) {
            duplicates()
            break
        }
    }

    return Nums;

}


array = [[1, 2, 3, 4, 5],
         [6, 7, 8, 9, 10],
         [11, 12, 13, 14, 15],
         [16, 17, 18, 19, 20],
         [21, 22, 23, 24, 25]]
snail(array)