function bouncingBall(h,  bounce,  window) {
    count = 0;
    if(bounce >= 1 || window >= h || h < 0 || bounce < 0 || window < 0){
        return (-1)
    }
    while(h>window){
        h = bounce*h;
        count = count + 1;
        if(h>window){
            count = count + 1;
        }
    }
    return count
}

bouncingBall(10, 0.6, 10)