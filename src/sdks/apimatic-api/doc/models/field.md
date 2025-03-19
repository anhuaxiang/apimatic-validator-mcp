
# Field

This structure encapsulates all details of a parameter.

## Structure

`Field`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `optional` | `boolean` | Required | If parameter is optional |
| `type` | `string` | Required | Type of Parameter |
| `constant` | `boolean` | Required | IF Parameter is constant |
| `isArray` | `boolean` | Required | If Param is collected as array |
| `isStream` | `boolean` | Required | - |
| `isAttribute` | `boolean` | Required | - |
| `isMap` | `boolean` | Required | - |
| `attributes` | [`Attributes`](../../doc/models/attributes.md) | Required | The structure contain attribute details of a parameter type. |
| `nullable` | `boolean` | Required | If Parameter is nullable |
| `id` | `string` | Required | Unique Parameter identifier |
| `name` | `string` | Required | Parameter Name |
| `description` | `string` | Required | Parameter Description |
| `defaultValue` | `string` | Required | Default Values of a Parameter |

## Example (as JSON)

```json
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
  "defaultValue": "defaultValue0"
}
```

