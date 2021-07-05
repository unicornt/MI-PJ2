{
  "type": "Program",
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
            "name": "assert"
          },
          "property": {
            "type": "Identifier",
            "name": "compareIterator"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "iter"
            },
            {
              "type": "Identifier",
              "name": "validators"
            },
            {
              "type": "Identifier",
              "name": "message"
            }
          ],
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
                    "name": "message"
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "name": "message"
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''"
                    }
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
                      "name": "i"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "result"
                    },
                    "init": null
                  }
                ],
                "kind": "var"
              },
              {
                "type": "ForStatement",
                "init": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "validators"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "result"
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "iter"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "next"
                            }
                          },
                          "arguments": []
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "assert"
                        },
                        "arguments": [
                          {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "result"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "done"
                              }
                            },
                            "prefix": true
                          },
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
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Literal",
                                      "value": "Expected ",
                                      "raw": "'Expected '"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": " values(s). Instead iterator only produced ",
                                    "raw": "' values(s). Instead iterator only produced '"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "i"
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
                                "value": " value(s). ",
                                "raw": "' value(s). '"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "message"
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
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "validators"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "result"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "value"
                            }
                          }
                        ]
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
                    "type": "Identifier",
                    "name": "result"
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "iter"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "next"
                      }
                    },
                    "arguments": []
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "assert"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "result"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "done"
                      }
                    },
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
                            "value": "Expected only ",
                            "raw": "'Expected only '"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": " values(s). Instead iterator produced more. ",
                          "raw": "' values(s). Instead iterator produced more. '"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "message"
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
                      "name": "assert"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "sameValue"
                    }
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "result"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "value"
                      }
                    },
                    {
                      "type": "Identifier",
                      "name": "undefined"
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "Expected value of `undefined` when iterator completes. ",
                        "raw": "'Expected value of `undefined` when iterator completes. '"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "message"
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
      }
    }
  ],
  "sourceType": "script"
}