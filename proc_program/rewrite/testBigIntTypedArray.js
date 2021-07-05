import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-7841062909900383966', ({}));
var TypedArray = Object.getPrototypeOf(Int8Array);
codealchemist_log_type_post('-7841062909900383966', ({v0 : ((typeof TypedArray) != ('undefined')) ? (TypedArray) : (undefined)}));
codealchemist_log_type_pre('4546976360215772622', ({}));
function testWithBigIntTypedArrayConstructors(f, selected){
codealchemist_log_type_pre('-5152515782182808835', ({v1 : ((typeof selected) != ('undefined')) ? (selected) : (undefined)}));
var constructors = (selected) || ([]);
codealchemist_log_type_post('-5152515782182808835', ({v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v1 : ((typeof selected) != ('undefined')) ? (selected) : (undefined)}));
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
codealchemist_log_type_post('4546976360215772622', ({}));
