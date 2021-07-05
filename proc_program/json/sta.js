{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Test262Error"
      },
      "params": [
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression"
                },
                "property": {
                  "type": "Identifier",
                  "name": "message"
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "name": "message"
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
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
              "name": "Test262Error"
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
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "Test262Error: ",
                    "raw": "\"Test262Error: \""
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "message"
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
            "name": "Test262Error"
          },
          "property": {
            "type": "Identifier",
            "name": "thrower"
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "message"
            }
          ],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "$ERROR"
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "Test262Error"
            },
            "property": {
              "type": "Identifier",
              "name": "thrower"
            }
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "$DONOTEVALUATE"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "Test262: This statement should not be evaluated.",
              "raw": "\"Test262: This statement should not be evaluated.\""
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