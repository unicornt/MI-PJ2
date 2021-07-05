{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "allowProxyTraps"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "overrides"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "throwTest262Error"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "msg"
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
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "msg"
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
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "name": "overrides"
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
                      "name": "overrides"
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": []
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "getPrototypeOf"
                  },
                  "computed": false,
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "getPrototypeOf"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[GetPrototypeOf]] trap called",
                          "raw": "'[[GetPrototypeOf]] trap called'"
                        }
                      ]
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "setPrototypeOf"
                  },
                  "computed": false,
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setPrototypeOf"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[SetPrototypeOf]] trap called",
                          "raw": "'[[SetPrototypeOf]] trap called'"
                        }
                      ]
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "isExtensible"
                  },
                  "computed": false,
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "isExtensible"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[IsExtensible]] trap called",
                          "raw": "'[[IsExtensible]] trap called'"
                        }
                      ]
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "preventExtensions"
                  },
                  "computed": false,
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "preventExtensions"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[PreventExtensions]] trap called",
                          "raw": "'[[PreventExtensions]] trap called'"
                        }
                      ]
                    }
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
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "getOwnPropertyDescriptor"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[GetOwnProperty]] trap called",
                          "raw": "'[[GetOwnProperty]] trap called'"
                        }
                      ]
                    }
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
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "has"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[HasProperty]] trap called",
                          "raw": "'[[HasProperty]] trap called'"
                        }
                      ]
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "get"
                  },
                  "computed": false,
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "get"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[Get]] trap called",
                          "raw": "'[[Get]] trap called'"
                        }
                      ]
                    }
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
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[Set]] trap called",
                          "raw": "'[[Set]] trap called'"
                        }
                      ]
                    }
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
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "deleteProperty"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[Delete]] trap called",
                          "raw": "'[[Delete]] trap called'"
                        }
                      ]
                    }
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
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "defineProperty"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[DefineOwnProperty]] trap called",
                          "raw": "'[[DefineOwnProperty]] trap called'"
                        }
                      ]
                    }
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "throwTest262Error"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "[[Enumerate]] trap called: this trap has been removed",
                        "raw": "'[[Enumerate]] trap called: this trap has been removed'"
                      }
                    ]
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
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "ownKeys"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[OwnPropertyKeys]] trap called",
                          "raw": "'[[OwnPropertyKeys]] trap called'"
                        }
                      ]
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "apply"
                  },
                  "computed": false,
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "apply"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[Call]] trap called",
                          "raw": "'[[Call]] trap called'"
                        }
                      ]
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "construct"
                  },
                  "computed": false,
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "overrides"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "construct"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "throwTest262Error"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "[[Construct]] trap called",
                          "raw": "'[[Construct]] trap called'"
                        }
                      ]
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
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