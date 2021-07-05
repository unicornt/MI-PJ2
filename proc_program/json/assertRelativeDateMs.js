{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "assertRelativeDateMs"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "date"
        },
        {
          "type": "Identifier",
          "name": "expectedMs"
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
                  "name": "actualMs"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "date"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "valueOf"
                    }
                  },
                  "arguments": []
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
                  "name": "localOffset"
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "date"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "getTimezoneOffset"
                      }
                    },
                    "arguments": []
                  },
                  "right": {
                    "type": "Literal",
                    "value": 60000,
                    "raw": "60000"
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
              "operator": "!==",
              "left": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "Identifier",
                  "name": "actualMs"
                },
                "right": {
                  "type": "Identifier",
                  "name": "localOffset"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "expectedMs"
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
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "value": "Expected ",
                                "raw": "'Expected '"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "date"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": " to be ",
                              "raw": "' to be '"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "expectedMs"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": " milliseconds from the Unix epoch",
                          "raw": "' milliseconds from the Unix epoch'"
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
  ],
  "sourceType": "script"
}