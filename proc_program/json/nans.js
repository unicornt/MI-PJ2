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
            "name": "NaNs"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "name": "NaN"
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "NaN"
                }
              },
              {
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "Identifier",
                  "name": "NaN"
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "Identifier",
                  "name": "Infinity"
                },
                "right": {
                  "type": "Identifier",
                  "name": "Infinity"
                }
              },
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "prefix": true
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Math"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "pow"
                  }
                },
                "arguments": [
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5"
                  }
                ]
              },
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Math"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "pow"
                    }
                  },
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "prefix": true
                    },
                    {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5"
                    }
                  ]
                },
                "prefix": true
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Number"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Not-a-Number",
                    "raw": "\"Not-a-Number\""
                  }
                ]
              }
            ]
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
}