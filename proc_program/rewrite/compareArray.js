import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-244053289558969230', ({}));
function compareArray(a, b){
codealchemist_log_type_pre('-3739800558389593034', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
if((b.length) !== (a.length)){
codealchemist_log_type_pre('-6808902147229783520', ({}));
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
codealchemist_log_type_post('-6808902147229783520', ({}));
}
codealchemist_log_type_post('-3739800558389593034', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-5437521916951441370', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined), v2 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined)}));
for(var i = 0;(i) < (a.length);i++){
codealchemist_log_type_pre('-7491364508835977217', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-2204611298806854118', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
if(! compareArray.isSameValue(b[i], a[i])){
codealchemist_log_type_pre('-6808902147229783520', ({}));
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
codealchemist_log_type_post('-6808902147229783520', ({}));
}
codealchemist_log_type_post('-2204611298806854118', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-7491364508835977217', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-5437521916951441370', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined), v2 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-244053289558969230', ({}));
codealchemist_log_type_pre('729367993723215950', ({v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined)}));
(compareArray.isSameValue) = (function (a, b){
codealchemist_log_type_pre('662577855801867884', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
if(((a) === (0)) && ((b) === (0))){
codealchemist_log_type_pre('798654923053665128', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
var temp_798654923053665128 = ((1) / (a)) === ((1) / (b));
codealchemist_log_type_post('798654923053665128', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
return temp_798654923053665128;
}
codealchemist_log_type_post('662577855801867884', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-9040052325423302314', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
if(((a) !== (a)) && ((b) !== (b))){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-9040052325423302314', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-6009424892220294655', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
var temp_6009424892220294655 = (a) === (b);
codealchemist_log_type_post('-6009424892220294655', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
return temp_6009424892220294655;
});
codealchemist_log_type_post('729367993723215950', ({v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined)}));
codealchemist_log_type_pre('1301947247374877676', ({v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined)}));
(compareArray.format) = (function (array){
codealchemist_log_type_pre('-5960475802073428784', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
var temp_5960475802073428784 = `[${array.map(String).join(', ')}]`;
codealchemist_log_type_post('-5960475802073428784', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
return temp_5960475802073428784;
});
codealchemist_log_type_post('1301947247374877676', ({v0 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined)}));
(assert.compareArray) = (function (actual, expected, message){
codealchemist_log_type_pre('-5399171148322178336', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) = ((message) === (undefined)) ? ('') : (message);
codealchemist_log_type_post('-5399171148322178336', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
assert((actual) != (null), `First argument shouldn't be nullish. ${message}`);
assert((expected) != (null), `Second argument shouldn't be nullish. ${message}`);
codealchemist_log_type_pre('-5665209515118835751', ({v1 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined)}));
var format = compareArray.format;
codealchemist_log_type_post('-5665209515118835751', ({v1 : ((typeof compareArray) != ('undefined')) ? (compareArray) : (undefined), v0 : ((typeof format) != ('undefined')) ? (format) : (undefined)}));
assert(compareArray(actual, expected), `Expected ${format(actual)} and ${format(expected)} to have the same contents. ${message}`);
});
