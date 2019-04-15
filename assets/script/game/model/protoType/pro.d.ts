import * as $protobuf from "protobufjs";
/** Namespace pro. */
export namespace pro {

    /** Properties of a RequestMessage. */
    interface IRequestMessage {

        /** RequestMessage messageType */
        messageType?: (number|null);

        /** RequestMessage traceActivityId */
        traceActivityId?: (string|null);

        /** RequestMessage body */
        body?: (Uint8Array|null);
    }

    /** Represents a RequestMessage. */
    class RequestMessage implements IRequestMessage {

        /**
         * Constructs a new RequestMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IRequestMessage);

        /** RequestMessage messageType. */
        public messageType: number;

        /** RequestMessage traceActivityId. */
        public traceActivityId: string;

        /** RequestMessage body. */
        public body: Uint8Array;

        /**
         * Creates a new RequestMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestMessage instance
         */
        public static create(properties?: pro.IRequestMessage): pro.RequestMessage;

        /**
         * Encodes the specified RequestMessage message. Does not implicitly {@link pro.RequestMessage.verify|verify} messages.
         * @param message RequestMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestMessage message, length delimited. Does not implicitly {@link pro.RequestMessage.verify|verify} messages.
         * @param message RequestMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.RequestMessage;

        /**
         * Decodes a RequestMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.RequestMessage;

        /**
         * Verifies a RequestMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestMessage
         */
        public static fromObject(object: { [k: string]: any }): pro.RequestMessage;

        /**
         * Creates a plain object from a RequestMessage message. Also converts values to other types if specified.
         * @param message RequestMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.RequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseMessage. */
    interface IResponseMessage {

        /** ResponseMessage messageType */
        messageType?: (number|null);

        /** ResponseMessage errorCode */
        errorCode?: (pro.ErrorCode|null);

        /** ResponseMessage body */
        body?: (Uint8Array|null);
    }

    /** Represents a ResponseMessage. */
    class ResponseMessage implements IResponseMessage {

        /**
         * Constructs a new ResponseMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IResponseMessage);

        /** ResponseMessage messageType. */
        public messageType: number;

        /** ResponseMessage errorCode. */
        public errorCode: pro.ErrorCode;

        /** ResponseMessage body. */
        public body: Uint8Array;

        /**
         * Creates a new ResponseMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseMessage instance
         */
        public static create(properties?: pro.IResponseMessage): pro.ResponseMessage;

        /**
         * Encodes the specified ResponseMessage message. Does not implicitly {@link pro.ResponseMessage.verify|verify} messages.
         * @param message ResponseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseMessage message, length delimited. Does not implicitly {@link pro.ResponseMessage.verify|verify} messages.
         * @param message ResponseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ResponseMessage;

        /**
         * Decodes a ResponseMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ResponseMessage;

        /**
         * Verifies a ResponseMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseMessage
         */
        public static fromObject(object: { [k: string]: any }): pro.ResponseMessage;

        /**
         * Creates a plain object from a ResponseMessage message. Also converts values to other types if specified.
         * @param message ResponseMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitGameRequest. */
    interface IExitGameRequest {
    }

    /** Represents an ExitGameRequest. */
    class ExitGameRequest implements IExitGameRequest {

        /**
         * Constructs a new ExitGameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IExitGameRequest);

        /**
         * Creates a new ExitGameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitGameRequest instance
         */
        public static create(properties?: pro.IExitGameRequest): pro.ExitGameRequest;

        /**
         * Encodes the specified ExitGameRequest message. Does not implicitly {@link pro.ExitGameRequest.verify|verify} messages.
         * @param message ExitGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IExitGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitGameRequest message, length delimited. Does not implicitly {@link pro.ExitGameRequest.verify|verify} messages.
         * @param message ExitGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IExitGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitGameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ExitGameRequest;

        /**
         * Decodes an ExitGameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ExitGameRequest;

        /**
         * Verifies an ExitGameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitGameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitGameRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.ExitGameRequest;

        /**
         * Creates a plain object from an ExitGameRequest message. Also converts values to other types if specified.
         * @param message ExitGameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ExitGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitGameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BankerRequest. */
    interface IBankerRequest {

        /** BankerRequest deposit */
        deposit?: (number|null);
    }

    /** Represents a BankerRequest. */
    class BankerRequest implements IBankerRequest {

        /**
         * Constructs a new BankerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBankerRequest);

        /** BankerRequest deposit. */
        public deposit: number;

        /**
         * Creates a new BankerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BankerRequest instance
         */
        public static create(properties?: pro.IBankerRequest): pro.BankerRequest;

        /**
         * Encodes the specified BankerRequest message. Does not implicitly {@link pro.BankerRequest.verify|verify} messages.
         * @param message BankerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBankerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BankerRequest message, length delimited. Does not implicitly {@link pro.BankerRequest.verify|verify} messages.
         * @param message BankerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBankerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BankerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BankerRequest;

        /**
         * Decodes a BankerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BankerRequest;

        /**
         * Verifies a BankerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BankerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BankerRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.BankerRequest;

        /**
         * Creates a plain object from a BankerRequest message. Also converts values to other types if specified.
         * @param message BankerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BankerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BankerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelBankerRequest. */
    interface ICancelBankerRequest {
    }

    /** Represents a CancelBankerRequest. */
    class CancelBankerRequest implements ICancelBankerRequest {

        /**
         * Constructs a new CancelBankerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ICancelBankerRequest);

        /**
         * Creates a new CancelBankerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelBankerRequest instance
         */
        public static create(properties?: pro.ICancelBankerRequest): pro.CancelBankerRequest;

        /**
         * Encodes the specified CancelBankerRequest message. Does not implicitly {@link pro.CancelBankerRequest.verify|verify} messages.
         * @param message CancelBankerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ICancelBankerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelBankerRequest message, length delimited. Does not implicitly {@link pro.CancelBankerRequest.verify|verify} messages.
         * @param message CancelBankerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ICancelBankerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelBankerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelBankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.CancelBankerRequest;

        /**
         * Decodes a CancelBankerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelBankerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.CancelBankerRequest;

        /**
         * Verifies a CancelBankerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelBankerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelBankerRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.CancelBankerRequest;

        /**
         * Creates a plain object from a CancelBankerRequest message. Also converts values to other types if specified.
         * @param message CancelBankerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.CancelBankerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelBankerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRequest. */
    interface IBetRequest {

        /** BetRequest amount */
        amount?: (number|null);
    }

    /** Represents a BetRequest. */
    class BetRequest implements IBetRequest {

        /**
         * Constructs a new BetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBetRequest);

        /** BetRequest amount. */
        public amount: number;

        /**
         * Creates a new BetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRequest instance
         */
        public static create(properties?: pro.IBetRequest): pro.BetRequest;

        /**
         * Encodes the specified BetRequest message. Does not implicitly {@link pro.BetRequest.verify|verify} messages.
         * @param message BetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRequest message, length delimited. Does not implicitly {@link pro.BetRequest.verify|verify} messages.
         * @param message BetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BetRequest;

        /**
         * Decodes a BetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BetRequest;

        /**
         * Verifies a BetRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.BetRequest;

        /**
         * Creates a plain object from a BetRequest message. Also converts values to other types if specified.
         * @param message BetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckRequest. */
    interface ICheckRequest {
    }

    /** Represents a CheckRequest. */
    class CheckRequest implements ICheckRequest {

        /**
         * Constructs a new CheckRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ICheckRequest);

        /**
         * Creates a new CheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckRequest instance
         */
        public static create(properties?: pro.ICheckRequest): pro.CheckRequest;

        /**
         * Encodes the specified CheckRequest message. Does not implicitly {@link pro.CheckRequest.verify|verify} messages.
         * @param message CheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ICheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckRequest message, length delimited. Does not implicitly {@link pro.CheckRequest.verify|verify} messages.
         * @param message CheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ICheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.CheckRequest;

        /**
         * Decodes a CheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.CheckRequest;

        /**
         * Verifies a CheckRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.CheckRequest;

        /**
         * Creates a plain object from a CheckRequest message. Also converts values to other types if specified.
         * @param message CheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.CheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AcceptAwardRequest. */
    interface IAcceptAwardRequest {

        /** AcceptAwardRequest id */
        id?: (number|Long|null);
    }

    /** Represents an AcceptAwardRequest. */
    class AcceptAwardRequest implements IAcceptAwardRequest {

        /**
         * Constructs a new AcceptAwardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IAcceptAwardRequest);

        /** AcceptAwardRequest id. */
        public id: (number|Long);

        /**
         * Creates a new AcceptAwardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AcceptAwardRequest instance
         */
        public static create(properties?: pro.IAcceptAwardRequest): pro.AcceptAwardRequest;

        /**
         * Encodes the specified AcceptAwardRequest message. Does not implicitly {@link pro.AcceptAwardRequest.verify|verify} messages.
         * @param message AcceptAwardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IAcceptAwardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AcceptAwardRequest message, length delimited. Does not implicitly {@link pro.AcceptAwardRequest.verify|verify} messages.
         * @param message AcceptAwardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IAcceptAwardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AcceptAwardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AcceptAwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.AcceptAwardRequest;

        /**
         * Decodes an AcceptAwardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AcceptAwardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.AcceptAwardRequest;

        /**
         * Verifies an AcceptAwardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AcceptAwardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AcceptAwardRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.AcceptAwardRequest;

        /**
         * Creates a plain object from an AcceptAwardRequest message. Also converts values to other types if specified.
         * @param message AcceptAwardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.AcceptAwardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AcceptAwardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListAwardsRequest. */
    interface IListAwardsRequest {
    }

    /** Represents a ListAwardsRequest. */
    class ListAwardsRequest implements IListAwardsRequest {

        /**
         * Constructs a new ListAwardsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IListAwardsRequest);

        /**
         * Creates a new ListAwardsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListAwardsRequest instance
         */
        public static create(properties?: pro.IListAwardsRequest): pro.ListAwardsRequest;

        /**
         * Encodes the specified ListAwardsRequest message. Does not implicitly {@link pro.ListAwardsRequest.verify|verify} messages.
         * @param message ListAwardsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IListAwardsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListAwardsRequest message, length delimited. Does not implicitly {@link pro.ListAwardsRequest.verify|verify} messages.
         * @param message ListAwardsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IListAwardsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListAwardsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListAwardsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ListAwardsRequest;

        /**
         * Decodes a ListAwardsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListAwardsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ListAwardsRequest;

        /**
         * Verifies a ListAwardsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListAwardsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListAwardsRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.ListAwardsRequest;

        /**
         * Creates a plain object from a ListAwardsRequest message. Also converts values to other types if specified.
         * @param message ListAwardsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ListAwardsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListAwardsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListGameRecordsRequest. */
    interface IListGameRecordsRequest {
    }

    /** Represents a ListGameRecordsRequest. */
    class ListGameRecordsRequest implements IListGameRecordsRequest {

        /**
         * Constructs a new ListGameRecordsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IListGameRecordsRequest);

        /**
         * Creates a new ListGameRecordsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListGameRecordsRequest instance
         */
        public static create(properties?: pro.IListGameRecordsRequest): pro.ListGameRecordsRequest;

        /**
         * Encodes the specified ListGameRecordsRequest message. Does not implicitly {@link pro.ListGameRecordsRequest.verify|verify} messages.
         * @param message ListGameRecordsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IListGameRecordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListGameRecordsRequest message, length delimited. Does not implicitly {@link pro.ListGameRecordsRequest.verify|verify} messages.
         * @param message ListGameRecordsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IListGameRecordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListGameRecordsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListGameRecordsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ListGameRecordsRequest;

        /**
         * Decodes a ListGameRecordsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListGameRecordsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ListGameRecordsRequest;

        /**
         * Verifies a ListGameRecordsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListGameRecordsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListGameRecordsRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.ListGameRecordsRequest;

        /**
         * Creates a plain object from a ListGameRecordsRequest message. Also converts values to other types if specified.
         * @param message ListGameRecordsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ListGameRecordsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListGameRecordsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAwardStatusRequest. */
    interface IGetAwardStatusRequest {
    }

    /** Represents a GetAwardStatusRequest. */
    class GetAwardStatusRequest implements IGetAwardStatusRequest {

        /**
         * Constructs a new GetAwardStatusRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGetAwardStatusRequest);

        /**
         * Creates a new GetAwardStatusRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAwardStatusRequest instance
         */
        public static create(properties?: pro.IGetAwardStatusRequest): pro.GetAwardStatusRequest;

        /**
         * Encodes the specified GetAwardStatusRequest message. Does not implicitly {@link pro.GetAwardStatusRequest.verify|verify} messages.
         * @param message GetAwardStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGetAwardStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAwardStatusRequest message, length delimited. Does not implicitly {@link pro.GetAwardStatusRequest.verify|verify} messages.
         * @param message GetAwardStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGetAwardStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAwardStatusRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAwardStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GetAwardStatusRequest;

        /**
         * Decodes a GetAwardStatusRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAwardStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GetAwardStatusRequest;

        /**
         * Verifies a GetAwardStatusRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAwardStatusRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAwardStatusRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.GetAwardStatusRequest;

        /**
         * Creates a plain object from a GetAwardStatusRequest message. Also converts values to other types if specified.
         * @param message GetAwardStatusRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GetAwardStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAwardStatusRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastRequest. */
    interface IBroadcastRequest {

        /** BroadcastRequest message */
        message?: (pro.IMessage|null);
    }

    /** Represents a BroadcastRequest. */
    class BroadcastRequest implements IBroadcastRequest {

        /**
         * Constructs a new BroadcastRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBroadcastRequest);

        /** BroadcastRequest message. */
        public message?: (pro.IMessage|null);

        /**
         * Creates a new BroadcastRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastRequest instance
         */
        public static create(properties?: pro.IBroadcastRequest): pro.BroadcastRequest;

        /**
         * Encodes the specified BroadcastRequest message. Does not implicitly {@link pro.BroadcastRequest.verify|verify} messages.
         * @param message BroadcastRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBroadcastRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastRequest message, length delimited. Does not implicitly {@link pro.BroadcastRequest.verify|verify} messages.
         * @param message BroadcastRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBroadcastRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BroadcastRequest;

        /**
         * Decodes a BroadcastRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BroadcastRequest;

        /**
         * Verifies a BroadcastRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastRequest
         */
        public static fromObject(object: { [k: string]: any }): pro.BroadcastRequest;

        /**
         * Creates a plain object from a BroadcastRequest message. Also converts values to other types if specified.
         * @param message BroadcastRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BroadcastRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse player */
        player?: (pro.IPlayer|null);

        /** LoginResponse gameState */
        gameState?: (pro.IGameState|null);

        /** LoginResponse messages */
        messages?: (pro.IMessage[]|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ILoginResponse);

        /** LoginResponse player. */
        public player?: (pro.IPlayer|null);

        /** LoginResponse gameState. */
        public gameState?: (pro.IGameState|null);

        /** LoginResponse messages. */
        public messages: pro.IMessage[];

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: pro.ILoginResponse): pro.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link pro.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link pro.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitGameResponse. */
    interface IExitGameResponse {
    }

    /** Represents an ExitGameResponse. */
    class ExitGameResponse implements IExitGameResponse {

        /**
         * Constructs a new ExitGameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IExitGameResponse);

        /**
         * Creates a new ExitGameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitGameResponse instance
         */
        public static create(properties?: pro.IExitGameResponse): pro.ExitGameResponse;

        /**
         * Encodes the specified ExitGameResponse message. Does not implicitly {@link pro.ExitGameResponse.verify|verify} messages.
         * @param message ExitGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IExitGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitGameResponse message, length delimited. Does not implicitly {@link pro.ExitGameResponse.verify|verify} messages.
         * @param message ExitGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IExitGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitGameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ExitGameResponse;

        /**
         * Decodes an ExitGameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ExitGameResponse;

        /**
         * Verifies an ExitGameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitGameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitGameResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.ExitGameResponse;

        /**
         * Creates a plain object from an ExitGameResponse message. Also converts values to other types if specified.
         * @param message ExitGameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ExitGameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitGameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BankerResponse. */
    interface IBankerResponse {
    }

    /** Represents a BankerResponse. */
    class BankerResponse implements IBankerResponse {

        /**
         * Constructs a new BankerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBankerResponse);

        /**
         * Creates a new BankerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BankerResponse instance
         */
        public static create(properties?: pro.IBankerResponse): pro.BankerResponse;

        /**
         * Encodes the specified BankerResponse message. Does not implicitly {@link pro.BankerResponse.verify|verify} messages.
         * @param message BankerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBankerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BankerResponse message, length delimited. Does not implicitly {@link pro.BankerResponse.verify|verify} messages.
         * @param message BankerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBankerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BankerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BankerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BankerResponse;

        /**
         * Decodes a BankerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BankerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BankerResponse;

        /**
         * Verifies a BankerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BankerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BankerResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.BankerResponse;

        /**
         * Creates a plain object from a BankerResponse message. Also converts values to other types if specified.
         * @param message BankerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BankerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BankerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelBankerRespose. */
    interface ICancelBankerRespose {
    }

    /** Represents a CancelBankerRespose. */
    class CancelBankerRespose implements ICancelBankerRespose {

        /**
         * Constructs a new CancelBankerRespose.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ICancelBankerRespose);

        /**
         * Creates a new CancelBankerRespose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelBankerRespose instance
         */
        public static create(properties?: pro.ICancelBankerRespose): pro.CancelBankerRespose;

        /**
         * Encodes the specified CancelBankerRespose message. Does not implicitly {@link pro.CancelBankerRespose.verify|verify} messages.
         * @param message CancelBankerRespose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ICancelBankerRespose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelBankerRespose message, length delimited. Does not implicitly {@link pro.CancelBankerRespose.verify|verify} messages.
         * @param message CancelBankerRespose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ICancelBankerRespose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelBankerRespose message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelBankerRespose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.CancelBankerRespose;

        /**
         * Decodes a CancelBankerRespose message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelBankerRespose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.CancelBankerRespose;

        /**
         * Verifies a CancelBankerRespose message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelBankerRespose message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelBankerRespose
         */
        public static fromObject(object: { [k: string]: any }): pro.CancelBankerRespose;

        /**
         * Creates a plain object from a CancelBankerRespose message. Also converts values to other types if specified.
         * @param message CancelBankerRespose
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.CancelBankerRespose, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelBankerRespose to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResponse. */
    interface IBetResponse {
    }

    /** Represents a BetResponse. */
    class BetResponse implements IBetResponse {

        /**
         * Constructs a new BetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBetResponse);

        /**
         * Creates a new BetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResponse instance
         */
        public static create(properties?: pro.IBetResponse): pro.BetResponse;

        /**
         * Encodes the specified BetResponse message. Does not implicitly {@link pro.BetResponse.verify|verify} messages.
         * @param message BetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResponse message, length delimited. Does not implicitly {@link pro.BetResponse.verify|verify} messages.
         * @param message BetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BetResponse;

        /**
         * Decodes a BetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BetResponse;

        /**
         * Verifies a BetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.BetResponse;

        /**
         * Creates a plain object from a BetResponse message. Also converts values to other types if specified.
         * @param message BetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckResponse. */
    interface ICheckResponse {
    }

    /** Represents a CheckResponse. */
    class CheckResponse implements ICheckResponse {

        /**
         * Constructs a new CheckResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ICheckResponse);

        /**
         * Creates a new CheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckResponse instance
         */
        public static create(properties?: pro.ICheckResponse): pro.CheckResponse;

        /**
         * Encodes the specified CheckResponse message. Does not implicitly {@link pro.CheckResponse.verify|verify} messages.
         * @param message CheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ICheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckResponse message, length delimited. Does not implicitly {@link pro.CheckResponse.verify|verify} messages.
         * @param message CheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ICheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.CheckResponse;

        /**
         * Decodes a CheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.CheckResponse;

        /**
         * Verifies a CheckResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.CheckResponse;

        /**
         * Creates a plain object from a CheckResponse message. Also converts values to other types if specified.
         * @param message CheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.CheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AcceptAwardResponse. */
    interface IAcceptAwardResponse {
    }

    /** Represents an AcceptAwardResponse. */
    class AcceptAwardResponse implements IAcceptAwardResponse {

        /**
         * Constructs a new AcceptAwardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IAcceptAwardResponse);

        /**
         * Creates a new AcceptAwardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AcceptAwardResponse instance
         */
        public static create(properties?: pro.IAcceptAwardResponse): pro.AcceptAwardResponse;

        /**
         * Encodes the specified AcceptAwardResponse message. Does not implicitly {@link pro.AcceptAwardResponse.verify|verify} messages.
         * @param message AcceptAwardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IAcceptAwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AcceptAwardResponse message, length delimited. Does not implicitly {@link pro.AcceptAwardResponse.verify|verify} messages.
         * @param message AcceptAwardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IAcceptAwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AcceptAwardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AcceptAwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.AcceptAwardResponse;

        /**
         * Decodes an AcceptAwardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AcceptAwardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.AcceptAwardResponse;

        /**
         * Verifies an AcceptAwardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AcceptAwardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AcceptAwardResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.AcceptAwardResponse;

        /**
         * Creates a plain object from an AcceptAwardResponse message. Also converts values to other types if specified.
         * @param message AcceptAwardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.AcceptAwardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AcceptAwardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListAwardsResponse. */
    interface IListAwardsResponse {

        /** ListAwardsResponse awards */
        awards?: (pro.IAward[]|null);
    }

    /** Represents a ListAwardsResponse. */
    class ListAwardsResponse implements IListAwardsResponse {

        /**
         * Constructs a new ListAwardsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IListAwardsResponse);

        /** ListAwardsResponse awards. */
        public awards: pro.IAward[];

        /**
         * Creates a new ListAwardsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListAwardsResponse instance
         */
        public static create(properties?: pro.IListAwardsResponse): pro.ListAwardsResponse;

        /**
         * Encodes the specified ListAwardsResponse message. Does not implicitly {@link pro.ListAwardsResponse.verify|verify} messages.
         * @param message ListAwardsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IListAwardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListAwardsResponse message, length delimited. Does not implicitly {@link pro.ListAwardsResponse.verify|verify} messages.
         * @param message ListAwardsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IListAwardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListAwardsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListAwardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ListAwardsResponse;

        /**
         * Decodes a ListAwardsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListAwardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ListAwardsResponse;

        /**
         * Verifies a ListAwardsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListAwardsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListAwardsResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.ListAwardsResponse;

        /**
         * Creates a plain object from a ListAwardsResponse message. Also converts values to other types if specified.
         * @param message ListAwardsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ListAwardsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListAwardsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListGameRecordsResponse. */
    interface IListGameRecordsResponse {

        /** ListGameRecordsResponse gameRecords */
        gameRecords?: (pro.IGameRecord[]|null);
    }

    /** Represents a ListGameRecordsResponse. */
    class ListGameRecordsResponse implements IListGameRecordsResponse {

        /**
         * Constructs a new ListGameRecordsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IListGameRecordsResponse);

        /** ListGameRecordsResponse gameRecords. */
        public gameRecords: pro.IGameRecord[];

        /**
         * Creates a new ListGameRecordsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListGameRecordsResponse instance
         */
        public static create(properties?: pro.IListGameRecordsResponse): pro.ListGameRecordsResponse;

        /**
         * Encodes the specified ListGameRecordsResponse message. Does not implicitly {@link pro.ListGameRecordsResponse.verify|verify} messages.
         * @param message ListGameRecordsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IListGameRecordsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListGameRecordsResponse message, length delimited. Does not implicitly {@link pro.ListGameRecordsResponse.verify|verify} messages.
         * @param message ListGameRecordsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IListGameRecordsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListGameRecordsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListGameRecordsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ListGameRecordsResponse;

        /**
         * Decodes a ListGameRecordsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListGameRecordsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ListGameRecordsResponse;

        /**
         * Verifies a ListGameRecordsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListGameRecordsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListGameRecordsResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.ListGameRecordsResponse;

        /**
         * Creates a plain object from a ListGameRecordsResponse message. Also converts values to other types if specified.
         * @param message ListGameRecordsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ListGameRecordsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListGameRecordsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAwardStatusResponse. */
    interface IGetAwardStatusResponse {

        /** GetAwardStatusResponse straightStatus */
        straightStatus?: (pro.IStraightStatus|null);

        /** GetAwardStatusResponse specialHandsStatus */
        specialHandsStatus?: (pro.ISpecialHandsStatus[]|null);
    }

    /** Represents a GetAwardStatusResponse. */
    class GetAwardStatusResponse implements IGetAwardStatusResponse {

        /**
         * Constructs a new GetAwardStatusResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGetAwardStatusResponse);

        /** GetAwardStatusResponse straightStatus. */
        public straightStatus?: (pro.IStraightStatus|null);

        /** GetAwardStatusResponse specialHandsStatus. */
        public specialHandsStatus: pro.ISpecialHandsStatus[];

        /**
         * Creates a new GetAwardStatusResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAwardStatusResponse instance
         */
        public static create(properties?: pro.IGetAwardStatusResponse): pro.GetAwardStatusResponse;

        /**
         * Encodes the specified GetAwardStatusResponse message. Does not implicitly {@link pro.GetAwardStatusResponse.verify|verify} messages.
         * @param message GetAwardStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGetAwardStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAwardStatusResponse message, length delimited. Does not implicitly {@link pro.GetAwardStatusResponse.verify|verify} messages.
         * @param message GetAwardStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGetAwardStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAwardStatusResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAwardStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GetAwardStatusResponse;

        /**
         * Decodes a GetAwardStatusResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAwardStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GetAwardStatusResponse;

        /**
         * Verifies a GetAwardStatusResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAwardStatusResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAwardStatusResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.GetAwardStatusResponse;

        /**
         * Creates a plain object from a GetAwardStatusResponse message. Also converts values to other types if specified.
         * @param message GetAwardStatusResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GetAwardStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAwardStatusResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastResponse. */
    interface IBroadcastResponse {
    }

    /** Represents a BroadcastResponse. */
    class BroadcastResponse implements IBroadcastResponse {

        /**
         * Constructs a new BroadcastResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBroadcastResponse);

        /**
         * Creates a new BroadcastResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastResponse instance
         */
        public static create(properties?: pro.IBroadcastResponse): pro.BroadcastResponse;

        /**
         * Encodes the specified BroadcastResponse message. Does not implicitly {@link pro.BroadcastResponse.verify|verify} messages.
         * @param message BroadcastResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBroadcastResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastResponse message, length delimited. Does not implicitly {@link pro.BroadcastResponse.verify|verify} messages.
         * @param message BroadcastResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBroadcastResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BroadcastResponse;

        /**
         * Decodes a BroadcastResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BroadcastResponse;

        /**
         * Verifies a BroadcastResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastResponse
         */
        public static fromObject(object: { [k: string]: any }): pro.BroadcastResponse;

        /**
         * Creates a plain object from a BroadcastResponse message. Also converts values to other types if specified.
         * @param message BroadcastResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BroadcastResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerEnterEvent. */
    interface IPlayerEnterEvent {

        /** PlayerEnterEvent player */
        player?: (pro.IPlayer|null);

        /** PlayerEnterEvent onlineUsers */
        onlineUsers?: (number|null);
    }

    /** Represents a PlayerEnterEvent. */
    class PlayerEnterEvent implements IPlayerEnterEvent {

        /**
         * Constructs a new PlayerEnterEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IPlayerEnterEvent);

        /** PlayerEnterEvent player. */
        public player?: (pro.IPlayer|null);

        /** PlayerEnterEvent onlineUsers. */
        public onlineUsers: number;

        /**
         * Creates a new PlayerEnterEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerEnterEvent instance
         */
        public static create(properties?: pro.IPlayerEnterEvent): pro.PlayerEnterEvent;

        /**
         * Encodes the specified PlayerEnterEvent message. Does not implicitly {@link pro.PlayerEnterEvent.verify|verify} messages.
         * @param message PlayerEnterEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IPlayerEnterEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerEnterEvent message, length delimited. Does not implicitly {@link pro.PlayerEnterEvent.verify|verify} messages.
         * @param message PlayerEnterEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IPlayerEnterEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerEnterEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerEnterEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.PlayerEnterEvent;

        /**
         * Decodes a PlayerEnterEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerEnterEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.PlayerEnterEvent;

        /**
         * Verifies a PlayerEnterEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerEnterEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerEnterEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.PlayerEnterEvent;

        /**
         * Creates a plain object from a PlayerEnterEvent message. Also converts values to other types if specified.
         * @param message PlayerEnterEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.PlayerEnterEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerEnterEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerExitEvent. */
    interface IPlayerExitEvent {

        /** PlayerExitEvent accountName */
        accountName?: (string|null);

        /** PlayerExitEvent onlineUsers */
        onlineUsers?: (number|null);
    }

    /** Represents a PlayerExitEvent. */
    class PlayerExitEvent implements IPlayerExitEvent {

        /**
         * Constructs a new PlayerExitEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IPlayerExitEvent);

        /** PlayerExitEvent accountName. */
        public accountName: string;

        /** PlayerExitEvent onlineUsers. */
        public onlineUsers: number;

        /**
         * Creates a new PlayerExitEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerExitEvent instance
         */
        public static create(properties?: pro.IPlayerExitEvent): pro.PlayerExitEvent;

        /**
         * Encodes the specified PlayerExitEvent message. Does not implicitly {@link pro.PlayerExitEvent.verify|verify} messages.
         * @param message PlayerExitEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IPlayerExitEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerExitEvent message, length delimited. Does not implicitly {@link pro.PlayerExitEvent.verify|verify} messages.
         * @param message PlayerExitEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IPlayerExitEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerExitEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.PlayerExitEvent;

        /**
         * Decodes a PlayerExitEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.PlayerExitEvent;

        /**
         * Verifies a PlayerExitEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerExitEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerExitEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.PlayerExitEvent;

        /**
         * Creates a plain object from a PlayerExitEvent message. Also converts values to other types if specified.
         * @param message PlayerExitEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.PlayerExitEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerExitEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStateUpdatedEvent. */
    interface IGameStateUpdatedEvent {

        /** GameStateUpdatedEvent state */
        state?: (number|null);

        /** GameStateUpdatedEvent timeout */
        timeout?: (number|null);

        /** GameStateUpdatedEvent data */
        data?: (string|null);
    }

    /** Represents a GameStateUpdatedEvent. */
    class GameStateUpdatedEvent implements IGameStateUpdatedEvent {

        /**
         * Constructs a new GameStateUpdatedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGameStateUpdatedEvent);

        /** GameStateUpdatedEvent state. */
        public state: number;

        /** GameStateUpdatedEvent timeout. */
        public timeout: number;

        /** GameStateUpdatedEvent data. */
        public data: string;

        /**
         * Creates a new GameStateUpdatedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateUpdatedEvent instance
         */
        public static create(properties?: pro.IGameStateUpdatedEvent): pro.GameStateUpdatedEvent;

        /**
         * Encodes the specified GameStateUpdatedEvent message. Does not implicitly {@link pro.GameStateUpdatedEvent.verify|verify} messages.
         * @param message GameStateUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGameStateUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateUpdatedEvent message, length delimited. Does not implicitly {@link pro.GameStateUpdatedEvent.verify|verify} messages.
         * @param message GameStateUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGameStateUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateUpdatedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GameStateUpdatedEvent;

        /**
         * Decodes a GameStateUpdatedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GameStateUpdatedEvent;

        /**
         * Verifies a GameStateUpdatedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateUpdatedEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.GameStateUpdatedEvent;

        /**
         * Creates a plain object from a GameStateUpdatedEvent message. Also converts values to other types if specified.
         * @param message GameStateUpdatedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GameStateUpdatedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateUpdatedEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameModeUpdatedEvent. */
    interface IGameModeUpdatedEvent {

        /** GameModeUpdatedEvent mode */
        mode?: (number|null);
    }

    /** Represents a GameModeUpdatedEvent. */
    class GameModeUpdatedEvent implements IGameModeUpdatedEvent {

        /**
         * Constructs a new GameModeUpdatedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGameModeUpdatedEvent);

        /** GameModeUpdatedEvent mode. */
        public mode: number;

        /**
         * Creates a new GameModeUpdatedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameModeUpdatedEvent instance
         */
        public static create(properties?: pro.IGameModeUpdatedEvent): pro.GameModeUpdatedEvent;

        /**
         * Encodes the specified GameModeUpdatedEvent message. Does not implicitly {@link pro.GameModeUpdatedEvent.verify|verify} messages.
         * @param message GameModeUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGameModeUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameModeUpdatedEvent message, length delimited. Does not implicitly {@link pro.GameModeUpdatedEvent.verify|verify} messages.
         * @param message GameModeUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGameModeUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameModeUpdatedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameModeUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GameModeUpdatedEvent;

        /**
         * Decodes a GameModeUpdatedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameModeUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GameModeUpdatedEvent;

        /**
         * Verifies a GameModeUpdatedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameModeUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameModeUpdatedEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.GameModeUpdatedEvent;

        /**
         * Creates a plain object from a GameModeUpdatedEvent message. Also converts values to other types if specified.
         * @param message GameModeUpdatedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GameModeUpdatedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameModeUpdatedEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BankerEvent. */
    interface IBankerEvent {

        /** BankerEvent accountName */
        accountName?: (string|null);

        /** BankerEvent amount */
        amount?: (number|null);
    }

    /** Represents a BankerEvent. */
    class BankerEvent implements IBankerEvent {

        /**
         * Constructs a new BankerEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBankerEvent);

        /** BankerEvent accountName. */
        public accountName: string;

        /** BankerEvent amount. */
        public amount: number;

        /**
         * Creates a new BankerEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BankerEvent instance
         */
        public static create(properties?: pro.IBankerEvent): pro.BankerEvent;

        /**
         * Encodes the specified BankerEvent message. Does not implicitly {@link pro.BankerEvent.verify|verify} messages.
         * @param message BankerEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBankerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BankerEvent message, length delimited. Does not implicitly {@link pro.BankerEvent.verify|verify} messages.
         * @param message BankerEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBankerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BankerEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BankerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BankerEvent;

        /**
         * Decodes a BankerEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BankerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BankerEvent;

        /**
         * Verifies a BankerEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BankerEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BankerEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.BankerEvent;

        /**
         * Creates a plain object from a BankerEvent message. Also converts values to other types if specified.
         * @param message BankerEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BankerEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BankerEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetEvent. */
    interface IBetEvent {

        /** BetEvent accountName */
        accountName?: (string|null);

        /** BetEvent balance */
        balance?: (number|null);

        /** BetEvent record */
        record?: (pro.IBetRecord|null);
    }

    /** Represents a BetEvent. */
    class BetEvent implements IBetEvent {

        /**
         * Constructs a new BetEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBetEvent);

        /** BetEvent accountName. */
        public accountName: string;

        /** BetEvent balance. */
        public balance: number;

        /** BetEvent record. */
        public record?: (pro.IBetRecord|null);

        /**
         * Creates a new BetEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetEvent instance
         */
        public static create(properties?: pro.IBetEvent): pro.BetEvent;

        /**
         * Encodes the specified BetEvent message. Does not implicitly {@link pro.BetEvent.verify|verify} messages.
         * @param message BetEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBetEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetEvent message, length delimited. Does not implicitly {@link pro.BetEvent.verify|verify} messages.
         * @param message BetEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBetEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BetEvent;

        /**
         * Decodes a BetEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BetEvent;

        /**
         * Verifies a BetEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.BetEvent;

        /**
         * Creates a plain object from a BetEvent message. Also converts values to other types if specified.
         * @param message BetEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BetEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedPacketEvent. */
    interface IRedPacketEvent {

        /** RedPacketEvent amount */
        amount?: (number|null);

        /** RedPacketEvent numOfRedPackets */
        numOfRedPackets?: (number|null);

        /** RedPacketEvent totalAmount */
        totalAmount?: (number|null);
    }

    /** Represents a RedPacketEvent. */
    class RedPacketEvent implements IRedPacketEvent {

        /**
         * Constructs a new RedPacketEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IRedPacketEvent);

        /** RedPacketEvent amount. */
        public amount: number;

        /** RedPacketEvent numOfRedPackets. */
        public numOfRedPackets: number;

        /** RedPacketEvent totalAmount. */
        public totalAmount: number;

        /**
         * Creates a new RedPacketEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPacketEvent instance
         */
        public static create(properties?: pro.IRedPacketEvent): pro.RedPacketEvent;

        /**
         * Encodes the specified RedPacketEvent message. Does not implicitly {@link pro.RedPacketEvent.verify|verify} messages.
         * @param message RedPacketEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IRedPacketEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RedPacketEvent message, length delimited. Does not implicitly {@link pro.RedPacketEvent.verify|verify} messages.
         * @param message RedPacketEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IRedPacketEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPacketEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPacketEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.RedPacketEvent;

        /**
         * Decodes a RedPacketEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RedPacketEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.RedPacketEvent;

        /**
         * Verifies a RedPacketEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RedPacketEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedPacketEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.RedPacketEvent;

        /**
         * Creates a plain object from a RedPacketEvent message. Also converts values to other types if specified.
         * @param message RedPacketEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.RedPacketEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedPacketEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckEvent. */
    interface ICheckEvent {

        /** CheckEvent accountName */
        accountName?: (string|null);

        /** CheckEvent redPacket */
        redPacket?: (number|null);

        /** CheckEvent balance */
        balance?: (number|null);
    }

    /** Represents a CheckEvent. */
    class CheckEvent implements ICheckEvent {

        /**
         * Constructs a new CheckEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ICheckEvent);

        /** CheckEvent accountName. */
        public accountName: string;

        /** CheckEvent redPacket. */
        public redPacket: number;

        /** CheckEvent balance. */
        public balance: number;

        /**
         * Creates a new CheckEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckEvent instance
         */
        public static create(properties?: pro.ICheckEvent): pro.CheckEvent;

        /**
         * Encodes the specified CheckEvent message. Does not implicitly {@link pro.CheckEvent.verify|verify} messages.
         * @param message CheckEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ICheckEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckEvent message, length delimited. Does not implicitly {@link pro.CheckEvent.verify|verify} messages.
         * @param message CheckEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ICheckEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.CheckEvent;

        /**
         * Decodes a CheckEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.CheckEvent;

        /**
         * Verifies a CheckEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.CheckEvent;

        /**
         * Creates a plain object from a CheckEvent message. Also converts values to other types if specified.
         * @param message CheckEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.CheckEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BankerCanceledEvent. */
    interface IBankerCanceledEvent {

        /** BankerCanceledEvent accountName */
        accountName?: (string|null);

        /** BankerCanceledEvent balance */
        balance?: (number|null);
    }

    /** Represents a BankerCanceledEvent. */
    class BankerCanceledEvent implements IBankerCanceledEvent {

        /**
         * Constructs a new BankerCanceledEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBankerCanceledEvent);

        /** BankerCanceledEvent accountName. */
        public accountName: string;

        /** BankerCanceledEvent balance. */
        public balance: number;

        /**
         * Creates a new BankerCanceledEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BankerCanceledEvent instance
         */
        public static create(properties?: pro.IBankerCanceledEvent): pro.BankerCanceledEvent;

        /**
         * Encodes the specified BankerCanceledEvent message. Does not implicitly {@link pro.BankerCanceledEvent.verify|verify} messages.
         * @param message BankerCanceledEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBankerCanceledEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BankerCanceledEvent message, length delimited. Does not implicitly {@link pro.BankerCanceledEvent.verify|verify} messages.
         * @param message BankerCanceledEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBankerCanceledEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BankerCanceledEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BankerCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BankerCanceledEvent;

        /**
         * Decodes a BankerCanceledEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BankerCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BankerCanceledEvent;

        /**
         * Verifies a BankerCanceledEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BankerCanceledEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BankerCanceledEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.BankerCanceledEvent;

        /**
         * Creates a plain object from a BankerCanceledEvent message. Also converts values to other types if specified.
         * @param message BankerCanceledEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BankerCanceledEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BankerCanceledEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettlementEvent. */
    interface ISettlementEvent {

        /** SettlementEvent gameResult */
        gameResult?: (pro.IGameResult|null);

        /** SettlementEvent settlements */
        settlements?: (pro.ISettlement[]|null);
    }

    /** Represents a SettlementEvent. */
    class SettlementEvent implements ISettlementEvent {

        /**
         * Constructs a new SettlementEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ISettlementEvent);

        /** SettlementEvent gameResult. */
        public gameResult?: (pro.IGameResult|null);

        /** SettlementEvent settlements. */
        public settlements: pro.ISettlement[];

        /**
         * Creates a new SettlementEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettlementEvent instance
         */
        public static create(properties?: pro.ISettlementEvent): pro.SettlementEvent;

        /**
         * Encodes the specified SettlementEvent message. Does not implicitly {@link pro.SettlementEvent.verify|verify} messages.
         * @param message SettlementEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ISettlementEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettlementEvent message, length delimited. Does not implicitly {@link pro.SettlementEvent.verify|verify} messages.
         * @param message SettlementEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ISettlementEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettlementEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettlementEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.SettlementEvent;

        /**
         * Decodes a SettlementEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettlementEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.SettlementEvent;

        /**
         * Verifies a SettlementEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettlementEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettlementEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.SettlementEvent;

        /**
         * Creates a plain object from a SettlementEvent message. Also converts values to other types if specified.
         * @param message SettlementEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.SettlementEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettlementEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBalanceUpdatedEvent. */
    interface IUserBalanceUpdatedEvent {

        /** UserBalanceUpdatedEvent accountName */
        accountName?: (string|null);

        /** UserBalanceUpdatedEvent balance */
        balance?: (number|null);

        /** UserBalanceUpdatedEvent reason */
        reason?: (number|null);
    }

    /** Represents a UserBalanceUpdatedEvent. */
    class UserBalanceUpdatedEvent implements IUserBalanceUpdatedEvent {

        /**
         * Constructs a new UserBalanceUpdatedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IUserBalanceUpdatedEvent);

        /** UserBalanceUpdatedEvent accountName. */
        public accountName: string;

        /** UserBalanceUpdatedEvent balance. */
        public balance: number;

        /** UserBalanceUpdatedEvent reason. */
        public reason: number;

        /**
         * Creates a new UserBalanceUpdatedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserBalanceUpdatedEvent instance
         */
        public static create(properties?: pro.IUserBalanceUpdatedEvent): pro.UserBalanceUpdatedEvent;

        /**
         * Encodes the specified UserBalanceUpdatedEvent message. Does not implicitly {@link pro.UserBalanceUpdatedEvent.verify|verify} messages.
         * @param message UserBalanceUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IUserBalanceUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserBalanceUpdatedEvent message, length delimited. Does not implicitly {@link pro.UserBalanceUpdatedEvent.verify|verify} messages.
         * @param message UserBalanceUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IUserBalanceUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserBalanceUpdatedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBalanceUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.UserBalanceUpdatedEvent;

        /**
         * Decodes a UserBalanceUpdatedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserBalanceUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.UserBalanceUpdatedEvent;

        /**
         * Verifies a UserBalanceUpdatedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserBalanceUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBalanceUpdatedEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.UserBalanceUpdatedEvent;

        /**
         * Creates a plain object from a UserBalanceUpdatedEvent message. Also converts values to other types if specified.
         * @param message UserBalanceUpdatedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.UserBalanceUpdatedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBalanceUpdatedEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardAvaliableEvent. */
    interface IAwardAvaliableEvent {

        /** AwardAvaliableEvent award */
        award?: (pro.IAward|null);
    }

    /** Represents an AwardAvaliableEvent. */
    class AwardAvaliableEvent implements IAwardAvaliableEvent {

        /**
         * Constructs a new AwardAvaliableEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IAwardAvaliableEvent);

        /** AwardAvaliableEvent award. */
        public award?: (pro.IAward|null);

        /**
         * Creates a new AwardAvaliableEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardAvaliableEvent instance
         */
        public static create(properties?: pro.IAwardAvaliableEvent): pro.AwardAvaliableEvent;

        /**
         * Encodes the specified AwardAvaliableEvent message. Does not implicitly {@link pro.AwardAvaliableEvent.verify|verify} messages.
         * @param message AwardAvaliableEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IAwardAvaliableEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardAvaliableEvent message, length delimited. Does not implicitly {@link pro.AwardAvaliableEvent.verify|verify} messages.
         * @param message AwardAvaliableEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IAwardAvaliableEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardAvaliableEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardAvaliableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.AwardAvaliableEvent;

        /**
         * Decodes an AwardAvaliableEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardAvaliableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.AwardAvaliableEvent;

        /**
         * Verifies an AwardAvaliableEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardAvaliableEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardAvaliableEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.AwardAvaliableEvent;

        /**
         * Creates a plain object from an AwardAvaliableEvent message. Also converts values to other types if specified.
         * @param message AwardAvaliableEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.AwardAvaliableEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardAvaliableEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardAcceptedEvent. */
    interface IAwardAcceptedEvent {

        /** AwardAcceptedEvent accountName */
        accountName?: (string|null);

        /** AwardAcceptedEvent award */
        award?: (pro.IAward|null);

        /** AwardAcceptedEvent balance */
        balance?: (number|null);
    }

    /** Represents an AwardAcceptedEvent. */
    class AwardAcceptedEvent implements IAwardAcceptedEvent {

        /**
         * Constructs a new AwardAcceptedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IAwardAcceptedEvent);

        /** AwardAcceptedEvent accountName. */
        public accountName: string;

        /** AwardAcceptedEvent award. */
        public award?: (pro.IAward|null);

        /** AwardAcceptedEvent balance. */
        public balance: number;

        /**
         * Creates a new AwardAcceptedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardAcceptedEvent instance
         */
        public static create(properties?: pro.IAwardAcceptedEvent): pro.AwardAcceptedEvent;

        /**
         * Encodes the specified AwardAcceptedEvent message. Does not implicitly {@link pro.AwardAcceptedEvent.verify|verify} messages.
         * @param message AwardAcceptedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IAwardAcceptedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardAcceptedEvent message, length delimited. Does not implicitly {@link pro.AwardAcceptedEvent.verify|verify} messages.
         * @param message AwardAcceptedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IAwardAcceptedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardAcceptedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardAcceptedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.AwardAcceptedEvent;

        /**
         * Decodes an AwardAcceptedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardAcceptedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.AwardAcceptedEvent;

        /**
         * Verifies an AwardAcceptedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardAcceptedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardAcceptedEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.AwardAcceptedEvent;

        /**
         * Creates a plain object from an AwardAcceptedEvent message. Also converts values to other types if specified.
         * @param message AwardAcceptedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.AwardAcceptedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardAcceptedEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AwardCanceledEvent. */
    interface IAwardCanceledEvent {

        /** AwardCanceledEvent id */
        id?: (number|Long|null);
    }

    /** Represents an AwardCanceledEvent. */
    class AwardCanceledEvent implements IAwardCanceledEvent {

        /**
         * Constructs a new AwardCanceledEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IAwardCanceledEvent);

        /** AwardCanceledEvent id. */
        public id: (number|Long);

        /**
         * Creates a new AwardCanceledEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwardCanceledEvent instance
         */
        public static create(properties?: pro.IAwardCanceledEvent): pro.AwardCanceledEvent;

        /**
         * Encodes the specified AwardCanceledEvent message. Does not implicitly {@link pro.AwardCanceledEvent.verify|verify} messages.
         * @param message AwardCanceledEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IAwardCanceledEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwardCanceledEvent message, length delimited. Does not implicitly {@link pro.AwardCanceledEvent.verify|verify} messages.
         * @param message AwardCanceledEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IAwardCanceledEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwardCanceledEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwardCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.AwardCanceledEvent;

        /**
         * Decodes an AwardCanceledEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwardCanceledEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.AwardCanceledEvent;

        /**
         * Verifies an AwardCanceledEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwardCanceledEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwardCanceledEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.AwardCanceledEvent;

        /**
         * Creates a plain object from an AwardCanceledEvent message. Also converts values to other types if specified.
         * @param message AwardCanceledEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.AwardCanceledEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwardCanceledEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfigUpdatedEvent. */
    interface IConfigUpdatedEvent {

        /** ConfigUpdatedEvent gameConfig */
        gameConfig?: (pro.IGameConfig|null);
    }

    /** Represents a ConfigUpdatedEvent. */
    class ConfigUpdatedEvent implements IConfigUpdatedEvent {

        /**
         * Constructs a new ConfigUpdatedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IConfigUpdatedEvent);

        /** ConfigUpdatedEvent gameConfig. */
        public gameConfig?: (pro.IGameConfig|null);

        /**
         * Creates a new ConfigUpdatedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigUpdatedEvent instance
         */
        public static create(properties?: pro.IConfigUpdatedEvent): pro.ConfigUpdatedEvent;

        /**
         * Encodes the specified ConfigUpdatedEvent message. Does not implicitly {@link pro.ConfigUpdatedEvent.verify|verify} messages.
         * @param message ConfigUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IConfigUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigUpdatedEvent message, length delimited. Does not implicitly {@link pro.ConfigUpdatedEvent.verify|verify} messages.
         * @param message ConfigUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IConfigUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigUpdatedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfigUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ConfigUpdatedEvent;

        /**
         * Decodes a ConfigUpdatedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfigUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ConfigUpdatedEvent;

        /**
         * Verifies a ConfigUpdatedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigUpdatedEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.ConfigUpdatedEvent;

        /**
         * Creates a plain object from a ConfigUpdatedEvent message. Also converts values to other types if specified.
         * @param message ConfigUpdatedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ConfigUpdatedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigUpdatedEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForcePlayerExitEvent. */
    interface IForcePlayerExitEvent {

        /** ForcePlayerExitEvent accountName */
        accountName?: (string|null);
    }

    /** Represents a ForcePlayerExitEvent. */
    class ForcePlayerExitEvent implements IForcePlayerExitEvent {

        /**
         * Constructs a new ForcePlayerExitEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IForcePlayerExitEvent);

        /** ForcePlayerExitEvent accountName. */
        public accountName: string;

        /**
         * Creates a new ForcePlayerExitEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForcePlayerExitEvent instance
         */
        public static create(properties?: pro.IForcePlayerExitEvent): pro.ForcePlayerExitEvent;

        /**
         * Encodes the specified ForcePlayerExitEvent message. Does not implicitly {@link pro.ForcePlayerExitEvent.verify|verify} messages.
         * @param message ForcePlayerExitEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IForcePlayerExitEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForcePlayerExitEvent message, length delimited. Does not implicitly {@link pro.ForcePlayerExitEvent.verify|verify} messages.
         * @param message ForcePlayerExitEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IForcePlayerExitEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForcePlayerExitEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForcePlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.ForcePlayerExitEvent;

        /**
         * Decodes a ForcePlayerExitEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForcePlayerExitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.ForcePlayerExitEvent;

        /**
         * Verifies a ForcePlayerExitEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForcePlayerExitEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForcePlayerExitEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.ForcePlayerExitEvent;

        /**
         * Creates a plain object from a ForcePlayerExitEvent message. Also converts values to other types if specified.
         * @param message ForcePlayerExitEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.ForcePlayerExitEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForcePlayerExitEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastEvent. */
    interface IBroadcastEvent {

        /** BroadcastEvent message */
        message?: (pro.IMessage|null);
    }

    /** Represents a BroadcastEvent. */
    class BroadcastEvent implements IBroadcastEvent {

        /**
         * Constructs a new BroadcastEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBroadcastEvent);

        /** BroadcastEvent message. */
        public message?: (pro.IMessage|null);

        /**
         * Creates a new BroadcastEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastEvent instance
         */
        public static create(properties?: pro.IBroadcastEvent): pro.BroadcastEvent;

        /**
         * Encodes the specified BroadcastEvent message. Does not implicitly {@link pro.BroadcastEvent.verify|verify} messages.
         * @param message BroadcastEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBroadcastEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastEvent message, length delimited. Does not implicitly {@link pro.BroadcastEvent.verify|verify} messages.
         * @param message BroadcastEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBroadcastEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BroadcastEvent;

        /**
         * Decodes a BroadcastEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BroadcastEvent;

        /**
         * Verifies a BroadcastEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastEvent
         */
        public static fromObject(object: { [k: string]: any }): pro.BroadcastEvent;

        /**
         * Creates a plain object from a BroadcastEvent message. Also converts values to other types if specified.
         * @param message BroadcastEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BroadcastEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameState. */
    interface IGameState {

        /** GameState mode */
        mode?: (number|null);

        /** GameState state */
        state?: (number|null);

        /** GameState timeout */
        timeout?: (number|null);

        /** GameState inning */
        inning?: (string|null);

        /** GameState banker */
        banker?: (string|null);

        /** GameState maxRatio */
        maxRatio?: (number|null);

        /** GameState bankerRedPacket */
        bankerRedPacket?: (pro.IRedPacket|null);

        /** GameState gameConfig */
        gameConfig?: (pro.IGameConfig|null);

        /** GameState players */
        players?: (pro.IPlayer[]|null);
    }

    /** Represents a GameState. */
    class GameState implements IGameState {

        /**
         * Constructs a new GameState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGameState);

        /** GameState mode. */
        public mode: number;

        /** GameState state. */
        public state: number;

        /** GameState timeout. */
        public timeout: number;

        /** GameState inning. */
        public inning: string;

        /** GameState banker. */
        public banker: string;

        /** GameState maxRatio. */
        public maxRatio: number;

        /** GameState bankerRedPacket. */
        public bankerRedPacket?: (pro.IRedPacket|null);

        /** GameState gameConfig. */
        public gameConfig?: (pro.IGameConfig|null);

        /** GameState players. */
        public players: pro.IPlayer[];

        /**
         * Creates a new GameState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameState instance
         */
        public static create(properties?: pro.IGameState): pro.GameState;

        /**
         * Encodes the specified GameState message. Does not implicitly {@link pro.GameState.verify|verify} messages.
         * @param message GameState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameState message, length delimited. Does not implicitly {@link pro.GameState.verify|verify} messages.
         * @param message GameState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GameState;

        /**
         * Decodes a GameState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GameState;

        /**
         * Verifies a GameState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameState
         */
        public static fromObject(object: { [k: string]: any }): pro.GameState;

        /**
         * Creates a plain object from a GameState message. Also converts values to other types if specified.
         * @param message GameState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player accountName */
        accountName?: (string|null);

        /** Player name */
        name?: (string|null);

        /** Player gender */
        gender?: (number|null);

        /** Player balance */
        balance?: (number|null);

        /** Player avatar */
        avatar?: (string|null);

        /** Player redPacket */
        redPacket?: (pro.IRedPacket|null);

        /** Player bets */
        bets?: (pro.IBetRecord[]|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IPlayer);

        /** Player accountName. */
        public accountName: string;

        /** Player name. */
        public name: string;

        /** Player gender. */
        public gender: number;

        /** Player balance. */
        public balance: number;

        /** Player avatar. */
        public avatar: string;

        /** Player redPacket. */
        public redPacket?: (pro.IRedPacket|null);

        /** Player bets. */
        public bets: pro.IBetRecord[];

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: pro.IPlayer): pro.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link pro.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link pro.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): pro.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameConfig. */
    interface IGameConfig {

        /** GameConfig preservedBalance */
        preservedBalance?: (number|null);

        /** GameConfig betLimits */
        betLimits?: (pro.IGameLimitsConfig|null);

        /** GameConfig beneficialBankerConfigs */
        beneficialBankerConfigs?: (pro.IBeneficialBankerConfig[]|null);

        /** GameConfig straightAwardConfigs */
        straightAwardConfigs?: (pro.IStraightAwardConfig[]|null);

        /** GameConfig specialHandsAwardConfigs */
        specialHandsAwardConfigs?: (pro.ISpecialHandsAwardConfig[]|null);
    }

    /** Represents a GameConfig. */
    class GameConfig implements IGameConfig {

        /**
         * Constructs a new GameConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGameConfig);

        /** GameConfig preservedBalance. */
        public preservedBalance: number;

        /** GameConfig betLimits. */
        public betLimits?: (pro.IGameLimitsConfig|null);

        /** GameConfig beneficialBankerConfigs. */
        public beneficialBankerConfigs: pro.IBeneficialBankerConfig[];

        /** GameConfig straightAwardConfigs. */
        public straightAwardConfigs: pro.IStraightAwardConfig[];

        /** GameConfig specialHandsAwardConfigs. */
        public specialHandsAwardConfigs: pro.ISpecialHandsAwardConfig[];

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameConfig instance
         */
        public static create(properties?: pro.IGameConfig): pro.GameConfig;

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link pro.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link pro.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GameConfig;

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GameConfig;

        /**
         * Verifies a GameConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameConfig
         */
        public static fromObject(object: { [k: string]: any }): pro.GameConfig;

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @param message GameConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GameConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeneficialBankerConfig. */
    interface IBeneficialBankerConfig {

        /** BeneficialBankerConfig startTime */
        startTime?: (number|Long|null);

        /** BeneficialBankerConfig innings */
        innings?: (number|null);

        /** BeneficialBankerConfig bankerAmount */
        bankerAmount?: (number|null);
    }

    /** Represents a BeneficialBankerConfig. */
    class BeneficialBankerConfig implements IBeneficialBankerConfig {

        /**
         * Constructs a new BeneficialBankerConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBeneficialBankerConfig);

        /** BeneficialBankerConfig startTime. */
        public startTime: (number|Long);

        /** BeneficialBankerConfig innings. */
        public innings: number;

        /** BeneficialBankerConfig bankerAmount. */
        public bankerAmount: number;

        /**
         * Creates a new BeneficialBankerConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeneficialBankerConfig instance
         */
        public static create(properties?: pro.IBeneficialBankerConfig): pro.BeneficialBankerConfig;

        /**
         * Encodes the specified BeneficialBankerConfig message. Does not implicitly {@link pro.BeneficialBankerConfig.verify|verify} messages.
         * @param message BeneficialBankerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBeneficialBankerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeneficialBankerConfig message, length delimited. Does not implicitly {@link pro.BeneficialBankerConfig.verify|verify} messages.
         * @param message BeneficialBankerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBeneficialBankerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeneficialBankerConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeneficialBankerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BeneficialBankerConfig;

        /**
         * Decodes a BeneficialBankerConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeneficialBankerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BeneficialBankerConfig;

        /**
         * Verifies a BeneficialBankerConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeneficialBankerConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeneficialBankerConfig
         */
        public static fromObject(object: { [k: string]: any }): pro.BeneficialBankerConfig;

        /**
         * Creates a plain object from a BeneficialBankerConfig message. Also converts values to other types if specified.
         * @param message BeneficialBankerConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BeneficialBankerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeneficialBankerConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLimitsConfig. */
    interface IGameLimitsConfig {

        /** GameLimitsConfig playerMinBet */
        playerMinBet?: (number|null);

        /** GameLimitsConfig bankerMinBet */
        bankerMinBet?: (number|null);

        /** GameLimitsConfig bankerMaxBet */
        bankerMaxBet?: (number|null);

        /** GameLimitsConfig maxBets */
        maxBets?: (number|null);

        /** GameLimitsConfig maxBetRatio */
        maxBetRatio?: (number|null);
    }

    /** Represents a GameLimitsConfig. */
    class GameLimitsConfig implements IGameLimitsConfig {

        /**
         * Constructs a new GameLimitsConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGameLimitsConfig);

        /** GameLimitsConfig playerMinBet. */
        public playerMinBet: number;

        /** GameLimitsConfig bankerMinBet. */
        public bankerMinBet: number;

        /** GameLimitsConfig bankerMaxBet. */
        public bankerMaxBet: number;

        /** GameLimitsConfig maxBets. */
        public maxBets: number;

        /** GameLimitsConfig maxBetRatio. */
        public maxBetRatio: number;

        /**
         * Creates a new GameLimitsConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLimitsConfig instance
         */
        public static create(properties?: pro.IGameLimitsConfig): pro.GameLimitsConfig;

        /**
         * Encodes the specified GameLimitsConfig message. Does not implicitly {@link pro.GameLimitsConfig.verify|verify} messages.
         * @param message GameLimitsConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGameLimitsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLimitsConfig message, length delimited. Does not implicitly {@link pro.GameLimitsConfig.verify|verify} messages.
         * @param message GameLimitsConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGameLimitsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLimitsConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLimitsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GameLimitsConfig;

        /**
         * Decodes a GameLimitsConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLimitsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GameLimitsConfig;

        /**
         * Verifies a GameLimitsConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLimitsConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLimitsConfig
         */
        public static fromObject(object: { [k: string]: any }): pro.GameLimitsConfig;

        /**
         * Creates a plain object from a GameLimitsConfig message. Also converts values to other types if specified.
         * @param message GameLimitsConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GameLimitsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLimitsConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StraightAwardConfig. */
    interface IStraightAwardConfig {

        /** StraightAwardConfig numOfInning */
        numOfInning?: (number|null);

        /** StraightAwardConfig minBet */
        minBet?: (number|null);

        /** StraightAwardConfig amount */
        amount?: (number|null);
    }

    /** Represents a StraightAwardConfig. */
    class StraightAwardConfig implements IStraightAwardConfig {

        /**
         * Constructs a new StraightAwardConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IStraightAwardConfig);

        /** StraightAwardConfig numOfInning. */
        public numOfInning: number;

        /** StraightAwardConfig minBet. */
        public minBet: number;

        /** StraightAwardConfig amount. */
        public amount: number;

        /**
         * Creates a new StraightAwardConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StraightAwardConfig instance
         */
        public static create(properties?: pro.IStraightAwardConfig): pro.StraightAwardConfig;

        /**
         * Encodes the specified StraightAwardConfig message. Does not implicitly {@link pro.StraightAwardConfig.verify|verify} messages.
         * @param message StraightAwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IStraightAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StraightAwardConfig message, length delimited. Does not implicitly {@link pro.StraightAwardConfig.verify|verify} messages.
         * @param message StraightAwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IStraightAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StraightAwardConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StraightAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.StraightAwardConfig;

        /**
         * Decodes a StraightAwardConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StraightAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.StraightAwardConfig;

        /**
         * Verifies a StraightAwardConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StraightAwardConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StraightAwardConfig
         */
        public static fromObject(object: { [k: string]: any }): pro.StraightAwardConfig;

        /**
         * Creates a plain object from a StraightAwardConfig message. Also converts values to other types if specified.
         * @param message StraightAwardConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.StraightAwardConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StraightAwardConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialHandsAwardConfig. */
    interface ISpecialHandsAwardConfig {

        /** SpecialHandsAwardConfig minBet */
        minBet?: (number|null);

        /** SpecialHandsAwardConfig amount */
        amount?: (number|null);

        /** SpecialHandsAwardConfig settings */
        settings?: (string|null);
    }

    /** Represents a SpecialHandsAwardConfig. */
    class SpecialHandsAwardConfig implements ISpecialHandsAwardConfig {

        /**
         * Constructs a new SpecialHandsAwardConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ISpecialHandsAwardConfig);

        /** SpecialHandsAwardConfig minBet. */
        public minBet: number;

        /** SpecialHandsAwardConfig amount. */
        public amount: number;

        /** SpecialHandsAwardConfig settings. */
        public settings: string;

        /**
         * Creates a new SpecialHandsAwardConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpecialHandsAwardConfig instance
         */
        public static create(properties?: pro.ISpecialHandsAwardConfig): pro.SpecialHandsAwardConfig;

        /**
         * Encodes the specified SpecialHandsAwardConfig message. Does not implicitly {@link pro.SpecialHandsAwardConfig.verify|verify} messages.
         * @param message SpecialHandsAwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ISpecialHandsAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpecialHandsAwardConfig message, length delimited. Does not implicitly {@link pro.SpecialHandsAwardConfig.verify|verify} messages.
         * @param message SpecialHandsAwardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ISpecialHandsAwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpecialHandsAwardConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpecialHandsAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.SpecialHandsAwardConfig;

        /**
         * Decodes a SpecialHandsAwardConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpecialHandsAwardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.SpecialHandsAwardConfig;

        /**
         * Verifies a SpecialHandsAwardConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpecialHandsAwardConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialHandsAwardConfig
         */
        public static fromObject(object: { [k: string]: any }): pro.SpecialHandsAwardConfig;

        /**
         * Creates a plain object from a SpecialHandsAwardConfig message. Also converts values to other types if specified.
         * @param message SpecialHandsAwardConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.SpecialHandsAwardConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialHandsAwardConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedPacket. */
    interface IRedPacket {

        /** RedPacket amount */
        amount?: (number|null);

        /** RedPacket checked */
        checked?: (boolean|null);
    }

    /** Represents a RedPacket. */
    class RedPacket implements IRedPacket {

        /**
         * Constructs a new RedPacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IRedPacket);

        /** RedPacket amount. */
        public amount: number;

        /** RedPacket checked. */
        public checked: boolean;

        /**
         * Creates a new RedPacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPacket instance
         */
        public static create(properties?: pro.IRedPacket): pro.RedPacket;

        /**
         * Encodes the specified RedPacket message. Does not implicitly {@link pro.RedPacket.verify|verify} messages.
         * @param message RedPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IRedPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RedPacket message, length delimited. Does not implicitly {@link pro.RedPacket.verify|verify} messages.
         * @param message RedPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IRedPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.RedPacket;

        /**
         * Decodes a RedPacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RedPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.RedPacket;

        /**
         * Verifies a RedPacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RedPacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedPacket
         */
        public static fromObject(object: { [k: string]: any }): pro.RedPacket;

        /**
         * Creates a plain object from a RedPacket message. Also converts values to other types if specified.
         * @param message RedPacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.RedPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedPacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRecord. */
    interface IBetRecord {

        /** BetRecord type */
        type?: (number|null);

        /** BetRecord amount */
        amount?: (number|null);

        /** BetRecord time */
        time?: (number|Long|null);
    }

    /** Represents a BetRecord. */
    class BetRecord implements IBetRecord {

        /**
         * Constructs a new BetRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IBetRecord);

        /** BetRecord type. */
        public type: number;

        /** BetRecord amount. */
        public amount: number;

        /** BetRecord time. */
        public time: (number|Long);

        /**
         * Creates a new BetRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRecord instance
         */
        public static create(properties?: pro.IBetRecord): pro.BetRecord;

        /**
         * Encodes the specified BetRecord message. Does not implicitly {@link pro.BetRecord.verify|verify} messages.
         * @param message BetRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IBetRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRecord message, length delimited. Does not implicitly {@link pro.BetRecord.verify|verify} messages.
         * @param message BetRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IBetRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.BetRecord;

        /**
         * Decodes a BetRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.BetRecord;

        /**
         * Verifies a BetRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRecord
         */
        public static fromObject(object: { [k: string]: any }): pro.BetRecord;

        /**
         * Creates a plain object from a BetRecord message. Also converts values to other types if specified.
         * @param message BetRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.BetRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecord. */
    interface IGameRecord {

        /** GameRecord inning */
        inning?: (string|null);

        /** GameRecord playerBet */
        playerBet?: (number|null);

        /** GameRecord bankerBet */
        bankerBet?: (number|null);

        /** GameRecord isBanker */
        isBanker?: (boolean|null);

        /** GameRecord betTime */
        betTime?: (number|Long|null);

        /** GameRecord redPacket */
        redPacket?: (number|null);

        /** GameRecord winAmount */
        winAmount?: (number|null);

        /** GameRecord gameResult */
        gameResult?: (pro.IGameResult|null);
    }

    /** Represents a GameRecord. */
    class GameRecord implements IGameRecord {

        /**
         * Constructs a new GameRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGameRecord);

        /** GameRecord inning. */
        public inning: string;

        /** GameRecord playerBet. */
        public playerBet: number;

        /** GameRecord bankerBet. */
        public bankerBet: number;

        /** GameRecord isBanker. */
        public isBanker: boolean;

        /** GameRecord betTime. */
        public betTime: (number|Long);

        /** GameRecord redPacket. */
        public redPacket: number;

        /** GameRecord winAmount. */
        public winAmount: number;

        /** GameRecord gameResult. */
        public gameResult?: (pro.IGameResult|null);

        /**
         * Creates a new GameRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecord instance
         */
        public static create(properties?: pro.IGameRecord): pro.GameRecord;

        /**
         * Encodes the specified GameRecord message. Does not implicitly {@link pro.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecord message, length delimited. Does not implicitly {@link pro.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GameRecord;

        /**
         * Decodes a GameRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GameRecord;

        /**
         * Verifies a GameRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecord
         */
        public static fromObject(object: { [k: string]: any }): pro.GameRecord;

        /**
         * Creates a plain object from a GameRecord message. Also converts values to other types if specified.
         * @param message GameRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GameRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult inning */
        inning?: (string|null);

        /** GameResult numOfRedPacket */
        numOfRedPacket?: (number|null);

        /** GameResult totalRedPacket */
        totalRedPacket?: (number|null);

        /** GameResult startBetTime */
        startBetTime?: (number|Long|null);

        /** GameResult endBetTime */
        endBetTime?: (number|Long|null);

        /** GameResult bankerRedPacket */
        bankerRedPacket?: (number|null);

        /** GameResult bankerWinAmount */
        bankerWinAmount?: (number|null);

        /** GameResult systemWinAmount */
        systemWinAmount?: (number|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IGameResult);

        /** GameResult inning. */
        public inning: string;

        /** GameResult numOfRedPacket. */
        public numOfRedPacket: number;

        /** GameResult totalRedPacket. */
        public totalRedPacket: number;

        /** GameResult startBetTime. */
        public startBetTime: (number|Long);

        /** GameResult endBetTime. */
        public endBetTime: (number|Long);

        /** GameResult bankerRedPacket. */
        public bankerRedPacket: number;

        /** GameResult bankerWinAmount. */
        public bankerWinAmount: number;

        /** GameResult systemWinAmount. */
        public systemWinAmount: number;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: pro.IGameResult): pro.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link pro.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link pro.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): pro.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Settlement. */
    interface ISettlement {

        /** Settlement accountName */
        accountName?: (string|null);

        /** Settlement redPacket */
        redPacket?: (number|null);

        /** Settlement winAmount */
        winAmount?: (number|null);

        /** Settlement balance */
        balance?: (number|null);
    }

    /** Represents a Settlement. */
    class Settlement implements ISettlement {

        /**
         * Constructs a new Settlement.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ISettlement);

        /** Settlement accountName. */
        public accountName: string;

        /** Settlement redPacket. */
        public redPacket: number;

        /** Settlement winAmount. */
        public winAmount: number;

        /** Settlement balance. */
        public balance: number;

        /**
         * Creates a new Settlement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Settlement instance
         */
        public static create(properties?: pro.ISettlement): pro.Settlement;

        /**
         * Encodes the specified Settlement message. Does not implicitly {@link pro.Settlement.verify|verify} messages.
         * @param message Settlement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ISettlement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Settlement message, length delimited. Does not implicitly {@link pro.Settlement.verify|verify} messages.
         * @param message Settlement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ISettlement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Settlement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.Settlement;

        /**
         * Decodes a Settlement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.Settlement;

        /**
         * Verifies a Settlement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Settlement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Settlement
         */
        public static fromObject(object: { [k: string]: any }): pro.Settlement;

        /**
         * Creates a plain object from a Settlement message. Also converts values to other types if specified.
         * @param message Settlement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.Settlement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Settlement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Award. */
    interface IAward {

        /** Award id */
        id?: (number|Long|null);

        /** Award award */
        award?: (number|null);

        /** Award param */
        param?: (string|null);

        /** Award amount */
        amount?: (number|null);
    }

    /** Represents an Award. */
    class Award implements IAward {

        /**
         * Constructs a new Award.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IAward);

        /** Award id. */
        public id: (number|Long);

        /** Award award. */
        public award: number;

        /** Award param. */
        public param: string;

        /** Award amount. */
        public amount: number;

        /**
         * Creates a new Award instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Award instance
         */
        public static create(properties?: pro.IAward): pro.Award;

        /**
         * Encodes the specified Award message. Does not implicitly {@link pro.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link pro.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.Award;

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.Award;

        /**
         * Verifies an Award message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Award
         */
        public static fromObject(object: { [k: string]: any }): pro.Award;

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @param message Award
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Award to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StraightStatus. */
    interface IStraightStatus {

        /** StraightStatus numOfInning */
        numOfInning?: (number|null);

        /** StraightStatus minBet */
        minBet?: (number|null);
    }

    /** Represents a StraightStatus. */
    class StraightStatus implements IStraightStatus {

        /**
         * Constructs a new StraightStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IStraightStatus);

        /** StraightStatus numOfInning. */
        public numOfInning: number;

        /** StraightStatus minBet. */
        public minBet: number;

        /**
         * Creates a new StraightStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StraightStatus instance
         */
        public static create(properties?: pro.IStraightStatus): pro.StraightStatus;

        /**
         * Encodes the specified StraightStatus message. Does not implicitly {@link pro.StraightStatus.verify|verify} messages.
         * @param message StraightStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IStraightStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StraightStatus message, length delimited. Does not implicitly {@link pro.StraightStatus.verify|verify} messages.
         * @param message StraightStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IStraightStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StraightStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StraightStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.StraightStatus;

        /**
         * Decodes a StraightStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StraightStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.StraightStatus;

        /**
         * Verifies a StraightStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StraightStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StraightStatus
         */
        public static fromObject(object: { [k: string]: any }): pro.StraightStatus;

        /**
         * Creates a plain object from a StraightStatus message. Also converts values to other types if specified.
         * @param message StraightStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.StraightStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StraightStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialHandsStatus. */
    interface ISpecialHandsStatus {

        /** SpecialHandsStatus kind */
        kind?: (number|null);

        /** SpecialHandsStatus numOfHands */
        numOfHands?: (number|null);

        /** SpecialHandsStatus minBet */
        minBet?: (number|null);
    }

    /** Represents a SpecialHandsStatus. */
    class SpecialHandsStatus implements ISpecialHandsStatus {

        /**
         * Constructs a new SpecialHandsStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.ISpecialHandsStatus);

        /** SpecialHandsStatus kind. */
        public kind: number;

        /** SpecialHandsStatus numOfHands. */
        public numOfHands: number;

        /** SpecialHandsStatus minBet. */
        public minBet: number;

        /**
         * Creates a new SpecialHandsStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpecialHandsStatus instance
         */
        public static create(properties?: pro.ISpecialHandsStatus): pro.SpecialHandsStatus;

        /**
         * Encodes the specified SpecialHandsStatus message. Does not implicitly {@link pro.SpecialHandsStatus.verify|verify} messages.
         * @param message SpecialHandsStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.ISpecialHandsStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpecialHandsStatus message, length delimited. Does not implicitly {@link pro.SpecialHandsStatus.verify|verify} messages.
         * @param message SpecialHandsStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.ISpecialHandsStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpecialHandsStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpecialHandsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.SpecialHandsStatus;

        /**
         * Decodes a SpecialHandsStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpecialHandsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.SpecialHandsStatus;

        /**
         * Verifies a SpecialHandsStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpecialHandsStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialHandsStatus
         */
        public static fromObject(object: { [k: string]: any }): pro.SpecialHandsStatus;

        /**
         * Creates a plain object from a SpecialHandsStatus message. Also converts values to other types if specified.
         * @param message SpecialHandsStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.SpecialHandsStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialHandsStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message from */
        from?: (string|null);

        /** Message content */
        content?: (string|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: pro.IMessage);

        /** Message from. */
        public from: string;

        /** Message content. */
        public content: string;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: pro.IMessage): pro.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link pro.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pro.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link pro.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pro.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pro.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pro.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): pro.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pro.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        Success = 0,
        InsufficientFund = -1001,
        NotAllowed = -1002,
        Unknown = -1003
    }
}
