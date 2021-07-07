function func(a, b, c){
(a[0]) = 1.2;
(b[0]) = c;
(a[1]) = 2.2;
}
function main(){
var a = [];
var b = new Uint32Array(100);
for(var i = 0;(i) < (0x10000);i++){
func(a, b, i);
}
a[0].toString();
}
main();
