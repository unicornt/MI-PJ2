{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "a"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Array"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 286331153,
                "raw": "0x11111111"
              },
              {
                "type": "Literal",
                "value": 572662306,
                "raw": "0x22222222"
              },
              {
                "type": "Literal",
                "value": 858993459,
                "raw": "0x33333333"
              },
              {
                "type": "Literal",
                "value": 1145324612,
                "raw": "0x44444444"
              },
              {
                "type": "Literal",
                "value": 303174162,
                "raw": "0x12121212"
              },
              {
                "type": "Literal",
                "value": 589505315,
                "raw": "0x23232323"
              },
              {
                "type": "Literal",
                "value": 305419888,
                "raw": "0x12345670"
              },
              {
                "type": "Literal",
                "value": 30583,
                "raw": "0x7777"
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "handler"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "getPrototypeOf"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "target"
                    },
                    {
                      "type": "Identifier",
                      "name": "name"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "a"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "p"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Proxy"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": []
              },
              {
                "type": "Identifier",
                "name": "handler"
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "b"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": []
              },
              {
                "type": "ArrayExpression",
                "elements": []
              },
              {
                "type": "Literal",
                "value": "natalie",
                "raw": "\"natalie\""
              }
            ]
          }
        }
      ],
      "kind": "var"
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
            "name": "b"
          },
          "property": {
            "type": "Identifier",
            "name": "__proto__"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "p"
        }
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
            "name": "b"
          },
          "property": {
            "type": "Identifier",
            "name": "length"
          }
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "a"
            },
            "property": {
              "type": "Identifier",
              "name": "shift"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "call"
          }
        },
        "arguments": [
          {
            "type": "Identifier",
            "name": "b"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}