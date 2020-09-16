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
    parameters?: ParametersDefinitionObject
    responses?: ResponsesDefinitionObject
    securityDefinitions?: SecurityDefinitionsObject
    security?: SecurityRequirementObject[]
    tags?: TagObject[]
    externalDocs?: ExternalDocumentationObject
}

export interface InfoObject extends SpecificationExtensions {
    title: string
    description?: string
    termsOfService?: string
    contact?: ContactObject
    license?: LicenseObject
    version: string
}

export interface ContactObject extends SpecificationExtensions {
    name?: string
    url?: string
    email?: string
}

export interface LicenseObject extends SpecificationExtensions {
    name: string
    url?: string
}

export interface PathsObject extends SpecificationExtensions {
    [path: string]: PathItemObject
}

export interface PathItemObject extends SpecificationExtensions {
    $ref?: string
    get?: OperationObject
    put?: OperationObject
    post?: OperationObject
    delete?: OperationObject
    options?: OperationObject
    head?: OperationObject
    patch?: OperationObject
    parameters?: (ParametersDefinitionObject | ReferenceObject)[]
}

export interface OperationObject extends SpecificationExtensions {
    tags?: string[]
    summary?: string
    description?: string
    externalDocs?: ExternalDocumentationObject
    operationId?: string
    consumes?: string[]
    produces?: string[]
    parameters?: ParametersDefinitionObject
}

export interface ExternalDocumentationObject extends SpecificationExtensions {
    description?: string
    url: string
}

export type ParameterObject = ParameterBaseObject & (ParameterBodyObject | ParameterOtherObject) & SpecificationExtensions

export interface ParameterBaseObject {
    name: string
    in: 'query' | 'header' | 'path' | 'formData' | 'body'
    description?: string
    required?: boolean
}

export interface ParameterBodyObject {
    in: 'body'
    schema: SchemaObject
}

export interface ParameterOtherObject {
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

export type ParameterIn = 'query' | 'header' | 'path' | 'formData' | 'body'

export interface ItemsObject extends SpecificationExtensions {
    type: 'string' | 'number' | 'integer' | 'boolean' | 'array'
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

export interface ResponsesObject {
    default?: ResponseObject | ReferenceObject
    [httpStatus: string]: ResponseObject | ReferenceObject
}

export interface ResponseObject extends SpecificationExtensions {
    description: string
    schema?: SchemaObject
    headers?: HeadersObject
    examples?: ExampleObject
}

export interface HeadersObject {
    [name: string]: HeaderObject
}

export interface ExampleObject<T = unknown> {
    [mimeType: string]: T
}

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

export interface TagObject extends SpecificationExtensions {
    name: string
    description?: string
    externalDocs?: ExternalDocumentationObject
}

export interface ReferenceObject {
    $ref: string
}

export interface SchemaObject extends SpecificationExtensions {
    $ref?: ReferenceObject
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
    required?: boolean
    enum?: unknown[]
    type?: 'string' | 'number' | 'integer' | 'boolean' | 'array'

    items?: ItemsObject
    allOf?: (SchemaObject | ReferenceObject)[]
    properties?: DefinitionsObject
    additionalProperties?: DefinitionsObject

    discriminator?: string
    readonly?: boolean
    xml?: XmlObject
    externalDocs?: ExternalDocumentationObject
    example?: unknown
}

export interface XmlObject extends SpecificationExtensions {
    name?: string
    namespace?: string
    prefix?: string
    attribute?: boolean
    wrapped?: boolean
}

export type DefinitionsObject = Record<string, SchemaObject>

export type ParametersDefinitionObject = Record<string, ParameterObject>

export type ResponsesDefinitionObject = Record<string, ResponseObject>

export type SecurityDefinitionsObject = Record<string, SecuritySchemeObject>

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

export interface ScopesObject extends SpecificationExtensions{
    [name: string]: string
}

export interface SecurityRequirementObject {
    [name: string]: string[]
}

export type SpecificationExtensions<T = unknown> = Record<string, T>
