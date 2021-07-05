import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('569212392801241871', ({}));
var b = new Array(1, 2, 3);
codealchemist_log_type_post('569212392801241871', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('569212392801241871', ({}));
var d = new Array(1, 2, 3);
codealchemist_log_type_post('569212392801241871', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
codealchemist_log_type_pre('-1931772591917265381', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
(d.length) = 0x200000;
codealchemist_log_type_post('-1931772591917265381', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
codealchemist_log_type_pre('-2962751463691059903', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
d.fill(7);
codealchemist_log_type_post('-2962751463691059903', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class dummy{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
codealchemist_log_type_pre('8084300012445393839', ({}));
class MyArray extends Array{
}
codealchemist_log_type_post('8084300012445393839', ({}));
codealchemist_log_type_pre('4768133559810235236', ({}));
var a = new Array(({}), [], "natalie", 7, 7, 7, 7, 7);
codealchemist_log_type_post('4768133559810235236', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-262718067670653614', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
for(var i = 0;(i) < (0x200000);i++){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(a[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-262718067670653614', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-4936519223853071164', ({}));
function test(i){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-4936519223853071164', ({}));
codealchemist_log_type_pre('-1660806250095765983', ({v1 : ((typeof MyArray) != ('undefined')) ? (MyArray) : (undefined), v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
(a.__proto__) = MyArray.prototype;
codealchemist_log_type_post('-1660806250095765983', ({v1 : ((typeof MyArray) != ('undefined')) ? (MyArray) : (undefined), v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-8094361685785823939', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
var o = a.filter(test);
codealchemist_log_type_post('-8094361685785823939', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var h = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
codealchemist_log_type_pre('-7478569173498550230', ({v4 : ((typeof h) != ('undefined')) ? (h) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
for(item in o){
codealchemist_log_type_pre('-6601078396859318724', ({v4 : ((typeof h) != ('undefined')) ? (h) : (undefined), v3 : ((typeof item) != ('undefined')) ? (item) : (undefined), v2 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('3083281530864228821', ({v3 : ((typeof item) != ('undefined')) ? (item) : (undefined), v2 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
var n = new Number(o[item]);
codealchemist_log_type_post('3083281530864228821', ({v3 : ((typeof item) != ('undefined')) ? (item) : (undefined), v0 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-4991167187960935524', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
if((n) < (0)){
codealchemist_log_type_pre('2025866934498430609', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_pre('-8061619117058082103', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
(n) = (n) + (0x100000000);
codealchemist_log_type_post('-8061619117058082103', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_post('2025866934498430609', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
}
codealchemist_log_type_post('-4991167187960935524', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_pre('-135288223156237591', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
h.push(n.toString(16));
codealchemist_log_type_post('-135288223156237591', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_post('-6601078396859318724', ({v4 : ((typeof h) != ('undefined')) ? (h) : (undefined), v3 : ((typeof item) != ('undefined')) ? (item) : (undefined), v0 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('-7478569173498550230', ({v4 : ((typeof h) != ('undefined')) ? (h) : (undefined), v0 : ((typeof item) != ('undefined')) ? (item) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
