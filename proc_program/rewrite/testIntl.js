import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-1349553905058111412', ({v4 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined)}));
function testWithIntlConstructors(f){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var constructors = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
codealchemist_log_type_pre('1730768320543623772', ({v1 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v2 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
[].forEach((function (constructor){
codealchemist_log_type_pre('-837461861679148779', ({v0 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v2 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
if((typeof Intl[constructor]) === ("function")){
codealchemist_log_type_pre('7054506909616155894', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
codealchemist_log_type_pre('4848020642430935553', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
(constructors[constructors.length]) = constructor;
codealchemist_log_type_post('4848020642430935553', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
codealchemist_log_type_post('7054506909616155894', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
}
codealchemist_log_type_post('-837461861679148779', ({v0 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v2 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
}));
codealchemist_log_type_post('1730768320543623772', ({}));
codealchemist_log_type_pre('6927332597295741234', ({v3 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined), v4 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
constructors.forEach((function (constructor){
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v2 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined)}));
var Constructor = Intl[constructor];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v1 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v2 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined)}));
codealchemist_log_type_pre('8500394661078492083', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v3 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
try{
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(Constructor);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('-1422126565812754643', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
(e.message) += ((" (Testing with ") + (constructor)) + (".)");
codealchemist_log_type_post('-1422126565812754643', ({v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
codealchemist_log_type_pre('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var temp_7901106482597517613 = e;
codealchemist_log_type_post('-7901106482597517613', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
throw temp_7901106482597517613;
}
codealchemist_log_type_post('8500394661078492083', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v3 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v2 : ((typeof e) != ('undefined')) ? (e) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}));
codealchemist_log_type_post('6927332597295741234', ({v0 : ((typeof constructors) != ('undefined')) ? (constructors) : (undefined)}));
}
codealchemist_log_type_post('-1349553905058111412', ({}));
function taintDataProperty(obj, property){
Object.defineProperty(obj, property, ({set : (function (value){
$ERROR((("Client code can adversely affect behavior: setter for ") + (property)) + ("."));
}), enumerable : false, configurable : true}));
}
function taintMethod(obj, property){
Object.defineProperty(obj, property, ({value : (function (){
$ERROR((("Client code can adversely affect behavior: method ") + (property)) + ("."));
}), writable : true, enumerable : false, configurable : true}));
}
codealchemist_log_type_pre('-2804642368878717085', ({v4 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined)}));
function taintProperties(properties){
codealchemist_log_type_pre('7571060476158096778', ({v0 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v3 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined)}));
properties.forEach((function (property){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var adaptedProperties = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof adaptedProperties) != ('undefined')) ? (adaptedProperties) : (undefined)}));
codealchemist_log_type_pre('3517698187280114829', ({v0 : ((typeof adaptedProperties) != ('undefined')) ? (adaptedProperties) : (undefined), v2 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined)}));
adaptedProperties.forEach((function (property){
codealchemist_log_type_pre('7477033090035248018', ({v2 : ((typeof property) != ('undefined')) ? (property) : (undefined), v0 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined)}));
taintDataProperty(Object.prototype, property);
codealchemist_log_type_post('7477033090035248018', ({v2 : ((typeof property) != ('undefined')) ? (property) : (undefined), v0 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined)}));
}));
codealchemist_log_type_post('3517698187280114829', ({v0 : ((typeof adaptedProperties) != ('undefined')) ? (adaptedProperties) : (undefined)}));
}));
codealchemist_log_type_post('7571060476158096778', ({v0 : ((typeof properties) != ('undefined')) ? (properties) : (undefined)}));
}
codealchemist_log_type_post('-2804642368878717085', ({}));
codealchemist_log_type_pre('-5636337388281074180', ({v1 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined), v3 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
function taintArray(){
codealchemist_log_type_pre('6898399359655278350', ({v0 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined)}));
taintDataProperty(Array.prototype, "0");
codealchemist_log_type_post('6898399359655278350', ({v0 : ((typeof taintDataProperty) != ('undefined')) ? (taintDataProperty) : (undefined)}));
codealchemist_log_type_pre('7680752453045588481', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
taintMethod(Array.prototype, "indexOf");
codealchemist_log_type_post('7680752453045588481', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
codealchemist_log_type_pre('7986532221469399870', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
taintMethod(Array.prototype, "join");
codealchemist_log_type_post('7986532221469399870', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
codealchemist_log_type_pre('3206856517820657184', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
taintMethod(Array.prototype, "push");
codealchemist_log_type_post('3206856517820657184', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
codealchemist_log_type_pre('2073867176718934598', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
taintMethod(Array.prototype, "slice");
codealchemist_log_type_post('2073867176718934598', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
codealchemist_log_type_pre('2355110233349122414', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
taintMethod(Array.prototype, "sort");
codealchemist_log_type_post('2355110233349122414', ({v0 : ((typeof taintMethod) != ('undefined')) ? (taintMethod) : (undefined)}));
}
codealchemist_log_type_post('-5636337388281074180', ({}));
codealchemist_log_type_pre('913768166880509240', ({}));
function getLocaleSupportInfo(Constructor, options){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var languages = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof languages) != ('undefined')) ? (languages) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var scripts = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var countries = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof countries) != ('undefined')) ? (countries) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var allTags = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined)}));
codealchemist_log_type_pre('7619255972719897154', ({}));
var i, j, k;
codealchemist_log_type_post('7619255972719897154', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('7619255972719897154', ({}));
var language, script, country;
codealchemist_log_type_post('7619255972719897154', ({v2 : ((typeof country) != ('undefined')) ? (country) : (undefined), v0 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('8794226012056090570', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v8 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v1 : ((typeof languages) != ('undefined')) ? (languages) : (undefined), v5 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
for((i) = 0;(i) < (languages.length);i++){
codealchemist_log_type_pre('-3174679339952730278', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v8 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof languages) != ('undefined')) ? (languages) : (undefined), v5 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof languages) != ('undefined')) ? (languages) : (undefined)}));
(language) = languages[i];
codealchemist_log_type_post('4856296336223464786', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof languages) != ('undefined')) ? (languages) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
allTags.push(language);
codealchemist_log_type_post('-8479843880734066566', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_pre('3689435308459420416', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v6 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
for((j) = 0;(j) < (scripts.length);j++){
codealchemist_log_type_pre('-1481872037342986079', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v6 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
(script) = scripts[j];
codealchemist_log_type_post('4856296336223464786', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined), v1 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
codealchemist_log_type_pre('-5839235731849885853', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
allTags.push(((language) + ("-")) + (script));
codealchemist_log_type_post('-5839235731849885853', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-5541399119870392907', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
for((k) = 0;(k) < (countries.length);k++){
codealchemist_log_type_pre('7811202180854926365', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
(country) = countries[k];
codealchemist_log_type_post('4856296336223464786', ({v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v0 : ((typeof country) != ('undefined')) ? (country) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('8785987558941782417', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v3 : ((typeof country) != ('undefined')) ? (country) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
allTags.push(((((language) + ("-")) + (script)) + ("-")) + (country));
codealchemist_log_type_post('8785987558941782417', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v3 : ((typeof country) != ('undefined')) ? (country) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_post('7811202180854926365', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v0 : ((typeof country) != ('undefined')) ? (country) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('-5541399119870392907', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof country) != ('undefined')) ? (country) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_post('-1481872037342986079', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v6 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v7 : ((typeof country) != ('undefined')) ? (country) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v5 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined), v1 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
}
codealchemist_log_type_post('3689435308459420416', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v6 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v7 : ((typeof country) != ('undefined')) ? (country) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v5 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof script) != ('undefined')) ? (script) : (undefined), v1 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
codealchemist_log_type_pre('6931177917122562488', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
for((k) = 0;(k) < (countries.length);k++){
codealchemist_log_type_pre('-8026246279150574238', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
(country) = countries[k];
codealchemist_log_type_post('4856296336223464786', ({v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v0 : ((typeof country) != ('undefined')) ? (country) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('-5839235731849885853', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v2 : ((typeof country) != ('undefined')) ? (country) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
allTags.push(((language) + ("-")) + (country));
codealchemist_log_type_post('-5839235731849885853', ({v0 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v2 : ((typeof country) != ('undefined')) ? (country) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_post('-8026246279150574238', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v0 : ((typeof country) != ('undefined')) ? (country) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
}
codealchemist_log_type_post('6931177917122562488', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v1 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v2 : ((typeof country) != ('undefined')) ? (country) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_post('-3174679339952730278', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v8 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v9 : ((typeof country) != ('undefined')) ? (country) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof j) != ('undefined')) ? (j) : (undefined), v7 : ((typeof k) != ('undefined')) ? (k) : (undefined), v0 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof languages) != ('undefined')) ? (languages) : (undefined), v6 : ((typeof script) != ('undefined')) ? (script) : (undefined), v5 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
}
codealchemist_log_type_post('8794226012056090570', ({v3 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v8 : ((typeof countries) != ('undefined')) ? (countries) : (undefined), v9 : ((typeof country) != ('undefined')) ? (country) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof j) != ('undefined')) ? (j) : (undefined), v7 : ((typeof k) != ('undefined')) ? (k) : (undefined), v2 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof languages) != ('undefined')) ? (languages) : (undefined), v6 : ((typeof script) != ('undefined')) ? (script) : (undefined), v5 : ((typeof scripts) != ('undefined')) ? (scripts) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var supported = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof supported) != ('undefined')) ? (supported) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var byFallback = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var unsupported = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
codealchemist_log_type_pre('6929369316165839572', ({v4 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v1 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v7 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v5 : ((typeof options) != ('undefined')) ? (options) : (undefined), v6 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v8 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
for((i) = 0;(i) < (allTags.length);i++){
codealchemist_log_type_pre('7547046799931996649', ({v4 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v1 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v7 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v5 : ((typeof options) != ('undefined')) ? (options) : (undefined), v6 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v8 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var request = allTags[i];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof request) != ('undefined')) ? (request) : (undefined)}));
codealchemist_log_type_pre('-6835356638015336271', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v2 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
var result = new Constructor([], options).resolvedOptions().locale;
codealchemist_log_type_post('-6835356638015336271', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v2 : ((typeof options) != ('undefined')) ? (options) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6972041471040402884', ({v3 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v0 : ((typeof request) != ('undefined')) ? (request) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v4 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
if((request) === (result)){
codealchemist_log_type_pre('4536863424409027421', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof supported) != ('undefined')) ? (supported) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof supported) != ('undefined')) ? (supported) : (undefined)}));
supported.push(request);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof supported) != ('undefined')) ? (supported) : (undefined)}));
codealchemist_log_type_post('4536863424409027421', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof supported) != ('undefined')) ? (supported) : (undefined)}));
}else {
codealchemist_log_type_pre('-7595066031965993257', ({v2 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v0 : ((typeof request) != ('undefined')) ? (request) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
if((request.indexOf(result)) === (0)){
codealchemist_log_type_pre('4536863424409027421', ({v0 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v1 : ((typeof request) != ('undefined')) ? (request) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v0 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v1 : ((typeof request) != ('undefined')) ? (request) : (undefined)}));
byFallback.push(request);
codealchemist_log_type_post('-8479843880734066566', ({v0 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v1 : ((typeof request) != ('undefined')) ? (request) : (undefined)}));
codealchemist_log_type_post('4536863424409027421', ({v0 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v1 : ((typeof request) != ('undefined')) ? (request) : (undefined)}));
}else {
codealchemist_log_type_pre('4536863424409027421', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
unsupported.push(request);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
codealchemist_log_type_post('4536863424409027421', ({v1 : ((typeof request) != ('undefined')) ? (request) : (undefined), v0 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
}
codealchemist_log_type_post('-7595066031965993257', ({v2 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v0 : ((typeof request) != ('undefined')) ? (request) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
}
codealchemist_log_type_post('-6972041471040402884', ({v3 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v0 : ((typeof request) != ('undefined')) ? (request) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v4 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
codealchemist_log_type_post('7547046799931996649', ({v4 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v1 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v7 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v5 : ((typeof options) != ('undefined')) ? (options) : (undefined), v0 : ((typeof request) != ('undefined')) ? (request) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v6 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v8 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
}
codealchemist_log_type_post('6929369316165839572', ({v4 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v1 : ((typeof allTags) != ('undefined')) ? (allTags) : (undefined), v7 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v5 : ((typeof options) != ('undefined')) ? (options) : (undefined), v2 : ((typeof request) != ('undefined')) ? (request) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v6 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v8 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
codealchemist_log_type_pre('7972016625436481953', ({v1 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v0 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v2 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
var temp_7972016625436481953 = ({supported : supported, byFallback : byFallback, unsupported : unsupported});
codealchemist_log_type_post('7972016625436481953', ({v1 : ((typeof byFallback) != ('undefined')) ? (byFallback) : (undefined), v0 : ((typeof supported) != ('undefined')) ? (supported) : (undefined), v2 : ((typeof unsupported) != ('undefined')) ? (unsupported) : (undefined)}));
return temp_7972016625436481953;
}
codealchemist_log_type_post('913768166880509240', ({}));
function getInvalidLanguageTags(){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var invalidLanguageTags = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined)}));
for(var i = 0;(i) < (invalidLanguageTags.length);++i){
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined)}));
var invalidTag = invalidLanguageTags[i];
codealchemist_log_type_post('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined), v0 : ((typeof invalidTag) != ('undefined')) ? (invalidTag) : (undefined)}));
assert(! isCanonicalizedStructurallyValidLanguageTag(invalidTag), (("Test data \"") + (invalidTag)) + ("\" is a canonicalized and structurally valid language tag."));
}
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined)}));
var temp_3444589576563574513 = invalidLanguageTags;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_pre('7223055389080623502', ({}));
function isCanonicalizedStructurallyValidLanguageTag(locale){
codealchemist_log_type_pre('1996582727823848569', ({}));
var alpha = "[a-z]", digit = "[0-9]", alphanum = "[a-z0-9]", variant = ((((("(") + (alphanum)) + ("{5,8}|(?:")) + (digit)) + (alphanum)) + ("{3}))"), region = (((("(") + (alpha)) + ("{2}|")) + (digit)) + ("{3})"), script = (("(") + (alpha)) + ("{4})"), language = (((("(") + (alpha)) + ("{2,3}|")) + (alpha)) + ("{5,8})"), privateuse = "(x(-[a-z0-9]{1,8})+)", singleton = (("(") + (digit)) + ("|[a-wy-z])"), attribute = (("(") + (alphanum)) + ("{3,8})"), keyword = ((((("(") + (alphanum)) + (alpha)) + ("(-")) + (alphanum)) + ("{3,8})*)"), unicode_locale_extensions = (((((("(u((-") + (keyword)) + (")+|((-")) + (attribute)) + (")+(-")) + (keyword)) + (")*)))"), tlang = (((((((("(") + (language)) + ("(-")) + (script)) + (")?(-")) + (region)) + (")?(-")) + (variant)) + (")*)"), tfield = ((((("(") + (alpha)) + (digit)) + ("(-")) + (alphanum)) + ("{3,8})+)"), transformed_extensions = (((((("(t((-") + (tlang)) + ("(-")) + (tfield)) + (")*)|(-")) + (tfield)) + (")+))"), other_singleton = (("(") + (digit)) + ("|[a-sv-wy-z])"), other_extensions = (((("(") + (other_singleton)) + ("(-")) + (alphanum)) + ("{2,8})+)"), extension = (((((("(") + (unicode_locale_extensions)) + ("|")) + (transformed_extensions)) + ("|")) + (other_extensions)) + (")"), locale_id = (((((((((((language) + ("(-")) + (script)) + (")?(-")) + (region)) + (")?(-")) + (variant)) + (")*(-")) + (extension)) + (")*(-")) + (privateuse)) + (")?"), languageTag = (("^(") + (locale_id)) + (")$"), languageTagRE = new RegExp(languageTag, "i");
codealchemist_log_type_post('1996582727823848569', ({v0 : ((typeof alpha) != ('undefined')) ? (alpha) : (undefined), v2 : ((typeof alphanum) != ('undefined')) ? (alphanum) : (undefined), v9 : ((typeof attribute) != ('undefined')) ? (attribute) : (undefined), v1 : ((typeof digit) != ('undefined')) ? (digit) : (undefined), v17 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v10 : ((typeof keyword) != ('undefined')) ? (keyword) : (undefined), v6 : ((typeof language) != ('undefined')) ? (language) : (undefined), v19 : ((typeof languageTag) != ('undefined')) ? (languageTag) : (undefined), v20 : ((typeof languageTagRE) != ('undefined')) ? (languageTagRE) : (undefined), v18 : ((typeof locale_id) != ('undefined')) ? (locale_id) : (undefined), v16 : ((typeof other_extensions) != ('undefined')) ? (other_extensions) : (undefined), v15 : ((typeof other_singleton) != ('undefined')) ? (other_singleton) : (undefined), v7 : ((typeof privateuse) != ('undefined')) ? (privateuse) : (undefined), v4 : ((typeof region) != ('undefined')) ? (region) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined), v8 : ((typeof singleton) != ('undefined')) ? (singleton) : (undefined), v13 : ((typeof tfield) != ('undefined')) ? (tfield) : (undefined), v12 : ((typeof tlang) != ('undefined')) ? (tlang) : (undefined), v14 : ((typeof transformed_extensions) != ('undefined')) ? (transformed_extensions) : (undefined), v11 : ((typeof unicode_locale_extensions) != ('undefined')) ? (unicode_locale_extensions) : (undefined), v3 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
codealchemist_log_type_pre('8331520463882696514', ({v2 : ((typeof alphanum) != ('undefined')) ? (alphanum) : (undefined), v1 : ((typeof singleton) != ('undefined')) ? (singleton) : (undefined), v6 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
var duplicateSingleton = (((("-") + (singleton)) + ("-(.*-)?\\1(?!")) + (alphanum)) + (")"), duplicateSingletonRE = new RegExp(duplicateSingleton, "i"), duplicateVariant = (((((((("(") + (alphanum)) + ("{2,8}-)+")) + (variant)) + ("-(")) + (alphanum)) + ("{2,8}-)*\\2(?!")) + (alphanum)) + (")"), duplicateVariantRE = new RegExp(duplicateVariant, "i");
codealchemist_log_type_post('8331520463882696514', ({v2 : ((typeof alphanum) != ('undefined')) ? (alphanum) : (undefined), v0 : ((typeof duplicateSingleton) != ('undefined')) ? (duplicateSingleton) : (undefined), v3 : ((typeof duplicateSingletonRE) != ('undefined')) ? (duplicateSingletonRE) : (undefined), v5 : ((typeof duplicateVariant) != ('undefined')) ? (duplicateVariant) : (undefined), v7 : ((typeof duplicateVariantRE) != ('undefined')) ? (duplicateVariantRE) : (undefined), v1 : ((typeof singleton) != ('undefined')) ? (singleton) : (undefined), v6 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
codealchemist_log_type_pre('-1046877435785332109', ({v2 : ((typeof alpha) != ('undefined')) ? (alpha) : (undefined), v3 : ((typeof digit) != ('undefined')) ? (digit) : (undefined)}));
var transformKeyRE = new RegExp(((("^") + (alpha)) + (digit)) + ("$"), "i");
codealchemist_log_type_post('-1046877435785332109', ({v2 : ((typeof alpha) != ('undefined')) ? (alpha) : (undefined), v3 : ((typeof digit) != ('undefined')) ? (digit) : (undefined), v0 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
codealchemist_log_type_pre('4439292744666457778', ({v3 : ((typeof duplicateSingletonRE) != ('undefined')) ? (duplicateSingletonRE) : (undefined), v4 : ((typeof duplicateVariantRE) != ('undefined')) ? (duplicateVariantRE) : (undefined), v2 : ((typeof languageTagRE) != ('undefined')) ? (languageTagRE) : (undefined)}));
function isStructurallyValidLanguageTag(locale){
codealchemist_log_type_pre('-5140564788054355984', ({v0 : ((typeof languageTagRE) != ('undefined')) ? (languageTagRE) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
if(! languageTagRE.test(locale)){
codealchemist_log_type_pre('-6808902147229783520', ({}));
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
codealchemist_log_type_post('-6808902147229783520', ({}));
}
codealchemist_log_type_post('-5140564788054355984', ({v0 : ((typeof languageTagRE) != ('undefined')) ? (languageTagRE) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
codealchemist_log_type_pre('-8257008394551338256', ({v0 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
(locale) = locale.split(/-x-/)[0];
codealchemist_log_type_post('-8257008394551338256', ({v0 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
codealchemist_log_type_pre('-6759780133488112874', ({v0 : ((typeof duplicateSingletonRE) != ('undefined')) ? (duplicateSingletonRE) : (undefined), v2 : ((typeof duplicateVariantRE) != ('undefined')) ? (duplicateVariantRE) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
var temp_6759780133488112874 = (! duplicateSingletonRE.test(locale)) && (! duplicateVariantRE.test(locale));
codealchemist_log_type_post('-6759780133488112874', ({v0 : ((typeof duplicateSingletonRE) != ('undefined')) ? (duplicateSingletonRE) : (undefined), v2 : ((typeof duplicateVariantRE) != ('undefined')) ? (duplicateVariantRE) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
return temp_6759780133488112874;
}
codealchemist_log_type_post('4439292744666457778', ({}));
codealchemist_log_type_pre('-7533313675893449005', ({}));
var __tagMappings = ({"art-lojban" : "jbo", "cel-gaulish" : "xtg", "zh-guoyu" : "zh", "zh-hakka" : "hak", "zh-xiang" : "hsn"});
codealchemist_log_type_post('-7533313675893449005', ({v0 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined)}));
codealchemist_log_type_pre('695263674395852244', ({}));
var __languageMappings = ({"aam" : "aas", "aar" : "aa", "abk" : "ab", "adp" : "dz", "afr" : "af", "aju" : "jrb", "aka" : "ak", "alb" : "sq", "als" : "sq", "amh" : "am", "ara" : "ar", "arb" : "ar", "arg" : "an", "arm" : "hy", "asd" : "snz", "asm" : "as", "aue" : "ktz", "ava" : "av", "ave" : "ae", "aym" : "ay", "ayr" : "ay", "ayx" : "nun", "aze" : "az", "azj" : "az", "bak" : "ba", "bam" : "bm", "baq" : "eu", "bcc" : "bal", "bcl" : "bik", "bel" : "be", "ben" : "bn", "bgm" : "bcg", "bh" : "bho", "bih" : "bho", "bis" : "bi", "bjd" : "drl", "bod" : "bo", "bos" : "bs", "bre" : "br", "bul" : "bg", "bur" : "my", "bxk" : "luy", "bxr" : "bua", "cat" : "ca", "ccq" : "rki", "ces" : "cs", "cha" : "ch", "che" : "ce", "chi" : "zh", "chu" : "cu", "chv" : "cv", "cjr" : "mom", "cka" : "cmr", "cld" : "syr", "cmk" : "xch", "cmn" : "zh", "cor" : "kw", "cos" : "co", "coy" : "pij", "cqu" : "quh", "cre" : "cr", "cwd" : "cr", "cym" : "cy", "cze" : "cs", "dan" : "da", "deu" : "de", "dgo" : "doi", "dhd" : "mwr", "dik" : "din", "diq" : "zza", "dit" : "dif", "div" : "dv", "drh" : "mn", "dut" : "nl", "dzo" : "dz", "ekk" : "et", "ell" : "el", "emk" : "man", "eng" : "en", "epo" : "eo", "esk" : "ik", "est" : "et", "eus" : "eu", "ewe" : "ee", "fao" : "fo", "fas" : "fa", "fat" : "ak", "fij" : "fj", "fin" : "fi", "fra" : "fr", "fre" : "fr", "fry" : "fy", "fuc" : "ff", "ful" : "ff", "gav" : "dev", "gaz" : "om", "gbo" : "grb", "geo" : "ka", "ger" : "de", "gfx" : "vaj", "ggn" : "gvr", "gla" : "gd", "gle" : "ga", "glg" : "gl", "glv" : "gv", "gno" : "gon", "gre" : "el", "grn" : "gn", "gti" : "nyc", "gug" : "gn", "guj" : "gu", "guv" : "duz", "gya" : "gba", "hat" : "ht", "hau" : "ha", "hdn" : "hai", "hea" : "hmn", "heb" : "he", "her" : "hz", "him" : "srx", "hin" : "hi", "hmo" : "ho", "hrr" : "jal", "hrv" : "hr", "hun" : "hu", "hye" : "hy", "ibi" : "opa", "ibo" : "ig", "ice" : "is", "ido" : "io", "iii" : "ii", "ike" : "iu", "iku" : "iu", "ile" : "ie", "ilw" : "gal", "in" : "id", "ina" : "ia", "ind" : "id", "ipk" : "ik", "isl" : "is", "ita" : "it", "iw" : "he", "jav" : "jv", "jeg" : "oyb", "ji" : "yi", "jpn" : "ja", "jw" : "jv", "kal" : "kl", "kan" : "kn", "kas" : "ks", "kat" : "ka", "kau" : "kr", "kaz" : "kk", "kgc" : "tdf", "kgh" : "kml", "khk" : "mn", "khm" : "km", "kik" : "ki", "kin" : "rw", "kir" : "ky", "kmr" : "ku", "knc" : "kr", "kng" : "kg", "knn" : "kok", "koj" : "kwv", "kom" : "kv", "kon" : "kg", "kor" : "ko", "kpv" : "kv", "krm" : "bmf", "ktr" : "dtp", "kua" : "kj", "kur" : "ku", "kvs" : "gdj", "kwq" : "yam", "kxe" : "tvd", "kzj" : "dtp", "kzt" : "dtp", "lao" : "lo", "lat" : "la", "lav" : "lv", "lbk" : "bnc", "lii" : "raq", "lim" : "li", "lin" : "ln", "lit" : "lt", "llo" : "ngt", "lmm" : "rmx", "ltz" : "lb", "lub" : "lu", "lug" : "lg", "lvs" : "lv", "mac" : "mk", "mah" : "mh", "mal" : "ml", "mao" : "mi", "mar" : "mr", "may" : "ms", "meg" : "cir", "mhr" : "chm", "mkd" : "mk", "mlg" : "mg", "mlt" : "mt", "mnk" : "man", "mo" : "ro", "mol" : "ro", "mon" : "mn", "mri" : "mi", "msa" : "ms", "mst" : "mry", "mup" : "raj", "mwj" : "vaj", "mya" : "my", "myd" : "aog", "myt" : "mry", "nad" : "xny", "nau" : "na", "nav" : "nv", "nbl" : "nr", "ncp" : "kdz", "nde" : "nd", "ndo" : "ng", "nep" : "ne", "nld" : "nl", "nno" : "nn", "nns" : "nbr", "nnx" : "ngv", "no" : "nb", "nob" : "nb", "nor" : "nb", "npi" : "ne", "nts" : "pij", "nya" : "ny", "oci" : "oc", "ojg" : "oj", "oji" : "oj", "ori" : "or", "orm" : "om", "ory" : "or", "oss" : "os", "oun" : "vaj", "pan" : "pa", "pbu" : "ps", "pcr" : "adx", "per" : "fa", "pes" : "fa", "pli" : "pi", "plt" : "mg", "pmc" : "huw", "pmu" : "phr", "pnb" : "lah", "pol" : "pl", "por" : "pt", "ppa" : "bfy", "ppr" : "lcq", "pry" : "prt", "pus" : "ps", "puz" : "pub", "que" : "qu", "quz" : "qu", "rmy" : "rom", "roh" : "rm", "ron" : "ro", "rum" : "ro", "run" : "rn", "rus" : "ru", "sag" : "sg", "san" : "sa", "sca" : "hle", "scc" : "sr", "scr" : "hr", "sin" : "si", "skk" : "oyb", "slk" : "sk", "slo" : "sk", "slv" : "sl", "sme" : "se", "smo" : "sm", "sna" : "sn", "snd" : "sd", "som" : "so", "sot" : "st", "spa" : "es", "spy" : "kln", "sqi" : "sq", "src" : "sc", "srd" : "sc", "srp" : "sr", "ssw" : "ss", "sun" : "su", "swa" : "sw", "swe" : "sv", "swh" : "sw", "tah" : "ty", "tam" : "ta", "tat" : "tt", "tdu" : "dtp", "tel" : "te", "tgk" : "tg", "tgl" : "fil", "tha" : "th", "thc" : "tpo", "thx" : "oyb", "tib" : "bo", "tie" : "ras", "tir" : "ti", "tkk" : "twm", "tl" : "fil", "tlw" : "weo", "tmp" : "tyj", "tne" : "kak", "ton" : "to", "tsf" : "taj", "tsn" : "tn", "tso" : "ts", "ttq" : "tmh", "tuk" : "tk", "tur" : "tr", "tw" : "ak", "twi" : "ak", "uig" : "ug", "ukr" : "uk", "umu" : "del", "uok" : "ema", "urd" : "ur", "uzb" : "uz", "uzn" : "uz", "ven" : "ve", "vie" : "vi", "vol" : "vo", "wel" : "cy", "wln" : "wa", "wol" : "wo", "xba" : "cax", "xho" : "xh", "xia" : "acn", "xkh" : "waw", "xpe" : "kpe", "xsj" : "suj", "xsl" : "den", "ybd" : "rki", "ydd" : "yi", "yid" : "yi", "yma" : "lrr", "ymt" : "mtm", "yor" : "yo", "yos" : "zom", "yuu" : "yug", "zai" : "zap", "zha" : "za", "zho" : "zh", "zsm" : "ms", "zul" : "zu", "zyb" : "za"});
codealchemist_log_type_post('695263674395852244', ({v0 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined)}));
codealchemist_log_type_pre('-4964541387386551632', ({}));
var __regionMappings = ({"004" : "AF", "008" : "AL", "010" : "AQ", "012" : "DZ", "016" : "AS", "020" : "AD", "024" : "AO", "028" : "AG", "031" : "AZ", "032" : "AR", "036" : "AU", "040" : "AT", "044" : "BS", "048" : "BH", "050" : "BD", "051" : "AM", "052" : "BB", "056" : "BE", "060" : "BM", "062" : "034", "064" : "BT", "068" : "BO", "070" : "BA", "072" : "BW", "074" : "BV", "076" : "BR", "084" : "BZ", "086" : "IO", "090" : "SB", "092" : "VG", "096" : "BN", "100" : "BG", "104" : "MM", "108" : "BI", "112" : "BY", "116" : "KH", "120" : "CM", "124" : "CA", "132" : "CV", "136" : "KY", "140" : "CF", "144" : "LK", "148" : "TD", "152" : "CL", "156" : "CN", "158" : "TW", "162" : "CX", "166" : "CC", "170" : "CO", "174" : "KM", "175" : "YT", "178" : "CG", "180" : "CD", "184" : "CK", "188" : "CR", "191" : "HR", "192" : "CU", "196" : "CY", "203" : "CZ", "204" : "BJ", "208" : "DK", "212" : "DM", "214" : "DO", "218" : "EC", "222" : "SV", "226" : "GQ", "230" : "ET", "231" : "ET", "232" : "ER", "233" : "EE", "234" : "FO", "238" : "FK", "239" : "GS", "242" : "FJ", "246" : "FI", "248" : "AX", "249" : "FR", "250" : "FR", "254" : "GF", "258" : "PF", "260" : "TF", "262" : "DJ", "266" : "GA", "268" : "GE", "270" : "GM", "275" : "PS", "276" : "DE", "278" : "DE", "280" : "DE", "288" : "GH", "292" : "GI", "296" : "KI", "300" : "GR", "304" : "GL", "308" : "GD", "312" : "GP", "316" : "GU", "320" : "GT", "324" : "GN", "328" : "GY", "332" : "HT", "334" : "HM", "336" : "VA", "340" : "HN", "344" : "HK", "348" : "HU", "352" : "IS", "356" : "IN", "360" : "ID", "364" : "IR", "368" : "IQ", "372" : "IE", "376" : "IL", "380" : "IT", "384" : "CI", "388" : "JM", "392" : "JP", "398" : "KZ", "400" : "JO", "404" : "KE", "408" : "KP", "410" : "KR", "414" : "KW", "417" : "KG", "418" : "LA", "422" : "LB", "426" : "LS", "428" : "LV", "430" : "LR", "434" : "LY", "438" : "LI", "440" : "LT", "442" : "LU", "446" : "MO", "450" : "MG", "454" : "MW", "458" : "MY", "462" : "MV", "466" : "ML", "470" : "MT", "474" : "MQ", "478" : "MR", "480" : "MU", "484" : "MX", "492" : "MC", "496" : "MN", "498" : "MD", "499" : "ME", "500" : "MS", "504" : "MA", "508" : "MZ", "512" : "OM", "516" : "NA", "520" : "NR", "524" : "NP", "528" : "NL", "531" : "CW", "533" : "AW", "534" : "SX", "535" : "BQ", "540" : "NC", "548" : "VU", "554" : "NZ", "558" : "NI", "562" : "NE", "566" : "NG", "570" : "NU", "574" : "NF", "578" : "NO", "580" : "MP", "581" : "UM", "583" : "FM", "584" : "MH", "585" : "PW", "586" : "PK", "591" : "PA", "598" : "PG", "600" : "PY", "604" : "PE", "608" : "PH", "612" : "PN", "616" : "PL", "620" : "PT", "624" : "GW", "626" : "TL", "630" : "PR", "634" : "QA", "638" : "RE", "642" : "RO", "643" : "RU", "646" : "RW", "652" : "BL", "654" : "SH", "659" : "KN", "660" : "AI", "662" : "LC", "663" : "MF", "666" : "PM", "670" : "VC", "674" : "SM", "678" : "ST", "682" : "SA", "686" : "SN", "688" : "RS", "690" : "SC", "694" : "SL", "702" : "SG", "703" : "SK", "704" : "VN", "705" : "SI", "706" : "SO", "710" : "ZA", "716" : "ZW", "720" : "YE", "724" : "ES", "728" : "SS", "729" : "SD", "732" : "EH", "736" : "SD", "740" : "SR", "744" : "SJ", "748" : "SZ", "752" : "SE", "756" : "CH", "760" : "SY", "762" : "TJ", "764" : "TH", "768" : "TG", "772" : "TK", "776" : "TO", "780" : "TT", "784" : "AE", "788" : "TN", "792" : "TR", "795" : "TM", "796" : "TC", "798" : "TV", "800" : "UG", "804" : "UA", "807" : "MK", "818" : "EG", "826" : "GB", "830" : "JE", "831" : "GG", "832" : "JE", "833" : "IM", "834" : "TZ", "840" : "US", "850" : "VI", "854" : "BF", "858" : "UY", "860" : "UZ", "862" : "VE", "876" : "WF", "882" : "WS", "886" : "YE", "887" : "YE", "891" : "RS", "894" : "ZM", "958" : "AA", "959" : "QM", "960" : "QN", "962" : "QP", "963" : "QQ", "964" : "QR", "965" : "QS", "966" : "QT", "967" : "EU", "968" : "QV", "969" : "QW", "970" : "QX", "971" : "QY", "972" : "QZ", "973" : "XA", "974" : "XB", "975" : "XC", "976" : "XD", "977" : "XE", "978" : "XF", "979" : "XG", "980" : "XH", "981" : "XI", "982" : "XJ", "983" : "XK", "984" : "XL", "985" : "XM", "986" : "XN", "987" : "XO", "988" : "XP", "989" : "XQ", "990" : "XR", "991" : "XS", "992" : "XT", "993" : "XU", "994" : "XV", "995" : "XW", "996" : "XX", "997" : "XY", "998" : "XZ", "999" : "ZZ", "BU" : "MM", "CS" : "RS", "CT" : "KI", "DD" : "DE", "DY" : "BJ", "FQ" : "AQ", "FX" : "FR", "HV" : "BF", "JT" : "UM", "MI" : "UM", "NH" : "VU", "NQ" : "AQ", "PU" : "UM", "PZ" : "PA", "QU" : "EU", "RH" : "ZW", "TP" : "TL", "UK" : "GB", "VD" : "VN", "WK" : "UM", "YD" : "YE", "YU" : "RS", "ZR" : "CD"});
codealchemist_log_type_post('-4964541387386551632', ({v0 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined)}));
codealchemist_log_type_pre('-1607915399393212996', ({}));
var __complexLanguageMappings = ({"cnr" : ({language : "sr", region : "ME"}), "drw" : ({language : "fa", region : "AF"}), "hbs" : ({language : "sr", script : "Latn"}), "prs" : ({language : "fa", region : "AF"}), "sh" : ({language : "sr", script : "Latn"}), "swc" : ({language : "sw", region : "CD"}), "tnf" : ({language : "fa", region : "AF"})});
codealchemist_log_type_post('-1607915399393212996', ({v0 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined)}));
codealchemist_log_type_pre('-8715238252826678372', ({}));
var __complexRegionMappings = ({"172" : ({default : "RU", "ab" : "GE", "az" : "AZ", "be" : "BY", "crh" : "UA", "gag" : "MD", "got" : "UA", "hy" : "AM", "ji" : "UA", "ka" : "GE", "kaa" : "UZ", "kk" : "KZ", "ku-Yezi" : "GE", "ky" : "KG", "os" : "GE", "rue" : "UA", "sog" : "UZ", "tg" : "TJ", "tk" : "TM", "tkr" : "AZ", "tly" : "AZ", "ttt" : "AZ", "ug-Cyrl" : "KZ", "uk" : "UA", "und-Armn" : "AM", "und-Chrs" : "UZ", "und-Geor" : "GE", "und-Goth" : "UA", "und-Sogd" : "UZ", "und-Sogo" : "UZ", "und-Yezi" : "GE", "uz" : "UZ", "xco" : "UZ", "xmf" : "GE"}), "200" : ({default : "CZ", "sk" : "SK"}), "530" : ({default : "CW", "vic" : "SX"}), "532" : ({default : "CW", "vic" : "SX"}), "536" : ({default : "SA", "akk" : "IQ", "ckb" : "IQ", "ku-Arab" : "IQ", "mis" : "IQ", "syr" : "IQ", "und-Hatr" : "IQ", "und-Syrc" : "IQ", "und-Xsux" : "IQ"}), "582" : ({default : "FM", "mh" : "MH", "pau" : "PW"}), "810" : ({default : "RU", "ab" : "GE", "az" : "AZ", "be" : "BY", "crh" : "UA", "et" : "EE", "gag" : "MD", "got" : "UA", "hy" : "AM", "ji" : "UA", "ka" : "GE", "kaa" : "UZ", "kk" : "KZ", "ku-Yezi" : "GE", "ky" : "KG", "lt" : "LT", "ltg" : "LV", "lv" : "LV", "os" : "GE", "rue" : "UA", "sgs" : "LT", "sog" : "UZ", "tg" : "TJ", "tk" : "TM", "tkr" : "AZ", "tly" : "AZ", "ttt" : "AZ", "ug-Cyrl" : "KZ", "uk" : "UA", "und-Armn" : "AM", "und-Chrs" : "UZ", "und-Geor" : "GE", "und-Goth" : "UA", "und-Sogd" : "UZ", "und-Sogo" : "UZ", "und-Yezi" : "GE", "uz" : "UZ", "vro" : "EE", "xco" : "UZ", "xmf" : "GE"}), "890" : ({default : "RS", "bs" : "BA", "hr" : "HR", "mk" : "MK", "sl" : "SI"}), "AN" : ({default : "CW", "vic" : "SX"}), "NT" : ({default : "SA", "akk" : "IQ", "ckb" : "IQ", "ku-Arab" : "IQ", "mis" : "IQ", "syr" : "IQ", "und-Hatr" : "IQ", "und-Syrc" : "IQ", "und-Xsux" : "IQ"}), "PC" : ({default : "FM", "mh" : "MH", "pau" : "PW"}), "SU" : ({default : "RU", "ab" : "GE", "az" : "AZ", "be" : "BY", "crh" : "UA", "et" : "EE", "gag" : "MD", "got" : "UA", "hy" : "AM", "ji" : "UA", "ka" : "GE", "kaa" : "UZ", "kk" : "KZ", "ku-Yezi" : "GE", "ky" : "KG", "lt" : "LT", "ltg" : "LV", "lv" : "LV", "os" : "GE", "rue" : "UA", "sgs" : "LT", "sog" : "UZ", "tg" : "TJ", "tk" : "TM", "tkr" : "AZ", "tly" : "AZ", "ttt" : "AZ", "ug-Cyrl" : "KZ", "uk" : "UA", "und-Armn" : "AM", "und-Chrs" : "UZ", "und-Geor" : "GE", "und-Goth" : "UA", "und-Sogd" : "UZ", "und-Sogo" : "UZ", "und-Yezi" : "GE", "uz" : "UZ", "vro" : "EE", "xco" : "UZ", "xmf" : "GE"})});
codealchemist_log_type_post('-8715238252826678372', ({v0 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined)}));
codealchemist_log_type_pre('-1059839373998701967', ({}));
var __variantMappings = ({"aaland" : ({type : "region", replacement : "AX"}), "arevela" : ({type : "language", replacement : "hy"}), "arevmda" : ({type : "language", replacement : "hyw"}), "heploc" : ({type : "variant", replacement : "alalc97"}), "polytoni" : ({type : "variant", replacement : "polyton"})});
codealchemist_log_type_post('-1059839373998701967', ({v0 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined)}));
codealchemist_log_type_pre('433119298216834511', ({}));
var __unicodeMappings = ({"ca" : ({"ethiopic-amete-alem" : "ethioaa", "islamicc" : "islamic-civil"}), "kb" : ({"yes" : "true"}), "kc" : ({"yes" : "true"}), "kh" : ({"yes" : "true"}), "kk" : ({"yes" : "true"}), "kn" : ({"yes" : "true"}), "ks" : ({"primary" : "level1", "tertiary" : "level3"}), "ms" : ({"imperial" : "uksystem"}), "rg" : ({"cn11" : "cnbj", "cn12" : "cntj", "cn13" : "cnhe", "cn14" : "cnsx", "cn15" : "cnmn", "cn21" : "cnln", "cn22" : "cnjl", "cn23" : "cnhl", "cn31" : "cnsh", "cn32" : "cnjs", "cn33" : "cnzj", "cn34" : "cnah", "cn35" : "cnfj", "cn36" : "cnjx", "cn37" : "cnsd", "cn41" : "cnha", "cn42" : "cnhb", "cn43" : "cnhn", "cn44" : "cngd", "cn45" : "cngx", "cn46" : "cnhi", "cn50" : "cncq", "cn51" : "cnsc", "cn52" : "cngz", "cn53" : "cnyn", "cn54" : "cnxz", "cn61" : "cnsn", "cn62" : "cngs", "cn63" : "cnqh", "cn64" : "cnnx", "cn65" : "cnxj", "cz10a" : "cz110", "cz10b" : "cz111", "cz10c" : "cz112", "cz10d" : "cz113", "cz10e" : "cz114", "cz10f" : "cz115", "cz611" : "cz663", "cz612" : "cz632", "cz613" : "cz633", "cz614" : "cz634", "cz615" : "cz635", "cz621" : "cz641", "cz622" : "cz642", "cz623" : "cz643", "cz624" : "cz644", "cz626" : "cz646", "cz627" : "cz647", "czjc" : "cz31", "czjm" : "cz64", "czka" : "cz41", "czkr" : "cz52", "czli" : "cz51", "czmo" : "cz80", "czol" : "cz71", "czpa" : "cz53", "czpl" : "cz32", "czpr" : "cz10", "czst" : "cz20", "czus" : "cz42", "czvy" : "cz63", "czzl" : "cz72", "fra" : "frges", "frb" : "frnaq", "frc" : "frara", "frd" : "frbfc", "fre" : "frbre", "frf" : "frcvl", "frg" : "frges", "frh" : "frcor", "fri" : "frbfc", "frj" : "fridf", "frk" : "frocc", "frl" : "frnaq", "frm" : "frges", "frn" : "frocc", "fro" : "frhdf", "frp" : "frnor", "frq" : "frnor", "frr" : "frpdl", "frs" : "frhdf", "frt" : "frnaq", "fru" : "frpac", "frv" : "frara", "laxn" : "laxs", "lud" : "lucl", "lug" : "luec", "lul" : "luca", "mrnkc" : "mr13", "no23" : "no50", "nzn" : "nzauk", "nzs" : "nzcan", "omba" : "ombj", "omsh" : "omsj", "plds" : "pl02", "plkp" : "pl04", "pllb" : "pl08", "plld" : "pl10", "pllu" : "pl06", "plma" : "pl12", "plmz" : "pl14", "plop" : "pl16", "plpd" : "pl20", "plpk" : "pl18", "plpm" : "pl22", "plsk" : "pl26", "plsl" : "pl24", "plwn" : "pl28", "plwp" : "pl30", "plzp" : "pl32", "tteto" : "tttob", "ttrcm" : "ttmrc", "ttwto" : "tttob", "twkhq" : "twkhh", "twtnq" : "twtnn", "twtpq" : "twnwt", "twtxq" : "twtxg"}), "sd" : ({"cn11" : "cnbj", "cn12" : "cntj", "cn13" : "cnhe", "cn14" : "cnsx", "cn15" : "cnmn", "cn21" : "cnln", "cn22" : "cnjl", "cn23" : "cnhl", "cn31" : "cnsh", "cn32" : "cnjs", "cn33" : "cnzj", "cn34" : "cnah", "cn35" : "cnfj", "cn36" : "cnjx", "cn37" : "cnsd", "cn41" : "cnha", "cn42" : "cnhb", "cn43" : "cnhn", "cn44" : "cngd", "cn45" : "cngx", "cn46" : "cnhi", "cn50" : "cncq", "cn51" : "cnsc", "cn52" : "cngz", "cn53" : "cnyn", "cn54" : "cnxz", "cn61" : "cnsn", "cn62" : "cngs", "cn63" : "cnqh", "cn64" : "cnnx", "cn65" : "cnxj", "cz10a" : "cz110", "cz10b" : "cz111", "cz10c" : "cz112", "cz10d" : "cz113", "cz10e" : "cz114", "cz10f" : "cz115", "cz611" : "cz663", "cz612" : "cz632", "cz613" : "cz633", "cz614" : "cz634", "cz615" : "cz635", "cz621" : "cz641", "cz622" : "cz642", "cz623" : "cz643", "cz624" : "cz644", "cz626" : "cz646", "cz627" : "cz647", "czjc" : "cz31", "czjm" : "cz64", "czka" : "cz41", "czkr" : "cz52", "czli" : "cz51", "czmo" : "cz80", "czol" : "cz71", "czpa" : "cz53", "czpl" : "cz32", "czpr" : "cz10", "czst" : "cz20", "czus" : "cz42", "czvy" : "cz63", "czzl" : "cz72", "fra" : "frges", "frb" : "frnaq", "frc" : "frara", "frd" : "frbfc", "fre" : "frbre", "frf" : "frcvl", "frg" : "frges", "frh" : "frcor", "fri" : "frbfc", "frj" : "fridf", "frk" : "frocc", "frl" : "frnaq", "frm" : "frges", "frn" : "frocc", "fro" : "frhdf", "frp" : "frnor", "frq" : "frnor", "frr" : "frpdl", "frs" : "frhdf", "frt" : "frnaq", "fru" : "frpac", "frv" : "frara", "laxn" : "laxs", "lud" : "lucl", "lug" : "luec", "lul" : "luca", "mrnkc" : "mr13", "no23" : "no50", "nzn" : "nzauk", "nzs" : "nzcan", "omba" : "ombj", "omsh" : "omsj", "plds" : "pl02", "plkp" : "pl04", "pllb" : "pl08", "plld" : "pl10", "pllu" : "pl06", "plma" : "pl12", "plmz" : "pl14", "plop" : "pl16", "plpd" : "pl20", "plpk" : "pl18", "plpm" : "pl22", "plsk" : "pl26", "plsl" : "pl24", "plwn" : "pl28", "plwp" : "pl30", "plzp" : "pl32", "tteto" : "tttob", "ttrcm" : "ttmrc", "ttwto" : "tttob", "twkhq" : "twkhh", "twtnq" : "twtnn", "twtpq" : "twnwt", "twtxq" : "twtxg"}), "tz" : ({"aqams" : "nzakl", "cnckg" : "cnsha", "cnhrb" : "cnsha", "cnkhg" : "cnurc", "cuba" : "cuhav", "egypt" : "egcai", "eire" : "iedub", "est" : "utcw05", "gmt0" : "gmt", "hongkong" : "hkhkg", "hst" : "utcw10", "iceland" : "isrey", "iran" : "irthr", "israel" : "jeruslm", "jamaica" : "jmkin", "japan" : "jptyo", "libya" : "lytip", "mst" : "utcw07", "navajo" : "usden", "poland" : "plwaw", "portugal" : "ptlis", "prc" : "cnsha", "roc" : "twtpe", "rok" : "krsel", "turkey" : "trist", "uct" : "utc", "usnavajo" : "usden", "zulu" : "utc"})});
codealchemist_log_type_post('433119298216834511', ({v0 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined)}));
codealchemist_log_type_pre('1596636849843096015', ({}));
var __transformMappings = ({"d0" : ({"name" : "charname"}), "m0" : ({"names" : "prprname"})});
codealchemist_log_type_post('1596636849843096015', ({v0 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined)}));
codealchemist_log_type_pre('-995130830756911172', ({v10 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v14 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v9 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined), v13 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v2 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined), v30 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v27 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v18 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v28 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
function canonicalizeLanguageTag(locale){
codealchemist_log_type_pre('-5233415867786176101', ({v0 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
(locale) = locale.toLowerCase();
codealchemist_log_type_post('-5233415867786176101', ({v0 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
codealchemist_log_type_pre('-3162966460234442713', ({v0 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
if(__tagMappings.hasOwnProperty(locale)){
codealchemist_log_type_pre('85258616802795530', ({v0 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
codealchemist_log_type_pre('-4596394495774815668', ({v0 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
var temp_4596394495774815668 = __tagMappings[locale];
codealchemist_log_type_post('-4596394495774815668', ({v0 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
return temp_4596394495774815668;
codealchemist_log_type_post('85258616802795530', ({v0 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
}
codealchemist_log_type_post('-3162966460234442713', ({v0 : ((typeof __tagMappings) != ('undefined')) ? (__tagMappings) : (undefined), v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
codealchemist_log_type_pre('-3755561051135992260', ({v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
var subtags = locale.split("-");
codealchemist_log_type_post('-3755561051135992260', ({v1 : ((typeof locale) != ('undefined')) ? (locale) : (undefined), v0 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('8887107388399914408', ({}));
var i = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var language;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var script;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var region;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_pre('2154765805682019734', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
while((i) < (subtags.length)){
codealchemist_log_type_pre('5578909684995480181', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var subtag = subtags[i];
codealchemist_log_type_post('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('-7957174191035721339', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
if((i) === (0)){
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
(language) = subtag;
codealchemist_log_type_post('670706250746082504', ({v0 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v0 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
}else {
codealchemist_log_type_pre('8382684581604826695', ({v0 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
if(((subtag.length) === (2)) || ((subtag.length) === (3))){
codealchemist_log_type_pre('-4645141916974757024', ({v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
codealchemist_log_type_pre('4126408827920793525', ({v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
(region) = subtag.toUpperCase();
codealchemist_log_type_post('4126408827920793525', ({v0 : ((typeof region) != ('undefined')) ? (region) : (undefined), v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
codealchemist_log_type_post('-4645141916974757024', ({v0 : ((typeof region) != ('undefined')) ? (region) : (undefined), v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
}else {
codealchemist_log_type_pre('8485808542659685032', ({v0 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
if(((subtag.length) === (4)) && (! (("0") <= (subtag[0])) && ((subtag[0]) <= ("9")))){
codealchemist_log_type_pre('-8171883010057098324', ({v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
codealchemist_log_type_pre('-7322311093477165059', ({v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
(script) = (subtag[0].toUpperCase()) + (subtag.substring(1).toLowerCase());
codealchemist_log_type_post('-7322311093477165059', ({v0 : ((typeof script) != ('undefined')) ? (script) : (undefined), v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
codealchemist_log_type_post('-8171883010057098324', ({v0 : ((typeof script) != ('undefined')) ? (script) : (undefined), v1 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
}else {
codealchemist_log_type_pre('4166711031795831939', ({}));
break ;
codealchemist_log_type_post('4166711031795831939', ({}));
}
codealchemist_log_type_post('8485808542659685032', ({v1 : ((typeof script) != ('undefined')) ? (script) : (undefined), v0 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
}
codealchemist_log_type_post('8382684581604826695', ({v1 : ((typeof region) != ('undefined')) ? (region) : (undefined), v2 : ((typeof script) != ('undefined')) ? (script) : (undefined), v0 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
}
codealchemist_log_type_post('-7957174191035721339', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v3 : ((typeof region) != ('undefined')) ? (region) : (undefined), v4 : ((typeof script) != ('undefined')) ? (script) : (undefined), v2 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
i++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('5578909684995480181', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof language) != ('undefined')) ? (language) : (undefined), v4 : ((typeof region) != ('undefined')) ? (region) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined), v0 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
}
codealchemist_log_type_post('2154765805682019734', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof language) != ('undefined')) ? (language) : (undefined), v4 : ((typeof region) != ('undefined')) ? (region) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined), v2 : ((typeof subtag) != ('undefined')) ? (subtag) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('-4762153422741269792', ({v2 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v0 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v6 : ((typeof region) != ('undefined')) ? (region) : (undefined), v4 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if(__languageMappings.hasOwnProperty(language)){
codealchemist_log_type_pre('-6663086569268860435', ({v1 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined), v0 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_pre('-3250679504549003683', ({v1 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined), v0 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
(language) = __languageMappings[language];
codealchemist_log_type_post('-3250679504549003683', ({v1 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined), v0 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_post('-6663086569268860435', ({v1 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined), v0 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
}else {
codealchemist_log_type_pre('1187104649201196067', ({v0 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v5 : ((typeof region) != ('undefined')) ? (region) : (undefined), v3 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if(__complexLanguageMappings.hasOwnProperty(language)){
codealchemist_log_type_pre('4819626855464547980', ({v1 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v2 : ((typeof language) != ('undefined')) ? (language) : (undefined), v5 : ((typeof region) != ('undefined')) ? (region) : (undefined), v3 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v2 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
var mapping = __complexLanguageMappings[language];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v2 : ((typeof language) != ('undefined')) ? (language) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_pre('9211386102190313575', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
(language) = mapping.language;
codealchemist_log_type_post('9211386102190313575', ({v0 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_pre('-2866452306197499920', ({v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if(((script) === (undefined)) && (mapping.hasOwnProperty("script"))){
codealchemist_log_type_pre('-254350772988071266', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_pre('3516947032903124047', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
(script) = mapping.script;
codealchemist_log_type_post('3516947032903124047', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_post('-254350772988071266', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('-2866452306197499920', ({v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('5722224272777401856', ({v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
if(((region) === (undefined)) && (mapping.hasOwnProperty("region"))){
codealchemist_log_type_pre('5743004365510148534', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_pre('-4400303120612029852', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
(region) = mapping.region;
codealchemist_log_type_post('-4400303120612029852', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_post('5743004365510148534', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
}
codealchemist_log_type_post('5722224272777401856', ({v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_post('4819626855464547980', ({v1 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v2 : ((typeof language) != ('undefined')) ? (language) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v5 : ((typeof region) != ('undefined')) ? (region) : (undefined), v3 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('1187104649201196067', ({v0 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v5 : ((typeof region) != ('undefined')) ? (region) : (undefined), v3 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('-4762153422741269792', ({v2 : ((typeof __complexLanguageMappings) != ('undefined')) ? (__complexLanguageMappings) : (undefined), v0 : ((typeof __languageMappings) != ('undefined')) ? (__languageMappings) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v3 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v6 : ((typeof region) != ('undefined')) ? (region) : (undefined), v4 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-7331222087131014284', ({v3 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v2 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v6 : ((typeof language) != ('undefined')) ? (language) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined), v7 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if((region) !== (undefined)){
codealchemist_log_type_pre('6181600146934202139', ({v2 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v0 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v5 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined), v6 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-4033645136187530122', ({v2 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v0 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v5 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined), v6 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if(__regionMappings.hasOwnProperty(region)){
codealchemist_log_type_pre('-6663086569268860435', ({v1 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_pre('-3250679504549003683', ({v1 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
(region) = __regionMappings[region];
codealchemist_log_type_post('-3250679504549003683', ({v1 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_post('-6663086569268860435', ({v1 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
}else {
codealchemist_log_type_pre('8047231509952083036', ({v0 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if(__complexRegionMappings.hasOwnProperty(region)){
codealchemist_log_type_pre('-7010426035070426300', ({v1 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof region) != ('undefined')) ? (region) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v2 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
var mapping = __complexRegionMappings[region];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
var mappingKey = language;
codealchemist_log_type_post('1771060243785805582', ({v1 : ((typeof language) != ('undefined')) ? (language) : (undefined), v0 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined)}));
codealchemist_log_type_pre('-1500347034497286221', ({v2 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if((script) !== (undefined)){
codealchemist_log_type_pre('7049459640310207213', ({v0 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-2229371079461335385', ({v0 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
(mappingKey) += ("-") + (script);
codealchemist_log_type_post('-2229371079461335385', ({v0 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_post('7049459640310207213', ({v0 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('-1500347034497286221', ({v2 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('7568506616528430424', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined)}));
if(mapping.hasOwnProperty(mappingKey)){
codealchemist_log_type_pre('-813411116869186889', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined)}));
(region) = mapping[mappingKey];
codealchemist_log_type_post('4856296336223464786', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_post('-813411116869186889', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
}else {
codealchemist_log_type_pre('1764481399284907531', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_pre('1561485616834722850', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
(region) = mapping.default;
codealchemist_log_type_post('1561485616834722850', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_post('1764481399284907531', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
}
codealchemist_log_type_post('7568506616528430424', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v2 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_post('-7010426035070426300', ({v1 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v2 : ((typeof region) != ('undefined')) ? (region) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('8047231509952083036', ({v0 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v4 : ((typeof language) != ('undefined')) ? (language) : (undefined), v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined), v5 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('-4033645136187530122', ({v2 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v0 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v5 : ((typeof language) != ('undefined')) ? (language) : (undefined), v3 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v4 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined), v6 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_post('6181600146934202139', ({v2 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v0 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v5 : ((typeof language) != ('undefined')) ? (language) : (undefined), v3 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v4 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined), v6 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('-7331222087131014284', ({v3 : ((typeof __complexRegionMappings) != ('undefined')) ? (__complexRegionMappings) : (undefined), v2 : ((typeof __regionMappings) != ('undefined')) ? (__regionMappings) : (undefined), v6 : ((typeof language) != ('undefined')) ? (language) : (undefined), v4 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v5 : ((typeof mappingKey) != ('undefined')) ? (mappingKey) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined), v7 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var variants = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('-6568287386324492636', ({v3 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v5 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
while(((i) < (subtags.length)) && ((subtags[i].length) > (1))){
codealchemist_log_type_pre('1874814848299204602', ({v3 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v5 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var variant = subtags[i];
codealchemist_log_type_post('8699103116531770005', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v0 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
codealchemist_log_type_pre('-3055754493411641567', ({v0 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v1 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v3 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
if(__variantMappings.hasOwnProperty(variant)){
codealchemist_log_type_pre('-7222248397140031449', ({v1 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v2 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v2 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
var mapping = __variantMappings[variant];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
codealchemist_log_type_pre('-8934781131715383041', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
switch(mapping.type){
}
codealchemist_log_type_post('-8934781131715383041', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_post('-7222248397140031449', ({v1 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof variant) != ('undefined')) ? (variant) : (undefined)}));
}else {
codealchemist_log_type_pre('4536863424409027421', ({v1 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
variants.push(variant);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_post('4536863424409027421', ({v1 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
}
codealchemist_log_type_post('-3055754493411641567', ({v0 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v3 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('4029651187185506137', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(i) += 1;
codealchemist_log_type_post('4029651187185506137', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('1874814848299204602', ({v3 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v0 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v5 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
}
codealchemist_log_type_post('-6568287386324492636', ({v3 : ((typeof __variantMappings) != ('undefined')) ? (__variantMappings) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v2 : ((typeof variant) != ('undefined')) ? (variant) : (undefined), v5 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('2844229641199099781', ({v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
variants.sort();
codealchemist_log_type_post('2844229641199099781', ({v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var extensions = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
codealchemist_log_type_pre('8785639598733935362', ({v14 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v9 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v13 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v15 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v11 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
while(((i) < (subtags.length)) && ((subtags[i]) !== ("x"))){
codealchemist_log_type_pre('1698117127766956821', ({v14 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v9 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v13 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v15 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v11 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var extensionStart = i;
codealchemist_log_type_post('1771060243785805582', ({v0 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
i++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('5801810057261313580', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
while(((i) < (subtags.length)) && ((subtags[i].length) > (1))){
codealchemist_log_type_pre('-3531103504444497985', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
i++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-3531103504444497985', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('5801810057261313580', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var extension;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var extensionKey = subtags[extensionStart];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof extensionKey) != ('undefined')) ? (extensionKey) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('6665119214082197669', ({v14 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v9 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v13 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v0 : ((typeof extensionKey) != ('undefined')) ? (extensionKey) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v11 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
if((extensionKey) === ("u")){
codealchemist_log_type_pre('3763511944510716656', ({v8 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('3249177285014201057', ({v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined)}));
var j = (extensionStart) + (1);
codealchemist_log_type_post('3249177285014201057', ({v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5466755154918710838', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
while(((j) < (i)) && ((subtags[j].length) > (2))){
codealchemist_log_type_pre('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
j++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_post('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
}
codealchemist_log_type_post('5466755154918710838', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('-3161676092733371522', ({v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
(extension) = subtags.slice(extensionStart, j).join("-");
codealchemist_log_type_post('-3161676092733371522', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('-2637279608861992257', ({v6 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
while((j) < (i)){
codealchemist_log_type_pre('3147177110447309181', ({v6 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
var keyStart = j;
codealchemist_log_type_post('1771060243785805582', ({v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
j++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5466755154918710838', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
while(((j) < (i)) && ((subtags[j].length) > (2))){
codealchemist_log_type_pre('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
j++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_post('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
}
codealchemist_log_type_post('5466755154918710838', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var key = subtags[keyStart];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('5832132867878073699', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var value = subtags.slice((keyStart) + (1), j).join("-");
codealchemist_log_type_post('5832132867878073699', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-6001112513768616201', ({v0 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(__unicodeMappings.hasOwnProperty(key)){
codealchemist_log_type_pre('5334735009322585324', ({v1 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var mapping = __unicodeMappings[key];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_pre('-2108575074662908429', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(mapping.hasOwnProperty(value)){
codealchemist_log_type_pre('-6663086569268860435', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3250679504549003683', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(value) = mapping[value];
codealchemist_log_type_post('-3250679504549003683', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-6663086569268860435', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-2108575074662908429', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('5334735009322585324', ({v1 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-6001112513768616201', ({v0 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-2229371079461335385', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
(extension) += ("-") + (key);
codealchemist_log_type_post('-2229371079461335385', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_pre('8262524476785373879', ({v1 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(((value) !== ("")) && ((value) !== ("true"))){
codealchemist_log_type_pre('7049459640310207213', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-2229371079461335385', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(extension) += ("-") + (value);
codealchemist_log_type_post('-2229371079461335385', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('7049459640310207213', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8262524476785373879', ({v1 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('3147177110447309181', ({v6 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v4 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v7 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v5 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-2637279608861992257', ({v6 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v4 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v7 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v5 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('3763511944510716656', ({v8 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v4 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v6 : ((typeof key) != ('undefined')) ? (key) : (undefined), v5 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v9 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v7 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}else {
codealchemist_log_type_pre('8061735385100853777', ({v12 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v8 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v0 : ((typeof extensionKey) != ('undefined')) ? (extensionKey) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v5 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v4 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
if((extensionKey) === ("t")){
codealchemist_log_type_pre('-1802538170246769731', ({v11 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v7 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v3 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
codealchemist_log_type_pre('3249177285014201057', ({v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined)}));
var j = (extensionStart) + (1);
codealchemist_log_type_post('3249177285014201057', ({v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('992395011319383184', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v2 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
while(((j) < (i)) && (! transformKeyRE.test(subtags[j]))){
codealchemist_log_type_pre('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
j++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_post('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
}
codealchemist_log_type_post('992395011319383184', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v2 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined)}));
codealchemist_log_type_pre('-5206076030155787381', ({}));
(extension) = "t";
codealchemist_log_type_post('-5206076030155787381', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined)}));
codealchemist_log_type_pre('5832132867878073699', ({v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var transformLanguage = subtags.slice((extensionStart) + (1), j).join("-");
codealchemist_log_type_post('5832132867878073699', ({v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v0 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined)}));
codealchemist_log_type_pre('-3967068031309093759', ({v2 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v1 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined)}));
if((transformLanguage) !== ("")){
codealchemist_log_type_pre('-5660483861446735279', ({v1 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined)}));
codealchemist_log_type_pre('-4344859149953701220', ({v1 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined)}));
(extension) += ("-") + (canonicalizeLanguageTag(transformLanguage).toLowerCase());
codealchemist_log_type_post('-4344859149953701220', ({v1 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined)}));
codealchemist_log_type_post('-5660483861446735279', ({v1 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined)}));
}
codealchemist_log_type_post('-3967068031309093759', ({v2 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v1 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined)}));
codealchemist_log_type_pre('7264742400496034536', ({v6 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
while((j) < (i)){
codealchemist_log_type_pre('-8134188287893769137', ({v6 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
var keyStart = j;
codealchemist_log_type_post('1771060243785805582', ({v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
j++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5466755154918710838', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
while(((j) < (i)) && ((subtags[j].length) > (2))){
codealchemist_log_type_pre('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
j++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_post('-3531103504444497985', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
}
codealchemist_log_type_post('5466755154918710838', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var key = subtags[keyStart];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('5832132867878073699', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
var value = subtags.slice((keyStart) + (1), j).join("-");
codealchemist_log_type_post('5832132867878073699', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-6001112513768616201', ({v0 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(__transformMappings.hasOwnProperty(key)){
codealchemist_log_type_pre('5334735009322585324', ({v1 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var mapping = __transformMappings[key];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined)}));
codealchemist_log_type_pre('-2108575074662908429', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(mapping.hasOwnProperty(value)){
codealchemist_log_type_pre('-6663086569268860435', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3250679504549003683', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(value) = mapping[value];
codealchemist_log_type_post('-3250679504549003683', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-6663086569268860435', ({v1 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-2108575074662908429', ({v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('5334735009322585324', ({v1 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-6001112513768616201', ({v0 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-4822290306515467641', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(extension) += ((("-") + (key)) + ("-")) + (value);
codealchemist_log_type_post('-4822290306515467641', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-8134188287893769137', ({v6 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v4 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v7 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v5 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('7264742400496034536', ({v6 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v8 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v4 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v7 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v3 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v5 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-1802538170246769731', ({v11 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v7 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v5 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v1 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v9 : ((typeof key) != ('undefined')) ? (key) : (undefined), v8 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v12 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v4 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v3 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined), v6 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined), v10 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}else {
codealchemist_log_type_pre('3281923044491465276', ({v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('-3161676092733371522', ({v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
(extension) = subtags.slice(extensionStart, i).join("-");
codealchemist_log_type_post('-3161676092733371522', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_post('3281923044491465276', ({v0 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
}
codealchemist_log_type_post('8061735385100853777', ({v12 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v8 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v6 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof extensionKey) != ('undefined')) ? (extensionKey) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v10 : ((typeof key) != ('undefined')) ? (key) : (undefined), v9 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v13 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v5 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v4 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined), v7 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined), v11 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('6665119214082197669', ({v14 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v9 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v13 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v5 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof extensionKey) != ('undefined')) ? (extensionKey) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v7 : ((typeof key) != ('undefined')) ? (key) : (undefined), v6 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v10 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v4 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v11 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined), v12 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined), v8 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
extensions.push(extension);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v0 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
codealchemist_log_type_post('1698117127766956821', ({v14 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v9 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v13 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v3 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v4 : ((typeof extensionKey) != ('undefined')) ? (extensionKey) : (undefined), v0 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v15 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v5 : ((typeof j) != ('undefined')) ? (j) : (undefined), v7 : ((typeof key) != ('undefined')) ? (key) : (undefined), v6 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v10 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v2 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v11 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined), v12 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined), v8 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('8785639598733935362', ({v14 : ((typeof __transformMappings) != ('undefined')) ? (__transformMappings) : (undefined), v9 : ((typeof __unicodeMappings) != ('undefined')) ? (__unicodeMappings) : (undefined), v13 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v3 : ((typeof extension) != ('undefined')) ? (extension) : (undefined), v4 : ((typeof extensionKey) != ('undefined')) ? (extensionKey) : (undefined), v2 : ((typeof extensionStart) != ('undefined')) ? (extensionStart) : (undefined), v15 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v5 : ((typeof j) != ('undefined')) ? (j) : (undefined), v7 : ((typeof key) != ('undefined')) ? (key) : (undefined), v6 : ((typeof keyStart) != ('undefined')) ? (keyStart) : (undefined), v10 : ((typeof mapping) != ('undefined')) ? (mapping) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined), v11 : ((typeof transformKeyRE) != ('undefined')) ? (transformKeyRE) : (undefined), v12 : ((typeof transformLanguage) != ('undefined')) ? (transformLanguage) : (undefined), v8 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('2844229641199099781', ({v0 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
extensions.sort();
codealchemist_log_type_post('2844229641199099781', ({v0 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var privateUse;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_pre('-1936046051832737025', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
if((i) < (subtags.length)){
codealchemist_log_type_pre('2673072477503091056', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('-8936292928866542131', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
(privateUse) = subtags.slice(i).join("-");
codealchemist_log_type_post('-8936292928866542131', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_post('2673072477503091056', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
}
codealchemist_log_type_post('-1936046051832737025', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined), v1 : ((typeof subtags) != ('undefined')) ? (subtags) : (undefined)}));
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
var canonical = language;
codealchemist_log_type_post('1771060243785805582', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof language) != ('undefined')) ? (language) : (undefined)}));
codealchemist_log_type_pre('-1500347034497286221', ({v2 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
if((script) !== (undefined)){
codealchemist_log_type_pre('7049459640310207213', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-2229371079461335385', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
(canonical) += ("-") + (script);
codealchemist_log_type_post('-2229371079461335385', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_post('7049459640310207213', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
}
codealchemist_log_type_post('-1500347034497286221', ({v2 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof script) != ('undefined')) ? (script) : (undefined)}));
codealchemist_log_type_pre('-1500347034497286221', ({v2 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
if((region) !== (undefined)){
codealchemist_log_type_pre('7049459640310207213', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_pre('-2229371079461335385', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
(canonical) += ("-") + (region);
codealchemist_log_type_post('-2229371079461335385', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_post('7049459640310207213', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
}
codealchemist_log_type_post('-1500347034497286221', ({v2 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof region) != ('undefined')) ? (region) : (undefined)}));
codealchemist_log_type_pre('-1809152101087093926', ({v1 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
if((variants.length) > (0)){
codealchemist_log_type_pre('-2307300502143495483', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('6244032869199462444', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
(canonical) += ("-") + (variants.join("-"));
codealchemist_log_type_post('6244032869199462444', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_post('-2307300502143495483', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
}
codealchemist_log_type_post('-1809152101087093926', ({v1 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof variants) != ('undefined')) ? (variants) : (undefined)}));
codealchemist_log_type_pre('-1809152101087093926', ({v1 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
if((extensions.length) > (0)){
codealchemist_log_type_pre('-2307300502143495483', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
codealchemist_log_type_pre('6244032869199462444', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
(canonical) += ("-") + (extensions.join("-"));
codealchemist_log_type_post('6244032869199462444', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
codealchemist_log_type_post('-2307300502143495483', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
}
codealchemist_log_type_post('-1809152101087093926', ({v1 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof extensions) != ('undefined')) ? (extensions) : (undefined)}));
codealchemist_log_type_pre('7795519380459392832', ({v2 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
if((privateUse) !== (undefined)){
codealchemist_log_type_pre('-5657884004818070863', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_pre('6551322837348194767', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
if((canonical.length) > (0)){
codealchemist_log_type_pre('7049459640310207213', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_pre('-2229371079461335385', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
(canonical) += ("-") + (privateUse);
codealchemist_log_type_post('-2229371079461335385', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_post('7049459640310207213', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
}else {
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
(canonical) = privateUse;
codealchemist_log_type_post('670706250746082504', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
}
codealchemist_log_type_post('6551322837348194767', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_post('-5657884004818070863', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v1 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
}
codealchemist_log_type_post('7795519380459392832', ({v2 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined), v0 : ((typeof privateUse) != ('undefined')) ? (privateUse) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined)}));
var temp_3444589576563574513 = canonical;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof canonical) != ('undefined')) ? (canonical) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-995130830756911172', ({}));
codealchemist_log_type_pre('-917413875920432863', ({v2 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v1 : ((typeof isStructurallyValidLanguageTag) != ('undefined')) ? (isStructurallyValidLanguageTag) : (undefined), v0 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
var temp_917413875920432863 = (((typeof locale) === ("string")) && (isStructurallyValidLanguageTag(locale))) && ((canonicalizeLanguageTag(locale)) === (locale));
codealchemist_log_type_post('-917413875920432863', ({v2 : ((typeof canonicalizeLanguageTag) != ('undefined')) ? (canonicalizeLanguageTag) : (undefined), v1 : ((typeof isStructurallyValidLanguageTag) != ('undefined')) ? (isStructurallyValidLanguageTag) : (undefined), v0 : ((typeof locale) != ('undefined')) ? (locale) : (undefined)}));
return temp_917413875920432863;
}
codealchemist_log_type_post('7223055389080623502', ({}));
codealchemist_log_type_pre('-6014779185095073443', ({}));
function getInvalidLocaleArguments(){
codealchemist_log_type_pre('-857060939854026304', ({}));
function CustomError(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var topLevelErrors = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof topLevelErrors) != ('undefined')) ? (topLevelErrors) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var invalidLanguageTags = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined)}));
codealchemist_log_type_pre('7387006948394570850', ({v1 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined), v0 : ((typeof topLevelErrors) != ('undefined')) ? (topLevelErrors) : (undefined)}));
var temp_7387006948394570850 = topLevelErrors.concat(invalidLanguageTags.map(((tag)=>[])), invalidLanguageTags.map(((tag)=>[])), invalidLanguageTags.map(((tag)=>[])));
codealchemist_log_type_post('7387006948394570850', ({v1 : ((typeof invalidLanguageTags) != ('undefined')) ? (invalidLanguageTags) : (undefined), v0 : ((typeof topLevelErrors) != ('undefined')) ? (topLevelErrors) : (undefined)}));
return temp_7387006948394570850;
}
codealchemist_log_type_post('-6014779185095073443', ({}));
function testOption(Constructor, property, type, values, fallback, testOptions){
codealchemist_log_type_pre('-5531843494491834981', ({v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
var isOptional = ((testOptions) !== (undefined)) && ((testOptions.isOptional) === (true));
codealchemist_log_type_post('-5531843494491834981', ({v0 : ((typeof isOptional) != ('undefined')) ? (isOptional) : (undefined), v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
codealchemist_log_type_pre('-3874390366058074832', ({v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
var noReturn = ((testOptions) !== (undefined)) && ((testOptions.noReturn) === (true));
codealchemist_log_type_post('-3874390366058074832', ({v0 : ((typeof noReturn) != ('undefined')) ? (noReturn) : (undefined), v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
codealchemist_log_type_pre('-2661529533656211606', ({v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
var isILD = ((testOptions) !== (undefined)) && ((testOptions.isILD) === (true));
codealchemist_log_type_post('-2661529533656211606', ({v0 : ((typeof isILD) != ('undefined')) ? (isILD) : (undefined), v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
codealchemist_log_type_pre('-4532199049764378313', ({}));
function addExtraOptions(options, value, testOptions){
codealchemist_log_type_pre('544551174163683211', ({v6 : ((typeof options) != ('undefined')) ? (options) : (undefined), v0 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(((testOptions) !== (undefined)) && ((testOptions.extra) !== (undefined))){
codealchemist_log_type_pre('6538855455221395787', ({v6 : ((typeof options) != ('undefined')) ? (options) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var extra;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined)}));
codealchemist_log_type_pre('4908828785530774936', ({v2 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(((value) !== (undefined)) && ((testOptions.extra[value]) !== (undefined))){
codealchemist_log_type_pre('7603825273496102698', ({v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('2289130276389790120', ({v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(extra) = testOptions.extra[value];
codealchemist_log_type_post('2289130276389790120', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('7603825273496102698', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}else {
codealchemist_log_type_pre('-7095784676427222545', ({v0 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
if((testOptions.extra.any) !== (undefined)){
codealchemist_log_type_pre('7831777429700276147', ({v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
codealchemist_log_type_pre('5752295824085299547', ({v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
(extra) = testOptions.extra.any;
codealchemist_log_type_post('5752295824085299547', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
codealchemist_log_type_post('7831777429700276147', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v1 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
}
codealchemist_log_type_post('-7095784676427222545', ({v2 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v0 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
}
codealchemist_log_type_post('4908828785530774936', ({v3 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v2 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-2976344399133946348', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v4 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
if((extra) !== (undefined)){
codealchemist_log_type_pre('-2399543666267369330', ({v1 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
codealchemist_log_type_pre('-478034890675466019', ({v1 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
Object.getOwnPropertyNames(extra).forEach((function (prop){
codealchemist_log_type_pre('-6222424937319300393', ({v2 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v1 : ((typeof prop) != ('undefined')) ? (prop) : (undefined)}));
(options[prop]) = extra[prop];
codealchemist_log_type_post('-6222424937319300393', ({v2 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v1 : ((typeof prop) != ('undefined')) ? (prop) : (undefined)}));
}));
codealchemist_log_type_post('-478034890675466019', ({v1 : ((typeof extra) != ('undefined')) ? (extra) : (undefined)}));
codealchemist_log_type_post('-2399543666267369330', ({v1 : ((typeof extra) != ('undefined')) ? (extra) : (undefined)}));
}
codealchemist_log_type_post('-2976344399133946348', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined)}));
codealchemist_log_type_post('6538855455221395787', ({v0 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('544551174163683211', ({v2 : ((typeof extra) != ('undefined')) ? (extra) : (undefined), v0 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-4532199049764378313', ({}));
codealchemist_log_type_pre('4342668199268058856', ({}));
var testValues, options, obj, expected, actual, error;
codealchemist_log_type_post('4342668199268058856', ({v4 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v5 : ((typeof error) != ('undefined')) ? (error) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof options) != ('undefined')) ? (options) : (undefined), v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined)}));
codealchemist_log_type_pre('-4029689841729893116', ({v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
if((type) === ("boolean")){
codealchemist_log_type_pre('2129435720623426742', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('8327598499279708768', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
if((values) === (undefined)){
codealchemist_log_type_pre('-5281519104634634149', ({}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(values) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_post('-5281519104634634149', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}
codealchemist_log_type_post('8327598499279708768', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-4568924995233504088', ({v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
(testValues) = values.slice(0);
codealchemist_log_type_post('-4568924995233504088', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-3373179510140912704', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined)}));
testValues.push(888);
codealchemist_log_type_post('-3373179510140912704', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined)}));
codealchemist_log_type_pre('5602296311650621922', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined)}));
testValues.push(0);
codealchemist_log_type_post('5602296311650621922', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined)}));
codealchemist_log_type_post('2129435720623426742', ({v2 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}else {
codealchemist_log_type_pre('2983167475874734809', ({v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
if((type) === ("string")){
codealchemist_log_type_pre('-2832908262734387928', ({v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-4568924995233504088', ({v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
(testValues) = values.slice(0);
codealchemist_log_type_post('-4568924995233504088', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('5989273275000294914', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
testValues.push(({toString : (function (){
codealchemist_log_type_pre('-7417680972464815425', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
var temp_7417680972464815425 = values[0];
codealchemist_log_type_post('-7417680972464815425', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
return temp_7417680972464815425;
})}));
codealchemist_log_type_post('5989273275000294914', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined)}));
codealchemist_log_type_post('-2832908262734387928', ({v0 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}
codealchemist_log_type_post('2983167475874734809', ({v1 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined), v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}
codealchemist_log_type_post('-4029689841729893116', ({v3 : ((typeof testValues) != ('undefined')) ? (testValues) : (undefined), v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
testValues.forEach((function (value){
codealchemist_log_type_pre('-5250398761866457292', ({}));
(options) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v1 : ((typeof property) != ('undefined')) ? (property) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(options[property]) = value;
codealchemist_log_type_post('7989980307258027978', ({v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v1 : ((typeof property) != ('undefined')) ? (property) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('7400639375448880496', ({v0 : ((typeof addExtraOptions) != ('undefined')) ? (addExtraOptions) : (undefined), v1 : ((typeof options) != ('undefined')) ? (options) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
addExtraOptions(options, value, testOptions);
codealchemist_log_type_post('7400639375448880496', ({v0 : ((typeof addExtraOptions) != ('undefined')) ? (addExtraOptions) : (undefined), v1 : ((typeof options) != ('undefined')) ? (options) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1632047624664567327', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
(obj) = new Constructor(undefined, options);
codealchemist_log_type_post('-1632047624664567327', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
if(noReturn){
if(obj.resolvedOptions().hasOwnProperty(property)){
$ERROR((("Option property ") + (property)) + (" is returned, but shouldn't be."));
}
}else {
codealchemist_log_type_pre('7675459217968302866', ({v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof property) != ('undefined')) ? (property) : (undefined)}));
(actual) = obj.resolvedOptions()[property];
codealchemist_log_type_post('7675459217968302866', ({v0 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof property) != ('undefined')) ? (property) : (undefined)}));
if(isILD){
if(((actual) !== (undefined)) && ((values.indexOf(actual)) === (- 1))){
$ERROR((((("Invalid value ") + (actual)) + (" returned for property ")) + (property)) + ("."));
}
}else {
codealchemist_log_type_pre('-8229423786437776862', ({v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if((type) === ("boolean")){
codealchemist_log_type_pre('-7771139558190575135', ({v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3440225798005034315', ({v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(expected) = Boolean(value);
codealchemist_log_type_post('-3440225798005034315', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-7771139558190575135', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}else {
codealchemist_log_type_pre('-1362664818331587370', ({v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if((type) === ("string")){
codealchemist_log_type_pre('-3820616572632778634', ({v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-5221750631462131354', ({v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(expected) = String(value);
codealchemist_log_type_post('-5221750631462131354', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-3820616572632778634', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-1362664818331587370', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-8229423786437776862', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof type) != ('undefined')) ? (type) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(((actual) !== (expected)) && (! (isOptional) && ((actual) === (undefined)))){
$ERROR((((((("Option value ") + (value)) + (" for property ")) + (property)) + (" was not accepted; got ")) + (actual)) + (" instead."));
}
}
}
}));
if((type) === ("string")){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var invalidValues = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined)}));
codealchemist_log_type_pre('-2646519327276351037', ({v1 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
if((values[0].toUpperCase()) !== (values[0])){
codealchemist_log_type_pre('4746985115265368380', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('9134417833756181395', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
invalidValues.push(values[0].toUpperCase());
codealchemist_log_type_post('9134417833756181395', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_post('4746985115265368380', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}else {
codealchemist_log_type_pre('-6569863347736761575', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('5561985192007343089', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
invalidValues.push(values[0].toLowerCase());
codealchemist_log_type_post('5561985192007343089', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_post('-6569863347736761575', ({v0 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}
codealchemist_log_type_post('-2646519327276351037', ({v1 : ((typeof invalidValues) != ('undefined')) ? (invalidValues) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
invalidValues.forEach((function (value){
codealchemist_log_type_pre('-5250398761866457292', ({}));
(options) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v1 : ((typeof property) != ('undefined')) ? (property) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(options[property]) = value;
codealchemist_log_type_post('7989980307258027978', ({v0 : ((typeof options) != ('undefined')) ? (options) : (undefined), v1 : ((typeof property) != ('undefined')) ? (property) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('7400639375448880496', ({v0 : ((typeof addExtraOptions) != ('undefined')) ? (addExtraOptions) : (undefined), v1 : ((typeof options) != ('undefined')) ? (options) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
addExtraOptions(options, value, testOptions);
codealchemist_log_type_post('7400639375448880496', ({v0 : ((typeof addExtraOptions) != ('undefined')) ? (addExtraOptions) : (undefined), v1 : ((typeof options) != ('undefined')) ? (options) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-8352238078044404304', ({}));
(error) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
codealchemist_log_type_pre('-7765293438381100291', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
try{
codealchemist_log_type_pre('-1632047624664567327', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
(obj) = new Constructor(undefined, options);
codealchemist_log_type_post('-1632047624664567327', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
(error) = e;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof e) != ('undefined')) ? (e) : (undefined), v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
}
codealchemist_log_type_post('-7765293438381100291', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v5 : ((typeof error) != ('undefined')) ? (error) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
if((error) === (undefined)){
$ERROR((((("Invalid option value ") + (value)) + (" for property ")) + (property)) + (" was not rejected."));
}else {
if((error.name) !== ("RangeError")){
$ERROR((((((("Invalid option value ") + (value)) + (" for property ")) + (property)) + (" was rejected with wrong error ")) + (error.name)) + ("."));
}
}
}));
}
if(! noReturn){
codealchemist_log_type_pre('-5250398761866457292', ({}));
(options) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
codealchemist_log_type_pre('-7420050539975792531', ({v0 : ((typeof addExtraOptions) != ('undefined')) ? (addExtraOptions) : (undefined), v1 : ((typeof options) != ('undefined')) ? (options) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
addExtraOptions(options, undefined, testOptions);
codealchemist_log_type_post('-7420050539975792531', ({v0 : ((typeof addExtraOptions) != ('undefined')) ? (addExtraOptions) : (undefined), v1 : ((typeof options) != ('undefined')) ? (options) : (undefined), v3 : ((typeof testOptions) != ('undefined')) ? (testOptions) : (undefined)}));
codealchemist_log_type_pre('-1632047624664567327', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
(obj) = new Constructor(undefined, options);
codealchemist_log_type_post('-1632047624664567327', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
codealchemist_log_type_pre('7675459217968302866', ({v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof property) != ('undefined')) ? (property) : (undefined)}));
(actual) = obj.resolvedOptions()[property];
codealchemist_log_type_post('7675459217968302866', ({v0 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof property) != ('undefined')) ? (property) : (undefined)}));
if(! (isOptional) && ((actual) === (undefined))){
if((fallback) !== (undefined)){
if((actual) !== (fallback)){
$ERROR((((((("Option fallback value ") + (fallback)) + (" for property ")) + (property)) + (" was not used; got ")) + (actual)) + (" instead."));
}
}else {
if(((values.indexOf(actual)) === (- 1)) && (! (isILD) && ((actual) === (undefined)))){
$ERROR((((("Invalid value ") + (actual)) + (" returned for property ")) + (property)) + ("."));
}
}
}
}
}
codealchemist_log_type_pre('-2873575392672305138', ({}));
var regExpProperties = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof regExpProperties) != ('undefined')) ? (regExpProperties) : (undefined)}));
codealchemist_log_type_pre('5971993112497374338', ({v3 : ((typeof regExpProperties) != ('undefined')) ? (regExpProperties) : (undefined)}));
var regExpPropertiesDefaultValues = (function (){
codealchemist_log_type_pre('-4372923986958890626', ({}));
var values = Object.create(null);
codealchemist_log_type_post('-4372923986958890626', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-6135089420679313732', ({}));
/(?:)/.test("");
codealchemist_log_type_post('-6135089420679313732', ({}));
codealchemist_log_type_pre('1860356018839264419', ({v0 : ((typeof regExpProperties) != ('undefined')) ? (regExpProperties) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
regExpProperties.forEach((function (property){
codealchemist_log_type_pre('-7930095957191880631', ({v1 : ((typeof property) != ('undefined')) ? (property) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
(values[property]) = RegExp[property];
codealchemist_log_type_post('-7930095957191880631', ({v1 : ((typeof property) != ('undefined')) ? (property) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}));
codealchemist_log_type_post('1860356018839264419', ({v0 : ((typeof regExpProperties) != ('undefined')) ? (regExpProperties) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
var temp_3444589576563574513 = values;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('5971993112497374338', ({v0 : ((typeof regExpPropertiesDefaultValues) != ('undefined')) ? (regExpPropertiesDefaultValues) : (undefined)}));
function testForUnwantedRegExpChanges(testFunc){
codealchemist_log_type_pre('-6135089420679313732', ({}));
/(?:)/.test("");
codealchemist_log_type_post('-6135089420679313732', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof testFunc) != ('undefined')) ? (testFunc) : (undefined)}));
testFunc();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof testFunc) != ('undefined')) ? (testFunc) : (undefined)}));
regExpProperties.forEach((function (property){
if((RegExp[property]) !== (regExpPropertiesDefaultValues[property])){
$ERROR((((("RegExp has unexpected property ") + (property)) + (" with value ")) + (RegExp[property])) + ("."));
}
}));
}
codealchemist_log_type_pre('2475822169901034774', ({}));
function isValidNumberingSystem(name){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var numberingSystems = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof numberingSystems) != ('undefined')) ? (numberingSystems) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var excluded = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof excluded) != ('undefined')) ? (excluded) : (undefined)}));
codealchemist_log_type_pre('6041860383107890427', ({v2 : ((typeof excluded) != ('undefined')) ? (excluded) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof numberingSystems) != ('undefined')) ? (numberingSystems) : (undefined)}));
var temp_6041860383107890427 = ((numberingSystems.indexOf(name)) !== (- 1)) && ((excluded.indexOf(name)) === (- 1));
codealchemist_log_type_post('6041860383107890427', ({v2 : ((typeof excluded) != ('undefined')) ? (excluded) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof numberingSystems) != ('undefined')) ? (numberingSystems) : (undefined)}));
return temp_6041860383107890427;
}
codealchemist_log_type_post('2475822169901034774', ({}));
codealchemist_log_type_pre('2668274777781482038', ({}));
var numberingSystemDigits = ({adlm : "𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙", ahom : "𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹", arab : "٠١٢٣٤٥٦٧٨٩", arabext : "۰۱۲۳۴۵۶۷۸۹", bali : "\u1B50\u1B51\u1B52\u1B53\u1B54\u1B55\u1B56\u1B57\u1B58\u1B59", beng : "০১২৩৪৫৬৭৮৯", bhks : "𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙", brah : "𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯", cakm : "𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿", cham : "꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙", deva : "०१२३४५६७८९", diak : "𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙", fullwide : "０１２３４５６７８９", gong : "𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩", gonm : "𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙", gujr : "૦૧૨૩૪૫૬૭૮૯", guru : "੦੧੨੩੪੫੬੭੮੯", hanidec : "〇一二三四五六七八九", hmng : "𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙", hmnp : "𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉", java : "꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙", kali : "꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉", khmr : "០១២៣៤៥៦៧៨៩", knda : "೦೧೨೩೪೫೬೭೮೯", lana : "᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", lanatham : "᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙", laoo : "໐໑໒໓໔໕໖໗໘໙", latn : "0123456789", lepc : "᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉", limb : "\u1946\u1947\u1948\u1949\u194A\u194B\u194C\u194D\u194E\u194F", mathbold : "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗", mathdbl : "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡", mathmono : "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿", mathsanb : "𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵", mathsans : "𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫", mlym : "൦൧൨൩൪൫൬൭൮൯", modi : "𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙", mong : "᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙", mroo : "𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩", mtei : "꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹", mymr : "၀၁၂၃၄၅၆၇၈၉", mymrshan : "႐႑႒႓႔႕႖႗႘႙", mymrtlng : "꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹", newa : "𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙", nkoo : "߀߁߂߃߄߅߆߇߈߉", olck : "᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙", orya : "୦୧୨୩୪୫୬୭୮୯", osma : "𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩", rohg : "𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹", saur : "꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙", segment : "🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹", shrd : "𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙", sind : "𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹", sinh : "෦෧෨෩෪෫෬෭෮෯", sora : "𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹", sund : "᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹", takr : "𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉", talu : "᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙", tamldec : "௦௧௨௩௪௫௬௭௮௯", telu : "౦౧౨౩౪౫౬౭౮౯", thai : "๐๑๒๓๔๕๖๗๘๙", tibt : "༠༡༢༣༤༥༦༧༨༩", tirh : "𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙", vaii : "꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩", wara : "𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩", wcho : "𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹"});
codealchemist_log_type_post('2668274777781482038', ({v0 : ((typeof numberingSystemDigits) != ('undefined')) ? (numberingSystemDigits) : (undefined)}));
function testNumberFormat(locales, numberingSystems, options, testData){
locales.forEach((function (locale){
numberingSystems.forEach((function (numbering){
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof numbering) != ('undefined')) ? (numbering) : (undefined), v1 : ((typeof numberingSystemDigits) != ('undefined')) ? (numberingSystemDigits) : (undefined)}));
var digits = numberingSystemDigits[numbering];
codealchemist_log_type_post('8699103116531770005', ({v0 : ((typeof digits) != ('undefined')) ? (digits) : (undefined), v2 : ((typeof numbering) != ('undefined')) ? (numbering) : (undefined), v1 : ((typeof numberingSystemDigits) != ('undefined')) ? (numberingSystemDigits) : (undefined)}));
codealchemist_log_type_pre('8969577974488348651', ({v1 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v2 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
var format = new Intl.NumberFormat([], options);
codealchemist_log_type_post('8969577974488348651', ({v1 : ((typeof Intl) != ('undefined')) ? (Intl) : (undefined), v0 : ((typeof format) != ('undefined')) ? (format) : (undefined), v2 : ((typeof options) != ('undefined')) ? (options) : (undefined)}));
function getPatternParts(positive){
codealchemist_log_type_pre('-8913802924926693077', ({v1 : ((typeof positive) != ('undefined')) ? (positive) : (undefined)}));
var n = (positive) ? (1.1) : (- 1.1);
codealchemist_log_type_post('-8913802924926693077', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined), v1 : ((typeof positive) != ('undefined')) ? (positive) : (undefined)}));
codealchemist_log_type_pre('-4834216112077999336', ({v1 : ((typeof format) != ('undefined')) ? (format) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
var formatted = format.format(n);
codealchemist_log_type_post('-4834216112077999336', ({v1 : ((typeof format) != ('undefined')) ? (format) : (undefined), v0 : ((typeof formatted) != ('undefined')) ? (formatted) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_pre('-625241904299258186', ({v1 : ((typeof digits) != ('undefined')) ? (digits) : (undefined)}));
var oneoneRE = (((((((((("([^") + (digits)) + ("]*)[")) + (digits)) + ("]+([^")) + (digits)) + ("]+)[")) + (digits)) + ("]+([^")) + (digits)) + ("]*)");
codealchemist_log_type_post('-625241904299258186', ({v1 : ((typeof digits) != ('undefined')) ? (digits) : (undefined), v0 : ((typeof oneoneRE) != ('undefined')) ? (oneoneRE) : (undefined)}));
codealchemist_log_type_pre('7139602758876902065', ({v1 : ((typeof formatted) != ('undefined')) ? (formatted) : (undefined), v3 : ((typeof oneoneRE) != ('undefined')) ? (oneoneRE) : (undefined)}));
var match = formatted.match(new RegExp(oneoneRE));
codealchemist_log_type_post('7139602758876902065', ({v1 : ((typeof formatted) != ('undefined')) ? (formatted) : (undefined), v0 : ((typeof match) != ('undefined')) ? (match) : (undefined), v3 : ((typeof oneoneRE) != ('undefined')) ? (oneoneRE) : (undefined)}));
if((match) === (null)){
$ERROR(((((((("Unexpected formatted ") + (n)) + (" for ")) + (format.resolvedOptions().locale)) + (" and options ")) + (JSON.stringify(options))) + (": ")) + (formatted));
}
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
var temp_3444589576563574513 = match;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_pre('-5003797143015587681', ({v3 : ((typeof digits) != ('undefined')) ? (digits) : (undefined)}));
function toNumbering(raw){
codealchemist_log_type_pre('-8694677039704960987', ({v2 : ((typeof digits) != ('undefined')) ? (digits) : (undefined), v0 : ((typeof raw) != ('undefined')) ? (raw) : (undefined)}));
var temp_8694677039704960987 = raw.replace(/[0-9]/g, (function (digit){
codealchemist_log_type_pre('2969138953617696378', ({v1 : ((typeof digit) != ('undefined')) ? (digit) : (undefined), v0 : ((typeof digits) != ('undefined')) ? (digits) : (undefined)}));
var temp_2969138953617696378 = digits[(digit.charCodeAt(0)) - ("0".charCodeAt(0))];
codealchemist_log_type_post('2969138953617696378', ({v1 : ((typeof digit) != ('undefined')) ? (digit) : (undefined), v0 : ((typeof digits) != ('undefined')) ? (digits) : (undefined)}));
return temp_2969138953617696378;
}));
codealchemist_log_type_post('-8694677039704960987', ({v0 : ((typeof raw) != ('undefined')) ? (raw) : (undefined)}));
return temp_8694677039704960987;
}
codealchemist_log_type_post('-5003797143015587681', ({}));
codealchemist_log_type_pre('4552718510470948584', ({v4 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
function buildExpected(raw, patternParts){
codealchemist_log_type_pre('-5612665719368346339', ({v1 : ((typeof raw) != ('undefined')) ? (raw) : (undefined)}));
var period = raw.indexOf(".");
codealchemist_log_type_post('-5612665719368346339', ({v0 : ((typeof period) != ('undefined')) ? (period) : (undefined), v1 : ((typeof raw) != ('undefined')) ? (raw) : (undefined)}));
codealchemist_log_type_pre('-3728193046130279301', ({v1 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v0 : ((typeof period) != ('undefined')) ? (period) : (undefined), v3 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v2 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
if((period) === (- 1)){
codealchemist_log_type_pre('-214366104303429090', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
codealchemist_log_type_pre('-7051764909491390885', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
var temp_7051764909491390885 = ((patternParts[1]) + (toNumbering(raw))) + (patternParts[3]);
codealchemist_log_type_post('-7051764909491390885', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
return temp_7051764909491390885;
codealchemist_log_type_post('-214366104303429090', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
}else {
codealchemist_log_type_pre('7097423590351866497', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v3 : ((typeof period) != ('undefined')) ? (period) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
codealchemist_log_type_pre('3591177042493943579', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v3 : ((typeof period) != ('undefined')) ? (period) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
var temp_3591177042493943579 = ((((patternParts[1]) + (toNumbering(raw.substring(0, period)))) + (patternParts[2])) + (toNumbering(raw.substring((period) + (1))))) + (patternParts[3]);
codealchemist_log_type_post('3591177042493943579', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v3 : ((typeof period) != ('undefined')) ? (period) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
return temp_3591177042493943579;
codealchemist_log_type_post('7097423590351866497', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v3 : ((typeof period) != ('undefined')) ? (period) : (undefined), v2 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v1 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
}
codealchemist_log_type_post('-3728193046130279301', ({v1 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v0 : ((typeof period) != ('undefined')) ? (period) : (undefined), v3 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v2 : ((typeof toNumbering) != ('undefined')) ? (toNumbering) : (undefined)}));
}
codealchemist_log_type_post('4552718510470948584', ({}));
if((format.resolvedOptions().numberingSystem) === (numbering)){
codealchemist_log_type_pre('-3322037155894941753', ({v1 : ((typeof getPatternParts) != ('undefined')) ? (getPatternParts) : (undefined)}));
var posPatternParts = getPatternParts(true);
codealchemist_log_type_post('-3322037155894941753', ({v1 : ((typeof getPatternParts) != ('undefined')) ? (getPatternParts) : (undefined), v0 : ((typeof posPatternParts) != ('undefined')) ? (posPatternParts) : (undefined)}));
codealchemist_log_type_pre('7295857511956349671', ({v1 : ((typeof getPatternParts) != ('undefined')) ? (getPatternParts) : (undefined)}));
var negPatternParts = getPatternParts(false);
codealchemist_log_type_post('7295857511956349671', ({v1 : ((typeof getPatternParts) != ('undefined')) ? (getPatternParts) : (undefined), v0 : ((typeof negPatternParts) != ('undefined')) ? (negPatternParts) : (undefined)}));
Object.getOwnPropertyNames(testData).forEach((function (input){
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v1 : ((typeof testData) != ('undefined')) ? (testData) : (undefined)}));
var rawExpected = testData[input];
codealchemist_log_type_post('8699103116531770005', ({v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined), v1 : ((typeof testData) != ('undefined')) ? (testData) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var patternParts;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined)}));
codealchemist_log_type_pre('7300640587067293759', ({v2 : ((typeof negPatternParts) != ('undefined')) ? (negPatternParts) : (undefined), v3 : ((typeof posPatternParts) != ('undefined')) ? (posPatternParts) : (undefined), v0 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
if((rawExpected[0]) === ("-")){
codealchemist_log_type_pre('8518265180541481865', ({v1 : ((typeof negPatternParts) != ('undefined')) ? (negPatternParts) : (undefined), v2 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof negPatternParts) != ('undefined')) ? (negPatternParts) : (undefined)}));
(patternParts) = negPatternParts;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof negPatternParts) != ('undefined')) ? (negPatternParts) : (undefined), v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined)}));
codealchemist_log_type_pre('-7340945012710598336', ({v0 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
(rawExpected) = rawExpected.substring(1);
codealchemist_log_type_post('-7340945012710598336', ({v0 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
codealchemist_log_type_post('8518265180541481865', ({v1 : ((typeof negPatternParts) != ('undefined')) ? (negPatternParts) : (undefined), v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v2 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
}else {
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof posPatternParts) != ('undefined')) ? (posPatternParts) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof posPatternParts) != ('undefined')) ? (posPatternParts) : (undefined)}));
(patternParts) = posPatternParts;
codealchemist_log_type_post('670706250746082504', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v1 : ((typeof posPatternParts) != ('undefined')) ? (posPatternParts) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v0 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v1 : ((typeof posPatternParts) != ('undefined')) ? (posPatternParts) : (undefined)}));
}
codealchemist_log_type_post('7300640587067293759', ({v2 : ((typeof negPatternParts) != ('undefined')) ? (negPatternParts) : (undefined), v1 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v3 : ((typeof posPatternParts) != ('undefined')) ? (posPatternParts) : (undefined), v0 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
codealchemist_log_type_pre('-8035151414509275923', ({v1 : ((typeof buildExpected) != ('undefined')) ? (buildExpected) : (undefined), v3 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v2 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
var expected = buildExpected(rawExpected, patternParts);
codealchemist_log_type_post('-8035151414509275923', ({v1 : ((typeof buildExpected) != ('undefined')) ? (buildExpected) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof patternParts) != ('undefined')) ? (patternParts) : (undefined), v2 : ((typeof rawExpected) != ('undefined')) ? (rawExpected) : (undefined)}));
codealchemist_log_type_pre('-4834216112077999336', ({v1 : ((typeof format) != ('undefined')) ? (format) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined)}));
var actual = format.format(input);
codealchemist_log_type_post('-4834216112077999336', ({v0 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v1 : ((typeof format) != ('undefined')) ? (format) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined)}));
if((actual) !== (expected)){
$ERROR((((((((((("Formatted value for ") + (input)) + (", ")) + (format.resolvedOptions().locale)) + (" and options ")) + (JSON.stringify(options))) + (" is ")) + (actual)) + ("; expected ")) + (expected)) + ("."));
}
}));
}
}));
}));
}
codealchemist_log_type_pre('5138292805344992201', ({}));
function getDateTimeComponents(){
codealchemist_log_type_pre('4471249789515270771', ({}));
var temp_4471249789515270771 = [];
codealchemist_log_type_post('4471249789515270771', ({}));
return temp_4471249789515270771;
}
codealchemist_log_type_post('5138292805344992201', ({}));
function getDateTimeComponentValues(component){
codealchemist_log_type_pre('-4216964106459392103', ({}));
var components = ({weekday : [], era : [], year : [], month : [], day : [], hour : [], minute : [], second : [], timeZoneName : []});
codealchemist_log_type_post('-4216964106459392103', ({v0 : ((typeof components) != ('undefined')) ? (components) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v2 : ((typeof component) != ('undefined')) ? (component) : (undefined), v1 : ((typeof components) != ('undefined')) ? (components) : (undefined)}));
var result = components[component];
codealchemist_log_type_post('8699103116531770005', ({v2 : ((typeof component) != ('undefined')) ? (component) : (undefined), v1 : ((typeof components) != ('undefined')) ? (components) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
if((result) === (undefined)){
$ERROR((("Internal error: No values defined for date-time component ") + (component)) + ("."));
}
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_pre('-5711936130955269780', ({}));
function isCanonicalizedStructurallyValidTimeZoneName(timeZone){
codealchemist_log_type_pre('-7021775233452255492', ({}));
var fileNameComponent = "(?:[A-Za-z_]|\\.(?!\\.?(?:/|$)))[A-Za-z.\\-_]{0,13}";
codealchemist_log_type_post('-7021775233452255492', ({v0 : ((typeof fileNameComponent) != ('undefined')) ? (fileNameComponent) : (undefined)}));
codealchemist_log_type_pre('-8251756885368878414', ({v1 : ((typeof fileNameComponent) != ('undefined')) ? (fileNameComponent) : (undefined)}));
var fileName = (((fileNameComponent) + ("(?:/")) + (fileNameComponent)) + (")*");
codealchemist_log_type_post('-8251756885368878414', ({v0 : ((typeof fileName) != ('undefined')) ? (fileName) : (undefined), v1 : ((typeof fileNameComponent) != ('undefined')) ? (fileNameComponent) : (undefined)}));
codealchemist_log_type_pre('3959508430643981496', ({}));
var etcName = "(?:Etc/)?GMT[+-]\\d{1,2}";
codealchemist_log_type_post('3959508430643981496', ({v0 : ((typeof etcName) != ('undefined')) ? (etcName) : (undefined)}));
codealchemist_log_type_pre('-5961205528069903076', ({}));
var systemVName = "SystemV/[A-Z]{3}\\d{1,2}(?:[A-Z]{3})?";
codealchemist_log_type_post('-5961205528069903076', ({v0 : ((typeof systemVName) != ('undefined')) ? (systemVName) : (undefined)}));
codealchemist_log_type_pre('7998913611891962731', ({v1 : ((typeof etcName) != ('undefined')) ? (etcName) : (undefined), v2 : ((typeof systemVName) != ('undefined')) ? (systemVName) : (undefined)}));
var legacyName = (((etcName) + ("|")) + (systemVName)) + ("|CST6CDT|EST5EDT|MST7MDT|PST8PDT|NZ");
codealchemist_log_type_post('7998913611891962731', ({v1 : ((typeof etcName) != ('undefined')) ? (etcName) : (undefined), v0 : ((typeof legacyName) != ('undefined')) ? (legacyName) : (undefined), v2 : ((typeof systemVName) != ('undefined')) ? (systemVName) : (undefined)}));
codealchemist_log_type_pre('1987149703097013829', ({v2 : ((typeof fileName) != ('undefined')) ? (fileName) : (undefined), v3 : ((typeof legacyName) != ('undefined')) ? (legacyName) : (undefined)}));
var zoneNamePattern = new RegExp((((("^(?:") + (fileName)) + ("|")) + (legacyName)) + (")$"));
codealchemist_log_type_post('1987149703097013829', ({v2 : ((typeof fileName) != ('undefined')) ? (fileName) : (undefined), v3 : ((typeof legacyName) != ('undefined')) ? (legacyName) : (undefined), v0 : ((typeof zoneNamePattern) != ('undefined')) ? (zoneNamePattern) : (undefined)}));
codealchemist_log_type_pre('219022533089341179', ({v0 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined)}));
if((typeof timeZone) !== ("string")){
codealchemist_log_type_pre('-6808902147229783520', ({}));
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
codealchemist_log_type_post('-6808902147229783520', ({}));
}
codealchemist_log_type_post('219022533089341179', ({v0 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined)}));
codealchemist_log_type_pre('7890167359272555944', ({v0 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined)}));
if((timeZone) === ("UTC")){
codealchemist_log_type_pre('3660263590060580256', ({}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
codealchemist_log_type_post('3660263590060580256', ({}));
}
codealchemist_log_type_post('7890167359272555944', ({v0 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined)}));
codealchemist_log_type_pre('-2461332737150833951', ({v0 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined)}));
if(((timeZone) === ("Etc/UTC")) || ((timeZone) === ("Etc/GMT"))){
codealchemist_log_type_pre('-6808902147229783520', ({}));
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
codealchemist_log_type_post('-6808902147229783520', ({}));
}
codealchemist_log_type_post('-2461332737150833951', ({v0 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined)}));
codealchemist_log_type_pre('-3070750072834595712', ({v1 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined), v0 : ((typeof zoneNamePattern) != ('undefined')) ? (zoneNamePattern) : (undefined)}));
var temp_3070750072834595712 = zoneNamePattern.test(timeZone);
codealchemist_log_type_post('-3070750072834595712', ({v1 : ((typeof timeZone) != ('undefined')) ? (timeZone) : (undefined), v0 : ((typeof zoneNamePattern) != ('undefined')) ? (zoneNamePattern) : (undefined)}));
return temp_3070750072834595712;
}
codealchemist_log_type_post('-5711936130955269780', ({}));
