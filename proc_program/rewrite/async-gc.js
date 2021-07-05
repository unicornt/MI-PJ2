import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-40232038189247751', ({v3 : ((typeof FinalizationRegistry) != ('undefined')) ? (FinalizationRegistry) : (undefined), v7 : ((typeof asyncGCDeref) != ('undefined')) ? (asyncGCDeref) : (undefined)}));
function asyncGC(...targets){
codealchemist_log_type_pre('8981833583969205211', ({v1 : ((typeof FinalizationRegistry) != ('undefined')) ? (FinalizationRegistry) : (undefined)}));
var finalizationRegistry = new FinalizationRegistry((()=>{
}));
codealchemist_log_type_post('8981833583969205211', ({v1 : ((typeof FinalizationRegistry) != ('undefined')) ? (FinalizationRegistry) : (undefined), v0 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined)}));
codealchemist_log_type_pre('-8774002088373048709', ({v1 : ((typeof targets) != ('undefined')) ? (targets) : (undefined)}));
var length = targets.length;
codealchemist_log_type_post('-8774002088373048709', ({v0 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof targets) != ('undefined')) ? (targets) : (undefined)}));
codealchemist_log_type_pre('2272027561291172396', ({v2 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v1 : ((typeof targets) != ('undefined')) ? (targets) : (undefined)}));
for(let target of targets){
codealchemist_log_type_pre('5810042826929960757', ({v0 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('4431255950279026199', ({v0 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
finalizationRegistry.register(target, 'target');
codealchemist_log_type_post('4431255950279026199', ({v0 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('6697378765710824163', ({}));
(target) = null;
codealchemist_log_type_post('6697378765710824163', ({v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_post('5810042826929960757', ({v0 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
}
codealchemist_log_type_post('2272027561291172396', ({v2 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v0 : ((typeof target) != ('undefined')) ? (target) : (undefined), v1 : ((typeof targets) != ('undefined')) ? (targets) : (undefined)}));
codealchemist_log_type_pre('6697378765710824163', ({}));
(targets) = null;
codealchemist_log_type_post('6697378765710824163', ({v0 : ((typeof targets) != ('undefined')) ? (targets) : (undefined)}));
codealchemist_log_type_pre('309450919753562593', ({v6 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined), v1 : ((typeof asyncGCDeref) != ('undefined')) ? (asyncGCDeref) : (undefined), v3 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v5 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
var temp_309450919753562593 = Promise.resolve('tick').then((()=>asyncGCDeref())).then((()=>{
codealchemist_log_type_pre('-2873575392672305138', ({}));
var names = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof names) != ('undefined')) ? (names) : (undefined)}));
codealchemist_log_type_pre('-5249720618350378278', ({v0 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined), v2 : ((typeof names) != ('undefined')) ? (names) : (undefined)}));
finalizationRegistry.cleanupSome(((name)=>{
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof names) != ('undefined')) ? (names) : (undefined)}));
names.push(name);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof names) != ('undefined')) ? (names) : (undefined)}));
}));
codealchemist_log_type_post('-5249720618350378278', ({v0 : ((typeof finalizationRegistry) != ('undefined')) ? (finalizationRegistry) : (undefined)}));
codealchemist_log_type_pre('2095014869710359840', ({v2 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v0 : ((typeof names) != ('undefined')) ? (names) : (undefined)}));
if((! names) || ((names.length) != (length))){
codealchemist_log_type_pre('-998043394315619070', ({v0 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined)}));
codealchemist_log_type_pre('1235890822023612463', ({v0 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined)}));
var temp_1235890822023612463 = asyncGC.notCollected;
codealchemist_log_type_post('1235890822023612463', ({v0 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined)}));
throw temp_1235890822023612463;
codealchemist_log_type_post('-998043394315619070', ({v0 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined)}));
}
codealchemist_log_type_post('2095014869710359840', ({v2 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v0 : ((typeof names) != ('undefined')) ? (names) : (undefined)}));
}));
codealchemist_log_type_post('309450919753562593', ({}));
return temp_309450919753562593;
}
codealchemist_log_type_post('-40232038189247751', ({}));
codealchemist_log_type_pre('-5085869794193279801', ({v0 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined)}));
(asyncGC.notCollected) = Symbol('Object was not collected');
codealchemist_log_type_post('-5085869794193279801', ({v0 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined)}));
codealchemist_log_type_pre('-2403239747267254784', ({v2 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
async function asyncGCDeref(){
codealchemist_log_type_pre('-7265530382583183660', ({}));
var trigger;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
codealchemist_log_type_pre('4541468313034160444', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
if($262.clearKeptObjects){
codealchemist_log_type_pre('6418556011326842786', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_pre('-4558498466276595803', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
(trigger) = $262.clearKeptObjects();
codealchemist_log_type_post('-4558498466276595803', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v0 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
codealchemist_log_type_post('6418556011326842786', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v0 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
}
codealchemist_log_type_post('4541468313034160444', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
codealchemist_log_type_pre('-1944758950982105047', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
await $262.gc();
codealchemist_log_type_post('-1944758950982105047', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_pre('-7542217584566703866', ({v1 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
var temp_7542217584566703866 = Promise.resolve(trigger);
codealchemist_log_type_post('-7542217584566703866', ({v1 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
return temp_7542217584566703866;
}
codealchemist_log_type_post('-2403239747267254784', ({}));
codealchemist_log_type_pre('8286804282241772884', ({v3 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined), v2 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined)}));
function resolveAsyncGC(err){
codealchemist_log_type_pre('2377551885530347710', ({v2 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined), v1 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined), v0 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
if((err) === (asyncGC.notCollected)){
codealchemist_log_type_pre('3700030236811867080', ({v0 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined)}));
$DONE();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined)}));
codealchemist_log_type_post('3700030236811867080', ({v0 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined)}));
}
codealchemist_log_type_post('2377551885530347710', ({v2 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined), v1 : ((typeof asyncGC) != ('undefined')) ? (asyncGC) : (undefined), v0 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined), v1 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
$DONE(err);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof $DONE) != ('undefined')) ? ($DONE) : (undefined), v1 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
}
codealchemist_log_type_post('8286804282241772884', ({}));
