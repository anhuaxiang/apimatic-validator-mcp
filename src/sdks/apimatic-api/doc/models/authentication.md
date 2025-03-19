
# Authentication

This Structure encapsulates all details of API authentication.

## Structure

`Authentication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Auth Id |
| `authType` | `string` | Required | Auth Type |
| `scopes` | [`AuthScope[]`](../../doc/models/auth-scope.md) | Required | Scope |
| `parameters` | `string[]` | Required | Auth Params |
| `authScopes` | `string[]` | Required | Auth Scopes |
| `authGrantTypes` | `string[]` | Required | Auth Grant Types |
| `paramFormats` | `unknown` | Required | Paramater Formats |

## Example (as JSON)

```json
{
  "id": "5be0a21a83b41d0d8cdcd80f",
  "authType": "None",
  "scopes": [],
  "parameters": [],
  "authScopes": [],
  "authGrantTypes": [],
  "paramFormats": {}
}
```

