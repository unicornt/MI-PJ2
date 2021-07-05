import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
function assert(mustBeTrue, message){
codealchemist_log_type_pre('8186272306235849124', ({v0 : ((typeof mustBeTrue) != ('undefined')) ? (mustBeTrue) : (undefined)}));
if((mustBeTrue) === (true)){
codealchemist_log_type_pre('-6766101276485220746', ({}));
return;
codealchemist_log_type_post('-6766101276485220746', ({}));
}
codealchemist_log_type_post('8186272306235849124', ({v0 : ((typeof mustBeTrue) != ('undefined')) ? (mustBeTrue) : (undefined)}));
if((message) === (undefined)){
(message) = ('Expected true but got ') + (assert._toString(mustBeTrue));
}
$ERROR(message);
}
(assert._isSameValue) = (function (a, b){
codealchemist_log_type_pre('-3647179105377390550', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
if((a) === (b)){
codealchemist_log_type_pre('2783298894394989780', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('6657112628411473263', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
var temp_6657112628411473263 = ((a) !== (0)) || (((1) / (a)) === ((1) / (b)));
codealchemist_log_type_post('6657112628411473263', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
return temp_6657112628411473263;
codealchemist_log_type_post('2783298894394989780', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
}
codealchemist_log_type_post('-3647179105377390550', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-5871240838505319349', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
var temp_5871240838505319349 = ((a) !== (a)) && ((b) !== (b));
codealchemist_log_type_post('-5871240838505319349', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
return temp_5871240838505319349;
});
(assert.sameValue) = (function (actual, expected, message){
try{
if(assert._isSameValue(actual, expected)){
codealchemist_log_type_pre('-6766101276485220746', ({}));
return;
codealchemist_log_type_post('-6766101276485220746', ({}));
}
}catch(error){
$ERROR(((message) + (' (_isSameValue operation threw) ')) + (error));
return;
}
codealchemist_log_type_pre('2900821151749537461', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
if((message) === (undefined)){
codealchemist_log_type_pre('1913734564068198782', ({}));
codealchemist_log_type_pre('-4556399749410210173', ({}));
(message) = '';
codealchemist_log_type_post('-4556399749410210173', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_post('1913734564068198782', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
}else {
codealchemist_log_type_pre('4257731974400233158', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_pre('913405153408142647', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) += ' ';
codealchemist_log_type_post('913405153408142647', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_post('4257731974400233158', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
}
codealchemist_log_type_post('2900821151749537461', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) += (((('Expected SameValue(«') + (assert._toString(actual))) + ('», «')) + (assert._toString(expected))) + ('») to be true');
$ERROR(message);
});
(assert.notSameValue) = (function (actual, unexpected, message){
if(! assert._isSameValue(actual, unexpected)){
codealchemist_log_type_pre('-6766101276485220746', ({}));
return;
codealchemist_log_type_post('-6766101276485220746', ({}));
}
codealchemist_log_type_pre('2900821151749537461', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
if((message) === (undefined)){
codealchemist_log_type_pre('1913734564068198782', ({}));
codealchemist_log_type_pre('-4556399749410210173', ({}));
(message) = '';
codealchemist_log_type_post('-4556399749410210173', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_post('1913734564068198782', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
}else {
codealchemist_log_type_pre('4257731974400233158', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_pre('913405153408142647', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) += ' ';
codealchemist_log_type_post('913405153408142647', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_post('4257731974400233158', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
}
codealchemist_log_type_post('2900821151749537461', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) += (((('Expected SameValue(«') + (assert._toString(actual))) + ('», «')) + (assert._toString(unexpected))) + ('») to be false');
$ERROR(message);
});
(assert.throws) = (function (expectedErrorConstructor, func, message){
if((typeof func) !== ("function")){
$ERROR(('assert.throws requires two arguments: the error constructor ') + ('and a function to run'));
return;
}
codealchemist_log_type_pre('2900821151749537461', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
if((message) === (undefined)){
codealchemist_log_type_pre('1913734564068198782', ({}));
codealchemist_log_type_pre('-4556399749410210173', ({}));
(message) = '';
codealchemist_log_type_post('-4556399749410210173', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_post('1913734564068198782', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
}else {
codealchemist_log_type_pre('4257731974400233158', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_pre('913405153408142647', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) += ' ';
codealchemist_log_type_post('913405153408142647', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_post('4257731974400233158', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
}
codealchemist_log_type_post('2900821151749537461', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
try{
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
func();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
}catch(thrown){
if(((typeof thrown) !== ('object')) || ((thrown) === (null))){
codealchemist_log_type_pre('591031020845767048', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) += 'Thrown value was not an object!';
codealchemist_log_type_post('591031020845767048', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
$ERROR(message);
}else {
if((thrown.constructor) !== (expectedErrorConstructor)){
codealchemist_log_type_pre('-2344540023921886249', ({v1 : ((typeof expectedErrorConstructor) != ('undefined')) ? (expectedErrorConstructor) : (undefined), v0 : ((typeof message) != ('undefined')) ? (message) : (undefined), v2 : ((typeof thrown) != ('undefined')) ? (thrown) : (undefined)}));
(message) += ((('Expected a ') + (expectedErrorConstructor.name)) + (' but got a ')) + (thrown.constructor.name);
codealchemist_log_type_post('-2344540023921886249', ({v1 : ((typeof expectedErrorConstructor) != ('undefined')) ? (expectedErrorConstructor) : (undefined), v0 : ((typeof message) != ('undefined')) ? (message) : (undefined), v2 : ((typeof thrown) != ('undefined')) ? (thrown) : (undefined)}));
$ERROR(message);
}
}
return;
}
codealchemist_log_type_pre('-6289727665142464299', ({v1 : ((typeof expectedErrorConstructor) != ('undefined')) ? (expectedErrorConstructor) : (undefined), v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) += (('Expected a ') + (expectedErrorConstructor.name)) + (' to be thrown but no exception was thrown at all');
codealchemist_log_type_post('-6289727665142464299', ({v1 : ((typeof expectedErrorConstructor) != ('undefined')) ? (expectedErrorConstructor) : (undefined), v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
$ERROR(message);
});
(assert._toString) = (function (value){
codealchemist_log_type_pre('1751533384380423832', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
try{
codealchemist_log_type_pre('8061571734017466279', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(((value) === (0)) && (((1) / (value)) === (- Infinity))){
codealchemist_log_type_pre('6272686341448249919', ({}));
codealchemist_log_type_pre('3392324834516332186', ({}));
var temp_3392324834516332186 = '-0';
codealchemist_log_type_post('3392324834516332186', ({}));
return temp_3392324834516332186;
codealchemist_log_type_post('6272686341448249919', ({}));
}
codealchemist_log_type_post('8061571734017466279', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-2487791907802134360', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_2487791907802134360 = String(value);
codealchemist_log_type_post('-2487791907802134360', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_2487791907802134360;
}catch(err){
codealchemist_log_type_pre('-3340827676855013974', ({v0 : ((typeof err) != ('undefined')) ? (err) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if((err.name) === ('TypeError')){
codealchemist_log_type_pre('6960064471726977397', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1399954069881928985', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_1399954069881928985 = Object.prototype.toString.call(value);
codealchemist_log_type_post('-1399954069881928985', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_1399954069881928985;
codealchemist_log_type_post('6960064471726977397', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-3340827676855013974', ({v0 : ((typeof err) != ('undefined')) ? (err) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-7901106482597517613', ({v0 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
var temp_7901106482597517613 = err;
codealchemist_log_type_post('-7901106482597517613', ({v0 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
throw temp_7901106482597517613;
}
codealchemist_log_type_post('1751533384380423832', ({v3 : ((typeof err) != ('undefined')) ? (err) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
});
