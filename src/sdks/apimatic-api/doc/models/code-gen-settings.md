
# Code Gen Settings

APIMatic’s code generation engine has various code generation configurations to customise the behaviour and outlook across the generated SDKS. This structure encapsulates all settings for CodeGeneration.

## Structure

`CodeGenSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isAsync` | `boolean` | Required | Generate asynchronous code for API Calls and deserialization |
| `useHttpMethodPrefix` | `boolean` | Required | Use HTTP Method prefixes for endpoint wrappers |
| `useModelPrefix` | `boolean` | Required | Use "Model" postfixes for generated class names |
| `useEnumPrefix` | `boolean` | Required | Use "Enum" postfixes for enumerated types |
| `useConstructorsForConfig` | `boolean` | Required | - |
| `useCommonSdkLibrary` | `boolean` | Required | Use common SDK library to reduce code duplication |
| `generateInterfaces` | `boolean` | Required | Generates interfaces for controller classes in the generated SDKs |
| `generateAppveyorConfig` | `boolean` | Required | Generate Appveyor configuration file |
| `generateCircleConfig` | `boolean` | Required | Generate CircleCI configuration file |
| `generateJenkinsConfig` | `boolean` | Required | Generate Jenkins configuration file |
| `generateTravisConfig` | `boolean` | Required | Generate Travis CI configuration file |
| `androidUseAppManifest` | `boolean` | Required | Use "AndroidManifest.xml" for config variables in Android |
| `iosUseAppInfoPlist` | `boolean` | Required | Use "App-Info.plist" file for config variables in iOS |
| `iosGenerateCoreData` | `boolean` | Required | Generate "CoreData" schema and entity classes in iOS? |
| `runscopeEnabled` | `boolean` | Required | Enable runscope |
| `collapseParamsToArray` | `boolean` | Required | Collect Parameters as arrays |
| `preserveParameterOrder` | `boolean` | Required | Attempts to preserve parameter order for endpoints |
| `appendContentHeaders` | `boolean` | Required | Append JSON/XML accept and content-type headers |
| `modelSerializationIsJSON` | `boolean` | Required | - |
| `nullify404` | `boolean` | Required | Return a null value on HTTP 404 |
| `validateRequiredParameters` | `boolean` | Required | Validate required parameters to be Not Null |
| `enableAdditionalModelProperties` | `boolean` | Required | Allow models to have additional runtime properties |
| `javaUsePropertiesConfig` | `boolean` | Required | - |
| `useControllerPrefix` | `boolean` | Required | Use "Controller" postfixes for generated controller classes |
| `useExceptionPrefix` | `boolean` | Required | Use Exception Prefixes |
| `parameterArrayFormat` | `string` | Required | Parameter Array format with index or without |
| `objCHttpClient` | `string` | Required | Configure the HTTP client for Objective C |
| `cSharpHttpClient` | `string` | Required | Configure the HTTP client for C# |
| `androidHttpClient` | `string` | Required | Configure the HTTP client for  Android |
| `nodeHttpClient` | `string` | Required | Configure the HTTP client for node |
| `phpHttpClient` | `string` | Required | Configure the HTTP client for PHP |
| `bodySerialization` | `number` | Required | - |
| `arraySerialization` | `string` | Required | Specify type of array serialisation |
| `timeout` | `number` | Required | This option specifies the duration (in seconds) after which requests would timeout |
| `enableLogging` | `boolean` | Required | Enabling this generates code in the SDKs for logging events in the API cycle using a library. |
| `enableHttpCache` | `boolean` | Required | Enabling caching of responses (not available in all languages) |
| `retries` | `number` | Required | Specify number of retries |
| `retryInterval` | `number` | Required | Specify retry interval in case of failures |
| `generateAdvancedDocs` | `boolean` | Required | Generate advanced read me files |
| `storeTimezoneInformation` | `boolean` | Required | Store Timezone information for the generation |
| `enablePhpComposerVersionString` | `boolean` | Required | Use "Controller" postfixes for generated controller classes |
| `securityProtocols` | `string[]` | Required | Specify Security Protocols |
| `underscoreNumbers` | `boolean` | Required | Use underscores before and after numbers for underscore case |
| `useSingletonPattern` | `boolean` | Required | Allow usage of a Singleton Pattern |
| `disableLinting` | `boolean` | Required | Files/dependencies used for linting are not generated if this option is enabled |
| `allowSkippingSSLCertVerification` | `boolean` | Required | Create a configuration option in SDKs to optionally skip certificate verification when establishing HTTPS connections. |
| `applyCustomizations` | `string[]` | Required | Apply Customisations |
| `doNotSplitWords` | `string[]` | Required | Enabling this will stop splitting of words when converting identifiers from API specification to language-specific identifiers. |
| `sortResources` | `boolean` | Required | Sorts resources such as endpoints, endpoint groups and models in generated documentation |
| `enableGlobalUserAgent` | `boolean` | Required | Enable a global user agent |

## Example (as JSON)

```json
{
  "isAsync": true,
  "useHttpMethodPrefix": true,
  "useModelPrefix": false,
  "useEnumPrefix": true,
  "useConstructorsForConfig": false,
  "useCommonSdkLibrary": false,
  "generateInterfaces": false,
  "generateAppveyorConfig": false,
  "generateCircleConfig": false,
  "generateJenkinsConfig": false,
  "generateTravisConfig": false,
  "androidUseAppManifest": false,
  "iosUseAppInfoPlist": false,
  "iosGenerateCoreData": false,
  "runscopeEnabled": false,
  "collapseParamsToArray": false,
  "preserveParameterOrder": true,
  "appendContentHeaders": true,
  "modelSerializationIsJSON": true,
  "nullify404": false,
  "validateRequiredParameters": false,
  "enableAdditionalModelProperties": false,
  "javaUsePropertiesConfig": false,
  "useControllerPrefix": true,
  "useExceptionPrefix": true,
  "parameterArrayFormat": "ParamArrayWithIndex",
  "objCHttpClient": "UNIREST",
  "cSharpHttpClient": "UNIREST",
  "androidHttpClient": "ANDROID_OK",
  "nodeHttpClient": "NODE_REQUEST",
  "phpHttpClient": "UNIREST",
  "bodySerialization": 0,
  "arraySerialization": "Indexed",
  "timeout": 0,
  "enableLogging": false,
  "enableHttpCache": false,
  "retries": 0,
  "retryInterval": 1,
  "generateAdvancedDocs": true,
  "storeTimezoneInformation": false,
  "enablePhpComposerVersionString": false,
  "securityProtocols": [
    "Ssl3",
    "Tls"
  ],
  "underscoreNumbers": true,
  "useSingletonPattern": true,
  "disableLinting": false,
  "allowSkippingSSLCertVerification": false,
  "applyCustomizations": [],
  "doNotSplitWords": [],
  "sortResources": false,
  "enableGlobalUserAgent": true
}
```

