[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / ProviderEvent

# Type Alias: ProviderEvent

> **ProviderEvent**: `string` \| (`string` \| `string`[])[] \| [`EventFilter`](../interfaces/EventFilter.md) \| [`OrphanFilter`](OrphanFilter.md)

A **ProviderEvent** provides the types of events that can be subscribed
 to on a [[Provider]].

 Each provider may include additional possible events it supports, but
 the most commonly supported are:

 **``"block"``** - calls the listener with the current block number on each
 new block.

 **``"error"``** - calls the listener on each async error that occurs during
 the event loop, with the error.

 **``"debug"``** - calls the listener on debug events, which can be used to
 troubleshoot network errors, provider problems, etc.

 **``transaction hash``** - calls the listener on each block after the
 transaction has been mined; generally ``.once`` is more appropriate for
 this event.

 **``Array``** - calls the listener on each log that matches the filter.

 [[EventFilter]] - calls the listener with each matching log

## Defined in

node\_modules/ethers/lib.commonjs/providers/provider.d.ts:1054
