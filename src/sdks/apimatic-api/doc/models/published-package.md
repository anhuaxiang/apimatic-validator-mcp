
# Published Package

## Structure

`PublishedPackage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `createdOn` | `string` | Required | - |
| `apiEntityId` | `string` | Required | - |
| `packageRepository` | `string` | Required | - |
| `template` | `string` | Required | - |
| `packageName` | `string` | Required | - |
| `version` | `string` | Required | - |
| `additionalDeploymentInformation` | `unknown` | Required | - |
| `authorIdentifiers` | [`AuthorIdentifiers`](../../doc/models/author-identifiers.md) | Required | - |
| `link` | `string` | Required | - |

## Example (as JSON)

```json
{
  "id": "5e8602472ac3db42ec7f097f",
  "createdOn": "04/02/2020 15:18:03",
  "apiEntityId": "5e8217662ac3ed0b20b0dece",
  "packageRepository": "Npm",
  "template": "NODE_JAVASCRIPT_LIB",
  "packageName": "apimaticcalculatortest",
  "version": "1.0.0",
  "additionalDeploymentInformation": {},
  "authorIdentifiers": {
    "Email": "shayanjalil@gmail.com",
    "UserName": "shayanjalil"
  },
  "link": "https://www.npmjs.com/package/apimaticcalculatortest/v/1.0.0"
}
```

