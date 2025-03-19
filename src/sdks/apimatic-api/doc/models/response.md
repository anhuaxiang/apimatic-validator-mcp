
# Response

The structure encapsulates all details of a request response

## Structure

`Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `optional` | `boolean` | Required | Specify if response is optional or not |
| `type` | `string` | Required | Specify response type |
| `constant` | `boolean` | Required | Specify if response is constant |
| `isArray` | `boolean` | Required | Specify if response is array |
| `isStream` | `boolean` | Required | Specify if response is stream |
| `isAttribute` | `boolean` | Required | Specify  if response has attributes |
| `isMap` | `boolean` | Required | Specify if response is collected as map |
| `attributes` | [`Attributes`](../../doc/models/attributes.md) | Required | The structure contain attribute details of a parameter type. |
| `nullable` | `boolean` | Required | Specify is response is nullable |
| `id` | `string` | Required | Unique response identifier |
| `name` | `string` | Required | Response name |

## Example (as JSON)

```json
{
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
}
```

