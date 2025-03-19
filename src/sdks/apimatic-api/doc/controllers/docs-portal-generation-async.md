# Docs Portal Generation-Async

```ts
const docsPortalGenerationAsyncController = new DocsPortalGenerationAsyncController(client);
```

## Class Name

`DocsPortalGenerationAsyncController`

## Methods

* [Generate On-Prem Portal Via Build Input Async](../../doc/controllers/docs-portal-generation-async.md#generate-on-prem-portal-via-build-input-async)
* [Get Portal Generation Status](../../doc/controllers/docs-portal-generation-async.md#get-portal-generation-status)
* [Download Generated Portal](../../doc/controllers/docs-portal-generation-async.md#download-generated-portal)


# Generate On-Prem Portal Via Build Input Async

Create an async On-premise Documentation Portal Generation request by providing a Portal Build Input

```ts
async generateOnPremPortalViaBuildInputAsync(
  contentType: ContentType,
  file: FileWrapper,
  xAPIMaticCallbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PortalGenerationAsyncResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The input file to the Portal Generator. Must contain the build file. |
| `xAPIMaticCallbackUrl` | `string \| undefined` | Header, Optional | Optional header containing callback url. This url will be called by the server once the portal generation completes |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [PortalGenerationAsyncResponse](../../doc/models/portal-generation-async-response.md).

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await docsPortalGenerationAsyncController.generateOnPremPortalViaBuildInputAsync(
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
  "id": "0194d0da-8d75-7c04-b517-6a9342b114e8",
  "links": {
    "status": "https://api.apimatic.io/portal/v2/0194d0da-8d75-7c04-b517-6a9342b114e8/status",
    "download": "https://api.apimatic.io/portal/v2/0194d0da-8d75-7c04-b517-6a9342b114e8/download"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 402 | Subscription Issue | `ApiError` |


# Get Portal Generation Status

Get the status of a portal generation request

```ts
async getPortalGenerationStatus(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PortalGenerationStatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [PortalGenerationStatusResponse](../../doc/models/portal-generation-status-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await docsPortalGenerationAsyncController.getPortalGenerationStatus(id);
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
  "status": "InProgress"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 402 | Subscription Issue | `ApiError` |


# Download Generated Portal

Downloads the portal artifacts. The generated artifacts include:

1. SDKs

2. Docs

3. API Specification files

The endpoint returns a zip file that contains a static Site and can be hosted on any Web Server.

```ts
async downloadGeneratedPortal(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type NodeJS.ReadableStream | Blob.

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await docsPortalGenerationAsyncController.downloadGeneratedPortal(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 402 | Subscription Issue | `ApiError` |

