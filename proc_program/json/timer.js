{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "Identifier",
            "name": "Promise"
          },
          "right": {
            "type": "Identifier",
            "name": "undefined"
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "ThisExpression"
            },
            "property": {
              "type": "Identifier",
              "name": "setTimeout"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "undefined"
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Literal",
                  "value": {},
                  "raw": "/\\$DONE()/",
                  "regex": {
                    "pattern": "\\$DONE()",
                    "flags": ""
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "test"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "code"
                }
              ]
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "$ERROR"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Async test capability is not supported in your test environment",
                    "raw": "\"Async test capability is not supported in your test environment\""
                  }
                ]
              }
            },
            "alternate": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "name": "Promise"
          },
          "right": {
            "type": "Identifier",
            "name": "undefined"
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "ThisExpression"
            },
            "property": {
              "type": "Identifier",
              "name": "setTimeout"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "undefined"
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
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "that"
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "that"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "setTimeout"
                          }
                        },
                        "right": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "callback"
                            },
                            {
                              "type": "Identifier",
                              "name": "delay"
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
                                      "name": "p"
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "Promise"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "resolve"
                                        }
                                      },
                                      "arguments": []
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
                                      "name": "start"
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "Date"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "now"
                                        }
                                      },
                                      "arguments": []
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
                                      "name": "end"
                                    },
                                    "init": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "start"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "delay"
                                      }
                                    }
                                  }
                                ],
                                "kind": "var"
                              },
                              {
                                "type": "FunctionDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "name": "check"
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
                                            "name": "timeLeft"
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "end"
                                            },
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "Date"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "now"
                                                }
                                              },
                                              "arguments": []
                                            }
                                          }
                                        }
                                      ],
                                      "kind": "var"
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": ">",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "timeLeft"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "p"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "then"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "check"
                                            }
                                          ]
                                        }
                                      },
                                      "alternate": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "callback"
                                          },
                                          "arguments": []
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "then"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "check"
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
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "arguments": [
                {
                  "type": "ThisExpression"
                }
              ]
            }
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
}