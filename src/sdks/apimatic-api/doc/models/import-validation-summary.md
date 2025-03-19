
# Import Validation Summary

## Structure

`ImportValidationSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `errors` | `string[]` | Required | - |
| `warnings` | `string[]` | Required | - |
| `messages` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "success": true,
  "errors": [],
  "warnings": [],
  "messages": [
    "One or more elements in the API specification has a missing description field."
  ]
}
```

