# APIs Management

```ts
const apisManagementController = new ApisManagementController(client);
```

## Class Name

`ApisManagementController`

## Methods

* [Import API Via File](../../doc/controllers/apis-management.md#import-api-via-file)
* [Import API Via URL](../../doc/controllers/apis-management.md#import-api-via-url)
* [Import New API Version Via File](../../doc/controllers/apis-management.md#import-new-api-version-via-file)
* [Import New API Version Via URL](../../doc/controllers/apis-management.md#import-new-api-version-via-url)
* [Inplace API Import Via File](../../doc/controllers/apis-management.md#inplace-api-import-via-file)
* [Inplace API Import Via URL](../../doc/controllers/apis-management.md#inplace-api-import-via-url)
* [Fetch API Entity](../../doc/controllers/apis-management.md#fetch-api-entity)
* [Download API Specification](../../doc/controllers/apis-management.md#download-api-specification)


# Import API Via File

Import an API into the APIMatic Dashboard by uploading the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importAPIViaFile(
  contentType: ContentType,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ApiEntity](../../doc/models/api-entity.md).

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await apisManagementController.importAPIViaFile(
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 412 | Precondition Failed | `ApiError` |
| 422 | Unprocessable Entity | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Import API Via URL

Import an API into the APIMatic Dashboard by providing the URL of the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importAPIViaURL(
  body: ImportApiViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ImportApiViaUrlRequest`](../../doc/models/import-api-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ApiEntity](../../doc/models/api-entity.md).

## Example Usage

```ts
const body: ImportApiViaUrlRequest = {
  url: 'https://petstore.swagger.io/v2/swagger.json',
};

try {
  const { result, ...httpResponse } = await apisManagementController.importAPIViaURL(body);
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
| 412 | Precondition Failed | `ApiError` |
| 422 | Unprocessable Entity | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Import New API Version Via File

Import a new version for an API, against an existing API Group, by uploading the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importNewAPIVersionViaFile(
  apiGroupId: string,
  accept: Accept,
  versionOverride: string,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiGroupId` | `string` | Template, Required | The ID of the API Group for which to import a new API version. |
| `accept` | [`Accept`](../../doc/models/accept.md) | Header, Required | - |
| `versionOverride` | `string` | Form, Required | The version number with which the new API version will be imported. This version number will override the version specified in the API specification file.<br>APIMatic recommends versioning the API with the [versioning scheme](https://docs.apimatic.io/define-apis/basic-settings/#version) documented in the docs. |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ApiEntity](../../doc/models/api-entity.md).

## Example Usage

```ts
const apiGroupId = 'api_group_id6';

const accept = Accept.EnumApplicationjson;

const versionOverride = 'version_override2';

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await apisManagementController.importNewAPIVersionViaFile(
  apiGroupId,
  accept,
  versionOverride,
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


# Import New API Version Via URL

Import a new version for an API, against an existing API Group, by providing the URL of the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importNewAPIVersionViaURL(
  apiGroupId: string,
  accept: Accept,
  body: ImportApiVersionViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiGroupId` | `string` | Template, Required | The ID of the API Group for which to import a new API version. |
| `accept` | [`Accept`](../../doc/models/accept.md) | Header, Required | - |
| `body` | [`ImportApiVersionViaUrlRequest`](../../doc/models/import-api-version-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ApiEntity](../../doc/models/api-entity.md).

## Example Usage

```ts
const apiGroupId = '5c9de181dc6209221416f250';

const accept = Accept.EnumApplicationjson;

const body: ImportApiVersionViaUrlRequest = {
  versionOverride: '1.2.3',
  url: 'https://petstore.swagger.io/v2/swagger.json',
};

try {
  const { result, ...httpResponse } = await apisManagementController.importNewAPIVersionViaURL(
  apiGroupId,
  accept,
  body
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


# Inplace API Import Via File

Replace an API version of an API Group, by uploading the API specification file that will replace the current version.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async inplaceAPIImportViaFile(
  apiEntityId: string,
  accept: Accept2,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to replace. |
| `accept` | [`Accept2`](../../doc/models/accept-2.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const accept = Accept2.EnumApplicationvndapimaticapiEntityfullv1json;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await apisManagementController.inplaceAPIImportViaFile(
  apiEntityId,
  accept,
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


# Inplace API Import Via URL

Replace an API version of an API Group, by providing the URL of the API specification file that will replace the current version.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async inplaceAPIImportViaURL(
  apiEntityId: string,
  body: InplaceImportApiViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to replace. |
| `body` | [`InplaceImportApiViaUrlRequest`](../../doc/models/inplace-import-api-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const body: InplaceImportApiViaUrlRequest = {
  url: 'https://petstore.swagger.io/v2/swagger.json',
};

try {
  const { result, ...httpResponse } = await apisManagementController.inplaceAPIImportViaURL(
  apiEntityId,
  body
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


# Fetch API Entity

Fetch an API Entity.

```ts
async fetchAPIEntity(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ApiEntity](../../doc/models/api-entity.md).

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

try {
  const { result, ...httpResponse } = await apisManagementController.fetchAPIEntity(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Download API Specification

Download the API Specification file for a an API Version in any of the API Specification formats supported by APIMatic.

```ts
async downloadApisPecification(
  apiEntityId: string,
  format: ExportFormats,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to download. |
| `format` | [`ExportFormats`](../../doc/models/export-formats.md) | Query, Required | The format in which to download the API.<br>The format can be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type NodeJS.ReadableStream | Blob.

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const format = ExportFormats.APIMATIC;

try {
  const { result, ...httpResponse } = await apisManagementController.downloadApisPecification(
  apiEntityId,
  format
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

