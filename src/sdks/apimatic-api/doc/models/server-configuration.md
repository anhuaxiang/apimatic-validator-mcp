
# Server Configuration

Server configurations can be used to create multiple environments, multiple servers that can be used with specific endpoints and server URLs with template paramters.

## Structure

`ServerConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Server Config Identifier |
| `defaultEnvironment` | `string` | Required | Default Environment |
| `defaultServer` | `string` | Required | Default Server |
| `environments` | [`MEnvironment[]`](../../doc/models/m-environment.md) | Required | Environment Identifier and Name |
| `parameters` | [`Parameter[]`](../../doc/models/parameter.md) | Required | Parameter Attributes |

## Example (as JSON)

```json
{
  "id": "5be0a21a83b41d0d8cdcd835",
  "defaultEnvironment": "production",
  "defaultServer": "default",
  "environments": [
    {
      "id": "5be0a21a83b41d0d8cdcd832",
      "name": "production",
      "servers": [
        {
          "id": "5be0a21a83b41d0d8cdcd831",
          "name": "default",
          "url": "{defaultServerUrl}"
        }
      ]
    }
  ],
  "parameters": [
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
      "defaultValue": "defaultValue2",
      "ParamFormat": "Body"
    }
  ]
}
```

