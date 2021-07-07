function func(a, b, c){
(a[0]) = 1.2;
(b[0]) = c;
}
function main(){
var a = [];
var b = new Uint32Array(100);
for(var i = 0;(i) < (0x10000);i++){
func(a, b, i);
}
func(a, b, ({valueOf : (()=>{
(a[0]) = ({});
var temp_3155887822080160438 = 0;
return temp_3155887822080160438;
})}));
}
main();
