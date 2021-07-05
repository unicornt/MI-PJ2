function callback(a, b){
    console.log("callback", a, b);
}

function callee(msg, callback){
    console.log(msg);
    callback(1, 2);
}

callee("callee", function(){
	console.log("callback2");
});

callee("callee", callback);