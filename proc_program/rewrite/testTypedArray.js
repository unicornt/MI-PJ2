import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-2873575392672305138', ({}));
var typedArrayConstructors = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
codealchemist_log_type_pre('-3117298423589226617', ({v1 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
var floatArrayConstructors = typedArrayConstructors.slice(0, 2);
codealchemist_log_type_post('-3117298423589226617', ({v0 : ((typeof floatArrayConstructors) != ('undefined')) ? (floatArrayConstructors) : (undefined), v1 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
codealchemist_log_type_pre('5722168265606752359', ({v1 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
var intArrayConstructors = typedArrayConstructors.slice(2, 7);
codealchemist_log_type_post('5722168265606752359', ({v0 : ((typeof intArrayConstructors) != ('undefined')) ? (intArrayConstructors) : (undefined), v1 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
codealchemist_log_type_pre('-7841062909900383966', ({}));
var TypedArray = Object.getPrototypeOf(Int8Array);
codealchemist_log_type_post('-7841062909900383966', ({v0 : ((typeof TypedArray) != ('undefined')) ? (TypedArray) : (undefined)}));
codealchemist_log_type_pre('5433479660555893425', ({v4 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
function testWithTypedArrayConstructors(f, selected){
codealchemist_log_type_pre('7440369743734661475', ({v1 : ((typeof selected) != ('undefined')) ? (selected) : (undefined), v2 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
var constructors = (selected) || (typedArrayConstructors);
codealchemist_log_type_post('7440369743734661475', ({v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v1 : ((typeof selected) != ('undefined')) ? (selected) : (undefined), v2 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
codealchemist_log_type_pre('7340096902047939788', ({v1 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
for(var i = 0;(i) < (constructors.length);++i){
codealchemist_log_type_pre('5060319981890657122', ({v1 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var constructor = constructors[i];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('6948679059015455116', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
try{
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(constructor);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('7549807106191616591', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
(e.message) += ((" (Testing with ") + (constructor.name)) + (".)");
codealchemist_log_type_post('7549807106191616591', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
codealchemist_log_type_pre('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var temp_7901106482597517613 = e;
codealchemist_log_type_post('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
throw temp_7901106482597517613;
}
codealchemist_log_type_post('6948679059015455116', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v2 : ((typeof e) != ('undefined')) ? (e) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_post('5060319981890657122', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('7340096902047939788', ({v2 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('5433479660555893425', ({}));
codealchemist_log_type_pre('-7919434502513867488', ({v2 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
function testWithNonAtomicsFriendlyTypedArrayConstructors(f){
codealchemist_log_type_pre('-3604575961296046973', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
testWithTypedArrayConstructors(f, []);
codealchemist_log_type_post('-3604575961296046973', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
}
codealchemist_log_type_post('-7919434502513867488', ({}));
codealchemist_log_type_pre('-7919434502513867488', ({v2 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
function testWithAtomicsFriendlyTypedArrayConstructors(f){
codealchemist_log_type_pre('-3604575961296046973', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
testWithTypedArrayConstructors(f, []);
codealchemist_log_type_post('-3604575961296046973', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
}
codealchemist_log_type_post('-7919434502513867488', ({}));
codealchemist_log_type_pre('7551713448861819070', ({v5 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
function testTypedArrayConversions(byteConversionValues, fn){
codealchemist_log_type_pre('-3544305686799362101', ({v1 : ((typeof byteConversionValues) != ('undefined')) ? (byteConversionValues) : (undefined)}));
var values = byteConversionValues.values;
codealchemist_log_type_post('-3544305686799362101', ({v1 : ((typeof byteConversionValues) != ('undefined')) ? (byteConversionValues) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-4807092439132630269', ({v1 : ((typeof byteConversionValues) != ('undefined')) ? (byteConversionValues) : (undefined)}));
var expected = byteConversionValues.expected;
codealchemist_log_type_post('-4807092439132630269', ({v1 : ((typeof byteConversionValues) != ('undefined')) ? (byteConversionValues) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('6331368492385860017', ({v7 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v9 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v0 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined), v3 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
testWithTypedArrayConstructors((function (TA){
codealchemist_log_type_pre('2587748148946143257', ({v1 : ((typeof TA) != ('undefined')) ? (TA) : (undefined)}));
var name = TA.name.slice(0, - 5);
codealchemist_log_type_post('2587748148946143257', ({v1 : ((typeof TA) != ('undefined')) ? (TA) : (undefined), v0 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
codealchemist_log_type_pre('4613162798084553871', ({v8 : ((typeof TA) != ('undefined')) ? (TA) : (undefined), v4 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v7 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v5 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
var temp_4613162798084553871 = values.forEach((function (value, index){
codealchemist_log_type_pre('-1324403394413058559', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof index) != ('undefined')) ? (index) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
var exp = expected[name][index];
codealchemist_log_type_post('-1324403394413058559', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof index) != ('undefined')) ? (index) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
codealchemist_log_type_pre('8887107388399914408', ({}));
var initial = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof initial) != ('undefined')) ? (initial) : (undefined)}));
codealchemist_log_type_pre('-2552896669689275859', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined)}));
if((exp) === (0)){
codealchemist_log_type_pre('-5495158396855651534', ({}));
codealchemist_log_type_pre('-8110102381441109808', ({}));
(initial) = 1;
codealchemist_log_type_post('-8110102381441109808', ({v0 : ((typeof initial) != ('undefined')) ? (initial) : (undefined)}));
codealchemist_log_type_post('-5495158396855651534', ({v0 : ((typeof initial) != ('undefined')) ? (initial) : (undefined)}));
}
codealchemist_log_type_post('-2552896669689275859', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof initial) != ('undefined')) ? (initial) : (undefined)}));
codealchemist_log_type_pre('4070553143179612943', ({v1 : ((typeof TA) != ('undefined')) ? (TA) : (undefined), v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v0 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v4 : ((typeof initial) != ('undefined')) ? (initial) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
fn(TA, value, exp, initial);
codealchemist_log_type_post('4070553143179612943', ({v1 : ((typeof TA) != ('undefined')) ? (TA) : (undefined), v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v0 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v4 : ((typeof initial) != ('undefined')) ? (initial) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('4613162798084553871', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
return temp_4613162798084553871;
}));
codealchemist_log_type_post('6331368492385860017', ({v0 : ((typeof testWithTypedArrayConstructors) != ('undefined')) ? (testWithTypedArrayConstructors) : (undefined)}));
}
codealchemist_log_type_post('7551713448861819070', ({}));
