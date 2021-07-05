var v0 = ({});
function v1(v1){
var v2 = "(?:[A-Za-z_]|\\.(?!\\.?(?:/|$)))[A-Za-z.\\-_]{0,13}";
var v3 = (((v2) + ("(?:/")) + (v2)) + (")*");
var v4 = "(?:Etc/)?GMT[+-]\\d{1,2}";
var v5 = "SystemV/[A-Z]{3}\\d{1,2}(?:[A-Z]{3})?";
var v6 = (((v4) + ("|")) + (v5)) + ("|CST6CDT|EST5EDT|MST7MDT|PST8PDT|NZ");
var v7 = new RegExp((((("^(?:") + (v3)) + ("|")) + (v6)) + (")$"));
if((typeof v1) !== ("string")){
return false;
}
if((v1) === ("UTC")){
return true;
}
if(((v1) === ("Etc/UTC")) || ((v1) === ("Etc/GMT"))){
return false;
}
return v7.test(v1);
}
// GenBlkBrick
for(let v0 = 0;(v0) < (100);v0++){
// GenBlkBrick
for(let v0 = 0;(v0) < (100);v0++){
(v2) = new Array(2);
for(var v3 = 0;(v3) < (16);v3++){
(v2[v3]) = new Array();
}
}
for(let v0 in v3){
(v3.a) = 42;
const v2 = v3[- 698666199];
}
}
v1(v2, v0);
v1(v0, ({}));
v2.forEach((function (v1){
(v0[v1]) = RegExp[v1];
}));
v1(v2, v0);
function v4(v1){
if(v1){
if((((typeof v1) === ('object')) && ((v1) !== (null))) && (('name') in (v1))){
v1(((('Test262:AsyncTestFailure:') + (v1.name)) + (': ')) + (v1.message));
}else {
v1(('Test262:AsyncTestFailure:Test262Error: ') + (v1));
}
}else {
v1('Test262:AsyncTestComplete');
}
}
