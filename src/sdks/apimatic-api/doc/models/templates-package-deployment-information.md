
# Templates Package Deployment Information

This structure encapsulates all package deployment details.

## Structure

`TemplatesPackageDeploymentInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cSNETSTANDARDLIB` | [`CSNETSTANDARDLIB`](../../doc/models/csnetstandardlib.md) | Required | This structure contains all details that goes into package deployment. |

## Example (as JSON)

```json
{
  "CS_NET_STANDARD_LIB": {
    "id": "5dcd2b5893c3e31a206f30c4",
    "packageRepository": "NuGet",
    "packageName": "myPackage",
    "version": "1.1.1",
    "additionalDeploymentInformation": {},
    "link": "https://www.nuget.org/packages/myPackage/1.1.1"
  }
}
```

