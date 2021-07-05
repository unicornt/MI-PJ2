const esprima = require('esprima');
const estraverse = require('estraverse')
const escodegen = require('escodegen')
const asttypes = require('ast-types')
function Stack(){
    
}
var fs=require("fs");
const { assert } = require('console');
var fname = '1.js';
var ocode = fs.readFileSync(fname).toString();
console.log(ocode);
ast=esprima.parseScript(ocode);
var sk = 
{
    item: [],
    push: (ele)=>{
        sk.item.push(ele);
    },
    pop: ()=>{
        sk.item.pop();
    },
    tope: ()=>{
        if(sk.item.length > 0)
            return sk.item[sk.item.length-1];
        else{
            console.log("no element in stack");
            return -1;
        }
    },
    tope2: ()=>{
        if(sk.item.length > 1)
            return sk.item[sk.item.length-2];
        else{
            console.log("less than 2 elements in stack");
            return -1;
        }
    },
    tope3: ()=>{
        if(sk.item.length > 2)
            return sk.item[sk.item.length-3];
        else{
            console.log("less than 3 elements in stack");
            return -1;
        }
    }
};
var Func = new Array();
var argues = new Array();
estraverse.traverse(ast, {
    enter: node => {
        if(node.type=='FunctionDeclaration'){
            Func[node.id.name]=1;
            argues[node.id.name] = node.arguments;
        }
        if(node.type=='CallExpression'){
            Func[node.callee.name]=1;

            argues[node.callee.name] = [];
            var cnt = 0;
            for(var i = 0; i < node.arguments.length; i++) {
                if(node.arguments[i].type == 'Literal') {
                    argues[node.callee.name].push(asttypes.builders.identifier("__ast__var__"+cnt.toString()));
                    cnt++;
                }
                else if(node.arguments[i].type == 'Identifier') {
                    argues[node.callee.name].push(node.arguments[i]);
                }
                else if(node.arguments[i].type == 'FunctionExpression') {
                    argues[node.callee.name].push(asttypes.builders.identifier("__ast__var__"+cnt.toString()));
                    cnt++;
                }
            }
        }
    },
    leave: node => {
    }
})
var nnode=asttypes.builders.expressionStatement(
    asttypes.builders.callExpression(
        asttypes.builders.memberExpression(
            asttypes.builders.identifier("console"), asttypes.builders.identifier("log")
        ),
        [asttypes.builders.literal("before function call")]
    )
);
sk.push(null);
sk.push(null);
var root = null;
estraverse.traverse(ast, {
    enter: node => {
        var par1 = sk.tope();
        var par2 = sk.tope2();
        if(root == null){ 
            root=node;
        }
        console.log(par1,par2);
        if(node.type=='CallExpression' || node.type == 'NewExpression'){
            if(node.callee.type == 'MemberExpression' && node.callee.object.name == 'console' &&
                node.callee.property.name == 'log'){
            }
            else {
                if(par2.type == 'VariableDeclaration')
                {
                    var par3 = sk.tope3();
                    var id = par3.body.indexOf(par2);
                    par3.body.splice(id, 0, nnode);
                }
                else if(par1.type != 'CallExpression' && (par2.type == 'FunctionExpression' || par2.type == 'ArrowFunctionExpression')){
                    var id = par2.body.indexOf(par1);
                    par2.body.splice(id, 0, nnode);
                }
                console.log(node.arguments.length);
                console.log(node.arguments);
                var cnt = 0;
                for(i = 0; i < node.arguments.length; i++) {
                    var an = node.arguments[i];
                    if(an.type == 'FunctionExpression'){
                        an.body.body.splice(0, 0, nnode);
                    }
                    else if(an.type == 'CallExpression'){
                        if(Func[an.callee.name] == 2) {
                            an.callee.name = "__ast__" + an.callee.name + "__ast__"
                        }
                        else if(Func[an.callee.name] == 1){
                            root.body.push(asttypes.builders.functionDeclaration(
                                asttypes.builders.identifier("__ast__" + an.callee.name + "__ast__"),
                                argues[an.callee.name],
                                asttypes.builders.blockStatement(
                                    [nnode,
                                    asttypes.builders.expressionStatement(
                                        asttypes.builders.callExpression(
                                            asttypes.builders.identifier(an.callee.name),
                                            argues[an.callee.name]
                                        )
                                    )
                                    ]
                                )
                            ))
                            Func[an.callee.name] = 2;
                            an.callee.name = "__ast__" + an.callee.name + "__ast__";
                        }
                    }
                }
                for(i = 0; i < node.arguments.length; i++) {
                    var an = node.arguments[i];
                    if(an.type == "Identifier" && Func[an.name] == 1){
                        Func[an.name] = 2;
                        root.body.push(asttypes.builders.functionDeclaration(
                            asttypes.builders.identifier("__ast__" + an.name + "__ast__"),
                            argues[an.name],
                            asttypes.builders.blockStatement(
                                [nnode,
                                asttypes.builders.expressionStatement(
                                    asttypes.builders.callExpression(
                                        asttypes.builders.identifier(an.name),
                                        argues[an.name]
                                    )
                                )
                                ]
                            )
                        ))
                        an.name="__ast__" + an.name + "__ast__";
                    }
                    else if(an.type == "Identifier" && Func[an.name] == 2){
                        an.name = "__ast__" + an.name + "__ast__";
                    }
                }
            }
        }
        sk.push(node);
    },
    leave: node => {
        sk.pop();
    }
})
const code = escodegen.generate(ast)
console.log(code)
fs.writeFileSync(fname[0]+'-out.js', code);