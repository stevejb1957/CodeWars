function bonusTime(salary, bonus) {
    var BigBucks;

    if (bonus == true) {
        BigBucks = salary * 10;
        BigBucks = '£' + BigBucks
        return BigBucks
    } else {
        BigBucks = '£' + salary
        return BigBucks
    }

}

bonusTime(10000, true)