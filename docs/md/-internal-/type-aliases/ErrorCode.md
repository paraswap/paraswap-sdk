[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ErrorCode

# Type Alias: ErrorCode

> **ErrorCode**: `"UNKNOWN_ERROR"` \| `"NOT_IMPLEMENTED"` \| `"UNSUPPORTED_OPERATION"` \| `"NETWORK_ERROR"` \| `"SERVER_ERROR"` \| `"TIMEOUT"` \| `"BAD_DATA"` \| `"CANCELLED"` \| `"BUFFER_OVERRUN"` \| `"NUMERIC_FAULT"` \| `"INVALID_ARGUMENT"` \| `"MISSING_ARGUMENT"` \| `"UNEXPECTED_ARGUMENT"` \| `"VALUE_MISMATCH"` \| `"CALL_EXCEPTION"` \| `"INSUFFICIENT_FUNDS"` \| `"NONCE_EXPIRED"` \| `"REPLACEMENT_UNDERPRICED"` \| `"TRANSACTION_REPLACED"` \| `"UNCONFIGURED_NAME"` \| `"OFFCHAIN_FAULT"` \| `"ACTION_REJECTED"`

All errors emitted by ethers have an **ErrorCode** to help
 identify and coalesce errors to simplify programmatic analysis.

 Each **ErrorCode** is the %%code%% proerty of a coresponding
 [[EthersError]].

 **Generic Errors**

 **``"UNKNOWN_ERROR"``** - see [[UnknownError]]

 **``"NOT_IMPLEMENTED"``** - see [[NotImplementedError]]

 **``"UNSUPPORTED_OPERATION"``** - see [[UnsupportedOperationError]]

 **``"NETWORK_ERROR"``** - see [[NetworkError]]

 **``"SERVER_ERROR"``** - see [[ServerError]]

 **``"TIMEOUT"``** - see [[TimeoutError]]

 **``"BAD_DATA"``** - see [[BadDataError]]

 **``"CANCELLED"``** - see [[CancelledError]]

 **Operational Errors**

 **``"BUFFER_OVERRUN"``** - see [[BufferOverrunError]]

 **``"NUMERIC_FAULT"``** - see [[NumericFaultError]]

 **Argument Errors**

 **``"INVALID_ARGUMENT"``** - see [[InvalidArgumentError]]

 **``"MISSING_ARGUMENT"``** - see [[MissingArgumentError]]

 **``"UNEXPECTED_ARGUMENT"``** - see [[UnexpectedArgumentError]]

 **``"VALUE_MISMATCH"``** - //unused//

 **Blockchain Errors**

 **``"CALL_EXCEPTION"``** - see [[CallExceptionError]]

 **``"INSUFFICIENT_FUNDS"``** - see [[InsufficientFundsError]]

 **``"NONCE_EXPIRED"``** - see [[NonceExpiredError]]

 **``"REPLACEMENT_UNDERPRICED"``** - see [[ReplacementUnderpricedError]]

 **``"TRANSACTION_REPLACED"``** - see [[TransactionReplacedError]]

 **``"UNCONFIGURED_NAME"``** - see [[UnconfiguredNameError]]

 **``"OFFCHAIN_FAULT"``** - see [[OffchainFaultError]]

 **User Interaction Errors**

 **``"ACTION_REJECTED"``** - see [[ActionRejectedError]]

## Defined in

node\_modules/ethers/lib.commonjs/utils/errors.d.ts:80
