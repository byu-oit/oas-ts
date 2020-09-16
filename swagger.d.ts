/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object
 */
export interface SwaggerObject extends SpecificationExtensions {
    swagger: string
    info: InfoObject
    host?: string
    basePath?: string
    schemes?: string[]
    consumes?: string[]
    produces?: string[]
    paths: PathsObject
    definitions?: DefinitionsObject
    parameters?: ParametersDefinitionsObject
    responses?: ResponsesDefinitionsObject
    securityDefinitions?: SecurityDefinitionsObject
    security?: SecurityRequirementObject[]
    tags?: TagObject[]
    externalDocs?: ExternalDocumentationObject
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#info-object
 */
export interface InfoObject extends SpecificationExtensions {
    title: string
    description?: string
    termsOfService?: string
    contact?: ContactObject
    license?: LicenseObject
    version: string
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#contact-object
 */
export interface ContactObject extends SpecificationExtensions {
    name?: string
    url?: string
    email?: string
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#license-object
 */
export interface LicenseObject extends SpecificationExtensions {
    name: string
    url?: string
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#paths-object
 */
export interface PathsObject extends SpecificationExtensions {
    [path: string]: PathItemObject
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#path-item-object
 */
export interface PathItemObject extends SpecificationExtensions {
    $ref?: string
    get?: OperationObject
    put?: OperationObject
    post?: OperationObject
    delete?: OperationObject
    options?: OperationObject
    head?: OperationObject
    patch?: OperationObject
    parameters?: (ParameterObject | ReferenceObject)[]
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#operation-object
 */
export interface OperationObject extends SpecificationExtensions {
    tags?: string[]
    summary?: string
    description?: string
    externalDocs?: ExternalDocumentationObject
    operationId?: string
    consumes?: string[]
    produces?: string[]
    parameters?: (ParameterObject | ReferenceObject)[]
    responses?: ResponsesObject
    schemes?: string[]
    deprecated?: boolean
    security?: SecurityRequirementObject[]
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#external-documentation-object
 */
export interface ExternalDocumentationObject extends SpecificationExtensions {
    description?: string
    url: string
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameter-object
 */
export type ParameterObject = (ParameterBodyObject | ParameterOtherObject) & SpecificationExtensions

export interface ParameterBaseObject {
    name: string
    in: 'query' | 'header' | 'path' | 'formData' | 'body'
    description?: string
    required?: boolean
}

export interface ParameterBodyObject extends ParameterBaseObject{
    in: 'body'
    schema: SchemaObject
}

export interface ParameterOtherObject extends ParameterBaseObject{
    in: 'query' | 'header' | 'path' | 'formData'

    type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'file'
    format?: string
    allowEmptyValue?: boolean
    items?: ItemsObject
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes'
    default?: unknown
    maximum?: number
    exclusiveMaximum?: boolean
    minimum?: number
    exclusiveMinimum?: boolean
    maxLength?: number //integer
    minLength?: number //integer
    pattern?: string
    maxItems?: number //integer
    minItems?: number //integer
    uniqueItems?: boolean
    enum?: unknown[]
    multipleOf?: number
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#items-object
 */
export interface ItemsObject extends SpecificationExtensions {
    type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object'
    format?: string
    items?: ItemsObject
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes'
    default?: unknown
    maximum?: number
    exclusiveMaximum?: boolean
    minimum?: number
    exclusiveMinimum?: boolean
    maxLength?: number //integer
    minLength?: number //integer
    pattern?: string
    maxItems?: number //integer
    minItems?: number //integer
    uniqueItems?: boolean
    enum?: unknown[]
    multipleOf?: number
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#responses-object
 */
export interface ResponsesObject {
    default?: ResponseObject | ReferenceObject
    [httpStatus: string]: ResponseObject | ReferenceObject
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#response-object
 */
export interface ResponseObject extends SpecificationExtensions {
    description: string
    schema?: SchemaObject
    headers?: HeadersObject
    examples?: ExampleObject
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#headers-object
 */
export interface HeadersObject {
    [name: string]: HeaderObject
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#example-object
 */
export interface ExampleObject<T = unknown> {
    [mimeType: string]: T
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#header-object
 */
export interface HeaderObject extends SpecificationExtensions {
    description?: string
    type: 'string' | 'number' | 'integer' | 'boolean' | 'array'
    format?: string
    items?: ItemsObject
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes'
    default?: unknown
    maximum?: number
    exclusiveMaximum?: boolean
    minimum?: number
    exclusiveMinimum?: boolean
    maxLength?: number
    minLength?: number
    pattern?: string
    maxItems?: number
    minItems?: number
    uniqueItems?: boolean
    enum?: unknown[]
    multipleOf?: number
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#tag-object
 */
export interface TagObject extends SpecificationExtensions {
    name: string
    description?: string
    externalDocs?: ExternalDocumentationObject
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#reference-object
 */
export interface ReferenceObject {
    $ref: string
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schema-object
 */
export interface SchemaObject extends SpecificationExtensions {
    $ref?: string
    format?: string
    title?: string
    description?: string
    default?: unknown

    multipleOf?: number
    maximum?: number
    exclusiveMaximum?: boolean
    minimum?: number
    exclusiveMinimum?: boolean
    maxLength?: number
    minLength?: number
    pattern?: string
    maxItems?: number
    minItems?: number
    uniqueItems?: boolean
    maxProperties?: number
    minProperties?: number
    required?: string[]
    enum?: unknown[]
    type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object'

    items?: ItemsObject | ReferenceObject
    allOf?: (SchemaObject | ReferenceObject)[]
    properties?: DefinitionsObject
    additionalProperties?: (SchemaObject | ReferenceObject | boolean)

    discriminator?: string
    readonly?: boolean
    xml?: XmlObject
    externalDocs?: ExternalDocumentationObject
    example?: unknown
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#xml-object
 */
export interface XmlObject extends SpecificationExtensions {
    name?: string
    namespace?: string
    prefix?: string
    attribute?: boolean
    wrapped?: boolean
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#definitions-object
 */
export type DefinitionsObject = Record<string, SchemaObject | ReferenceObject>

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameters-definitions-object
 */
export type ParametersDefinitionsObject = Record<string, ParameterObject | ReferenceObject>

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#responses-definitions-object
 */
export type ResponsesDefinitionsObject = Record<string, ResponseObject | ReferenceObject>

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object
 */
export type SecurityDefinitionsObject = Record<string, SecuritySchemeObject>

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-scheme-object
 */
export interface SecuritySchemeObject extends SpecificationExtensions {
    type: 'basic' | 'apiKey' | 'oauth2'
    description?: string
    name: string
    in: 'query' | 'header'
    flow: 'implicit' | 'password' | 'application' | 'accessCode'
    authorizationUrl: string
    tokenUrl: string
    scopes: ScopesObject
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#scopes-object
 */
export interface ScopesObject extends SpecificationExtensions{
    [name: string]: string
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#secuirty-requirement-object
 */
export interface SecurityRequirementObject {
    [name: string]: string[]
}

/**
 * Doc: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#specification-extensions
 */
export type SpecificationExtensions<T = unknown> = Record<string, T>
