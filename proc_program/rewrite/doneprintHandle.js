import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-3237091379348036759', ({}));
function __consolePrintHandle__(msg){
codealchemist_log_type_pre('-2926055102621158799', ({v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
print(msg);
codealchemist_log_type_post('-2926055102621158799', ({v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
}
codealchemist_log_type_post('-3237091379348036759', ({}));
codealchemist_log_type_pre('5271166991380526416', ({v2 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined)}));
function $DONE(error){
codealchemist_log_type_pre('8525087331246599668', ({v1 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
if(error){
codealchemist_log_type_pre('-5906069419783896965', ({v1 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
codealchemist_log_type_pre('-7079745136684840901', ({v1 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
if((((typeof error) === ('object')) && ((error) !== (null))) && (('name') in (error))){
codealchemist_log_type_pre('-4831093274651639094', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
codealchemist_log_type_pre('2128716451705231028', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
__consolePrintHandle__(((('Test262:AsyncTestFailure:') + (error.name)) + (': ')) + (error.message));
codealchemist_log_type_post('2128716451705231028', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
codealchemist_log_type_post('-4831093274651639094', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
}else {
codealchemist_log_type_pre('-9035688524642821340', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
codealchemist_log_type_pre('1845114565624954120', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
__consolePrintHandle__(('Test262:AsyncTestFailure:Test262Error: ') + (error));
codealchemist_log_type_post('1845114565624954120', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
codealchemist_log_type_post('-9035688524642821340', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v1 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
}
codealchemist_log_type_post('-7079745136684840901', ({v1 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
codealchemist_log_type_post('-5906069419783896965', ({v1 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
}else {
codealchemist_log_type_pre('1496855386990601544', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined)}));
codealchemist_log_type_pre('-4812516236221721645', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined)}));
__consolePrintHandle__('Test262:AsyncTestComplete');
codealchemist_log_type_post('-4812516236221721645', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined)}));
codealchemist_log_type_post('1496855386990601544', ({v0 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined)}));
}
codealchemist_log_type_post('8525087331246599668', ({v1 : ((typeof __consolePrintHandle__) != ('undefined')) ? (__consolePrintHandle__) : (undefined), v0 : ((typeof error) != ('undefined')) ? (error) : (undefined)}));
}
codealchemist_log_type_post('5271166991380526416', ({}));
