
# Implementation Type

The structure helps describes the nature of implementation of a  custom model. A model can be of 3 types.

## Enumeration

`ImplementationType`

## Fields

| Name | Description |
|  --- | --- |
| `Structure` | User defined data types to group similar and compound fields |
| `Enumeration` | Model can have any value from a set of values only. These set of values will be integers or strings. |
| `Exception` | This means that the model is a type of exception and its properties will be returned in the response by the API server in the case of an error. |

## Example

```
Structure
```

