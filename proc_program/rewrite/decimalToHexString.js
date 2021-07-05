import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-7367797117109097719', ({}));
function decimalToHexString(n){
codealchemist_log_type_pre('4284111674174618782', ({}));
var hex = "0123456789ABCDEF";
codealchemist_log_type_post('4284111674174618782', ({v0 : ((typeof hex) != ('undefined')) ? (hex) : (undefined)}));
codealchemist_log_type_pre('6649045789974643372', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
(n) >>>= 0;
codealchemist_log_type_post('6649045789974643372', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_pre('-6806727766934437804', ({}));
var s = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
codealchemist_log_type_pre('-5449757549013341126', ({v2 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v0 : ((typeof n) != ('undefined')) ? (n) : (undefined), v1 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
while(n){
codealchemist_log_type_pre('-7373514701764668573', ({v1 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
codealchemist_log_type_pre('-6355529959007525166', ({v1 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
(s) = (hex[(n) & (0xf)]) + (s);
codealchemist_log_type_post('-6355529959007525166', ({v1 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
codealchemist_log_type_pre('-5600080747553187614', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
(n) >>>= 4;
codealchemist_log_type_post('-5600080747553187614', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_post('-7373514701764668573', ({v1 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
}
codealchemist_log_type_post('-5449757549013341126', ({v2 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v0 : ((typeof n) != ('undefined')) ? (n) : (undefined), v1 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
codealchemist_log_type_pre('-1967130599254336657', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
while((s.length) < (4)){
codealchemist_log_type_pre('-5769970550364548093', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
codealchemist_log_type_pre('6485391538888956166', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
(s) = ("0") + (s);
codealchemist_log_type_post('6485391538888956166', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
codealchemist_log_type_post('-5769970550364548093', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
}
codealchemist_log_type_post('-1967130599254336657', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
var temp_3444589576563574513 = s;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-7367797117109097719', ({}));
codealchemist_log_type_pre('-6346619564562868728', ({}));
function decimalToPercentHexString(n){
codealchemist_log_type_pre('4284111674174618782', ({}));
var hex = "0123456789ABCDEF";
codealchemist_log_type_post('4284111674174618782', ({v0 : ((typeof hex) != ('undefined')) ? (hex) : (undefined)}));
codealchemist_log_type_pre('-7608414983529191033', ({v0 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
var temp_7608414983529191033 = (("%") + (hex[((n) >> (4)) & (0xf)])) + (hex[(n) & (0xf)]);
codealchemist_log_type_post('-7608414983529191033', ({v0 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
return temp_7608414983529191033;
}
codealchemist_log_type_post('-6346619564562868728', ({}));
