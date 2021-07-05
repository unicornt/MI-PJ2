{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "testCoercibleToIndexZero"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
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
                "name": "testCoercibleToIntegerZero"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "test"
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
        "name": "testCoercibleToIndexOne"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
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
                "name": "testCoercibleToIntegerOne"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "test"
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
        "name": "testCoercibleToIndexFromIndex"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "nominalIndex"
        },
        {
          "type": "Identifier",
          "name": "test"
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Number"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "isInteger"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "nominalIndex"
                    }
                  ]
                }
              ]
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
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "<=",
                    "left": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "nominalIndex"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<=",
                    "left": {
                      "type": "Identifier",
                      "name": "nominalIndex"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "**",
                        "left": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 53,
                          "raw": "53"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
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
                "type": "Identifier",
                "name": "testCoercibleToIntegerFromInteger"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "nominalIndex"
                },
                {
                  "type": "Identifier",
                  "name": "test"
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
        "name": "testCoercibleToIntegerZero"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
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
                "name": "testCoercibleToNumberZero"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testCoercibleToIntegerFromInteger"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testCoercibleToNumberNan"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": []
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": []
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
        "name": "testCoercibleToIntegerOne"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
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
                "name": "testCoercibleToNumberOne"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testCoercibleToIntegerFromInteger"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ]
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
        "name": "testCoercibleToNumberZero"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "Identifier",
                        "name": "test"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "0",
                  "raw": "\"0\""
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
        "name": "testCoercibleToNumberNan"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "Identifier",
                        "name": "test"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "undefined"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "NaN"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "true",
                  "raw": "\"true\""
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
        "name": "testCoercibleToNumberOne"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "Identifier",
                        "name": "test"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\""
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
        "name": "testCoercibleToIntegerFromInteger"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "nominalInteger"
        },
        {
          "type": "Identifier",
          "name": "test"
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Number"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "isInteger"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "nominalInteger"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "Identifier",
                        "name": "test"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "name": "value"
                          }
                        ]
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
              "name": "testPrimitiveNumber"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "number"
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
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "number"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "number"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "toString"
                          }
                        },
                        "arguments": []
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
                "name": "testPrimitiveNumber"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "nominalInteger"
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "Identifier",
                "name": "nominalInteger"
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
                      "type": "Identifier",
                      "name": "testPrimitiveNumber"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "nominalInteger"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0.9,
                          "raw": "0.9"
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
              "type": "BinaryExpression",
              "operator": "<=",
              "left": {
                "type": "Identifier",
                "name": "nominalInteger"
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
                      "type": "Identifier",
                      "name": "testPrimitiveNumber"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "nominalInteger"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0.9,
                          "raw": "0.9"
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
        "name": "testPrimitiveWrappers"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "primitiveValue"
        },
        {
          "type": "Identifier",
          "name": "hint"
        },
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!=",
              "left": {
                "type": "Identifier",
                "name": "primitiveValue"
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "Object"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "primitiveValue"
                          }
                        ]
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testCoercibleToPrimitiveWithMethod"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "hint"
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "primitiveValue"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                {
                  "type": "Identifier",
                  "name": "test"
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
        "name": "testCoercibleToPrimitiveWithMethod"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "hint"
        },
        {
          "type": "Identifier",
          "name": "method"
        },
        {
          "type": "Identifier",
          "name": "test"
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
                  "name": "methodNames"
                },
                "init": null
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
                "name": "hint"
              },
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\""
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
                      "name": "methodNames"
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "valueOf",
                          "raw": "\"valueOf\""
                        },
                        {
                          "type": "Literal",
                          "value": "toString",
                          "raw": "\"toString\""
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "name": "hint"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "methodNames"
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "toString",
                            "raw": "\"toString\""
                          },
                          {
                            "type": "Literal",
                            "value": "valueOf",
                            "raw": "\"valueOf\""
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Test262Error"
                      },
                      "arguments": []
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Test262Error"
                                },
                                "arguments": []
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
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Test262Error"
                                },
                                "arguments": []
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Test262Error"
                                },
                                "arguments": []
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "hint"
              },
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\""
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "key": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "methodNames"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "computed": true,
                            "value": {
                              "type": "Identifier",
                              "name": "method"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                          }
                        ]
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "undefined"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": []
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ObjectExpression",
                                "properties": []
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
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Object"
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
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "methodNames"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Identifier",
                        "name": "method"
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    }
                  ]
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
        "name": "testNotCoercibleToIndex"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "RangeError"
                      },
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "value"
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
                                  "name": "test"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "RangeError"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "value"
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
                "name": "testNotCoercibleToInteger"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 2.5,
                    "raw": "2.5"
                  },
                  "prefix": true
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "-2.5",
                  "raw": "\"-2.5\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "name": "Infinity"
                  },
                  "prefix": true
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "**",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 53,
                    "raw": "53"
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
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Infinity"
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
        "name": "testNotCoercibleToInteger"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
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
                "name": "testNotCoercibleToNumber"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "test"
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
        "name": "testNotCoercibleToNumber"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "TypeError"
                      },
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "value"
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
                                  "name": "test"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "TypeError"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "value"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Symbol"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "name": "BigInt"
                },
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\""
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
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "BigInt"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testNotCoercibleToPrimitive"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\""
                },
                {
                  "type": "Identifier",
                  "name": "test"
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
        "name": "testNotCoercibleToPrimitive"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "hint"
        },
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "MyError"
            },
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": []
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
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": []
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Object"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ObjectExpression",
                                "properties": []
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "MyError"
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Symbol"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toPrimitive"
                        }
                      },
                      "computed": true,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "MyError"
                                },
                                "arguments": []
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testCoercibleToPrimitiveWithMethod"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "hint"
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "MyError"
                          },
                          "arguments": []
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "value"
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
                            "name": "test"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "MyError"
                            },
                            {
                              "type": "Identifier",
                              "name": "value"
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testUnsuitableMethod"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "method"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "TypeError"
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "valueOf"
                            },
                            "computed": false,
                            "value": {
                              "type": "Identifier",
                              "name": "method"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                          },
                          {
                            "type": "Property",
                            "key": {
                              "type": "Identifier",
                              "name": "toString"
                            },
                            "computed": false,
                            "value": {
                              "type": "Identifier",
                              "name": "method"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                          }
                        ]
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
                "name": "testUnsuitableMethod"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testUnsuitableMethod"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testUnsuitableMethod"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": []
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testUnsuitableMethod"
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Object"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testUnsuitableMethod"
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": []
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "testCoercibleToString"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
              },
              {
                "type": "Identifier",
                "name": "expectedString"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Identifier",
                        "name": "expectedString"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\""
                      },
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "value"
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
                                  "name": "test"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "expectedString"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "undefined"
                },
                {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Literal",
                  "value": "null",
                  "raw": "\"null\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
                },
                {
                  "type": "Literal",
                  "value": "true",
                  "raw": "\"true\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                },
                {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "value": "0",
                  "raw": "\"0\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
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
                  "type": "Literal",
                  "value": "0",
                  "raw": "\"0\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Infinity"
                },
                {
                  "type": "Literal",
                  "value": "Infinity",
                  "raw": "\"Infinity\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "name": "Infinity"
                  },
                  "prefix": true
                },
                {
                  "type": "Literal",
                  "value": "-Infinity",
                  "raw": "\"-Infinity\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 123.456,
                  "raw": "123.456"
                },
                {
                  "type": "Literal",
                  "value": "123.456",
                  "raw": "\"123.456\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 123.456,
                    "raw": "123.456"
                  },
                  "prefix": true
                },
                {
                  "type": "Literal",
                  "value": "-123.456",
                  "raw": "\"-123.456\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\""
                },
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\""
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "name": "BigInt"
                },
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\""
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
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "BigInt"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      },
                      {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\""
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": []
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ]
                },
                {
                  "type": "Literal",
                  "value": "foo,bar",
                  "raw": "\"foo,bar\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": []
                },
                {
                  "type": "Literal",
                  "value": "[object Object]",
                  "raw": "\"[object Object]\""
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
        "name": "testNotCoercibleToString"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "TypeError"
                      },
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\""
                      },
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "value"
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
                                  "name": "test"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "TypeError"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "value"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Symbol"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testNotCoercibleToPrimitive"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\""
                },
                {
                  "type": "Identifier",
                  "name": "test"
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
        "name": "testCoercibleToBooleanTrue"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
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
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Symbol"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": []
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
        "name": "testCoercibleToBooleanFalse"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
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
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "undefined"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
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
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "NaN"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
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
        "name": "testCoercibleToBigIntZero"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "Identifier",
                        "name": "test"
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
                "name": "testCoercibleToBigIntFromBigInt"
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "BigInt"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  ]
                },
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "BigInt"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  },
                  "prefix": true
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "-0",
                  "raw": "\"-0\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "   ",
                  "raw": "\"   \""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": []
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  ]
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
        "name": "testCoercibleToBigIntOne"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "Identifier",
                        "name": "test"
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
                "name": "testCoercibleToBigIntFromBigInt"
              },
              "arguments": [
                {
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
                },
                {
                  "type": "Identifier",
                  "name": "test"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  ]
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
        "name": "testCoercibleToBigIntFromBigInt"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "nominalBigInt"
        },
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "value"
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
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "Identifier",
                        "name": "test"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "nominalBigInt"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "nominalBigInt"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "toString"
                    }
                  },
                  "arguments": []
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "0b",
                    "raw": "\"0b\""
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "nominalBigInt"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "toString"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "0o",
                    "raw": "\"0o\""
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "nominalBigInt"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "toString"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "0x",
                    "raw": "\"0x\""
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "nominalBigInt"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "toString"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
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
                      "value": "   ",
                      "raw": "\"   \""
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "nominalBigInt"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toString"
                        }
                      },
                      "arguments": []
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "   ",
                    "raw": "\"   \""
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
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "nominalBigInt"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "test"
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "nominalBigInt"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "toString"
                        }
                      },
                      "arguments": []
                    }
                  ]
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
        "name": "testNotCoercibleToBigInt"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testPrimitiveValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "error"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "test"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "error"
                      },
                      {
                        "type": "Identifier",
                        "name": "value"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveWrappers"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "value"
                      },
                      {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\""
                      },
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "value"
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
                                  "name": "test"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "error"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "value"
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
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "Identifier",
                  "name": "undefined"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "Identifier",
                  "name": "NaN"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "Identifier",
                  "name": "Infinity"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testPrimitiveValue"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Symbol"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\""
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "testStringValue"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "string"
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
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "SyntaxError"
                      },
                      {
                        "type": "Identifier",
                        "name": "string"
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "SyntaxError"
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "value": "   ",
                          "raw": "\"   \""
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "string"
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
                      "type": "Identifier",
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "SyntaxError"
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "string"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "   ",
                          "raw": "\"   \""
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
                      "type": "Identifier",
                      "name": "testPrimitiveValue"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "SyntaxError"
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "   ",
                            "raw": "\"   \""
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "string"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "   ",
                          "raw": "\"   \""
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
                "type": "Identifier",
                "name": "testStringValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testStringValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "0b2",
                  "raw": "\"0b2\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testStringValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "0o8",
                  "raw": "\"0o8\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testStringValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "0xg",
                  "raw": "\"0xg\""
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "testStringValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "1n",
                  "raw": "\"1n\""
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