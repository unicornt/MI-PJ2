import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-5506699996952903641', ({}));
function isConstructor(f){
codealchemist_log_type_pre('-5442576164487598817', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
try{
codealchemist_log_type_pre('-2904178170160228295', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
Reflect.construct((function (){
}), [], f);
codealchemist_log_type_post('-2904178170160228295', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
}
codealchemist_log_type_post('-5442576164487598817', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-5506699996952903641', ({}));
