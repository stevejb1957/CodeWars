function parseMolecule(formula) {
  var Formula = formula.substr(0);
  var Atoms = []
  var Nums = []
  var Index = []
  var Molucule = {}
  var NumsA = 0;
  var count = 0;
  var test = true;
  var multA = true;
  var multB = true;
  var multC = true;
  var CurlyBrak = true;
  var SquareBrak = true;
  var lastS = -1
  var lastC = -1

  while (test == true) {

    var atom = String(formula).match(/\W|[A-Z][a-z]?|\d+/);
    var Atom = atom[0]

    if (Atom == '{') {
      formula = String(formula).replace(atom, '');
      CurlyBrak = false;
      continue;
    }

    if (Atom == '[') {
      formula = String(formula).replace(atom, '');
      SquareBrak = false;
      continue;
    }

    if (Atom == '(') {
      formula = String(formula).replace(atom, '');
      continue;
    }

    if (Atom == '}') {
      formula = String(formula).replace(atom, '');
      CurlyBrak = true;
      var multC = false;
      continue;
    }

    if (Atom == ']') {
      formula = String(formula).replace(atom, '');
      SquareBrak = true;
      var multB = false;
      continue;
    }

    if (Atom == ')') {
      formula = String(formula).replace(atom, '');
      var count = count + 1;
      var multA = false;
      continue;
    }

    if ((!isNaN(Atom * 1)) && multA == false) {
      multiplyA();
      if (String(formula).match(/[A-Z][a-z]?|\(.*?\)\d+|\d|\D/) == null) {
        for (a = 0; a < Atoms.length; a++) {
          Molucule[Atoms[a]] = Nums[a];
        }
        answer()
        return (Molucule)
      } else {
        continue;
      }
    }

    if ((!isNaN(Atom * 1)) && multB == false) {
      multiplyB();
      if (String(formula).match(/[A-Z][a-z]?|\(.*?\)\d+|\d|\D/) == null) {
        for (a = 0; a < Atoms.length; a++) {
          Molucule[Atoms[a]] = Nums[a];
        }
        answer()
        return (Molucule)
      } else {
        continue;
      }
    }

    if ((!isNaN(Atom * 1)) && multC == false) {
      multiplyC();
      if (String(formula).match(/[A-Z][a-z]?|\(.*?\)\d+|\d|\D/) == null) {
        for (a = 0; a < Atoms.length; a++) {
          Molucule[Atoms[a]] = Nums[a];
        }
        answer()
        return (Molucule)
      } else {
        continue;
      }
    }

    Atoms.push(Atom)
    formula = String(formula).replace(atom, '');

    var num = formula.match(/\d{2}|\S/);
    if (num == null) {
      var Num = NumTest(Num)
    } else {
      var Num = num[0]
      var Num = NumTest(Num)
    }
  }

  function NumTest(num) {

    if ((!isNaN(num * 1))) {
      Nums.push(num)
      if (SquareBrak == false) {
        SqBrakN = Nums.slice(lastS)
        lastS = lastS - 1
      }
      if (CurlyBrak == false) {
        CurlBrakN = Nums.slice(lastC)
        lastC = lastC - 1
      }
      formula = formula.replace(num, '')
      if (formula == '') {
        test = false;
      }
      return
    } else if (num == null) {
      num = "1"
      Nums.push(num)
      if (SquareBrak == false) {
        SqBrakN = Nums.slice(lastS)
        lastS = lastS - 1
      }
      if (CurlyBrak == false) {
        CurlBrakN = Nums.slice(lastC)
        lastC = lastC - 1
      }
      test = false;
      return
    } else if (num == '(') {
      num = "1"
      Nums.push(num)
      if (SquareBrak == false) {
        SqBrakN = Nums.slice(lastS)
        lastS = lastS - 1
      }
      if (CurlyBrak == false) {
        CurlBrakN = Nums.slice(lastC)
        lastC = lastC - 1
      }
      formula = formula.replace('(', '')
      return
    } else if (num == ')') {
      num = "1"
      Nums.push(num)
      if (SquareBrak == false) {
        SqBrakN = Nums.slice(lastS)
        lastS = lastS - 1
      }
      if (CurlyBrak == false) {
        CurlBrakN = Nums.slice(lastC)
        lastC = lastC - 1
      }
      return
    } else if (num == String(num).toUpperCase()) {
      num = '1'
      Nums.push(num)
      if (SquareBrak == false) {
        SqBrakN = Nums.slice(lastS)
        lastS = lastS - 1
      }
      if (CurlyBrak == false) {
        CurlBrakN = Nums.slice(lastC)
        lastC = lastC - 1
      }
      return
    }
  }

  function multiplyA() {

    if (count == 2) {
      atom = Formula.match(/\((\w+)\)+/g)
      atoma = atom[1]
      atom = atoma.replace(/[()]/g, '');
    } else if (count == 3) {
      atom = Formula.match(/\((\w+)\)+/g)
      atoma = atom[2]
      atom = atoma.replace(/[()]/g, '');
    } else {
      atom = Formula.match(/\((\w+)\)+/g)
      atoma = atom[0]
      atom = atoma.replace(/[()]/g, '');
    }
    for (x = 0; x < atom.length; x++) {
      for (i = (Atoms.length - atom.length); i < Atoms.length; i++) {
        if (atom[x] == Atoms[i]) {
          Nums[i] = Nums[i] * Atom
        }

      }
    }
    formula = String(formula).replace(Atom, '');
    multA = true;
    SqBrakN = Nums.slice(lastS + 1)
    return
  }

  function multiplyB() {
    for (x = Nums.length - SqBrakN.length; x < Nums.length; x++) {
      Nums[x] = Nums[x] * Atom
    }
    formula = String(formula).replace(Atom, '');
    multB = true;
    return
  }

  function multiplyC() {
    for (x = Nums.length - CurlBrakN.length; x < Nums.length; x++) {
      Nums[x] = Nums[x] * Atom
    }
    formula = String(formula).replace(Atom, '');
    multC = true;
    return
  }

  function find_duplicates(arr) {
    var len = arr.length,
      out = [],
      counts = {};

    for (var i = 0; i < len; i++) {
      var item = arr[i];
      counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    }

    for (var item in counts) {
      if (counts[item] > 1)
        out.push(item);
    }

    return out;
  }

  for (a = 0; a < Atoms.length; a++) {
    Molucule[Atoms[a]] = Nums[a];
  }

  answer()

  function answer() {

    var same = find_duplicates(Atoms)

    for (x = 0; x < same.length; x++) {

      for (i = 0; i < Atoms.length; i++) {
        if (Atoms[i] == same[x]) {
          Index.push(i)
        }
      }

      for (j = 0; j < Index.length; j++) {
        NumsA = parseInt(NumsA) + parseInt(Nums[Index[j]])
      }

      if (same.length > 0) {
        Molucule[same[x]] = NumsA
        Index = []
        NumsA = 0;
      }

    }
    return (Molucule)
  }
  return (Molucule)
}
