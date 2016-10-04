function game(n) {

  num1 = [];
  den1 = [];
  Fraction = [];
  array = []
  var d1 = [];
  var d2 = [];

  for (i = 1; i < (n + 1); i++) { // creates n x n array of fractions
    Fraction[i] = [];
    for (j = 1; j < (n + 1); j++) {
      num1 = j;
      den1 = i + j;
      Fraction[i][j] = ([num1, den1]);
    }

  }


result = [1, 2];
lcm = [1];
fraction = [];
f1 = [];
f2 = [];

for (i = 1; i < Fraction.length; i++) {
  for (j = 1; j < Fraction.length; j++) {

    f1 = [result[0], result[1]]
    f2 = [Fraction[i][j][0], Fraction[i][j][1]]

    var d1 = f1[1];

    var d2 = f2[1];

    result = [];
    fraction = [];

    var gcd = function(a, b) {
      if (!b) return a;

      return gcd(b, (a % b));
    };

    var divisor = gcd(d1, d2);

    var lcm = d1 * (d2 / divisor);

    answer = ((lcm / f1[1]) * f1[0]) + ((lcm / f2[1]) * f2[0])

    fraction = [answer, lcm];

    var reducer = gcd(answer, lcm);

    result = [answer / reducer, lcm / reducer]

  }

}

f1 = [result[0], result[1]]
f2 = [
  [1],
  [2]
]

var d1 = f1[1];

var d2 = f2[1];

result = [];
fraction = [];

var gcd = function(a, b) {
  if (!b) return a;

  return gcd(b, (a % b));
};

var divisor = gcd(d1, d2);

var lcm = d1 * (d2 / divisor);

answer = ((lcm / f1[1]) * f1[0]) - ((lcm / f2[1]) * f2[0])

fraction = [answer, lcm];

var reducer = gcd(answer, lcm);

result = [answer / reducer, lcm / reducer]

var d1 = result[0];

var d2 = result[1];

result = [];
fraction = [];

var gcd = function(a, b) {
  if (!b) return a;

  return gcd(b, (a % b));
};

var divisor = gcd(d1, d2);

result = [d1 / divisor, d2 / divisor]

if (d2 / divisor == 1) {
  return [d1]
} else {
  return result
}

}

game(40)