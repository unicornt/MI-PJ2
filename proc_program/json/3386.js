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
            "name": "y"
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "t"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3"
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
            "name": "t2"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4"
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
            "name": "mp"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Proxy"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "t2"
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "get"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
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
                                  "name": "a"
                                },
                                "init": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
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
                                  "name": "reverse"
                                }
                              },
                              "arguments": []
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "y"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "==",
                              "left": {
                                "type": "Identifier",
                                "name": "y"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "oTarget"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "__proto__"
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "temp"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "__proto__"
                                      }
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
                                        "name": "t"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "length"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 10000,
                                      "raw": "10000"
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
                                          "name": "temp"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "fill"
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
                                        "name": "t"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 7,
                                        "raw": "7"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 1000,
                                        "raw": "1000"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 5,
                                    "raw": "5"
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
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "oTarget"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "sKey"
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "oTarget"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getItem"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "sKey"
                                    }
                                  ]
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "undefined"
                              }
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
                      "type": "Identifier",
                      "name": "set"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
                        },
                        {
                          "type": "Identifier",
                          "name": "vValue"
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "in",
                              "left": {
                                "type": "Identifier",
                                "name": "sKey"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "oTarget"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "oTarget"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "setItem"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "sKey"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "vValue"
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
                      "type": "Identifier",
                      "name": "deleteProperty"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "in",
                              "left": {
                                "type": "Identifier",
                                "name": "sKey"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "oTarget"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "oTarget"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "removeItem"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "sKey"
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
                      "type": "Identifier",
                      "name": "enumerate"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "oTarget"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "keys"
                                }
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
                      "type": "Identifier",
                      "name": "ownKeys"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "oTarget"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "keys"
                                }
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
                      "type": "Identifier",
                      "name": "has"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "defineProperty"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
                        },
                        {
                          "type": "Identifier",
                          "name": "oDesc"
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
                                "type": "Identifier",
                                "name": "oDesc"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "in",
                                "left": {
                                  "type": "Literal",
                                  "value": "value",
                                  "raw": "\"value\""
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "oDesc"
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
                                        "name": "oTarget"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "setItem"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "sKey"
                                      },
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "oDesc"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "value"
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
                              "name": "oTarget"
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
                      "type": "Identifier",
                      "name": "getOwnPropertyDescriptor"
                    },
                    "computed": false,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "oTarget"
                        },
                        {
                          "type": "Identifier",
                          "name": "sKey"
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
                                  "name": "vValue"
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "oTarget"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getItem"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "sKey"
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
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "name": "vValue"
                              },
                              "consequent": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "value"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "Identifier",
                                      "name": "vValue"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "writable"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "enumerable"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "configurable"
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
                              },
                              "alternate": {
                                "type": "Identifier",
                                "name": "undefined"
                              }
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
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "f"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": []
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
            "name": "q"
          },
          "init": {
            "type": "Identifier",
            "name": "f"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "t"
          },
          "property": {
            "type": "Identifier",
            "name": "length"
          }
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "o"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": []
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
            "name": "o"
          },
          {
            "type": "Literal",
            "value": "3",
            "raw": "'3'"
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "get"
                },
                "computed": false,
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
                          "type": "Identifier",
                          "name": "temperature"
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "t"
          },
          "property": {
            "type": "Identifier",
            "name": "__proto__"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "mp"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "q"
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "name": "t"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}