/* eslint-disable prefer-const */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
// source: src/protos/article.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

const jspb = require('google-protobuf');
const goog = jspb;
const global = Function('return this')();

const src_protos_pagedList_pb = require('./pagedList_pb.js');
goog.object.extend(proto, src_protos_pagedList_pb);
goog.exportSymbol('proto.blog.ArticleDto', null, global);
goog.exportSymbol('proto.blog.QueryReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog.QueryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.QueryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.QueryReq.displayName = 'proto.blog.QueryReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog.ArticleDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.ArticleDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog.ArticleDto.displayName = 'proto.blog.ArticleDto';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog.QueryReq.prototype.toObject = function(opt_includeInstance) {
    return proto.blog.QueryReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog.QueryReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.blog.QueryReq.toObject = function(includeInstance, msg) {
    let f,
      obj = {
        pagenumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
        pagesize: jspb.Message.getFieldWithDefault(msg, 2, 0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog.QueryReq}
 */
proto.blog.QueryReq.deserializeBinary = function(bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.blog.QueryReq();
  return proto.blog.QueryReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.QueryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.QueryReq}
 */
proto.blog.QueryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setPagenumber(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setPagesize(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog.QueryReq.prototype.serializeBinary = function() {
  const writer = new jspb.BinaryWriter();
  proto.blog.QueryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.QueryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.QueryReq.serializeBinaryToWriter = function(message, writer) {
  let f = undefined;
  f = message.getPagenumber();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeInt32(2, f);
  }
};

/**
 * optional int32 pageNumber = 1;
 * @return {number}
 */
proto.blog.QueryReq.prototype.getPagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.blog.QueryReq} returns this
 */
proto.blog.QueryReq.prototype.setPagenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int32 pageSize = 2;
 * @return {number}
 */
proto.blog.QueryReq.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.blog.QueryReq} returns this
 */
proto.blog.QueryReq.prototype.setPagesize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog.ArticleDto.prototype.toObject = function(opt_includeInstance) {
    return proto.blog.ArticleDto.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog.ArticleDto} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.blog.ArticleDto.toObject = function(includeInstance, msg) {
    let f,
      obj = {
        title: jspb.Message.getFieldWithDefault(msg, 1, ''),
        content: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog.ArticleDto}
 */
proto.blog.ArticleDto.deserializeBinary = function(bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.blog.ArticleDto();
  return proto.blog.ArticleDto.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.ArticleDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.ArticleDto}
 */
proto.blog.ArticleDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setTitle(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setContent(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog.ArticleDto.prototype.serializeBinary = function() {
  const writer = new jspb.BinaryWriter();
  proto.blog.ArticleDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.ArticleDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.ArticleDto.serializeBinaryToWriter = function(message, writer) {
  let f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string title = 1;
 * @return {string}
 */
proto.blog.ArticleDto.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.blog.ArticleDto} returns this
 */
proto.blog.ArticleDto.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string content = 2;
 * @return {string}
 */
proto.blog.ArticleDto.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.blog.ArticleDto} returns this
 */
proto.blog.ArticleDto.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

goog.object.extend(exports, proto.blog);