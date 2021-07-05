{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "getReport"
              },
              "init": {
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
                        "name": "$262"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "agent"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "getReport"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "bind"
                  }
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "$262"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "agent"
                    }
                  }
                ]
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
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "$262"
                },
                "property": {
                  "type": "Identifier",
                  "name": "agent"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "getReport"
              }
            },
            "right": {
              "type": "FunctionExpression",
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
                          "name": "r"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "r"
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "getReport"
                          },
                          "arguments": []
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      }
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "$262"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "agent"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "sleep"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "r"
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            }
          }
        },
        {
          "type": "IfStatement",
          "test": {
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
                                    "kind": "let"
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
                                    "kind": "let"
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
                                    "kind": "let"
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
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": ">",
                                            "left": {
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
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
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
                                          "alternate": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "$262"
                },
                "property": {
                  "type": "Identifier",
                  "name": "agent"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "setTimeout"
              }
            },
            "right": {
              "type": "Identifier",
              "name": "setTimeout"
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "$262"
                },
                "property": {
                  "type": "Identifier",
                  "name": "agent"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "getReportAsync"
              }
            },
            "right": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Promise"
                      },
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "resolve"
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
                                    "type": "FunctionExpression",
                                    "id": {
                                      "type": "Identifier",
                                      "name": "loop"
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
                                                "name": "result"
                                              },
                                              "init": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "name": "getReport"
                                                },
                                                "arguments": []
                                              }
                                            }
                                          ],
                                          "kind": "let"
                                        },
                                        {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "UnaryExpression",
                                            "operator": "!",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "result"
                                            },
                                            "prefix": true
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
                                                    "name": "setTimeout"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "loop"
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": 1000,
                                                      "raw": "1000"
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
                                                    "name": "resolve"
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "result"
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
                                  },
                                  "arguments": []
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "$262"
            },
            "property": {
              "type": "Identifier",
              "name": "agent"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "safeBroadcast"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "typedArray"
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
                      "name": "Constructor"
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
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
                            "name": "getPrototypeOf"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "typedArray"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "constructor"
                      }
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
                      "name": "temp"
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Constructor"
                      },
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "SharedArrayBuffer"
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "Constructor"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "BYTES_PER_ELEMENT"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ],
                "kind": "let"
              },
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Atomics"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "wait"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "temp"
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          },
                          {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "name": "Constructor"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "Int32Array"
                              }
                            },
                            "consequent": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "BigInt"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              ]
                            }
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
                    "name": "error"
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
                            "name": "$ERROR"
                          },
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "",
                                    "cooked": ""
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": " cannot be used as a shared typed array. (",
                                    "cooked": " cannot be used as a shared typed array. ("
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": ")",
                                    "cooked": ")"
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Constructor"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "name"
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "name": "error"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                "finalizer": null
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
                        "name": "$262"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "agent"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "broadcast"
                    }
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "typedArray"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "buffer"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "$262"
            },
            "property": {
              "type": "Identifier",
              "name": "agent"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "safeBroadcastAsync"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "ta"
            },
            {
              "type": "Identifier",
              "name": "index"
            },
            {
              "type": "Identifier",
              "name": "expected"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "$262"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "agent"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "broadcast"
                      }
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "ta"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "buffer"
                        }
                      }
                    ]
                  }
                }
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "$262"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "agent"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "waitUntil"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "ta"
                      },
                      {
                        "type": "Identifier",
                        "name": "index"
                      },
                      {
                        "type": "Identifier",
                        "name": "expected"
                      }
                    ]
                  }
                }
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "$262"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "agent"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "tryYield"
                      }
                    },
                    "arguments": []
                  }
                }
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "Atomics"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "load"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "ta"
                      },
                      {
                        "type": "Identifier",
                        "name": "index"
                      }
                    ]
                  }
                }
              }
            ]
          },
          "generator": false,
          "expression": false,
          "async": true
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "$262"
            },
            "property": {
              "type": "Identifier",
              "name": "agent"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "waitUntil"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "typedArray"
            },
            {
              "type": "Identifier",
              "name": "index"
            },
            {
              "type": "Identifier",
              "name": "expected"
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
                      "name": "agents"
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ],
                "kind": "var"
              },
              {
                "type": "WhileStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "agents"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Atomics"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "load"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "typedArray"
                        },
                        {
                          "type": "Identifier",
                          "name": "index"
                        }
                      ]
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "expected"
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "body": []
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
                      "type": "Identifier",
                      "name": "agents"
                    },
                    {
                      "type": "Identifier",
                      "name": "expected"
                    },
                    {
                      "type": "Literal",
                      "value": "Reporting number of 'agents' equals the value of 'expected'",
                      "raw": "\"Reporting number of 'agents' equals the value of 'expected'\""
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "$262"
            },
            "property": {
              "type": "Identifier",
              "name": "agent"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "timeouts"
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "yield"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 100,
                "raw": "100"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            },
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "small"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 200,
                "raw": "200"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            },
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "long"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 1000,
                "raw": "1000"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            },
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "huge"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 10000,
                "raw": "10000"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "$262"
            },
            "property": {
              "type": "Identifier",
              "name": "agent"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "tryYield"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "$262"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "agent"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "sleep"
                    }
                  },
                  "arguments": [
                    {
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
                            "name": "$262"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "agent"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "timeouts"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "yield"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "$262"
            },
            "property": {
              "type": "Identifier",
              "name": "agent"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "trySleep"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "ms"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "$262"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "agent"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "sleep"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "ms"
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