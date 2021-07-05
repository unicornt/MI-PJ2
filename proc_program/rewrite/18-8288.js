import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('8679179860192045103', ({}));
function opt(arr, obj){
codealchemist_log_type_pre('8301450238700238314', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
(arr[0]) = 1.1;
codealchemist_log_type_post('8301450238700238314', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('-4878132439603598120', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
obj.x;
codealchemist_log_type_post('-4878132439603598120', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('3890309019685206386', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
(arr[0]) = 2.3023e-320;
codealchemist_log_type_post('3890309019685206386', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('8679179860192045103', ({}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let arr = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('-6699527558107389195', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
for(let i = 0;(i) < (0x10000);i++){
codealchemist_log_type_pre('-7982835844262617242', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('6334671503224209715', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(arr, ({}));
codealchemist_log_type_post('6334671503224209715', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_post('-7982835844262617242', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
}
codealchemist_log_type_post('-6699527558107389195', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('4034277533537776249', ({}));
let get = Map.prototype.get;
codealchemist_log_type_post('4034277533537776249', ({v0 : ((typeof get) != ('undefined')) ? (get) : (undefined)}));
codealchemist_log_type_pre('-5681052766625862297', ({v3 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v2 : ((typeof get) != ('undefined')) ? (get) : (undefined)}));
(Map.prototype.get) = (function (key){
codealchemist_log_type_pre('-7435911647474905880', ({v1 : ((typeof get) != ('undefined')) ? (get) : (undefined)}));
(Map.prototype.get) = get;
codealchemist_log_type_post('-7435911647474905880', ({v1 : ((typeof get) != ('undefined')) ? (get) : (undefined)}));
codealchemist_log_type_pre('3173500623868223865', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
(arr[0]) = ({});
codealchemist_log_type_post('3173500623868223865', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('3516928469758486363', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var temp_3516928469758486363 = this.get(key);
codealchemist_log_type_post('3516928469758486363', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
return temp_3516928469758486363;
});
codealchemist_log_type_post('-5681052766625862297', ({}));
codealchemist_log_type_pre('2456945352105600493', ({v2 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt(arr, Intl);
codealchemist_log_type_post('2456945352105600493', ({v2 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('8134944168993442721', ({v0 : ((typeof alert) != ('undefined')) ? (alert) : (undefined), v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
alert(arr[0]);
codealchemist_log_type_post('8134944168993442721', ({v0 : ((typeof alert) != ('undefined')) ? (alert) : (undefined), v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
