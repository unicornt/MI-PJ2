import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('8023245405372096757', ({}));
function Test262Error(message){
codealchemist_log_type_pre('677732600227295119', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
(this.message) = (message) || ("");
codealchemist_log_type_post('677732600227295119', ({v0 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
}
codealchemist_log_type_post('8023245405372096757', ({}));
codealchemist_log_type_pre('-4699765240741158875', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
(Test262Error.prototype.toString) = (function (){
codealchemist_log_type_pre('-1443613007811224837', ({}));
var temp_1443613007811224837 = ("Test262Error: ") + (this.message);
codealchemist_log_type_post('-1443613007811224837', ({}));
return temp_1443613007811224837;
});
codealchemist_log_type_post('-4699765240741158875', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
codealchemist_log_type_pre('4402823099601667798', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
(Test262Error.thrower) = ((message)=>{
codealchemist_log_type_pre('8843955105893757886', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v1 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
var temp_8843955105893757886 = new Test262Error(message);
codealchemist_log_type_post('8843955105893757886', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined), v1 : ((typeof message) != ('undefined')) ? (message) : (undefined)}));
throw temp_8843955105893757886;
});
codealchemist_log_type_post('4402823099601667798', ({v0 : ((typeof Test262Error) != ('undefined')) ? (Test262Error) : (undefined)}));
var $ERROR = Test262Error.thrower;
codealchemist_log_type_pre('7534714556116235592', ({}));
function $DONOTEVALUATE(){
codealchemist_log_type_pre('7702074145340538454', ({}));
var temp_7702074145340538454 = "Test262: This statement should not be evaluated.";
codealchemist_log_type_post('7702074145340538454', ({}));
throw temp_7702074145340538454;
}
codealchemist_log_type_post('7534714556116235592', ({}));
