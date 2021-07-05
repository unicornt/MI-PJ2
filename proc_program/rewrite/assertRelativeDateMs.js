import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
function assertRelativeDateMs(date, expectedMs){
codealchemist_log_type_pre('5298159485698357323', ({v1 : ((typeof date) != ('undefined')) ? (date) : (undefined)}));
var actualMs = date.valueOf();
codealchemist_log_type_post('5298159485698357323', ({v0 : ((typeof actualMs) != ('undefined')) ? (actualMs) : (undefined), v1 : ((typeof date) != ('undefined')) ? (date) : (undefined)}));
codealchemist_log_type_pre('-3070779941577169416', ({v1 : ((typeof date) != ('undefined')) ? (date) : (undefined)}));
var localOffset = (date.getTimezoneOffset()) * (60000);
codealchemist_log_type_post('-3070779941577169416', ({v1 : ((typeof date) != ('undefined')) ? (date) : (undefined), v0 : ((typeof localOffset) != ('undefined')) ? (localOffset) : (undefined)}));
if(((actualMs) - (localOffset)) !== (expectedMs)){
$ERROR((((('Expected ') + (date)) + (' to be ')) + (expectedMs)) + (' milliseconds from the Unix epoch'));
}
}
