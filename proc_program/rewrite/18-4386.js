import * as std from 'std';
std.loadScript('/home/bz/unicornt/MI-PJ/CodeAlchemist/bin/jsLib/QUICKJS.js');
codealchemist_log_type_pre('5724986855260292585', ({}));
function trigger(){
codealchemist_log_type_pre('3764943439103859502', ({}));
let o = ({a : 1});
codealchemist_log_type_post('3764943439103859502', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('2863783936469655128', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
for(var k in o){
codealchemist_log_type_pre('9209003225513995275', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
{
codealchemist_log_type_pre('-5667413889353990792', ({}));
codealchemist_log_type_pre('7108975252930378176', ({}));
(k) = 0x1234;
codealchemist_log_type_post('7108975252930378176', ({v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('-857060939854026304', ({}));
function k(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
codealchemist_log_type_post('-5667413889353990792', ({}));
}
codealchemist_log_type_pre('5135387934922044108', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
o[k];
codealchemist_log_type_post('5135387934922044108', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_post('9209003225513995275', ({v0 : ((typeof k) != ('undefined')) ? (k) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('2863783936469655128', ({v0 : ((typeof k) != ('undefined')) ? (k) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('5724986855260292585', ({}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
trigger();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof trigger) != ('undefined')) ? (trigger) : (undefined)}));
