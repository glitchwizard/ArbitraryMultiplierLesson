$(document).ready(function () {
  var numberOfNumbers = parseInt(prompt("How many numbers would you like to multiply?"));
  var numberArray = Array.apply(null, Array(numberOfNumbers)).map(function(x, i) {return i; });
  var total = 1;

  numberArray.forEach(function(x) {
    var x = 0;
    var arrayInput = parseInt(prompt("Add a number to the array:"));
    numberArray[x] = arrayInput;
    x += 1;
    total *= arrayInput;
  });
  alert ("This is the total: " + total)
});
