# API Validation-External APIs

```ts
const aPIValidationExternalApisController = new APIValidationExternalApisController(client);
```

## Class Name

`APIValidationExternalApisController`

## Methods

* [Validate API Via File](../../doc/controllers/api-validation-external-apis.md#validate-api-via-file)
* [Validate API Via URL](../../doc/controllers/api-validation-external-apis.md#validate-api-via-url)


# Validate API Via File

Validate an API by uploading the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while validating the API using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async validateAPIViaFile(
  contentType: ContentType,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiValidationSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ApiValidationSummary](../../doc/models/api-validation-summary.md).

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await aPIValidationExternalApisController.validateAPIViaFile(
  contentType,
  file
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthenticated | `ApiError` |
| 403 | Forbidden | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Validate API Via URL

Validate an API by providing the URL of the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while validating the API using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async validateAPIViaURL(
  descriptionUrl: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiValidationSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `descriptionUrl` | `string` | Query, Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ApiValidationSummary](../../doc/models/api-validation-summary.md).

## Example Usage

```ts
const descriptionUrl = 'https://petstore.swagger.io/v2/swagger.json';

try {
  const { result, ...httpResponse } = await aPIValidationExternalApisController.validateAPIViaURL(descriptionUrl);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthenticated | `ApiError` |
| 403 | Forbidden | `ApiError` |
| 500 | Internal Server Error | `ApiError` |

