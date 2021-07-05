import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
(assert.compareIterator) = (function (iter, validators, message){
codealchemist_log_type_pre('1578349313915427014', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(message) = (message) || ('');
codealchemist_log_type_post('1578349313915427014', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
codealchemist_log_type_pre('-460879813751875261', ({}));
var i, result;
codealchemist_log_type_post('-460879813751875261', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for((i) = 0;(i) < (validators.length);i++){
codealchemist_log_type_pre('-6569939812684952959', ({v1 : ((typeof iter) != ('undefined')) ? (iter) : (undefined)}));
(result) = iter.next();
codealchemist_log_type_post('-6569939812684952959', ({v1 : ((typeof iter) != ('undefined')) ? (iter) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
assert(! result.done, ((((('Expected ') + (i)) + (' values(s). Instead iterator only produced ')) + ((i) - (1))) + (' value(s). ')) + (message));
codealchemist_log_type_pre('1085878972646482187', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v0 : ((typeof validators) != ('undefined')) ? (validators) : (undefined)}));
validators[i](result.value);
codealchemist_log_type_post('1085878972646482187', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v0 : ((typeof validators) != ('undefined')) ? (validators) : (undefined)}));
}
codealchemist_log_type_pre('-6569939812684952959', ({v1 : ((typeof iter) != ('undefined')) ? (iter) : (undefined)}));
(result) = iter.next();
codealchemist_log_type_post('-6569939812684952959', ({v1 : ((typeof iter) != ('undefined')) ? (iter) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
assert(result.done, ((('Expected only ') + (i)) + (' values(s). Instead iterator produced more. ')) + (message));
assert.sameValue(result.value, undefined, ('Expected value of `undefined` when iterator completes. ') + (message));
});
