
# Import Api Version Via Url Request

This structure contains details of importing a new API Version

## Structure

`ImportApiVersionViaUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `versionOverride` | `string` | Required | The version number with which the new API version will be imported. This version number will override the version specified in the API specification file.<br>APIMatic recommends versioning the API with the [versioning scheme](https://docs.apimatic.io/define-apis/basic-settings/#version) documented in the docs. |
| `url` | `string` | Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |

## Example (as JSON)

```json
{
  "version_override": "1.2.3",
  "url": "https://petstore.swagger.io/v2/swagger.json"
}
```

