/**
 * Created by hidoos on 2014/12/8.
 */

/**
 * 判断类型
 */
function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj) === "[Object "+type +"]";
    }
}

var isArray = Array.isArray || isType("Array");
var isFunction = isType("Function");
var isObject = isType("Object");


var Utils = {
    is : function(obj,type){
        return Object.prototype.toString.call(obj).slice(8,-1) === type;
    }
}

