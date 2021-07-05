{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "asyncGC"
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "name": "targets"
          }
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
                  "name": "finalizationRegistry"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "FinalizationRegistry"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": []
                      },
                      "generator": false,
                      "expression": false,
                      "async": false
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
                  "name": "length"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "targets"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ForOfStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "target"
                  },
                  "init": null
                }
              ],
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "name": "targets"
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "finalizationRegistry"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "register"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "target"
                      },
                      {
                        "type": "Literal",
                        "value": "target",
                        "raw": "'target'"
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
                      "name": "target"
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    }
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
                "name": "targets"
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "tick",
                          "raw": "'tick'"
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "then"
                    }
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "asyncGCDeref"
                        },
                        "arguments": []
                      },
                      "generator": false,
                      "expression": true,
                      "async": false
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "then"
                }
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
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
                              "name": "names"
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
                              "type": "Identifier",
                              "name": "finalizationRegistry"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "cleanupSome"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "name"
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
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "names"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "push"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "name"
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
                          ]
                        }
                      },
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
                              "name": "names"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "!=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "names"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "asyncGC"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "notCollected"
                                }
                              }
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "asyncGC"
          },
          "property": {
            "type": "Identifier",
            "name": "notCollected"
          }
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "Symbol"
          },
          "arguments": [
            {
              "type": "Literal",
              "value": "Object was not collected",
              "raw": "'Object was not collected'"
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "asyncGCDeref"
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
                  "name": "trigger"
                },
                "init": null
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "$262"
              },
              "property": {
                "type": "Identifier",
                "name": "clearKeptObjects"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "trigger"
                    },
                    "right": {
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
                          "name": "clearKeptObjects"
                        }
                      },
                      "arguments": []
                    }
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
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
                    "name": "gc"
                  }
                },
                "arguments": []
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
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
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "trigger"
                }
              ]
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": true
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "resolveAsyncGC"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "err"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "err"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "asyncGC"
                },
                "property": {
                  "type": "Identifier",
                  "name": "notCollected"
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
                      "name": "$DONE"
                    },
                    "arguments": []
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
                "type": "Identifier",
                "name": "$DONE"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "err"
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