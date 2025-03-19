
# Code Generation

The Code Generation structure encapsulates all the  the details of an SDK generation performed against an API Entity

## Structure

`CodeGeneration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique Code Generation Identifier |
| `template` | [`Platforms`](../../doc/models/platforms.md) | Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in.<br>**Default**: `Platforms.CSNETSTANDARDLIB` |
| `generatedFile` | `string` | Required | The generated SDK |
| `generatedOn` | `string` | Required | Generation Date and Time |
| `hashCode` | `string` | Required | The md5 hash of the API Description |
| `codeGenerationSource` | `string` | Required | Generation Source |
| `codeGenVersion` | `string` | Required | Generation Version |
| `success` | `boolean` | Required | Generation Status |

## Example (as JSON)

```json
{
  "id": "5be08b2d83b41d0d8cdb3289",
  "template": "CS_NET_STANDARD_LIB",
  "generatedFile": "https://api.apimatic.io/code-generations/5be08b2d83b41d0d8cdb3289/generated-sdk",
  "generatedOn": "11/05/2018 18:25:46",
  "hashCode": "77BDA4F625EF512B336D0A77CE2BB2B6",
  "codeGenerationSource": "Api",
  "codeGenVersion": "1",
  "success": true
}
```

