export interface OpenAPIObject {
    openapi: string
    info: InfoObject
    servers?: ServerObject[]
    paths: PathsObject
    components?: ComponentsObject
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
    email: string
}

export interface LicenseObject extends SpecificationExtensions {
    name: string
    url?: string
}

export interface ServerObject extends SpecificationExtensions {
    url: string
    description?: string
    variables?: Record<string, ServerVariableObject>
}

export interface ServerVariableObject<T = string | boolean | number> extends SpecificationExtensions {
    enum?: T[]
    default: T
    description?: string
}

export interface ComponentsObject extends SpecificationExtensions {
    schemas?: Record<string, SchemaObject | ReferenceObject>
    responses?: Record<string, ResponseObject | ReferenceObject>
    parameters?: Record<string, ParameterObject | ReferenceObject>
    examples?: Record<string, ExampleObject | ReferenceObject>
    requestBodies?: Record<string, RequestBodyObject | ReferenceObject>
    headers?: Record<string, HeaderObject | ReferenceObject>
    securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>
    links?: Record<string, LinkObject | ReferenceObject>
    callbacks?: Record<string, CallbackObject | ReferenceObject>
}

export interface PathsObject extends SpecificationExtensions {
    [fieldPattern: string]: PathItemObject
}

export type PathItemObject = {
    $ref?: string
    summary?: string
    description?: string
    get?: OperationObject
    put?: OperationObject
    post?: OperationObject
    delete?: OperationObject
    options?: OperationObject
    head?: OperationObject
    patch?: OperationObject
    trace?: OperationObject
    servers?: ServerObject[]
    parameters?: (ParameterObject | ReferenceObject)[]
} & SpecificationExtensions

export interface OperationObject extends SpecificationExtensions {
    tags?: string[]
    summary?: string
    description?: string
    externalDocs?: ExternalDocumentationObject
    operationId: string
    parameters?: (ParameterObject | ReferenceObject)[]
    requestBody?: RequestBodyObject | ReferenceObject
    responses: ResponsesObject
    callbacks?: Record<string, CallbackObject | ReferenceObject>
    deprecated?: boolean
    security?: SecurityRequirementObject[]
    servers?: ServerObject[]
}

export interface ExternalDocumentationObject extends SpecificationExtensions {
    description?: string
    url: string
}

export interface BaseParameterObject {
    description?: string
    required?: boolean
    deprecated?: boolean
    allowEmptyValues?: boolean

    style?: ParameterStyle
    explode?: boolean
    allowReserved?: boolean
    schema?: SchemaObject | ReferenceObject
    example?: unknown
    examples?: Record<string, ExampleObject | ReferenceObject>

    content?: Record<string, MediaTypeObject>
}

export interface ParameterObject extends BaseParameterObject, SpecificationExtensions {
    name: string
    in: string
}

export type ParameterStyle = 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'

export interface RequestBodyObject extends SpecificationExtensions {
    description?: string
    content: Record<string, MediaTypeObject>
    required?: boolean
}

export interface MediaTypeObject extends SpecificationExtensions {
    schema?: SchemaObject | ReferenceObject
    example?: unknown
    examples?: Record<string, ExampleObject | ReferenceObject>
    encoding?: Record<string, EncodingObject>
}

export interface EncodingObject extends SpecificationExtensions {
    contentType?: string
    headers?: Record<string, HeaderObject | ReferenceObject>
    style?: string
    explode?: boolean
    allowReserved?: boolean
}

export interface ResponsesObject extends SpecificationExtensions {
    default?: ResponseObject | ReferenceObject
    [httpStatusCode: string]: ResponseObject | ReferenceObject
}

export interface ResponseObject extends SpecificationExtensions {
    description: string
    headers?: Record<string, HeaderObject | ReferenceObject>
    content?: Record<string, MediaTypeObject>
    links?: Record<string, LinkObject | ReferenceObject>
}

export interface CallbackObject extends SpecificationExtensions {
    [expression: string]: PathItemObject
}

export interface BaseExample {
    summary?: string
    description?: string
}

export interface ExampleValue extends BaseExample { value?: unknown }

export interface ExampleExternalValue extends BaseExample { externalValue?: string }

export type ExampleObject = (ExampleValue | ExampleExternalValue) & SpecificationExtensions

export interface LinkObject extends SpecificationExtensions {
    operationRef?: string
    operationId?: string
    parameters?: Record<string, unknown | string>
    requestBody?: unknown | string
    description?: string
    server?: ServerObject
}

export type HeaderObject = BaseParameterObject

export interface TagObject {
    name: string
    description?: string
    externalDocs?: ExternalDocumentationObject
}

export interface ReferenceObject {
    $ref: string
}

export interface SchemaObject extends SpecificationExtensions {
    nullable?: boolean;
    discriminator?: DiscriminatorObject
    readOnly?: boolean;
    writeOnly?: boolean;
    xml?: XmlObject;
    externalDocs?: ExternalDocumentationObject;
    example?: unknown;
    examples?: unknown[];
    deprecated?: boolean;

    type?: string;
    allOf?: (SchemaObject | ReferenceObject)[];
    oneOf?: (SchemaObject | ReferenceObject)[];
    unknownOf?: (SchemaObject | ReferenceObject)[];
    not?: SchemaObject | ReferenceObject;
    items?: SchemaObject | ReferenceObject;
    properties?: Record<string, SchemaObject | ReferenceObject>
    additionalProperties?: (SchemaObject | ReferenceObject | boolean)
    description?: string;
    format?: string;
    default?: unknown;

    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: unknown[];
}

export interface DiscriminatorObject {
    propertyName: string
    mapping?: Record<string, string>
}

export interface XmlObject {
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
}

export interface SecuritySchemeObject extends SpecificationExtensions {
    type: string
    description?: string
    name: string
    in: string
    schema: string
    bearerFormat?: string
    flows: OAuthFlowsObject
    openIdConnectUrl: string
}

export interface OAuthFlowsObject extends SpecificationExtensions {
    implicit?: OAuthFlowObject
    password?: OAuthFlowObject
    clientCredentials?: OAuthFlowObject
    authorizationCode?: OAuthFlowObject
}

export interface OAuthFlowObject extends SpecificationExtensions {
    authorizationUrl: string
    tokenUrl: string
    refreshUrl?: string
    scopes: Record<string, string>
}

export type SecurityRequirementObject = Record<string, string[]>

export type SpecificationExtensions<T = unknown> = Record<string, T>
