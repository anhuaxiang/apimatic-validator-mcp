
# Test Case

APIMatic lets you define test cases for endpoints using the API Editor. The test cases are automatically generated for each language. This structure encapsulates all details of a Test Case.  To find out more about defining Test Cases visit: https://docs.apimatic.io/testing/defining-your-first-test-case/

## Structure

`TestCase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique Test Case identifier |
| `endpointId` | `string` | Required | The Endpoint, test case is associated with |
| `apiId` | `string` | Required | The API Entity, test case is associated with |
| `name` | `string` | Required | The Test Case name |
| `enabled` | `boolean` | Required | Enable/Disable a Test Case |
| `shouldPass` | `boolean` | Required | - |
| `inputParameters` | [`InputParameter[]`](../../doc/models/input-parameter.md) | Required | Test case parameters |
| `expectedStatus` | `string` | Required | Expected response status. We expect the status code to be 200 if the operation is successful, hence we input the value 200. |
| `expectedHeaders` | `string[]` | Required | Expected Headers |
| `expectedHeadersAllowExtra` | `boolean` | Required | If this flag is disabled, it will cause the test case to fail if the response contains other headers than those listed in the expected headers list. |
| `expectedBody` | `string` | Required | Expected response goes in the expected body |
| `expectedBodyMatchMode` | `string` | Required | Specifies what to match |
| `expectedArrayOrderedMatching` | `boolean` | Required | If enabled, this will involve ensuring that the response body contains the array elements in the same order as the expected body. |
| `expectedArrayCheckCount` | `boolean` | Required | If enabled, this will ensure that the response body contains the same number of elements in the array as does the expected body. |
| `responseMatchSchema` | `boolean` | Required | - |

## Example (as JSON)

```json
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
```

