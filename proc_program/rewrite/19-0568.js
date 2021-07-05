import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-3792319339445766245', ({}));
function opt(){
codealchemist_log_type_pre('138859219684313502', ({}));
let o = ({});
codealchemist_log_type_post('138859219684313502', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-4878132439603598120', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
o.x;
codealchemist_log_type_post('-4878132439603598120', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('-3792319339445766245', ({}));
codealchemist_log_type_pre('2526906647029704788', ({v7 : ((typeof alert) != ('undefined')) ? (alert) : (undefined), v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
function main(){
codealchemist_log_type_pre('522387314629665621', ({v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
for(let i = 0;(i) < (10000);i++){
codealchemist_log_type_pre('3700030236811867080', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_post('3700030236811867080', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
}
codealchemist_log_type_post('522387314629665621', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('1564558217053050846', ({}));
let leaked_stack_object = null;
codealchemist_log_type_post('1564558217053050846', ({v0 : ((typeof leaked_stack_object) != ('undefined')) ? (leaked_stack_object) : (undefined)}));
codealchemist_log_type_pre('6297129862004873966', ({}));
let object_prototype = ({}).__proto__;
codealchemist_log_type_post('6297129862004873966', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
codealchemist_log_type_pre('618657734611025921', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
object_prototype.__defineGetter__('x', Error.prototype.toString);
codealchemist_log_type_post('618657734611025921', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
codealchemist_log_type_pre('-4130028217148927738', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
object_prototype.__defineGetter__('message', (function (){
codealchemist_log_type_pre('4006775201860280823', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
delete object_prototype.message;
codealchemist_log_type_post('4006775201860280823', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
codealchemist_log_type_pre('3897862256990728909', ({}));
(leaked_stack_object) = this;
codealchemist_log_type_post('3897862256990728909', ({v0 : ((typeof leaked_stack_object) != ('undefined')) ? (leaked_stack_object) : (undefined)}));
}));
codealchemist_log_type_post('-4130028217148927738', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
codealchemist_log_type_pre('-8939965960530510504', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
(object_prototype.name) = Array.prototype;
codealchemist_log_type_post('-8939965960530510504', ({v0 : ((typeof object_prototype) != ('undefined')) ? (object_prototype) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof alert) != ('undefined')) ? (alert) : (undefined), v1 : ((typeof leaked_stack_object) != ('undefined')) ? (leaked_stack_object) : (undefined)}));
alert(leaked_stack_object);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof alert) != ('undefined')) ? (alert) : (undefined), v1 : ((typeof leaked_stack_object) != ('undefined')) ? (leaked_stack_object) : (undefined)}));
}
codealchemist_log_type_post('2526906647029704788', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
