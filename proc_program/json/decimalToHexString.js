{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "decimalToHexString"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "n"
        }
      ],
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
                  "name": "hex"
                },
                "init": {
                  "type": "Literal",
                  "value": "0123456789ABCDEF",
                  "raw": "\"0123456789ABCDEF\""
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": ">>>=",
              "left": {
                "type": "Identifier",
                "name": "n"
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
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
                  "name": "s"
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "name": "n"
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "s"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "hex"
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "&",
                          "left": {
                            "type": "Identifier",
                            "name": "n"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 15,
                            "raw": "0xf"
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "s"
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": ">>>=",
                    "left": {
                      "type": "Identifier",
                      "name": "n"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4"
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "s"
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
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "s"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\""
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "s"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "s"
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
        "name": "decimalToPercentHexString"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "n"
        }
      ],
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
                  "name": "hex"
                },
                "init": {
                  "type": "Literal",
                  "value": "0123456789ABCDEF",
                  "raw": "\"0123456789ABCDEF\""
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "value": "%",
                  "raw": "\"%\""
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "hex"
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "operator": "&",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": ">>",
                      "left": {
                        "type": "Identifier",
                        "name": "n"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 15,
                      "raw": "0xf"
                    }
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "hex"
                },
                "property": {
                  "type": "BinaryExpression",
                  "operator": "&",
                  "left": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 15,
                    "raw": "0xf"
                  }
                }
              }
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