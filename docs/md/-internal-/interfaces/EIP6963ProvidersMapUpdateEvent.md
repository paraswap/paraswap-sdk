[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP6963ProvidersMapUpdateEvent

# Interface: EIP6963ProvidersMapUpdateEvent

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent)

## Extends

- [`CustomEvent`](CustomEvent.md)

## Properties

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`AT_TARGET`](CustomEvent.md#at_target)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8192

***

### bubbles

> `readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`bubbles`](CustomEvent.md#bubbles)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8087

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`BUBBLING_PHASE`](CustomEvent.md#bubbling_phase)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8193

***

### cancelable

> `readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`cancelable`](CustomEvent.md#cancelable)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8099

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`cancelBubble`](CustomEvent.md#cancelbubble)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8093

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`CAPTURING_PHASE`](CustomEvent.md#capturing_phase)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8191

***

### composed

> `readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`composed`](CustomEvent.md#composed)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8105

***

### currentTarget

> `readonly` **currentTarget**: `null` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`currentTarget`](CustomEvent.md#currenttarget)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8111

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`defaultPrevented`](CustomEvent.md#defaultprevented)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8117

***

### detail

> **detail**: [`EIP6963ProviderResponse`](../type-aliases/EIP6963ProviderResponse.md)

Returns any custom data event was created with. Typically used for synthetic events.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)

#### Overrides

[`CustomEvent`](CustomEvent.md).[`detail`](CustomEvent.md#detail)

#### Defined in

node\_modules/web3/lib/commonjs/web3\_eip6963.d.ts:28

***

### eventPhase

> `readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`eventPhase`](CustomEvent.md#eventphase)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8123

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`isTrusted`](CustomEvent.md#istrusted)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8129

***

### NONE

> `readonly` **NONE**: `0`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`NONE`](CustomEvent.md#none)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8190

***

### ~~returnValue~~

> **returnValue**: `boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`returnValue`](CustomEvent.md#returnvalue)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8135

***

### ~~srcElement~~

> `readonly` **srcElement**: `null` \| `EventTarget`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`srcElement`](CustomEvent.md#srcelement)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8141

***

### target

> `readonly` **target**: `null` \| `EventTarget`

Returns the object to which event is dispatched (its target).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`target`](CustomEvent.md#target)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8147

***

### timeStamp

> `readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`timeStamp`](CustomEvent.md#timestamp)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8153

***

### type

> **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

#### Overrides

[`CustomEvent`](CustomEvent.md).[`type`](CustomEvent.md#type)

#### Defined in

node\_modules/web3/lib/commonjs/web3\_eip6963.d.ts:27

## Methods

### composedPath()

> **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

`EventTarget`[]

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`composedPath`](CustomEvent.md#composedpath)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8165

***

### ~~initCustomEvent()~~

> **initCustomEvent**(`type`, `bubbles`?, `cancelable`?, `detail`?): `void`

#### Parameters

• **type**: `string`

• **bubbles?**: `boolean`

• **cancelable?**: `boolean`

• **detail?**: `any`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`initCustomEvent`](CustomEvent.md#initcustomevent)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:6051

***

### ~~initEvent()~~

> **initEvent**(`type`, `bubbles`?, `cancelable`?): `void`

#### Parameters

• **type**: `string`

• **bubbles?**: `boolean`

• **cancelable?**: `boolean`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`initEvent`](CustomEvent.md#initevent)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8171

***

### preventDefault()

> **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`preventDefault`](CustomEvent.md#preventdefault)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8177

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`stopImmediatePropagation`](CustomEvent.md#stopimmediatepropagation)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8183

***

### stopPropagation()

> **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`stopPropagation`](CustomEvent.md#stoppropagation)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8189
