{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "verifyProperty"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "desc"
        },
        {
          "type": "Identifier",
          "name": "options"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "arguments"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "Literal",
                  "value": "verifyProperty should receive at least 3 arguments: obj, name, and descriptor",
                  "raw": "'verifyProperty should receive at least 3 arguments: obj, name, and descriptor'"
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
                  "name": "originalDesc"
                },
                "init": {
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
                      "name": "getOwnPropertyDescriptor"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "obj"
                    },
                    {
                      "type": "Identifier",
                      "name": "name"
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
                  "name": "nameStr"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "String"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "name"
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "desc"
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
                        "name": "originalDesc"
                      },
                      {
                        "type": "Identifier",
                        "name": "undefined"
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "obj['",
                            "raw": "\"obj['\""
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "nameStr"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "'] descriptor should be undefined",
                          "raw": "\"'] descriptor should be undefined\""
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true"
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
                "name": "assert"
              },
              "arguments": [
                {
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
                          "name": "Object"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "prototype"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "hasOwnProperty"
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
                      "name": "obj"
                    },
                    {
                      "type": "Identifier",
                      "name": "name"
                    }
                  ]
                },
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "obj should have an own property ",
                    "raw": "\"obj should have an own property \""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "nameStr"
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
                  "name": "notSameValue"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "desc"
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Literal",
                  "value": "The desc argument should be an object or undefined, null",
                  "raw": "\"The desc argument should be an object or undefined, null\""
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
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "name": "desc"
                  },
                  "prefix": true
                },
                {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\""
                },
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "The desc argument should be an object or undefined, ",
                    "raw": "\"The desc argument should be an object or undefined, \""
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "String"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "desc"
                      }
                    ]
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
                  "name": "failures"
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
            "type": "IfStatement",
            "test": {
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
                      "name": "Object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "prototype"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "hasOwnProperty"
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
                  "name": "desc"
                },
                {
                  "type": "Literal",
                  "value": "value",
                  "raw": "'value'"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "isSameValue"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "desc"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "value"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "originalDesc"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "value"
                          }
                        }
                      ]
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "failures"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "descriptor value should be ",
                                "raw": "\"descriptor value should be \""
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "desc"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
                              }
                            }
                          ]
                        }
                      }
                    ]
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
                      "name": "Object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "prototype"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "hasOwnProperty"
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
                  "name": "desc"
                },
                {
                  "type": "Literal",
                  "value": "enumerable",
                  "raw": "'enumerable'"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "desc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "enumerable"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "originalDesc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "enumerable"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "desc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "enumerable"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "isEnumerable"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "obj"
                          },
                          {
                            "type": "Identifier",
                            "name": "name"
                          }
                        ]
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "failures"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "descriptor should ",
                                  "raw": "'descriptor should '"
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "desc"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "enumerable"
                                    }
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''"
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": "not ",
                                    "raw": "'not '"
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "be enumerable",
                                "raw": "'be enumerable'"
                              }
                            }
                          ]
                        }
                      }
                    ]
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
                      "name": "Object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "prototype"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "hasOwnProperty"
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
                  "name": "desc"
                },
                {
                  "type": "Literal",
                  "value": "writable",
                  "raw": "'writable'"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "desc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "writable"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "originalDesc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "writable"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "desc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "writable"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "isWritable"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "obj"
                          },
                          {
                            "type": "Identifier",
                            "name": "name"
                          }
                        ]
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "failures"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "descriptor should ",
                                  "raw": "'descriptor should '"
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "desc"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "writable"
                                    }
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''"
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": "not ",
                                    "raw": "'not '"
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "be writable",
                                "raw": "'be writable'"
                              }
                            }
                          ]
                        }
                      }
                    ]
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
                      "name": "Object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "prototype"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "hasOwnProperty"
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
                  "name": "desc"
                },
                {
                  "type": "Literal",
                  "value": "configurable",
                  "raw": "'configurable'"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "desc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "configurable"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "originalDesc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "configurable"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "desc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "configurable"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "isConfigurable"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "obj"
                          },
                          {
                            "type": "Identifier",
                            "name": "name"
                          }
                        ]
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "failures"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "descriptor should ",
                                  "raw": "'descriptor should '"
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "desc"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "configurable"
                                    }
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''"
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": "not ",
                                    "raw": "'not '"
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "be configurable",
                                "raw": "'be configurable'"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": null
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
                      "name": "failures"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "prefix": true
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "failures"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "join"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "; ",
                      "raw": "'; '"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "name": "options"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "options"
                },
                "property": {
                  "type": "Identifier",
                  "name": "restore"
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
                        "name": "obj"
                      },
                      {
                        "type": "Identifier",
                        "name": "name"
                      },
                      {
                        "type": "Identifier",
                        "name": "originalDesc"
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true"
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
        "name": "isConfigurable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
        {
          "type": "Identifier",
          "name": "name"
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
                  "name": "hasOwnProperty"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "prototype"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "hasOwnProperty"
                  }
                }
              }
            ],
            "kind": "var"
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
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "obj"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "name"
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
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "instanceof",
                        "left": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "TypeError"
                        }
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
                              "name": "$ERROR"
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "Expected TypeError, got ",
                                  "raw": "\"Expected TypeError, got \""
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "e"
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "hasOwnProperty"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "call"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "obj"
                  },
                  {
                    "type": "Identifier",
                    "name": "name"
                  }
                ]
              },
              "prefix": true
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
        "name": "isEnumerable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
        {
          "type": "Identifier",
          "name": "name"
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
                  "name": "stringCheck"
                },
                "init": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "name": "name"
                },
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
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
                          "name": "x"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "obj"
                  },
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
                            "name": "x"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "name"
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
                                  "name": "stringCheck"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "each": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "stringCheck"
                    },
                    "right": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true"
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "name": "stringCheck"
                },
                "right": {
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
                          "name": "Object"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "prototype"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "hasOwnProperty"
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
                      "name": "obj"
                    },
                    {
                      "type": "Identifier",
                      "name": "name"
                    }
                  ]
                }
              },
              "right": {
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
                        "name": "Object"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "prototype"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "propertyIsEnumerable"
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
                    "name": "obj"
                  },
                  {
                    "type": "Identifier",
                    "name": "name"
                  }
                ]
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
        "name": "isSameValue"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
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
                  "name": "a"
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "name": "b"
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "b"
                  }
                }
              }
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
                  "name": "a"
                },
                "right": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "name": "b"
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
                }
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true"
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "a"
              },
              "right": {
                "type": "Identifier",
                "name": "b"
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "__isArray"
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "Array"
            },
            "property": {
              "type": "Identifier",
              "name": "isArray"
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
        "name": "isWritable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "verifyProp"
        },
        {
          "type": "Identifier",
          "name": "value"
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
                  "name": "unlikelyValue"
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "__isArray"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "obj"
                        }
                      ]
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "name": "name"
                      },
                      "right": {
                        "type": "Literal",
                        "value": "length",
                        "raw": "\"length\""
                      }
                    }
                  },
                  "consequent": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Math"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "pow"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "value": 32,
                          "raw": "32"
                        }
                      ]
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "unlikelyValue",
                    "raw": "\"unlikelyValue\""
                  }
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
                  "name": "newValue"
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "name": "value"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "unlikelyValue"
                  }
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
                  "name": "hadValue"
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
                          "name": "Object"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "prototype"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "hasOwnProperty"
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
                      "name": "obj"
                    },
                    {
                      "type": "Identifier",
                      "name": "name"
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
                  "name": "oldValue"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "obj"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "name"
                  }
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
                  "name": "writeSucceeded"
                },
                "init": null
              }
            ],
            "kind": "var"
          },
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "obj"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "name"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "newValue"
                    }
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
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "instanceof",
                        "left": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "TypeError"
                        }
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
                              "name": "$ERROR"
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "Expected TypeError, got ",
                                  "raw": "\"Expected TypeError, got \""
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "e"
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "writeSucceeded"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "isSameValue"
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "obj"
                    },
                    "property": {
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "Identifier",
                        "name": "verifyProp"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "name"
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "name": "newValue"
                  }
                ]
              }
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "writeSucceeded"
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "name": "hadValue"
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
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "obj"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "name"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "oldValue"
                          }
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
                          "type": "UnaryExpression",
                          "operator": "delete",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "obj"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "name"
                            }
                          },
                          "prefix": true
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "writeSucceeded"
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
        "name": "verifyEqualTo"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "value"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "isSameValue"
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "obj"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "name"
                    }
                  },
                  {
                    "type": "Identifier",
                    "name": "value"
                  }
                ]
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
                      "name": "$ERROR"
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
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "Expected obj[",
                                  "raw": "\"Expected obj[\""
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "String"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "name"
                                    }
                                  ]
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "] to equal ",
                                "raw": "\"] to equal \""
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "value"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": ", actually ",
                            "raw": "\", actually \""
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "obj"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "name"
                          }
                        }
                      }
                    ]
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "verifyWritable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "verifyProp"
        },
        {
          "type": "Identifier",
          "name": "value"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "name": "verifyProp"
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
                      "name": "assert"
                    },
                    "arguments": [
                      {
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
                              "name": "getOwnPropertyDescriptor"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "obj"
                            },
                            {
                              "type": "Identifier",
                              "name": "name"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "writable"
                        }
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] to have writable:true.",
                          "raw": "\"] to have writable:true.\""
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "isWritable"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "obj"
                  },
                  {
                    "type": "Identifier",
                    "name": "name"
                  },
                  {
                    "type": "Identifier",
                    "name": "verifyProp"
                  },
                  {
                    "type": "Identifier",
                    "name": "value"
                  }
                ]
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
                      "name": "$ERROR"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] to be writable, but was not.",
                          "raw": "\"] to be writable, but was not.\""
                        }
                      }
                    ]
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "verifyNotWritable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "verifyProp"
        },
        {
          "type": "Identifier",
          "name": "value"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "name": "verifyProp"
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
                                "name": "getOwnPropertyDescriptor"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "writable"
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
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] to have writable:false.",
                          "raw": "\"] to have writable:false.\""
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "isWritable"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "obj"
                },
                {
                  "type": "Identifier",
                  "name": "name"
                },
                {
                  "type": "Identifier",
                  "name": "verifyProp"
                }
              ]
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
                      "name": "$ERROR"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] NOT to be writable, but was.",
                          "raw": "\"] NOT to be writable, but was.\""
                        }
                      }
                    ]
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "verifyEnumerable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
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
                "type": "Identifier",
                "name": "assert"
              },
              "arguments": [
                {
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
                        "name": "getOwnPropertyDescriptor"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "obj"
                      },
                      {
                        "type": "Identifier",
                        "name": "name"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "enumerable"
                  }
                },
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": "Expected obj[",
                      "raw": "\"Expected obj[\""
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "String"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "] to have enumerable:true.",
                    "raw": "\"] to have enumerable:true.\""
                  }
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "isEnumerable"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "obj"
                  },
                  {
                    "type": "Identifier",
                    "name": "name"
                  }
                ]
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
                      "name": "$ERROR"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] to be enumerable, but was not.",
                          "raw": "\"] to be enumerable, but was not.\""
                        }
                      }
                    ]
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "verifyNotEnumerable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
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
                          "name": "getOwnPropertyDescriptor"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "obj"
                        },
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "enumerable"
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
                      "type": "Literal",
                      "value": "Expected obj[",
                      "raw": "\"Expected obj[\""
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "String"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "] to have enumerable:false.",
                    "raw": "\"] to have enumerable:false.\""
                  }
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "isEnumerable"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "obj"
                },
                {
                  "type": "Identifier",
                  "name": "name"
                }
              ]
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
                      "name": "$ERROR"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] NOT to be enumerable, but was.",
                          "raw": "\"] NOT to be enumerable, but was.\""
                        }
                      }
                    ]
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "verifyConfigurable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
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
                "type": "Identifier",
                "name": "assert"
              },
              "arguments": [
                {
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
                        "name": "getOwnPropertyDescriptor"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "obj"
                      },
                      {
                        "type": "Identifier",
                        "name": "name"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "configurable"
                  }
                },
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": "Expected obj[",
                      "raw": "\"Expected obj[\""
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "String"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "] to have configurable:true.",
                    "raw": "\"] to have configurable:true.\""
                  }
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "isConfigurable"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "obj"
                  },
                  {
                    "type": "Identifier",
                    "name": "name"
                  }
                ]
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
                      "name": "$ERROR"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] to be configurable, but was not.",
                          "raw": "\"] to be configurable, but was not.\""
                        }
                      }
                    ]
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "verifyNotConfigurable"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
        },
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
                          "name": "getOwnPropertyDescriptor"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "obj"
                        },
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "configurable"
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
                      "type": "Literal",
                      "value": "Expected obj[",
                      "raw": "\"Expected obj[\""
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "String"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "name"
                        }
                      ]
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "] to have configurable:false.",
                    "raw": "\"] to have configurable:false.\""
                  }
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "isConfigurable"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "obj"
                },
                {
                  "type": "Identifier",
                  "name": "name"
                }
              ]
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
                      "name": "$ERROR"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Expected obj[",
                            "raw": "\"Expected obj[\""
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "String"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "name"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "] NOT to be configurable, but was.",
                          "raw": "\"] NOT to be configurable, but was.\""
                        }
                      }
                    ]
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
  ],
  "sourceType": "script"
}