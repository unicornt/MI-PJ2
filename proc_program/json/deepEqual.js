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
            "name": "deepEqual"
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
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "format"
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "assert"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "deepEqual"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "format"
                      }
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
                            "type": "Identifier",
                            "name": "assert"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "deepEqual"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_compare"
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
                    {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "Expected ",
                            "cooked": "Expected "
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": " to be structurally equal to ",
                            "cooked": " to be structurally equal to "
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": ". ",
                            "cooked": ". "
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "format"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "actual"
                            }
                          ]
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "format"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "expected"
                            }
                          ]
                        },
                        {
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
              "name": "assert"
            },
            "property": {
              "type": "Identifier",
              "name": "deepEqual"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "format"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "value"
            },
            {
              "type": "Identifier",
              "name": "seen"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "SwitchStatement",
                "discriminant": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "name": "value"
                  },
                  "prefix": true
                },
                "cases": [
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'"
                    },
                    "consequent": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "JSON"
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "JSON"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "stringify"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "value"
                              }
                            ]
                          },
                          "alternate": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "\"",
                                  "cooked": "\""
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "\"",
                                  "cooked": "\""
                                },
                                "tail": true
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Identifier",
                                "name": "value"
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "'number'"
                    },
                    "consequent": []
                  },
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "'boolean'"
                    },
                    "consequent": []
                  },
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "symbol",
                      "raw": "'symbol'"
                    },
                    "consequent": []
                  },
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "bigint",
                      "raw": "'bigint'"
                    },
                    "consequent": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "toString"
                            }
                          },
                          "arguments": []
                        }
                      }
                    ]
                  },
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "undefined",
                      "raw": "'undefined'"
                    },
                    "consequent": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "undefined",
                          "raw": "'undefined'"
                        }
                      }
                    ]
                  },
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "function",
                      "raw": "'function'"
                    },
                    "consequent": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "[Function",
                                "cooked": "[Function"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "]",
                                "cooked": "]"
                              },
                              "tail": true
                            }
                          ],
                          "expressions": [
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "name"
                                }
                              },
                              "consequent": {
                                "type": "TemplateLiteral",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": ": ",
                                      "cooked": ": "
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "name"
                                    }
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "object",
                      "raw": "'object'"
                    },
                    "consequent": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "null",
                            "raw": "'null'"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "Date"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "Date \"",
                                  "cooked": "Date \""
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "\"",
                                  "cooked": "\""
                                },
                                "tail": true
                              }
                            ],
                            "expressions": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toISOString"
                                  }
                                },
                                "arguments": []
                              }
                            ]
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "RegExp"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "toString"
                              }
                            },
                            "arguments": []
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "seen"
                          },
                          "prefix": true
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
                                  "name": "seen"
                                },
                                "right": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "counter"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "shorthand": false
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "map"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "Map"
                                        },
                                        "arguments": []
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "shorthand": false
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "usage"
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
                                    "type": "Identifier",
                                    "name": "seen"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "map"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
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
                        ],
                        "kind": "let"
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "usage"
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
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "usage"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "used"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TemplateLiteral",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "[Ref: #",
                                      "cooked": "[Ref: #"
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "]",
                                      "cooked": "]"
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
                                      "name": "usage"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "id"
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "usage"
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "id"
                                },
                                "computed": false,
                                "value": {
                                  "type": "UpdateExpression",
                                  "operator": "++",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "seen"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "counter"
                                    }
                                  },
                                  "prefix": true
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "used"
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "seen"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "map"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "set"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "value"
                            },
                            {
                              "type": "Identifier",
                              "name": "usage"
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
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "Set"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "value": "undefined",
                              "raw": "\"undefined\""
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "instanceof",
                            "left": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "Set"
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TemplateLiteral",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "Set {",
                                      "cooked": "Set {"
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "}",
                                      "cooked": "}"
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
                                                "name": "Array"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "from"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "value"
                                              }
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "map"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "name": "value"
                                              }
                                            ],
                                            "body": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "assert"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "deepEqual"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "format"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "value"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "seen"
                                                }
                                              ]
                                            },
                                            "generator": false,
                                            "expression": true,
                                            "async": false
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "join"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": ", ",
                                        "raw": "', '"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "usage"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "used"
                                      }
                                    },
                                    "consequent": {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": " as #",
                                            "cooked": " as #"
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "usage"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "id"
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "''"
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
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "Map"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "value": "undefined",
                              "raw": "\"undefined\""
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "instanceof",
                            "left": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "Map"
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TemplateLiteral",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "Map {",
                                      "cooked": "Map {"
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "}",
                                      "cooked": "}"
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
                                                "name": "Array"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "from"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "value"
                                              }
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "map"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "name": "pair"
                                              }
                                            ],
                                            "body": {
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
                                                    "raw": " => ",
                                                    "cooked": " => "
                                                  },
                                                  "tail": false
                                                },
                                                {
                                                  "type": "TemplateElement",
                                                  "value": {
                                                    "raw": "}",
                                                    "cooked": "}"
                                                  },
                                                  "tail": true
                                                }
                                              ],
                                              "expressions": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "assert"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "deepEqual"
                                                      }
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "format"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "pair"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                      }
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "seen"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "MemberExpression",
                                                      "computed": false,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "assert"
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "deepEqual"
                                                      }
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "format"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "name": "pair"
                                                      },
                                                      "property": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                      }
                                                    },
                                                    {
                                                      "type": "Identifier",
                                                      "name": "seen"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            "generator": false,
                                            "expression": true,
                                            "async": false
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "join"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": ", ",
                                        "raw": "', '"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "usage"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "used"
                                      }
                                    },
                                    "consequent": {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": " as #",
                                            "cooked": " as #"
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "usage"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "id"
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "''"
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
                          "type": "ConditionalExpression",
                          "test": {
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
                          "consequent": {
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
                                "name": "value"
                              }
                            ]
                          },
                          "alternate": {
                            "type": "BinaryExpression",
                            "operator": "instanceof",
                            "left": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "Array"
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TemplateLiteral",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "[",
                                      "cooked": "["
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "]",
                                      "cooked": "]"
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
                                            "name": "value"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "map"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "name": "value"
                                              }
                                            ],
                                            "body": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "assert"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "deepEqual"
                                                  }
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "format"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "value"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "seen"
                                                }
                                              ]
                                            },
                                            "generator": false,
                                            "expression": true,
                                            "async": false
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "join"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": ", ",
                                        "raw": "', '"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "usage"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "used"
                                      }
                                    },
                                    "consequent": {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": " as #",
                                            "cooked": " as #"
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "usage"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "id"
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "''"
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
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "tag"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "in",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toStringTag"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
                              },
                              "consequent": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toStringTag"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "Object",
                                "raw": "'Object'"
                              }
                            }
                          }
                        ],
                        "kind": "let"
                      },
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
                              "name": "tag"
                            },
                            "right": {
                              "type": "Literal",
                              "value": "Object",
                              "raw": "'Object'"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
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
                                  "name": "value"
                                }
                              ]
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
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "tag"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "[Object: null prototype]",
                                  "raw": "'[Object: null prototype]'"
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
                                "raw": "{ ",
                                "cooked": "{ "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": " }",
                                "cooked": " }"
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
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "tag"
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
                                      "raw": " ",
                                      "cooked": " "
                                    },
                                    "tail": true
                                  }
                                ],
                                "expressions": [
                                  {
                                    "type": "Identifier",
                                    "name": "tag"
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''"
                              }
                            },
                            {
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
                                          "name": "Object"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "keys"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "value"
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "map"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "key"
                                        }
                                      ],
                                      "body": {
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "key"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "toString"
                                              }
                                            },
                                            "arguments": []
                                          },
                                          {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "assert"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "deepEqual"
                                                }
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "format"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "value"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "key"
                                                }
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "seen"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": true,
                                      "async": false
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "join"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ", ",
                                  "raw": "', '"
                                }
                              ]
                            },
                            {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "usage"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "used"
                                }
                              },
                              "consequent": {
                                "type": "TemplateLiteral",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": " as #",
                                      "cooked": " as #"
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "usage"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "id"
                                    }
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "SwitchCase",
                    "test": null,
                    "consequent": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "prefix": true
                        }
                      }
                    ]
                  }
                ]
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
              "name": "assert"
            },
            "property": {
              "type": "Identifier",
              "name": "deepEqual"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "_compare"
          }
        },
        "right": {
          "type": "CallExpression",
          "callee": {
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
                        "name": "EQUAL"
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
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
                        "name": "NOT_EQUAL"
                      },
                      "init": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
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
                        "name": "UNKNOWN"
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
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "deepEqual"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "compareEquality"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "a"
                              },
                              {
                                "type": "Identifier",
                                "name": "b"
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "EQUAL"
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
                    "name": "compareEquality"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "compareIf"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "isOptional"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "compareOptionality"
                                  }
                                ]
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "compareIf"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "isPrimitiveEquatable"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "comparePrimitiveEquality"
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "compareIf"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "isObjectEquatable"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "compareObjectEquality"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "cache"
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
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
                    "name": "compareIf"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "test"
                    },
                    {
                      "type": "Identifier",
                      "name": "compare"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "test"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              ]
                            },
                            "prefix": true
                          },
                          "consequent": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "test"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                ]
                              },
                              "prefix": true
                            },
                            "consequent": {
                              "type": "Identifier",
                              "name": "UNKNOWN"
                            },
                            "alternate": {
                              "type": "Identifier",
                              "name": "NOT_EQUAL"
                            }
                          },
                          "alternate": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "test"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                ]
                              },
                              "prefix": true
                            },
                            "consequent": {
                              "type": "Identifier",
                              "name": "NOT_EQUAL"
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "cacheComparison"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "compare"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "cache"
                                }
                              ]
                            }
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
                    "name": "tryCompareStrictEquality"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
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
                            "type": "Identifier",
                            "name": "EQUAL"
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "UNKNOWN"
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
                    "name": "tryCompareTypeOfEquality"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "a"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "prefix": true
                            }
                          },
                          "consequent": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "UNKNOWN"
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
                    "name": "tryCompareToStringTagEquality"
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
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "aTag"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "in",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toStringTag"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              },
                              "consequent": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toStringTag"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "undefined"
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
                              "name": "bTag"
                            },
                            "init": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "in",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toStringTag"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "b"
                                }
                              },
                              "consequent": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toStringTag"
                                  }
                                }
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "undefined"
                              }
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "Identifier",
                              "name": "aTag"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "bTag"
                            }
                          },
                          "consequent": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "UNKNOWN"
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
                    "name": "isOptional"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "value"
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
                              "type": "Identifier",
                              "name": "value"
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null"
                            }
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
                    "name": "compareOptionality"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "tryCompareStrictEquality"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "a"
                              },
                              {
                                "type": "Identifier",
                                "name": "b"
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
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
                    "name": "isPrimitiveEquatable"
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
                        "type": "SwitchStatement",
                        "discriminant": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "prefix": true
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "'string'"
                            },
                            "consequent": []
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "number",
                              "raw": "'number'"
                            },
                            "consequent": []
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "bigint",
                              "raw": "'bigint'"
                            },
                            "consequent": []
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "'boolean'"
                            },
                            "consequent": []
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "symbol",
                              "raw": "'symbol'"
                            },
                            "consequent": [
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
                          {
                            "type": "SwitchCase",
                            "test": null,
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "isBoxed"
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
                          }
                        ]
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
                    "name": "comparePrimitiveEquality"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "isBoxed"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "a"
                            }
                          ]
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "valueOf"
                                }
                              },
                              "arguments": []
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "isBoxed"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "b"
                            }
                          ]
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "valueOf"
                                }
                              },
                              "arguments": []
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "tryCompareStrictEquality"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                ]
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "tryCompareTypeOfEquality"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "compareIf"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "isNaNEquatable"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "compareNaNEquality"
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
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
                    "name": "isNaNEquatable"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "number",
                            "raw": "'number'"
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
                    "name": "compareNaNEquality"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "isNaN"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              ]
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "isNaN"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "b"
                                }
                              ]
                            }
                          },
                          "consequent": {
                            "type": "Identifier",
                            "name": "EQUAL"
                          },
                          "alternate": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
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
                    "name": "isObjectEquatable"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "value"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "object",
                            "raw": "'object'"
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
                    "name": "compareObjectEquality"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
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
                            "name": "cache"
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "cache"
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Map"
                              },
                              "arguments": []
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "||",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "operator": "||",
                                          "left": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "getCache"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "cache"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "a"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "b"
                                              }
                                            ]
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "name": "setCache"
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "cache"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "a"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "b"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "EQUAL"
                                              }
                                            ]
                                          }
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "cacheComparison"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "a"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "b"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "tryCompareStrictEquality"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "cache"
                                            }
                                          ]
                                        }
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "cacheComparison"
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "a"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "b"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "tryCompareToStringTagEquality"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "cache"
                                          }
                                        ]
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "compareIf"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "a"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "b"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "isValueOfEquatable"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "compareValueOfEquality"
                                        }
                                      ]
                                    }
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "compareIf"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "a"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "b"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "isToStringEquatable"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "compareToStringEquality"
                                      }
                                    ]
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "compareIf"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "a"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "b"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "isArrayLikeEquatable"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "compareArrayLikeEquality"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "cache"
                                    }
                                  ]
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "compareIf"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "isStructurallyEquatable"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "compareStructuralEquality"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "cache"
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "compareIf"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "isIterableEquatable"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "compareIterableEquality"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "cache"
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "cacheComparison"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "a"
                              },
                              {
                                "type": "Identifier",
                                "name": "b"
                              },
                              {
                                "type": "Identifier",
                                "name": "fail"
                              },
                              {
                                "type": "Identifier",
                                "name": "cache"
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
                    "name": "isBoxed"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "instanceof",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "String"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "instanceof",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "Number"
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "instanceof",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "Boolean"
                                }
                              }
                            },
                            "right": {
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
                                    "name": "Symbol"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "function",
                                  "raw": "'function'"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "instanceof",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "Symbol"
                                }
                              }
                            }
                          },
                          "right": {
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
                                  "name": "BigInt"
                                },
                                "prefix": true
                              },
                              "right": {
                                "type": "Literal",
                                "value": "function",
                                "raw": "'function'"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "instanceof",
                              "left": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "BigInt"
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
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "isValueOfEquatable"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "Date"
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
                    "name": "compareValueOfEquality"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "compareIf"
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "valueOf"
                                  }
                                },
                                "arguments": []
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "valueOf"
                                  }
                                },
                                "arguments": []
                              },
                              {
                                "type": "Identifier",
                                "name": "isPrimitiveEquatable"
                              },
                              {
                                "type": "Identifier",
                                "name": "comparePrimitiveEquality"
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
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
                    "name": "isToStringEquatable"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "RegExp"
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
                    "name": "compareToStringEquality"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "compareIf"
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toString"
                                  }
                                },
                                "arguments": []
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "toString"
                                  }
                                },
                                "arguments": []
                              },
                              {
                                "type": "Identifier",
                                "name": "isPrimitiveEquatable"
                              },
                              {
                                "type": "Identifier",
                                "name": "comparePrimitiveEquality"
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
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
                    "name": "isArrayLikeEquatable"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "LogicalExpression",
                                      "operator": "||",
                                      "left": {
                                        "type": "LogicalExpression",
                                        "operator": "||",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "operator": "||",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "operator": "||",
                                            "left": {
                                              "type": "LogicalExpression",
                                              "operator": "||",
                                              "left": {
                                                "type": "ConditionalExpression",
                                                "test": {
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
                                                "consequent": {
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
                                                      "name": "value"
                                                    }
                                                  ]
                                                },
                                                "alternate": {
                                                  "type": "BinaryExpression",
                                                  "operator": "instanceof",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "value"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "Array"
                                                  }
                                                }
                                              },
                                              "right": {
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
                                                      "name": "Uint8Array"
                                                    },
                                                    "prefix": true
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": "function",
                                                    "raw": "'function'"
                                                  }
                                                },
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "operator": "instanceof",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "value"
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "name": "Uint8Array"
                                                  }
                                                }
                                              }
                                            },
                                            "right": {
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
                                                    "name": "Uint8ClampedArray"
                                                  },
                                                  "prefix": true
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "function",
                                                  "raw": "'function'"
                                                }
                                              },
                                              "right": {
                                                "type": "BinaryExpression",
                                                "operator": "instanceof",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "value"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "Uint8ClampedArray"
                                                }
                                              }
                                            }
                                          },
                                          "right": {
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
                                                  "name": "Uint16Array"
                                                },
                                                "prefix": true
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "value": "function",
                                                "raw": "'function'"
                                              }
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "operator": "instanceof",
                                              "left": {
                                                "type": "Identifier",
                                                "name": "value"
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "Uint16Array"
                                              }
                                            }
                                          }
                                        },
                                        "right": {
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
                                                "name": "Uint32Array"
                                              },
                                              "prefix": true
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": "function",
                                              "raw": "'function'"
                                            }
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "instanceof",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "value"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "Uint32Array"
                                            }
                                          }
                                        }
                                      },
                                      "right": {
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
                                              "name": "Int8Array"
                                            },
                                            "prefix": true
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "function",
                                            "raw": "'function'"
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "instanceof",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "value"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "Int8Array"
                                          }
                                        }
                                      }
                                    },
                                    "right": {
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
                                            "name": "Int16Array"
                                          },
                                          "prefix": true
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "function",
                                          "raw": "'function'"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "instanceof",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "value"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "Int16Array"
                                        }
                                      }
                                    }
                                  },
                                  "right": {
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
                                          "name": "Int32Array"
                                        },
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "function",
                                        "raw": "'function'"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "instanceof",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "value"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "Int32Array"
                                      }
                                    }
                                  }
                                },
                                "right": {
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
                                        "name": "Float32Array"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "function",
                                      "raw": "'function'"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "instanceof",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "Float32Array"
                                    }
                                  }
                                }
                              },
                              "right": {
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
                                      "name": "Float64Array"
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "function",
                                    "raw": "'function'"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "instanceof",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "Float64Array"
                                  }
                                }
                              }
                            },
                            "right": {
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
                                    "name": "BigUint64Array"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "function",
                                  "raw": "'function'"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "instanceof",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "BigUint64Array"
                                }
                              }
                            }
                          },
                          "right": {
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
                                  "name": "BigInt64Array"
                                },
                                "prefix": true
                              },
                              "right": {
                                "type": "Literal",
                                "value": "function",
                                "raw": "'function'"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "instanceof",
                              "left": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "BigInt64Array"
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
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "compareArrayLikeEquality"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "NOT_EQUAL"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ForStatement",
                        "init": {
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "i"
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
                              "name": "a"
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
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "compareEquality"
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "a"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "b"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "cache"
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "NOT_EQUAL"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "NOT_EQUAL"
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "EQUAL"
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
                    "name": "isStructurallyEquatable"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
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
                                          "name": "Promise"
                                        },
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "function",
                                        "raw": "'function'"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "instanceof",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "value"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "Promise"
                                      }
                                    }
                                  },
                                  "right": {
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
                                          "name": "WeakMap"
                                        },
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "function",
                                        "raw": "'function'"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "instanceof",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "value"
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "WeakMap"
                                      }
                                    }
                                  }
                                },
                                "right": {
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
                                        "name": "WeakSet"
                                      },
                                      "prefix": true
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": "function",
                                      "raw": "'function'"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "instanceof",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "WeakSet"
                                    }
                                  }
                                }
                              },
                              "right": {
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
                                      "name": "Map"
                                    },
                                    "prefix": true
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "function",
                                    "raw": "'function'"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "instanceof",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "value"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "Map"
                                  }
                                }
                              }
                            },
                            "right": {
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
                                    "name": "Set"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "function",
                                  "raw": "'function'"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "instanceof",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "Set"
                                }
                              }
                            }
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
                    "name": "compareStructuralEquality"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
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
                              "name": "aKeys"
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
                        "type": "ForInStatement",
                        "left": {
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "key"
                              },
                              "init": null
                            }
                          ],
                          "kind": "var"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "a"
                        },
                        "body": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "aKeys"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "key"
                              }
                            ]
                          }
                        },
                        "each": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "bKeys"
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
                        "type": "ForInStatement",
                        "left": {
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "key"
                              },
                              "init": null
                            }
                          ],
                          "kind": "var"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "body": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "bKeys"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "key"
                              }
                            ]
                          }
                        },
                        "each": false
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "!==",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "aKeys"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "bKeys"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "name": "NOT_EQUAL"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "aKeys"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "sort"
                            }
                          },
                          "arguments": []
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
                              "name": "bKeys"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "sort"
                            }
                          },
                          "arguments": []
                        }
                      },
                      {
                        "type": "ForStatement",
                        "init": {
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "name": "i"
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
                              "name": "aKeys"
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
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "aKey"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "aKeys"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
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
                                    "name": "bKey"
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "bKeys"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
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
                                "operator": "===",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "compareEquality"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "aKey"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "bKey"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "cache"
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "NOT_EQUAL"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "NOT_EQUAL"
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
                                "operator": "===",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "compareEquality"
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "a"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "aKey"
                                      }
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "b"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "bKey"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "cache"
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "NOT_EQUAL"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "NOT_EQUAL"
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "compareIf"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "a"
                              },
                              {
                                "type": "Identifier",
                                "name": "b"
                              },
                              {
                                "type": "Identifier",
                                "name": "isIterableEquatable"
                              },
                              {
                                "type": "Identifier",
                                "name": "compareIterableEquality"
                              },
                              {
                                "type": "Identifier",
                                "name": "cache"
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "EQUAL"
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
                    "name": "isIterableEquatable"
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
                        "type": "ReturnStatement",
                        "argument": {
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
                                "name": "Symbol"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "'function'"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "iterator"
                                  }
                                }
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "'function'"
                            }
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
                    "name": "compareIteratorEquality"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
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
                                    "name": "Map"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "function",
                                  "raw": "'function'"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "instanceof",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "Map"
                                }
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "instanceof",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "Map"
                              }
                            }
                          },
                          "right": {
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
                                    "name": "Set"
                                  },
                                  "prefix": true
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "function",
                                  "raw": "'function'"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "instanceof",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "Set"
                                }
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "instanceof",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "Set"
                              }
                            }
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "!==",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "size"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "size"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "name": "NOT_EQUAL"
                                }
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "ar"
                            },
                            "init": null
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "br"
                            },
                            "init": null
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true"
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
                                  "name": "ar"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "a"
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "br"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "b"
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
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "ar"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "done"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "br"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "done"
                                      }
                                    },
                                    "consequent": {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "EQUAL"
                                      }
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "b"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "return"
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
                                            "name": "b"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "return"
                                          }
                                        },
                                        "arguments": []
                                      }
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "NOT_EQUAL"
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "br"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "done"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "a"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "return"
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
                                            "name": "a"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "return"
                                          }
                                        },
                                        "arguments": []
                                      }
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "NOT_EQUAL"
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
                                "operator": "===",
                                "left": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "compareEquality"
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "ar"
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
                                        "name": "br"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "value"
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "cache"
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "NOT_EQUAL"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "a"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "return"
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
                                            "name": "a"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "return"
                                          }
                                        },
                                        "arguments": []
                                      }
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "b"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "return"
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
                                            "name": "b"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "return"
                                          }
                                        },
                                        "arguments": []
                                      }
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "NOT_EQUAL"
                                    }
                                  }
                                ]
                              },
                              "alternate": null
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
                    "name": "compareIterableEquality"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "compareIteratorEquality"
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "iterator"
                                  }
                                }
                              },
                              "arguments": []
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Symbol"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "iterator"
                                  }
                                }
                              },
                              "arguments": []
                            },
                            {
                              "type": "Identifier",
                              "name": "cache"
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
                    "name": "cacheComparison"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "a"
                    },
                    {
                      "type": "Identifier",
                      "name": "b"
                    },
                    {
                      "type": "Identifier",
                      "name": "compare"
                    },
                    {
                      "type": "Identifier",
                      "name": "cache"
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
                              "name": "result"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "compare"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "cache"
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
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "Identifier",
                            "name": "cache"
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "name": "result"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "EQUAL"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "name": "result"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "NOT_EQUAL"
                              }
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
                                  "name": "setCache"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "cache"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "a"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "b"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "result"
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
                          "name": "result"
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
                    "name": "fail"
                  },
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "NOT_EQUAL"
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
                    "name": "setCache"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "cache"
                    },
                    {
                      "type": "Identifier",
                      "name": "left"
                    },
                    {
                      "type": "Identifier",
                      "name": "right"
                    },
                    {
                      "type": "Identifier",
                      "name": "result"
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
                              "name": "otherCache"
                            },
                            "init": null
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "otherCache"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "cache"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "get"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "left"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "otherCache"
                          },
                          "prefix": true
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
                                "name": "cache"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "set"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "left"
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "otherCache"
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "Map"
                                  },
                                  "arguments": []
                                }
                              }
                            ]
                          }
                        },
                        "alternate": null
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
                              "name": "otherCache"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "set"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "right"
                            },
                            {
                              "type": "Identifier",
                              "name": "result"
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
                            "name": "otherCache"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "cache"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "get"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "right"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "name": "otherCache"
                          },
                          "prefix": true
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
                                "name": "cache"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "set"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "right"
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "otherCache"
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "Map"
                                  },
                                  "arguments": []
                                }
                              }
                            ]
                          }
                        },
                        "alternate": null
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
                              "name": "otherCache"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "set"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "left"
                            },
                            {
                              "type": "Identifier",
                              "name": "result"
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
                    "name": "getCache"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "cache"
                    },
                    {
                      "type": "Identifier",
                      "name": "left"
                    },
                    {
                      "type": "Identifier",
                      "name": "right"
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
                              "name": "otherCache"
                            },
                            "init": null
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
                              "name": "result"
                            },
                            "init": null
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "otherCache"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "cache"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "get"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "left"
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
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "Identifier",
                              "name": "otherCache"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "otherCache"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "right"
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "result"
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "result"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "otherCache"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "cache"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "get"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "right"
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
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "Identifier",
                              "name": "otherCache"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "otherCache"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "get"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "left"
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "result"
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "result"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "UNKNOWN"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "deepEqual"
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
    }
  ],
  "sourceType": "script"
}