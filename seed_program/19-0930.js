var extern_arr_vars = [];
for (var i = 0; i < 16; i++) {
    extern_arr_vars[i] = new Array();
}
extern_arr_vars[10].toString = function() { CollectGarbage(); };
for(n = 0;n < 3;n++) {
    try { 
        extern_arr_vars[5].toExponential();
    } catch(e) {  }
}
for (var i = 0; i < 2 ; i++) { 
    extern_arr_vars[15][i] = extern_arr_vars[10];
}
extern_arr_vars[15].join(new Date().getVarDate());