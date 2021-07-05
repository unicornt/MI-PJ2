function callback(){
    console.log("callback");
}

function callee(msg, callback){
    console.log(msg);
    callback();
}

callee("callee", function(){
	console.log("callback2");
});

callee("callee", callback);