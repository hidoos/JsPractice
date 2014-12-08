/**
 * Created by hidoos on 2014/12/8.
 */
(function(global){
    var container,status;

    var utils = {
        isType:function(obj,type) {
            return Object.prototype.toString.call(obj).slice(8, -1) === "[Object " + type + "]"
        },
        extend : function(){

        }
    }



    var Message = function(){
        this.container = document.createElement("div")
        this.container.className = "message"

        this.defaults = {
            status : "normal",
            placement : "top"
        }
        this.closeEl = "<span class='close'>&times;</span>";

        return this;
    }

    Message.prototype.init = function(){
        this.container.appendChild(this.closeEl)
    }

    Message.prototype.hide = function(){

    }

    Message.prototype.show = function(){
        this.init();
        container.innerHTML = "测试一下内容"
        var body = document.body;
        body.appendChild(container);
    }

    // export window
    global.message = new Message();

})(this);

