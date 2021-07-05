import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-286278065982494740', ({}));
function arrayContains(array, subArray){
codealchemist_log_type_pre('-7265530382583183660', ({}));
var found;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof found) != ('undefined')) ? (found) : (undefined)}));
codealchemist_log_type_pre('-7598552702298508731', ({v4 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
for(var i = 0;(i) < (subArray.length);i++){
codealchemist_log_type_pre('-6149558537312725916', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(found) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof found) != ('undefined')) ? (found) : (undefined)}));
codealchemist_log_type_pre('-2154868276708359519', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
for(var j = 0;(j) < (array.length);j++){
codealchemist_log_type_pre('-5147549856674903716', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
codealchemist_log_type_pre('-2965052878506729013', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
if((subArray[i]) === (array[j])){
codealchemist_log_type_pre('3146237425097110247', ({}));
codealchemist_log_type_pre('-7643690174167014527', ({}));
(found) = true;
codealchemist_log_type_post('-7643690174167014527', ({v0 : ((typeof found) != ('undefined')) ? (found) : (undefined)}));
break ;
codealchemist_log_type_post('3146237425097110247', ({v0 : ((typeof found) != ('undefined')) ? (found) : (undefined)}));
}
codealchemist_log_type_post('-2965052878506729013', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof found) != ('undefined')) ? (found) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
codealchemist_log_type_post('-5147549856674903716', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof found) != ('undefined')) ? (found) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
}
codealchemist_log_type_post('-2154868276708359519', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof found) != ('undefined')) ? (found) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
codealchemist_log_type_pre('889375509289569014', ({v0 : ((typeof found) != ('undefined')) ? (found) : (undefined)}));
if(! found){
codealchemist_log_type_pre('-6808902147229783520', ({}));
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
codealchemist_log_type_post('-6808902147229783520', ({}));
}
codealchemist_log_type_post('889375509289569014', ({v0 : ((typeof found) != ('undefined')) ? (found) : (undefined)}));
codealchemist_log_type_post('-6149558537312725916', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof found) != ('undefined')) ? (found) : (undefined), v4 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
}
codealchemist_log_type_post('-7598552702298508731', ({v4 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof found) != ('undefined')) ? (found) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subArray) != ('undefined')) ? (subArray) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-286278065982494740', ({}));
