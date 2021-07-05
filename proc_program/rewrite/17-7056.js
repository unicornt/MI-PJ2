import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('-8314991385748205900', ({}));
const kArgsLength = 0x101;
codealchemist_log_type_post('-8314991385748205900', ({v0 : ((typeof kArgsLength) != ('undefined')) ? (kArgsLength) : (undefined)}));
codealchemist_log_type_pre('1564558217053050846', ({}));
let buggy = null;
codealchemist_log_type_post('1564558217053050846', ({v0 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
codealchemist_log_type_pre('5219959888478057538', ({v2 : ((typeof kArgsLength) != ('undefined')) ? (kArgsLength) : (undefined)}));
function inlineFunc(){
codealchemist_log_type_pre('-7249053755374435209', ({v0 : ((typeof arguments) != ('undefined')) ? (arguments) : (undefined), v1 : ((typeof kArgsLength) != ('undefined')) ? (kArgsLength) : (undefined)}));
if((arguments.length) != (kArgsLength)){
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof arguments) != ('undefined')) ? (arguments) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof arguments) != ('undefined')) ? (arguments) : (undefined)}));
(buggy) = arguments;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof arguments) != ('undefined')) ? (arguments) : (undefined), v0 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v1 : ((typeof arguments) != ('undefined')) ? (arguments) : (undefined), v0 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
}
codealchemist_log_type_post('-7249053755374435209', ({v0 : ((typeof arguments) != ('undefined')) ? (arguments) : (undefined), v2 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v1 : ((typeof kArgsLength) != ('undefined')) ? (kArgsLength) : (undefined)}));
}
codealchemist_log_type_post('5219959888478057538', ({}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof inlineFunc) != ('undefined')) ? (inlineFunc) : (undefined)}));
class ClassForInine extends inlineFunc{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof inlineFunc) != ('undefined')) ? (inlineFunc) : (undefined)}));
codealchemist_log_type_pre('5912694540095677967', ({}));
function sleep(ms){
codealchemist_log_type_pre('5270374856355280589', ({}));
let start = new Date();
codealchemist_log_type_post('5270374856355280589', ({v0 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
codealchemist_log_type_pre('-4900529141074410222', ({v2 : ((typeof ms) != ('undefined')) ? (ms) : (undefined), v1 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
while(((new Date()) - (start)) < (ms)){
;
}
codealchemist_log_type_post('-4900529141074410222', ({v2 : ((typeof ms) != ('undefined')) ? (ms) : (undefined), v1 : ((typeof start) != ('undefined')) ? (start) : (undefined)}));
}
codealchemist_log_type_post('5912694540095677967', ({}));
function main(){
codealchemist_log_type_pre('3108214989096593263', ({v2 : ((typeof kArgsLength) != ('undefined')) ? (kArgsLength) : (undefined)}));
let args = new Array(kArgsLength);
codealchemist_log_type_post('3108214989096593263', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined), v2 : ((typeof kArgsLength) != ('undefined')) ? (kArgsLength) : (undefined)}));
codealchemist_log_type_pre('423976516467905584', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
args.fill((333) + (1));
codealchemist_log_type_post('423976516467905584', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
codealchemist_log_type_pre('2657270859752079543', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
(args) = args.join(', ');
codealchemist_log_type_post('2657270859752079543', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
let opt = new Function(`(() => {
        new ClassForInine(${args});
    })();`);
codealchemist_log_type_pre('-2152629401453214022', ({v3 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined), v2 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
for(let i = 0;(i) < (0x100000);i++){
codealchemist_log_type_pre('3564761346980654942', ({v3 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined), v2 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
opt();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined)}));
codealchemist_log_type_pre('-324347232013950032', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
if((i) === (0x3000)){
codealchemist_log_type_pre('5936724900451096172', ({v0 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
sleep(1000);
codealchemist_log_type_post('5936724900451096172', ({v0 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
}
codealchemist_log_type_post('-324347232013950032', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
codealchemist_log_type_pre('-7623468954818815738', ({v0 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
if(buggy){
codealchemist_log_type_pre('-3572907203884443118', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
codealchemist_log_type_pre('-7225255305256936116', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
print(('buggy.length: ') + (buggy.length));
codealchemist_log_type_post('-7225255305256936116', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
break ;
codealchemist_log_type_post('-3572907203884443118', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
}
codealchemist_log_type_post('-7623468954818815738', ({v0 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
codealchemist_log_type_post('3564761346980654942', ({v3 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof opt) != ('undefined')) ? (opt) : (undefined), v2 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
}
codealchemist_log_type_post('-2152629401453214022', ({v3 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof opt) != ('undefined')) ? (opt) : (undefined), v2 : ((typeof sleep) != ('undefined')) ? (sleep) : (undefined)}));
codealchemist_log_type_pre('8629741455388035987', ({v2 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined)}));
for(let i = 0, n = buggy.length;(i) < (n);i++){
codealchemist_log_type_pre('4007789102079138607', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('3352079769770480603', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
print(buggy[i]);
codealchemist_log_type_post('3352079769770480603', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('4007789102079138607', ({v1 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('8629741455388035987', ({v2 : ((typeof buggy) != ('undefined')) ? (buggy) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
}
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
main();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof main) != ('undefined')) ? (main) : (undefined)}));
