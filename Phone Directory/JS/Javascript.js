function phone(strng, num) {
 
  let Check = 0
  var String = strng
  let count = 0
  var string1;
  let answer = ''

  function checkIt(strng, num, check) {

    let phne = strng.match(/[+|\d]([0-9]+-[0-9]+-[0-9]+-[0-9]+)/);
    let phone = phne[1];

    let nme = strng.match(/\<(.*?)\>/);
    let name = nme[1];

    let Phone = strng.match(/[\S]+[0-9]+-[0-9]+-[0-9]+-[0-9]+[\s|\W]/)
    if (Phone == null) {
      Phone = strng.match(/[\S|+]+[0-9]+-[0-9]+-[0-9]+-[0-9]+[^]+/)
    }
    let Nme = strng.match(/<([^;]*)>/)
    let Name = Nme[0]
    let Str = strng.replace(Phone, '')
    let Add = Str.replace(Name, '')

    let Address1 = Add.replace(/_/i, ' ');
    let Address2 = Address1.replace(/,/g, ' ');
    let Address3 = Address2.replace(/;/i, ' ');
    let Address4 = Address3.replace(/\//i, ' ');
    let Address5 = Address4.replace(/\s\s+/g, ' ');
    let Address = Address5.trim();

    if (phone === num) {
      
        answer = ('Phone => ' + phone + ', ' + 'Name => ' + name + ', ' + 'Address => ' +         Address);
      
      count = count + 1
      return

    } else if (phone != num && check == 0) {
      checkIt(string1, num, 1);

    } else {
      return
    }
  }

  function split(Str) {
    var num1 = Str.match(/\n(.*?)\n/)

    let num2 = Str.match(/(.*?)\n/)
    
    if (num1 == null && num2 == null) {
      Check = 1
    } else if (num1 == null) {
      m = 0
      Check = 1
      checkIt(String, num, 1)
      return
    } else {
      m = num1[1].length
    }

    let q = num2[1].length
    let p = m + q + 2
    String1 = String.slice(p)

    return String1

  }
  
  for(x=0;x<21;x++){
  

    split(String)
    if(Check == 1){
        var ans = Answer()
        return ans
    }
    let strng1 = String.match(/\n(.*?)\n/)
    var string1 = strng1[1]

    let strings = String.replace(String1, '')
    var Strings = strings.replace(string1, '')

    checkIt(Strings, num, 0)
    
    var String = String1
    
  }
function Answer(){
  var Answer = answer.trim()

  if (count == 0) {
    alert("Error => Not found: " + num)

  } else if (count == 1) {
    alert(Answer)

  } else {
    alert("Error => Too many people: " + num)

  }
 }
    var Answer = answer.trim()

  if (count == 0) {
    alert("Error => Not found: " + num)

  } else if (count == 1) {
    alert(Answer)

  } else {
    alert("Error => Too many people: " + num)

}
}
s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-098-512-2222\n"
+ "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
+ "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
+ "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
+ "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
+ "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
+ "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
+ "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
+ "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
+ "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
+ "<P Salinge> Main Street, +1-541-914-3010, Denve\n"




phone(s,"1-541-914-3010")
phone(s,"1-321-512-2222")
phone(s, "48-421-674-8974")
phone(s, "1-908-512-2222")
phone(s, "1-541-754-3010")
phone(s, "1-121-504-8974")
phone(s, "1-498-512-2222")
phone(s, "1-098-512-2222")
phone(s, "5-555-555-5555")


