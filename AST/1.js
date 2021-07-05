const esprima = require('esprima');
const estraverse = require('estraverse')
const escodegen = require('escodegen')
const asttypes = require('ast-types')
var ast = esprima.parseScript(
'function add() {'+
	'return (a,b)=>{'+
    '	return a + b'+
    '}'+
'}'
);
var f = 0;
estraverse.traverse(ast, {
    enter: node => {
        console.log(node);
        if(node.type === 'ReturnStatement') {
            // console.log(node)
            // console.log('\n')
            if(f == 0) {
                f = 1;
            }
            else {
                node.argument = asttypes.builders.binaryExpression(
                    '+',
                    asttypes.builders.binaryExpression(
                        '-',
                        asttypes.builders.identifier('a'),
                        asttypes.builders.identifier('b')
                    ),
                    asttypes.builders.identifier('c'),
                );
            }
        }
        if(node.type === 'ArrowFunctionExpression') {
            if(node.params.length === 2) {
                node.params.push(asttypes.builders.identifier('c'));
            }
        }
    }
})
estraverse.traverse(ast, {
    enter: node => {
        console.log(node);
    }
})
const code = escodegen.generate(ast)
console.log(code)