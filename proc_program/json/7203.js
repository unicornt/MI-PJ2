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
            "type": "ArrayExpression",
            "elements": []
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "dummy"
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "body": []
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
            "name": "a"
          },
          "property": {
            "type": "Identifier",
            "name": "length"
          }
        },
        "right": {
          "type": "Literal",
          "value": 200000,
          "raw": "200000"
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
            "name": "a"
          },
          "property": {
            "type": "Identifier",
            "name": "fill"
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 7,
            "raw": "7"
          },
          {
            "type": "Literal",
            "value": 10000,
            "raw": "10000"
          },
          {
            "type": "Literal",
            "value": 10200,
            "raw": "10200"
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "o"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": []
          }
        }
      ],
      "kind": "var"
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
            "name": "o"
          },
          {
            "type": "Literal",
            "value": "constructor",
            "raw": "'constructor'"
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
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 4294967294,
                            "raw": "0xfffffffe"
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
                              "name": "k"
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": []
                            }
                          }
                        ],
                        "kind": "var"
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
                                "name": "k"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "fill"
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
                              "name": "a"
                            },
                            {
                              "type": "Literal",
                              "value": 7.7,
                              "raw": "7.7"
                            },
                            {
                              "type": "Literal",
                              "value": 4294963200,
                              "raw": "0xfffff000"
                            },
                            {
                              "type": "Literal",
                              "value": 4294967294,
                              "raw": "0xfffffffe"
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "dummy"
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
            "name": "a"
          },
          "property": {
            "type": "Identifier",
            "name": "__proto__"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "o"
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
            "name": "q"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": []
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
            "name": "q"
          },
          "property": {
            "type": "Identifier",
            "name": "length"
          }
        },
        "right": {
          "type": "Literal",
          "value": 500,
          "raw": "500"
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
            "name": "q"
          },
          "property": {
            "type": "Identifier",
            "name": "fill"
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 7.7,
            "raw": "7.7"
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "j"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": []
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
            "name": "a"
          },
          "property": {
            "type": "Identifier",
            "name": "length"
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "-",
          "left": {
            "type": "Literal",
            "value": 4294967294,
            "raw": "0xfffffffe"
          },
          "right": {
            "type": "Literal",
            "value": 500,
            "raw": "500"
          }
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
              "name": "j"
            },
            "property": {
              "type": "Identifier",
              "name": "splice"
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
            "name": "a"
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0"
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "name": "q"
            }
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "a"
          },
          "property": {
            "type": "BinaryExpression",
            "operator": "-",
            "left": {
              "type": "Literal",
              "value": 4294963692,
              "raw": "0xfffff1ec"
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1"
            }
          }
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10"
        }
      }
    }
  ],
  "sourceType": "script"
}