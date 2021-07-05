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
            "name": "v3"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1337,
                "raw": "1337"
              },
              {
                "type": "Literal",
                "value": 1337,
                "raw": "1337"
              },
              {
                "type": "Literal",
                "value": 1337,
                "raw": "1337"
              },
              {
                "type": "Literal",
                "value": 1337,
                "raw": "1337"
              }
            ]
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
            "name": "v6"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1337,
                "raw": "1337"
              },
              {
                "type": "Literal",
                "value": 1337,
                "raw": "1337"
              }
            ]
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "v7"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "v8"
        }
      ],
      "body": {
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
                    "name": "v9"
                  },
                  "init": null
                }
              ],
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "name": "v8"
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
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "v8"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42"
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
                        "name": "v10"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "v8"
                        },
                        "property": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 698666199,
                            "raw": "698666199"
                          },
                          "prefix": true
                        }
                      }
                    }
                  ],
                  "kind": "const"
                }
              ]
            },
            "each": false
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "v14"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "v7"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "v6"
                    }
                  ]
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
                  "name": "v15"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "v7"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1337,
                      "raw": "1337"
                    }
                  ]
                }
              }
            ],
            "kind": "const"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}