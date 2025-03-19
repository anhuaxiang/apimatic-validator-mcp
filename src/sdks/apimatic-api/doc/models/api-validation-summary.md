
# Api Validation Summary

## Structure

`ApiValidationSummary`

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
  "warnings": [
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getRealTimeData</code></i> of group <i><code>data</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getRealTimeData</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getDataPerCategory</code></i> of group <i><code>data</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getDataPerCategory</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getData</code></i> of group <i><code>data</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getData</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getActiveStatuses</code></i> of group <i><code>statuses</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getActiveStatuses</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>200</code></i> in endpoint <i><code>getDevices</code></i> of group <i><code>assets</code></i> contains an example value with following undeclared fields: <i><code>deviceModelId</code></i>, <i><code>manufacturer</code></i>, <i><code>model</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getDevices</code></i> of group <i><code>assets</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getDevices</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getAlarms</code></i> of group <i><code>alerts</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getAlarms</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getActiveAlerts</code></i> of group <i><code>alerts</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getActiveAlerts</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getAlerts</code></i> of group <i><code>alerts</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getAlerts</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getConfiguration</code></i> of group <i><code>configuration data</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getConfiguration</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getActiveAlarms</code></i> of group <i><code>alerts</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getActiveAlarms</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getPowerCurves</code></i> of group <i><code>assets</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getPowerCurves</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getDataSignals</code></i> of group <i><code>data</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getDataSignals</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getStatuses</code></i> of group <i><code>statuses</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getStatuses</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>.",
    "Media type <i><code>application/json; charset=utf-8</code></i> content definition of response code <i><code>429</code></i> in endpoint <i><code>getSites</code></i> of group <i><code>assets</code></i> contains an example value with following undeclared fields: <i><code>detail</i></code>.",
    "Endpoint <i><code>getSites</code></i> has an example specified for error code <i><code>429</code></i> which contains following undeclared fields: <i><code>detail</i></code>."
  ],
  "messages": [
    "One or more elements in the API specification has a missing description field."
  ]
}
```

