[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LookupOptions

# Interface: LookupOptions

## Properties

### all?

> `optional` **all**: `boolean`

When `true`, the callback returns all resolved addresses in an array. Otherwise, returns a single address.

#### Default

```ts
false
```

#### Defined in

node\_modules/@types/node/dns.d.ts:82

***

### family?

> `optional` **family**: `number` \| `"IPv4"` \| `"IPv6"`

The record family. Must be `4`, `6`, or `0`. For backward compatibility reasons, `'IPv4'` and `'IPv6'` are interpreted
as `4` and `6` respectively. The value 0 indicates that either an IPv4 or IPv6 address is returned. If the value `0` is used
with `{ all: true } (see below)`, both IPv4 and IPv6 addresses are returned.

#### Default

```ts
0
```

#### Defined in

node\_modules/@types/node/dns.d.ts:72

***

### hints?

> `optional` **hints**: `number`

One or more [supported `getaddrinfo`](https://nodejs.org/docs/latest-v22.x/api/dns.html#supported-getaddrinfo-flags) flags. Multiple flags may be
passed by bitwise `OR`ing their values.

#### Defined in

node\_modules/@types/node/dns.d.ts:77

***

### order?

> `optional` **order**: `"ipv4first"` \| `"ipv6first"` \| `"verbatim"`

When `verbatim`, the resolved addresses are return unsorted. When `ipv4first`, the resolved addresses are sorted
by placing IPv4 addresses before IPv6 addresses. When `ipv6first`, the resolved addresses are sorted by placing IPv6
addresses before IPv4 addresses. Default value is configurable using
setDefaultResultOrder or [`--dns-result-order`](https://nodejs.org/docs/latest-v22.x/api/cli.html#--dns-result-orderorder).

#### Default

`verbatim` (addresses are not reordered)

#### Since

v22.1.0

#### Defined in

node\_modules/@types/node/dns.d.ts:91

***

### ~~verbatim?~~

> `optional` **verbatim**: `boolean`

When `true`, the callback receives IPv4 and IPv6 addresses in the order the DNS resolver returned them. When `false`, IPv4
addresses are placed before IPv6 addresses. This option will be deprecated in favor of `order`. When both are specified,
`order` has higher precedence. New code should only use `order`. Default value is configurable using setDefaultResultOrder

#### Default

```ts
true (addresses are not reordered)
```

#### Deprecated

Please use `order` option

#### Defined in

node\_modules/@types/node/dns.d.ts:99
