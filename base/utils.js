/**
 * Created by gzxs on 2014/11/30.
 */

/**
 * @param name {String}
 * @param func {function}
 */
Function.prototype.method = function (name, func) {
    "use strict";
    
    this.prototype[name] = func;
    return this;
};