{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "buildString"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "args"
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
                  "name": "loneCodePoints"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "args"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "loneCodePoints"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "ranges"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "args"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "ranges"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "CHUNK_SIZE"
                },
                "init": {
                  "type": "Literal",
                  "value": 10000,
                  "raw": "10000"
                }
              }
            ],
            "kind": "const"
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
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Reflect"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "apply"
                    }
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "String"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "fromCodePoint"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Identifier",
                      "name": "loneCodePoints"
                    }
                  ]
                }
              }
            ],
            "kind": "let"
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
              "kind": "let"
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
                  "name": "ranges"
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
                        "name": "range"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "ranges"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    }
                  ],
                  "kind": "const"
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
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "range"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    }
                  ],
                  "kind": "const"
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
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "range"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    }
                  ],
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "codePoints"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": []
                      }
                    }
                  ],
                  "kind": "const"
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
                          "name": "length"
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "codePoint"
                        },
                        "init": {
                          "type": "Identifier",
                          "name": "start"
                        }
                      }
                    ],
                    "kind": "let"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<=",
                    "left": {
                      "type": "Identifier",
                      "name": "codePoint"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "end"
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "argument": {
                      "type": "Identifier",
                      "name": "codePoint"
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
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "codePoints"
                            },
                            "property": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "argument": {
                                "type": "Identifier",
                                "name": "length"
                              },
                              "prefix": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "codePoint"
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "length"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "CHUNK_SIZE"
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
                                  "name": "result"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Reflect"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "apply"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "String"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "fromCodePoint"
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "codePoints"
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
                                    "type": "Identifier",
                                    "name": "codePoints"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "length"
                                  }
                                },
                                "right": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "length"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
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
                          "name": "Reflect"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "apply"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "String"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "fromCodePoint"
                          }
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
                        },
                        {
                          "type": "Identifier",
                          "name": "codePoints"
                        }
                      ]
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
        "name": "testPropertyEscapes"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "regex"
        },
        {
          "type": "Identifier",
          "name": "string"
        },
        {
          "type": "Identifier",
          "name": "expression"
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
                    "name": "regex"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "test"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "string"
                  }
                ]
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "left": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "symbol"
                        },
                        "init": null
                      }
                    ],
                    "kind": "const"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "string"
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
                              "name": "hex"
                            },
                            "init": {
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
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "symbol"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "codePointAt"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
                                          ]
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
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "toUpperCase"
                                    }
                                  },
                                  "arguments": []
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "padStart"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 6,
                                  "raw": "6"
                                },
                                {
                                  "type": "Literal",
                                  "value": "0",
                                  "raw": "\"0\""
                                }
                              ]
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
                                  "name": "regex"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "test"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "symbol"
                                }
                              ]
                            },
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "\\`",
                                    "cooked": "`"
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "\\` should match U+",
                                    "cooked": "` should match U+"
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": " (\\`",
                                    "cooked": " (`"
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "\\`)",
                                    "cooked": "`)"
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "name": "expression"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "hex"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "symbol"
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
        "name": "matchValidator"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "expectedEntries"
        },
        {
          "type": "Identifier",
          "name": "expectedIndex"
        },
        {
          "type": "Identifier",
          "name": "expectedInput"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "match"
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
                          "name": "compareArray"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "match"
                        },
                        {
                          "type": "Identifier",
                          "name": "expectedEntries"
                        },
                        {
                          "type": "Literal",
                          "value": "Match entries",
                          "raw": "'Match entries'"
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
                            "name": "match"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "index"
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "expectedIndex"
                        },
                        {
                          "type": "Literal",
                          "value": "Match index",
                          "raw": "'Match index'"
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
                            "name": "match"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "input"
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "expectedInput"
                        },
                        {
                          "type": "Literal",
                          "value": "Match input",
                          "raw": "'Match input'"
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
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
}