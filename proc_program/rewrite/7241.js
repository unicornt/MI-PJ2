import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('1685436347889488454', ({}));
var once = false;
codealchemist_log_type_post('1685436347889488454', ({v0 : ((typeof once) != ('undefined')) ? (once) : (undefined)}));
codealchemist_log_type_pre('-2157934906564275010', ({}));
var a = 1;
codealchemist_log_type_post('-2157934906564275010', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-4509964657358913687', ({v1 : ((typeof once) != ('undefined')) ? (once) : (undefined)}));
function f(){
codealchemist_log_type_pre('7027030206589213663', ({v0 : ((typeof once) != ('undefined')) ? (once) : (undefined)}));
if(! once){
codealchemist_log_type_pre('-2299864500825508824', ({}));
codealchemist_log_type_pre('5290259082363066686', ({}));
(a) = new Array(1, 2, 3);
codealchemist_log_type_post('5290259082363066686', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-1952674944953060674', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
(this[2]) = a;
codealchemist_log_type_post('-1952674944953060674', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_post('-2299864500825508824', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
}
codealchemist_log_type_post('7027030206589213663', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof once) != ('undefined')) ? (once) : (undefined)}));
codealchemist_log_type_pre('-7643690174167014527', ({}));
(once) = true;
codealchemist_log_type_post('-7643690174167014527', ({v0 : ((typeof once) != ('undefined')) ? (once) : (undefined)}));
codealchemist_log_type_pre('-3142039250771054111', ({}));
var temp_3142039250771054111 = ({});
codealchemist_log_type_post('-3142039250771054111', ({}));
return temp_3142039250771054111;
}
codealchemist_log_type_post('-4509964657358913687', ({}));
codealchemist_log_type_pre('6029019237551188817', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
JSON.parse("[1, 2, [4, 5]]", f);
codealchemist_log_type_post('6029019237551188817', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
