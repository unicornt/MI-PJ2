const v0 = "NE-el";
let v1 = (("[0-9a-fA-F]{1,6}") + (v0)) + ("?");
var v2 = (("\n// random comment") + (Math.random())) + ("\n");
let v3 = (("[0-9a-fA-F]{1,6}") + (v1)) + ("?");
var v4 = ((v3) + (" ")) + (v2);
let v5 = (((((((("url[(]") + (v0)) + ("(?:")) + (v1)) + ("|")) + (v4)) + ("*)")) + (v0)) + ("[)]");
let v6 = (((("(?:") + (v5)) + ("|[\\u0020-\\u007e\\u0080-\\ud7ff\\ue000\\ufffd]|")) + (v2)) + (")");
function v7(v1){
var v2 = 0;
for(var v3 = 0;(v3) < (v5.length);v3++){
(v2) += v1(v5, v3, v3);
}
return v2;
}
