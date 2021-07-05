{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "assert"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "mustBeTrue"
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "mustBeTrue"
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "message"
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "message"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "Expected true but got ",
                        "raw": "'Expected true but got '"
                      },
                      "right": {
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
                            "name": "_toString"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "mustBeTrue"
                          }
                        ]
                      }
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "$ERROR"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "message"
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
            "name": "assert"
          },
          "property": {
            "type": "Identifier",
            "name": "_isSameValue"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "!==",
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
                      }
                    }
                  ]
                },
                "alternate": null
              },
              {
                "type": "ReturnStatement",
                "argument": {
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
            "type": "Identifier",
            "name": "assert"
          },
          "property": {
            "type": "Identifier",
            "name": "sameValue"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "actual"
            },
            {
              "type": "Identifier",
              "name": "expected"
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
                "type": "TryStatement",
                "block": {
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
                            "type": "Identifier",
                            "name": "assert"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "_isSameValue"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "actual"
                          },
                          {
                            "type": "Identifier",
                            "name": "expected"
                          }
                        ]
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null
                          }
                        ]
                      },
                      "alternate": null
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
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "message"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": " (_isSameValue operation threw) ",
                                  "raw": "' (_isSameValue operation threw) '"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "error"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null
                      }
                    ]
                  }
                },
                "finalizer": null
              },
              {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "name": "message"
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
                        "type": "AssignmentExpression",
                        "operator": "=",
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
                  ]
                },
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "+=",
                        "left": {
                          "type": "Identifier",
                          "name": "message"
                        },
                        "right": {
                          "type": "Literal",
                          "value": " ",
                          "raw": "' '"
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
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "name": "message"
                  },
                  "right": {
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
                            "value": "Expected SameValue(«",
                            "raw": "'Expected SameValue(«'"
                          },
                          "right": {
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
                                "name": "_toString"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "actual"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "», «",
                          "raw": "'», «'"
                        }
                      },
                      "right": {
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
                            "name": "_toString"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "expected"
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "») to be true",
                      "raw": "'») to be true'"
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
                    "name": "$ERROR"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "message"
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
            "type": "Identifier",
            "name": "assert"
          },
          "property": {
            "type": "Identifier",
            "name": "notSameValue"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "actual"
            },
            {
              "type": "Identifier",
              "name": "unexpected"
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
                "type": "IfStatement",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
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
                        "name": "_isSameValue"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "actual"
                      },
                      {
                        "type": "Identifier",
                        "name": "unexpected"
                      }
                    ]
                  },
                  "prefix": true
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": null
                    }
                  ]
                },
                "alternate": null
              },
              {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "name": "message"
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
                        "type": "AssignmentExpression",
                        "operator": "=",
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
                  ]
                },
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "+=",
                        "left": {
                          "type": "Identifier",
                          "name": "message"
                        },
                        "right": {
                          "type": "Literal",
                          "value": " ",
                          "raw": "' '"
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
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "name": "message"
                  },
                  "right": {
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
                            "value": "Expected SameValue(«",
                            "raw": "'Expected SameValue(«'"
                          },
                          "right": {
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
                                "name": "_toString"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "actual"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "», «",
                          "raw": "'», «'"
                        }
                      },
                      "right": {
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
                            "name": "_toString"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "unexpected"
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "») to be false",
                      "raw": "'») to be false'"
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
                    "name": "$ERROR"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "message"
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
            "type": "Identifier",
            "name": "assert"
          },
          "property": {
            "type": "Identifier",
            "name": "throws"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "expectedErrorConstructor"
            },
            {
              "type": "Identifier",
              "name": "func"
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
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "func"
                    },
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "value": "function",
                    "raw": "\"function\""
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
                          "name": "$ERROR"
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Literal",
                              "value": "assert.throws requires two arguments: the error constructor ",
                              "raw": "'assert.throws requires two arguments: the error constructor '"
                            },
                            "right": {
                              "type": "Literal",
                              "value": "and a function to run",
                              "raw": "'and a function to run'"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": null
                    }
                  ]
                },
                "alternate": null
              },
              {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "name": "message"
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
                        "type": "AssignmentExpression",
                        "operator": "=",
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
                  ]
                },
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "+=",
                        "left": {
                          "type": "Identifier",
                          "name": "message"
                        },
                        "right": {
                          "type": "Literal",
                          "value": " ",
                          "raw": "' '"
                        }
                      }
                    }
                  ]
                }
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
                          "type": "Identifier",
                          "name": "func"
                        },
                        "arguments": []
                      }
                    }
                  ]
                },
                "handler": {
                  "type": "CatchClause",
                  "param": {
                    "type": "Identifier",
                    "name": "thrown"
                  },
                  "body": {
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
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "thrown"
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
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "thrown"
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "message"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "Thrown value was not an object!",
                                  "raw": "'Thrown value was not an object!'"
                                }
                              }
                            },
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
                                    "type": "Identifier",
                                    "name": "message"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "thrown"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "constructor"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "expectedErrorConstructor"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "+=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "message"
                                  },
                                  "right": {
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
                                          "value": "Expected a ",
                                          "raw": "'Expected a '"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "expectedErrorConstructor"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "name"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": " but got a ",
                                        "raw": "' but got a '"
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "thrown"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "constructor"
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "name"
                                      }
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
                                    "name": "$ERROR"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "message"
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "alternate": null
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null
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
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "name": "message"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "Expected a ",
                        "raw": "'Expected a '"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "expectedErrorConstructor"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "name"
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": " to be thrown but no exception was thrown at all",
                      "raw": "' to be thrown but no exception was thrown at all'"
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
                    "name": "$ERROR"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "message"
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
            "type": "Identifier",
            "name": "assert"
          },
          "property": {
            "type": "Identifier",
            "name": "_toString"
          }
        },
        "right": {
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
                "type": "TryStatement",
                "block": {
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
                            "name": "value"
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
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "value"
                            }
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Identifier",
                              "name": "Infinity"
                            },
                            "prefix": true
                          }
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "-0",
                              "raw": "'-0'"
                            }
                          }
                        ]
                      },
                      "alternate": null
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "String"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "value"
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
                    "name": "err"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "err"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "name"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": "TypeError",
                            "raw": "'TypeError'"
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
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
                                      "name": "toString"
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
                                    "name": "value"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "err"
                        }
                      }
                    ]
                  }
                },
                "finalizer": null
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