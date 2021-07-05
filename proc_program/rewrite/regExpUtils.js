import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-1531140161261276813', ({}));
function buildString(args){
codealchemist_log_type_pre('-8949366519439163505', ({v1 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
const loneCodePoints = args.loneCodePoints;
codealchemist_log_type_post('-8949366519439163505', ({v1 : ((typeof args) != ('undefined')) ? (args) : (undefined), v0 : ((typeof loneCodePoints) != ('undefined')) ? (loneCodePoints) : (undefined)}));
codealchemist_log_type_pre('-7483296126109727603', ({v1 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
const ranges = args.ranges;
codealchemist_log_type_post('-7483296126109727603', ({v1 : ((typeof args) != ('undefined')) ? (args) : (undefined), v0 : ((typeof ranges) != ('undefined')) ? (ranges) : (undefined)}));
codealchemist_log_type_pre('-8471649471644114502', ({}));
const CHUNK_SIZE = 10000;
codealchemist_log_type_post('-8471649471644114502', ({v0 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined)}));
codealchemist_log_type_pre('2212171981394551079', ({v3 : ((typeof loneCodePoints) != ('undefined')) ? (loneCodePoints) : (undefined)}));
let result = Reflect.apply(String.fromCodePoint, null, loneCodePoints);
codealchemist_log_type_post('2212171981394551079', ({v3 : ((typeof loneCodePoints) != ('undefined')) ? (loneCodePoints) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('1697926676663770116', ({v8 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v1 : ((typeof ranges) != ('undefined')) ? (ranges) : (undefined), v9 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(let i = 0;(i) < (ranges.length);i++){
codealchemist_log_type_pre('-6347158294478138322', ({v8 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof ranges) != ('undefined')) ? (ranges) : (undefined), v9 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('4947307678015975283', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof ranges) != ('undefined')) ? (ranges) : (undefined)}));
const range = ranges[i];
codealchemist_log_type_post('4947307678015975283', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof range) != ('undefined')) ? (range) : (undefined), v1 : ((typeof ranges) != ('undefined')) ? (ranges) : (undefined)}));
codealchemist_log_type_pre('-501651818632189009', ({v1 : ((typeof range) != ('undefined')) ? (range) : (undefined)}));
const start = range[0];
codealchemist_log_type_post('-501651818632189009', ({v1 : ((typeof range) != ('undefined')) ? (range) : (undefined), v0 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('8078030936125273143', ({v1 : ((typeof range) != ('undefined')) ? (range) : (undefined)}));
const end = range[1];
codealchemist_log_type_post('8078030936125273143', ({v0 : ((typeof end) != ('undefined')) ? (end) : (undefined), v1 : ((typeof range) != ('undefined')) ? (range) : (undefined)}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const codePoints = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined)}));
codealchemist_log_type_pre('-3195213416866504702', ({v5 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v4 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v3 : ((typeof end) != ('undefined')) ? (end) : (undefined), v6 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
for(let length = 0, codePoint = start;(codePoint) <= (end);codePoint++){
codealchemist_log_type_pre('4223458501573654137', ({v3 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v2 : ((typeof codePoint) != ('undefined')) ? (codePoint) : (undefined), v0 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-560300859350447434', ({v2 : ((typeof codePoint) != ('undefined')) ? (codePoint) : (undefined), v0 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
(codePoints[length++]) = codePoint;
codealchemist_log_type_post('-560300859350447434', ({v2 : ((typeof codePoint) != ('undefined')) ? (codePoint) : (undefined), v0 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-6632372045842999589', ({v1 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v5 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v0 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
if((length) === (CHUNK_SIZE)){
codealchemist_log_type_pre('7802182327761594741', ({v3 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('6357728236461104686', ({v3 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += Reflect.apply(String.fromCodePoint, null, codePoints);
codealchemist_log_type_post('6357728236461104686', ({v3 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('2894559042878241641', ({v0 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined)}));
(codePoints.length) = (length) = 0;
codealchemist_log_type_post('2894559042878241641', ({v0 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('7802182327761594741', ({v3 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6632372045842999589', ({v1 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v5 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v0 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('4223458501573654137', ({v3 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v2 : ((typeof codePoint) != ('undefined')) ? (codePoint) : (undefined), v0 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3195213416866504702', ({v5 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v1 : ((typeof codePoint) != ('undefined')) ? (codePoint) : (undefined), v4 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v3 : ((typeof end) != ('undefined')) ? (end) : (undefined), v0 : ((typeof length) != ('undefined')) ? (length) : (undefined), v6 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('6357728236461104686', ({v3 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += Reflect.apply(String.fromCodePoint, null, codePoints);
codealchemist_log_type_post('6357728236461104686', ({v3 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-6347158294478138322', ({v8 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v7 : ((typeof codePoint) != ('undefined')) ? (codePoint) : (undefined), v5 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v4 : ((typeof end) != ('undefined')) ? (end) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v6 : ((typeof length) != ('undefined')) ? (length) : (undefined), v0 : ((typeof range) != ('undefined')) ? (range) : (undefined), v1 : ((typeof ranges) != ('undefined')) ? (ranges) : (undefined), v9 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
}
codealchemist_log_type_post('1697926676663770116', ({v8 : ((typeof CHUNK_SIZE) != ('undefined')) ? (CHUNK_SIZE) : (undefined), v7 : ((typeof codePoint) != ('undefined')) ? (codePoint) : (undefined), v5 : ((typeof codePoints) != ('undefined')) ? (codePoints) : (undefined), v4 : ((typeof end) != ('undefined')) ? (end) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v6 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof range) != ('undefined')) ? (range) : (undefined), v1 : ((typeof ranges) != ('undefined')) ? (ranges) : (undefined), v9 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-1531140161261276813', ({}));
function testPropertyEscapes(regex, string, expression){
if(! regex.test(string)){
for(const symbol of string){
codealchemist_log_type_pre('7900600497583858749', ({v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
const hex = symbol.codePointAt(0).toString(16).toUpperCase().padStart(6, "0");
codealchemist_log_type_post('7900600497583858749', ({v0 : ((typeof hex) != ('undefined')) ? (hex) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
assert(regex.test(symbol), `\`${expression}\` should match U+${hex} (\`${symbol}\`)`);
}
}
}
function matchValidator(expectedEntries, expectedIndex, expectedInput){
return (function (match){
assert.compareArray(match, expectedEntries, 'Match entries');
assert.sameValue(match.index, expectedIndex, 'Match index');
assert.sameValue(match.input, expectedInput, 'Match input');
});
}
