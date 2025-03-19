# Code Generation-Imported APIs

```ts
const codeGenerationImportedApisController = new CodeGenerationImportedApisController(client);
```

## Class Name

`CodeGenerationImportedApisController`

## Methods

* [Generate SDK](../../doc/controllers/code-generation-imported-apis.md#generate-sdk)
* [Download SDK](../../doc/controllers/code-generation-imported-apis.md#download-sdk)
* [List All Code Generations](../../doc/controllers/code-generation-imported-apis.md#list-all-code-generations)
* [Get a Code Generation](../../doc/controllers/code-generation-imported-apis.md#get-a-code-generation)
* [Delete Code Generation](../../doc/controllers/code-generation-imported-apis.md#delete-code-generation)


# Generate SDK

Generate an SDK for an API Version.

This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for the generation performed is returned as part of the response.

```ts
async generateSDK(
  apiEntityId: string,
  template: Platforms,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIEntityCodeGeneration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to generate the SDK for. |
| `template` | [`Platforms`](../../doc/models/platforms.md) | Form, Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [APIEntityCodeGeneration](../../doc/models/api-entity-code-generation.md).

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const template = Platforms.CSNETSTANDARDLIB;

try {
  const { result, ...httpResponse } = await codeGenerationImportedApisController.generateSDK(
  apiEntityId,
  template
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


# Download SDK

Download the SDK generated via the Generate SDK endpoint.

```ts
async downloadSDK(
  apiEntityId: string,
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity for which the SDK was generated. |
| `codegenId` | `string` | Template, Required | The ID of code generation received in the response of the [SDK generation call](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-imported-apis/generate-sdk). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type NodeJS.ReadableStream | Blob.

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const codegenId = 'codegen_id6';

try {
  const { result, ...httpResponse } = await codeGenerationImportedApisController.downloadSDK(
  apiEntityId,
  codegenId
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


# List All Code Generations

Get a list of all SDK generations done against an API Version via the Generate SDK endpoint.

```ts
async listAllCodeGenerations(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIEntityCodeGeneration[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity for which to list code generations. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [APIEntityCodeGeneration[]](../../doc/models/api-entity-code-generation.md).

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

try {
  const { result, ...httpResponse } = await codeGenerationImportedApisController.listAllCodeGenerations(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Code Generation

Get details on an SDK generation performed via the Generate SDK endpoint.

```ts
async getACodeGeneration(
  apiEntityId: string,
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIEntityCodeGeneration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to fetch the code generation for. |
| `codegenId` | `string` | Template, Required | The ID of the code generation to fetch. The code generation ID is received in the response of the [SDK generation call](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-imported-apis/generate-sdk). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [APIEntityCodeGeneration](../../doc/models/api-entity-code-generation.md).

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const codegenId = 'codegen_id6';

try {
  const { result, ...httpResponse } = await codeGenerationImportedApisController.getACodeGeneration(
  apiEntityId,
  codegenId
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


# Delete Code Generation

Delete an SDK generation performed for an API Version via the Generate SDK endpoint.

```ts
async deleteCodeGeneration(
  apiEntityId: string,
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to delete the code generation for. |
| `codegenId` | `string` | Template, Required | The ID of the code generation to delete. The code generation ID is received in the response of the [SDK generation call](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-imported-apis/generate-sdk). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const codegenId = 'codegen_id6';

try {
  const { result, ...httpResponse } = await codeGenerationImportedApisController.deleteCodeGeneration(
  apiEntityId,
  codegenId
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

