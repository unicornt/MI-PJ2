import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('40300378570669454', ({}));
function testWithAtomicsOutOfBoundsIndices(f){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var bad_indices = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof bad_indices) != ('undefined')) ? (bad_indices) : (undefined)}));
codealchemist_log_type_pre('-6618889323355554485', ({v1 : ((typeof bad_indices) != ('undefined')) ? (bad_indices) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
for(var i = 0;(i) < (bad_indices.length);++i){
codealchemist_log_type_pre('5537435670791954606', ({v1 : ((typeof bad_indices) != ('undefined')) ? (bad_indices) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof bad_indices) != ('undefined')) ? (bad_indices) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var IdxGen = bad_indices[i];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v1 : ((typeof bad_indices) != ('undefined')) ? (bad_indices) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-1064641772685702354', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
try{
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(IdxGen);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('6355437499550280582', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
(e.message) += ((' (Testing with index gen ') + (IdxGen)) + ('.)');
codealchemist_log_type_post('6355437499550280582', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
codealchemist_log_type_pre('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var temp_7901106482597517613 = e;
codealchemist_log_type_post('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
throw temp_7901106482597517613;
}
codealchemist_log_type_post('-1064641772685702354', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v2 : ((typeof e) != ('undefined')) ? (e) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_post('5537435670791954606', ({v0 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v1 : ((typeof bad_indices) != ('undefined')) ? (bad_indices) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6618889323355554485', ({v2 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v1 : ((typeof bad_indices) != ('undefined')) ? (bad_indices) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('40300378570669454', ({}));
codealchemist_log_type_pre('40300378570669454', ({}));
function testWithAtomicsInBoundsIndices(f){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var good_indices = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof good_indices) != ('undefined')) ? (good_indices) : (undefined)}));
codealchemist_log_type_pre('-6618889323355554485', ({v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof good_indices) != ('undefined')) ? (good_indices) : (undefined)}));
for(var i = 0;(i) < (good_indices.length);++i){
codealchemist_log_type_pre('5537435670791954606', ({v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof good_indices) != ('undefined')) ? (good_indices) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof good_indices) != ('undefined')) ? (good_indices) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var IdxGen = good_indices[i];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v1 : ((typeof good_indices) != ('undefined')) ? (good_indices) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-1064641772685702354', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
try{
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(IdxGen);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('6355437499550280582', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
(e.message) += ((' (Testing with index gen ') + (IdxGen)) + ('.)');
codealchemist_log_type_post('6355437499550280582', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
codealchemist_log_type_pre('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var temp_7901106482597517613 = e;
codealchemist_log_type_post('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
throw temp_7901106482597517613;
}
codealchemist_log_type_post('-1064641772685702354', ({v1 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v2 : ((typeof e) != ('undefined')) ? (e) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_post('5537435670791954606', ({v0 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof good_indices) != ('undefined')) ? (good_indices) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6618889323355554485', ({v2 : ((typeof IdxGen) != ('undefined')) ? (IdxGen) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof good_indices) != ('undefined')) ? (good_indices) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('40300378570669454', ({}));
codealchemist_log_type_pre('9141051504976601494', ({}));
function testWithAtomicsNonViewValues(f){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var values = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-5404799358393644667', ({v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
for(var i = 0;(i) < (values.length);++i){
codealchemist_log_type_pre('-6589598828193701038', ({v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
var nonView = values[i];
codealchemist_log_type_post('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-9160071210814427028', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined)}));
try{
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined)}));
f(nonView);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('2028458542548025232', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined), v1 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined)}));
(e.message) += ((' (Testing with non-view value ') + (nonView)) + ('.)');
codealchemist_log_type_post('2028458542548025232', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined), v1 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined)}));
codealchemist_log_type_pre('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var temp_7901106482597517613 = e;
codealchemist_log_type_post('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
throw temp_7901106482597517613;
}
codealchemist_log_type_post('-9160071210814427028', ({v2 : ((typeof e) != ('undefined')) ? (e) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined)}));
codealchemist_log_type_post('-6589598828193701038', ({v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}
codealchemist_log_type_post('-5404799358393644667', ({v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof nonView) != ('undefined')) ? (nonView) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}
codealchemist_log_type_post('9141051504976601494', ({}));
