/**
 * Created by hidoos on 2014/11/29.
 */

var myObject = {value : 2};
console.log(myObject.value);
function add(num1,num2){
    return num1 + num2;
}
myObject.double = function () {
    var helper;
    helper = (function () {
        var result = add(this.value, this.value);
        console.log("result",result);
        this.value = result;
        console.log(this);
    });
    helper();
};

myObject.double();
console.log(myObject.value);
console.log(this.value);