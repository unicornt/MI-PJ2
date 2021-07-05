{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "opt"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "arg"
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
                  "name": "x"
                },
                "init": {
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
                "type": "Identifier",
                "name": "a1"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Array"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 16,
                    "raw": "0x10"
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
                "name": "a2"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Array"
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
          },
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
                  "name": "a2"
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "right": {
                "type": "Literal",
                "value": 1.1,
                "raw": "1.1"
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "a2"
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              },
              "right": {
                "type": "Literal",
                "value": 1.1,
                "raw": "1.1"
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "a1"
                },
                "property": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": ">>",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 16,
                      "raw": "16"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 15728640,
                    "raw": "0xf00000"
                  }
                }
              },
              "right": {
                "type": "Literal",
                "value": 1.39064994160909e-309,
                "raw": "1.39064994160909e-309"
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
            "name": "a1"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "a2"
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
            "name": "small"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1.1,
                "raw": "1.1"
              }
            ]
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
            "name": "large"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1.1,
                "raw": "1.1"
              },
              {
                "type": "Literal",
                "value": 1.1,
                "raw": "1.1"
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
            "type": "Identifier",
            "name": "large"
          },
          "property": {
            "type": "Identifier",
            "name": "length"
          }
        },
        "right": {
          "type": "Literal",
          "value": 65536,
          "raw": "65536"
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
            "type": "Identifier",
            "name": "large"
          },
          "property": {
            "type": "Identifier",
            "name": "fill"
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 1.1,
            "raw": "1.1"
          }
        ]
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
              "name": "j"
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
          "name": "j"
        },
        "right": {
          "type": "Literal",
          "value": 100000,
          "raw": "100000"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "j"
        },
        "prefix": false
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
                  "type": "Identifier",
                  "name": "opt"
                },
                "property": {
                  "type": "Identifier",
                  "name": "apply"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "name": "small"
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "opt"
          },
          "property": {
            "type": "Identifier",
            "name": "apply"
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null"
          },
          {
            "type": "Identifier",
            "name": "large"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}