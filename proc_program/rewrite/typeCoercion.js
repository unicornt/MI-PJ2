import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-5765914444083657446', ({v2 : ((typeof testCoercibleToIntegerZero) != ('undefined')) ? (testCoercibleToIntegerZero) : (undefined)}));
function testCoercibleToIndexZero(test){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerZero) != ('undefined')) ? (testCoercibleToIntegerZero) : (undefined)}));
testCoercibleToIntegerZero(test);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerZero) != ('undefined')) ? (testCoercibleToIntegerZero) : (undefined)}));
}
codealchemist_log_type_post('-5765914444083657446', ({}));
codealchemist_log_type_pre('-5765914444083657446', ({v2 : ((typeof testCoercibleToIntegerOne) != ('undefined')) ? (testCoercibleToIntegerOne) : (undefined)}));
function testCoercibleToIndexOne(test){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerOne) != ('undefined')) ? (testCoercibleToIntegerOne) : (undefined)}));
testCoercibleToIntegerOne(test);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerOne) != ('undefined')) ? (testCoercibleToIntegerOne) : (undefined)}));
}
codealchemist_log_type_post('-5765914444083657446', ({}));
function testCoercibleToIndexFromIndex(nominalIndex, test){
assert(Number.isInteger(nominalIndex));
assert(((0) <= (nominalIndex)) && ((nominalIndex) <= (((2) ** (53)) - (1))));
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof nominalIndex) != ('undefined')) ? (nominalIndex) : (undefined), v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined)}));
testCoercibleToIntegerFromInteger(nominalIndex, test);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof nominalIndex) != ('undefined')) ? (nominalIndex) : (undefined), v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined)}));
}
codealchemist_log_type_pre('-2057979564189799003', ({v3 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined), v4 : ((typeof testCoercibleToNumberNan) != ('undefined')) ? (testCoercibleToNumberNan) : (undefined), v2 : ((typeof testCoercibleToNumberZero) != ('undefined')) ? (testCoercibleToNumberZero) : (undefined)}));
function testCoercibleToIntegerZero(test){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToNumberZero) != ('undefined')) ? (testCoercibleToNumberZero) : (undefined)}));
testCoercibleToNumberZero(test);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToNumberZero) != ('undefined')) ? (testCoercibleToNumberZero) : (undefined)}));
codealchemist_log_type_pre('-8549236056061062254', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined)}));
testCoercibleToIntegerFromInteger(0, test);
codealchemist_log_type_post('-8549236056061062254', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined)}));
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToNumberNan) != ('undefined')) ? (testCoercibleToNumberNan) : (undefined)}));
testCoercibleToNumberNan(test);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToNumberNan) != ('undefined')) ? (testCoercibleToNumberNan) : (undefined)}));
codealchemist_log_type_pre('9920297012219439', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({}));
codealchemist_log_type_post('9920297012219439', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-2057979564189799003', ({}));
codealchemist_log_type_pre('-8516795151655380611', ({v3 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined), v2 : ((typeof testCoercibleToNumberOne) != ('undefined')) ? (testCoercibleToNumberOne) : (undefined)}));
function testCoercibleToIntegerOne(test){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToNumberOne) != ('undefined')) ? (testCoercibleToNumberOne) : (undefined)}));
testCoercibleToNumberOne(test);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToNumberOne) != ('undefined')) ? (testCoercibleToNumberOne) : (undefined)}));
codealchemist_log_type_pre('-9079610393844826652', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined)}));
testCoercibleToIntegerFromInteger(1, test);
codealchemist_log_type_post('-9079610393844826652', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToIntegerFromInteger) != ('undefined')) ? (testCoercibleToIntegerFromInteger) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-8516795151655380611', ({}));
codealchemist_log_type_pre('6111176979470336484', ({v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testCoercibleToNumberZero(test){
codealchemist_log_type_pre('8225568762673824095', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v3 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", test);
codealchemist_log_type_post('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8225568762673824095', ({}));
codealchemist_log_type_pre('7746749926987758624', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(null);
codealchemist_log_type_post('7746749926987758624', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('3824328866247436675', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(false);
codealchemist_log_type_post('3824328866247436675', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('4169839172240255327', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(0);
codealchemist_log_type_post('4169839172240255327', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-1926384971129798957', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("0");
codealchemist_log_type_post('-1926384971129798957', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('6111176979470336484', ({}));
codealchemist_log_type_pre('-3567265972949866905', ({v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testCoercibleToNumberNan(test){
codealchemist_log_type_pre('8225568762673824095', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v3 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", test);
codealchemist_log_type_post('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8225568762673824095', ({}));
codealchemist_log_type_pre('-5954853946787355093', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(undefined);
codealchemist_log_type_post('-5954853946787355093', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('3340384847721573456', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(NaN);
codealchemist_log_type_post('3340384847721573456', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-2691011846987620431', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("");
codealchemist_log_type_post('-2691011846987620431', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('3651680279746824437', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("foo");
codealchemist_log_type_post('3651680279746824437', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-3609090428222738587', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("true");
codealchemist_log_type_post('-3609090428222738587', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('-3567265972949866905', ({}));
codealchemist_log_type_pre('3878699109610282294', ({v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testCoercibleToNumberOne(test){
codealchemist_log_type_pre('8225568762673824095', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v3 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", test);
codealchemist_log_type_post('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8225568762673824095', ({}));
codealchemist_log_type_pre('2427030279561269048', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(true);
codealchemist_log_type_post('2427030279561269048', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-4579618824275602372', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(1);
codealchemist_log_type_post('-4579618824275602372', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-3467068607314806978', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("1");
codealchemist_log_type_post('-3467068607314806978', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('3878699109610282294', ({}));
function testCoercibleToIntegerFromInteger(nominalInteger, test){
assert(Number.isInteger(nominalInteger));
codealchemist_log_type_pre('-1310357097719515807', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v3 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", test);
codealchemist_log_type_post('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-1310357097719515807', ({}));
codealchemist_log_type_pre('-765048665118392673', ({v2 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
function testPrimitiveNumber(number){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof number) != ('undefined')) ? (number) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(number);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof number) != ('undefined')) ? (number) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-8571872292204291308', ({v1 : ((typeof number) != ('undefined')) ? (number) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(number.toString());
codealchemist_log_type_post('-8571872292204291308', ({v1 : ((typeof number) != ('undefined')) ? (number) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('-765048665118392673', ({}));
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
testPrimitiveNumber(nominalInteger);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
codealchemist_log_type_pre('8973026442014486224', ({v0 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v1 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
if((nominalInteger) >= (0)){
codealchemist_log_type_pre('-2436952369193541168', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
codealchemist_log_type_pre('-232570508619215392', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
testPrimitiveNumber((nominalInteger) + (0.9));
codealchemist_log_type_post('-232570508619215392', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
codealchemist_log_type_post('-2436952369193541168', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
}
codealchemist_log_type_post('8973026442014486224', ({v0 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v1 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
codealchemist_log_type_pre('3848604967205232427', ({v0 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v1 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
if((nominalInteger) <= (0)){
codealchemist_log_type_pre('6543651618835884869', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
codealchemist_log_type_pre('3115614287086119265', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
testPrimitiveNumber((nominalInteger) - (0.9));
codealchemist_log_type_post('3115614287086119265', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
codealchemist_log_type_post('6543651618835884869', ({v1 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v0 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
}
codealchemist_log_type_post('3848604967205232427', ({v0 : ((typeof nominalInteger) != ('undefined')) ? (nominalInteger) : (undefined), v1 : ((typeof testPrimitiveNumber) != ('undefined')) ? (testPrimitiveNumber) : (undefined)}));
}
codealchemist_log_type_pre('472163062856734279', ({v5 : ((typeof testCoercibleToPrimitiveWithMethod) != ('undefined')) ? (testCoercibleToPrimitiveWithMethod) : (undefined)}));
function testPrimitiveWrappers(primitiveValue, hint, test){
codealchemist_log_type_pre('-1561757716281544909', ({v0 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined), v1 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
if((primitiveValue) != (null)){
codealchemist_log_type_pre('529684713420379111', ({v2 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('1840673961702153656', ({v2 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(Object(primitiveValue));
codealchemist_log_type_post('1840673961702153656', ({v2 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_post('529684713420379111', ({v2 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-1561757716281544909', ({v0 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined), v1 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('6144011140001329013', ({v1 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v2 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined), v3 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToPrimitiveWithMethod) != ('undefined')) ? (testCoercibleToPrimitiveWithMethod) : (undefined)}));
testCoercibleToPrimitiveWithMethod(hint, (function (){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined)}));
var temp_3444589576563574513 = primitiveValue;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof primitiveValue) != ('undefined')) ? (primitiveValue) : (undefined)}));
return temp_3444589576563574513;
}), test);
codealchemist_log_type_post('6144011140001329013', ({v1 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v3 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToPrimitiveWithMethod) != ('undefined')) ? (testCoercibleToPrimitiveWithMethod) : (undefined)}));
}
codealchemist_log_type_post('472163062856734279', ({}));
codealchemist_log_type_pre('7985251499956858640', ({v5 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
function testCoercibleToPrimitiveWithMethod(hint, method, test){
codealchemist_log_type_pre('-7265530382583183660', ({}));
var methodNames;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined)}));
codealchemist_log_type_pre('-5194786023215528558', ({v2 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v0 : ((typeof hint) != ('undefined')) ? (hint) : (undefined)}));
if((hint) === ("number")){
codealchemist_log_type_pre('-5281519104634634149', ({}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(methodNames) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined)}));
codealchemist_log_type_post('-5281519104634634149', ({v0 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined)}));
}else {
codealchemist_log_type_pre('3213623856623761701', ({v2 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v0 : ((typeof hint) != ('undefined')) ? (hint) : (undefined)}));
if((hint) === ("string")){
codealchemist_log_type_pre('-5281519104634634149', ({}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(methodNames) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined)}));
codealchemist_log_type_post('-5281519104634634149', ({v0 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined)}));
}else {
codealchemist_log_type_pre('2131966154746702871', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
codealchemist_log_type_pre('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
var temp_5840845032313784485 = new Test262Error();
codealchemist_log_type_post('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
throw temp_5840845032313784485;
codealchemist_log_type_post('2131966154746702871', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
}
codealchemist_log_type_post('3213623856623761701', ({v2 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v0 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined)}));
}
codealchemist_log_type_post('-5194786023215528558', ({v2 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v0 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined)}));
codealchemist_log_type_pre('222868472009337906', ({v4 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v3 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[Symbol.toPrimitive] : method, [methodNames[0]] : (function (){
codealchemist_log_type_pre('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
var temp_5840845032313784485 = new Test262Error();
codealchemist_log_type_post('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
throw temp_5840845032313784485;
}), [methodNames[1]] : (function (){
codealchemist_log_type_pre('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
var temp_5840845032313784485 = new Test262Error();
codealchemist_log_type_post('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
throw temp_5840845032313784485;
})}));
codealchemist_log_type_post('222868472009337906', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v3 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('4468965917338286979', ({v3 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[methodNames[0]] : method, [methodNames[1]] : (function (){
codealchemist_log_type_pre('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
var temp_5840845032313784485 = new Test262Error();
codealchemist_log_type_post('-5840845032313784485', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
throw temp_5840845032313784485;
})}));
codealchemist_log_type_post('4468965917338286979', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('1740219500541593275', ({v0 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v3 : ((typeof method) != ('undefined')) ? (method) : (undefined), v2 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v1 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
if((hint) === ("number")){
codealchemist_log_type_pre('-3963754396143843682', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('6822478439225307543', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[methodNames[1]] : method}));
codealchemist_log_type_post('6822478439225307543', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_post('-3963754396143843682', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('1740219500541593275', ({v0 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v3 : ((typeof method) != ('undefined')) ? (method) : (undefined), v2 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v1 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('1715037208758170889', ({v4 : ((typeof method) != ('undefined')) ? (method) : (undefined), v3 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[Symbol.toPrimitive] : undefined, [methodNames[0]] : method, [methodNames[1]] : method}));
codealchemist_log_type_post('1715037208758170889', ({v4 : ((typeof method) != ('undefined')) ? (method) : (undefined), v3 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('5759299306244111358', ({v3 : ((typeof method) != ('undefined')) ? (method) : (undefined), v2 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[Symbol.toPrimitive] : null, [methodNames[0]] : method, [methodNames[1]] : method}));
codealchemist_log_type_post('5759299306244111358', ({v3 : ((typeof method) != ('undefined')) ? (method) : (undefined), v2 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('6432001579542564886', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[methodNames[0]] : null, [methodNames[1]] : method}));
codealchemist_log_type_post('6432001579542564886', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('475158350172211512', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[methodNames[0]] : 1, [methodNames[1]] : method}));
codealchemist_log_type_post('475158350172211512', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('8492068352394655380', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[methodNames[0]] : ({}), [methodNames[1]] : method}));
codealchemist_log_type_post('8492068352394655380', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-9142189544578019612', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[methodNames[0]] : (function (){
codealchemist_log_type_pre('-3142039250771054111', ({}));
var temp_3142039250771054111 = ({});
codealchemist_log_type_post('-3142039250771054111', ({}));
return temp_3142039250771054111;
}), [methodNames[1]] : method}));
codealchemist_log_type_post('-9142189544578019612', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('7313216068701549201', ({v3 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({[methodNames[0]] : (function (){
codealchemist_log_type_pre('8809508607094650584', ({}));
var temp_8809508607094650584 = Object(1);
codealchemist_log_type_post('8809508607094650584', ({}));
return temp_8809508607094650584;
}), [methodNames[1]] : method}));
codealchemist_log_type_post('7313216068701549201', ({v3 : ((typeof method) != ('undefined')) ? (method) : (undefined), v1 : ((typeof methodNames) != ('undefined')) ? (methodNames) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('7985251499956858640', ({}));
codealchemist_log_type_pre('-7687803326910144018', ({v6 : ((typeof testNotCoercibleToInteger) != ('undefined')) ? (testNotCoercibleToInteger) : (undefined), v5 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testNotCoercibleToIndex(test){
codealchemist_log_type_pre('-4609743039624904373', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('-3455102892752267248', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(RangeError, value);
codealchemist_log_type_post('-3455102892752267248', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('38764710265070992', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", (function (value){
codealchemist_log_type_pre('-3455102892752267248', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(RangeError, value);
codealchemist_log_type_post('-3455102892752267248', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('38764710265070992', ({v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-4609743039624904373', ({}));
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToInteger) != ('undefined')) ? (testNotCoercibleToInteger) : (undefined)}));
testNotCoercibleToInteger(test);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToInteger) != ('undefined')) ? (testNotCoercibleToInteger) : (undefined)}));
codealchemist_log_type_pre('-4016949115128421376', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(- 1);
codealchemist_log_type_post('-4016949115128421376', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('3773650927758675932', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(- 2.5);
codealchemist_log_type_post('3773650927758675932', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-8276653722962475053', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("-2.5");
codealchemist_log_type_post('-8276653722962475053', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-2246384487531411765', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(- Infinity);
codealchemist_log_type_post('-2246384487531411765', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('6517080173809914704', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue((2) ** (53));
codealchemist_log_type_post('6517080173809914704', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('6785652865598970001', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(Infinity);
codealchemist_log_type_post('6785652865598970001', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('-7687803326910144018', ({}));
codealchemist_log_type_pre('-5765914444083657446', ({v2 : ((typeof testNotCoercibleToNumber) != ('undefined')) ? (testNotCoercibleToNumber) : (undefined)}));
function testNotCoercibleToInteger(test){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToNumber) != ('undefined')) ? (testNotCoercibleToNumber) : (undefined)}));
testNotCoercibleToNumber(test);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToNumber) != ('undefined')) ? (testNotCoercibleToNumber) : (undefined)}));
}
codealchemist_log_type_post('-5765914444083657446', ({}));
codealchemist_log_type_pre('4030292880753339482', ({v8 : ((typeof testNotCoercibleToPrimitive) != ('undefined')) ? (testNotCoercibleToPrimitive) : (undefined), v5 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testNotCoercibleToNumber(test){
codealchemist_log_type_pre('-1139009275006840891', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(TypeError, value);
codealchemist_log_type_post('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('1829843978872959898', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", (function (value){
codealchemist_log_type_pre('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(TypeError, value);
codealchemist_log_type_post('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('1829843978872959898', ({v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-1139009275006840891', ({}));
codealchemist_log_type_pre('4059190138279040940', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(Symbol("1"));
codealchemist_log_type_post('4059190138279040940', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('1244988580182164086', ({v1 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
if((typeof BigInt) !== ("undefined")){
codealchemist_log_type_pre('6968990511466245356', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-3407141692696595715', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(BigInt(0));
codealchemist_log_type_post('-3407141692696595715', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_post('6968990511466245356', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('1244988580182164086', ({v1 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-2682373989337758511', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToPrimitive) != ('undefined')) ? (testNotCoercibleToPrimitive) : (undefined)}));
testNotCoercibleToPrimitive("number", test);
codealchemist_log_type_post('-2682373989337758511', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToPrimitive) != ('undefined')) ? (testNotCoercibleToPrimitive) : (undefined)}));
}
codealchemist_log_type_post('4030292880753339482', ({}));
codealchemist_log_type_pre('-2954855694286336724', ({v7 : ((typeof testCoercibleToPrimitiveWithMethod) != ('undefined')) ? (testCoercibleToPrimitiveWithMethod) : (undefined)}));
function testNotCoercibleToPrimitive(hint, test){
codealchemist_log_type_pre('-857060939854026304', ({}));
function MyError(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
codealchemist_log_type_pre('5874535801811405204', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(TypeError, ({[Symbol.toPrimitive] : 1}));
codealchemist_log_type_post('5874535801811405204', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-4613081517956945901', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(TypeError, ({[Symbol.toPrimitive] : ({})}));
codealchemist_log_type_post('-4613081517956945901', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-8937781656415495303', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(TypeError, ({[Symbol.toPrimitive] : (function (){
codealchemist_log_type_pre('8809508607094650584', ({}));
var temp_8809508607094650584 = Object(1);
codealchemist_log_type_post('8809508607094650584', ({}));
return temp_8809508607094650584;
})}));
codealchemist_log_type_post('-8937781656415495303', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('721133858996554254', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(TypeError, ({[Symbol.toPrimitive] : (function (){
codealchemist_log_type_pre('-3142039250771054111', ({}));
var temp_3142039250771054111 = ({});
codealchemist_log_type_post('-3142039250771054111', ({}));
return temp_3142039250771054111;
})}));
codealchemist_log_type_post('721133858996554254', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-7831510909155626153', ({v1 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(MyError, ({[Symbol.toPrimitive] : (function (){
codealchemist_log_type_pre('-5840845032313784485', ({v0 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined)}));
var temp_5840845032313784485 = new MyError();
codealchemist_log_type_post('-5840845032313784485', ({v0 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined)}));
throw temp_5840845032313784485;
})}));
codealchemist_log_type_post('-7831510909155626153', ({v1 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('3796997269305792756', ({v2 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined), v1 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v4 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToPrimitiveWithMethod) != ('undefined')) ? (testCoercibleToPrimitiveWithMethod) : (undefined)}));
testCoercibleToPrimitiveWithMethod(hint, (function (){
codealchemist_log_type_pre('-5840845032313784485', ({v0 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined)}));
var temp_5840845032313784485 = new MyError();
codealchemist_log_type_post('-5840845032313784485', ({v0 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined)}));
throw temp_5840845032313784485;
}), (function (value){
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(MyError, value);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof MyError) != ('undefined')) ? (MyError) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('3796997269305792756', ({v1 : ((typeof hint) != ('undefined')) ? (hint) : (undefined), v0 : ((typeof testCoercibleToPrimitiveWithMethod) != ('undefined')) ? (testCoercibleToPrimitiveWithMethod) : (undefined)}));
codealchemist_log_type_pre('-2639322838158687940', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
function testUnsuitableMethod(method){
codealchemist_log_type_pre('8384329642543897682', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(TypeError, ({valueOf : method, toString : method}));
codealchemist_log_type_post('8384329642543897682', ({v2 : ((typeof method) != ('undefined')) ? (method) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-2639322838158687940', ({}));
codealchemist_log_type_pre('7746749926987758624', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
testUnsuitableMethod(null);
codealchemist_log_type_post('7746749926987758624', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
codealchemist_log_type_pre('-4579618824275602372', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
testUnsuitableMethod(1);
codealchemist_log_type_post('-4579618824275602372', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
codealchemist_log_type_pre('9920297012219439', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
testUnsuitableMethod(({}));
codealchemist_log_type_post('9920297012219439', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
codealchemist_log_type_pre('7964432115158229960', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
testUnsuitableMethod((function (){
codealchemist_log_type_pre('8809508607094650584', ({}));
var temp_8809508607094650584 = Object(1);
codealchemist_log_type_post('8809508607094650584', ({}));
return temp_8809508607094650584;
}));
codealchemist_log_type_post('7964432115158229960', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
codealchemist_log_type_pre('3756424226958703581', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
testUnsuitableMethod((function (){
codealchemist_log_type_pre('-3142039250771054111', ({}));
var temp_3142039250771054111 = ({});
codealchemist_log_type_post('-3142039250771054111', ({}));
return temp_3142039250771054111;
}));
codealchemist_log_type_post('3756424226958703581', ({v0 : ((typeof testUnsuitableMethod) != ('undefined')) ? (testUnsuitableMethod) : (undefined)}));
}
codealchemist_log_type_post('-2954855694286336724', ({}));
codealchemist_log_type_pre('-7439411174818889087', ({v5 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testCoercibleToString(test){
codealchemist_log_type_pre('-3942801023257063882', ({v3 : ((typeof test) != ('undefined')) ? (test) : (undefined), v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value, expectedString){
codealchemist_log_type_pre('2456945352105600493', ({v2 : ((typeof expectedString) != ('undefined')) ? (expectedString) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value, expectedString);
codealchemist_log_type_post('2456945352105600493', ({v2 : ((typeof expectedString) != ('undefined')) ? (expectedString) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3920045417047650947', ({v3 : ((typeof expectedString) != ('undefined')) ? (expectedString) : (undefined), v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "string", (function (value){
codealchemist_log_type_pre('2456945352105600493', ({v2 : ((typeof expectedString) != ('undefined')) ? (expectedString) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value, expectedString);
codealchemist_log_type_post('2456945352105600493', ({v2 : ((typeof expectedString) != ('undefined')) ? (expectedString) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('-3920045417047650947', ({v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-3942801023257063882', ({}));
codealchemist_log_type_pre('4693178680228723740', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(undefined, "undefined");
codealchemist_log_type_post('4693178680228723740', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-5015114010729095747', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(null, "null");
codealchemist_log_type_post('-5015114010729095747', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-7569013552662821808', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(true, "true");
codealchemist_log_type_post('-7569013552662821808', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-6013477852100179501', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(false, "false");
codealchemist_log_type_post('-6013477852100179501', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-7533217117182048780', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(0, "0");
codealchemist_log_type_post('-7533217117182048780', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('9021153030652823876', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(- 0, "0");
codealchemist_log_type_post('9021153030652823876', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-7550697772357103466', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(Infinity, "Infinity");
codealchemist_log_type_post('-7550697772357103466', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('5743794462187593620', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(- Infinity, "-Infinity");
codealchemist_log_type_post('5743794462187593620', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-5967858357434432281', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(123.456, "123.456");
codealchemist_log_type_post('-5967858357434432281', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('2135427681115415713', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(- 123.456, "-123.456");
codealchemist_log_type_post('2135427681115415713', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-796964207576694007', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("", "");
codealchemist_log_type_post('-796964207576694007', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-3036410219038692841', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("foo", "foo");
codealchemist_log_type_post('-3036410219038692841', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-4843431809223784118', ({v1 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
if((typeof BigInt) !== ("undefined")){
codealchemist_log_type_pre('3046028453111150046', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-8240612793490189489', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(BigInt(0), "0");
codealchemist_log_type_post('-8240612793490189489', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_post('3046028453111150046', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('-4843431809223784118', ({v1 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-5410686756012471304', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([], "");
codealchemist_log_type_post('-5410686756012471304', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-6776763603253022264', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([], "foo,bar");
codealchemist_log_type_post('-6776763603253022264', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-2362602086160208484', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({}), "[object Object]");
codealchemist_log_type_post('-2362602086160208484', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-7439411174818889087', ({}));
codealchemist_log_type_pre('1243653062738365680', ({v7 : ((typeof testNotCoercibleToPrimitive) != ('undefined')) ? (testNotCoercibleToPrimitive) : (undefined), v5 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testNotCoercibleToString(test){
codealchemist_log_type_pre('-3081607784969280171', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(TypeError, value);
codealchemist_log_type_post('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-4199152760123279147', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "string", (function (value){
codealchemist_log_type_pre('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(TypeError, value);
codealchemist_log_type_post('-1041544914983993115', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('-4199152760123279147', ({v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-3081607784969280171', ({}));
codealchemist_log_type_pre('4059190138279040940', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(Symbol("1"));
codealchemist_log_type_post('4059190138279040940', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('6736790246512355583', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToPrimitive) != ('undefined')) ? (testNotCoercibleToPrimitive) : (undefined)}));
testNotCoercibleToPrimitive("string", test);
codealchemist_log_type_post('6736790246512355583', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testNotCoercibleToPrimitive) != ('undefined')) ? (testNotCoercibleToPrimitive) : (undefined)}));
}
codealchemist_log_type_post('1243653062738365680', ({}));
codealchemist_log_type_pre('2740378842044171288', ({}));
function testCoercibleToBooleanTrue(test){
codealchemist_log_type_pre('2427030279561269048', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(true);
codealchemist_log_type_post('2427030279561269048', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-4579618824275602372', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(1);
codealchemist_log_type_post('-4579618824275602372', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-8159935814776631421', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test("string");
codealchemist_log_type_post('-8159935814776631421', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('4059190138279040940', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(Symbol("1"));
codealchemist_log_type_post('4059190138279040940', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('9920297012219439', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(({}));
codealchemist_log_type_post('9920297012219439', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('2740378842044171288', ({}));
codealchemist_log_type_pre('814453040717585156', ({}));
function testCoercibleToBooleanFalse(test){
codealchemist_log_type_pre('-5954853946787355093', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(undefined);
codealchemist_log_type_post('-5954853946787355093', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('7746749926987758624', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(null);
codealchemist_log_type_post('7746749926987758624', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('3824328866247436675', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(false);
codealchemist_log_type_post('3824328866247436675', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('4169839172240255327', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(0);
codealchemist_log_type_post('4169839172240255327', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-1796397826684237492', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(- 0);
codealchemist_log_type_post('-1796397826684237492', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('3340384847721573456', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test(NaN);
codealchemist_log_type_post('3340384847721573456', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-2691011846987620431', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test("");
codealchemist_log_type_post('-2691011846987620431', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('814453040717585156', ({}));
codealchemist_log_type_pre('-2663581509534356942', ({v5 : ((typeof testCoercibleToBigIntFromBigInt) != ('undefined')) ? (testCoercibleToBigIntFromBigInt) : (undefined), v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testCoercibleToBigIntZero(test){
codealchemist_log_type_pre('8225568762673824095', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v3 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", test);
codealchemist_log_type_post('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8225568762673824095', ({}));
codealchemist_log_type_pre('6509060575362166101', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToBigIntFromBigInt) != ('undefined')) ? (testCoercibleToBigIntFromBigInt) : (undefined)}));
testCoercibleToBigIntFromBigInt(BigInt(0), test);
codealchemist_log_type_post('6509060575362166101', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToBigIntFromBigInt) != ('undefined')) ? (testCoercibleToBigIntFromBigInt) : (undefined)}));
codealchemist_log_type_pre('-4544563605435942499', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(- BigInt(0));
codealchemist_log_type_post('-4544563605435942499', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('7700290275585620339', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("-0");
codealchemist_log_type_post('7700290275585620339', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('3824328866247436675', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(false);
codealchemist_log_type_post('3824328866247436675', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-2691011846987620431', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("");
codealchemist_log_type_post('-2691011846987620431', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('352123174907371815', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue("   ");
codealchemist_log_type_post('352123174907371815', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-2663581509534356942', ({}));
codealchemist_log_type_pre('-2602079797396689675', ({v5 : ((typeof testCoercibleToBigIntFromBigInt) != ('undefined')) ? (testCoercibleToBigIntFromBigInt) : (undefined), v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testCoercibleToBigIntOne(test){
codealchemist_log_type_pre('8225568762673824095', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v3 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", test);
codealchemist_log_type_post('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8225568762673824095', ({}));
codealchemist_log_type_pre('335078537090941668', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToBigIntFromBigInt) != ('undefined')) ? (testCoercibleToBigIntFromBigInt) : (undefined)}));
testCoercibleToBigIntFromBigInt(BigInt(1), test);
codealchemist_log_type_post('335078537090941668', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testCoercibleToBigIntFromBigInt) != ('undefined')) ? (testCoercibleToBigIntFromBigInt) : (undefined)}));
codealchemist_log_type_pre('2427030279561269048', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(true);
codealchemist_log_type_post('2427030279561269048', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-2602079797396689675', ({}));
codealchemist_log_type_pre('-7895085924102865736', ({v5 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testCoercibleToBigIntFromBigInt(nominalBigInt, test){
codealchemist_log_type_pre('8225568762673824095', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v3 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(value){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", test);
codealchemist_log_type_post('-1873688734700204531', ({v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8225568762673824095', ({}));
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(nominalBigInt);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-8571872292204291308', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(nominalBigInt.toString());
codealchemist_log_type_post('-8571872292204291308', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-4245928785666062194', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(("0b") + (nominalBigInt.toString(2)));
codealchemist_log_type_post('-4245928785666062194', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('3646694915577697811', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(("0o") + (nominalBigInt.toString(8)));
codealchemist_log_type_post('3646694915577697811', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('5636220741656258672', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(("0x") + (nominalBigInt.toString(16)));
codealchemist_log_type_post('5636220741656258672', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('6633738362846001002', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue((("   ") + (nominalBigInt.toString())) + ("   "));
codealchemist_log_type_post('6633738362846001002', ({v1 : ((typeof nominalBigInt) != ('undefined')) ? (nominalBigInt) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
test([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof test) != ('undefined')) ? (test) : (undefined)}));
}
codealchemist_log_type_post('-7895085924102865736', ({}));
codealchemist_log_type_pre('4977221898402106378', ({v5 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testNotCoercibleToBigInt(test){
codealchemist_log_type_pre('-5174276515094935048', ({v3 : ((typeof test) != ('undefined')) ? (test) : (undefined), v4 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined)}));
function testPrimitiveValue(error, value){
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof error) != ('undefined')) ? (error) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(error, value);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof error) != ('undefined')) ? (error) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('2421191276454888906', ({v3 : ((typeof error) != ('undefined')) ? (error) : (undefined), v2 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
testPrimitiveWrappers(value, "number", (function (value){
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof error) != ('undefined')) ? (error) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
test(error, value);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof error) != ('undefined')) ? (error) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('2421191276454888906', ({v0 : ((typeof testPrimitiveWrappers) != ('undefined')) ? (testPrimitiveWrappers) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-5174276515094935048', ({}));
codealchemist_log_type_pre('3683827562338383466', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(TypeError, undefined);
codealchemist_log_type_post('3683827562338383466', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('7036795824952101673', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(TypeError, null);
codealchemist_log_type_post('7036795824952101673', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-8594955364786740359', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(TypeError, 0);
codealchemist_log_type_post('-8594955364786740359', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('3343485833516680197', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(TypeError, NaN);
codealchemist_log_type_post('3343485833516680197', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-4743661807590514010', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(TypeError, Infinity);
codealchemist_log_type_post('-4743661807590514010', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('1009171743628165917', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(TypeError, Symbol("1"));
codealchemist_log_type_post('1009171743628165917', ({v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('2312581814745534945', ({v2 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
function testStringValue(string){
codealchemist_log_type_pre('4820050473648170581', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(SyntaxError, string);
codealchemist_log_type_post('4820050473648170581', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-3379302582824045060', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(SyntaxError, ("   ") + (string));
codealchemist_log_type_post('-3379302582824045060', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('-2752900621168432645', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(SyntaxError, (string) + ("   "));
codealchemist_log_type_post('-2752900621168432645', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
codealchemist_log_type_pre('4712022408131294826', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
testPrimitiveValue(SyntaxError, (("   ") + (string)) + ("   "));
codealchemist_log_type_post('4712022408131294826', ({v2 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof testPrimitiveValue) != ('undefined')) ? (testPrimitiveValue) : (undefined)}));
}
codealchemist_log_type_post('2312581814745534945', ({}));
codealchemist_log_type_pre('-2205738317743399056', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
testStringValue("a");
codealchemist_log_type_post('-2205738317743399056', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
codealchemist_log_type_pre('-2449949858858167838', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
testStringValue("0b2");
codealchemist_log_type_post('-2449949858858167838', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
codealchemist_log_type_pre('6048303809023319894', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
testStringValue("0o8");
codealchemist_log_type_post('6048303809023319894', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
codealchemist_log_type_pre('-9032093843057031136', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
testStringValue("0xg");
codealchemist_log_type_post('-9032093843057031136', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
codealchemist_log_type_pre('1614419394725907396', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
testStringValue("1n");
codealchemist_log_type_post('1614419394725907396', ({v0 : ((typeof testStringValue) != ('undefined')) ? (testStringValue) : (undefined)}));
}
codealchemist_log_type_post('4977221898402106378', ({}));
