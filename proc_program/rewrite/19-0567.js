import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-857060939854026304', ({}));
function cons(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
codealchemist_log_type_pre('945501540756634306', ({v3 : ((typeof cons) != ('undefined')) ? (cons) : (undefined)}));
function opt(o, value){
codealchemist_log_type_pre('5549022777231887775', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
(o.b) = 1;
codealchemist_log_type_post('5549022777231887775', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('3844397580131936468', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined)}));
new cons();
codealchemist_log_type_post('3844397580131936468', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined)}));
codealchemist_log_type_pre('6945347191292360805', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(o.a) = value;
codealchemist_log_type_post('6945347191292360805', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('945501540756634306', ({}));
codealchemist_log_type_pre('358080319835828571', ({v2 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v4 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
function main(){
codealchemist_log_type_pre('-5307072100264538479', ({v1 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v3 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
for(let i = 0;(i) < (2000);i++){
codealchemist_log_type_pre('1761037768933763767', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('1129872334683327652', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined)}));
(cons.prototype) = ({});
codealchemist_log_type_post('1129872334683327652', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined)}));
codealchemist_log_type_pre('-5129548477855347142', ({}));
let o = ({a : 1, b : 2});
codealchemist_log_type_post('-5129548477855347142', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('6334671503224209715', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(o, ({}));
codealchemist_log_type_post('6334671503224209715', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_post('1761037768933763767', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
}
codealchemist_log_type_post('-5307072100264538479', ({v1 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof o) != ('undefined')) ? (o) : (undefined), v3 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-5129548477855347142', ({}));
let o = ({a : 1, b : 2});
codealchemist_log_type_post('-5129548477855347142', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-8691775994068509720', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
(cons.prototype) = o;
codealchemist_log_type_post('-8691775994068509720', ({v0 : ((typeof cons) != ('undefined')) ? (cons) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('5592617141788535728', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(o, 0x1234);
codealchemist_log_type_post('5592617141788535728', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('3174169879998241362', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
print(o.a);
codealchemist_log_type_post('3174169879998241362', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('358080319835828571', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
