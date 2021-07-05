import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('8998354045548653560', ({v2 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v3 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
function $DETACHBUFFER(buffer){
codealchemist_log_type_pre('4025301304921615995', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
if((! $262) || ((typeof $262.detachArrayBuffer) !== ("function"))){
codealchemist_log_type_pre('4326034463894643524', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
codealchemist_log_type_pre('1721362539579180561', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
var temp_1721362539579180561 = new Test262Error("No method available to detach an ArrayBuffer");
codealchemist_log_type_post('1721362539579180561', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
throw temp_1721362539579180561;
codealchemist_log_type_post('4326034463894643524', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
}
codealchemist_log_type_post('4025301304921615995', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
codealchemist_log_type_pre('-4715161598382843747', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
$262.detachArrayBuffer(buffer);
codealchemist_log_type_post('-4715161598382843747', ({v0 : ((typeof $262) != ('undefined')) ? ($262) : (undefined), v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
}
codealchemist_log_type_post('8998354045548653560', ({}));
