
# Package Deployment Information

The structure contains Package Deployment Information along with Id.

## Structure

`PackageDeploymentInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Package Deployment Identifier |
| `templatesPackageDeploymentInformation` | [`TemplatesPackageDeploymentInformation`](../../doc/models/templates-package-deployment-information.md) | Required | This structure encapsulates all package deployment details. |

## Example (as JSON)

```json
{
  "id": "5dcc0560dfe543169893ca01",
  "templatesPackageDeploymentInformation": {
    "CS_NET_STANDARD_LIB": {
      "id": "5dcd2b5893c3e31a206f30c4",
      "packageRepository": "NuGet",
      "packageName": "myPackage",
      "version": "1.1.1",
      "additionalDeploymentInformation": {},
      "link": "https://www.nuget.org/packages/myPackage/1.1.1"
    }
  }
}
```

