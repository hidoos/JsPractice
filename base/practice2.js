/**
 * Created by gzxs on 2014/11/30.
 */

var liElements = document.querySelectorAll("ul>li");


/**
 *  Closure demo
 * @param nodes {Array}
 */
var add_the_handlers = function(nodes){
    var i;
    var helpers = function(i){
        return function() {
            console.log(i);
        };
    };
    for(i = 0;i<nodes.length;i++){
        nodes[i].onclick = helpers(i);
    }
};

add_the_handlers(liElements);