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
            "name": "str"
          },
          "init": {
            "type": "Literal",
            "value": "AISpsjFbWLAZEYyNzx8j5yG8cWkK2Mgb",
            "raw": "\"AISpsjFbWLAZEYyNzx8j5yG8cWkK2Mgb\""
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "go"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        },
        {
          "type": "Identifier",
          "name": "c"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForInStatement",
                  "left": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "v_in"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "TryStatement",
                        "block": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "go"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "undefined"
                                  },
                                  {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "prefix": true
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": []
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "handler": {
                          "type": "CatchClause",
                          "param": {
                            "type": "Identifier",
                            "name": "e"
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": []
                          }
                        },
                        "finalizer": null
                      },
                      {
                        "type": "TryStatement",
                        "block": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Uint32Array"
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 41902,
                                    "raw": "41902"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "handler": {
                          "type": "CatchClause",
                          "param": {
                            "type": "Identifier",
                            "name": "e"
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": []
                          }
                        },
                        "finalizer": null
                      }
                    ]
                  },
                  "each": false
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "name": "e"
              },
              "body": {
                "type": "BlockStatement",
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "v_in"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "prefix": true
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "name": "e"
              },
              "body": {
                "type": "BlockStatement",
                "body": []
              }
            },
            "finalizer": null
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
          "name": "go"
        },
        "arguments": [
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
            },
            "prefix": true
          },
          {
            "type": "ObjectExpression",
            "properties": []
          },
          {
            "type": "Literal",
            "value": 23704,
            "raw": "23704"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}