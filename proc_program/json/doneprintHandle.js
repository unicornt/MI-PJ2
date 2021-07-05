{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "__consolePrintHandle__"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "msg"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "print"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "msg"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "$DONE"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "error"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "error"
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "name": "error"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "value": "object",
                          "raw": "'object'"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "Identifier",
                          "name": "error"
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "value": "name",
                        "raw": "'name'"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "error"
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "__consolePrintHandle__"
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "value": "Test262:AsyncTestFailure:",
                                    "raw": "'Test262:AsyncTestFailure:'"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "error"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "name"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": ": ",
                                  "raw": "': '"
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "error"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "message"
                                }
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "__consolePrintHandle__"
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "Test262:AsyncTestFailure:Test262Error: ",
                                "raw": "'Test262:AsyncTestFailure:Test262Error: '"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "error"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "__consolePrintHandle__"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Test262:AsyncTestComplete",
                        "raw": "'Test262:AsyncTestComplete'"
                      }
                    ]
                  }
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