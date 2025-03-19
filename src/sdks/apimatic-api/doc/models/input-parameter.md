
# Input Parameter

This structure helps specify details of an input parameter.

## Structure

`InputParameter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isNull` | `boolean` | Required | If parameter is null |
| `endpointInputPrameterId` | `string` | Required | Unique parameter identifier for each endpoint |
| `id` | `string` | Required | Unique parameter identifier |
| `name` | `string` | Required | Parameter Name |
| `value` | `string` | Required | Parameter Value |

## Example (as JSON)

```json
{
  "isNull": false,
  "endpointInputPrameterId": "5a4e8675b724bb198c289f7a",
  "id": "5a4e8675b724bb198c289f7c",
  "name": "body",
  "value": "{\r\n  \"name\": \"Country\",\r\n  \"field\": \"NZ\"\r\n}"
}
```

