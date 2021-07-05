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
            "name": "arr"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": []
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "arr"
          },
          "property": {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          }
        },
        "right": {
          "type": "Literal",
          "value": 321321,
          "raw": "321321"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "proto"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": []
          }
        }
      ],
      "kind": "let"
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
            "name": "Object"
          },
          "property": {
            "type": "Identifier",
            "name": "defineProperty"
          }
        },
        "arguments": [
          {
            "type": "Identifier",
            "name": "proto"
          },
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "get"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "arr"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 2000,
                              "raw": "2000"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1094795585,
                            "raw": "0x41414141"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123"
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
            "name": "__proto__"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "proto"
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "Array"
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "reverse"
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
            "name": "arr"
          }
        ]
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "Array"
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "sort"
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
            "name": "arr"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}