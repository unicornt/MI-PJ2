import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-8674567335450307548', ({}));
function opt(o, proto, value){
codealchemist_log_type_pre('5549022777231887775', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
(o.b) = 1;
codealchemist_log_type_post('5549022777231887775', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-7870448533155737853', ({v1 : ((typeof proto) != ('undefined')) ? (proto) : (undefined)}));
let tmp = ({__proto__ : proto});
codealchemist_log_type_post('-7870448533155737853', ({v1 : ((typeof proto) != ('undefined')) ? (proto) : (undefined), v0 : ((typeof tmp) != ('undefined')) ? (tmp) : (undefined)}));
codealchemist_log_type_pre('6945347191292360805', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(o.a) = value;
codealchemist_log_type_post('6945347191292360805', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-8674567335450307548', ({}));
codealchemist_log_type_pre('1430531262656091302', ({v3 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
function main(){
codealchemist_log_type_pre('-8906149857382382002', ({v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
for(let i = 0;(i) < (2000);i++){
codealchemist_log_type_pre('-4419007857099338286', ({v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-5129548477855347142', ({}));
let o = ({a : 1, b : 2});
codealchemist_log_type_post('-5129548477855347142', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-1008399587261799436', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(o, ({}), ({}));
codealchemist_log_type_post('-1008399587261799436', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_post('-4419007857099338286', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
}
codealchemist_log_type_post('-8906149857382382002', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-5129548477855347142', ({}));
let o = ({a : 1, b : 2});
codealchemist_log_type_post('-5129548477855347142', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-8780016672901332934', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(o, o, 0x1234);
codealchemist_log_type_post('-8780016672901332934', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('3174169879998241362', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
print(o.a);
codealchemist_log_type_post('3174169879998241362', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('1430531262656091302', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
