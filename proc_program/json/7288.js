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
            "name": "buf"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "ArrayBuffer"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 65552,
                "raw": "0x10010"
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
            "name": "numbers"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Uint8Array"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "buf"
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
        "name": "v"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "postMessage"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\""
                },
                {
                  "type": "Literal",
                  "value": "http://127.0.0.1",
                  "raw": "\"http://127.0.0.1\""
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "buf"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 7,
              "raw": "7"
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
        "name": "compareNumbers"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "valueOf"
                  },
                  "computed": false,
                  "value": {
                    "type": "Identifier",
                    "name": "v"
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
            "name": "numbers"
          },
          "property": {
            "type": "Identifier",
            "name": "sort"
          }
        },
        "arguments": [
          {
            "type": "Identifier",
            "name": "compareNumbers"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}