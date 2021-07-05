function v0(v1, v2){
var v3 = false;
if((typeof v2) === ("string")){
for(var v4 in v1){
if((v4) === (v2)){
(v3) = true;
break ;
}
}
}else {
(v3) = true;
}
return ((v3) && (Object.prototype.hasOwnProperty.call(v1, v2))) && (Object.prototype.propertyIsEnumerable.call(v1, v2));
}
function v1(v1, v2, v3){
(v1.b) = 1;
class v4 extends v2{
}
(v1.a) = v3;
}
var v2 = v1;
function v3(v1){
v2(v1);
v1(0, v1);
v0(v1);
v1(({}));
v1([]);
}
function v4(){
for(let v1 = 0;(v1) < (2000);v1++){
(v3.prototype) = ({});
let v3 = ({a : 1, b : 2});
v1(v3, ({}));
}
let v3 = ({a : 1, b : 2});
(v3.prototype) = v3;
v1(v3, 0x1234);
print(v3.a);
}
const v0 = v3(1337);
function v5(v1, v2){
function v3(v4){
v2(v4);
v2(v4, "number", v2);
}
v3(v1);
v3(v1.toString());
v3(("0b") + (v1.toString(2)));
v3(("0o") + (v1.toString(8)));
v3(("0x") + (v1.toString(16)));
v3((("   ") + (v1.toString())) + ("   "));
v2([]);
v2([]);
}
v2();
