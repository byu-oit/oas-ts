# oas-ts

Typescript definitions for the OpenAPI (and Swagger 2.0) specification.

## Install

```
npm i @byu-oit
```

## Usage

Most use cases only need to access either openapi OR swagger

```ts
import { OpenAPIObject } from '@byu-oit/oas-ts/openapi'
```

```ts
import { SwaggerObject } from '@byu-oit/oas-ts/swagger'
```

If you need to access both definitions within the same file, rename the exported object:

```ts
import * as OAS from '@byu-oit/oas-ts/openapi'
import * as Swagger form '@byu-oit/oas-ts/swagger'
```
