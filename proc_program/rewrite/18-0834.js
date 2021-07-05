import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-9191284813714852739', ({}));
function opt(arr, proto){
codealchemist_log_type_pre('8301450238700238314', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
(arr[0]) = 1.1;
codealchemist_log_type_post('8301450238700238314', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('-7870448533155737853', ({v1 : ((typeof proto) != ('undefined')) ? (proto) : (undefined)}));
let tmp = ({__proto__ : proto});
codealchemist_log_type_post('-7870448533155737853', ({v1 : ((typeof proto) != ('undefined')) ? (proto) : (undefined), v0 : ((typeof tmp) != ('undefined')) ? (tmp) : (undefined)}));
codealchemist_log_type_pre('3890309019685206386', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
(arr[0]) = 2.3023e-320;
codealchemist_log_type_post('3890309019685206386', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('-9191284813714852739', ({}));
codealchemist_log_type_pre('6495099061423990913', ({v3 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
function main(){
codealchemist_log_type_pre('-7619666865260496585', ({}));
let arr = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('-5533138117717690281', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
for(let i = 0;(i) < (10000);i++){
codealchemist_log_type_pre('-7982835844262617242', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('6334671503224209715', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(arr, ({}));
codealchemist_log_type_post('6334671503224209715', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_post('-7982835844262617242', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
}
codealchemist_log_type_post('-5533138117717690281', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-3807175366037543742', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(arr, arr);
codealchemist_log_type_post('-3807175366037543742', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-2926055102621158799', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
print(arr);
codealchemist_log_type_post('-2926055102621158799', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('6495099061423990913', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
