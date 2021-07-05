import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
if(((Promise) === (undefined)) && ((this.setTimeout) === (undefined))){
if(/\$DONE()/.test(code)){
$ERROR("Async test capability is not supported in your test environment");
}
}
codealchemist_log_type_pre('-8524496768547940758', ({}));
if(((Promise) !== (undefined)) && ((this.setTimeout) === (undefined))){
codealchemist_log_type_pre('-957408102646731722', ({}));
codealchemist_log_type_pre('1186062160068226171', ({}));
(function (that){
codealchemist_log_type_pre('6402183688218947781', ({v0 : ((typeof that) != ('undefined')) ? (that) : (undefined)}));
(that.setTimeout) = (function (callback, delay){
codealchemist_log_type_pre('5779643083102675067', ({}));
var p = Promise.resolve();
codealchemist_log_type_post('5779643083102675067', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('7663339260901559300', ({}));
var start = Date.now();
codealchemist_log_type_post('7663339260901559300', ({v0 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('4383236637957583172', ({v2 : ((typeof delay) != ('undefined')) ? (delay) : (undefined), v1 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
var end = (start) + (delay);
codealchemist_log_type_post('4383236637957583172', ({v2 : ((typeof delay) != ('undefined')) ? (delay) : (undefined), v0 : ((typeof end) != ('undefined')) ? (end) : (undefined), v1 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('7084492469661149562', ({v5 : ((typeof callback) != ('undefined')) ? (callback) : (undefined), v2 : ((typeof end) != ('undefined')) ? (end) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
function check(){
codealchemist_log_type_pre('6376959817322651089', ({v1 : ((typeof end) != ('undefined')) ? (end) : (undefined)}));
var timeLeft = (end) - (Date.now());
codealchemist_log_type_post('6376959817322651089', ({v1 : ((typeof end) != ('undefined')) ? (end) : (undefined), v0 : ((typeof timeLeft) != ('undefined')) ? (timeLeft) : (undefined)}));
codealchemist_log_type_pre('-459148363094392107', ({v3 : ((typeof callback) != ('undefined')) ? (callback) : (undefined), v2 : ((typeof check) != ('undefined')) ? (check) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof timeLeft) != ('undefined')) ? (timeLeft) : (undefined)}));
if((timeLeft) > (0)){
codealchemist_log_type_pre('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
p.then(check);
codealchemist_log_type_post('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}else {
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof callback) != ('undefined')) ? (callback) : (undefined)}));
callback();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof callback) != ('undefined')) ? (callback) : (undefined)}));
}
codealchemist_log_type_post('-459148363094392107', ({v3 : ((typeof callback) != ('undefined')) ? (callback) : (undefined), v2 : ((typeof check) != ('undefined')) ? (check) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof timeLeft) != ('undefined')) ? (timeLeft) : (undefined)}));
}
codealchemist_log_type_post('7084492469661149562', ({}));
codealchemist_log_type_pre('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
p.then(check);
codealchemist_log_type_post('3203574409078337532', ({v1 : ((typeof check) != ('undefined')) ? (check) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
});
codealchemist_log_type_post('6402183688218947781', ({v0 : ((typeof that) != ('undefined')) ? (that) : (undefined)}));
})(this);
codealchemist_log_type_post('1186062160068226171', ({}));
codealchemist_log_type_post('-957408102646731722', ({}));
}
codealchemist_log_type_post('-8524496768547940758', ({}));
