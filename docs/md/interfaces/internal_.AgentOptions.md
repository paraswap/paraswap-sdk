[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AgentOptions

# Interface: AgentOptions

[<internal>](../modules/internal_.md).AgentOptions

Make all properties in T optional

## Hierarchy

- [`AgentOptions`](internal_.AgentOptions-1.md)

- [`ConnectionOptions`](internal_.ConnectionOptions.md)

  ↳ **`AgentOptions`**

## Table of contents

### Properties

- [ALPNProtocols](internal_.AgentOptions.md#alpnprotocols)
- [SNICallback](internal_.AgentOptions.md#snicallback)
- [ca](internal_.AgentOptions.md#ca)
- [cert](internal_.AgentOptions.md#cert)
- [checkServerIdentity](internal_.AgentOptions.md#checkserveridentity)
- [ciphers](internal_.AgentOptions.md#ciphers)
- [clientCertEngine](internal_.AgentOptions.md#clientcertengine)
- [crl](internal_.AgentOptions.md#crl)
- [dhparam](internal_.AgentOptions.md#dhparam)
- [ecdhCurve](internal_.AgentOptions.md#ecdhcurve)
- [enableTrace](internal_.AgentOptions.md#enabletrace)
- [family](internal_.AgentOptions.md#family)
- [hints](internal_.AgentOptions.md#hints)
- [honorCipherOrder](internal_.AgentOptions.md#honorcipherorder)
- [host](internal_.AgentOptions.md#host)
- [keepAlive](internal_.AgentOptions.md#keepalive)
- [keepAliveMsecs](internal_.AgentOptions.md#keepalivemsecs)
- [key](internal_.AgentOptions.md#key)
- [localAddress](internal_.AgentOptions.md#localaddress)
- [localPort](internal_.AgentOptions.md#localport)
- [lookup](internal_.AgentOptions.md#lookup)
- [maxCachedSessions](internal_.AgentOptions.md#maxcachedsessions)
- [maxFreeSockets](internal_.AgentOptions.md#maxfreesockets)
- [maxSockets](internal_.AgentOptions.md#maxsockets)
- [maxTotalSockets](internal_.AgentOptions.md#maxtotalsockets)
- [maxVersion](internal_.AgentOptions.md#maxversion)
- [minDHSize](internal_.AgentOptions.md#mindhsize)
- [minVersion](internal_.AgentOptions.md#minversion)
- [onread](internal_.AgentOptions.md#onread)
- [passphrase](internal_.AgentOptions.md#passphrase)
- [path](internal_.AgentOptions.md#path)
- [pfx](internal_.AgentOptions.md#pfx)
- [port](internal_.AgentOptions.md#port)
- [privateKeyEngine](internal_.AgentOptions.md#privatekeyengine)
- [privateKeyIdentifier](internal_.AgentOptions.md#privatekeyidentifier)
- [rejectUnauthorized](internal_.AgentOptions.md#rejectunauthorized)
- [requestCert](internal_.AgentOptions.md#requestcert)
- [scheduling](internal_.AgentOptions.md#scheduling)
- [secureContext](internal_.AgentOptions.md#securecontext)
- [secureOptions](internal_.AgentOptions.md#secureoptions)
- [secureProtocol](internal_.AgentOptions.md#secureprotocol)
- [servername](internal_.AgentOptions.md#servername)
- [session](internal_.AgentOptions.md#session)
- [sessionIdContext](internal_.AgentOptions.md#sessionidcontext)
- [sessionTimeout](internal_.AgentOptions.md#sessiontimeout)
- [sigalgs](internal_.AgentOptions.md#sigalgs)
- [socket](internal_.AgentOptions.md#socket)
- [ticketKeys](internal_.AgentOptions.md#ticketkeys)
- [timeout](internal_.AgentOptions.md#timeout)

### Methods

- [pskCallback](internal_.AgentOptions.md#pskcallback)

## Properties

### ALPNProtocols

• `Optional` **ALPNProtocols**: `string`[] \| `Uint8Array` \| `Uint8Array`[]

An array of strings or a Buffer naming possible ALPN protocols.
(Protocols should be ordered by their priority.)

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[ALPNProtocols](internal_.ConnectionOptions.md#alpnprotocols)

#### Defined in

node_modules/@types/node/tls.d.ts:447

___

### SNICallback

• `Optional` **SNICallback**: (`servername`: `string`, `cb`: (`err`: ``null`` \| [`Error`](../modules/internal_.md#error), `ctx?`: [`SecureContext`](internal_.SecureContext.md)) => `void`) => `void`

#### Type declaration

▸ (`servername`, `cb`): `void`

SNICallback(servername, cb) <Function> A function that will be
called if the client supports SNI TLS extension. Two arguments
will be passed when called: servername and cb. SNICallback should
invoke cb(null, ctx), where ctx is a SecureContext instance.
(tls.createSecureContext(...) can be used to get a proper
SecureContext.) If SNICallback wasn't provided the default callback
with high-level API will be used (see below).

##### Parameters

| Name | Type |
| :------ | :------ |
| `servername` | `string` |
| `cb` | (`err`: ``null`` \| [`Error`](../modules/internal_.md#error), `ctx?`: [`SecureContext`](internal_.SecureContext.md)) => `void` |

##### Returns

`void`

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[SNICallback](internal_.ConnectionOptions.md#snicallback)

#### Defined in

node_modules/@types/node/tls.d.ts:457

___

### ca

• `Optional` **ca**: `string` \| [`Buffer`](../modules/internal_.md#buffer) \| (`string` \| [`Buffer`](../modules/internal_.md#buffer))[]

Optionally override the trusted CA certificates. Default is to trust
the well-known CAs curated by Mozilla. Mozilla's CAs are completely
replaced when CAs are explicitly specified using this option.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[ca](internal_.ConnectionOptions.md#ca)

#### Defined in

node_modules/@types/node/tls.d.ts:656

___

### cert

• `Optional` **cert**: `string` \| [`Buffer`](../modules/internal_.md#buffer) \| (`string` \| [`Buffer`](../modules/internal_.md#buffer))[]

Cert chains in PEM format. One cert chain should be provided per
 private key. Each cert chain should consist of the PEM formatted
 certificate for a provided private key, followed by the PEM
 formatted intermediate certificates (if any), in order, and not
 including the root CA (the root CA must be pre-known to the peer,
 see ca). When providing multiple cert chains, they do not have to
 be in the same order as their private keys in key. If the
 intermediate certificates are not provided, the peer will not be
 able to validate the certificate, and the handshake will fail.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[cert](internal_.ConnectionOptions.md#cert)

#### Defined in

node_modules/@types/node/tls.d.ts:668

___

### checkServerIdentity

• `Optional` **checkServerIdentity**: (`hostname`: `string`, `cert`: [`PeerCertificate`](internal_.PeerCertificate.md)) => [`Error`](../modules/internal_.md#error) \| `undefined`

#### Type declaration

▸ (`hostname`, `cert`): [`Error`](../modules/internal_.md#error) \| `undefined`

Verifies the certificate `cert` is issued to `hostname`.

Returns [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object, populating it with `reason`, `host`, and `cert` on
failure. On success, returns [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type).

This function can be overwritten by providing alternative function as part of
the `options.checkServerIdentity` option passed to `tls.connect()`. The
overwriting function can call `tls.checkServerIdentity()` of course, to augment
the checks done with additional verification.

This function is only called if the certificate passed all other checks, such as
being issued by trusted CA (`options.ca`).

**`Since`**

v0.8.4

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostname` | `string` | The host name or IP address to verify the certificate against. |
| `cert` | [`PeerCertificate`](internal_.PeerCertificate.md) | A `certificate object` representing the peer's certificate. |

##### Returns

[`Error`](../modules/internal_.md#error) \| `undefined`

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[checkServerIdentity](internal_.ConnectionOptions.md#checkserveridentity)

#### Defined in

node_modules/@types/node/tls.d.ts:521

___

### ciphers

• `Optional` **ciphers**: `string`

Cipher suite specification, replacing the default. For more
information, see modifying the default cipher suite. Permitted
ciphers can be obtained via tls.getCiphers(). Cipher names must be
uppercased in order for OpenSSL to accept them.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[ciphers](internal_.ConnectionOptions.md#ciphers)

#### Defined in

node_modules/@types/node/tls.d.ts:682

___

### clientCertEngine

• `Optional` **clientCertEngine**: `string`

Name of an OpenSSL engine which can provide the client certificate.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[clientCertEngine](internal_.ConnectionOptions.md#clientcertengine)

#### Defined in

node_modules/@types/node/tls.d.ts:686

___

### crl

• `Optional` **crl**: `string` \| [`Buffer`](../modules/internal_.md#buffer) \| (`string` \| [`Buffer`](../modules/internal_.md#buffer))[]

PEM formatted CRLs (Certificate Revocation Lists).

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[crl](internal_.ConnectionOptions.md#crl)

#### Defined in

node_modules/@types/node/tls.d.ts:690

___

### dhparam

• `Optional` **dhparam**: `string` \| [`Buffer`](../modules/internal_.md#buffer)

Diffie Hellman parameters, required for Perfect Forward Secrecy. Use
openssl dhparam to create the parameters. The key length must be
greater than or equal to 1024 bits or else an error will be thrown.
Although 1024 bits is permissible, use 2048 bits or larger for
stronger security. If omitted or invalid, the parameters are
silently discarded and DHE ciphers will not be available.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[dhparam](internal_.ConnectionOptions.md#dhparam)

#### Defined in

node_modules/@types/node/tls.d.ts:699

___

### ecdhCurve

• `Optional` **ecdhCurve**: `string`

A string describing a named curve or a colon separated list of curve
NIDs or names, for example P-521:P-384:P-256, to use for ECDH key
agreement. Set to auto to select the curve automatically. Use
crypto.getCurves() to obtain a list of available curve names. On
recent releases, openssl ecparam -list_curves will also display the
name and description of each available elliptic curve. Default:
tls.DEFAULT_ECDH_CURVE.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[ecdhCurve](internal_.ConnectionOptions.md#ecdhcurve)

#### Defined in

node_modules/@types/node/tls.d.ts:709

___

### enableTrace

• `Optional` **enableTrace**: `boolean`

When enabled, TLS packet trace information is written to `stderr`. This can be
used to debug TLS connection problems.

**`Default`**

false

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[enableTrace](internal_.ConnectionOptions.md#enabletrace)

#### Defined in

node_modules/@types/node/tls.d.ts:436

___

### family

• `Optional` **family**: `number`

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[family](internal_.AgentOptions-1.md#family)

#### Defined in

node_modules/@types/node/net.d.ts:55

___

### hints

• `Optional` **hints**: `number`

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[hints](internal_.AgentOptions-1.md#hints)

#### Defined in

node_modules/@types/node/net.d.ts:54

___

### honorCipherOrder

• `Optional` **honorCipherOrder**: `boolean`

Attempt to use the server's cipher suite preferences instead of the
client's. When true, causes SSL_OP_CIPHER_SERVER_PREFERENCE to be
set in secureOptions

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[honorCipherOrder](internal_.ConnectionOptions.md#honorcipherorder)

#### Defined in

node_modules/@types/node/tls.d.ts:715

___

### host

• `Optional` **host**: `string`

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[host](internal_.ConnectionOptions.md#host)

#### Defined in

node_modules/@types/node/net.d.ts:51

___

### keepAlive

• `Optional` **keepAlive**: `boolean`

Keep sockets around in a pool to be used by other requests in the future. Default = false

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[keepAlive](internal_.AgentOptions-1.md#keepalive)

#### Defined in

node_modules/@types/node/http.d.ts:985

___

### keepAliveMsecs

• `Optional` **keepAliveMsecs**: `number`

When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
Only relevant if keepAlive is set to true.

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[keepAliveMsecs](internal_.AgentOptions-1.md#keepalivemsecs)

#### Defined in

node_modules/@types/node/http.d.ts:990

___

### key

• `Optional` **key**: `string` \| [`Buffer`](../modules/internal_.md#buffer) \| (`string` \| [`Buffer`](../modules/internal_.md#buffer) \| [`KeyObject`](internal_.KeyObject.md))[]

Private keys in PEM format. PEM allows the option of private keys
being encrypted. Encrypted keys will be decrypted with
options.passphrase. Multiple keys using different algorithms can be
provided either as an array of unencrypted key strings or buffers,
or an array of objects in the form {pem: <string|buffer>[,
passphrase: <string>]}. The object form can only occur in an array.
object.passphrase is optional. Encrypted keys will be decrypted with
object.passphrase if provided, or options.passphrase if it is not.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[key](internal_.ConnectionOptions.md#key)

#### Defined in

node_modules/@types/node/tls.d.ts:726

___

### localAddress

• `Optional` **localAddress**: `string`

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[localAddress](internal_.AgentOptions-1.md#localaddress)

#### Defined in

node_modules/@types/node/net.d.ts:52

___

### localPort

• `Optional` **localPort**: `number`

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[localPort](internal_.AgentOptions-1.md#localport)

#### Defined in

node_modules/@types/node/net.d.ts:53

___

### lookup

• `Optional` **lookup**: [`LookupFunction`](../modules/internal_.md#lookupfunction)

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[lookup](internal_.ConnectionOptions.md#lookup)

#### Defined in

node_modules/@types/node/net.d.ts:56

___

### maxCachedSessions

• `Optional` **maxCachedSessions**: `number`

#### Defined in

node_modules/@types/node/https.d.ts:19

___

### maxFreeSockets

• `Optional` **maxFreeSockets**: `number`

Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[maxFreeSockets](internal_.AgentOptions-1.md#maxfreesockets)

#### Defined in

node_modules/@types/node/http.d.ts:1002

___

### maxSockets

• `Optional` **maxSockets**: `number`

Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[maxSockets](internal_.AgentOptions-1.md#maxsockets)

#### Defined in

node_modules/@types/node/http.d.ts:994

___

### maxTotalSockets

• `Optional` **maxTotalSockets**: `number`

Maximum number of sockets allowed for all hosts in total. Each request will use a new socket until the maximum is reached. Default: Infinity.

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[maxTotalSockets](internal_.AgentOptions-1.md#maxtotalsockets)

#### Defined in

node_modules/@types/node/http.d.ts:998

___

### maxVersion

• `Optional` **maxVersion**: [`SecureVersion`](../modules/internal_.md#secureversion)

Optionally set the maximum TLS version to allow. One
of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
`secureProtocol` option, use one or the other.
**Default:** `'TLSv1.3'`, unless changed using CLI options. Using
`--tls-max-v1.2` sets the default to `'TLSv1.2'`. Using `--tls-max-v1.3` sets the default to
`'TLSv1.3'`. If multiple of the options are provided, the highest maximum is used.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[maxVersion](internal_.ConnectionOptions.md#maxversion)

#### Defined in

node_modules/@types/node/tls.d.ts:746

___

### minDHSize

• `Optional` **minDHSize**: `number`

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[minDHSize](internal_.ConnectionOptions.md#mindhsize)

#### Defined in

node_modules/@types/node/tls.d.ts:524

___

### minVersion

• `Optional` **minVersion**: [`SecureVersion`](../modules/internal_.md#secureversion)

Optionally set the minimum TLS version to allow. One
of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
`secureProtocol` option, use one or the other.  It is not recommended to use
less than TLSv1.2, but it may be required for interoperability.
**Default:** `'TLSv1.2'`, unless changed using CLI options. Using
`--tls-v1.0` sets the default to `'TLSv1'`. Using `--tls-v1.1` sets the default to
`'TLSv1.1'`. Using `--tls-min-v1.3` sets the default to
'TLSv1.3'. If multiple of the options are provided, the lowest minimum is used.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[minVersion](internal_.ConnectionOptions.md#minversion)

#### Defined in

node_modules/@types/node/tls.d.ts:757

___

### onread

• `Optional` **onread**: [`OnReadOpts`](internal_.OnReadOpts.md)

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[onread](internal_.AgentOptions-1.md#onread)

#### Defined in

node_modules/@types/node/net.d.ts:47

___

### passphrase

• `Optional` **passphrase**: `string`

Shared passphrase used for a single private key and/or a PFX.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[passphrase](internal_.ConnectionOptions.md#passphrase)

#### Defined in

node_modules/@types/node/tls.d.ts:761

___

### path

• `Optional` **path**: `string`

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[path](internal_.ConnectionOptions.md#path)

#### Defined in

node_modules/@types/node/tls.d.ts:519

___

### pfx

• `Optional` **pfx**: `string` \| [`Buffer`](../modules/internal_.md#buffer) \| (`string` \| [`Buffer`](../modules/internal_.md#buffer) \| [`PxfObject`](internal_.PxfObject.md))[]

PFX or PKCS12 encoded private key and certificate chain. pfx is an
alternative to providing key and cert individually. PFX is usually
encrypted, if it is, passphrase will be used to decrypt it. Multiple
PFX can be provided either as an array of unencrypted PFX buffers,
or an array of objects in the form {buf: <string|buffer>[,
passphrase: <string>]}. The object form can only occur in an array.
object.passphrase is optional. Encrypted PFX will be decrypted with
object.passphrase if provided, or options.passphrase if it is not.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[pfx](internal_.ConnectionOptions.md#pfx)

#### Defined in

node_modules/@types/node/tls.d.ts:772

___

### port

• `Optional` **port**: `number`

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[port](internal_.ConnectionOptions.md#port)

#### Defined in

node_modules/@types/node/net.d.ts:50

___

### privateKeyEngine

• `Optional` **privateKeyEngine**: `string`

Name of an OpenSSL engine to get private key from. Should be used
together with privateKeyIdentifier.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[privateKeyEngine](internal_.ConnectionOptions.md#privatekeyengine)

#### Defined in

node_modules/@types/node/tls.d.ts:731

___

### privateKeyIdentifier

• `Optional` **privateKeyIdentifier**: `string`

Identifier of a private key managed by an OpenSSL engine. Should be
used together with privateKeyEngine. Should not be set together with
key, because both options define a private key in different ways.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[privateKeyIdentifier](internal_.ConnectionOptions.md#privatekeyidentifier)

#### Defined in

node_modules/@types/node/tls.d.ts:737

___

### rejectUnauthorized

• `Optional` **rejectUnauthorized**: `boolean`

If true the server will reject any connection which is not
authorized with the list of supplied CAs. This option only has an
effect if requestCert is true.

**`Default`**

true

#### Overrides

[ConnectionOptions](internal_.ConnectionOptions.md).[rejectUnauthorized](internal_.ConnectionOptions.md#rejectunauthorized)

#### Defined in

node_modules/@types/node/https.d.ts:18

___

### requestCert

• `Optional` **requestCert**: `boolean`

If true the server will request a certificate from clients that
connect and attempt to verify that certificate. Defaults to
false.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[requestCert](internal_.ConnectionOptions.md#requestcert)

#### Defined in

node_modules/@types/node/tls.d.ts:442

___

### scheduling

• `Optional` **scheduling**: ``"fifo"`` \| ``"lifo"``

Scheduling strategy to apply when picking the next free socket to use.

**`Default`**

`lifo`

#### Inherited from

[AgentOptions](internal_.AgentOptions-1.md).[scheduling](internal_.AgentOptions-1.md#scheduling)

#### Defined in

node_modules/@types/node/http.d.ts:1011

___

### secureContext

• `Optional` **secureContext**: [`SecureContext`](internal_.SecureContext.md)

An optional TLS context object from tls.createSecureContext()

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[secureContext](internal_.ConnectionOptions.md#securecontext)

#### Defined in

node_modules/@types/node/tls.d.ts:430

___

### secureOptions

• `Optional` **secureOptions**: `number`

Optionally affect the OpenSSL protocol behavior, which is not
usually necessary. This should be used carefully if at all! Value is
a numeric bitmask of the SSL_OP_* options from OpenSSL Options

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[secureOptions](internal_.ConnectionOptions.md#secureoptions)

#### Defined in

node_modules/@types/node/tls.d.ts:778

___

### secureProtocol

• `Optional` **secureProtocol**: `string`

Legacy mechanism to select the TLS protocol version to use, it does
not support independent control of the minimum and maximum version,
and does not support limiting the protocol to TLSv1.3. Use
minVersion and maxVersion instead. The possible values are listed as
SSL_METHODS, use the function names as strings. For example, use
'TLSv1_1_method' to force TLS version 1.1, or 'TLS_method' to allow
any TLS protocol version up to TLSv1.3. It is not recommended to use
TLS versions less than 1.2, but it may be required for
interoperability. Default: none, see minVersion.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[secureProtocol](internal_.ConnectionOptions.md#secureprotocol)

#### Defined in

node_modules/@types/node/tls.d.ts:790

___

### servername

• `Optional` **servername**: `string`

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[servername](internal_.ConnectionOptions.md#servername)

#### Defined in

node_modules/@types/node/tls.d.ts:522

___

### session

• `Optional` **session**: [`Buffer`](../modules/internal_.md#buffer)

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[session](internal_.ConnectionOptions.md#session)

#### Defined in

node_modules/@types/node/tls.d.ts:523

___

### sessionIdContext

• `Optional` **sessionIdContext**: `string`

Opaque identifier used by servers to ensure session state is not
shared between applications. Unused by clients.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[sessionIdContext](internal_.ConnectionOptions.md#sessionidcontext)

#### Defined in

node_modules/@types/node/tls.d.ts:795

___

### sessionTimeout

• `Optional` **sessionTimeout**: `number`

The number of seconds after which a TLS session created by the
server will no longer be resumable. See Session Resumption for more
information. Default: 300.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[sessionTimeout](internal_.ConnectionOptions.md#sessiontimeout)

#### Defined in

node_modules/@types/node/tls.d.ts:806

___

### sigalgs

• `Optional` **sigalgs**: `string`

Colon-separated list of supported signature algorithms. The list
 can contain digest algorithms (SHA256, MD5 etc.), public key
 algorithms (RSA-PSS, ECDSA etc.), combination of both (e.g
 'RSA+SHA384') or TLS v1.3 scheme names (e.g. rsa_pss_pss_sha512).

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[sigalgs](internal_.ConnectionOptions.md#sigalgs)

#### Defined in

node_modules/@types/node/tls.d.ts:675

___

### socket

• `Optional` **socket**: [`Duplex`](../classes/internal_.Duplex.md)

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[socket](internal_.ConnectionOptions.md#socket)

#### Defined in

node_modules/@types/node/tls.d.ts:520

___

### ticketKeys

• `Optional` **ticketKeys**: [`Buffer`](../modules/internal_.md#buffer)

48-bytes of cryptographically strong pseudo-random data.
See Session Resumption for more information.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[ticketKeys](internal_.ConnectionOptions.md#ticketkeys)

#### Defined in

node_modules/@types/node/tls.d.ts:800

___

### timeout

• `Optional` **timeout**: `number`

Socket timeout in milliseconds. This will set the timeout after the socket is connected.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[timeout](internal_.ConnectionOptions.md#timeout)

#### Defined in

node_modules/@types/node/http.d.ts:1006

## Methods

### pskCallback

▸ `Optional` **pskCallback**(`hint`): ``null`` \| [`PSKCallbackNegotation`](internal_.PSKCallbackNegotation.md)

When negotiating TLS-PSK (pre-shared keys), this function is called
with optional identity `hint` provided by the server or `null`
in case of TLS 1.3 where `hint` was removed.
It will be necessary to provide a custom `tls.checkServerIdentity()`
for the connection as the default one will try to check hostname/IP
of the server against the certificate but that's not applicable for PSK
because there won't be a certificate present.
More information can be found in the RFC 4279.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hint` | ``null`` \| `string` | message sent from the server to help client decide which identity to use during negotiation. Always `null` if TLS 1.3 is used. |

#### Returns

``null`` \| [`PSKCallbackNegotation`](internal_.PSKCallbackNegotation.md)

Return `null` to stop the negotiation process. `psk` must be
compatible with the selected cipher's digest.
`identity` must use UTF-8 encoding.

#### Inherited from

[ConnectionOptions](internal_.ConnectionOptions.md).[pskCallback](internal_.ConnectionOptions.md#pskcallback)
