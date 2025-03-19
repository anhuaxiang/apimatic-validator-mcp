
# Endpoint

This structure encapsulates all the attributes of an API Endpoint.

## Structure

`Endpoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique Endpoint Identifier |
| `apiId` | `string` | Required | Unique API Identifier |
| `name` | `string` | Required | Endpoint Name |
| `httpMethod` | `string` | Required | Endpoint Method |
| `group` | `string` | Required | The Group Endpoint belongs to |
| `skipAuthentication` | `boolean` | Required | If Endpoint warrants authentication or not |
| `route` | `string` | Required | The Endpoint route |
| `response` | [`Response`](../../doc/models/response.md) | Required | The structure encapsulates all details of a request response |
| `hasOptionalQueryParams` | `boolean` | Required | Enabling this option allows optional query parameters |
| `hasOptionalFieldParams` | `boolean` | Required | Enabling this option allows optional field parameters |
| `collectParameters` | `boolean` | Required | Enabling this option collects API endpoint parameters as collections |
| `wrapBodyInObject` | `boolean` | Required | Enabling this option allows wrapping of body in objects |
| `requiredScopes` | `string[]` | Required | What scopes apply to an Endpoint |
| `parameters` | [`Parameter[]`](../../doc/models/parameter.md) | Required | Endpoint Paramaters |
| `errors` | `unknown[]` | Required | Errors that Endpoint may output |
| `testCases` | [`TestCase[]`](../../doc/models/test-case.md) | Required | Test Cases associated with Endpoint |

## Example (as JSON)

```json
{
  "id": "5a4e8675b724bb198c28a06a",
  "apiId": "5a4e8675b724bb198c289fe9",
  "name": "Send String in body with \\r\\n",
  "httpMethod": "POST",
  "group": "BodyParams",
  "skipAuthentication": false,
  "route": "/body/stringEncoding",
  "response": {
    "optional": false,
    "type": "ServerResponse",
    "constant": false,
    "isArray": false,
    "isStream": false,
    "isAttribute": false,
    "isMap": false,
    "attributes": {
      "id": "5be1603083b41d0b50110551"
    },
    "nullable": false,
    "id": "5a4e8675b724bb198c289f79",
    "name": "response"
  },
  "hasOptionalQueryParams": false,
  "hasOptionalFieldParams": false,
  "collectParameters": false,
  "wrapBodyInObject": false,
  "requiredScopes": [],
  "parameters": [
    {
      "optional": false,
      "type": "test\\r\\nstringEncoding",
      "constant": false,
      "isArray": false,
      "isStream": false,
      "isAttribute": false,
      "isMap": false,
      "attributes": {
        "id": "5be1603083b41d0b50110551"
      },
      "nullable": false,
      "id": "5a4e8675b724bb198c289f7a",
      "name": "body",
      "description": "description4",
      "defaultValue": "defaultValue2",
      "ParamFormat": "Body"
    }
  ],
  "errors": [],
  "testCases": [
    {
      "id": "5a4e8675b724bb198c289f7b",
      "endpointId": "5a4e8675b724bb198c28a06a",
      "apiId": "5a4e8675b724bb198c289fe9",
      "name": "send string in body with \\r\\n1",
      "enabled": true,
      "shouldPass": true,
      "inputParameters": [
        {
          "isNull": false,
          "endpointInputPrameterId": "5a4e8675b724bb198c289f7a",
          "id": "5a4e8675b724bb198c289f7c",
          "name": "body",
          "value": "{\"name\":\"farhan\",\"field\":\"QA\"}"
        }
      ],
      "expectedStatus": "200",
      "expectedHeaders": [],
      "expectedHeadersAllowExtra": true,
      "expectedBody": "{\r\n  \"passed\": true\r\n}",
      "expectedBodyMatchMode": "KEYSANDVALUES",
      "expectedArrayOrderedMatching": false,
      "expectedArrayCheckCount": false,
      "responseMatchSchema": true
    }
  ]
}
```

