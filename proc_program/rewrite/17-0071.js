import * as std from 'std';
std.loadScript('/mnt/c/Users/unicornt/Desktop/0/MI-PJ2/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('8342808253131617512', ({}));
function func(a, b, c){
codealchemist_log_type_pre('1125471148517618624', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
(a[0]) = 1.2;
codealchemist_log_type_post('1125471148517618624', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('8454969885383718739', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined), v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
(b[0]) = c;
codealchemist_log_type_post('8454969885383718739', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined), v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
codealchemist_log_type_pre('-3419829990482122376', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
(a[1]) = 2.2;
codealchemist_log_type_post('-3419829990482122376', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('3890309019685206386', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
(a[0]) = 2.3023e-320;
codealchemist_log_type_post('3890309019685206386', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
}
codealchemist_log_type_post('8342808253131617512', ({}));
codealchemist_log_type_pre('-2961141536144745483', ({v5 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
function main(){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var a = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('982416367036621825', ({}));
var b = new Uint32Array(100);
codealchemist_log_type_post('982416367036621825', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-2520935249977744324', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined), v1 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
for(var i = 0;(i) < (0x10000);i++){
codealchemist_log_type_pre('7400639375448880496', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
func(a, b, i);
codealchemist_log_type_post('7400639375448880496', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-2520935249977744324', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined), v1 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('1964171730980359328', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
func(a, b, ({valueOf : (()=>{
codealchemist_log_type_pre('3173500623868223865', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
(a[0]) = ({});
codealchemist_log_type_post('3173500623868223865', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-3155887822080160438', ({}));
var temp_3155887822080160438 = 0;
codealchemist_log_type_post('-3155887822080160438', ({}));
return temp_3155887822080160438;
})}));
codealchemist_log_type_post('1964171730980359328', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
codealchemist_log_type_pre('603500829927542261', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
a[0].toString();
codealchemist_log_type_post('603500829927542261', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
}
codealchemist_log_type_post('-2961141536144745483', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
