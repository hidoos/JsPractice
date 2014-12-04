/**   
 * Events
 */
var Events = function(){
	this._listens = {}
}

Events.prototype.on = function(type,fn){
	this._listens[type] = this._listens[type] || []
	if(typeof fn == "function") this._listens[type].push(fn)
	return this
}

Events.prototype.trigger = function(type){
	var fnList = this._listens[type];
	if(fnList instanceof Array){
		for(var i = 0,length = fnList.length;i<length;i++){
			fnList[i]();
		}
	}
	return this;
}

Events.prototype.removeEvent = function(type,fn){
	var fnList = this._listens[type];
	if(typeof type == "string" && fnList instanceof Array){
		for(var i = 0,length = fnList.length;i<length;i++){
			if(fnList[i] == fn){
				this._listens[type].splice(i,1);
				break;
			}else{
				delete this._listens[type];
			}
		}	
	}
	return this;
}