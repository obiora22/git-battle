var mathHelper = {
  findMaxNumber: function(numberArr) {
  var largest = 0
  for(var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > largest) {
      largest = numberArr[i]
    }
  }
  return largest;
  }
}

export default mathHelper;