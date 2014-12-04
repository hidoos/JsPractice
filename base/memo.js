/**
 * Created by hidoos on 2014/11/30.
 */

var j = 0;

var fibonacci = function (n) {
    console.log(++j);
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

/*
for(var i = 0;i <= 10;i+=1){
    console.log("//" + i + ":",fibonacci(i));
}
*/

var fibonacciMemo = function(){
    console.log(++j);
    var memo = [0,1];
    var fib = function(n){
        var result = memo[n];
        if(typeof result!= "number"){
            result = fib(n-1) + fib(n-2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();

for(var i = 0;i <= 10;i+=1){
    console.log("//" + i + ":",fibonacciMemo(i));
}