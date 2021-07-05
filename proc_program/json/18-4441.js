{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "main"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "property": {
                  "type": "Identifier",
                  "name": "length"
                }
              },
              "right": {
                "type": "Literal",
                "value": 1048576,
                "raw": "0x100000"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "property": {
                  "type": "Identifier",
                  "name": "splice"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "value": 17,
                  "raw": "0x11"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "property": {
                  "type": "Identifier",
                  "name": "length"
                }
              },
              "right": {
                "type": "Literal",
                "value": 4294967280,
                "raw": "0xfffffff0"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "property": {
                  "type": "Identifier",
                  "name": "splice"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 4294967280,
                  "raw": "0xfffffff0"
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "main"
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
}