[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](internal_.md) / [internal](internal_.internal.md) / pipeline

# Namespace: pipeline

[<internal>](internal_.md).[internal](internal_.internal.md).pipeline

## Table of contents

### Functions

- [\_\_promisify\_\_](internal_.internal.pipeline.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**<`A`, `B`\>(`source`, `destination`, `options?`): [`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/internal_.internal.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options?`): [`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/internal_.internal.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options?`): [`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T1`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/internal_.internal.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options?`): [`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T2`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/internal_.internal.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options?`): [`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)<`T3`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)<`string` \| [`Buffer`](internal_.md#buffer)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)<`string` \| [`Buffer`](internal_.md#buffer), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](../interfaces/internal_.internal.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](internal_.internal.md#pipelinepromise)<`B`\>

▸ **__promisify__**(`streams`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md))[] |
| `options?` | [`PipelineOptions`](../interfaces/internal_.internal.PipelineOptions.md) |

#### Returns

`Promise`<`void`\>

▸ **__promisify__**(`stream1`, `stream2`, ...`streams`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |
| `stream2` | [`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](../interfaces/internal_.WritableStream-1.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) \| [`PipelineOptions`](../interfaces/internal_.internal.PipelineOptions.md))[] |

#### Returns

`Promise`<`void`\>
