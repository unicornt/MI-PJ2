import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-3647279336048523059', ({}));
function opt(o, c, value){
codealchemist_log_type_pre('5549022777231887775', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
(o.b) = 1;
codealchemist_log_type_post('5549022777231887775', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
class A extends c{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
codealchemist_log_type_pre('6945347191292360805', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(o.a) = value;
codealchemist_log_type_post('6945347191292360805', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-3647279336048523059', ({}));
codealchemist_log_type_pre('2586292139643913838', ({v3 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
function main(){
codealchemist_log_type_pre('-5473077917348939078', ({v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
for(let i = 0;(i) < (2000);i++){
codealchemist_log_type_pre('8673884421415832339', ({v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-5129548477855347142', ({}));
let o = ({a : 1, b : 2});
codealchemist_log_type_post('-5129548477855347142', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('9202924513186087817', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(o, (function (){
}), ({}));
codealchemist_log_type_post('9202924513186087817', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_post('8673884421415832339', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
}
codealchemist_log_type_post('-5473077917348939078', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-5129548477855347142', ({}));
let o = ({a : 1, b : 2});
codealchemist_log_type_post('-5129548477855347142', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-2547207959469411610', ({}));
let cons = (function (){
});
codealchemist_log_type_post('-2547207959469411610', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined)}));
codealchemist_log_type_pre('-8691775994068509720', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
(cons.prototype) = o;
codealchemist_log_type_post('-8691775994068509720', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-3374610614607585945', ({v2 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(o, cons, 0x1234);
codealchemist_log_type_post('-3374610614607585945', ({v2 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('3174169879998241362', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
print(o.a);
codealchemist_log_type_post('3174169879998241362', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('2586292139643913838', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
