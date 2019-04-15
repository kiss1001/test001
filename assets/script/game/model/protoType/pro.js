/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pro = (function() {

    /**
     * Namespace pro.
     * @exports pro
     * @namespace
     */
    var pro = {};

    pro.RequestMessage = (function() {

        /**
         * Properties of a RequestMessage.
         * @memberof pro
         * @interface IRequestMessage
         * @property {number|null} [messageType] RequestMessage messageType
         * @property {string|null} [traceActivityId] RequestMessage traceActivityId
         * @property {Uint8Array|null} [body] RequestMessage body
         */

        /**
         * Constructs a new RequestMessage.
         * @memberof pro
         * @classdesc Represents a RequestMessage.
         * @implements IRequestMessage
         * @constructor
         * @param {pro.IRequestMessage=} [properties] Properties to set
         */
        function RequestMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestMessage messageType.
         * @member {number} messageType
         * @memberof pro.RequestMessage
         * @instance
         */
        RequestMessage.prototype.messageType = 0;

        /**
         * RequestMessage traceActivityId.
         * @member {string} traceActivityId
         * @memberof pro.RequestMessage
         * @instance
         */
        RequestMessage.prototype.traceActivityId = "";

        /**
         * RequestMessage body.
         * @member {Uint8Array} body
         * @memberof pro.RequestMessage
         * @instance
         */
        RequestMessage.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new RequestMessage instance using the specified properties.
         * @function create
         * @memberof pro.RequestMessage
         * @static
         * @param {pro.IRequestMessage=} [properties] Properties to set
         * @returns {pro.RequestMessage} RequestMessage instance
         */
        RequestMessage.create = function create(properties) {
            return new RequestMessage(properties);
        };

        /**
         * Encodes the specified RequestMessage message. Does not implicitly {@link pro.RequestMessage.verify|verify} messages.
         * @function encode
         * @memberof pro.RequestMessage
         * @static
         * @param {pro.IRequestMessage} message RequestMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            if (message.traceActivityId != null && message.hasOwnProperty("traceActivityId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.traceActivityId);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified RequestMessage message, length delimited. Does not implicitly {@link pro.RequestMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.RequestMessage
         * @static
         * @param {pro.IRequestMessage} message RequestMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestMessage message from the specified reader or buffer.
         * @function decode
         * @memberof pro.RequestMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.RequestMessage} RequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.RequestMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.int32();
                    break;
                case 2:
                    message.traceActivityId = reader.string();
                    break;
                case 3:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.RequestMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.RequestMessage} RequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestMessage message.
         * @function verify
         * @memberof pro.RequestMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isInteger(message.messageType))
                    return "messageType: integer expected";
            if (message.traceActivityId != null && message.hasOwnProperty("traceActivityId"))
                if (!$util.isString(message.traceActivityId))
                    return "traceActivityId: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a RequestMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.RequestMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.RequestMessage} RequestMessage
         */
        RequestMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.RequestMessage)
                return object;
            var message = new $root.pro.RequestMessage();
            if (object.messageType != null)
                message.messageType = object.messageType | 0;
            if (object.traceActivityId != null)
                message.traceActivityId = String(object.traceActivityId);
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a RequestMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.RequestMessage
         * @static
         * @param {pro.RequestMessage} message RequestMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = 0;
                object.traceActivityId = "";
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.traceActivityId != null && message.hasOwnProperty("traceActivityId"))
                object.traceActivityId = message.traceActivityId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this RequestMessage to JSON.
         * @function toJSON
         * @memberof pro.RequestMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestMessage;
    })();

    pro.ResponseMessage = (function() {

        /**
         * Properties of a ResponseMessage.
         * @memberof pro
         * @interface IResponseMessage
         * @property {number|null} [messageType] ResponseMessage messageType
         * @property {pro.ErrorCode|null} [errorCode] ResponseMessage errorCode
         * @property {Uint8Array|null} [body] ResponseMessage body
         */

        /**
         * Constructs a new ResponseMessage.
         * @memberof pro
         * @classdesc Represents a ResponseMessage.
         * @implements IResponseMessage
         * @constructor
         * @param {pro.IResponseMessage=} [properties] Properties to set
         */
        function ResponseMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseMessage messageType.
         * @member {number} messageType
         * @memberof pro.ResponseMessage
         * @instance
         */
        ResponseMessage.prototype.messageType = 0;

        /**
         * ResponseMessage errorCode.
         * @member {pro.ErrorCode} errorCode
         * @memberof pro.ResponseMessage
         * @instance
         */
        ResponseMessage.prototype.errorCode = 0;

        /**
         * ResponseMessage body.
         * @member {Uint8Array} body
         * @memberof pro.ResponseMessage
         * @instance
         */
        ResponseMessage.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new ResponseMessage instance using the specified properties.
         * @function create
         * @memberof pro.ResponseMessage
         * @static
         * @param {pro.IResponseMessage=} [properties] Properties to set
         * @returns {pro.ResponseMessage} ResponseMessage instance
         */
        ResponseMessage.create = function create(properties) {
            return new ResponseMessage(properties);
        };

        /**
         * Encodes the specified ResponseMessage message. Does not implicitly {@link pro.ResponseMessage.verify|verify} messages.
         * @function encode
         * @memberof pro.ResponseMessage
         * @static
         * @param {pro.IResponseMessage} message ResponseMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCode);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified ResponseMessage message, length delimited. Does not implicitly {@link pro.ResponseMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ResponseMessage
         * @static
         * @param {pro.IResponseMessage} message ResponseMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseMessage message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ResponseMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ResponseMessage} ResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ResponseMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.int32();
                    break;
                case 2:
                    message.errorCode = reader.int32();
                    break;
                case 3:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ResponseMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ResponseMessage} ResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseMessage message.
         * @function verify
         * @memberof pro.ResponseMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isInteger(message.messageType))
                    return "messageType: integer expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                switch (message.errorCode) {
                default:
                    return "errorCode: enum value expected";
                case 0:
                case -1001:
                case -1002:
                case -1003:
                    break;
                }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a ResponseMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ResponseMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ResponseMessage} ResponseMessage
         */
        ResponseMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ResponseMessage)
                return object;
            var message = new $root.pro.ResponseMessage();
            if (object.messageType != null)
                message.messageType = object.messageType | 0;
            switch (object.errorCode) {
            case "Success":
            case 0:
                message.errorCode = 0;
                break;
            case "InsufficientFund":
            case -1001:
                message.errorCode = -1001;
                break;
            case "NotAllowed":
            case -1002:
                message.errorCode = -1002;
                break;
            case "Unknown":
            case -1003:
                message.errorCode = -1003;
                break;
            }
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a ResponseMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ResponseMessage
         * @static
         * @param {pro.ResponseMessage} message ResponseMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = 0;
                object.errorCode = options.enums === String ? "Success" : 0;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.pro.ErrorCode[message.errorCode] : message.errorCode;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this ResponseMessage to JSON.
         * @function toJSON
         * @memberof pro.ResponseMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseMessage;
    })();

    pro.ExitGameRequest = (function() {

        /**
         * Properties of an ExitGameRequest.
         * @memberof pro
         * @interface IExitGameRequest
         */

        /**
         * Constructs a new ExitGameRequest.
         * @memberof pro
         * @classdesc Represents an ExitGameRequest.
         * @implements IExitGameRequest
         * @constructor
         * @param {pro.IExitGameRequest=} [properties] Properties to set
         */
        function ExitGameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitGameRequest instance using the specified properties.
         * @function create
         * @memberof pro.ExitGameRequest
         * @static
         * @param {pro.IExitGameRequest=} [properties] Properties to set
         * @returns {pro.ExitGameRequest} ExitGameRequest instance
         */
        ExitGameRequest.create = function create(properties) {
            return new ExitGameRequest(properties);
        };

        /**
         * Encodes the specified ExitGameRequest message. Does not implicitly {@link pro.ExitGameRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.ExitGameRequest
         * @static
         * @param {pro.IExitGameRequest} message ExitGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitGameRequest message, length delimited. Does not implicitly {@link pro.ExitGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ExitGameRequest
         * @static
         * @param {pro.IExitGameRequest} message ExitGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ExitGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ExitGameRequest} ExitGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitGameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ExitGameRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ExitGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ExitGameRequest} ExitGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitGameRequest message.
         * @function verify
         * @memberof pro.ExitGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitGameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ExitGameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ExitGameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ExitGameRequest} ExitGameRequest
         */
        ExitGameRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ExitGameRequest)
                return object;
            return new $root.pro.ExitGameRequest();
        };

        /**
         * Creates a plain object from an ExitGameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ExitGameRequest
         * @static
         * @param {pro.ExitGameRequest} message ExitGameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitGameRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ExitGameRequest to JSON.
         * @function toJSON
         * @memberof pro.ExitGameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitGameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitGameRequest;
    })();

    pro.BankerRequest = (function() {

        /**
         * Properties of a BankerRequest.
         * @memberof pro
         * @interface IBankerRequest
         * @property {number|null} [deposit] BankerRequest deposit
         */

        /**
         * Constructs a new BankerRequest.
         * @memberof pro
         * @classdesc Represents a BankerRequest.
         * @implements IBankerRequest
         * @constructor
         * @param {pro.IBankerRequest=} [properties] Properties to set
         */
        function BankerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BankerRequest deposit.
         * @member {number} deposit
         * @memberof pro.BankerRequest
         * @instance
         */
        BankerRequest.prototype.deposit = 0;

        /**
         * Creates a new BankerRequest instance using the specified properties.
         * @function create
         * @memberof pro.BankerRequest
         * @static
         * @param {pro.IBankerRequest=} [properties] Properties to set
         * @returns {pro.BankerRequest} BankerRequest instance
         */
        BankerRequest.create = function create(properties) {
            return new BankerRequest(properties);
        };

        /**
         * Encodes the specified BankerRequest message. Does not implicitly {@link pro.BankerRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.BankerRequest
         * @static
         * @param {pro.IBankerRequest} message BankerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deposit != null && message.hasOwnProperty("deposit"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.deposit);
            return writer;
        };

        /**
         * Encodes the specified BankerRequest message, length delimited. Does not implicitly {@link pro.BankerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BankerRequest
         * @static
         * @param {pro.IBankerRequest} message BankerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BankerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BankerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BankerRequest} BankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BankerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deposit = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BankerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BankerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BankerRequest} BankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BankerRequest message.
         * @function verify
         * @memberof pro.BankerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BankerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deposit != null && message.hasOwnProperty("deposit"))
                if (typeof message.deposit !== "number")
                    return "deposit: number expected";
            return null;
        };

        /**
         * Creates a BankerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BankerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BankerRequest} BankerRequest
         */
        BankerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BankerRequest)
                return object;
            var message = new $root.pro.BankerRequest();
            if (object.deposit != null)
                message.deposit = Number(object.deposit);
            return message;
        };

        /**
         * Creates a plain object from a BankerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BankerRequest
         * @static
         * @param {pro.BankerRequest} message BankerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BankerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.deposit = 0;
            if (message.deposit != null && message.hasOwnProperty("deposit"))
                object.deposit = options.json && !isFinite(message.deposit) ? String(message.deposit) : message.deposit;
            return object;
        };

        /**
         * Converts this BankerRequest to JSON.
         * @function toJSON
         * @memberof pro.BankerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BankerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BankerRequest;
    })();

    pro.CancelBankerRequest = (function() {

        /**
         * Properties of a CancelBankerRequest.
         * @memberof pro
         * @interface ICancelBankerRequest
         */

        /**
         * Constructs a new CancelBankerRequest.
         * @memberof pro
         * @classdesc Represents a CancelBankerRequest.
         * @implements ICancelBankerRequest
         * @constructor
         * @param {pro.ICancelBankerRequest=} [properties] Properties to set
         */
        function CancelBankerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelBankerRequest instance using the specified properties.
         * @function create
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {pro.ICancelBankerRequest=} [properties] Properties to set
         * @returns {pro.CancelBankerRequest} CancelBankerRequest instance
         */
        CancelBankerRequest.create = function create(properties) {
            return new CancelBankerRequest(properties);
        };

        /**
         * Encodes the specified CancelBankerRequest message. Does not implicitly {@link pro.CancelBankerRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {pro.ICancelBankerRequest} message CancelBankerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelBankerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelBankerRequest message, length delimited. Does not implicitly {@link pro.CancelBankerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {pro.ICancelBankerRequest} message CancelBankerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelBankerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelBankerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.CancelBankerRequest} CancelBankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelBankerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.CancelBankerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelBankerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.CancelBankerRequest} CancelBankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelBankerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelBankerRequest message.
         * @function verify
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelBankerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CancelBankerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.CancelBankerRequest} CancelBankerRequest
         */
        CancelBankerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.CancelBankerRequest)
                return object;
            return new $root.pro.CancelBankerRequest();
        };

        /**
         * Creates a plain object from a CancelBankerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.CancelBankerRequest
         * @static
         * @param {pro.CancelBankerRequest} message CancelBankerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelBankerRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CancelBankerRequest to JSON.
         * @function toJSON
         * @memberof pro.CancelBankerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelBankerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelBankerRequest;
    })();

    pro.BetRequest = (function() {

        /**
         * Properties of a BetRequest.
         * @memberof pro
         * @interface IBetRequest
         * @property {number|null} [amount] BetRequest amount
         */

        /**
         * Constructs a new BetRequest.
         * @memberof pro
         * @classdesc Represents a BetRequest.
         * @implements IBetRequest
         * @constructor
         * @param {pro.IBetRequest=} [properties] Properties to set
         */
        function BetRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRequest amount.
         * @member {number} amount
         * @memberof pro.BetRequest
         * @instance
         */
        BetRequest.prototype.amount = 0;

        /**
         * Creates a new BetRequest instance using the specified properties.
         * @function create
         * @memberof pro.BetRequest
         * @static
         * @param {pro.IBetRequest=} [properties] Properties to set
         * @returns {pro.BetRequest} BetRequest instance
         */
        BetRequest.create = function create(properties) {
            return new BetRequest(properties);
        };

        /**
         * Encodes the specified BetRequest message. Does not implicitly {@link pro.BetRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.BetRequest
         * @static
         * @param {pro.IBetRequest} message BetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified BetRequest message, length delimited. Does not implicitly {@link pro.BetRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BetRequest
         * @static
         * @param {pro.IBetRequest} message BetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BetRequest} BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BetRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.amount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BetRequest} BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRequest message.
         * @function verify
         * @memberof pro.BetRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a BetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BetRequest} BetRequest
         */
        BetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BetRequest)
                return object;
            var message = new $root.pro.BetRequest();
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a BetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BetRequest
         * @static
         * @param {pro.BetRequest} message BetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.amount = 0;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this BetRequest to JSON.
         * @function toJSON
         * @memberof pro.BetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRequest;
    })();

    pro.CheckRequest = (function() {

        /**
         * Properties of a CheckRequest.
         * @memberof pro
         * @interface ICheckRequest
         */

        /**
         * Constructs a new CheckRequest.
         * @memberof pro
         * @classdesc Represents a CheckRequest.
         * @implements ICheckRequest
         * @constructor
         * @param {pro.ICheckRequest=} [properties] Properties to set
         */
        function CheckRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CheckRequest instance using the specified properties.
         * @function create
         * @memberof pro.CheckRequest
         * @static
         * @param {pro.ICheckRequest=} [properties] Properties to set
         * @returns {pro.CheckRequest} CheckRequest instance
         */
        CheckRequest.create = function create(properties) {
            return new CheckRequest(properties);
        };

        /**
         * Encodes the specified CheckRequest message. Does not implicitly {@link pro.CheckRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.CheckRequest
         * @static
         * @param {pro.ICheckRequest} message CheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CheckRequest message, length delimited. Does not implicitly {@link pro.CheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.CheckRequest
         * @static
         * @param {pro.ICheckRequest} message CheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.CheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.CheckRequest} CheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.CheckRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.CheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.CheckRequest} CheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckRequest message.
         * @function verify
         * @memberof pro.CheckRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CheckRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.CheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.CheckRequest} CheckRequest
         */
        CheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.CheckRequest)
                return object;
            return new $root.pro.CheckRequest();
        };

        /**
         * Creates a plain object from a CheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.CheckRequest
         * @static
         * @param {pro.CheckRequest} message CheckRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CheckRequest to JSON.
         * @function toJSON
         * @memberof pro.CheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckRequest;
    })();

    pro.AcceptAwardRequest = (function() {

        /**
         * Properties of an AcceptAwardRequest.
         * @memberof pro
         * @interface IAcceptAwardRequest
         * @property {number|Long|null} [id] AcceptAwardRequest id
         */

        /**
         * Constructs a new AcceptAwardRequest.
         * @memberof pro
         * @classdesc Represents an AcceptAwardRequest.
         * @implements IAcceptAwardRequest
         * @constructor
         * @param {pro.IAcceptAwardRequest=} [properties] Properties to set
         */
        function AcceptAwardRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcceptAwardRequest id.
         * @member {number|Long} id
         * @memberof pro.AcceptAwardRequest
         * @instance
         */
        AcceptAwardRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AcceptAwardRequest instance using the specified properties.
         * @function create
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {pro.IAcceptAwardRequest=} [properties] Properties to set
         * @returns {pro.AcceptAwardRequest} AcceptAwardRequest instance
         */
        AcceptAwardRequest.create = function create(properties) {
            return new AcceptAwardRequest(properties);
        };

        /**
         * Encodes the specified AcceptAwardRequest message. Does not implicitly {@link pro.AcceptAwardRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {pro.IAcceptAwardRequest} message AcceptAwardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptAwardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified AcceptAwardRequest message, length delimited. Does not implicitly {@link pro.AcceptAwardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {pro.IAcceptAwardRequest} message AcceptAwardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptAwardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcceptAwardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.AcceptAwardRequest} AcceptAwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptAwardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.AcceptAwardRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcceptAwardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.AcceptAwardRequest} AcceptAwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptAwardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcceptAwardRequest message.
         * @function verify
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcceptAwardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates an AcceptAwardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.AcceptAwardRequest} AcceptAwardRequest
         */
        AcceptAwardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.AcceptAwardRequest)
                return object;
            var message = new $root.pro.AcceptAwardRequest();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AcceptAwardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.AcceptAwardRequest
         * @static
         * @param {pro.AcceptAwardRequest} message AcceptAwardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptAwardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            return object;
        };

        /**
         * Converts this AcceptAwardRequest to JSON.
         * @function toJSON
         * @memberof pro.AcceptAwardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptAwardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcceptAwardRequest;
    })();

    pro.ListAwardsRequest = (function() {

        /**
         * Properties of a ListAwardsRequest.
         * @memberof pro
         * @interface IListAwardsRequest
         */

        /**
         * Constructs a new ListAwardsRequest.
         * @memberof pro
         * @classdesc Represents a ListAwardsRequest.
         * @implements IListAwardsRequest
         * @constructor
         * @param {pro.IListAwardsRequest=} [properties] Properties to set
         */
        function ListAwardsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListAwardsRequest instance using the specified properties.
         * @function create
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {pro.IListAwardsRequest=} [properties] Properties to set
         * @returns {pro.ListAwardsRequest} ListAwardsRequest instance
         */
        ListAwardsRequest.create = function create(properties) {
            return new ListAwardsRequest(properties);
        };

        /**
         * Encodes the specified ListAwardsRequest message. Does not implicitly {@link pro.ListAwardsRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {pro.IListAwardsRequest} message ListAwardsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAwardsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListAwardsRequest message, length delimited. Does not implicitly {@link pro.ListAwardsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {pro.IListAwardsRequest} message ListAwardsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAwardsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListAwardsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ListAwardsRequest} ListAwardsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAwardsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ListAwardsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListAwardsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ListAwardsRequest} ListAwardsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAwardsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListAwardsRequest message.
         * @function verify
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListAwardsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListAwardsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ListAwardsRequest} ListAwardsRequest
         */
        ListAwardsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ListAwardsRequest)
                return object;
            return new $root.pro.ListAwardsRequest();
        };

        /**
         * Creates a plain object from a ListAwardsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ListAwardsRequest
         * @static
         * @param {pro.ListAwardsRequest} message ListAwardsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListAwardsRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListAwardsRequest to JSON.
         * @function toJSON
         * @memberof pro.ListAwardsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListAwardsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListAwardsRequest;
    })();

    pro.ListGameRecordsRequest = (function() {

        /**
         * Properties of a ListGameRecordsRequest.
         * @memberof pro
         * @interface IListGameRecordsRequest
         */

        /**
         * Constructs a new ListGameRecordsRequest.
         * @memberof pro
         * @classdesc Represents a ListGameRecordsRequest.
         * @implements IListGameRecordsRequest
         * @constructor
         * @param {pro.IListGameRecordsRequest=} [properties] Properties to set
         */
        function ListGameRecordsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListGameRecordsRequest instance using the specified properties.
         * @function create
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {pro.IListGameRecordsRequest=} [properties] Properties to set
         * @returns {pro.ListGameRecordsRequest} ListGameRecordsRequest instance
         */
        ListGameRecordsRequest.create = function create(properties) {
            return new ListGameRecordsRequest(properties);
        };

        /**
         * Encodes the specified ListGameRecordsRequest message. Does not implicitly {@link pro.ListGameRecordsRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {pro.IListGameRecordsRequest} message ListGameRecordsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGameRecordsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListGameRecordsRequest message, length delimited. Does not implicitly {@link pro.ListGameRecordsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {pro.IListGameRecordsRequest} message ListGameRecordsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGameRecordsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListGameRecordsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ListGameRecordsRequest} ListGameRecordsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGameRecordsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ListGameRecordsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListGameRecordsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ListGameRecordsRequest} ListGameRecordsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGameRecordsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListGameRecordsRequest message.
         * @function verify
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListGameRecordsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListGameRecordsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ListGameRecordsRequest} ListGameRecordsRequest
         */
        ListGameRecordsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ListGameRecordsRequest)
                return object;
            return new $root.pro.ListGameRecordsRequest();
        };

        /**
         * Creates a plain object from a ListGameRecordsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ListGameRecordsRequest
         * @static
         * @param {pro.ListGameRecordsRequest} message ListGameRecordsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListGameRecordsRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListGameRecordsRequest to JSON.
         * @function toJSON
         * @memberof pro.ListGameRecordsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListGameRecordsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListGameRecordsRequest;
    })();

    pro.GetAwardStatusRequest = (function() {

        /**
         * Properties of a GetAwardStatusRequest.
         * @memberof pro
         * @interface IGetAwardStatusRequest
         */

        /**
         * Constructs a new GetAwardStatusRequest.
         * @memberof pro
         * @classdesc Represents a GetAwardStatusRequest.
         * @implements IGetAwardStatusRequest
         * @constructor
         * @param {pro.IGetAwardStatusRequest=} [properties] Properties to set
         */
        function GetAwardStatusRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetAwardStatusRequest instance using the specified properties.
         * @function create
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {pro.IGetAwardStatusRequest=} [properties] Properties to set
         * @returns {pro.GetAwardStatusRequest} GetAwardStatusRequest instance
         */
        GetAwardStatusRequest.create = function create(properties) {
            return new GetAwardStatusRequest(properties);
        };

        /**
         * Encodes the specified GetAwardStatusRequest message. Does not implicitly {@link pro.GetAwardStatusRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {pro.IGetAwardStatusRequest} message GetAwardStatusRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAwardStatusRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetAwardStatusRequest message, length delimited. Does not implicitly {@link pro.GetAwardStatusRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {pro.IGetAwardStatusRequest} message GetAwardStatusRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAwardStatusRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAwardStatusRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GetAwardStatusRequest} GetAwardStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAwardStatusRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GetAwardStatusRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAwardStatusRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GetAwardStatusRequest} GetAwardStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAwardStatusRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAwardStatusRequest message.
         * @function verify
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAwardStatusRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetAwardStatusRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GetAwardStatusRequest} GetAwardStatusRequest
         */
        GetAwardStatusRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GetAwardStatusRequest)
                return object;
            return new $root.pro.GetAwardStatusRequest();
        };

        /**
         * Creates a plain object from a GetAwardStatusRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GetAwardStatusRequest
         * @static
         * @param {pro.GetAwardStatusRequest} message GetAwardStatusRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAwardStatusRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetAwardStatusRequest to JSON.
         * @function toJSON
         * @memberof pro.GetAwardStatusRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAwardStatusRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAwardStatusRequest;
    })();

    pro.BroadcastRequest = (function() {

        /**
         * Properties of a BroadcastRequest.
         * @memberof pro
         * @interface IBroadcastRequest
         * @property {pro.IMessage|null} [message] BroadcastRequest message
         */

        /**
         * Constructs a new BroadcastRequest.
         * @memberof pro
         * @classdesc Represents a BroadcastRequest.
         * @implements IBroadcastRequest
         * @constructor
         * @param {pro.IBroadcastRequest=} [properties] Properties to set
         */
        function BroadcastRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastRequest message.
         * @member {pro.IMessage|null|undefined} message
         * @memberof pro.BroadcastRequest
         * @instance
         */
        BroadcastRequest.prototype.message = null;

        /**
         * Creates a new BroadcastRequest instance using the specified properties.
         * @function create
         * @memberof pro.BroadcastRequest
         * @static
         * @param {pro.IBroadcastRequest=} [properties] Properties to set
         * @returns {pro.BroadcastRequest} BroadcastRequest instance
         */
        BroadcastRequest.create = function create(properties) {
            return new BroadcastRequest(properties);
        };

        /**
         * Encodes the specified BroadcastRequest message. Does not implicitly {@link pro.BroadcastRequest.verify|verify} messages.
         * @function encode
         * @memberof pro.BroadcastRequest
         * @static
         * @param {pro.IBroadcastRequest} message BroadcastRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                $root.pro.Message.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastRequest message, length delimited. Does not implicitly {@link pro.BroadcastRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BroadcastRequest
         * @static
         * @param {pro.IBroadcastRequest} message BroadcastRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BroadcastRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BroadcastRequest} BroadcastRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BroadcastRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = $root.pro.Message.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BroadcastRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BroadcastRequest} BroadcastRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastRequest message.
         * @function verify
         * @memberof pro.BroadcastRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.pro.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a BroadcastRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BroadcastRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BroadcastRequest} BroadcastRequest
         */
        BroadcastRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BroadcastRequest)
                return object;
            var message = new $root.pro.BroadcastRequest();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".pro.BroadcastRequest.message: object expected");
                message.message = $root.pro.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BroadcastRequest
         * @static
         * @param {pro.BroadcastRequest} message BroadcastRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = null;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.pro.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this BroadcastRequest to JSON.
         * @function toJSON
         * @memberof pro.BroadcastRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastRequest;
    })();

    pro.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof pro
         * @interface ILoginResponse
         * @property {pro.IPlayer|null} [player] LoginResponse player
         * @property {pro.IGameState|null} [gameState] LoginResponse gameState
         * @property {Array.<pro.IMessage>|null} [messages] LoginResponse messages
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof pro
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {pro.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse player.
         * @member {pro.IPlayer|null|undefined} player
         * @memberof pro.LoginResponse
         * @instance
         */
        LoginResponse.prototype.player = null;

        /**
         * LoginResponse gameState.
         * @member {pro.IGameState|null|undefined} gameState
         * @memberof pro.LoginResponse
         * @instance
         */
        LoginResponse.prototype.gameState = null;

        /**
         * LoginResponse messages.
         * @member {Array.<pro.IMessage>} messages
         * @memberof pro.LoginResponse
         * @instance
         */
        LoginResponse.prototype.messages = $util.emptyArray;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof pro.LoginResponse
         * @static
         * @param {pro.ILoginResponse=} [properties] Properties to set
         * @returns {pro.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link pro.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.LoginResponse
         * @static
         * @param {pro.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.pro.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameState != null && message.hasOwnProperty("gameState"))
                $root.pro.GameState.encode(message.gameState, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.pro.Message.encode(message.messages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link pro.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.LoginResponse
         * @static
         * @param {pro.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.pro.Player.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameState = $root.pro.GameState.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.pro.Message.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof pro.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.pro.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.gameState != null && message.hasOwnProperty("gameState")) {
                var error = $root.pro.GameState.verify(message.gameState);
                if (error)
                    return "gameState." + error;
            }
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.pro.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.LoginResponse)
                return object;
            var message = new $root.pro.LoginResponse();
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".pro.LoginResponse.player: object expected");
                message.player = $root.pro.Player.fromObject(object.player);
            }
            if (object.gameState != null) {
                if (typeof object.gameState !== "object")
                    throw TypeError(".pro.LoginResponse.gameState: object expected");
                message.gameState = $root.pro.GameState.fromObject(object.gameState);
            }
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".pro.LoginResponse.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".pro.LoginResponse.messages: object expected");
                    message.messages[i] = $root.pro.Message.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.LoginResponse
         * @static
         * @param {pro.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults) {
                object.player = null;
                object.gameState = null;
            }
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.pro.Player.toObject(message.player, options);
            if (message.gameState != null && message.hasOwnProperty("gameState"))
                object.gameState = $root.pro.GameState.toObject(message.gameState, options);
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.pro.Message.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof pro.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    pro.ExitGameResponse = (function() {

        /**
         * Properties of an ExitGameResponse.
         * @memberof pro
         * @interface IExitGameResponse
         */

        /**
         * Constructs a new ExitGameResponse.
         * @memberof pro
         * @classdesc Represents an ExitGameResponse.
         * @implements IExitGameResponse
         * @constructor
         * @param {pro.IExitGameResponse=} [properties] Properties to set
         */
        function ExitGameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitGameResponse instance using the specified properties.
         * @function create
         * @memberof pro.ExitGameResponse
         * @static
         * @param {pro.IExitGameResponse=} [properties] Properties to set
         * @returns {pro.ExitGameResponse} ExitGameResponse instance
         */
        ExitGameResponse.create = function create(properties) {
            return new ExitGameResponse(properties);
        };

        /**
         * Encodes the specified ExitGameResponse message. Does not implicitly {@link pro.ExitGameResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.ExitGameResponse
         * @static
         * @param {pro.IExitGameResponse} message ExitGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitGameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitGameResponse message, length delimited. Does not implicitly {@link pro.ExitGameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ExitGameResponse
         * @static
         * @param {pro.IExitGameResponse} message ExitGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitGameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ExitGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ExitGameResponse} ExitGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitGameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ExitGameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitGameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ExitGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ExitGameResponse} ExitGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitGameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitGameResponse message.
         * @function verify
         * @memberof pro.ExitGameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitGameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ExitGameResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ExitGameResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ExitGameResponse} ExitGameResponse
         */
        ExitGameResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ExitGameResponse)
                return object;
            return new $root.pro.ExitGameResponse();
        };

        /**
         * Creates a plain object from an ExitGameResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ExitGameResponse
         * @static
         * @param {pro.ExitGameResponse} message ExitGameResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitGameResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ExitGameResponse to JSON.
         * @function toJSON
         * @memberof pro.ExitGameResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitGameResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitGameResponse;
    })();

    pro.BankerResponse = (function() {

        /**
         * Properties of a BankerResponse.
         * @memberof pro
         * @interface IBankerResponse
         */

        /**
         * Constructs a new BankerResponse.
         * @memberof pro
         * @classdesc Represents a BankerResponse.
         * @implements IBankerResponse
         * @constructor
         * @param {pro.IBankerResponse=} [properties] Properties to set
         */
        function BankerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BankerResponse instance using the specified properties.
         * @function create
         * @memberof pro.BankerResponse
         * @static
         * @param {pro.IBankerResponse=} [properties] Properties to set
         * @returns {pro.BankerResponse} BankerResponse instance
         */
        BankerResponse.create = function create(properties) {
            return new BankerResponse(properties);
        };

        /**
         * Encodes the specified BankerResponse message. Does not implicitly {@link pro.BankerResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.BankerResponse
         * @static
         * @param {pro.IBankerResponse} message BankerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BankerResponse message, length delimited. Does not implicitly {@link pro.BankerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BankerResponse
         * @static
         * @param {pro.IBankerResponse} message BankerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BankerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BankerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BankerResponse} BankerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BankerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BankerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BankerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BankerResponse} BankerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BankerResponse message.
         * @function verify
         * @memberof pro.BankerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BankerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BankerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BankerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BankerResponse} BankerResponse
         */
        BankerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BankerResponse)
                return object;
            return new $root.pro.BankerResponse();
        };

        /**
         * Creates a plain object from a BankerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BankerResponse
         * @static
         * @param {pro.BankerResponse} message BankerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BankerResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BankerResponse to JSON.
         * @function toJSON
         * @memberof pro.BankerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BankerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BankerResponse;
    })();

    pro.CancelBankerRespose = (function() {

        /**
         * Properties of a CancelBankerRespose.
         * @memberof pro
         * @interface ICancelBankerRespose
         */

        /**
         * Constructs a new CancelBankerRespose.
         * @memberof pro
         * @classdesc Represents a CancelBankerRespose.
         * @implements ICancelBankerRespose
         * @constructor
         * @param {pro.ICancelBankerRespose=} [properties] Properties to set
         */
        function CancelBankerRespose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelBankerRespose instance using the specified properties.
         * @function create
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {pro.ICancelBankerRespose=} [properties] Properties to set
         * @returns {pro.CancelBankerRespose} CancelBankerRespose instance
         */
        CancelBankerRespose.create = function create(properties) {
            return new CancelBankerRespose(properties);
        };

        /**
         * Encodes the specified CancelBankerRespose message. Does not implicitly {@link pro.CancelBankerRespose.verify|verify} messages.
         * @function encode
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {pro.ICancelBankerRespose} message CancelBankerRespose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelBankerRespose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelBankerRespose message, length delimited. Does not implicitly {@link pro.CancelBankerRespose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {pro.ICancelBankerRespose} message CancelBankerRespose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelBankerRespose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelBankerRespose message from the specified reader or buffer.
         * @function decode
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.CancelBankerRespose} CancelBankerRespose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelBankerRespose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.CancelBankerRespose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelBankerRespose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.CancelBankerRespose} CancelBankerRespose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelBankerRespose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelBankerRespose message.
         * @function verify
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelBankerRespose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CancelBankerRespose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.CancelBankerRespose} CancelBankerRespose
         */
        CancelBankerRespose.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.CancelBankerRespose)
                return object;
            return new $root.pro.CancelBankerRespose();
        };

        /**
         * Creates a plain object from a CancelBankerRespose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.CancelBankerRespose
         * @static
         * @param {pro.CancelBankerRespose} message CancelBankerRespose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelBankerRespose.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CancelBankerRespose to JSON.
         * @function toJSON
         * @memberof pro.CancelBankerRespose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelBankerRespose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelBankerRespose;
    })();

    pro.BetResponse = (function() {

        /**
         * Properties of a BetResponse.
         * @memberof pro
         * @interface IBetResponse
         */

        /**
         * Constructs a new BetResponse.
         * @memberof pro
         * @classdesc Represents a BetResponse.
         * @implements IBetResponse
         * @constructor
         * @param {pro.IBetResponse=} [properties] Properties to set
         */
        function BetResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BetResponse instance using the specified properties.
         * @function create
         * @memberof pro.BetResponse
         * @static
         * @param {pro.IBetResponse=} [properties] Properties to set
         * @returns {pro.BetResponse} BetResponse instance
         */
        BetResponse.create = function create(properties) {
            return new BetResponse(properties);
        };

        /**
         * Encodes the specified BetResponse message. Does not implicitly {@link pro.BetResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.BetResponse
         * @static
         * @param {pro.IBetResponse} message BetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BetResponse message, length delimited. Does not implicitly {@link pro.BetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BetResponse
         * @static
         * @param {pro.IBetResponse} message BetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BetResponse} BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BetResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BetResponse} BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetResponse message.
         * @function verify
         * @memberof pro.BetResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BetResponse} BetResponse
         */
        BetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BetResponse)
                return object;
            return new $root.pro.BetResponse();
        };

        /**
         * Creates a plain object from a BetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BetResponse
         * @static
         * @param {pro.BetResponse} message BetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BetResponse to JSON.
         * @function toJSON
         * @memberof pro.BetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResponse;
    })();

    pro.CheckResponse = (function() {

        /**
         * Properties of a CheckResponse.
         * @memberof pro
         * @interface ICheckResponse
         */

        /**
         * Constructs a new CheckResponse.
         * @memberof pro
         * @classdesc Represents a CheckResponse.
         * @implements ICheckResponse
         * @constructor
         * @param {pro.ICheckResponse=} [properties] Properties to set
         */
        function CheckResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CheckResponse instance using the specified properties.
         * @function create
         * @memberof pro.CheckResponse
         * @static
         * @param {pro.ICheckResponse=} [properties] Properties to set
         * @returns {pro.CheckResponse} CheckResponse instance
         */
        CheckResponse.create = function create(properties) {
            return new CheckResponse(properties);
        };

        /**
         * Encodes the specified CheckResponse message. Does not implicitly {@link pro.CheckResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.CheckResponse
         * @static
         * @param {pro.ICheckResponse} message CheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CheckResponse message, length delimited. Does not implicitly {@link pro.CheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.CheckResponse
         * @static
         * @param {pro.ICheckResponse} message CheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.CheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.CheckResponse} CheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.CheckResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.CheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.CheckResponse} CheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckResponse message.
         * @function verify
         * @memberof pro.CheckResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CheckResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.CheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.CheckResponse} CheckResponse
         */
        CheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.CheckResponse)
                return object;
            return new $root.pro.CheckResponse();
        };

        /**
         * Creates a plain object from a CheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.CheckResponse
         * @static
         * @param {pro.CheckResponse} message CheckResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CheckResponse to JSON.
         * @function toJSON
         * @memberof pro.CheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckResponse;
    })();

    pro.AcceptAwardResponse = (function() {

        /**
         * Properties of an AcceptAwardResponse.
         * @memberof pro
         * @interface IAcceptAwardResponse
         */

        /**
         * Constructs a new AcceptAwardResponse.
         * @memberof pro
         * @classdesc Represents an AcceptAwardResponse.
         * @implements IAcceptAwardResponse
         * @constructor
         * @param {pro.IAcceptAwardResponse=} [properties] Properties to set
         */
        function AcceptAwardResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AcceptAwardResponse instance using the specified properties.
         * @function create
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {pro.IAcceptAwardResponse=} [properties] Properties to set
         * @returns {pro.AcceptAwardResponse} AcceptAwardResponse instance
         */
        AcceptAwardResponse.create = function create(properties) {
            return new AcceptAwardResponse(properties);
        };

        /**
         * Encodes the specified AcceptAwardResponse message. Does not implicitly {@link pro.AcceptAwardResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {pro.IAcceptAwardResponse} message AcceptAwardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptAwardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AcceptAwardResponse message, length delimited. Does not implicitly {@link pro.AcceptAwardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {pro.IAcceptAwardResponse} message AcceptAwardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptAwardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcceptAwardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.AcceptAwardResponse} AcceptAwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptAwardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.AcceptAwardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcceptAwardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.AcceptAwardResponse} AcceptAwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptAwardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcceptAwardResponse message.
         * @function verify
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcceptAwardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an AcceptAwardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.AcceptAwardResponse} AcceptAwardResponse
         */
        AcceptAwardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.AcceptAwardResponse)
                return object;
            return new $root.pro.AcceptAwardResponse();
        };

        /**
         * Creates a plain object from an AcceptAwardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.AcceptAwardResponse
         * @static
         * @param {pro.AcceptAwardResponse} message AcceptAwardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptAwardResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AcceptAwardResponse to JSON.
         * @function toJSON
         * @memberof pro.AcceptAwardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptAwardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcceptAwardResponse;
    })();

    pro.ListAwardsResponse = (function() {

        /**
         * Properties of a ListAwardsResponse.
         * @memberof pro
         * @interface IListAwardsResponse
         * @property {Array.<pro.IAward>|null} [awards] ListAwardsResponse awards
         */

        /**
         * Constructs a new ListAwardsResponse.
         * @memberof pro
         * @classdesc Represents a ListAwardsResponse.
         * @implements IListAwardsResponse
         * @constructor
         * @param {pro.IListAwardsResponse=} [properties] Properties to set
         */
        function ListAwardsResponse(properties) {
            this.awards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListAwardsResponse awards.
         * @member {Array.<pro.IAward>} awards
         * @memberof pro.ListAwardsResponse
         * @instance
         */
        ListAwardsResponse.prototype.awards = $util.emptyArray;

        /**
         * Creates a new ListAwardsResponse instance using the specified properties.
         * @function create
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {pro.IListAwardsResponse=} [properties] Properties to set
         * @returns {pro.ListAwardsResponse} ListAwardsResponse instance
         */
        ListAwardsResponse.create = function create(properties) {
            return new ListAwardsResponse(properties);
        };

        /**
         * Encodes the specified ListAwardsResponse message. Does not implicitly {@link pro.ListAwardsResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {pro.IListAwardsResponse} message ListAwardsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAwardsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.awards != null && message.awards.length)
                for (var i = 0; i < message.awards.length; ++i)
                    $root.pro.Award.encode(message.awards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListAwardsResponse message, length delimited. Does not implicitly {@link pro.ListAwardsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {pro.IListAwardsResponse} message ListAwardsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAwardsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListAwardsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ListAwardsResponse} ListAwardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAwardsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ListAwardsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.awards && message.awards.length))
                        message.awards = [];
                    message.awards.push($root.pro.Award.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListAwardsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ListAwardsResponse} ListAwardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAwardsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListAwardsResponse message.
         * @function verify
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListAwardsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.awards != null && message.hasOwnProperty("awards")) {
                if (!Array.isArray(message.awards))
                    return "awards: array expected";
                for (var i = 0; i < message.awards.length; ++i) {
                    var error = $root.pro.Award.verify(message.awards[i]);
                    if (error)
                        return "awards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListAwardsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ListAwardsResponse} ListAwardsResponse
         */
        ListAwardsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ListAwardsResponse)
                return object;
            var message = new $root.pro.ListAwardsResponse();
            if (object.awards) {
                if (!Array.isArray(object.awards))
                    throw TypeError(".pro.ListAwardsResponse.awards: array expected");
                message.awards = [];
                for (var i = 0; i < object.awards.length; ++i) {
                    if (typeof object.awards[i] !== "object")
                        throw TypeError(".pro.ListAwardsResponse.awards: object expected");
                    message.awards[i] = $root.pro.Award.fromObject(object.awards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListAwardsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ListAwardsResponse
         * @static
         * @param {pro.ListAwardsResponse} message ListAwardsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListAwardsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awards = [];
            if (message.awards && message.awards.length) {
                object.awards = [];
                for (var j = 0; j < message.awards.length; ++j)
                    object.awards[j] = $root.pro.Award.toObject(message.awards[j], options);
            }
            return object;
        };

        /**
         * Converts this ListAwardsResponse to JSON.
         * @function toJSON
         * @memberof pro.ListAwardsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListAwardsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListAwardsResponse;
    })();

    pro.ListGameRecordsResponse = (function() {

        /**
         * Properties of a ListGameRecordsResponse.
         * @memberof pro
         * @interface IListGameRecordsResponse
         * @property {Array.<pro.IGameRecord>|null} [gameRecords] ListGameRecordsResponse gameRecords
         */

        /**
         * Constructs a new ListGameRecordsResponse.
         * @memberof pro
         * @classdesc Represents a ListGameRecordsResponse.
         * @implements IListGameRecordsResponse
         * @constructor
         * @param {pro.IListGameRecordsResponse=} [properties] Properties to set
         */
        function ListGameRecordsResponse(properties) {
            this.gameRecords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListGameRecordsResponse gameRecords.
         * @member {Array.<pro.IGameRecord>} gameRecords
         * @memberof pro.ListGameRecordsResponse
         * @instance
         */
        ListGameRecordsResponse.prototype.gameRecords = $util.emptyArray;

        /**
         * Creates a new ListGameRecordsResponse instance using the specified properties.
         * @function create
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {pro.IListGameRecordsResponse=} [properties] Properties to set
         * @returns {pro.ListGameRecordsResponse} ListGameRecordsResponse instance
         */
        ListGameRecordsResponse.create = function create(properties) {
            return new ListGameRecordsResponse(properties);
        };

        /**
         * Encodes the specified ListGameRecordsResponse message. Does not implicitly {@link pro.ListGameRecordsResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {pro.IListGameRecordsResponse} message ListGameRecordsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGameRecordsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameRecords != null && message.gameRecords.length)
                for (var i = 0; i < message.gameRecords.length; ++i)
                    $root.pro.GameRecord.encode(message.gameRecords[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListGameRecordsResponse message, length delimited. Does not implicitly {@link pro.ListGameRecordsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {pro.IListGameRecordsResponse} message ListGameRecordsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGameRecordsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListGameRecordsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ListGameRecordsResponse} ListGameRecordsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGameRecordsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ListGameRecordsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.gameRecords && message.gameRecords.length))
                        message.gameRecords = [];
                    message.gameRecords.push($root.pro.GameRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListGameRecordsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ListGameRecordsResponse} ListGameRecordsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGameRecordsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListGameRecordsResponse message.
         * @function verify
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListGameRecordsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameRecords != null && message.hasOwnProperty("gameRecords")) {
                if (!Array.isArray(message.gameRecords))
                    return "gameRecords: array expected";
                for (var i = 0; i < message.gameRecords.length; ++i) {
                    var error = $root.pro.GameRecord.verify(message.gameRecords[i]);
                    if (error)
                        return "gameRecords." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListGameRecordsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ListGameRecordsResponse} ListGameRecordsResponse
         */
        ListGameRecordsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ListGameRecordsResponse)
                return object;
            var message = new $root.pro.ListGameRecordsResponse();
            if (object.gameRecords) {
                if (!Array.isArray(object.gameRecords))
                    throw TypeError(".pro.ListGameRecordsResponse.gameRecords: array expected");
                message.gameRecords = [];
                for (var i = 0; i < object.gameRecords.length; ++i) {
                    if (typeof object.gameRecords[i] !== "object")
                        throw TypeError(".pro.ListGameRecordsResponse.gameRecords: object expected");
                    message.gameRecords[i] = $root.pro.GameRecord.fromObject(object.gameRecords[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListGameRecordsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ListGameRecordsResponse
         * @static
         * @param {pro.ListGameRecordsResponse} message ListGameRecordsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListGameRecordsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.gameRecords = [];
            if (message.gameRecords && message.gameRecords.length) {
                object.gameRecords = [];
                for (var j = 0; j < message.gameRecords.length; ++j)
                    object.gameRecords[j] = $root.pro.GameRecord.toObject(message.gameRecords[j], options);
            }
            return object;
        };

        /**
         * Converts this ListGameRecordsResponse to JSON.
         * @function toJSON
         * @memberof pro.ListGameRecordsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListGameRecordsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListGameRecordsResponse;
    })();

    pro.GetAwardStatusResponse = (function() {

        /**
         * Properties of a GetAwardStatusResponse.
         * @memberof pro
         * @interface IGetAwardStatusResponse
         * @property {pro.IStraightStatus|null} [straightStatus] GetAwardStatusResponse straightStatus
         * @property {Array.<pro.ISpecialHandsStatus>|null} [specialHandsStatus] GetAwardStatusResponse specialHandsStatus
         */

        /**
         * Constructs a new GetAwardStatusResponse.
         * @memberof pro
         * @classdesc Represents a GetAwardStatusResponse.
         * @implements IGetAwardStatusResponse
         * @constructor
         * @param {pro.IGetAwardStatusResponse=} [properties] Properties to set
         */
        function GetAwardStatusResponse(properties) {
            this.specialHandsStatus = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAwardStatusResponse straightStatus.
         * @member {pro.IStraightStatus|null|undefined} straightStatus
         * @memberof pro.GetAwardStatusResponse
         * @instance
         */
        GetAwardStatusResponse.prototype.straightStatus = null;

        /**
         * GetAwardStatusResponse specialHandsStatus.
         * @member {Array.<pro.ISpecialHandsStatus>} specialHandsStatus
         * @memberof pro.GetAwardStatusResponse
         * @instance
         */
        GetAwardStatusResponse.prototype.specialHandsStatus = $util.emptyArray;

        /**
         * Creates a new GetAwardStatusResponse instance using the specified properties.
         * @function create
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {pro.IGetAwardStatusResponse=} [properties] Properties to set
         * @returns {pro.GetAwardStatusResponse} GetAwardStatusResponse instance
         */
        GetAwardStatusResponse.create = function create(properties) {
            return new GetAwardStatusResponse(properties);
        };

        /**
         * Encodes the specified GetAwardStatusResponse message. Does not implicitly {@link pro.GetAwardStatusResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {pro.IGetAwardStatusResponse} message GetAwardStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAwardStatusResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.straightStatus != null && message.hasOwnProperty("straightStatus"))
                $root.pro.StraightStatus.encode(message.straightStatus, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.specialHandsStatus != null && message.specialHandsStatus.length)
                for (var i = 0; i < message.specialHandsStatus.length; ++i)
                    $root.pro.SpecialHandsStatus.encode(message.specialHandsStatus[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAwardStatusResponse message, length delimited. Does not implicitly {@link pro.GetAwardStatusResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {pro.IGetAwardStatusResponse} message GetAwardStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAwardStatusResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAwardStatusResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GetAwardStatusResponse} GetAwardStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAwardStatusResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GetAwardStatusResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.straightStatus = $root.pro.StraightStatus.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.specialHandsStatus && message.specialHandsStatus.length))
                        message.specialHandsStatus = [];
                    message.specialHandsStatus.push($root.pro.SpecialHandsStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAwardStatusResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GetAwardStatusResponse} GetAwardStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAwardStatusResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAwardStatusResponse message.
         * @function verify
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAwardStatusResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.straightStatus != null && message.hasOwnProperty("straightStatus")) {
                var error = $root.pro.StraightStatus.verify(message.straightStatus);
                if (error)
                    return "straightStatus." + error;
            }
            if (message.specialHandsStatus != null && message.hasOwnProperty("specialHandsStatus")) {
                if (!Array.isArray(message.specialHandsStatus))
                    return "specialHandsStatus: array expected";
                for (var i = 0; i < message.specialHandsStatus.length; ++i) {
                    var error = $root.pro.SpecialHandsStatus.verify(message.specialHandsStatus[i]);
                    if (error)
                        return "specialHandsStatus." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetAwardStatusResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GetAwardStatusResponse} GetAwardStatusResponse
         */
        GetAwardStatusResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GetAwardStatusResponse)
                return object;
            var message = new $root.pro.GetAwardStatusResponse();
            if (object.straightStatus != null) {
                if (typeof object.straightStatus !== "object")
                    throw TypeError(".pro.GetAwardStatusResponse.straightStatus: object expected");
                message.straightStatus = $root.pro.StraightStatus.fromObject(object.straightStatus);
            }
            if (object.specialHandsStatus) {
                if (!Array.isArray(object.specialHandsStatus))
                    throw TypeError(".pro.GetAwardStatusResponse.specialHandsStatus: array expected");
                message.specialHandsStatus = [];
                for (var i = 0; i < object.specialHandsStatus.length; ++i) {
                    if (typeof object.specialHandsStatus[i] !== "object")
                        throw TypeError(".pro.GetAwardStatusResponse.specialHandsStatus: object expected");
                    message.specialHandsStatus[i] = $root.pro.SpecialHandsStatus.fromObject(object.specialHandsStatus[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAwardStatusResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GetAwardStatusResponse
         * @static
         * @param {pro.GetAwardStatusResponse} message GetAwardStatusResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAwardStatusResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.specialHandsStatus = [];
            if (options.defaults)
                object.straightStatus = null;
            if (message.straightStatus != null && message.hasOwnProperty("straightStatus"))
                object.straightStatus = $root.pro.StraightStatus.toObject(message.straightStatus, options);
            if (message.specialHandsStatus && message.specialHandsStatus.length) {
                object.specialHandsStatus = [];
                for (var j = 0; j < message.specialHandsStatus.length; ++j)
                    object.specialHandsStatus[j] = $root.pro.SpecialHandsStatus.toObject(message.specialHandsStatus[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAwardStatusResponse to JSON.
         * @function toJSON
         * @memberof pro.GetAwardStatusResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAwardStatusResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAwardStatusResponse;
    })();

    pro.BroadcastResponse = (function() {

        /**
         * Properties of a BroadcastResponse.
         * @memberof pro
         * @interface IBroadcastResponse
         */

        /**
         * Constructs a new BroadcastResponse.
         * @memberof pro
         * @classdesc Represents a BroadcastResponse.
         * @implements IBroadcastResponse
         * @constructor
         * @param {pro.IBroadcastResponse=} [properties] Properties to set
         */
        function BroadcastResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BroadcastResponse instance using the specified properties.
         * @function create
         * @memberof pro.BroadcastResponse
         * @static
         * @param {pro.IBroadcastResponse=} [properties] Properties to set
         * @returns {pro.BroadcastResponse} BroadcastResponse instance
         */
        BroadcastResponse.create = function create(properties) {
            return new BroadcastResponse(properties);
        };

        /**
         * Encodes the specified BroadcastResponse message. Does not implicitly {@link pro.BroadcastResponse.verify|verify} messages.
         * @function encode
         * @memberof pro.BroadcastResponse
         * @static
         * @param {pro.IBroadcastResponse} message BroadcastResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BroadcastResponse message, length delimited. Does not implicitly {@link pro.BroadcastResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BroadcastResponse
         * @static
         * @param {pro.IBroadcastResponse} message BroadcastResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BroadcastResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BroadcastResponse} BroadcastResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BroadcastResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BroadcastResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BroadcastResponse} BroadcastResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastResponse message.
         * @function verify
         * @memberof pro.BroadcastResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BroadcastResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BroadcastResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BroadcastResponse} BroadcastResponse
         */
        BroadcastResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BroadcastResponse)
                return object;
            return new $root.pro.BroadcastResponse();
        };

        /**
         * Creates a plain object from a BroadcastResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BroadcastResponse
         * @static
         * @param {pro.BroadcastResponse} message BroadcastResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BroadcastResponse to JSON.
         * @function toJSON
         * @memberof pro.BroadcastResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastResponse;
    })();

    pro.PlayerEnterEvent = (function() {

        /**
         * Properties of a PlayerEnterEvent.
         * @memberof pro
         * @interface IPlayerEnterEvent
         * @property {pro.IPlayer|null} [player] PlayerEnterEvent player
         * @property {number|null} [onlineUsers] PlayerEnterEvent onlineUsers
         */

        /**
         * Constructs a new PlayerEnterEvent.
         * @memberof pro
         * @classdesc Represents a PlayerEnterEvent.
         * @implements IPlayerEnterEvent
         * @constructor
         * @param {pro.IPlayerEnterEvent=} [properties] Properties to set
         */
        function PlayerEnterEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerEnterEvent player.
         * @member {pro.IPlayer|null|undefined} player
         * @memberof pro.PlayerEnterEvent
         * @instance
         */
        PlayerEnterEvent.prototype.player = null;

        /**
         * PlayerEnterEvent onlineUsers.
         * @member {number} onlineUsers
         * @memberof pro.PlayerEnterEvent
         * @instance
         */
        PlayerEnterEvent.prototype.onlineUsers = 0;

        /**
         * Creates a new PlayerEnterEvent instance using the specified properties.
         * @function create
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {pro.IPlayerEnterEvent=} [properties] Properties to set
         * @returns {pro.PlayerEnterEvent} PlayerEnterEvent instance
         */
        PlayerEnterEvent.create = function create(properties) {
            return new PlayerEnterEvent(properties);
        };

        /**
         * Encodes the specified PlayerEnterEvent message. Does not implicitly {@link pro.PlayerEnterEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {pro.IPlayerEnterEvent} message PlayerEnterEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEnterEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.pro.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.onlineUsers != null && message.hasOwnProperty("onlineUsers"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onlineUsers);
            return writer;
        };

        /**
         * Encodes the specified PlayerEnterEvent message, length delimited. Does not implicitly {@link pro.PlayerEnterEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {pro.IPlayerEnterEvent} message PlayerEnterEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEnterEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerEnterEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.PlayerEnterEvent} PlayerEnterEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEnterEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.PlayerEnterEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.pro.Player.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.onlineUsers = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerEnterEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.PlayerEnterEvent} PlayerEnterEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEnterEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerEnterEvent message.
         * @function verify
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerEnterEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.pro.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.onlineUsers != null && message.hasOwnProperty("onlineUsers"))
                if (!$util.isInteger(message.onlineUsers))
                    return "onlineUsers: integer expected";
            return null;
        };

        /**
         * Creates a PlayerEnterEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.PlayerEnterEvent} PlayerEnterEvent
         */
        PlayerEnterEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.PlayerEnterEvent)
                return object;
            var message = new $root.pro.PlayerEnterEvent();
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".pro.PlayerEnterEvent.player: object expected");
                message.player = $root.pro.Player.fromObject(object.player);
            }
            if (object.onlineUsers != null)
                message.onlineUsers = object.onlineUsers | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerEnterEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.PlayerEnterEvent
         * @static
         * @param {pro.PlayerEnterEvent} message PlayerEnterEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerEnterEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.player = null;
                object.onlineUsers = 0;
            }
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.pro.Player.toObject(message.player, options);
            if (message.onlineUsers != null && message.hasOwnProperty("onlineUsers"))
                object.onlineUsers = message.onlineUsers;
            return object;
        };

        /**
         * Converts this PlayerEnterEvent to JSON.
         * @function toJSON
         * @memberof pro.PlayerEnterEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerEnterEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerEnterEvent;
    })();

    pro.PlayerExitEvent = (function() {

        /**
         * Properties of a PlayerExitEvent.
         * @memberof pro
         * @interface IPlayerExitEvent
         * @property {string|null} [accountName] PlayerExitEvent accountName
         * @property {number|null} [onlineUsers] PlayerExitEvent onlineUsers
         */

        /**
         * Constructs a new PlayerExitEvent.
         * @memberof pro
         * @classdesc Represents a PlayerExitEvent.
         * @implements IPlayerExitEvent
         * @constructor
         * @param {pro.IPlayerExitEvent=} [properties] Properties to set
         */
        function PlayerExitEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerExitEvent accountName.
         * @member {string} accountName
         * @memberof pro.PlayerExitEvent
         * @instance
         */
        PlayerExitEvent.prototype.accountName = "";

        /**
         * PlayerExitEvent onlineUsers.
         * @member {number} onlineUsers
         * @memberof pro.PlayerExitEvent
         * @instance
         */
        PlayerExitEvent.prototype.onlineUsers = 0;

        /**
         * Creates a new PlayerExitEvent instance using the specified properties.
         * @function create
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {pro.IPlayerExitEvent=} [properties] Properties to set
         * @returns {pro.PlayerExitEvent} PlayerExitEvent instance
         */
        PlayerExitEvent.create = function create(properties) {
            return new PlayerExitEvent(properties);
        };

        /**
         * Encodes the specified PlayerExitEvent message. Does not implicitly {@link pro.PlayerExitEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {pro.IPlayerExitEvent} message PlayerExitEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerExitEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.onlineUsers != null && message.hasOwnProperty("onlineUsers"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onlineUsers);
            return writer;
        };

        /**
         * Encodes the specified PlayerExitEvent message, length delimited. Does not implicitly {@link pro.PlayerExitEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {pro.IPlayerExitEvent} message PlayerExitEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerExitEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerExitEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.PlayerExitEvent} PlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerExitEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.PlayerExitEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.onlineUsers = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerExitEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.PlayerExitEvent} PlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerExitEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerExitEvent message.
         * @function verify
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerExitEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.onlineUsers != null && message.hasOwnProperty("onlineUsers"))
                if (!$util.isInteger(message.onlineUsers))
                    return "onlineUsers: integer expected";
            return null;
        };

        /**
         * Creates a PlayerExitEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.PlayerExitEvent} PlayerExitEvent
         */
        PlayerExitEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.PlayerExitEvent)
                return object;
            var message = new $root.pro.PlayerExitEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.onlineUsers != null)
                message.onlineUsers = object.onlineUsers | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerExitEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.PlayerExitEvent
         * @static
         * @param {pro.PlayerExitEvent} message PlayerExitEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerExitEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.onlineUsers = 0;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.onlineUsers != null && message.hasOwnProperty("onlineUsers"))
                object.onlineUsers = message.onlineUsers;
            return object;
        };

        /**
         * Converts this PlayerExitEvent to JSON.
         * @function toJSON
         * @memberof pro.PlayerExitEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerExitEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerExitEvent;
    })();

    pro.GameStateUpdatedEvent = (function() {

        /**
         * Properties of a GameStateUpdatedEvent.
         * @memberof pro
         * @interface IGameStateUpdatedEvent
         * @property {number|null} [state] GameStateUpdatedEvent state
         * @property {number|null} [timeout] GameStateUpdatedEvent timeout
         * @property {string|null} [data] GameStateUpdatedEvent data
         */

        /**
         * Constructs a new GameStateUpdatedEvent.
         * @memberof pro
         * @classdesc Represents a GameStateUpdatedEvent.
         * @implements IGameStateUpdatedEvent
         * @constructor
         * @param {pro.IGameStateUpdatedEvent=} [properties] Properties to set
         */
        function GameStateUpdatedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStateUpdatedEvent state.
         * @member {number} state
         * @memberof pro.GameStateUpdatedEvent
         * @instance
         */
        GameStateUpdatedEvent.prototype.state = 0;

        /**
         * GameStateUpdatedEvent timeout.
         * @member {number} timeout
         * @memberof pro.GameStateUpdatedEvent
         * @instance
         */
        GameStateUpdatedEvent.prototype.timeout = 0;

        /**
         * GameStateUpdatedEvent data.
         * @member {string} data
         * @memberof pro.GameStateUpdatedEvent
         * @instance
         */
        GameStateUpdatedEvent.prototype.data = "";

        /**
         * Creates a new GameStateUpdatedEvent instance using the specified properties.
         * @function create
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {pro.IGameStateUpdatedEvent=} [properties] Properties to set
         * @returns {pro.GameStateUpdatedEvent} GameStateUpdatedEvent instance
         */
        GameStateUpdatedEvent.create = function create(properties) {
            return new GameStateUpdatedEvent(properties);
        };

        /**
         * Encodes the specified GameStateUpdatedEvent message. Does not implicitly {@link pro.GameStateUpdatedEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {pro.IGameStateUpdatedEvent} message GameStateUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStateUpdatedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timeout);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified GameStateUpdatedEvent message, length delimited. Does not implicitly {@link pro.GameStateUpdatedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {pro.IGameStateUpdatedEvent} message GameStateUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStateUpdatedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStateUpdatedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GameStateUpdatedEvent} GameStateUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStateUpdatedEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GameStateUpdatedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.timeout = reader.int32();
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStateUpdatedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GameStateUpdatedEvent} GameStateUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStateUpdatedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStateUpdatedEvent message.
         * @function verify
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStateUpdatedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };

        /**
         * Creates a GameStateUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GameStateUpdatedEvent} GameStateUpdatedEvent
         */
        GameStateUpdatedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GameStateUpdatedEvent)
                return object;
            var message = new $root.pro.GameStateUpdatedEvent();
            if (object.state != null)
                message.state = object.state | 0;
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a GameStateUpdatedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GameStateUpdatedEvent
         * @static
         * @param {pro.GameStateUpdatedEvent} message GameStateUpdatedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStateUpdatedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = 0;
                object.timeout = 0;
                object.data = "";
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this GameStateUpdatedEvent to JSON.
         * @function toJSON
         * @memberof pro.GameStateUpdatedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStateUpdatedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStateUpdatedEvent;
    })();

    pro.GameModeUpdatedEvent = (function() {

        /**
         * Properties of a GameModeUpdatedEvent.
         * @memberof pro
         * @interface IGameModeUpdatedEvent
         * @property {number|null} [mode] GameModeUpdatedEvent mode
         */

        /**
         * Constructs a new GameModeUpdatedEvent.
         * @memberof pro
         * @classdesc Represents a GameModeUpdatedEvent.
         * @implements IGameModeUpdatedEvent
         * @constructor
         * @param {pro.IGameModeUpdatedEvent=} [properties] Properties to set
         */
        function GameModeUpdatedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameModeUpdatedEvent mode.
         * @member {number} mode
         * @memberof pro.GameModeUpdatedEvent
         * @instance
         */
        GameModeUpdatedEvent.prototype.mode = 0;

        /**
         * Creates a new GameModeUpdatedEvent instance using the specified properties.
         * @function create
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {pro.IGameModeUpdatedEvent=} [properties] Properties to set
         * @returns {pro.GameModeUpdatedEvent} GameModeUpdatedEvent instance
         */
        GameModeUpdatedEvent.create = function create(properties) {
            return new GameModeUpdatedEvent(properties);
        };

        /**
         * Encodes the specified GameModeUpdatedEvent message. Does not implicitly {@link pro.GameModeUpdatedEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {pro.IGameModeUpdatedEvent} message GameModeUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameModeUpdatedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mode != null && message.hasOwnProperty("mode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
            return writer;
        };

        /**
         * Encodes the specified GameModeUpdatedEvent message, length delimited. Does not implicitly {@link pro.GameModeUpdatedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {pro.IGameModeUpdatedEvent} message GameModeUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameModeUpdatedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameModeUpdatedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GameModeUpdatedEvent} GameModeUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameModeUpdatedEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GameModeUpdatedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameModeUpdatedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GameModeUpdatedEvent} GameModeUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameModeUpdatedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameModeUpdatedEvent message.
         * @function verify
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameModeUpdatedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            return null;
        };

        /**
         * Creates a GameModeUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GameModeUpdatedEvent} GameModeUpdatedEvent
         */
        GameModeUpdatedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GameModeUpdatedEvent)
                return object;
            var message = new $root.pro.GameModeUpdatedEvent();
            if (object.mode != null)
                message.mode = object.mode | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameModeUpdatedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GameModeUpdatedEvent
         * @static
         * @param {pro.GameModeUpdatedEvent} message GameModeUpdatedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameModeUpdatedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mode = 0;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            return object;
        };

        /**
         * Converts this GameModeUpdatedEvent to JSON.
         * @function toJSON
         * @memberof pro.GameModeUpdatedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameModeUpdatedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameModeUpdatedEvent;
    })();

    pro.BankerEvent = (function() {

        /**
         * Properties of a BankerEvent.
         * @memberof pro
         * @interface IBankerEvent
         * @property {string|null} [accountName] BankerEvent accountName
         * @property {number|null} [amount] BankerEvent amount
         */

        /**
         * Constructs a new BankerEvent.
         * @memberof pro
         * @classdesc Represents a BankerEvent.
         * @implements IBankerEvent
         * @constructor
         * @param {pro.IBankerEvent=} [properties] Properties to set
         */
        function BankerEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BankerEvent accountName.
         * @member {string} accountName
         * @memberof pro.BankerEvent
         * @instance
         */
        BankerEvent.prototype.accountName = "";

        /**
         * BankerEvent amount.
         * @member {number} amount
         * @memberof pro.BankerEvent
         * @instance
         */
        BankerEvent.prototype.amount = 0;

        /**
         * Creates a new BankerEvent instance using the specified properties.
         * @function create
         * @memberof pro.BankerEvent
         * @static
         * @param {pro.IBankerEvent=} [properties] Properties to set
         * @returns {pro.BankerEvent} BankerEvent instance
         */
        BankerEvent.create = function create(properties) {
            return new BankerEvent(properties);
        };

        /**
         * Encodes the specified BankerEvent message. Does not implicitly {@link pro.BankerEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.BankerEvent
         * @static
         * @param {pro.IBankerEvent} message BankerEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified BankerEvent message, length delimited. Does not implicitly {@link pro.BankerEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BankerEvent
         * @static
         * @param {pro.IBankerEvent} message BankerEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BankerEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BankerEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BankerEvent} BankerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BankerEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.amount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BankerEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BankerEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BankerEvent} BankerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BankerEvent message.
         * @function verify
         * @memberof pro.BankerEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BankerEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a BankerEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BankerEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BankerEvent} BankerEvent
         */
        BankerEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BankerEvent)
                return object;
            var message = new $root.pro.BankerEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a BankerEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BankerEvent
         * @static
         * @param {pro.BankerEvent} message BankerEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BankerEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.amount = 0;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this BankerEvent to JSON.
         * @function toJSON
         * @memberof pro.BankerEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BankerEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BankerEvent;
    })();

    pro.BetEvent = (function() {

        /**
         * Properties of a BetEvent.
         * @memberof pro
         * @interface IBetEvent
         * @property {string|null} [accountName] BetEvent accountName
         * @property {number|null} [balance] BetEvent balance
         * @property {pro.IBetRecord|null} [record] BetEvent record
         */

        /**
         * Constructs a new BetEvent.
         * @memberof pro
         * @classdesc Represents a BetEvent.
         * @implements IBetEvent
         * @constructor
         * @param {pro.IBetEvent=} [properties] Properties to set
         */
        function BetEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetEvent accountName.
         * @member {string} accountName
         * @memberof pro.BetEvent
         * @instance
         */
        BetEvent.prototype.accountName = "";

        /**
         * BetEvent balance.
         * @member {number} balance
         * @memberof pro.BetEvent
         * @instance
         */
        BetEvent.prototype.balance = 0;

        /**
         * BetEvent record.
         * @member {pro.IBetRecord|null|undefined} record
         * @memberof pro.BetEvent
         * @instance
         */
        BetEvent.prototype.record = null;

        /**
         * Creates a new BetEvent instance using the specified properties.
         * @function create
         * @memberof pro.BetEvent
         * @static
         * @param {pro.IBetEvent=} [properties] Properties to set
         * @returns {pro.BetEvent} BetEvent instance
         */
        BetEvent.create = function create(properties) {
            return new BetEvent(properties);
        };

        /**
         * Encodes the specified BetEvent message. Does not implicitly {@link pro.BetEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.BetEvent
         * @static
         * @param {pro.IBetEvent} message BetEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.balance != null && message.hasOwnProperty("balance"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.balance);
            if (message.record != null && message.hasOwnProperty("record"))
                $root.pro.BetRecord.encode(message.record, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetEvent message, length delimited. Does not implicitly {@link pro.BetEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BetEvent
         * @static
         * @param {pro.IBetEvent} message BetEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BetEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BetEvent} BetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BetEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.balance = reader.double();
                    break;
                case 3:
                    message.record = $root.pro.BetRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BetEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BetEvent} BetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetEvent message.
         * @function verify
         * @memberof pro.BetEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            if (message.record != null && message.hasOwnProperty("record")) {
                var error = $root.pro.BetRecord.verify(message.record);
                if (error)
                    return "record." + error;
            }
            return null;
        };

        /**
         * Creates a BetEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BetEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BetEvent} BetEvent
         */
        BetEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BetEvent)
                return object;
            var message = new $root.pro.BetEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.balance != null)
                message.balance = Number(object.balance);
            if (object.record != null) {
                if (typeof object.record !== "object")
                    throw TypeError(".pro.BetEvent.record: object expected");
                message.record = $root.pro.BetRecord.fromObject(object.record);
            }
            return message;
        };

        /**
         * Creates a plain object from a BetEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BetEvent
         * @static
         * @param {pro.BetEvent} message BetEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.balance = 0;
                object.record = null;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            if (message.record != null && message.hasOwnProperty("record"))
                object.record = $root.pro.BetRecord.toObject(message.record, options);
            return object;
        };

        /**
         * Converts this BetEvent to JSON.
         * @function toJSON
         * @memberof pro.BetEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetEvent;
    })();

    pro.RedPacketEvent = (function() {

        /**
         * Properties of a RedPacketEvent.
         * @memberof pro
         * @interface IRedPacketEvent
         * @property {number|null} [amount] RedPacketEvent amount
         * @property {number|null} [numOfRedPackets] RedPacketEvent numOfRedPackets
         * @property {number|null} [totalAmount] RedPacketEvent totalAmount
         */

        /**
         * Constructs a new RedPacketEvent.
         * @memberof pro
         * @classdesc Represents a RedPacketEvent.
         * @implements IRedPacketEvent
         * @constructor
         * @param {pro.IRedPacketEvent=} [properties] Properties to set
         */
        function RedPacketEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedPacketEvent amount.
         * @member {number} amount
         * @memberof pro.RedPacketEvent
         * @instance
         */
        RedPacketEvent.prototype.amount = 0;

        /**
         * RedPacketEvent numOfRedPackets.
         * @member {number} numOfRedPackets
         * @memberof pro.RedPacketEvent
         * @instance
         */
        RedPacketEvent.prototype.numOfRedPackets = 0;

        /**
         * RedPacketEvent totalAmount.
         * @member {number} totalAmount
         * @memberof pro.RedPacketEvent
         * @instance
         */
        RedPacketEvent.prototype.totalAmount = 0;

        /**
         * Creates a new RedPacketEvent instance using the specified properties.
         * @function create
         * @memberof pro.RedPacketEvent
         * @static
         * @param {pro.IRedPacketEvent=} [properties] Properties to set
         * @returns {pro.RedPacketEvent} RedPacketEvent instance
         */
        RedPacketEvent.create = function create(properties) {
            return new RedPacketEvent(properties);
        };

        /**
         * Encodes the specified RedPacketEvent message. Does not implicitly {@link pro.RedPacketEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.RedPacketEvent
         * @static
         * @param {pro.IRedPacketEvent} message RedPacketEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPacketEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.amount);
            if (message.numOfRedPackets != null && message.hasOwnProperty("numOfRedPackets"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numOfRedPackets);
            if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalAmount);
            return writer;
        };

        /**
         * Encodes the specified RedPacketEvent message, length delimited. Does not implicitly {@link pro.RedPacketEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.RedPacketEvent
         * @static
         * @param {pro.IRedPacketEvent} message RedPacketEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPacketEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedPacketEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.RedPacketEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.RedPacketEvent} RedPacketEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPacketEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.RedPacketEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.amount = reader.int32();
                    break;
                case 2:
                    message.numOfRedPackets = reader.int32();
                    break;
                case 3:
                    message.totalAmount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RedPacketEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.RedPacketEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.RedPacketEvent} RedPacketEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPacketEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RedPacketEvent message.
         * @function verify
         * @memberof pro.RedPacketEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RedPacketEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            if (message.numOfRedPackets != null && message.hasOwnProperty("numOfRedPackets"))
                if (!$util.isInteger(message.numOfRedPackets))
                    return "numOfRedPackets: integer expected";
            if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                if (!$util.isInteger(message.totalAmount))
                    return "totalAmount: integer expected";
            return null;
        };

        /**
         * Creates a RedPacketEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.RedPacketEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.RedPacketEvent} RedPacketEvent
         */
        RedPacketEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.RedPacketEvent)
                return object;
            var message = new $root.pro.RedPacketEvent();
            if (object.amount != null)
                message.amount = object.amount | 0;
            if (object.numOfRedPackets != null)
                message.numOfRedPackets = object.numOfRedPackets | 0;
            if (object.totalAmount != null)
                message.totalAmount = object.totalAmount | 0;
            return message;
        };

        /**
         * Creates a plain object from a RedPacketEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.RedPacketEvent
         * @static
         * @param {pro.RedPacketEvent} message RedPacketEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedPacketEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.amount = 0;
                object.numOfRedPackets = 0;
                object.totalAmount = 0;
            }
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.numOfRedPackets != null && message.hasOwnProperty("numOfRedPackets"))
                object.numOfRedPackets = message.numOfRedPackets;
            if (message.totalAmount != null && message.hasOwnProperty("totalAmount"))
                object.totalAmount = message.totalAmount;
            return object;
        };

        /**
         * Converts this RedPacketEvent to JSON.
         * @function toJSON
         * @memberof pro.RedPacketEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedPacketEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RedPacketEvent;
    })();

    pro.CheckEvent = (function() {

        /**
         * Properties of a CheckEvent.
         * @memberof pro
         * @interface ICheckEvent
         * @property {string|null} [accountName] CheckEvent accountName
         * @property {number|null} [redPacket] CheckEvent redPacket
         * @property {number|null} [balance] CheckEvent balance
         */

        /**
         * Constructs a new CheckEvent.
         * @memberof pro
         * @classdesc Represents a CheckEvent.
         * @implements ICheckEvent
         * @constructor
         * @param {pro.ICheckEvent=} [properties] Properties to set
         */
        function CheckEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckEvent accountName.
         * @member {string} accountName
         * @memberof pro.CheckEvent
         * @instance
         */
        CheckEvent.prototype.accountName = "";

        /**
         * CheckEvent redPacket.
         * @member {number} redPacket
         * @memberof pro.CheckEvent
         * @instance
         */
        CheckEvent.prototype.redPacket = 0;

        /**
         * CheckEvent balance.
         * @member {number} balance
         * @memberof pro.CheckEvent
         * @instance
         */
        CheckEvent.prototype.balance = 0;

        /**
         * Creates a new CheckEvent instance using the specified properties.
         * @function create
         * @memberof pro.CheckEvent
         * @static
         * @param {pro.ICheckEvent=} [properties] Properties to set
         * @returns {pro.CheckEvent} CheckEvent instance
         */
        CheckEvent.create = function create(properties) {
            return new CheckEvent(properties);
        };

        /**
         * Encodes the specified CheckEvent message. Does not implicitly {@link pro.CheckEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.CheckEvent
         * @static
         * @param {pro.ICheckEvent} message CheckEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.redPacket);
            if (message.balance != null && message.hasOwnProperty("balance"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.balance);
            return writer;
        };

        /**
         * Encodes the specified CheckEvent message, length delimited. Does not implicitly {@link pro.CheckEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.CheckEvent
         * @static
         * @param {pro.ICheckEvent} message CheckEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.CheckEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.CheckEvent} CheckEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.CheckEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.redPacket = reader.int32();
                    break;
                case 3:
                    message.balance = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.CheckEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.CheckEvent} CheckEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckEvent message.
         * @function verify
         * @memberof pro.CheckEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                if (!$util.isInteger(message.redPacket))
                    return "redPacket: integer expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            return null;
        };

        /**
         * Creates a CheckEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.CheckEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.CheckEvent} CheckEvent
         */
        CheckEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.CheckEvent)
                return object;
            var message = new $root.pro.CheckEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.redPacket != null)
                message.redPacket = object.redPacket | 0;
            if (object.balance != null)
                message.balance = Number(object.balance);
            return message;
        };

        /**
         * Creates a plain object from a CheckEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.CheckEvent
         * @static
         * @param {pro.CheckEvent} message CheckEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.redPacket = 0;
                object.balance = 0;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                object.redPacket = message.redPacket;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            return object;
        };

        /**
         * Converts this CheckEvent to JSON.
         * @function toJSON
         * @memberof pro.CheckEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckEvent;
    })();

    pro.BankerCanceledEvent = (function() {

        /**
         * Properties of a BankerCanceledEvent.
         * @memberof pro
         * @interface IBankerCanceledEvent
         * @property {string|null} [accountName] BankerCanceledEvent accountName
         * @property {number|null} [balance] BankerCanceledEvent balance
         */

        /**
         * Constructs a new BankerCanceledEvent.
         * @memberof pro
         * @classdesc Represents a BankerCanceledEvent.
         * @implements IBankerCanceledEvent
         * @constructor
         * @param {pro.IBankerCanceledEvent=} [properties] Properties to set
         */
        function BankerCanceledEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BankerCanceledEvent accountName.
         * @member {string} accountName
         * @memberof pro.BankerCanceledEvent
         * @instance
         */
        BankerCanceledEvent.prototype.accountName = "";

        /**
         * BankerCanceledEvent balance.
         * @member {number} balance
         * @memberof pro.BankerCanceledEvent
         * @instance
         */
        BankerCanceledEvent.prototype.balance = 0;

        /**
         * Creates a new BankerCanceledEvent instance using the specified properties.
         * @function create
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {pro.IBankerCanceledEvent=} [properties] Properties to set
         * @returns {pro.BankerCanceledEvent} BankerCanceledEvent instance
         */
        BankerCanceledEvent.create = function create(properties) {
            return new BankerCanceledEvent(properties);
        };

        /**
         * Encodes the specified BankerCanceledEvent message. Does not implicitly {@link pro.BankerCanceledEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {pro.IBankerCanceledEvent} message BankerCanceledEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerCanceledEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.balance != null && message.hasOwnProperty("balance"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.balance);
            return writer;
        };

        /**
         * Encodes the specified BankerCanceledEvent message, length delimited. Does not implicitly {@link pro.BankerCanceledEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {pro.IBankerCanceledEvent} message BankerCanceledEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankerCanceledEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BankerCanceledEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BankerCanceledEvent} BankerCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerCanceledEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BankerCanceledEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.balance = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BankerCanceledEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BankerCanceledEvent} BankerCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankerCanceledEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BankerCanceledEvent message.
         * @function verify
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BankerCanceledEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            return null;
        };

        /**
         * Creates a BankerCanceledEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BankerCanceledEvent} BankerCanceledEvent
         */
        BankerCanceledEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BankerCanceledEvent)
                return object;
            var message = new $root.pro.BankerCanceledEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.balance != null)
                message.balance = Number(object.balance);
            return message;
        };

        /**
         * Creates a plain object from a BankerCanceledEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BankerCanceledEvent
         * @static
         * @param {pro.BankerCanceledEvent} message BankerCanceledEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BankerCanceledEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.balance = 0;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            return object;
        };

        /**
         * Converts this BankerCanceledEvent to JSON.
         * @function toJSON
         * @memberof pro.BankerCanceledEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BankerCanceledEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BankerCanceledEvent;
    })();

    pro.SettlementEvent = (function() {

        /**
         * Properties of a SettlementEvent.
         * @memberof pro
         * @interface ISettlementEvent
         * @property {pro.IGameResult|null} [gameResult] SettlementEvent gameResult
         * @property {Array.<pro.ISettlement>|null} [settlements] SettlementEvent settlements
         */

        /**
         * Constructs a new SettlementEvent.
         * @memberof pro
         * @classdesc Represents a SettlementEvent.
         * @implements ISettlementEvent
         * @constructor
         * @param {pro.ISettlementEvent=} [properties] Properties to set
         */
        function SettlementEvent(properties) {
            this.settlements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SettlementEvent gameResult.
         * @member {pro.IGameResult|null|undefined} gameResult
         * @memberof pro.SettlementEvent
         * @instance
         */
        SettlementEvent.prototype.gameResult = null;

        /**
         * SettlementEvent settlements.
         * @member {Array.<pro.ISettlement>} settlements
         * @memberof pro.SettlementEvent
         * @instance
         */
        SettlementEvent.prototype.settlements = $util.emptyArray;

        /**
         * Creates a new SettlementEvent instance using the specified properties.
         * @function create
         * @memberof pro.SettlementEvent
         * @static
         * @param {pro.ISettlementEvent=} [properties] Properties to set
         * @returns {pro.SettlementEvent} SettlementEvent instance
         */
        SettlementEvent.create = function create(properties) {
            return new SettlementEvent(properties);
        };

        /**
         * Encodes the specified SettlementEvent message. Does not implicitly {@link pro.SettlementEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.SettlementEvent
         * @static
         * @param {pro.ISettlementEvent} message SettlementEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettlementEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                $root.pro.GameResult.encode(message.gameResult, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.settlements != null && message.settlements.length)
                for (var i = 0; i < message.settlements.length; ++i)
                    $root.pro.Settlement.encode(message.settlements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SettlementEvent message, length delimited. Does not implicitly {@link pro.SettlementEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.SettlementEvent
         * @static
         * @param {pro.ISettlementEvent} message SettlementEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettlementEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SettlementEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.SettlementEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.SettlementEvent} SettlementEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettlementEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.SettlementEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameResult = $root.pro.GameResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.settlements && message.settlements.length))
                        message.settlements = [];
                    message.settlements.push($root.pro.Settlement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SettlementEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.SettlementEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.SettlementEvent} SettlementEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettlementEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SettlementEvent message.
         * @function verify
         * @memberof pro.SettlementEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SettlementEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameResult != null && message.hasOwnProperty("gameResult")) {
                var error = $root.pro.GameResult.verify(message.gameResult);
                if (error)
                    return "gameResult." + error;
            }
            if (message.settlements != null && message.hasOwnProperty("settlements")) {
                if (!Array.isArray(message.settlements))
                    return "settlements: array expected";
                for (var i = 0; i < message.settlements.length; ++i) {
                    var error = $root.pro.Settlement.verify(message.settlements[i]);
                    if (error)
                        return "settlements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SettlementEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.SettlementEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.SettlementEvent} SettlementEvent
         */
        SettlementEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.SettlementEvent)
                return object;
            var message = new $root.pro.SettlementEvent();
            if (object.gameResult != null) {
                if (typeof object.gameResult !== "object")
                    throw TypeError(".pro.SettlementEvent.gameResult: object expected");
                message.gameResult = $root.pro.GameResult.fromObject(object.gameResult);
            }
            if (object.settlements) {
                if (!Array.isArray(object.settlements))
                    throw TypeError(".pro.SettlementEvent.settlements: array expected");
                message.settlements = [];
                for (var i = 0; i < object.settlements.length; ++i) {
                    if (typeof object.settlements[i] !== "object")
                        throw TypeError(".pro.SettlementEvent.settlements: object expected");
                    message.settlements[i] = $root.pro.Settlement.fromObject(object.settlements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SettlementEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.SettlementEvent
         * @static
         * @param {pro.SettlementEvent} message SettlementEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SettlementEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.settlements = [];
            if (options.defaults)
                object.gameResult = null;
            if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                object.gameResult = $root.pro.GameResult.toObject(message.gameResult, options);
            if (message.settlements && message.settlements.length) {
                object.settlements = [];
                for (var j = 0; j < message.settlements.length; ++j)
                    object.settlements[j] = $root.pro.Settlement.toObject(message.settlements[j], options);
            }
            return object;
        };

        /**
         * Converts this SettlementEvent to JSON.
         * @function toJSON
         * @memberof pro.SettlementEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SettlementEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettlementEvent;
    })();

    pro.UserBalanceUpdatedEvent = (function() {

        /**
         * Properties of a UserBalanceUpdatedEvent.
         * @memberof pro
         * @interface IUserBalanceUpdatedEvent
         * @property {string|null} [accountName] UserBalanceUpdatedEvent accountName
         * @property {number|null} [balance] UserBalanceUpdatedEvent balance
         * @property {number|null} [reason] UserBalanceUpdatedEvent reason
         */

        /**
         * Constructs a new UserBalanceUpdatedEvent.
         * @memberof pro
         * @classdesc Represents a UserBalanceUpdatedEvent.
         * @implements IUserBalanceUpdatedEvent
         * @constructor
         * @param {pro.IUserBalanceUpdatedEvent=} [properties] Properties to set
         */
        function UserBalanceUpdatedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBalanceUpdatedEvent accountName.
         * @member {string} accountName
         * @memberof pro.UserBalanceUpdatedEvent
         * @instance
         */
        UserBalanceUpdatedEvent.prototype.accountName = "";

        /**
         * UserBalanceUpdatedEvent balance.
         * @member {number} balance
         * @memberof pro.UserBalanceUpdatedEvent
         * @instance
         */
        UserBalanceUpdatedEvent.prototype.balance = 0;

        /**
         * UserBalanceUpdatedEvent reason.
         * @member {number} reason
         * @memberof pro.UserBalanceUpdatedEvent
         * @instance
         */
        UserBalanceUpdatedEvent.prototype.reason = 0;

        /**
         * Creates a new UserBalanceUpdatedEvent instance using the specified properties.
         * @function create
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {pro.IUserBalanceUpdatedEvent=} [properties] Properties to set
         * @returns {pro.UserBalanceUpdatedEvent} UserBalanceUpdatedEvent instance
         */
        UserBalanceUpdatedEvent.create = function create(properties) {
            return new UserBalanceUpdatedEvent(properties);
        };

        /**
         * Encodes the specified UserBalanceUpdatedEvent message. Does not implicitly {@link pro.UserBalanceUpdatedEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {pro.IUserBalanceUpdatedEvent} message UserBalanceUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBalanceUpdatedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.balance != null && message.hasOwnProperty("balance"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.balance);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified UserBalanceUpdatedEvent message, length delimited. Does not implicitly {@link pro.UserBalanceUpdatedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {pro.IUserBalanceUpdatedEvent} message UserBalanceUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBalanceUpdatedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBalanceUpdatedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.UserBalanceUpdatedEvent} UserBalanceUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBalanceUpdatedEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.UserBalanceUpdatedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.balance = reader.double();
                    break;
                case 3:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBalanceUpdatedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.UserBalanceUpdatedEvent} UserBalanceUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBalanceUpdatedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBalanceUpdatedEvent message.
         * @function verify
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBalanceUpdatedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            return null;
        };

        /**
         * Creates a UserBalanceUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.UserBalanceUpdatedEvent} UserBalanceUpdatedEvent
         */
        UserBalanceUpdatedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.UserBalanceUpdatedEvent)
                return object;
            var message = new $root.pro.UserBalanceUpdatedEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.balance != null)
                message.balance = Number(object.balance);
            if (object.reason != null)
                message.reason = object.reason | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserBalanceUpdatedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.UserBalanceUpdatedEvent
         * @static
         * @param {pro.UserBalanceUpdatedEvent} message UserBalanceUpdatedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBalanceUpdatedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.balance = 0;
                object.reason = 0;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this UserBalanceUpdatedEvent to JSON.
         * @function toJSON
         * @memberof pro.UserBalanceUpdatedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBalanceUpdatedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBalanceUpdatedEvent;
    })();

    pro.AwardAvaliableEvent = (function() {

        /**
         * Properties of an AwardAvaliableEvent.
         * @memberof pro
         * @interface IAwardAvaliableEvent
         * @property {pro.IAward|null} [award] AwardAvaliableEvent award
         */

        /**
         * Constructs a new AwardAvaliableEvent.
         * @memberof pro
         * @classdesc Represents an AwardAvaliableEvent.
         * @implements IAwardAvaliableEvent
         * @constructor
         * @param {pro.IAwardAvaliableEvent=} [properties] Properties to set
         */
        function AwardAvaliableEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardAvaliableEvent award.
         * @member {pro.IAward|null|undefined} award
         * @memberof pro.AwardAvaliableEvent
         * @instance
         */
        AwardAvaliableEvent.prototype.award = null;

        /**
         * Creates a new AwardAvaliableEvent instance using the specified properties.
         * @function create
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {pro.IAwardAvaliableEvent=} [properties] Properties to set
         * @returns {pro.AwardAvaliableEvent} AwardAvaliableEvent instance
         */
        AwardAvaliableEvent.create = function create(properties) {
            return new AwardAvaliableEvent(properties);
        };

        /**
         * Encodes the specified AwardAvaliableEvent message. Does not implicitly {@link pro.AwardAvaliableEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {pro.IAwardAvaliableEvent} message AwardAvaliableEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardAvaliableEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.award != null && message.hasOwnProperty("award"))
                $root.pro.Award.encode(message.award, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AwardAvaliableEvent message, length delimited. Does not implicitly {@link pro.AwardAvaliableEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {pro.IAwardAvaliableEvent} message AwardAvaliableEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardAvaliableEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardAvaliableEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.AwardAvaliableEvent} AwardAvaliableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardAvaliableEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.AwardAvaliableEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.award = $root.pro.Award.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardAvaliableEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.AwardAvaliableEvent} AwardAvaliableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardAvaliableEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardAvaliableEvent message.
         * @function verify
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardAvaliableEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.award != null && message.hasOwnProperty("award")) {
                var error = $root.pro.Award.verify(message.award);
                if (error)
                    return "award." + error;
            }
            return null;
        };

        /**
         * Creates an AwardAvaliableEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.AwardAvaliableEvent} AwardAvaliableEvent
         */
        AwardAvaliableEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.AwardAvaliableEvent)
                return object;
            var message = new $root.pro.AwardAvaliableEvent();
            if (object.award != null) {
                if (typeof object.award !== "object")
                    throw TypeError(".pro.AwardAvaliableEvent.award: object expected");
                message.award = $root.pro.Award.fromObject(object.award);
            }
            return message;
        };

        /**
         * Creates a plain object from an AwardAvaliableEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.AwardAvaliableEvent
         * @static
         * @param {pro.AwardAvaliableEvent} message AwardAvaliableEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardAvaliableEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.award = null;
            if (message.award != null && message.hasOwnProperty("award"))
                object.award = $root.pro.Award.toObject(message.award, options);
            return object;
        };

        /**
         * Converts this AwardAvaliableEvent to JSON.
         * @function toJSON
         * @memberof pro.AwardAvaliableEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardAvaliableEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardAvaliableEvent;
    })();

    pro.AwardAcceptedEvent = (function() {

        /**
         * Properties of an AwardAcceptedEvent.
         * @memberof pro
         * @interface IAwardAcceptedEvent
         * @property {string|null} [accountName] AwardAcceptedEvent accountName
         * @property {pro.IAward|null} [award] AwardAcceptedEvent award
         * @property {number|null} [balance] AwardAcceptedEvent balance
         */

        /**
         * Constructs a new AwardAcceptedEvent.
         * @memberof pro
         * @classdesc Represents an AwardAcceptedEvent.
         * @implements IAwardAcceptedEvent
         * @constructor
         * @param {pro.IAwardAcceptedEvent=} [properties] Properties to set
         */
        function AwardAcceptedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardAcceptedEvent accountName.
         * @member {string} accountName
         * @memberof pro.AwardAcceptedEvent
         * @instance
         */
        AwardAcceptedEvent.prototype.accountName = "";

        /**
         * AwardAcceptedEvent award.
         * @member {pro.IAward|null|undefined} award
         * @memberof pro.AwardAcceptedEvent
         * @instance
         */
        AwardAcceptedEvent.prototype.award = null;

        /**
         * AwardAcceptedEvent balance.
         * @member {number} balance
         * @memberof pro.AwardAcceptedEvent
         * @instance
         */
        AwardAcceptedEvent.prototype.balance = 0;

        /**
         * Creates a new AwardAcceptedEvent instance using the specified properties.
         * @function create
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {pro.IAwardAcceptedEvent=} [properties] Properties to set
         * @returns {pro.AwardAcceptedEvent} AwardAcceptedEvent instance
         */
        AwardAcceptedEvent.create = function create(properties) {
            return new AwardAcceptedEvent(properties);
        };

        /**
         * Encodes the specified AwardAcceptedEvent message. Does not implicitly {@link pro.AwardAcceptedEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {pro.IAwardAcceptedEvent} message AwardAcceptedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardAcceptedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.award != null && message.hasOwnProperty("award"))
                $root.pro.Award.encode(message.award, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.balance != null && message.hasOwnProperty("balance"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.balance);
            return writer;
        };

        /**
         * Encodes the specified AwardAcceptedEvent message, length delimited. Does not implicitly {@link pro.AwardAcceptedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {pro.IAwardAcceptedEvent} message AwardAcceptedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardAcceptedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardAcceptedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.AwardAcceptedEvent} AwardAcceptedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardAcceptedEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.AwardAcceptedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.award = $root.pro.Award.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.balance = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardAcceptedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.AwardAcceptedEvent} AwardAcceptedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardAcceptedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardAcceptedEvent message.
         * @function verify
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardAcceptedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.award != null && message.hasOwnProperty("award")) {
                var error = $root.pro.Award.verify(message.award);
                if (error)
                    return "award." + error;
            }
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            return null;
        };

        /**
         * Creates an AwardAcceptedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.AwardAcceptedEvent} AwardAcceptedEvent
         */
        AwardAcceptedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.AwardAcceptedEvent)
                return object;
            var message = new $root.pro.AwardAcceptedEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.award != null) {
                if (typeof object.award !== "object")
                    throw TypeError(".pro.AwardAcceptedEvent.award: object expected");
                message.award = $root.pro.Award.fromObject(object.award);
            }
            if (object.balance != null)
                message.balance = Number(object.balance);
            return message;
        };

        /**
         * Creates a plain object from an AwardAcceptedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.AwardAcceptedEvent
         * @static
         * @param {pro.AwardAcceptedEvent} message AwardAcceptedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardAcceptedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.award = null;
                object.balance = 0;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.award != null && message.hasOwnProperty("award"))
                object.award = $root.pro.Award.toObject(message.award, options);
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            return object;
        };

        /**
         * Converts this AwardAcceptedEvent to JSON.
         * @function toJSON
         * @memberof pro.AwardAcceptedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardAcceptedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardAcceptedEvent;
    })();

    pro.AwardCanceledEvent = (function() {

        /**
         * Properties of an AwardCanceledEvent.
         * @memberof pro
         * @interface IAwardCanceledEvent
         * @property {number|Long|null} [id] AwardCanceledEvent id
         */

        /**
         * Constructs a new AwardCanceledEvent.
         * @memberof pro
         * @classdesc Represents an AwardCanceledEvent.
         * @implements IAwardCanceledEvent
         * @constructor
         * @param {pro.IAwardCanceledEvent=} [properties] Properties to set
         */
        function AwardCanceledEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwardCanceledEvent id.
         * @member {number|Long} id
         * @memberof pro.AwardCanceledEvent
         * @instance
         */
        AwardCanceledEvent.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AwardCanceledEvent instance using the specified properties.
         * @function create
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {pro.IAwardCanceledEvent=} [properties] Properties to set
         * @returns {pro.AwardCanceledEvent} AwardCanceledEvent instance
         */
        AwardCanceledEvent.create = function create(properties) {
            return new AwardCanceledEvent(properties);
        };

        /**
         * Encodes the specified AwardCanceledEvent message. Does not implicitly {@link pro.AwardCanceledEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {pro.IAwardCanceledEvent} message AwardCanceledEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardCanceledEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified AwardCanceledEvent message, length delimited. Does not implicitly {@link pro.AwardCanceledEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {pro.IAwardCanceledEvent} message AwardCanceledEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardCanceledEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwardCanceledEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.AwardCanceledEvent} AwardCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardCanceledEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.AwardCanceledEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwardCanceledEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.AwardCanceledEvent} AwardCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardCanceledEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwardCanceledEvent message.
         * @function verify
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwardCanceledEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates an AwardCanceledEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.AwardCanceledEvent} AwardCanceledEvent
         */
        AwardCanceledEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.AwardCanceledEvent)
                return object;
            var message = new $root.pro.AwardCanceledEvent();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AwardCanceledEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.AwardCanceledEvent
         * @static
         * @param {pro.AwardCanceledEvent} message AwardCanceledEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwardCanceledEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            return object;
        };

        /**
         * Converts this AwardCanceledEvent to JSON.
         * @function toJSON
         * @memberof pro.AwardCanceledEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwardCanceledEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwardCanceledEvent;
    })();

    pro.ConfigUpdatedEvent = (function() {

        /**
         * Properties of a ConfigUpdatedEvent.
         * @memberof pro
         * @interface IConfigUpdatedEvent
         * @property {pro.IGameConfig|null} [gameConfig] ConfigUpdatedEvent gameConfig
         */

        /**
         * Constructs a new ConfigUpdatedEvent.
         * @memberof pro
         * @classdesc Represents a ConfigUpdatedEvent.
         * @implements IConfigUpdatedEvent
         * @constructor
         * @param {pro.IConfigUpdatedEvent=} [properties] Properties to set
         */
        function ConfigUpdatedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConfigUpdatedEvent gameConfig.
         * @member {pro.IGameConfig|null|undefined} gameConfig
         * @memberof pro.ConfigUpdatedEvent
         * @instance
         */
        ConfigUpdatedEvent.prototype.gameConfig = null;

        /**
         * Creates a new ConfigUpdatedEvent instance using the specified properties.
         * @function create
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {pro.IConfigUpdatedEvent=} [properties] Properties to set
         * @returns {pro.ConfigUpdatedEvent} ConfigUpdatedEvent instance
         */
        ConfigUpdatedEvent.create = function create(properties) {
            return new ConfigUpdatedEvent(properties);
        };

        /**
         * Encodes the specified ConfigUpdatedEvent message. Does not implicitly {@link pro.ConfigUpdatedEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {pro.IConfigUpdatedEvent} message ConfigUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfigUpdatedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameConfig != null && message.hasOwnProperty("gameConfig"))
                $root.pro.GameConfig.encode(message.gameConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConfigUpdatedEvent message, length delimited. Does not implicitly {@link pro.ConfigUpdatedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {pro.IConfigUpdatedEvent} message ConfigUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfigUpdatedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConfigUpdatedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ConfigUpdatedEvent} ConfigUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfigUpdatedEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ConfigUpdatedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameConfig = $root.pro.GameConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConfigUpdatedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ConfigUpdatedEvent} ConfigUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfigUpdatedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConfigUpdatedEvent message.
         * @function verify
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConfigUpdatedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameConfig != null && message.hasOwnProperty("gameConfig")) {
                var error = $root.pro.GameConfig.verify(message.gameConfig);
                if (error)
                    return "gameConfig." + error;
            }
            return null;
        };

        /**
         * Creates a ConfigUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ConfigUpdatedEvent} ConfigUpdatedEvent
         */
        ConfigUpdatedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ConfigUpdatedEvent)
                return object;
            var message = new $root.pro.ConfigUpdatedEvent();
            if (object.gameConfig != null) {
                if (typeof object.gameConfig !== "object")
                    throw TypeError(".pro.ConfigUpdatedEvent.gameConfig: object expected");
                message.gameConfig = $root.pro.GameConfig.fromObject(object.gameConfig);
            }
            return message;
        };

        /**
         * Creates a plain object from a ConfigUpdatedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ConfigUpdatedEvent
         * @static
         * @param {pro.ConfigUpdatedEvent} message ConfigUpdatedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConfigUpdatedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameConfig = null;
            if (message.gameConfig != null && message.hasOwnProperty("gameConfig"))
                object.gameConfig = $root.pro.GameConfig.toObject(message.gameConfig, options);
            return object;
        };

        /**
         * Converts this ConfigUpdatedEvent to JSON.
         * @function toJSON
         * @memberof pro.ConfigUpdatedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConfigUpdatedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConfigUpdatedEvent;
    })();

    pro.ForcePlayerExitEvent = (function() {

        /**
         * Properties of a ForcePlayerExitEvent.
         * @memberof pro
         * @interface IForcePlayerExitEvent
         * @property {string|null} [accountName] ForcePlayerExitEvent accountName
         */

        /**
         * Constructs a new ForcePlayerExitEvent.
         * @memberof pro
         * @classdesc Represents a ForcePlayerExitEvent.
         * @implements IForcePlayerExitEvent
         * @constructor
         * @param {pro.IForcePlayerExitEvent=} [properties] Properties to set
         */
        function ForcePlayerExitEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForcePlayerExitEvent accountName.
         * @member {string} accountName
         * @memberof pro.ForcePlayerExitEvent
         * @instance
         */
        ForcePlayerExitEvent.prototype.accountName = "";

        /**
         * Creates a new ForcePlayerExitEvent instance using the specified properties.
         * @function create
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {pro.IForcePlayerExitEvent=} [properties] Properties to set
         * @returns {pro.ForcePlayerExitEvent} ForcePlayerExitEvent instance
         */
        ForcePlayerExitEvent.create = function create(properties) {
            return new ForcePlayerExitEvent(properties);
        };

        /**
         * Encodes the specified ForcePlayerExitEvent message. Does not implicitly {@link pro.ForcePlayerExitEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {pro.IForcePlayerExitEvent} message ForcePlayerExitEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForcePlayerExitEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            return writer;
        };

        /**
         * Encodes the specified ForcePlayerExitEvent message, length delimited. Does not implicitly {@link pro.ForcePlayerExitEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {pro.IForcePlayerExitEvent} message ForcePlayerExitEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForcePlayerExitEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForcePlayerExitEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.ForcePlayerExitEvent} ForcePlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForcePlayerExitEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.ForcePlayerExitEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForcePlayerExitEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.ForcePlayerExitEvent} ForcePlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForcePlayerExitEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForcePlayerExitEvent message.
         * @function verify
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForcePlayerExitEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            return null;
        };

        /**
         * Creates a ForcePlayerExitEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.ForcePlayerExitEvent} ForcePlayerExitEvent
         */
        ForcePlayerExitEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.ForcePlayerExitEvent)
                return object;
            var message = new $root.pro.ForcePlayerExitEvent();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            return message;
        };

        /**
         * Creates a plain object from a ForcePlayerExitEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.ForcePlayerExitEvent
         * @static
         * @param {pro.ForcePlayerExitEvent} message ForcePlayerExitEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForcePlayerExitEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.accountName = "";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            return object;
        };

        /**
         * Converts this ForcePlayerExitEvent to JSON.
         * @function toJSON
         * @memberof pro.ForcePlayerExitEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForcePlayerExitEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ForcePlayerExitEvent;
    })();

    pro.BroadcastEvent = (function() {

        /**
         * Properties of a BroadcastEvent.
         * @memberof pro
         * @interface IBroadcastEvent
         * @property {pro.IMessage|null} [message] BroadcastEvent message
         */

        /**
         * Constructs a new BroadcastEvent.
         * @memberof pro
         * @classdesc Represents a BroadcastEvent.
         * @implements IBroadcastEvent
         * @constructor
         * @param {pro.IBroadcastEvent=} [properties] Properties to set
         */
        function BroadcastEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastEvent message.
         * @member {pro.IMessage|null|undefined} message
         * @memberof pro.BroadcastEvent
         * @instance
         */
        BroadcastEvent.prototype.message = null;

        /**
         * Creates a new BroadcastEvent instance using the specified properties.
         * @function create
         * @memberof pro.BroadcastEvent
         * @static
         * @param {pro.IBroadcastEvent=} [properties] Properties to set
         * @returns {pro.BroadcastEvent} BroadcastEvent instance
         */
        BroadcastEvent.create = function create(properties) {
            return new BroadcastEvent(properties);
        };

        /**
         * Encodes the specified BroadcastEvent message. Does not implicitly {@link pro.BroadcastEvent.verify|verify} messages.
         * @function encode
         * @memberof pro.BroadcastEvent
         * @static
         * @param {pro.IBroadcastEvent} message BroadcastEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                $root.pro.Message.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastEvent message, length delimited. Does not implicitly {@link pro.BroadcastEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BroadcastEvent
         * @static
         * @param {pro.IBroadcastEvent} message BroadcastEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BroadcastEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BroadcastEvent} BroadcastEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BroadcastEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = $root.pro.Message.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BroadcastEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BroadcastEvent} BroadcastEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastEvent message.
         * @function verify
         * @memberof pro.BroadcastEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.pro.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a BroadcastEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BroadcastEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BroadcastEvent} BroadcastEvent
         */
        BroadcastEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BroadcastEvent)
                return object;
            var message = new $root.pro.BroadcastEvent();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".pro.BroadcastEvent.message: object expected");
                message.message = $root.pro.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BroadcastEvent
         * @static
         * @param {pro.BroadcastEvent} message BroadcastEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = null;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.pro.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this BroadcastEvent to JSON.
         * @function toJSON
         * @memberof pro.BroadcastEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastEvent;
    })();

    pro.GameState = (function() {

        /**
         * Properties of a GameState.
         * @memberof pro
         * @interface IGameState
         * @property {number|null} [mode] GameState mode
         * @property {number|null} [state] GameState state
         * @property {number|null} [timeout] GameState timeout
         * @property {string|null} [inning] GameState inning
         * @property {string|null} [banker] GameState banker
         * @property {number|null} [maxRatio] GameState maxRatio
         * @property {pro.IRedPacket|null} [bankerRedPacket] GameState bankerRedPacket
         * @property {pro.IGameConfig|null} [gameConfig] GameState gameConfig
         * @property {Array.<pro.IPlayer>|null} [players] GameState players
         */

        /**
         * Constructs a new GameState.
         * @memberof pro
         * @classdesc Represents a GameState.
         * @implements IGameState
         * @constructor
         * @param {pro.IGameState=} [properties] Properties to set
         */
        function GameState(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameState mode.
         * @member {number} mode
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.mode = 0;

        /**
         * GameState state.
         * @member {number} state
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.state = 0;

        /**
         * GameState timeout.
         * @member {number} timeout
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.timeout = 0;

        /**
         * GameState inning.
         * @member {string} inning
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.inning = "";

        /**
         * GameState banker.
         * @member {string} banker
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.banker = "";

        /**
         * GameState maxRatio.
         * @member {number} maxRatio
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.maxRatio = 0;

        /**
         * GameState bankerRedPacket.
         * @member {pro.IRedPacket|null|undefined} bankerRedPacket
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.bankerRedPacket = null;

        /**
         * GameState gameConfig.
         * @member {pro.IGameConfig|null|undefined} gameConfig
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.gameConfig = null;

        /**
         * GameState players.
         * @member {Array.<pro.IPlayer>} players
         * @memberof pro.GameState
         * @instance
         */
        GameState.prototype.players = $util.emptyArray;

        /**
         * Creates a new GameState instance using the specified properties.
         * @function create
         * @memberof pro.GameState
         * @static
         * @param {pro.IGameState=} [properties] Properties to set
         * @returns {pro.GameState} GameState instance
         */
        GameState.create = function create(properties) {
            return new GameState(properties);
        };

        /**
         * Encodes the specified GameState message. Does not implicitly {@link pro.GameState.verify|verify} messages.
         * @function encode
         * @memberof pro.GameState
         * @static
         * @param {pro.IGameState} message GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mode != null && message.hasOwnProperty("mode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeout);
            if (message.inning != null && message.hasOwnProperty("inning"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.inning);
            if (message.banker != null && message.hasOwnProperty("banker"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.banker);
            if (message.maxRatio != null && message.hasOwnProperty("maxRatio"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.maxRatio);
            if (message.bankerRedPacket != null && message.hasOwnProperty("bankerRedPacket"))
                $root.pro.RedPacket.encode(message.bankerRedPacket, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.gameConfig != null && message.hasOwnProperty("gameConfig"))
                $root.pro.GameConfig.encode(message.gameConfig, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.pro.Player.encode(message.players[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameState message, length delimited. Does not implicitly {@link pro.GameState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GameState
         * @static
         * @param {pro.IGameState} message GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameState message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GameState} GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GameState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.timeout = reader.int32();
                    break;
                case 4:
                    message.inning = reader.string();
                    break;
                case 5:
                    message.banker = reader.string();
                    break;
                case 6:
                    message.maxRatio = reader.double();
                    break;
                case 7:
                    message.bankerRedPacket = $root.pro.RedPacket.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.gameConfig = $root.pro.GameConfig.decode(reader, reader.uint32());
                    break;
                case 9:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.pro.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GameState} GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameState message.
         * @function verify
         * @memberof pro.GameState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            if (message.inning != null && message.hasOwnProperty("inning"))
                if (!$util.isString(message.inning))
                    return "inning: string expected";
            if (message.banker != null && message.hasOwnProperty("banker"))
                if (!$util.isString(message.banker))
                    return "banker: string expected";
            if (message.maxRatio != null && message.hasOwnProperty("maxRatio"))
                if (typeof message.maxRatio !== "number")
                    return "maxRatio: number expected";
            if (message.bankerRedPacket != null && message.hasOwnProperty("bankerRedPacket")) {
                var error = $root.pro.RedPacket.verify(message.bankerRedPacket);
                if (error)
                    return "bankerRedPacket." + error;
            }
            if (message.gameConfig != null && message.hasOwnProperty("gameConfig")) {
                var error = $root.pro.GameConfig.verify(message.gameConfig);
                if (error)
                    return "gameConfig." + error;
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.pro.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GameState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GameState} GameState
         */
        GameState.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GameState)
                return object;
            var message = new $root.pro.GameState();
            if (object.mode != null)
                message.mode = object.mode | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            if (object.inning != null)
                message.inning = String(object.inning);
            if (object.banker != null)
                message.banker = String(object.banker);
            if (object.maxRatio != null)
                message.maxRatio = Number(object.maxRatio);
            if (object.bankerRedPacket != null) {
                if (typeof object.bankerRedPacket !== "object")
                    throw TypeError(".pro.GameState.bankerRedPacket: object expected");
                message.bankerRedPacket = $root.pro.RedPacket.fromObject(object.bankerRedPacket);
            }
            if (object.gameConfig != null) {
                if (typeof object.gameConfig !== "object")
                    throw TypeError(".pro.GameState.gameConfig: object expected");
                message.gameConfig = $root.pro.GameConfig.fromObject(object.gameConfig);
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".pro.GameState.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".pro.GameState.players: object expected");
                    message.players[i] = $root.pro.Player.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GameState
         * @static
         * @param {pro.GameState} message GameState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.mode = 0;
                object.state = 0;
                object.timeout = 0;
                object.inning = "";
                object.banker = "";
                object.maxRatio = 0;
                object.bankerRedPacket = null;
                object.gameConfig = null;
            }
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.inning != null && message.hasOwnProperty("inning"))
                object.inning = message.inning;
            if (message.banker != null && message.hasOwnProperty("banker"))
                object.banker = message.banker;
            if (message.maxRatio != null && message.hasOwnProperty("maxRatio"))
                object.maxRatio = options.json && !isFinite(message.maxRatio) ? String(message.maxRatio) : message.maxRatio;
            if (message.bankerRedPacket != null && message.hasOwnProperty("bankerRedPacket"))
                object.bankerRedPacket = $root.pro.RedPacket.toObject(message.bankerRedPacket, options);
            if (message.gameConfig != null && message.hasOwnProperty("gameConfig"))
                object.gameConfig = $root.pro.GameConfig.toObject(message.gameConfig, options);
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.pro.Player.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this GameState to JSON.
         * @function toJSON
         * @memberof pro.GameState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameState;
    })();

    pro.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof pro
         * @interface IPlayer
         * @property {string|null} [accountName] Player accountName
         * @property {string|null} [name] Player name
         * @property {number|null} [gender] Player gender
         * @property {number|null} [balance] Player balance
         * @property {string|null} [avatar] Player avatar
         * @property {pro.IRedPacket|null} [redPacket] Player redPacket
         * @property {Array.<pro.IBetRecord>|null} [bets] Player bets
         */

        /**
         * Constructs a new Player.
         * @memberof pro
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {pro.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            this.bets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player accountName.
         * @member {string} accountName
         * @memberof pro.Player
         * @instance
         */
        Player.prototype.accountName = "";

        /**
         * Player name.
         * @member {string} name
         * @memberof pro.Player
         * @instance
         */
        Player.prototype.name = "";

        /**
         * Player gender.
         * @member {number} gender
         * @memberof pro.Player
         * @instance
         */
        Player.prototype.gender = 0;

        /**
         * Player balance.
         * @member {number} balance
         * @memberof pro.Player
         * @instance
         */
        Player.prototype.balance = 0;

        /**
         * Player avatar.
         * @member {string} avatar
         * @memberof pro.Player
         * @instance
         */
        Player.prototype.avatar = "";

        /**
         * Player redPacket.
         * @member {pro.IRedPacket|null|undefined} redPacket
         * @memberof pro.Player
         * @instance
         */
        Player.prototype.redPacket = null;

        /**
         * Player bets.
         * @member {Array.<pro.IBetRecord>} bets
         * @memberof pro.Player
         * @instance
         */
        Player.prototype.bets = $util.emptyArray;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof pro.Player
         * @static
         * @param {pro.IPlayer=} [properties] Properties to set
         * @returns {pro.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link pro.Player.verify|verify} messages.
         * @function encode
         * @memberof pro.Player
         * @static
         * @param {pro.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gender);
            if (message.balance != null && message.hasOwnProperty("balance"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.balance);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatar);
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                $root.pro.RedPacket.encode(message.redPacket, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.bets != null && message.bets.length)
                for (var i = 0; i < message.bets.length; ++i)
                    $root.pro.BetRecord.encode(message.bets[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link pro.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.Player
         * @static
         * @param {pro.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof pro.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.gender = reader.int32();
                    break;
                case 4:
                    message.balance = reader.double();
                    break;
                case 5:
                    message.avatar = reader.string();
                    break;
                case 6:
                    message.redPacket = $root.pro.RedPacket.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.bets && message.bets.length))
                        message.bets = [];
                    message.bets.push($root.pro.BetRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof pro.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.redPacket != null && message.hasOwnProperty("redPacket")) {
                var error = $root.pro.RedPacket.verify(message.redPacket);
                if (error)
                    return "redPacket." + error;
            }
            if (message.bets != null && message.hasOwnProperty("bets")) {
                if (!Array.isArray(message.bets))
                    return "bets: array expected";
                for (var i = 0; i < message.bets.length; ++i) {
                    var error = $root.pro.BetRecord.verify(message.bets[i]);
                    if (error)
                        return "bets." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.Player)
                return object;
            var message = new $root.pro.Player();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.name != null)
                message.name = String(object.name);
            if (object.gender != null)
                message.gender = object.gender | 0;
            if (object.balance != null)
                message.balance = Number(object.balance);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.redPacket != null) {
                if (typeof object.redPacket !== "object")
                    throw TypeError(".pro.Player.redPacket: object expected");
                message.redPacket = $root.pro.RedPacket.fromObject(object.redPacket);
            }
            if (object.bets) {
                if (!Array.isArray(object.bets))
                    throw TypeError(".pro.Player.bets: array expected");
                message.bets = [];
                for (var i = 0; i < object.bets.length; ++i) {
                    if (typeof object.bets[i] !== "object")
                        throw TypeError(".pro.Player.bets: object expected");
                    message.bets[i] = $root.pro.BetRecord.fromObject(object.bets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.Player
         * @static
         * @param {pro.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.bets = [];
            if (options.defaults) {
                object.accountName = "";
                object.name = "";
                object.gender = 0;
                object.balance = 0;
                object.avatar = "";
                object.redPacket = null;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                object.redPacket = $root.pro.RedPacket.toObject(message.redPacket, options);
            if (message.bets && message.bets.length) {
                object.bets = [];
                for (var j = 0; j < message.bets.length; ++j)
                    object.bets[j] = $root.pro.BetRecord.toObject(message.bets[j], options);
            }
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof pro.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    pro.GameConfig = (function() {

        /**
         * Properties of a GameConfig.
         * @memberof pro
         * @interface IGameConfig
         * @property {number|null} [preservedBalance] GameConfig preservedBalance
         * @property {pro.IGameLimitsConfig|null} [betLimits] GameConfig betLimits
         * @property {Array.<pro.IBeneficialBankerConfig>|null} [beneficialBankerConfigs] GameConfig beneficialBankerConfigs
         * @property {Array.<pro.IStraightAwardConfig>|null} [straightAwardConfigs] GameConfig straightAwardConfigs
         * @property {Array.<pro.ISpecialHandsAwardConfig>|null} [specialHandsAwardConfigs] GameConfig specialHandsAwardConfigs
         */

        /**
         * Constructs a new GameConfig.
         * @memberof pro
         * @classdesc Represents a GameConfig.
         * @implements IGameConfig
         * @constructor
         * @param {pro.IGameConfig=} [properties] Properties to set
         */
        function GameConfig(properties) {
            this.beneficialBankerConfigs = [];
            this.straightAwardConfigs = [];
            this.specialHandsAwardConfigs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameConfig preservedBalance.
         * @member {number} preservedBalance
         * @memberof pro.GameConfig
         * @instance
         */
        GameConfig.prototype.preservedBalance = 0;

        /**
         * GameConfig betLimits.
         * @member {pro.IGameLimitsConfig|null|undefined} betLimits
         * @memberof pro.GameConfig
         * @instance
         */
        GameConfig.prototype.betLimits = null;

        /**
         * GameConfig beneficialBankerConfigs.
         * @member {Array.<pro.IBeneficialBankerConfig>} beneficialBankerConfigs
         * @memberof pro.GameConfig
         * @instance
         */
        GameConfig.prototype.beneficialBankerConfigs = $util.emptyArray;

        /**
         * GameConfig straightAwardConfigs.
         * @member {Array.<pro.IStraightAwardConfig>} straightAwardConfigs
         * @memberof pro.GameConfig
         * @instance
         */
        GameConfig.prototype.straightAwardConfigs = $util.emptyArray;

        /**
         * GameConfig specialHandsAwardConfigs.
         * @member {Array.<pro.ISpecialHandsAwardConfig>} specialHandsAwardConfigs
         * @memberof pro.GameConfig
         * @instance
         */
        GameConfig.prototype.specialHandsAwardConfigs = $util.emptyArray;

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @function create
         * @memberof pro.GameConfig
         * @static
         * @param {pro.IGameConfig=} [properties] Properties to set
         * @returns {pro.GameConfig} GameConfig instance
         */
        GameConfig.create = function create(properties) {
            return new GameConfig(properties);
        };

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link pro.GameConfig.verify|verify} messages.
         * @function encode
         * @memberof pro.GameConfig
         * @static
         * @param {pro.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preservedBalance != null && message.hasOwnProperty("preservedBalance"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.preservedBalance);
            if (message.betLimits != null && message.hasOwnProperty("betLimits"))
                $root.pro.GameLimitsConfig.encode(message.betLimits, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.beneficialBankerConfigs != null && message.beneficialBankerConfigs.length)
                for (var i = 0; i < message.beneficialBankerConfigs.length; ++i)
                    $root.pro.BeneficialBankerConfig.encode(message.beneficialBankerConfigs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.straightAwardConfigs != null && message.straightAwardConfigs.length)
                for (var i = 0; i < message.straightAwardConfigs.length; ++i)
                    $root.pro.StraightAwardConfig.encode(message.straightAwardConfigs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.specialHandsAwardConfigs != null && message.specialHandsAwardConfigs.length)
                for (var i = 0; i < message.specialHandsAwardConfigs.length; ++i)
                    $root.pro.SpecialHandsAwardConfig.encode(message.specialHandsAwardConfigs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link pro.GameConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GameConfig
         * @static
         * @param {pro.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GameConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.preservedBalance = reader.double();
                    break;
                case 2:
                    message.betLimits = $root.pro.GameLimitsConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.beneficialBankerConfigs && message.beneficialBankerConfigs.length))
                        message.beneficialBankerConfigs = [];
                    message.beneficialBankerConfigs.push($root.pro.BeneficialBankerConfig.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.straightAwardConfigs && message.straightAwardConfigs.length))
                        message.straightAwardConfigs = [];
                    message.straightAwardConfigs.push($root.pro.StraightAwardConfig.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.specialHandsAwardConfigs && message.specialHandsAwardConfigs.length))
                        message.specialHandsAwardConfigs = [];
                    message.specialHandsAwardConfigs.push($root.pro.SpecialHandsAwardConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameConfig message.
         * @function verify
         * @memberof pro.GameConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preservedBalance != null && message.hasOwnProperty("preservedBalance"))
                if (typeof message.preservedBalance !== "number")
                    return "preservedBalance: number expected";
            if (message.betLimits != null && message.hasOwnProperty("betLimits")) {
                var error = $root.pro.GameLimitsConfig.verify(message.betLimits);
                if (error)
                    return "betLimits." + error;
            }
            if (message.beneficialBankerConfigs != null && message.hasOwnProperty("beneficialBankerConfigs")) {
                if (!Array.isArray(message.beneficialBankerConfigs))
                    return "beneficialBankerConfigs: array expected";
                for (var i = 0; i < message.beneficialBankerConfigs.length; ++i) {
                    var error = $root.pro.BeneficialBankerConfig.verify(message.beneficialBankerConfigs[i]);
                    if (error)
                        return "beneficialBankerConfigs." + error;
                }
            }
            if (message.straightAwardConfigs != null && message.hasOwnProperty("straightAwardConfigs")) {
                if (!Array.isArray(message.straightAwardConfigs))
                    return "straightAwardConfigs: array expected";
                for (var i = 0; i < message.straightAwardConfigs.length; ++i) {
                    var error = $root.pro.StraightAwardConfig.verify(message.straightAwardConfigs[i]);
                    if (error)
                        return "straightAwardConfigs." + error;
                }
            }
            if (message.specialHandsAwardConfigs != null && message.hasOwnProperty("specialHandsAwardConfigs")) {
                if (!Array.isArray(message.specialHandsAwardConfigs))
                    return "specialHandsAwardConfigs: array expected";
                for (var i = 0; i < message.specialHandsAwardConfigs.length; ++i) {
                    var error = $root.pro.SpecialHandsAwardConfig.verify(message.specialHandsAwardConfigs[i]);
                    if (error)
                        return "specialHandsAwardConfigs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GameConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GameConfig} GameConfig
         */
        GameConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GameConfig)
                return object;
            var message = new $root.pro.GameConfig();
            if (object.preservedBalance != null)
                message.preservedBalance = Number(object.preservedBalance);
            if (object.betLimits != null) {
                if (typeof object.betLimits !== "object")
                    throw TypeError(".pro.GameConfig.betLimits: object expected");
                message.betLimits = $root.pro.GameLimitsConfig.fromObject(object.betLimits);
            }
            if (object.beneficialBankerConfigs) {
                if (!Array.isArray(object.beneficialBankerConfigs))
                    throw TypeError(".pro.GameConfig.beneficialBankerConfigs: array expected");
                message.beneficialBankerConfigs = [];
                for (var i = 0; i < object.beneficialBankerConfigs.length; ++i) {
                    if (typeof object.beneficialBankerConfigs[i] !== "object")
                        throw TypeError(".pro.GameConfig.beneficialBankerConfigs: object expected");
                    message.beneficialBankerConfigs[i] = $root.pro.BeneficialBankerConfig.fromObject(object.beneficialBankerConfigs[i]);
                }
            }
            if (object.straightAwardConfigs) {
                if (!Array.isArray(object.straightAwardConfigs))
                    throw TypeError(".pro.GameConfig.straightAwardConfigs: array expected");
                message.straightAwardConfigs = [];
                for (var i = 0; i < object.straightAwardConfigs.length; ++i) {
                    if (typeof object.straightAwardConfigs[i] !== "object")
                        throw TypeError(".pro.GameConfig.straightAwardConfigs: object expected");
                    message.straightAwardConfigs[i] = $root.pro.StraightAwardConfig.fromObject(object.straightAwardConfigs[i]);
                }
            }
            if (object.specialHandsAwardConfigs) {
                if (!Array.isArray(object.specialHandsAwardConfigs))
                    throw TypeError(".pro.GameConfig.specialHandsAwardConfigs: array expected");
                message.specialHandsAwardConfigs = [];
                for (var i = 0; i < object.specialHandsAwardConfigs.length; ++i) {
                    if (typeof object.specialHandsAwardConfigs[i] !== "object")
                        throw TypeError(".pro.GameConfig.specialHandsAwardConfigs: object expected");
                    message.specialHandsAwardConfigs[i] = $root.pro.SpecialHandsAwardConfig.fromObject(object.specialHandsAwardConfigs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GameConfig
         * @static
         * @param {pro.GameConfig} message GameConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.beneficialBankerConfigs = [];
                object.straightAwardConfigs = [];
                object.specialHandsAwardConfigs = [];
            }
            if (options.defaults) {
                object.preservedBalance = 0;
                object.betLimits = null;
            }
            if (message.preservedBalance != null && message.hasOwnProperty("preservedBalance"))
                object.preservedBalance = options.json && !isFinite(message.preservedBalance) ? String(message.preservedBalance) : message.preservedBalance;
            if (message.betLimits != null && message.hasOwnProperty("betLimits"))
                object.betLimits = $root.pro.GameLimitsConfig.toObject(message.betLimits, options);
            if (message.beneficialBankerConfigs && message.beneficialBankerConfigs.length) {
                object.beneficialBankerConfigs = [];
                for (var j = 0; j < message.beneficialBankerConfigs.length; ++j)
                    object.beneficialBankerConfigs[j] = $root.pro.BeneficialBankerConfig.toObject(message.beneficialBankerConfigs[j], options);
            }
            if (message.straightAwardConfigs && message.straightAwardConfigs.length) {
                object.straightAwardConfigs = [];
                for (var j = 0; j < message.straightAwardConfigs.length; ++j)
                    object.straightAwardConfigs[j] = $root.pro.StraightAwardConfig.toObject(message.straightAwardConfigs[j], options);
            }
            if (message.specialHandsAwardConfigs && message.specialHandsAwardConfigs.length) {
                object.specialHandsAwardConfigs = [];
                for (var j = 0; j < message.specialHandsAwardConfigs.length; ++j)
                    object.specialHandsAwardConfigs[j] = $root.pro.SpecialHandsAwardConfig.toObject(message.specialHandsAwardConfigs[j], options);
            }
            return object;
        };

        /**
         * Converts this GameConfig to JSON.
         * @function toJSON
         * @memberof pro.GameConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameConfig;
    })();

    pro.BeneficialBankerConfig = (function() {

        /**
         * Properties of a BeneficialBankerConfig.
         * @memberof pro
         * @interface IBeneficialBankerConfig
         * @property {number|Long|null} [startTime] BeneficialBankerConfig startTime
         * @property {number|null} [innings] BeneficialBankerConfig innings
         * @property {number|null} [bankerAmount] BeneficialBankerConfig bankerAmount
         */

        /**
         * Constructs a new BeneficialBankerConfig.
         * @memberof pro
         * @classdesc Represents a BeneficialBankerConfig.
         * @implements IBeneficialBankerConfig
         * @constructor
         * @param {pro.IBeneficialBankerConfig=} [properties] Properties to set
         */
        function BeneficialBankerConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeneficialBankerConfig startTime.
         * @member {number|Long} startTime
         * @memberof pro.BeneficialBankerConfig
         * @instance
         */
        BeneficialBankerConfig.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BeneficialBankerConfig innings.
         * @member {number} innings
         * @memberof pro.BeneficialBankerConfig
         * @instance
         */
        BeneficialBankerConfig.prototype.innings = 0;

        /**
         * BeneficialBankerConfig bankerAmount.
         * @member {number} bankerAmount
         * @memberof pro.BeneficialBankerConfig
         * @instance
         */
        BeneficialBankerConfig.prototype.bankerAmount = 0;

        /**
         * Creates a new BeneficialBankerConfig instance using the specified properties.
         * @function create
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {pro.IBeneficialBankerConfig=} [properties] Properties to set
         * @returns {pro.BeneficialBankerConfig} BeneficialBankerConfig instance
         */
        BeneficialBankerConfig.create = function create(properties) {
            return new BeneficialBankerConfig(properties);
        };

        /**
         * Encodes the specified BeneficialBankerConfig message. Does not implicitly {@link pro.BeneficialBankerConfig.verify|verify} messages.
         * @function encode
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {pro.IBeneficialBankerConfig} message BeneficialBankerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeneficialBankerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTime);
            if (message.innings != null && message.hasOwnProperty("innings"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.innings);
            if (message.bankerAmount != null && message.hasOwnProperty("bankerAmount"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.bankerAmount);
            return writer;
        };

        /**
         * Encodes the specified BeneficialBankerConfig message, length delimited. Does not implicitly {@link pro.BeneficialBankerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {pro.IBeneficialBankerConfig} message BeneficialBankerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeneficialBankerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeneficialBankerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BeneficialBankerConfig} BeneficialBankerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeneficialBankerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BeneficialBankerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.startTime = reader.int64();
                    break;
                case 2:
                    message.innings = reader.int32();
                    break;
                case 3:
                    message.bankerAmount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BeneficialBankerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BeneficialBankerConfig} BeneficialBankerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeneficialBankerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeneficialBankerConfig message.
         * @function verify
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeneficialBankerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            if (message.innings != null && message.hasOwnProperty("innings"))
                if (!$util.isInteger(message.innings))
                    return "innings: integer expected";
            if (message.bankerAmount != null && message.hasOwnProperty("bankerAmount"))
                if (typeof message.bankerAmount !== "number")
                    return "bankerAmount: number expected";
            return null;
        };

        /**
         * Creates a BeneficialBankerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BeneficialBankerConfig} BeneficialBankerConfig
         */
        BeneficialBankerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BeneficialBankerConfig)
                return object;
            var message = new $root.pro.BeneficialBankerConfig();
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
            if (object.innings != null)
                message.innings = object.innings | 0;
            if (object.bankerAmount != null)
                message.bankerAmount = Number(object.bankerAmount);
            return message;
        };

        /**
         * Creates a plain object from a BeneficialBankerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BeneficialBankerConfig
         * @static
         * @param {pro.BeneficialBankerConfig} message BeneficialBankerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeneficialBankerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                object.innings = 0;
                object.bankerAmount = 0;
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
            if (message.innings != null && message.hasOwnProperty("innings"))
                object.innings = message.innings;
            if (message.bankerAmount != null && message.hasOwnProperty("bankerAmount"))
                object.bankerAmount = options.json && !isFinite(message.bankerAmount) ? String(message.bankerAmount) : message.bankerAmount;
            return object;
        };

        /**
         * Converts this BeneficialBankerConfig to JSON.
         * @function toJSON
         * @memberof pro.BeneficialBankerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeneficialBankerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeneficialBankerConfig;
    })();

    pro.GameLimitsConfig = (function() {

        /**
         * Properties of a GameLimitsConfig.
         * @memberof pro
         * @interface IGameLimitsConfig
         * @property {number|null} [playerMinBet] GameLimitsConfig playerMinBet
         * @property {number|null} [bankerMinBet] GameLimitsConfig bankerMinBet
         * @property {number|null} [bankerMaxBet] GameLimitsConfig bankerMaxBet
         * @property {number|null} [maxBets] GameLimitsConfig maxBets
         * @property {number|null} [maxBetRatio] GameLimitsConfig maxBetRatio
         */

        /**
         * Constructs a new GameLimitsConfig.
         * @memberof pro
         * @classdesc Represents a GameLimitsConfig.
         * @implements IGameLimitsConfig
         * @constructor
         * @param {pro.IGameLimitsConfig=} [properties] Properties to set
         */
        function GameLimitsConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLimitsConfig playerMinBet.
         * @member {number} playerMinBet
         * @memberof pro.GameLimitsConfig
         * @instance
         */
        GameLimitsConfig.prototype.playerMinBet = 0;

        /**
         * GameLimitsConfig bankerMinBet.
         * @member {number} bankerMinBet
         * @memberof pro.GameLimitsConfig
         * @instance
         */
        GameLimitsConfig.prototype.bankerMinBet = 0;

        /**
         * GameLimitsConfig bankerMaxBet.
         * @member {number} bankerMaxBet
         * @memberof pro.GameLimitsConfig
         * @instance
         */
        GameLimitsConfig.prototype.bankerMaxBet = 0;

        /**
         * GameLimitsConfig maxBets.
         * @member {number} maxBets
         * @memberof pro.GameLimitsConfig
         * @instance
         */
        GameLimitsConfig.prototype.maxBets = 0;

        /**
         * GameLimitsConfig maxBetRatio.
         * @member {number} maxBetRatio
         * @memberof pro.GameLimitsConfig
         * @instance
         */
        GameLimitsConfig.prototype.maxBetRatio = 0;

        /**
         * Creates a new GameLimitsConfig instance using the specified properties.
         * @function create
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {pro.IGameLimitsConfig=} [properties] Properties to set
         * @returns {pro.GameLimitsConfig} GameLimitsConfig instance
         */
        GameLimitsConfig.create = function create(properties) {
            return new GameLimitsConfig(properties);
        };

        /**
         * Encodes the specified GameLimitsConfig message. Does not implicitly {@link pro.GameLimitsConfig.verify|verify} messages.
         * @function encode
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {pro.IGameLimitsConfig} message GameLimitsConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLimitsConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerMinBet != null && message.hasOwnProperty("playerMinBet"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerMinBet);
            if (message.bankerMinBet != null && message.hasOwnProperty("bankerMinBet"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.bankerMinBet);
            if (message.bankerMaxBet != null && message.hasOwnProperty("bankerMaxBet"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.bankerMaxBet);
            if (message.maxBets != null && message.hasOwnProperty("maxBets"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxBets);
            if (message.maxBetRatio != null && message.hasOwnProperty("maxBetRatio"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.maxBetRatio);
            return writer;
        };

        /**
         * Encodes the specified GameLimitsConfig message, length delimited. Does not implicitly {@link pro.GameLimitsConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {pro.IGameLimitsConfig} message GameLimitsConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLimitsConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLimitsConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GameLimitsConfig} GameLimitsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLimitsConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GameLimitsConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerMinBet = reader.double();
                    break;
                case 2:
                    message.bankerMinBet = reader.double();
                    break;
                case 3:
                    message.bankerMaxBet = reader.double();
                    break;
                case 4:
                    message.maxBets = reader.int32();
                    break;
                case 5:
                    message.maxBetRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameLimitsConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GameLimitsConfig} GameLimitsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLimitsConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLimitsConfig message.
         * @function verify
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLimitsConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerMinBet != null && message.hasOwnProperty("playerMinBet"))
                if (typeof message.playerMinBet !== "number")
                    return "playerMinBet: number expected";
            if (message.bankerMinBet != null && message.hasOwnProperty("bankerMinBet"))
                if (typeof message.bankerMinBet !== "number")
                    return "bankerMinBet: number expected";
            if (message.bankerMaxBet != null && message.hasOwnProperty("bankerMaxBet"))
                if (typeof message.bankerMaxBet !== "number")
                    return "bankerMaxBet: number expected";
            if (message.maxBets != null && message.hasOwnProperty("maxBets"))
                if (!$util.isInteger(message.maxBets))
                    return "maxBets: integer expected";
            if (message.maxBetRatio != null && message.hasOwnProperty("maxBetRatio"))
                if (typeof message.maxBetRatio !== "number")
                    return "maxBetRatio: number expected";
            return null;
        };

        /**
         * Creates a GameLimitsConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GameLimitsConfig} GameLimitsConfig
         */
        GameLimitsConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GameLimitsConfig)
                return object;
            var message = new $root.pro.GameLimitsConfig();
            if (object.playerMinBet != null)
                message.playerMinBet = Number(object.playerMinBet);
            if (object.bankerMinBet != null)
                message.bankerMinBet = Number(object.bankerMinBet);
            if (object.bankerMaxBet != null)
                message.bankerMaxBet = Number(object.bankerMaxBet);
            if (object.maxBets != null)
                message.maxBets = object.maxBets | 0;
            if (object.maxBetRatio != null)
                message.maxBetRatio = Number(object.maxBetRatio);
            return message;
        };

        /**
         * Creates a plain object from a GameLimitsConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GameLimitsConfig
         * @static
         * @param {pro.GameLimitsConfig} message GameLimitsConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLimitsConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerMinBet = 0;
                object.bankerMinBet = 0;
                object.bankerMaxBet = 0;
                object.maxBets = 0;
                object.maxBetRatio = 0;
            }
            if (message.playerMinBet != null && message.hasOwnProperty("playerMinBet"))
                object.playerMinBet = options.json && !isFinite(message.playerMinBet) ? String(message.playerMinBet) : message.playerMinBet;
            if (message.bankerMinBet != null && message.hasOwnProperty("bankerMinBet"))
                object.bankerMinBet = options.json && !isFinite(message.bankerMinBet) ? String(message.bankerMinBet) : message.bankerMinBet;
            if (message.bankerMaxBet != null && message.hasOwnProperty("bankerMaxBet"))
                object.bankerMaxBet = options.json && !isFinite(message.bankerMaxBet) ? String(message.bankerMaxBet) : message.bankerMaxBet;
            if (message.maxBets != null && message.hasOwnProperty("maxBets"))
                object.maxBets = message.maxBets;
            if (message.maxBetRatio != null && message.hasOwnProperty("maxBetRatio"))
                object.maxBetRatio = options.json && !isFinite(message.maxBetRatio) ? String(message.maxBetRatio) : message.maxBetRatio;
            return object;
        };

        /**
         * Converts this GameLimitsConfig to JSON.
         * @function toJSON
         * @memberof pro.GameLimitsConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLimitsConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLimitsConfig;
    })();

    pro.StraightAwardConfig = (function() {

        /**
         * Properties of a StraightAwardConfig.
         * @memberof pro
         * @interface IStraightAwardConfig
         * @property {number|null} [numOfInning] StraightAwardConfig numOfInning
         * @property {number|null} [minBet] StraightAwardConfig minBet
         * @property {number|null} [amount] StraightAwardConfig amount
         */

        /**
         * Constructs a new StraightAwardConfig.
         * @memberof pro
         * @classdesc Represents a StraightAwardConfig.
         * @implements IStraightAwardConfig
         * @constructor
         * @param {pro.IStraightAwardConfig=} [properties] Properties to set
         */
        function StraightAwardConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StraightAwardConfig numOfInning.
         * @member {number} numOfInning
         * @memberof pro.StraightAwardConfig
         * @instance
         */
        StraightAwardConfig.prototype.numOfInning = 0;

        /**
         * StraightAwardConfig minBet.
         * @member {number} minBet
         * @memberof pro.StraightAwardConfig
         * @instance
         */
        StraightAwardConfig.prototype.minBet = 0;

        /**
         * StraightAwardConfig amount.
         * @member {number} amount
         * @memberof pro.StraightAwardConfig
         * @instance
         */
        StraightAwardConfig.prototype.amount = 0;

        /**
         * Creates a new StraightAwardConfig instance using the specified properties.
         * @function create
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {pro.IStraightAwardConfig=} [properties] Properties to set
         * @returns {pro.StraightAwardConfig} StraightAwardConfig instance
         */
        StraightAwardConfig.create = function create(properties) {
            return new StraightAwardConfig(properties);
        };

        /**
         * Encodes the specified StraightAwardConfig message. Does not implicitly {@link pro.StraightAwardConfig.verify|verify} messages.
         * @function encode
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {pro.IStraightAwardConfig} message StraightAwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StraightAwardConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.numOfInning != null && message.hasOwnProperty("numOfInning"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.numOfInning);
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.minBet);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified StraightAwardConfig message, length delimited. Does not implicitly {@link pro.StraightAwardConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {pro.IStraightAwardConfig} message StraightAwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StraightAwardConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StraightAwardConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.StraightAwardConfig} StraightAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StraightAwardConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.StraightAwardConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.numOfInning = reader.int32();
                    break;
                case 2:
                    message.minBet = reader.double();
                    break;
                case 3:
                    message.amount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StraightAwardConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.StraightAwardConfig} StraightAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StraightAwardConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StraightAwardConfig message.
         * @function verify
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StraightAwardConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.numOfInning != null && message.hasOwnProperty("numOfInning"))
                if (!$util.isInteger(message.numOfInning))
                    return "numOfInning: integer expected";
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (typeof message.minBet !== "number")
                    return "minBet: number expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a StraightAwardConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.StraightAwardConfig} StraightAwardConfig
         */
        StraightAwardConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.StraightAwardConfig)
                return object;
            var message = new $root.pro.StraightAwardConfig();
            if (object.numOfInning != null)
                message.numOfInning = object.numOfInning | 0;
            if (object.minBet != null)
                message.minBet = Number(object.minBet);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a StraightAwardConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.StraightAwardConfig
         * @static
         * @param {pro.StraightAwardConfig} message StraightAwardConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StraightAwardConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.numOfInning = 0;
                object.minBet = 0;
                object.amount = 0;
            }
            if (message.numOfInning != null && message.hasOwnProperty("numOfInning"))
                object.numOfInning = message.numOfInning;
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                object.minBet = options.json && !isFinite(message.minBet) ? String(message.minBet) : message.minBet;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this StraightAwardConfig to JSON.
         * @function toJSON
         * @memberof pro.StraightAwardConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StraightAwardConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StraightAwardConfig;
    })();

    pro.SpecialHandsAwardConfig = (function() {

        /**
         * Properties of a SpecialHandsAwardConfig.
         * @memberof pro
         * @interface ISpecialHandsAwardConfig
         * @property {number|null} [minBet] SpecialHandsAwardConfig minBet
         * @property {number|null} [amount] SpecialHandsAwardConfig amount
         * @property {string|null} [settings] SpecialHandsAwardConfig settings
         */

        /**
         * Constructs a new SpecialHandsAwardConfig.
         * @memberof pro
         * @classdesc Represents a SpecialHandsAwardConfig.
         * @implements ISpecialHandsAwardConfig
         * @constructor
         * @param {pro.ISpecialHandsAwardConfig=} [properties] Properties to set
         */
        function SpecialHandsAwardConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialHandsAwardConfig minBet.
         * @member {number} minBet
         * @memberof pro.SpecialHandsAwardConfig
         * @instance
         */
        SpecialHandsAwardConfig.prototype.minBet = 0;

        /**
         * SpecialHandsAwardConfig amount.
         * @member {number} amount
         * @memberof pro.SpecialHandsAwardConfig
         * @instance
         */
        SpecialHandsAwardConfig.prototype.amount = 0;

        /**
         * SpecialHandsAwardConfig settings.
         * @member {string} settings
         * @memberof pro.SpecialHandsAwardConfig
         * @instance
         */
        SpecialHandsAwardConfig.prototype.settings = "";

        /**
         * Creates a new SpecialHandsAwardConfig instance using the specified properties.
         * @function create
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {pro.ISpecialHandsAwardConfig=} [properties] Properties to set
         * @returns {pro.SpecialHandsAwardConfig} SpecialHandsAwardConfig instance
         */
        SpecialHandsAwardConfig.create = function create(properties) {
            return new SpecialHandsAwardConfig(properties);
        };

        /**
         * Encodes the specified SpecialHandsAwardConfig message. Does not implicitly {@link pro.SpecialHandsAwardConfig.verify|verify} messages.
         * @function encode
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {pro.ISpecialHandsAwardConfig} message SpecialHandsAwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecialHandsAwardConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.minBet);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.amount);
            if (message.settings != null && message.hasOwnProperty("settings"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.settings);
            return writer;
        };

        /**
         * Encodes the specified SpecialHandsAwardConfig message, length delimited. Does not implicitly {@link pro.SpecialHandsAwardConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {pro.ISpecialHandsAwardConfig} message SpecialHandsAwardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecialHandsAwardConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpecialHandsAwardConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.SpecialHandsAwardConfig} SpecialHandsAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecialHandsAwardConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.SpecialHandsAwardConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.minBet = reader.double();
                    break;
                case 2:
                    message.amount = reader.double();
                    break;
                case 3:
                    message.settings = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpecialHandsAwardConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.SpecialHandsAwardConfig} SpecialHandsAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecialHandsAwardConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpecialHandsAwardConfig message.
         * @function verify
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpecialHandsAwardConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (typeof message.minBet !== "number")
                    return "minBet: number expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            if (message.settings != null && message.hasOwnProperty("settings"))
                if (!$util.isString(message.settings))
                    return "settings: string expected";
            return null;
        };

        /**
         * Creates a SpecialHandsAwardConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.SpecialHandsAwardConfig} SpecialHandsAwardConfig
         */
        SpecialHandsAwardConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.SpecialHandsAwardConfig)
                return object;
            var message = new $root.pro.SpecialHandsAwardConfig();
            if (object.minBet != null)
                message.minBet = Number(object.minBet);
            if (object.amount != null)
                message.amount = Number(object.amount);
            if (object.settings != null)
                message.settings = String(object.settings);
            return message;
        };

        /**
         * Creates a plain object from a SpecialHandsAwardConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.SpecialHandsAwardConfig
         * @static
         * @param {pro.SpecialHandsAwardConfig} message SpecialHandsAwardConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialHandsAwardConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.minBet = 0;
                object.amount = 0;
                object.settings = "";
            }
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                object.minBet = options.json && !isFinite(message.minBet) ? String(message.minBet) : message.minBet;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = message.settings;
            return object;
        };

        /**
         * Converts this SpecialHandsAwardConfig to JSON.
         * @function toJSON
         * @memberof pro.SpecialHandsAwardConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialHandsAwardConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialHandsAwardConfig;
    })();

    pro.RedPacket = (function() {

        /**
         * Properties of a RedPacket.
         * @memberof pro
         * @interface IRedPacket
         * @property {number|null} [amount] RedPacket amount
         * @property {boolean|null} [checked] RedPacket checked
         */

        /**
         * Constructs a new RedPacket.
         * @memberof pro
         * @classdesc Represents a RedPacket.
         * @implements IRedPacket
         * @constructor
         * @param {pro.IRedPacket=} [properties] Properties to set
         */
        function RedPacket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedPacket amount.
         * @member {number} amount
         * @memberof pro.RedPacket
         * @instance
         */
        RedPacket.prototype.amount = 0;

        /**
         * RedPacket checked.
         * @member {boolean} checked
         * @memberof pro.RedPacket
         * @instance
         */
        RedPacket.prototype.checked = false;

        /**
         * Creates a new RedPacket instance using the specified properties.
         * @function create
         * @memberof pro.RedPacket
         * @static
         * @param {pro.IRedPacket=} [properties] Properties to set
         * @returns {pro.RedPacket} RedPacket instance
         */
        RedPacket.create = function create(properties) {
            return new RedPacket(properties);
        };

        /**
         * Encodes the specified RedPacket message. Does not implicitly {@link pro.RedPacket.verify|verify} messages.
         * @function encode
         * @memberof pro.RedPacket
         * @static
         * @param {pro.IRedPacket} message RedPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.amount);
            if (message.checked != null && message.hasOwnProperty("checked"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.checked);
            return writer;
        };

        /**
         * Encodes the specified RedPacket message, length delimited. Does not implicitly {@link pro.RedPacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.RedPacket
         * @static
         * @param {pro.IRedPacket} message RedPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedPacket message from the specified reader or buffer.
         * @function decode
         * @memberof pro.RedPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.RedPacket} RedPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPacket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.RedPacket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.amount = reader.int32();
                    break;
                case 2:
                    message.checked = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RedPacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.RedPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.RedPacket} RedPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RedPacket message.
         * @function verify
         * @memberof pro.RedPacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RedPacket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            if (message.checked != null && message.hasOwnProperty("checked"))
                if (typeof message.checked !== "boolean")
                    return "checked: boolean expected";
            return null;
        };

        /**
         * Creates a RedPacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.RedPacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.RedPacket} RedPacket
         */
        RedPacket.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.RedPacket)
                return object;
            var message = new $root.pro.RedPacket();
            if (object.amount != null)
                message.amount = object.amount | 0;
            if (object.checked != null)
                message.checked = Boolean(object.checked);
            return message;
        };

        /**
         * Creates a plain object from a RedPacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.RedPacket
         * @static
         * @param {pro.RedPacket} message RedPacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedPacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.amount = 0;
                object.checked = false;
            }
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.checked != null && message.hasOwnProperty("checked"))
                object.checked = message.checked;
            return object;
        };

        /**
         * Converts this RedPacket to JSON.
         * @function toJSON
         * @memberof pro.RedPacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedPacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RedPacket;
    })();

    pro.BetRecord = (function() {

        /**
         * Properties of a BetRecord.
         * @memberof pro
         * @interface IBetRecord
         * @property {number|null} [type] BetRecord type
         * @property {number|null} [amount] BetRecord amount
         * @property {number|Long|null} [time] BetRecord time
         */

        /**
         * Constructs a new BetRecord.
         * @memberof pro
         * @classdesc Represents a BetRecord.
         * @implements IBetRecord
         * @constructor
         * @param {pro.IBetRecord=} [properties] Properties to set
         */
        function BetRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRecord type.
         * @member {number} type
         * @memberof pro.BetRecord
         * @instance
         */
        BetRecord.prototype.type = 0;

        /**
         * BetRecord amount.
         * @member {number} amount
         * @memberof pro.BetRecord
         * @instance
         */
        BetRecord.prototype.amount = 0;

        /**
         * BetRecord time.
         * @member {number|Long} time
         * @memberof pro.BetRecord
         * @instance
         */
        BetRecord.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BetRecord instance using the specified properties.
         * @function create
         * @memberof pro.BetRecord
         * @static
         * @param {pro.IBetRecord=} [properties] Properties to set
         * @returns {pro.BetRecord} BetRecord instance
         */
        BetRecord.create = function create(properties) {
            return new BetRecord(properties);
        };

        /**
         * Encodes the specified BetRecord message. Does not implicitly {@link pro.BetRecord.verify|verify} messages.
         * @function encode
         * @memberof pro.BetRecord
         * @static
         * @param {pro.IBetRecord} message BetRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.amount);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified BetRecord message, length delimited. Does not implicitly {@link pro.BetRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.BetRecord
         * @static
         * @param {pro.IBetRecord} message BetRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRecord message from the specified reader or buffer.
         * @function decode
         * @memberof pro.BetRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.BetRecord} BetRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.BetRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.amount = reader.double();
                    break;
                case 3:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.BetRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.BetRecord} BetRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRecord message.
         * @function verify
         * @memberof pro.BetRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a BetRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.BetRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.BetRecord} BetRecord
         */
        BetRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.BetRecord)
                return object;
            var message = new $root.pro.BetRecord();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.amount != null)
                message.amount = Number(object.amount);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BetRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.BetRecord
         * @static
         * @param {pro.BetRecord} message BetRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.amount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this BetRecord to JSON.
         * @function toJSON
         * @memberof pro.BetRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRecord;
    })();

    pro.GameRecord = (function() {

        /**
         * Properties of a GameRecord.
         * @memberof pro
         * @interface IGameRecord
         * @property {string|null} [inning] GameRecord inning
         * @property {number|null} [playerBet] GameRecord playerBet
         * @property {number|null} [bankerBet] GameRecord bankerBet
         * @property {boolean|null} [isBanker] GameRecord isBanker
         * @property {number|Long|null} [betTime] GameRecord betTime
         * @property {number|null} [redPacket] GameRecord redPacket
         * @property {number|null} [winAmount] GameRecord winAmount
         * @property {pro.IGameResult|null} [gameResult] GameRecord gameResult
         */

        /**
         * Constructs a new GameRecord.
         * @memberof pro
         * @classdesc Represents a GameRecord.
         * @implements IGameRecord
         * @constructor
         * @param {pro.IGameRecord=} [properties] Properties to set
         */
        function GameRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecord inning.
         * @member {string} inning
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.inning = "";

        /**
         * GameRecord playerBet.
         * @member {number} playerBet
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.playerBet = 0;

        /**
         * GameRecord bankerBet.
         * @member {number} bankerBet
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.bankerBet = 0;

        /**
         * GameRecord isBanker.
         * @member {boolean} isBanker
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.isBanker = false;

        /**
         * GameRecord betTime.
         * @member {number|Long} betTime
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.betTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRecord redPacket.
         * @member {number} redPacket
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.redPacket = 0;

        /**
         * GameRecord winAmount.
         * @member {number} winAmount
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.winAmount = 0;

        /**
         * GameRecord gameResult.
         * @member {pro.IGameResult|null|undefined} gameResult
         * @memberof pro.GameRecord
         * @instance
         */
        GameRecord.prototype.gameResult = null;

        /**
         * Creates a new GameRecord instance using the specified properties.
         * @function create
         * @memberof pro.GameRecord
         * @static
         * @param {pro.IGameRecord=} [properties] Properties to set
         * @returns {pro.GameRecord} GameRecord instance
         */
        GameRecord.create = function create(properties) {
            return new GameRecord(properties);
        };

        /**
         * Encodes the specified GameRecord message. Does not implicitly {@link pro.GameRecord.verify|verify} messages.
         * @function encode
         * @memberof pro.GameRecord
         * @static
         * @param {pro.IGameRecord} message GameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inning != null && message.hasOwnProperty("inning"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inning);
            if (message.playerBet != null && message.hasOwnProperty("playerBet"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.playerBet);
            if (message.bankerBet != null && message.hasOwnProperty("bankerBet"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.bankerBet);
            if (message.isBanker != null && message.hasOwnProperty("isBanker"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isBanker);
            if (message.betTime != null && message.hasOwnProperty("betTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.betTime);
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.redPacket);
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.winAmount);
            if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                $root.pro.GameResult.encode(message.gameResult, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameRecord message, length delimited. Does not implicitly {@link pro.GameRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GameRecord
         * @static
         * @param {pro.IGameRecord} message GameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GameRecord} GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GameRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inning = reader.string();
                    break;
                case 2:
                    message.playerBet = reader.double();
                    break;
                case 3:
                    message.bankerBet = reader.double();
                    break;
                case 4:
                    message.isBanker = reader.bool();
                    break;
                case 5:
                    message.betTime = reader.int64();
                    break;
                case 6:
                    message.redPacket = reader.int32();
                    break;
                case 7:
                    message.winAmount = reader.double();
                    break;
                case 8:
                    message.gameResult = $root.pro.GameResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GameRecord} GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecord message.
         * @function verify
         * @memberof pro.GameRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inning != null && message.hasOwnProperty("inning"))
                if (!$util.isString(message.inning))
                    return "inning: string expected";
            if (message.playerBet != null && message.hasOwnProperty("playerBet"))
                if (typeof message.playerBet !== "number")
                    return "playerBet: number expected";
            if (message.bankerBet != null && message.hasOwnProperty("bankerBet"))
                if (typeof message.bankerBet !== "number")
                    return "bankerBet: number expected";
            if (message.isBanker != null && message.hasOwnProperty("isBanker"))
                if (typeof message.isBanker !== "boolean")
                    return "isBanker: boolean expected";
            if (message.betTime != null && message.hasOwnProperty("betTime"))
                if (!$util.isInteger(message.betTime) && !(message.betTime && $util.isInteger(message.betTime.low) && $util.isInteger(message.betTime.high)))
                    return "betTime: integer|Long expected";
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                if (!$util.isInteger(message.redPacket))
                    return "redPacket: integer expected";
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                if (typeof message.winAmount !== "number")
                    return "winAmount: number expected";
            if (message.gameResult != null && message.hasOwnProperty("gameResult")) {
                var error = $root.pro.GameResult.verify(message.gameResult);
                if (error)
                    return "gameResult." + error;
            }
            return null;
        };

        /**
         * Creates a GameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GameRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GameRecord} GameRecord
         */
        GameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GameRecord)
                return object;
            var message = new $root.pro.GameRecord();
            if (object.inning != null)
                message.inning = String(object.inning);
            if (object.playerBet != null)
                message.playerBet = Number(object.playerBet);
            if (object.bankerBet != null)
                message.bankerBet = Number(object.bankerBet);
            if (object.isBanker != null)
                message.isBanker = Boolean(object.isBanker);
            if (object.betTime != null)
                if ($util.Long)
                    (message.betTime = $util.Long.fromValue(object.betTime)).unsigned = false;
                else if (typeof object.betTime === "string")
                    message.betTime = parseInt(object.betTime, 10);
                else if (typeof object.betTime === "number")
                    message.betTime = object.betTime;
                else if (typeof object.betTime === "object")
                    message.betTime = new $util.LongBits(object.betTime.low >>> 0, object.betTime.high >>> 0).toNumber();
            if (object.redPacket != null)
                message.redPacket = object.redPacket | 0;
            if (object.winAmount != null)
                message.winAmount = Number(object.winAmount);
            if (object.gameResult != null) {
                if (typeof object.gameResult !== "object")
                    throw TypeError(".pro.GameRecord.gameResult: object expected");
                message.gameResult = $root.pro.GameResult.fromObject(object.gameResult);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GameRecord
         * @static
         * @param {pro.GameRecord} message GameRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.inning = "";
                object.playerBet = 0;
                object.bankerBet = 0;
                object.isBanker = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.betTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.betTime = options.longs === String ? "0" : 0;
                object.redPacket = 0;
                object.winAmount = 0;
                object.gameResult = null;
            }
            if (message.inning != null && message.hasOwnProperty("inning"))
                object.inning = message.inning;
            if (message.playerBet != null && message.hasOwnProperty("playerBet"))
                object.playerBet = options.json && !isFinite(message.playerBet) ? String(message.playerBet) : message.playerBet;
            if (message.bankerBet != null && message.hasOwnProperty("bankerBet"))
                object.bankerBet = options.json && !isFinite(message.bankerBet) ? String(message.bankerBet) : message.bankerBet;
            if (message.isBanker != null && message.hasOwnProperty("isBanker"))
                object.isBanker = message.isBanker;
            if (message.betTime != null && message.hasOwnProperty("betTime"))
                if (typeof message.betTime === "number")
                    object.betTime = options.longs === String ? String(message.betTime) : message.betTime;
                else
                    object.betTime = options.longs === String ? $util.Long.prototype.toString.call(message.betTime) : options.longs === Number ? new $util.LongBits(message.betTime.low >>> 0, message.betTime.high >>> 0).toNumber() : message.betTime;
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                object.redPacket = message.redPacket;
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                object.winAmount = options.json && !isFinite(message.winAmount) ? String(message.winAmount) : message.winAmount;
            if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                object.gameResult = $root.pro.GameResult.toObject(message.gameResult, options);
            return object;
        };

        /**
         * Converts this GameRecord to JSON.
         * @function toJSON
         * @memberof pro.GameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecord;
    })();

    pro.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof pro
         * @interface IGameResult
         * @property {string|null} [inning] GameResult inning
         * @property {number|null} [numOfRedPacket] GameResult numOfRedPacket
         * @property {number|null} [totalRedPacket] GameResult totalRedPacket
         * @property {number|Long|null} [startBetTime] GameResult startBetTime
         * @property {number|Long|null} [endBetTime] GameResult endBetTime
         * @property {number|null} [bankerRedPacket] GameResult bankerRedPacket
         * @property {number|null} [bankerWinAmount] GameResult bankerWinAmount
         * @property {number|null} [systemWinAmount] GameResult systemWinAmount
         */

        /**
         * Constructs a new GameResult.
         * @memberof pro
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {pro.IGameResult=} [properties] Properties to set
         */
        function GameResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResult inning.
         * @member {string} inning
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.inning = "";

        /**
         * GameResult numOfRedPacket.
         * @member {number} numOfRedPacket
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.numOfRedPacket = 0;

        /**
         * GameResult totalRedPacket.
         * @member {number} totalRedPacket
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.totalRedPacket = 0;

        /**
         * GameResult startBetTime.
         * @member {number|Long} startBetTime
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.startBetTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult endBetTime.
         * @member {number|Long} endBetTime
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.endBetTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult bankerRedPacket.
         * @member {number} bankerRedPacket
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.bankerRedPacket = 0;

        /**
         * GameResult bankerWinAmount.
         * @member {number} bankerWinAmount
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.bankerWinAmount = 0;

        /**
         * GameResult systemWinAmount.
         * @member {number} systemWinAmount
         * @memberof pro.GameResult
         * @instance
         */
        GameResult.prototype.systemWinAmount = 0;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @function create
         * @memberof pro.GameResult
         * @static
         * @param {pro.IGameResult=} [properties] Properties to set
         * @returns {pro.GameResult} GameResult instance
         */
        GameResult.create = function create(properties) {
            return new GameResult(properties);
        };

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link pro.GameResult.verify|verify} messages.
         * @function encode
         * @memberof pro.GameResult
         * @static
         * @param {pro.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inning != null && message.hasOwnProperty("inning"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inning);
            if (message.numOfRedPacket != null && message.hasOwnProperty("numOfRedPacket"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numOfRedPacket);
            if (message.totalRedPacket != null && message.hasOwnProperty("totalRedPacket"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalRedPacket);
            if (message.startBetTime != null && message.hasOwnProperty("startBetTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.startBetTime);
            if (message.endBetTime != null && message.hasOwnProperty("endBetTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.endBetTime);
            if (message.bankerRedPacket != null && message.hasOwnProperty("bankerRedPacket"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bankerRedPacket);
            if (message.bankerWinAmount != null && message.hasOwnProperty("bankerWinAmount"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.bankerWinAmount);
            if (message.systemWinAmount != null && message.hasOwnProperty("systemWinAmount"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.systemWinAmount);
            return writer;
        };

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link pro.GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.GameResult
         * @static
         * @param {pro.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof pro.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.GameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inning = reader.string();
                    break;
                case 2:
                    message.numOfRedPacket = reader.int32();
                    break;
                case 3:
                    message.totalRedPacket = reader.int32();
                    break;
                case 4:
                    message.startBetTime = reader.int64();
                    break;
                case 5:
                    message.endBetTime = reader.int64();
                    break;
                case 6:
                    message.bankerRedPacket = reader.int32();
                    break;
                case 7:
                    message.bankerWinAmount = reader.double();
                    break;
                case 8:
                    message.systemWinAmount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResult message.
         * @function verify
         * @memberof pro.GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inning != null && message.hasOwnProperty("inning"))
                if (!$util.isString(message.inning))
                    return "inning: string expected";
            if (message.numOfRedPacket != null && message.hasOwnProperty("numOfRedPacket"))
                if (!$util.isInteger(message.numOfRedPacket))
                    return "numOfRedPacket: integer expected";
            if (message.totalRedPacket != null && message.hasOwnProperty("totalRedPacket"))
                if (!$util.isInteger(message.totalRedPacket))
                    return "totalRedPacket: integer expected";
            if (message.startBetTime != null && message.hasOwnProperty("startBetTime"))
                if (!$util.isInteger(message.startBetTime) && !(message.startBetTime && $util.isInteger(message.startBetTime.low) && $util.isInteger(message.startBetTime.high)))
                    return "startBetTime: integer|Long expected";
            if (message.endBetTime != null && message.hasOwnProperty("endBetTime"))
                if (!$util.isInteger(message.endBetTime) && !(message.endBetTime && $util.isInteger(message.endBetTime.low) && $util.isInteger(message.endBetTime.high)))
                    return "endBetTime: integer|Long expected";
            if (message.bankerRedPacket != null && message.hasOwnProperty("bankerRedPacket"))
                if (!$util.isInteger(message.bankerRedPacket))
                    return "bankerRedPacket: integer expected";
            if (message.bankerWinAmount != null && message.hasOwnProperty("bankerWinAmount"))
                if (typeof message.bankerWinAmount !== "number")
                    return "bankerWinAmount: number expected";
            if (message.systemWinAmount != null && message.hasOwnProperty("systemWinAmount"))
                if (typeof message.systemWinAmount !== "number")
                    return "systemWinAmount: number expected";
            return null;
        };

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.GameResult} GameResult
         */
        GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.GameResult)
                return object;
            var message = new $root.pro.GameResult();
            if (object.inning != null)
                message.inning = String(object.inning);
            if (object.numOfRedPacket != null)
                message.numOfRedPacket = object.numOfRedPacket | 0;
            if (object.totalRedPacket != null)
                message.totalRedPacket = object.totalRedPacket | 0;
            if (object.startBetTime != null)
                if ($util.Long)
                    (message.startBetTime = $util.Long.fromValue(object.startBetTime)).unsigned = false;
                else if (typeof object.startBetTime === "string")
                    message.startBetTime = parseInt(object.startBetTime, 10);
                else if (typeof object.startBetTime === "number")
                    message.startBetTime = object.startBetTime;
                else if (typeof object.startBetTime === "object")
                    message.startBetTime = new $util.LongBits(object.startBetTime.low >>> 0, object.startBetTime.high >>> 0).toNumber();
            if (object.endBetTime != null)
                if ($util.Long)
                    (message.endBetTime = $util.Long.fromValue(object.endBetTime)).unsigned = false;
                else if (typeof object.endBetTime === "string")
                    message.endBetTime = parseInt(object.endBetTime, 10);
                else if (typeof object.endBetTime === "number")
                    message.endBetTime = object.endBetTime;
                else if (typeof object.endBetTime === "object")
                    message.endBetTime = new $util.LongBits(object.endBetTime.low >>> 0, object.endBetTime.high >>> 0).toNumber();
            if (object.bankerRedPacket != null)
                message.bankerRedPacket = object.bankerRedPacket | 0;
            if (object.bankerWinAmount != null)
                message.bankerWinAmount = Number(object.bankerWinAmount);
            if (object.systemWinAmount != null)
                message.systemWinAmount = Number(object.systemWinAmount);
            return message;
        };

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.GameResult
         * @static
         * @param {pro.GameResult} message GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.inning = "";
                object.numOfRedPacket = 0;
                object.totalRedPacket = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startBetTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startBetTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.endBetTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endBetTime = options.longs === String ? "0" : 0;
                object.bankerRedPacket = 0;
                object.bankerWinAmount = 0;
                object.systemWinAmount = 0;
            }
            if (message.inning != null && message.hasOwnProperty("inning"))
                object.inning = message.inning;
            if (message.numOfRedPacket != null && message.hasOwnProperty("numOfRedPacket"))
                object.numOfRedPacket = message.numOfRedPacket;
            if (message.totalRedPacket != null && message.hasOwnProperty("totalRedPacket"))
                object.totalRedPacket = message.totalRedPacket;
            if (message.startBetTime != null && message.hasOwnProperty("startBetTime"))
                if (typeof message.startBetTime === "number")
                    object.startBetTime = options.longs === String ? String(message.startBetTime) : message.startBetTime;
                else
                    object.startBetTime = options.longs === String ? $util.Long.prototype.toString.call(message.startBetTime) : options.longs === Number ? new $util.LongBits(message.startBetTime.low >>> 0, message.startBetTime.high >>> 0).toNumber() : message.startBetTime;
            if (message.endBetTime != null && message.hasOwnProperty("endBetTime"))
                if (typeof message.endBetTime === "number")
                    object.endBetTime = options.longs === String ? String(message.endBetTime) : message.endBetTime;
                else
                    object.endBetTime = options.longs === String ? $util.Long.prototype.toString.call(message.endBetTime) : options.longs === Number ? new $util.LongBits(message.endBetTime.low >>> 0, message.endBetTime.high >>> 0).toNumber() : message.endBetTime;
            if (message.bankerRedPacket != null && message.hasOwnProperty("bankerRedPacket"))
                object.bankerRedPacket = message.bankerRedPacket;
            if (message.bankerWinAmount != null && message.hasOwnProperty("bankerWinAmount"))
                object.bankerWinAmount = options.json && !isFinite(message.bankerWinAmount) ? String(message.bankerWinAmount) : message.bankerWinAmount;
            if (message.systemWinAmount != null && message.hasOwnProperty("systemWinAmount"))
                object.systemWinAmount = options.json && !isFinite(message.systemWinAmount) ? String(message.systemWinAmount) : message.systemWinAmount;
            return object;
        };

        /**
         * Converts this GameResult to JSON.
         * @function toJSON
         * @memberof pro.GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResult;
    })();

    pro.Settlement = (function() {

        /**
         * Properties of a Settlement.
         * @memberof pro
         * @interface ISettlement
         * @property {string|null} [accountName] Settlement accountName
         * @property {number|null} [redPacket] Settlement redPacket
         * @property {number|null} [winAmount] Settlement winAmount
         * @property {number|null} [balance] Settlement balance
         */

        /**
         * Constructs a new Settlement.
         * @memberof pro
         * @classdesc Represents a Settlement.
         * @implements ISettlement
         * @constructor
         * @param {pro.ISettlement=} [properties] Properties to set
         */
        function Settlement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Settlement accountName.
         * @member {string} accountName
         * @memberof pro.Settlement
         * @instance
         */
        Settlement.prototype.accountName = "";

        /**
         * Settlement redPacket.
         * @member {number} redPacket
         * @memberof pro.Settlement
         * @instance
         */
        Settlement.prototype.redPacket = 0;

        /**
         * Settlement winAmount.
         * @member {number} winAmount
         * @memberof pro.Settlement
         * @instance
         */
        Settlement.prototype.winAmount = 0;

        /**
         * Settlement balance.
         * @member {number} balance
         * @memberof pro.Settlement
         * @instance
         */
        Settlement.prototype.balance = 0;

        /**
         * Creates a new Settlement instance using the specified properties.
         * @function create
         * @memberof pro.Settlement
         * @static
         * @param {pro.ISettlement=} [properties] Properties to set
         * @returns {pro.Settlement} Settlement instance
         */
        Settlement.create = function create(properties) {
            return new Settlement(properties);
        };

        /**
         * Encodes the specified Settlement message. Does not implicitly {@link pro.Settlement.verify|verify} messages.
         * @function encode
         * @memberof pro.Settlement
         * @static
         * @param {pro.ISettlement} message Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settlement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.redPacket);
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.winAmount);
            if (message.balance != null && message.hasOwnProperty("balance"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.balance);
            return writer;
        };

        /**
         * Encodes the specified Settlement message, length delimited. Does not implicitly {@link pro.Settlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.Settlement
         * @static
         * @param {pro.ISettlement} message Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settlement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Settlement message from the specified reader or buffer.
         * @function decode
         * @memberof pro.Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.Settlement} Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settlement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.Settlement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.redPacket = reader.int32();
                    break;
                case 3:
                    message.winAmount = reader.double();
                    break;
                case 4:
                    message.balance = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Settlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.Settlement} Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settlement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Settlement message.
         * @function verify
         * @memberof pro.Settlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Settlement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                if (!$util.isInteger(message.redPacket))
                    return "redPacket: integer expected";
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                if (typeof message.winAmount !== "number")
                    return "winAmount: number expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            return null;
        };

        /**
         * Creates a Settlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.Settlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.Settlement} Settlement
         */
        Settlement.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.Settlement)
                return object;
            var message = new $root.pro.Settlement();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.redPacket != null)
                message.redPacket = object.redPacket | 0;
            if (object.winAmount != null)
                message.winAmount = Number(object.winAmount);
            if (object.balance != null)
                message.balance = Number(object.balance);
            return message;
        };

        /**
         * Creates a plain object from a Settlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.Settlement
         * @static
         * @param {pro.Settlement} message Settlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Settlement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.redPacket = 0;
                object.winAmount = 0;
                object.balance = 0;
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.redPacket != null && message.hasOwnProperty("redPacket"))
                object.redPacket = message.redPacket;
            if (message.winAmount != null && message.hasOwnProperty("winAmount"))
                object.winAmount = options.json && !isFinite(message.winAmount) ? String(message.winAmount) : message.winAmount;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            return object;
        };

        /**
         * Converts this Settlement to JSON.
         * @function toJSON
         * @memberof pro.Settlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Settlement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Settlement;
    })();

    pro.Award = (function() {

        /**
         * Properties of an Award.
         * @memberof pro
         * @interface IAward
         * @property {number|Long|null} [id] Award id
         * @property {number|null} [award] Award award
         * @property {string|null} [param] Award param
         * @property {number|null} [amount] Award amount
         */

        /**
         * Constructs a new Award.
         * @memberof pro
         * @classdesc Represents an Award.
         * @implements IAward
         * @constructor
         * @param {pro.IAward=} [properties] Properties to set
         */
        function Award(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Award id.
         * @member {number|Long} id
         * @memberof pro.Award
         * @instance
         */
        Award.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Award award.
         * @member {number} award
         * @memberof pro.Award
         * @instance
         */
        Award.prototype.award = 0;

        /**
         * Award param.
         * @member {string} param
         * @memberof pro.Award
         * @instance
         */
        Award.prototype.param = "";

        /**
         * Award amount.
         * @member {number} amount
         * @memberof pro.Award
         * @instance
         */
        Award.prototype.amount = 0;

        /**
         * Creates a new Award instance using the specified properties.
         * @function create
         * @memberof pro.Award
         * @static
         * @param {pro.IAward=} [properties] Properties to set
         * @returns {pro.Award} Award instance
         */
        Award.create = function create(properties) {
            return new Award(properties);
        };

        /**
         * Encodes the specified Award message. Does not implicitly {@link pro.Award.verify|verify} messages.
         * @function encode
         * @memberof pro.Award
         * @static
         * @param {pro.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.award != null && message.hasOwnProperty("award"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.award);
            if (message.param != null && message.hasOwnProperty("param"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.param);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link pro.Award.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.Award
         * @static
         * @param {pro.IAward} message Award message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Award.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @function decode
         * @memberof pro.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.Award();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.award = reader.int32();
                    break;
                case 3:
                    message.param = reader.string();
                    break;
                case 5:
                    message.amount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.Award
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.Award} Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Award.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Award message.
         * @function verify
         * @memberof pro.Award
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Award.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.award != null && message.hasOwnProperty("award"))
                if (!$util.isInteger(message.award))
                    return "award: integer expected";
            if (message.param != null && message.hasOwnProperty("param"))
                if (!$util.isString(message.param))
                    return "param: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.Award
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.Award} Award
         */
        Award.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.Award)
                return object;
            var message = new $root.pro.Award();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.award != null)
                message.award = object.award | 0;
            if (object.param != null)
                message.param = String(object.param);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.Award
         * @static
         * @param {pro.Award} message Award
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Award.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.award = 0;
                object.param = "";
                object.amount = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.award != null && message.hasOwnProperty("award"))
                object.award = message.award;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this Award to JSON.
         * @function toJSON
         * @memberof pro.Award
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Award.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Award;
    })();

    pro.StraightStatus = (function() {

        /**
         * Properties of a StraightStatus.
         * @memberof pro
         * @interface IStraightStatus
         * @property {number|null} [numOfInning] StraightStatus numOfInning
         * @property {number|null} [minBet] StraightStatus minBet
         */

        /**
         * Constructs a new StraightStatus.
         * @memberof pro
         * @classdesc Represents a StraightStatus.
         * @implements IStraightStatus
         * @constructor
         * @param {pro.IStraightStatus=} [properties] Properties to set
         */
        function StraightStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StraightStatus numOfInning.
         * @member {number} numOfInning
         * @memberof pro.StraightStatus
         * @instance
         */
        StraightStatus.prototype.numOfInning = 0;

        /**
         * StraightStatus minBet.
         * @member {number} minBet
         * @memberof pro.StraightStatus
         * @instance
         */
        StraightStatus.prototype.minBet = 0;

        /**
         * Creates a new StraightStatus instance using the specified properties.
         * @function create
         * @memberof pro.StraightStatus
         * @static
         * @param {pro.IStraightStatus=} [properties] Properties to set
         * @returns {pro.StraightStatus} StraightStatus instance
         */
        StraightStatus.create = function create(properties) {
            return new StraightStatus(properties);
        };

        /**
         * Encodes the specified StraightStatus message. Does not implicitly {@link pro.StraightStatus.verify|verify} messages.
         * @function encode
         * @memberof pro.StraightStatus
         * @static
         * @param {pro.IStraightStatus} message StraightStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StraightStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.numOfInning != null && message.hasOwnProperty("numOfInning"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.numOfInning);
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.minBet);
            return writer;
        };

        /**
         * Encodes the specified StraightStatus message, length delimited. Does not implicitly {@link pro.StraightStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.StraightStatus
         * @static
         * @param {pro.IStraightStatus} message StraightStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StraightStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StraightStatus message from the specified reader or buffer.
         * @function decode
         * @memberof pro.StraightStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.StraightStatus} StraightStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StraightStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.StraightStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.numOfInning = reader.int32();
                    break;
                case 2:
                    message.minBet = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StraightStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.StraightStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.StraightStatus} StraightStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StraightStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StraightStatus message.
         * @function verify
         * @memberof pro.StraightStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StraightStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.numOfInning != null && message.hasOwnProperty("numOfInning"))
                if (!$util.isInteger(message.numOfInning))
                    return "numOfInning: integer expected";
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (typeof message.minBet !== "number")
                    return "minBet: number expected";
            return null;
        };

        /**
         * Creates a StraightStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.StraightStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.StraightStatus} StraightStatus
         */
        StraightStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.StraightStatus)
                return object;
            var message = new $root.pro.StraightStatus();
            if (object.numOfInning != null)
                message.numOfInning = object.numOfInning | 0;
            if (object.minBet != null)
                message.minBet = Number(object.minBet);
            return message;
        };

        /**
         * Creates a plain object from a StraightStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.StraightStatus
         * @static
         * @param {pro.StraightStatus} message StraightStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StraightStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.numOfInning = 0;
                object.minBet = 0;
            }
            if (message.numOfInning != null && message.hasOwnProperty("numOfInning"))
                object.numOfInning = message.numOfInning;
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                object.minBet = options.json && !isFinite(message.minBet) ? String(message.minBet) : message.minBet;
            return object;
        };

        /**
         * Converts this StraightStatus to JSON.
         * @function toJSON
         * @memberof pro.StraightStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StraightStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StraightStatus;
    })();

    pro.SpecialHandsStatus = (function() {

        /**
         * Properties of a SpecialHandsStatus.
         * @memberof pro
         * @interface ISpecialHandsStatus
         * @property {number|null} [kind] SpecialHandsStatus kind
         * @property {number|null} [numOfHands] SpecialHandsStatus numOfHands
         * @property {number|null} [minBet] SpecialHandsStatus minBet
         */

        /**
         * Constructs a new SpecialHandsStatus.
         * @memberof pro
         * @classdesc Represents a SpecialHandsStatus.
         * @implements ISpecialHandsStatus
         * @constructor
         * @param {pro.ISpecialHandsStatus=} [properties] Properties to set
         */
        function SpecialHandsStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialHandsStatus kind.
         * @member {number} kind
         * @memberof pro.SpecialHandsStatus
         * @instance
         */
        SpecialHandsStatus.prototype.kind = 0;

        /**
         * SpecialHandsStatus numOfHands.
         * @member {number} numOfHands
         * @memberof pro.SpecialHandsStatus
         * @instance
         */
        SpecialHandsStatus.prototype.numOfHands = 0;

        /**
         * SpecialHandsStatus minBet.
         * @member {number} minBet
         * @memberof pro.SpecialHandsStatus
         * @instance
         */
        SpecialHandsStatus.prototype.minBet = 0;

        /**
         * Creates a new SpecialHandsStatus instance using the specified properties.
         * @function create
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {pro.ISpecialHandsStatus=} [properties] Properties to set
         * @returns {pro.SpecialHandsStatus} SpecialHandsStatus instance
         */
        SpecialHandsStatus.create = function create(properties) {
            return new SpecialHandsStatus(properties);
        };

        /**
         * Encodes the specified SpecialHandsStatus message. Does not implicitly {@link pro.SpecialHandsStatus.verify|verify} messages.
         * @function encode
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {pro.ISpecialHandsStatus} message SpecialHandsStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecialHandsStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kind != null && message.hasOwnProperty("kind"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.kind);
            if (message.numOfHands != null && message.hasOwnProperty("numOfHands"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numOfHands);
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.minBet);
            return writer;
        };

        /**
         * Encodes the specified SpecialHandsStatus message, length delimited. Does not implicitly {@link pro.SpecialHandsStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {pro.ISpecialHandsStatus} message SpecialHandsStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecialHandsStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpecialHandsStatus message from the specified reader or buffer.
         * @function decode
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.SpecialHandsStatus} SpecialHandsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecialHandsStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.SpecialHandsStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.kind = reader.int32();
                    break;
                case 2:
                    message.numOfHands = reader.int32();
                    break;
                case 3:
                    message.minBet = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpecialHandsStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.SpecialHandsStatus} SpecialHandsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecialHandsStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpecialHandsStatus message.
         * @function verify
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpecialHandsStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isInteger(message.kind))
                    return "kind: integer expected";
            if (message.numOfHands != null && message.hasOwnProperty("numOfHands"))
                if (!$util.isInteger(message.numOfHands))
                    return "numOfHands: integer expected";
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (typeof message.minBet !== "number")
                    return "minBet: number expected";
            return null;
        };

        /**
         * Creates a SpecialHandsStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.SpecialHandsStatus} SpecialHandsStatus
         */
        SpecialHandsStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.SpecialHandsStatus)
                return object;
            var message = new $root.pro.SpecialHandsStatus();
            if (object.kind != null)
                message.kind = object.kind | 0;
            if (object.numOfHands != null)
                message.numOfHands = object.numOfHands | 0;
            if (object.minBet != null)
                message.minBet = Number(object.minBet);
            return message;
        };

        /**
         * Creates a plain object from a SpecialHandsStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.SpecialHandsStatus
         * @static
         * @param {pro.SpecialHandsStatus} message SpecialHandsStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialHandsStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.kind = 0;
                object.numOfHands = 0;
                object.minBet = 0;
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.numOfHands != null && message.hasOwnProperty("numOfHands"))
                object.numOfHands = message.numOfHands;
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                object.minBet = options.json && !isFinite(message.minBet) ? String(message.minBet) : message.minBet;
            return object;
        };

        /**
         * Converts this SpecialHandsStatus to JSON.
         * @function toJSON
         * @memberof pro.SpecialHandsStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialHandsStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialHandsStatus;
    })();

    pro.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof pro
         * @interface IMessage
         * @property {string|null} [from] Message from
         * @property {string|null} [content] Message content
         */

        /**
         * Constructs a new Message.
         * @memberof pro
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {pro.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message from.
         * @member {string} from
         * @memberof pro.Message
         * @instance
         */
        Message.prototype.from = "";

        /**
         * Message content.
         * @member {string} content
         * @memberof pro.Message
         * @instance
         */
        Message.prototype.content = "";

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof pro.Message
         * @static
         * @param {pro.IMessage=} [properties] Properties to set
         * @returns {pro.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link pro.Message.verify|verify} messages.
         * @function encode
         * @memberof pro.Message
         * @static
         * @param {pro.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link pro.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pro.Message
         * @static
         * @param {pro.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof pro.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pro.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pro.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pro.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pro.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof pro.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pro.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pro.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.pro.Message)
                return object;
            var message = new $root.pro.Message();
            if (object.from != null)
                message.from = String(object.from);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pro.Message
         * @static
         * @param {pro.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.from = "";
                object.content = "";
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof pro.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    /**
     * ErrorCode enum.
     * @name pro.ErrorCode
     * @enum {string}
     * @property {number} Success=0 Success value
     * @property {number} InsufficientFund=-1001 InsufficientFund value
     * @property {number} NotAllowed=-1002 NotAllowed value
     * @property {number} Unknown=-1003 Unknown value
     */
    pro.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Success"] = 0;
        values[valuesById[-1001] = "InsufficientFund"] = -1001;
        values[valuesById[-1002] = "NotAllowed"] = -1002;
        values[valuesById[-1003] = "Unknown"] = -1003;
        return values;
    })();

    return pro;
})();

module.exports = $root;
