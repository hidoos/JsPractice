/* 不在原型上拓展函数的方法 */
function SpecialArray() {
  var arr = [];
  arr.push.apply(arr, arguments);

  arr.pipString = function() {
    return this.join("|")
  }

  return arr;
}

var colors = new SpecialArray("red", "green", "blud");
console.log(colors.pipString());
