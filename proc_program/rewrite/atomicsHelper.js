import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
{
codealchemist_log_type_pre('-5380335857965241520', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v13 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
codealchemist_log_type_pre('2195992416483908523', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
let getReport = $262.agent.getReport.bind($262.agent);
codealchemist_log_type_post('2195992416483908523', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v0 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined)}));
codealchemist_log_type_pre('-1340283499828498517', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v2 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined)}));
($262.agent.getReport) = (function (){
codealchemist_log_type_pre('-7265530382583183660', ({}));
var r;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
codealchemist_log_type_pre('-69668738017901098', ({v2 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined)}));
while(((r) = getReport()) == (null)){
codealchemist_log_type_pre('8414057824301973446', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_pre('189112906155901352', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
$262.agent.sleep(1);
codealchemist_log_type_post('189112906155901352', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_post('8414057824301973446', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
}
codealchemist_log_type_post('-69668738017901098', ({v2 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined), v0 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
var temp_3444589576563574513 = r;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
return temp_3444589576563574513;
});
codealchemist_log_type_post('-1340283499828498517', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_pre('4759841579312919743', ({}));
if((this.setTimeout) === (undefined)){
codealchemist_log_type_pre('2045991328226019996', ({}));
codealchemist_log_type_pre('-9004611245658062635', ({}));
(function (that){
codealchemist_log_type_pre('140512004869142435', ({v0 : ((typeof that) != ('undefined')) ? (that) : (undefined)}));
(that.setTimeout) = (function (callback, delay){
codealchemist_log_type_pre('5061012609224886769', ({}));
let p = Promise.resolve();
codealchemist_log_type_post('5061012609224886769', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-7885749712563712448', ({}));
let start = Date.now();
codealchemist_log_type_post('-7885749712563712448', ({v0 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('-3258766898455304577', ({v2 : ((typeof delay) != ('undefined')) ? (delay) : (undefined), v1 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
let end = (start) + (delay);
codealchemist_log_type_post('-3258766898455304577', ({v2 : ((typeof delay) != ('undefined')) ? (delay) : (undefined), v0 : ((typeof end) != ('undefined')) ? (end) : (undefined), v1 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('283385428078178286', ({v4 : ((typeof callback) != ('undefined')) ? (callback) : (undefined), v1 : ((typeof end) != ('undefined')) ? (end) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
function check(){
codealchemist_log_type_pre('6577630899469531331', ({v4 : ((typeof callback) != ('undefined')) ? (callback) : (undefined), v3 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof end) != ('undefined')) ? (end) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
if(((end) - (Date.now())) > (0)){
codealchemist_log_type_pre('-5093144652715686581', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
p.then(check);
codealchemist_log_type_post('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_post('-5093144652715686581', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}else {
codealchemist_log_type_pre('3700030236811867080', ({v0 : ((typeof callback) != ('undefined')) ? (callback) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof callback) != ('undefined')) ? (callback) : (undefined)}));
callback();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof callback) != ('undefined')) ? (callback) : (undefined)}));
codealchemist_log_type_post('3700030236811867080', ({v0 : ((typeof callback) != ('undefined')) ? (callback) : (undefined)}));
}
codealchemist_log_type_post('6577630899469531331', ({v4 : ((typeof callback) != ('undefined')) ? (callback) : (undefined), v3 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof end) != ('undefined')) ? (end) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}
codealchemist_log_type_post('283385428078178286', ({}));
codealchemist_log_type_pre('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
p.then(check);
codealchemist_log_type_post('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
});
codealchemist_log_type_post('140512004869142435', ({v0 : ((typeof that) != ('undefined')) ? (that) : (undefined)}));
})(this);
codealchemist_log_type_post('-9004611245658062635', ({}));
codealchemist_log_type_post('2045991328226019996', ({}));
}
codealchemist_log_type_post('4759841579312919743', ({}));
codealchemist_log_type_pre('1269243727470307392', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
($262.agent.setTimeout) = setTimeout;
codealchemist_log_type_post('1269243727470307392', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
codealchemist_log_type_pre('577066722023848507', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v5 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined), v6 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
($262.agent.getReportAsync) = (function (){
codealchemist_log_type_pre('6683689638632654653', ({v4 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined), v5 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
var temp_6683689638632654653 = new Promise((function (resolve){
codealchemist_log_type_pre('9110991801004548904', ({v2 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined), v4 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v3 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
(function loop(){
codealchemist_log_type_pre('-5050657148787499418', ({v1 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined)}));
let result = getReport();
codealchemist_log_type_post('-5050657148787499418', ({v1 : ((typeof getReport) != ('undefined')) ? (getReport) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-7879862918607324128', ({v2 : ((typeof loop) != ('undefined')) ? (loop) : (undefined), v3 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
if(! result){
codealchemist_log_type_pre('5817735981838676656', ({v1 : ((typeof loop) != ('undefined')) ? (loop) : (undefined), v0 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
codealchemist_log_type_pre('-4960488527314484416', ({v1 : ((typeof loop) != ('undefined')) ? (loop) : (undefined), v0 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
setTimeout(loop, 1000);
codealchemist_log_type_post('-4960488527314484416', ({v1 : ((typeof loop) != ('undefined')) ? (loop) : (undefined), v0 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
codealchemist_log_type_post('5817735981838676656', ({v1 : ((typeof loop) != ('undefined')) ? (loop) : (undefined), v0 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
}else {
codealchemist_log_type_pre('3909125431120928320', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
resolve(result);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('3909125431120928320', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-7879862918607324128', ({v2 : ((typeof loop) != ('undefined')) ? (loop) : (undefined), v3 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
})();
codealchemist_log_type_post('9110991801004548904', ({}));
}));
codealchemist_log_type_post('6683689638632654653', ({}));
return temp_6683689638632654653;
});
codealchemist_log_type_post('577066722023848507', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_post('-5380335857965241520', ({v1 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v13 : ((typeof setTimeout) != ('undefined')) ? (setTimeout) : (undefined)}));
}
($262.agent.safeBroadcast) = (function (typedArray){
codealchemist_log_type_pre('-3643255375850998150', ({v2 : ((typeof typedArray) != ('undefined')) ? (typedArray) : (undefined)}));
let Constructor = Object.getPrototypeOf(typedArray).constructor;
codealchemist_log_type_post('-3643255375850998150', ({v0 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v2 : ((typeof typedArray) != ('undefined')) ? (typedArray) : (undefined)}));
codealchemist_log_type_pre('-8357674521810763784', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined)}));
let temp = new Constructor(new SharedArrayBuffer(Constructor.BYTES_PER_ELEMENT));
codealchemist_log_type_post('-8357674521810763784', ({v1 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v0 : ((typeof temp) != ('undefined')) ? (temp) : (undefined)}));
try{
codealchemist_log_type_pre('2917898606478844962', ({v2 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v1 : ((typeof temp) != ('undefined')) ? (temp) : (undefined)}));
Atomics.wait(temp, 0, ((Constructor) === (Int32Array)) ? (1) : (BigInt(1)));
codealchemist_log_type_post('2917898606478844962', ({v2 : ((typeof Constructor) != ('undefined')) ? (Constructor) : (undefined), v1 : ((typeof temp) != ('undefined')) ? (temp) : (undefined)}));
}catch(error){
$ERROR(`${Constructor.name} cannot be used as a shared typed array. (${error})`);
}
codealchemist_log_type_pre('-1520492372462228956', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof typedArray) != ('undefined')) ? (typedArray) : (undefined)}));
$262.agent.broadcast(typedArray.buffer);
codealchemist_log_type_post('-1520492372462228956', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof typedArray) != ('undefined')) ? (typedArray) : (undefined)}));
});
codealchemist_log_type_pre('-6601255963207491977', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
($262.agent.safeBroadcastAsync) = (async function (ta, index, expected){
codealchemist_log_type_pre('-5628411841411710007', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof ta) != ('undefined')) ? (ta) : (undefined)}));
await $262.agent.broadcast(ta.buffer);
codealchemist_log_type_post('-5628411841411710007', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof ta) != ('undefined')) ? (ta) : (undefined)}));
codealchemist_log_type_pre('-6717948031011440697', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof ta) != ('undefined')) ? (ta) : (undefined)}));
await $262.agent.waitUntil(ta, index, expected);
codealchemist_log_type_post('-6717948031011440697', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof ta) != ('undefined')) ? (ta) : (undefined)}));
codealchemist_log_type_pre('-6831622483773173046', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
await $262.agent.tryYield();
codealchemist_log_type_post('-6831622483773173046', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_pre('8980880897219360854', ({v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof ta) != ('undefined')) ? (ta) : (undefined)}));
var temp_8980880897219360854 = await Atomics.load(ta, index);
codealchemist_log_type_post('8980880897219360854', ({v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof ta) != ('undefined')) ? (ta) : (undefined)}));
return temp_8980880897219360854;
});
codealchemist_log_type_post('-6601255963207491977', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
($262.agent.waitUntil) = (function (typedArray, index, expected){
codealchemist_log_type_pre('8887107388399914408', ({}));
var agents = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof agents) != ('undefined')) ? (agents) : (undefined)}));
codealchemist_log_type_pre('9155087738568111425', ({v4 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof index) != ('undefined')) ? (index) : (undefined), v2 : ((typeof typedArray) != ('undefined')) ? (typedArray) : (undefined)}));
while(((agents) = Atomics.load(typedArray, index)) !== (expected)){
codealchemist_log_type_pre('2561052826099807835', ({}));
codealchemist_log_type_post('2561052826099807835', ({}));
}
codealchemist_log_type_post('9155087738568111425', ({v0 : ((typeof agents) != ('undefined')) ? (agents) : (undefined), v4 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof index) != ('undefined')) ? (index) : (undefined), v2 : ((typeof typedArray) != ('undefined')) ? (typedArray) : (undefined)}));
assert.sameValue(agents, expected, "Reporting number of 'agents' equals the value of 'expected'");
});
codealchemist_log_type_pre('-132839378094102184', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
($262.agent.timeouts) = ({yield : 100, small : 200, long : 1000, huge : 10000});
codealchemist_log_type_post('-132839378094102184', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_pre('-3133757212662978004', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
($262.agent.tryYield) = (function (){
codealchemist_log_type_pre('1484888941454525909', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
$262.agent.sleep($262.agent.timeouts.yield);
codealchemist_log_type_post('1484888941454525909', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
});
codealchemist_log_type_post('-3133757212662978004', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
codealchemist_log_type_pre('-8334472488785364462', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
($262.agent.trySleep) = (function (ms){
codealchemist_log_type_pre('2583486847023159322', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof ms) != ('undefined')) ? (ms) : (undefined)}));
$262.agent.sleep(ms);
codealchemist_log_type_post('2583486847023159322', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof ms) != ('undefined')) ? (ms) : (undefined)}));
});
codealchemist_log_type_post('-8334472488785364462', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined)}));
