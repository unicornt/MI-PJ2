import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
function checkSequence(arr, message){
arr.forEach((function (e, i){
if((e) !== ((i) + (1))){
$ERROR(((((message) ? (message) : ("Steps in unexpected sequence:")) + (" '")) + (arr.join(','))) + ("'"));
}
}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
function checkSettledPromises(settleds, expected, message){
codealchemist_log_type_pre('-2981838764342230751', ({v1 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
const prefix = (message) ? (`${message}: `) : ('');
codealchemist_log_type_post('-2981838764342230751', ({v1 : ((typeof message) != ('undefined')) ? (message) : (undefined), v0 : ((typeof prefix) != ('undefined')) ? (prefix) : (undefined)}));
assert.sameValue(Array.isArray(settleds), true, `${prefix}Settled values is an array`);
assert.sameValue(settleds.length, expected.length, `${prefix}The settled values has a different length than expected`);
settleds.forEach(((settled, i)=>{
assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'status'), true, `${prefix}The settled value has a property status`);
assert.sameValue(settled.status, expected[i].status, `${prefix}status for item ${i}`);
if((settled.status) === ('fulfilled')){
assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'value'), true, `${prefix}The fulfilled promise has a property named value`);
assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'reason'), false, `${prefix}The fulfilled promise has no property named reason`);
assert.sameValue(settled.value, expected[i].value, `${prefix}value for item ${i}`);
}else {
assert.sameValue(settled.status, 'rejected', `${prefix}Valid statuses are only fulfilled or rejected`);
assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'value'), false, `${prefix}The fulfilled promise has no property named value`);
assert.sameValue(Object.prototype.hasOwnProperty.call(settled, 'reason'), true, `${prefix}The fulfilled promise has a property named reason`);
assert.sameValue(settled.reason, expected[i].reason, `${prefix}Reason value for item ${i}`);
}
}));
}
