function createPhoneNumber(numbers) {

  var areaCode = [];
  var localCode = [];
  var diallingCode = [];

  for (i = 0; i < 3; i++) {
    areaCode.push(numbers[i])
  }

  for (i = 3; i < 6; i++) {
    localCode.push(numbers[i])
  }

  for (i = 6; i < 10; i++) {
    diallingCode.push(numbers[i])
  }

  areaCode = parseInt(areaCode.toString().replace(/,/g, ''))

  localCode = parseInt(localCode.toString().replace(/,/g, ''))

  diallingCode = parseInt(diallingCode.toString().replace(/,/g, ''))

  var phonenumber = "(" + areaCode + ")" + " " + localCode + "-" + diallingCode

  return phonenumber
}
createPhoneNumber([1,2,3,4,5,6,7,8,9,0])