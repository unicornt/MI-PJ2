{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "checkSequence"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "arr"
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
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "arr"
                },
                "property": {
                  "type": "Identifier",
                  "name": "forEach"
                }
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "e"
                    },
                    {
                      "type": "Identifier",
                      "name": "i"
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
                            "type": "Identifier",
                            "name": "e"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
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
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "Identifier",
                                            "name": "message"
                                          },
                                          "consequent": {
                                            "type": "Identifier",
                                            "name": "message"
                                          },
                                          "alternate": {
                                            "type": "Literal",
                                            "value": "Steps in unexpected sequence:",
                                            "raw": "\"Steps in unexpected sequence:\""
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": " '",
                                          "raw": "\" '\""
                                        }
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "arr"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "join"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": ",",
                                            "raw": "','"
                                          }
                                        ]
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "'",
                                      "raw": "\"'\""
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
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "checkSettledPromises"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "settleds"
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "prefix"
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "name": "message"
                  },
                  "consequent": {
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
                          "raw": ": ",
                          "cooked": ": "
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "name": "message"
                      }
                    ]
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''"
                  }
                }
              }
            ],
            "kind": "const"
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
                  "type": "CallExpression",
                  "callee": {
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
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "settleds"
                    }
                  ]
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
                },
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
                        "raw": "Settled values is an array",
                        "cooked": "Settled values is an array"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "name": "prefix"
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
                    "name": "settleds"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "expected"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
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
                        "raw": "The settled values has a different length than expected",
                        "cooked": "The settled values has a different length than expected"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "name": "prefix"
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "settleds"
                },
                "property": {
                  "type": "Identifier",
                  "name": "forEach"
                }
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "settled"
                    },
                    {
                      "type": "Identifier",
                      "name": "i"
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
                              "name": "assert"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "sameValue"
                            }
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
                                  "name": "settled"
                                },
                                {
                                  "type": "Literal",
                                  "value": "status",
                                  "raw": "'status'"
                                }
                              ]
                            },
                            {
                              "type": "Literal",
                              "value": true,
                              "raw": "true"
                            },
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
                                    "raw": "The settled value has a property status",
                                    "cooked": "The settled value has a property status"
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "name": "prefix"
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
                                "name": "settled"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "status"
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "expected"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "status"
                              }
                            },
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
                                    "raw": "status for item ",
                                    "cooked": "status for item "
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "",
                                    "cooked": ""
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "name": "prefix"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "settled"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "status"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": "fulfilled",
                            "raw": "'fulfilled'"
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
                                        "name": "settled"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "value",
                                        "raw": "'value'"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true"
                                  },
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
                                          "raw": "The fulfilled promise has a property named value",
                                          "cooked": "The fulfilled promise has a property named value"
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": [
                                      {
                                        "type": "Identifier",
                                        "name": "prefix"
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
                                        "name": "settled"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "reason",
                                        "raw": "'reason'"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false"
                                  },
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
                                          "raw": "The fulfilled promise has no property named reason",
                                          "cooked": "The fulfilled promise has no property named reason"
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": [
                                      {
                                        "type": "Identifier",
                                        "name": "prefix"
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
                                      "name": "settled"
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
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "expected"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "value"
                                    }
                                  },
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
                                          "raw": "value for item ",
                                          "cooked": "value for item "
                                        },
                                        "tail": false
                                      },
                                      {
                                        "type": "TemplateElement",
                                        "value": {
                                          "raw": "",
                                          "cooked": ""
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": [
                                      {
                                        "type": "Identifier",
                                        "name": "prefix"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    ]
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
                                      "name": "settled"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "status"
                                    }
                                  },
                                  {
                                    "type": "Literal",
                                    "value": "rejected",
                                    "raw": "'rejected'"
                                  },
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
                                          "raw": "Valid statuses are only fulfilled or rejected",
                                          "cooked": "Valid statuses are only fulfilled or rejected"
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": [
                                      {
                                        "type": "Identifier",
                                        "name": "prefix"
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
                                        "name": "settled"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "value",
                                        "raw": "'value'"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false"
                                  },
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
                                          "raw": "The fulfilled promise has no property named value",
                                          "cooked": "The fulfilled promise has no property named value"
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": [
                                      {
                                        "type": "Identifier",
                                        "name": "prefix"
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
                                        "name": "settled"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "reason",
                                        "raw": "'reason'"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true"
                                  },
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
                                          "raw": "The fulfilled promise has a property named reason",
                                          "cooked": "The fulfilled promise has a property named reason"
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": [
                                      {
                                        "type": "Identifier",
                                        "name": "prefix"
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
                                      "name": "settled"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "reason"
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "expected"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "reason"
                                    }
                                  },
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
                                          "raw": "Reason value for item ",
                                          "cooked": "Reason value for item "
                                        },
                                        "tail": false
                                      },
                                      {
                                        "type": "TemplateElement",
                                        "value": {
                                          "raw": "",
                                          "cooked": ""
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": [
                                      {
                                        "type": "Identifier",
                                        "name": "prefix"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    ]
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