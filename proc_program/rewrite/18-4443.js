import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('3261377605820010635', ({}));
function set(arr, value){
codealchemist_log_type_pre('8454969885383718739', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(arr[0]) = value;
codealchemist_log_type_post('8454969885383718739', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('3261377605820010635', ({}));
codealchemist_log_type_pre('168018658321470698', ({v4 : ((typeof set) != ('undefined')) ? (set) : (undefined)}));
function getImmutableArrayOrSet(get, value){
codealchemist_log_type_pre('-7619666865260496585', ({}));
let arr = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('341643389997881756', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof get) != ('undefined')) ? (get) : (undefined)}));
if(get){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
var temp_3444589576563574513 = arr;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('341643389997881756', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof get) != ('undefined')) ? (get) : (undefined)}));
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof set) != ('undefined')) ? (set) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
set(arr, value);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof set) != ('undefined')) ? (set) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('3991223485229644740', ({v0 : ((typeof set) != ('undefined')) ? (set) : (undefined)}));
set(({}), 1);
codealchemist_log_type_post('3991223485229644740', ({v0 : ((typeof set) != ('undefined')) ? (set) : (undefined)}));
}
codealchemist_log_type_post('168018658321470698', ({}));
codealchemist_log_type_pre('-3045939294802613210', ({v1 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
function main(){
codealchemist_log_type_pre('2427030279561269048', ({v0 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
getImmutableArrayOrSet(true);
codealchemist_log_type_post('2427030279561269048', ({v0 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
codealchemist_log_type_pre('5161120430879141300', ({v1 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
for(let i = 0;(i) < (100);i++){
codealchemist_log_type_pre('3251550881628142670', ({v0 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
codealchemist_log_type_pre('5066441286016892492', ({v0 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
getImmutableArrayOrSet(false, ({}));
codealchemist_log_type_post('5066441286016892492', ({v0 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
codealchemist_log_type_post('3251550881628142670', ({v0 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
}
codealchemist_log_type_post('5161120430879141300', ({v1 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-1669674662263783817', ({v1 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
let arr = getImmutableArrayOrSet(true);
codealchemist_log_type_post('-1669674662263783817', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof getImmutableArrayOrSet) != ('undefined')) ? (getImmutableArrayOrSet) : (undefined)}));
codealchemist_log_type_pre('-2861430293276135873', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
print((arr[0]) === (1));
codealchemist_log_type_post('-2861430293276135873', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('-3045939294802613210', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
