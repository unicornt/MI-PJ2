let v0 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
let v1 = '[^"\'\\\\/]|/(?![/*])';
function v2(){
let v1 = new RegExp(v3, 'g');
let v4;
while(((v4) = v1.exec(v0)) !== (null)){
(v6) = v4[0];
}
}
function v3(v1){
return v1.startsWith(v1);
}
let v4 = (((("(?:[a-zA-Z0-9_-]|") + (v0)) + ("|")) + (v1)) + (")");
var v5 = ((('Create proto:') + (v4)) + (" properties:")) + (v0);
function v6(v1){
return (v1[0]) === (v4);
}
const v7 = v6('a'.repeat(100));
