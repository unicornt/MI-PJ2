function cons() {

}

function opt(o, value) {
    o.b = 1;

    new cons();

    o.a = value;
}

function main() {
    for (let i = 0; i < 2000; i++) {
        cons.prototype = {};

        let o = {a: 1, b: 2};
        opt(o, {});
    }

    let o = {a: 1, b: 2};

    cons.prototype = o;

    opt(o, 0x1234);

    print(o.a);
}

main();