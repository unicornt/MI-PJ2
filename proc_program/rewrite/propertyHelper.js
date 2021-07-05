import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
function verifyProperty(obj, name, desc, options){
assert((arguments.length) > (2), 'verifyProperty should receive at least 3 arguments: obj, name, and descriptor');
codealchemist_log_type_pre('-1032837199533133024', ({v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
var originalDesc = Object.getOwnPropertyDescriptor(obj, name);
codealchemist_log_type_post('-1032837199533133024', ({v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('-7690412831852535950', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
var nameStr = String(name);
codealchemist_log_type_post('-7690412831852535950', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof nameStr) != ('undefined')) ? (nameStr) : (undefined)}));
if((desc) === (undefined)){
assert.sameValue(originalDesc, undefined, (("obj['") + (nameStr)) + ("'] descriptor should be undefined"));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
assert(Object.prototype.hasOwnProperty.call(obj, name), ("obj should have an own property ") + (nameStr));
assert.notSameValue(desc, null, "The desc argument should be an object or undefined, null");
assert.sameValue(typeof desc, "object", ("The desc argument should be an object or undefined, ") + (String(desc)));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var failures = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_pre('-722871642301636078', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v4 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v3 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(Object.prototype.hasOwnProperty.call(desc, 'value')){
codealchemist_log_type_pre('7205458819175893783', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v3 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v0 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('-2226359465460699883', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v3 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v0 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(! isSameValue(desc.value, originalDesc.value)){
codealchemist_log_type_pre('6107062188678738906', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_pre('-1308417168808826821', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
failures.push(("descriptor value should be ") + (desc.value));
codealchemist_log_type_post('-1308417168808826821', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_post('6107062188678738906', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
}
codealchemist_log_type_post('-2226359465460699883', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v3 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v0 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_post('7205458819175893783', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v3 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v0 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
}
codealchemist_log_type_post('-722871642301636078', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v4 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v3 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('6147946509653994348', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v6 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v3 : ((typeof isEnumerable) != ('undefined')) ? (isEnumerable) : (undefined), v5 : ((typeof name) != ('undefined')) ? (name) : (undefined), v4 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(Object.prototype.hasOwnProperty.call(desc, 'enumerable')){
codealchemist_log_type_pre('7045265747616247228', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isEnumerable) != ('undefined')) ? (isEnumerable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('758355293685169809', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isEnumerable) != ('undefined')) ? (isEnumerable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(((desc.enumerable) !== (originalDesc.enumerable)) || ((desc.enumerable) !== (isEnumerable(obj, name)))){
codealchemist_log_type_pre('-863628918276677658', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_pre('-7112992394416934226', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
failures.push((('descriptor should ') + ((desc.enumerable) ? ('') : ('not '))) + ('be enumerable'));
codealchemist_log_type_post('-7112992394416934226', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_post('-863628918276677658', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
}
codealchemist_log_type_post('758355293685169809', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isEnumerable) != ('undefined')) ? (isEnumerable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_post('7045265747616247228', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isEnumerable) != ('undefined')) ? (isEnumerable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
}
codealchemist_log_type_post('6147946509653994348', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v6 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v3 : ((typeof isEnumerable) != ('undefined')) ? (isEnumerable) : (undefined), v5 : ((typeof name) != ('undefined')) ? (name) : (undefined), v4 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('3157177079189529179', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v6 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v3 : ((typeof isWritable) != ('undefined')) ? (isWritable) : (undefined), v5 : ((typeof name) != ('undefined')) ? (name) : (undefined), v4 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(Object.prototype.hasOwnProperty.call(desc, 'writable')){
codealchemist_log_type_pre('-1620772360436387219', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isWritable) != ('undefined')) ? (isWritable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('5197168199583431122', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isWritable) != ('undefined')) ? (isWritable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(((desc.writable) !== (originalDesc.writable)) || ((desc.writable) !== (isWritable(obj, name)))){
codealchemist_log_type_pre('-5361927446803292987', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_pre('5115111285283287019', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
failures.push((('descriptor should ') + ((desc.writable) ? ('') : ('not '))) + ('be writable'));
codealchemist_log_type_post('5115111285283287019', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_post('-5361927446803292987', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
}
codealchemist_log_type_post('5197168199583431122', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isWritable) != ('undefined')) ? (isWritable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_post('-1620772360436387219', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isWritable) != ('undefined')) ? (isWritable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
}
codealchemist_log_type_post('3157177079189529179', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v6 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v3 : ((typeof isWritable) != ('undefined')) ? (isWritable) : (undefined), v5 : ((typeof name) != ('undefined')) ? (name) : (undefined), v4 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('4927211996157151149', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v6 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v3 : ((typeof isConfigurable) != ('undefined')) ? (isConfigurable) : (undefined), v5 : ((typeof name) != ('undefined')) ? (name) : (undefined), v4 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(Object.prototype.hasOwnProperty.call(desc, 'configurable')){
codealchemist_log_type_pre('254254144102113254', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isConfigurable) != ('undefined')) ? (isConfigurable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('6498356657458115335', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isConfigurable) != ('undefined')) ? (isConfigurable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if(((desc.configurable) !== (originalDesc.configurable)) || ((desc.configurable) !== (isConfigurable(obj, name)))){
codealchemist_log_type_pre('4888392445233713842', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_pre('6508626255779708049', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
failures.push((('descriptor should ') + ((desc.configurable) ? ('') : ('not '))) + ('be configurable'));
codealchemist_log_type_post('6508626255779708049', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
codealchemist_log_type_post('4888392445233713842', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v0 : ((typeof failures) != ('undefined')) ? (failures) : (undefined)}));
}
codealchemist_log_type_post('6498356657458115335', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isConfigurable) != ('undefined')) ? (isConfigurable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_post('254254144102113254', ({v0 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v5 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v2 : ((typeof isConfigurable) != ('undefined')) ? (isConfigurable) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
}
codealchemist_log_type_post('4927211996157151149', ({v1 : ((typeof desc) != ('undefined')) ? (desc) : (undefined), v6 : ((typeof failures) != ('undefined')) ? (failures) : (undefined), v3 : ((typeof isConfigurable) != ('undefined')) ? (isConfigurable) : (undefined), v5 : ((typeof name) != ('undefined')) ? (name) : (undefined), v4 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
assert(! failures.length, failures.join('; '));
codealchemist_log_type_pre('6775670410859989826', ({v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v4 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
if((options) && (options.restore)){
codealchemist_log_type_pre('-4373339196802431062', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('-9128387972608720018', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
Object.defineProperty(obj, name, originalDesc);
codealchemist_log_type_post('-9128387972608720018', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_post('-4373339196802431062', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
}
codealchemist_log_type_post('6775670410859989826', ({v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v4 : ((typeof originalDesc) != ('undefined')) ? (originalDesc) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
function isConfigurable(obj, name){
codealchemist_log_type_pre('5305980718429271320', ({}));
var hasOwnProperty = Object.prototype.hasOwnProperty;
codealchemist_log_type_post('5305980718429271320', ({v0 : ((typeof hasOwnProperty) != ('undefined')) ? (hasOwnProperty) : (undefined)}));
try{
codealchemist_log_type_pre('-5472933328348519636', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
delete obj[name];
codealchemist_log_type_post('-5472933328348519636', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
}catch(e){
if(! (e) instanceof (TypeError)){
$ERROR(("Expected TypeError, got ") + (e));
}
}
codealchemist_log_type_pre('1343612893594055193', ({v0 : ((typeof hasOwnProperty) != ('undefined')) ? (hasOwnProperty) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
var temp_1343612893594055193 = ! hasOwnProperty.call(obj, name);
codealchemist_log_type_post('1343612893594055193', ({v0 : ((typeof hasOwnProperty) != ('undefined')) ? (hasOwnProperty) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
return temp_1343612893594055193;
}
codealchemist_log_type_pre('705784799819851451', ({}));
function isEnumerable(obj, name){
codealchemist_log_type_pre('1685436347889488454', ({}));
var stringCheck = false;
codealchemist_log_type_post('1685436347889488454', ({v0 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined)}));
codealchemist_log_type_pre('-5603619626688175488', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
if((typeof name) === ("string")){
codealchemist_log_type_pre('-6251951497641544546', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('7601366169561190160', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
for(var x in obj){
codealchemist_log_type_pre('-1735398952972695463', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('8766511159250480027', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
if((x) === (name)){
codealchemist_log_type_pre('3146237425097110247', ({}));
codealchemist_log_type_pre('-7643690174167014527', ({}));
(stringCheck) = true;
codealchemist_log_type_post('-7643690174167014527', ({v0 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined)}));
break ;
codealchemist_log_type_post('3146237425097110247', ({v0 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined)}));
}
codealchemist_log_type_post('8766511159250480027', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('-1735398952972695463', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('7601366169561190160', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('-6251951497641544546', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}else {
codealchemist_log_type_pre('-582395116167789489', ({}));
codealchemist_log_type_pre('-7643690174167014527', ({}));
(stringCheck) = true;
codealchemist_log_type_post('-7643690174167014527', ({v0 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined)}));
codealchemist_log_type_post('-582395116167789489', ({v0 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined)}));
}
codealchemist_log_type_post('-5603619626688175488', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('8772615539209995995', ({v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined)}));
var temp_8772615539209995995 = ((stringCheck) && (Object.prototype.hasOwnProperty.call(obj, name))) && (Object.prototype.propertyIsEnumerable.call(obj, name));
codealchemist_log_type_post('8772615539209995995', ({v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof stringCheck) != ('undefined')) ? (stringCheck) : (undefined)}));
return temp_8772615539209995995;
}
codealchemist_log_type_post('705784799819851451', ({}));
codealchemist_log_type_pre('-706121291394424767', ({}));
function isSameValue(a, b){
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
}
codealchemist_log_type_post('-706121291394424767', ({}));
codealchemist_log_type_pre('-2238239991287203553', ({}));
var __isArray = Array.isArray;
codealchemist_log_type_post('-2238239991287203553', ({v0 : ((typeof __isArray) != ('undefined')) ? (__isArray) : (undefined)}));
function isWritable(obj, name, verifyProp, value){
codealchemist_log_type_pre('-3944840829736553913', ({v1 : ((typeof __isArray) != ('undefined')) ? (__isArray) : (undefined), v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
var unlikelyValue = ((__isArray(obj)) && ((name) === ("length"))) ? ((Math.pow(2, 32)) - (1)) : ("unlikelyValue");
codealchemist_log_type_post('-3944840829736553913', ({v1 : ((typeof __isArray) != ('undefined')) ? (__isArray) : (undefined), v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof unlikelyValue) != ('undefined')) ? (unlikelyValue) : (undefined)}));
codealchemist_log_type_pre('7440369743734661475', ({v2 : ((typeof unlikelyValue) != ('undefined')) ? (unlikelyValue) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var newValue = (value) || (unlikelyValue);
codealchemist_log_type_post('7440369743734661475', ({v0 : ((typeof newValue) != ('undefined')) ? (newValue) : (undefined), v2 : ((typeof unlikelyValue) != ('undefined')) ? (unlikelyValue) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('7551535553332241355', ({v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
var hadValue = Object.prototype.hasOwnProperty.call(obj, name);
codealchemist_log_type_post('7551535553332241355', ({v0 : ((typeof hadValue) != ('undefined')) ? (hadValue) : (undefined), v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
var oldValue = obj[name];
codealchemist_log_type_post('8699103116531770005', ({v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var writeSucceeded;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof writeSucceeded) != ('undefined')) ? (writeSucceeded) : (undefined)}));
try{
codealchemist_log_type_pre('7989980307258027978', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof newValue) != ('undefined')) ? (newValue) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj[name]) = newValue;
codealchemist_log_type_post('7989980307258027978', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof newValue) != ('undefined')) ? (newValue) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
}catch(e){
if(! (e) instanceof (TypeError)){
$ERROR(("Expected TypeError, got ") + (e));
}
}
codealchemist_log_type_pre('-6075328237603680406', ({v1 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v5 : ((typeof newValue) != ('undefined')) ? (newValue) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof verifyProp) != ('undefined')) ? (verifyProp) : (undefined)}));
(writeSucceeded) = isSameValue(obj[(verifyProp) || (name)], newValue);
codealchemist_log_type_post('-6075328237603680406', ({v1 : ((typeof isSameValue) != ('undefined')) ? (isSameValue) : (undefined), v4 : ((typeof name) != ('undefined')) ? (name) : (undefined), v5 : ((typeof newValue) != ('undefined')) ? (newValue) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof verifyProp) != ('undefined')) ? (verifyProp) : (undefined), v0 : ((typeof writeSucceeded) != ('undefined')) ? (writeSucceeded) : (undefined)}));
codealchemist_log_type_pre('8344132564978908245', ({v1 : ((typeof hadValue) != ('undefined')) ? (hadValue) : (undefined), v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined), v0 : ((typeof writeSucceeded) != ('undefined')) ? (writeSucceeded) : (undefined)}));
if(writeSucceeded){
codealchemist_log_type_pre('-8787309297143882096', ({v0 : ((typeof hadValue) != ('undefined')) ? (hadValue) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
codealchemist_log_type_pre('4727032633519107217', ({v0 : ((typeof hadValue) != ('undefined')) ? (hadValue) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
if(hadValue){
codealchemist_log_type_pre('-4444457702807847793', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
(obj[name]) = oldValue;
codealchemist_log_type_post('7989980307258027978', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
codealchemist_log_type_post('-4444457702807847793', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
}else {
codealchemist_log_type_pre('-500040057399132373', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-5472933328348519636', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
delete obj[name];
codealchemist_log_type_post('-5472933328348519636', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_post('-500040057399132373', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
}
codealchemist_log_type_post('4727032633519107217', ({v0 : ((typeof hadValue) != ('undefined')) ? (hadValue) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
codealchemist_log_type_post('-8787309297143882096', ({v0 : ((typeof hadValue) != ('undefined')) ? (hadValue) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined)}));
}
codealchemist_log_type_post('8344132564978908245', ({v1 : ((typeof hadValue) != ('undefined')) ? (hadValue) : (undefined), v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof oldValue) != ('undefined')) ? (oldValue) : (undefined), v0 : ((typeof writeSucceeded) != ('undefined')) ? (writeSucceeded) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof writeSucceeded) != ('undefined')) ? (writeSucceeded) : (undefined)}));
var temp_3444589576563574513 = writeSucceeded;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof writeSucceeded) != ('undefined')) ? (writeSucceeded) : (undefined)}));
return temp_3444589576563574513;
}
function verifyEqualTo(obj, name, value){
if(! isSameValue(obj[name], value)){
$ERROR(((((("Expected obj[") + (String(name))) + ("] to equal ")) + (value)) + (", actually ")) + (obj[name]));
}
}
function verifyWritable(obj, name, verifyProp, value){
if(! verifyProp){
assert(Object.getOwnPropertyDescriptor(obj, name).writable, (("Expected obj[") + (String(name))) + ("] to have writable:true."));
}
if(! isWritable(obj, name, verifyProp, value)){
$ERROR((("Expected obj[") + (String(name))) + ("] to be writable, but was not."));
}
}
function verifyNotWritable(obj, name, verifyProp, value){
if(! verifyProp){
assert(! Object.getOwnPropertyDescriptor(obj, name).writable, (("Expected obj[") + (String(name))) + ("] to have writable:false."));
}
if(isWritable(obj, name, verifyProp)){
$ERROR((("Expected obj[") + (String(name))) + ("] NOT to be writable, but was."));
}
}
function verifyEnumerable(obj, name){
assert(Object.getOwnPropertyDescriptor(obj, name).enumerable, (("Expected obj[") + (String(name))) + ("] to have enumerable:true."));
if(! isEnumerable(obj, name)){
$ERROR((("Expected obj[") + (String(name))) + ("] to be enumerable, but was not."));
}
}
function verifyNotEnumerable(obj, name){
assert(! Object.getOwnPropertyDescriptor(obj, name).enumerable, (("Expected obj[") + (String(name))) + ("] to have enumerable:false."));
if(isEnumerable(obj, name)){
$ERROR((("Expected obj[") + (String(name))) + ("] NOT to be enumerable, but was."));
}
}
function verifyConfigurable(obj, name){
assert(Object.getOwnPropertyDescriptor(obj, name).configurable, (("Expected obj[") + (String(name))) + ("] to have configurable:true."));
if(! isConfigurable(obj, name)){
$ERROR((("Expected obj[") + (String(name))) + ("] to be configurable, but was not."));
}
}
function verifyNotConfigurable(obj, name){
assert(! Object.getOwnPropertyDescriptor(obj, name).configurable, (("Expected obj[") + (String(name))) + ("] to have configurable:false."));
if(isConfigurable(obj, name)){
$ERROR((("Expected obj[") + (String(name))) + ("] NOT to be configurable, but was."));
}
}
