import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-5498506946518863713', ({}));
function f(o){
codealchemist_log_type_pre('-4878132439603598120', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
o.x;
codealchemist_log_type_post('-4878132439603598120', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('706205180788934094', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
Object.create(o);
codealchemist_log_type_post('706205180788934094', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-3718637629313026035', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
var temp_3718637629313026035 = o.y.a;
codealchemist_log_type_post('-3718637629313026035', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
return temp_3718637629313026035;
}
codealchemist_log_type_post('-5498506946518863713', ({}));
codealchemist_log_type_pre('8062577091071023038', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(({x : 0, y : ({a : 1})}));
codealchemist_log_type_post('8062577091071023038', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('-1938831755492224159', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(({x : 0, y : ({a : 2})}));
codealchemist_log_type_post('-1938831755492224159', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('1752321621718271669', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
for(let i = 0;(i) < (100000);i++){
codealchemist_log_type_pre('4611060009720669147', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(({x : 0, y : ({a : 3})}));
codealchemist_log_type_post('4611060009720669147', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}
codealchemist_log_type_post('1752321621718271669', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
console.log(f(({x : 0, y : ({a : 3})})));
