function lastDigit(as) {



    var patterns = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 4, 8, 6],
    [3, 9, 7, 1],
    [4, 6, 4, 6],
    [5, 5, 5, 5],
    [6, 6, 6, 6],
    [7, 9, 3, 1],
    [8, 4, 2, 6],
    [9, 1, 9, 1]
  ]

    function calc(num1, str2) {

        function modulo(NumStr, mod) {
            var temp = "";
            for (i = 0; i < NumStr.length; i++) {
                temp += NumStr.charAt(i);
                var rem = temp % mod;
                temp = rem.toString(10);
            }
            return temp / 1;
        }

        var remainder = modulo(str2, 4)

        if (remainder == 0) {
            var remainder = 4
        }

        ans = patterns[num1][remainder - 1]
        return ans;
    }

    if (as.length == 0) {
        return 1
    }
    
    if (as.length == 2 && (as[0] == 0 && as[1] == 0)) {
        return 1
    }
    
    if (as.length == 3 && (as[0] == 0 && as[1] == 0 && as[2] == 0)){
        return 0
    }
    
    
    if (as.length == 1) {
        oneNum(as)
    } else if (as.length == 2) {
        justtwoNums(as)
    } else {
        moreNums(as)
    }

    function oneNum(num) {
        var ans = num.toString()
        lastNum(ans)
    }

    function justtwoNums(nums) {
        var str1 = nums[0]
        str1 = str1.toString()
        var str2 = nums[1]
        str2 = str2.toString()
        var str1 = str1.match(/(\d(?!.*\d))/)
        var num1 = parseInt(str1[0])
        calc(num1, str2)
        return ans;
    }

    function twoNums(nums) {
        var str1 = nums[0]
        str1 = str1.toString()
        var str2 = nums[1]
        str2 = str2.toString()
        var str1 = str1.match(/(\d(?!.*\d))/)
        var num1 = parseInt(str1[0])
        calc(num1, str2)
        return ans;
    }

    function moreNums(nums) {
        var store = nums.shift()
        store = store.toString()
        twoNums(nums)
        nums = []
        nums.push(store)
        nums.push(ans)
        justtwoNums(nums)
        return ans

    }

    function lastNum(last) {

        var str = last.toString().match(/(\d(?!.*\d))/)
        var Res = parseInt(str[0])
        return Res
    }
    
    return ans;

}

lastDigit([ 7, 6, 21 ]) //1 getting 9