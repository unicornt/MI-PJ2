{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "typedArrayConstructors"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "name": "Float64Array"
              },
              {
                "type": "Identifier",
                "name": "Float32Array"
              },
              {
                "type": "Identifier",
                "name": "Int32Array"
              },
              {
                "type": "Identifier",
                "name": "Int16Array"
              },
              {
                "type": "Identifier",
                "name": "Int8Array"
              },
              {
                "type": "Identifier",
                "name": "Uint32Array"
              },
              {
                "type": "Identifier",
                "name": "Uint16Array"
              },
              {
                "type": "Identifier",
                "name": "Uint8Array"
              },
              {
                "type": "Identifier",
                "name": "Uint8ClampedArray"
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
            "name": "floatArrayConstructors"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "typedArrayConstructors"
              },
              "property": {
                "type": "Identifier",
                "name": "slice"
              }
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2"
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
            "name": "intArrayConstructors"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "typedArrayConstructors"
              },
              "property": {
                "type": "Identifier",
                "name": "slice"
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
                "value": 7,
                "raw": "7"
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
            "name": "TypedArray"
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
                "name": "getPrototypeOf"
              }
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "Int8Array"
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "testWithTypedArrayConstructors"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "f"
        },
        {
          "type": "Identifier",
          "name": "selected"
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
                  "name": "constructors"
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "name": "selected"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "typedArrayConstructors"
                  }
                }
              }
            ],
            "kind": "var"
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
                  "name": "constructors"
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
              "prefix": true
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
                        "name": "constructor"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "constructors"
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
                            "name": "f"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "constructor"
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
                      "name": "e"
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "e"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "message"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": " (Testing with ",
                                  "raw": "\" (Testing with \""
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "constructor"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "name"
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": ".)",
                                "raw": "\".)\""
                              }
                            }
                          }
                        },
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "e"
                          }
                        }
                      ]
                    }
                  },
                  "finalizer": null
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
        "name": "testWithNonAtomicsFriendlyTypedArrayConstructors"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "f"
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
                "name": "testWithTypedArrayConstructors"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "f"
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "Float64Array"
                    },
                    {
                      "type": "Identifier",
                      "name": "Float32Array"
                    },
                    {
                      "type": "Identifier",
                      "name": "Uint8ClampedArray"
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
        "name": "testWithAtomicsFriendlyTypedArrayConstructors"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "f"
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
                "name": "testWithTypedArrayConstructors"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "f"
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "Int32Array"
                    },
                    {
                      "type": "Identifier",
                      "name": "Int16Array"
                    },
                    {
                      "type": "Identifier",
                      "name": "Int8Array"
                    },
                    {
                      "type": "Identifier",
                      "name": "Uint32Array"
                    },
                    {
                      "type": "Identifier",
                      "name": "Uint16Array"
                    },
                    {
                      "type": "Identifier",
                      "name": "Uint8Array"
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
        "name": "testTypedArrayConversions"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "byteConversionValues"
        },
        {
          "type": "Identifier",
          "name": "fn"
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
                  "name": "values"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "byteConversionValues"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "values"
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
                  "name": "expected"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "byteConversionValues"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "expected"
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
                "name": "testWithTypedArrayConstructors"
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "TA"
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
                              "name": "name"
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
                                    "name": "TA"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "name"
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "slice"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                },
                                {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 5,
                                    "raw": "5"
                                  },
                                  "prefix": true
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
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
                              "name": "values"
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
                                  "name": "value"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "index"
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
                                          "name": "exp"
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "expected"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "name"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "index"
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
                                          "name": "initial"
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
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "exp"
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
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "initial"
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
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
                                        "name": "fn"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "TA"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "value"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "exp"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "initial"
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