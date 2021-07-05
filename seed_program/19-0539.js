function opt(o, c, value) {
    o.b = 1;

    class A extends c {

    }

    o.a = value;
}

function main() {
    for (let i = 0; i < 2000; i++) {
        let o = {a: 1, b: 2};
        opt(o, (function () {}), {});
    }

    let o = {a: 1, b: 2};
    let cons = function () {};

    cons.prototype = o;

    opt(o, cons, 0x1234);

    print(o.a);
}

main();