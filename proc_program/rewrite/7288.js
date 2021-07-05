import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('2853639191895254393', ({}));
var buf = new ArrayBuffer(0x10010);
codealchemist_log_type_post('2853639191895254393', ({v0 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
codealchemist_log_type_pre('3817925600652235366', ({v2 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
var numbers = new Uint8Array(buf);
codealchemist_log_type_post('3817925600652235366', ({v2 : ((typeof buf) != ('undefined')) ? (buf) : (undefined), v0 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
codealchemist_log_type_pre('-3449492167717616171', ({v1 : ((typeof postMessage) != ('undefined')) ? (postMessage) : (undefined)}));
function v(){
codealchemist_log_type_pre('1690846420104386497', ({v0 : ((typeof postMessage) != ('undefined')) ? (postMessage) : (undefined)}));
postMessage("test", "http://127.0.0.1", []);
codealchemist_log_type_post('1690846420104386497', ({v0 : ((typeof postMessage) != ('undefined')) ? (postMessage) : (undefined)}));
codealchemist_log_type_pre('769737710434826224', ({}));
var temp_769737710434826224 = 7;
codealchemist_log_type_post('769737710434826224', ({}));
return temp_769737710434826224;
}
codealchemist_log_type_post('-3449492167717616171', ({}));
codealchemist_log_type_pre('-1977354251220365799', ({v3 : ((typeof v) != ('undefined')) ? (v) : (undefined)}));
function compareNumbers(a, b){
codealchemist_log_type_pre('-2049860137525903623', ({v0 : ((typeof v) != ('undefined')) ? (v) : (undefined)}));
var temp_2049860137525903623 = ({valueOf : v});
codealchemist_log_type_post('-2049860137525903623', ({v0 : ((typeof v) != ('undefined')) ? (v) : (undefined)}));
return temp_2049860137525903623;
}
codealchemist_log_type_post('-1977354251220365799', ({}));
codealchemist_log_type_pre('5670579156537621147', ({v1 : ((typeof compareNumbers) != ('undefined')) ? (compareNumbers) : (undefined), v0 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
numbers.sort(compareNumbers);
codealchemist_log_type_post('5670579156537621147', ({v1 : ((typeof compareNumbers) != ('undefined')) ? (compareNumbers) : (undefined), v0 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
