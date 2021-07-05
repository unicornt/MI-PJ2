{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "$DETACHBUFFER"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "buffer"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "name": "$262"
                },
                "prefix": true
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "$262"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "detachArrayBuffer"
                    }
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "\"function\""
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Test262Error"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "No method available to detach an ArrayBuffer",
                        "raw": "\"No method available to detach an ArrayBuffer\""
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
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
                  "name": "$262"
                },
                "property": {
                  "type": "Identifier",
                  "name": "detachArrayBuffer"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "buffer"
                }
              ]
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
}