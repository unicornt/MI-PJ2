import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-7380401436805991172', ({v4 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
function allowProxyTraps(overrides){
codealchemist_log_type_pre('-3514112458875222593', ({v2 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
function throwTest262Error(msg){
codealchemist_log_type_pre('905509687213809242', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
var temp_905509687213809242 = (function (){
codealchemist_log_type_pre('8843955105893757886', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
var temp_8843955105893757886 = new Test262Error(msg);
codealchemist_log_type_post('8843955105893757886', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
throw temp_8843955105893757886;
});
codealchemist_log_type_post('905509687213809242', ({}));
return temp_905509687213809242;
}
codealchemist_log_type_post('-3514112458875222593', ({}));
codealchemist_log_type_pre('6830965244487624230', ({v0 : ((typeof overrides) != ('undefined')) ? (overrides) : (undefined)}));
if(! overrides){
codealchemist_log_type_pre('5707260314975419382', ({}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(overrides) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof overrides) != ('undefined')) ? (overrides) : (undefined)}));
codealchemist_log_type_post('5707260314975419382', ({v0 : ((typeof overrides) != ('undefined')) ? (overrides) : (undefined)}));
}
codealchemist_log_type_post('6830965244487624230', ({v0 : ((typeof overrides) != ('undefined')) ? (overrides) : (undefined)}));
codealchemist_log_type_pre('-5382152883170197455', ({v0 : ((typeof overrides) != ('undefined')) ? (overrides) : (undefined), v1 : ((typeof throwTest262Error) != ('undefined')) ? (throwTest262Error) : (undefined)}));
var temp_5382152883170197455 = ({getPrototypeOf : (overrides.getPrototypeOf) || (throwTest262Error('[[GetPrototypeOf]] trap called')), setPrototypeOf : (overrides.setPrototypeOf) || (throwTest262Error('[[SetPrototypeOf]] trap called')), isExtensible : (overrides.isExtensible) || (throwTest262Error('[[IsExtensible]] trap called')), preventExtensions : (overrides.preventExtensions) || (throwTest262Error('[[PreventExtensions]] trap called')), getOwnPropertyDescriptor : (overrides.getOwnPropertyDescriptor) || (throwTest262Error('[[GetOwnProperty]] trap called')), has : (overrides.has) || (throwTest262Error('[[HasProperty]] trap called')), get : (overrides.get) || (throwTest262Error('[[Get]] trap called')), set : (overrides.set) || (throwTest262Error('[[Set]] trap called')), deleteProperty : (overrides.deleteProperty) || (throwTest262Error('[[Delete]] trap called')), defineProperty : (overrides.defineProperty) || (throwTest262Error('[[DefineOwnProperty]] trap called')), enumerate : throwTest262Error('[[Enumerate]] trap called: this trap has been removed'), ownKeys : (overrides.ownKeys) || (throwTest262Error('[[OwnPropertyKeys]] trap called')), apply : (overrides.apply) || (throwTest262Error('[[Call]] trap called')), construct : (overrides.construct) || (throwTest262Error('[[Construct]] trap called'))});
codealchemist_log_type_post('-5382152883170197455', ({v0 : ((typeof overrides) != ('undefined')) ? (overrides) : (undefined), v1 : ((typeof throwTest262Error) != ('undefined')) ? (throwTest262Error) : (undefined)}));
return temp_5382152883170197455;
}
codealchemist_log_type_post('-7380401436805991172', ({}));
