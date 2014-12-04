/**
 * lanhong 20:49:32
 */
var add = function(a,b) {
    return a + b;
};

String.method("getName",function(){
    return this.toUpperCase() + "hello";
});

var demoString = "hidoos";
var demo = demoString.getName();


/*
console.log(demo);
*/

Function.method('curry',function(){
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;

    return function(){
        return that.apply(null,args.concat(slice.apply(arguments))); // arguments 代表当前函数的参数 argus 代表闭包中的参数
    }
});

// num 变成一个函数值
var num = add.curry(3);
console.log(num);
console.log(num(5));