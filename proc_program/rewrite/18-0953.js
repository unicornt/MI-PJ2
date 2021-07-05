import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-6996328803027775477', ({}));
function opt(arr, value){
codealchemist_log_type_pre('-3159303352328361354', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(arr[1]) = value;
codealchemist_log_type_post('-3159303352328361354', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('3890309019685206386', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
(arr[0]) = 2.3023e-320;
codealchemist_log_type_post('3890309019685206386', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('-6996328803027775477', ({}));
codealchemist_log_type_pre('8961426052967696106', ({v2 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
function main(){
codealchemist_log_type_pre('-2915624917434576398', ({v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
for(let i = 0;(i) < (0x10000);i++){
codealchemist_log_type_pre('7265125788394370771', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt([], 2.2);
codealchemist_log_type_post('7265125788394370771', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
}
codealchemist_log_type_post('-2915624917434576398', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let arr = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('-9098943725477132836', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(arr, - 5.3049894784e-314);
codealchemist_log_type_post('-9098943725477132836', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-2926055102621158799', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
print(arr);
codealchemist_log_type_post('-2926055102621158799', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('8961426052967696106', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
