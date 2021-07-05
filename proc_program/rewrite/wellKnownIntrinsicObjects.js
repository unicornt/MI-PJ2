import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('7838083884550891431', ({}));
const WellKnownIntrinsicObjects = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof WellKnownIntrinsicObjects) != ('undefined')) ? (WellKnownIntrinsicObjects) : (undefined)}));
WellKnownIntrinsicObjects.forEach(((wkio)=>{
codealchemist_log_type_pre('-7265530382583183660', ({}));
var actual;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof actual) != ('undefined')) ? (actual) : (undefined)}));
try{
(actual) = new Function(("return ") + (wkio.source))();
}catch(exception){
}
codealchemist_log_type_pre('5930306285009174721', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof wkio) != ('undefined')) ? (wkio) : (undefined)}));
(wkio.value) = actual;
codealchemist_log_type_post('5930306285009174721', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof wkio) != ('undefined')) ? (wkio) : (undefined)}));
}));
