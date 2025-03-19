
# Validation Exception

Validation exception contains information, warnings, messages and errors.

## Structure

`ValidationException`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string` | Required | - |
| `summary` | `string \| undefined` | Optional | Validation Summary of the API in case validation failed |

## Example (as JSON)

```json
{
  "reason": "Import Failed",
  "summary": "summary2"
}
```

