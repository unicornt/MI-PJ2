import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('569212392801241871', ({}));
var d = new Array(1, 2, 3);
codealchemist_log_type_post('569212392801241871', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class dummy{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
codealchemist_log_type_pre('-3864495528433606271', ({v4 : ((typeof dummy) != ('undefined')) ? (dummy) : (undefined)}));
var handler = ({get : (function (target, name){
codealchemist_log_type_pre('-1281709880758981197', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
if((name) == ("length")){
codealchemist_log_type_pre('-4465160193467719959', ({}));
codealchemist_log_type_pre('8021825045062955493', ({}));
var temp_8021825045062955493 = 0x100;
codealchemist_log_type_post('8021825045062955493', ({}));
return temp_8021825045062955493;
codealchemist_log_type_post('-4465160193467719959', ({}));
}
codealchemist_log_type_post('-1281709880758981197', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
codealchemist_log_type_pre('-3955502855042568595', ({v1 : ((typeof dummy) != ('undefined')) ? (dummy) : (undefined)}));
var temp_3955502855042568595 = ({[Symbol.species] : dummy});
codealchemist_log_type_post('-3955502855042568595', ({v1 : ((typeof dummy) != ('undefined')) ? (dummy) : (undefined)}));
return temp_3955502855042568595;
}), has : (function (target, name){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})});
codealchemist_log_type_post('-3864495528433606271', ({v0 : ((typeof handler) != ('undefined')) ? (handler) : (undefined)}));
codealchemist_log_type_pre('-6080193778140074645', ({v2 : ((typeof handler) != ('undefined')) ? (handler) : (undefined)}));
var p = new Proxy([], handler);
codealchemist_log_type_post('-6080193778140074645', ({v2 : ((typeof handler) != ('undefined')) ? (handler) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('569212392801241871', ({}));
var a = new Array(1, 2, 3);
codealchemist_log_type_post('569212392801241871', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('2579365647921000808', ({}));
function test(){
codealchemist_log_type_pre('-6877531386253921122', ({}));
var temp_6877531386253921122 = 0x777777777777;
codealchemist_log_type_post('-6877531386253921122', ({}));
return temp_6877531386253921122;
}
codealchemist_log_type_post('2579365647921000808', ({}));
codealchemist_log_type_pre('-5889351233921552337', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
var o = a.map.call(p, test);
codealchemist_log_type_post('-5889351233921552337', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
