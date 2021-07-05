{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "opt"
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
                  "name": "o"
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "o"
              },
              "property": {
                "type": "Identifier",
                "name": "x"
              }
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    },
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
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 10000,
                "raw": "10000"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": false
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "opt"
                    },
                    "arguments": []
                  }
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
                  "name": "leaked_stack_object"
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "object_prototype"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ObjectExpression",
                    "properties": []
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "__proto__"
                  }
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
                  "name": "object_prototype"
                },
                "property": {
                  "type": "Identifier",
                  "name": "__defineGetter__"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'"
                },
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Error"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "prototype"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "toString"
                  }
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
                  "type": "Identifier",
                  "name": "object_prototype"
                },
                "property": {
                  "type": "Identifier",
                  "name": "__defineGetter__"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "message",
                  "raw": "'message'"
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UnaryExpression",
                          "operator": "delete",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "object_prototype"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "message"
                            }
                          },
                          "prefix": true
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "leaked_stack_object"
                          },
                          "right": {
                            "type": "ThisExpression"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
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
                  "name": "object_prototype"
                },
                "property": {
                  "type": "Identifier",
                  "name": "name"
                }
              },
              "right": {
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
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "opt"
              },
              "arguments": []
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "alert"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "leaked_stack_object"
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