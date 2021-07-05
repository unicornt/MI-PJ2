{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "isConstructor"
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
            "type": "TryStatement",
            "block": {
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
                        "name": "Reflect"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "construct"
                      }
                    },
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                      },
                      {
                        "type": "ArrayExpression",
                        "elements": []
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          },
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
    }
  ],
  "sourceType": "script"
}