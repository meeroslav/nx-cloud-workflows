// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file cache.proto (package nrwl.grpc, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3 } from '@bufbuild/protobuf';

/**
 * @generated from message nrwl.grpc.RestoreRequest
 */
export class RestoreRequest extends Message<RestoreRequest> {
  /**
   * @generated from field: repeated string keys = 1;
   */
  keys: string[] = [];

  /**
   * @generated from field: repeated string paths = 2;
   */
  paths: string[] = [];

  constructor(data?: PartialMessage<RestoreRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'nrwl.grpc.RestoreRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'keys',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    {
      no: 2,
      name: 'paths',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RestoreRequest {
    return new RestoreRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RestoreRequest {
    return new RestoreRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RestoreRequest {
    return new RestoreRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: RestoreRequest | PlainMessage<RestoreRequest> | undefined,
    b: RestoreRequest | PlainMessage<RestoreRequest> | undefined
  ): boolean {
    return proto3.util.equals(RestoreRequest, a, b);
  }
}

/**
 * @generated from message nrwl.grpc.RestoreResponse
 */
export class RestoreResponse extends Message<RestoreResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  /**
   * @generated from field: string key = 2;
   */
  key = '';

  constructor(data?: PartialMessage<RestoreResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'nrwl.grpc.RestoreResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'success', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RestoreResponse {
    return new RestoreResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RestoreResponse {
    return new RestoreResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RestoreResponse {
    return new RestoreResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: RestoreResponse | PlainMessage<RestoreResponse> | undefined,
    b: RestoreResponse | PlainMessage<RestoreResponse> | undefined
  ): boolean {
    return proto3.util.equals(RestoreResponse, a, b);
  }
}

/**
 * @generated from message nrwl.grpc.StoreRequest
 */
export class StoreRequest extends Message<StoreRequest> {
  /**
   * @generated from field: string key = 1;
   */
  key = '';

  /**
   * @generated from field: repeated string paths = 2;
   */
  paths: string[] = [];

  constructor(data?: PartialMessage<StoreRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'nrwl.grpc.StoreRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: 'paths',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): StoreRequest {
    return new StoreRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): StoreRequest {
    return new StoreRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): StoreRequest {
    return new StoreRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: StoreRequest | PlainMessage<StoreRequest> | undefined,
    b: StoreRequest | PlainMessage<StoreRequest> | undefined
  ): boolean {
    return proto3.util.equals(StoreRequest, a, b);
  }
}

/**
 * @generated from message nrwl.grpc.StoreResponse
 */
export class StoreResponse extends Message<StoreResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  /**
   * @generated from field: bool skipped = 2;
   */
  skipped = false;

  constructor(data?: PartialMessage<StoreResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'nrwl.grpc.StoreResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'success', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: 'skipped', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): StoreResponse {
    return new StoreResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): StoreResponse {
    return new StoreResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): StoreResponse {
    return new StoreResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: StoreResponse | PlainMessage<StoreResponse> | undefined,
    b: StoreResponse | PlainMessage<StoreResponse> | undefined
  ): boolean {
    return proto3.util.equals(StoreResponse, a, b);
  }
}