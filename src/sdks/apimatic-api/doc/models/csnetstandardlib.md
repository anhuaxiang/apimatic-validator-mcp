
# CSNETSTANDARDLIB

This structure contains all details that goes into package deployment.

## Structure

`CSNETSTANDARDLIB`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | [`Id \| undefined`](../../doc/models/id.md) | Optional | Unique package identifier<br>**Default**: `Id.Enum5dcd2b5893c3e31a206f30c4` |
| `packageRepository` | `string` | Required | Package Repository as per platform |
| `packageName` | `string` | Required | Package Name |
| `version` | `string` | Required | - |
| `additionalDeploymentInformation` | `unknown` | Required | Any additional platform specific deployment detail |
| `link` | [`Link \| undefined`](../../doc/models/link.md) | Optional | Link of deployed package<br>**Default**: `Link.EnumHttpswwwnugetorgpackagesmyPackage111` |

## Example (as JSON)

```json
{
  "id": "5dcd2b5893c3e31a206f30c4",
  "packageRepository": "NuGet",
  "packageName": "myPackage",
  "version": "1.1.1",
  "additionalDeploymentInformation": {},
  "link": "https://www.nuget.org/packages/myPackage/1.1.1"
}
```

