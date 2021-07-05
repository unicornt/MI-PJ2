function callback() {
    console.log('callback');
}
function callee(msg, callback) {
    console.log(msg);
    callback();
}
callee('callee', function () {
    console.log('before function call');
    console.log('callback2');
});
callee('callee', __ast__callback__ast__);
function __ast__callback__ast__() {
    console.log('before function call');
    callback();
}