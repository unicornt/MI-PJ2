import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-8275302713735130162', ({}));
var vars = new Array(100);
codealchemist_log_type_post('-8275302713735130162', ({v0 : ((typeof vars) != ('undefined')) ? (vars) : (undefined)}));
codealchemist_log_type_pre('3731759029394755555', ({}));
var arr = new Array(1000);
codealchemist_log_type_post('3731759029394755555', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('-1033439075702871628', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
for(var i = 1;(i) < (600);i++){
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(arr[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-1033439075702871628', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('3287081542917718806', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
var o = ({toString : (function (){
codealchemist_log_type_pre('-6641951614998418872', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
for(var i = 600;(i) < (1000);i++){
codealchemist_log_type_pre('-3522344045111255231', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('5475625725534821667', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(arr[i]) = 1337;
codealchemist_log_type_post('5475625725534821667', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-3522344045111255231', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6641951614998418872', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
})});
codealchemist_log_type_post('3287081542917718806', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-3147336531943901370', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v2 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
function go(){
codealchemist_log_type_pre('8454969885383718739', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
(arr[0]) = o;
codealchemist_log_type_post('8454969885383718739', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-1889006239454564489', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
Array.prototype.sort.call(arr);
codealchemist_log_type_post('-1889006239454564489', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('-3147336531943901370', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof go) != ('undefined')) ? (go) : (undefined)}));
go();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof go) != ('undefined')) ? (go) : (undefined)}));
