function v0(){
new RegExp(/[Cz]/, "guiym");
}
const v1 = "NE-el";
const v2 = /[a-t]/i;
function v3(){
v2.test("abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz");
}
function v4(){
/[Cz]/.test("abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz");
}
var v5 = ({"Object.keys()" : v0((()=>{
return Object.keys(v3);
})), "for-in" : v0((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for-in hasOwnProperty()" : v0((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
if(! v3.hasOwnProperty(v6)){
continue ;
}
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for (i < Object.keys().length)" : v0((()=>{
var v4 = 0;
var v5;
var v7 = Object.keys(v3);
for(var v8 = 0;(v8) < (v7.length);v8++){
v4++;
(v5) = v3[v7[v8]];
}
;
return [];
})), "Object.keys().forEach()" : v0((()=>{
var v4 = 0;
var v5;
Object.keys(v3).forEach(((v9, v10, v11)=>{
v4++;
(v5) = v9;
}));
return [];
}))});
// GenBlkBrick
for(var v6 = 0;(v6) < (5);v6++){
function v7(){
v0(1e1);
v0(1e2);
}
}
const v8 = (v6) / (4);
