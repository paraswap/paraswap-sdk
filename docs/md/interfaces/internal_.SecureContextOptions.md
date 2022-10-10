[@paraswap/sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SecureContextOptions

# Interface: SecureContextOptions

[<internal>](../modules/internal_.md).SecureContextOptions

## Hierarchy

- **`SecureContextOptions`**

  ↳ [`ConnectionOptions`](internal_.ConnectionOptions.md)

## Table of contents

### Properties

- [ca](internal_.SecureContextOptions.md#ca)
- [cert](internal_.SecureContextOptions.md#cert)
- [ciphers](internal_.SecureContextOptions.md#ciphers)
- [clientCertEngine](internal_.SecureContextOptions.md#clientcertengine)
- [crl](internal_.SecureContextOptions.md#crl)
- [dhparam](internal_.SecureContextOptions.md#dhparam)
- [ecdhCurve](internal_.SecureContextOptions.md#ecdhcurve)
- [honorCipherOrder](internal_.SecureContextOptions.md#honorcipherorder)
- [key](internal_.SecureContextOptions.md#key)
- [maxVersion](internal_.SecureContextOptions.md#maxversion)
- [minVersion](internal_.SecureContextOptions.md#minversion)
- [passphrase](internal_.SecureContextOptions.md#passphrase)
- [pfx](internal_.SecureContextOptions.md#pfx)
- [privateKeyEngine](internal_.SecureContextOptions.md#privatekeyengine)
- [privateKeyIdentifier](internal_.SecureContextOptions.md#privatekeyidentifier)
- [secureOptions](internal_.SecureContextOptions.md#secureoptions)
- [secureProtocol](internal_.SecureContextOptions.md#secureprotocol)
- [sessionIdContext](internal_.SecureContextOptions.md#sessionidcontext)
- [sessionTimeout](internal_.SecureContextOptions.md#sessiontimeout)
- [sigalgs](internal_.SecureContextOptions.md#sigalgs)
- [ticketKeys](internal_.SecureContextOptions.md#ticketkeys)

## Properties

### ca

• `Optional` **ca**: `string` \| [`Buffer`](../modules/internal_.md#buffer) \| (`string` \| [`Buffer`](../modules/internal_.md#buffer))[]

Optionally override the trusted CA certificates. Default is to trust
the well-known CAs curated by Mozilla. Mozilla's CAs are completely
replaced when CAs are explicitly specified using this option.

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

#### Defined in

node_modules/@types/node/tls.d.ts:668

___

### ciphers

• `Optional` **ciphers**: `string`

Cipher suite specification, replacing the default. For more
information, see modifying the default cipher suite. Permitted
ciphers can be obtained via tls.getCiphers(). Cipher names must be
uppercased in order for OpenSSL to accept them.

#### Defined in

node_modules/@types/node/tls.d.ts:682

___

### clientCertEngine

• `Optional` **clientCertEngine**: `string`

Name of an OpenSSL engine which can provide the client certificate.

#### Defined in

node_modules/@types/node/tls.d.ts:686

___

### crl

• `Optional` **crl**: `string` \| [`Buffer`](../modules/internal_.md#buffer) \| (`string` \| [`Buffer`](../modules/internal_.md#buffer))[]

PEM formatted CRLs (Certificate Revocation Lists).

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

#### Defined in

node_modules/@types/node/tls.d.ts:709

___

### honorCipherOrder

• `Optional` **honorCipherOrder**: `boolean`

Attempt to use the server's cipher suite preferences instead of the
client's. When true, causes SSL_OP_CIPHER_SERVER_PREFERENCE to be
set in secureOptions

#### Defined in

node_modules/@types/node/tls.d.ts:715

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

#### Defined in

node_modules/@types/node/tls.d.ts:726

___

### maxVersion

• `Optional` **maxVersion**: [`SecureVersion`](../modules/internal_.md#secureversion)

Optionally set the maximum TLS version to allow. One
of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
`secureProtocol` option, use one or the other.
**Default:** `'TLSv1.3'`, unless changed using CLI options. Using
`--tls-max-v1.2` sets the default to `'TLSv1.2'`. Using `--tls-max-v1.3` sets the default to
`'TLSv1.3'`. If multiple of the options are provided, the highest maximum is used.

#### Defined in

node_modules/@types/node/tls.d.ts:746

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

#### Defined in

node_modules/@types/node/tls.d.ts:757

___

### passphrase

• `Optional` **passphrase**: `string`

Shared passphrase used for a single private key and/or a PFX.

#### Defined in

node_modules/@types/node/tls.d.ts:761

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

#### Defined in

node_modules/@types/node/tls.d.ts:772

___

### privateKeyEngine

• `Optional` **privateKeyEngine**: `string`

Name of an OpenSSL engine to get private key from. Should be used
together with privateKeyIdentifier.

#### Defined in

node_modules/@types/node/tls.d.ts:731

___

### privateKeyIdentifier

• `Optional` **privateKeyIdentifier**: `string`

Identifier of a private key managed by an OpenSSL engine. Should be
used together with privateKeyEngine. Should not be set together with
key, because both options define a private key in different ways.

#### Defined in

node_modules/@types/node/tls.d.ts:737

___

### secureOptions

• `Optional` **secureOptions**: `number`

Optionally affect the OpenSSL protocol behavior, which is not
usually necessary. This should be used carefully if at all! Value is
a numeric bitmask of the SSL_OP_* options from OpenSSL Options

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

#### Defined in

node_modules/@types/node/tls.d.ts:790

___

### sessionIdContext

• `Optional` **sessionIdContext**: `string`

Opaque identifier used by servers to ensure session state is not
shared between applications. Unused by clients.

#### Defined in

node_modules/@types/node/tls.d.ts:795

___

### sessionTimeout

• `Optional` **sessionTimeout**: `number`

The number of seconds after which a TLS session created by the
server will no longer be resumable. See Session Resumption for more
information. Default: 300.

#### Defined in

node_modules/@types/node/tls.d.ts:806

___

### sigalgs

• `Optional` **sigalgs**: `string`

Colon-separated list of supported signature algorithms. The list
 can contain digest algorithms (SHA256, MD5 etc.), public key
 algorithms (RSA-PSS, ECDSA etc.), combination of both (e.g
 'RSA+SHA384') or TLS v1.3 scheme names (e.g. rsa_pss_pss_sha512).

#### Defined in

node_modules/@types/node/tls.d.ts:675

___

### ticketKeys

• `Optional` **ticketKeys**: [`Buffer`](../modules/internal_.md#buffer)

48-bytes of cryptographically strong pseudo-random data.
See Session Resumption for more information.

#### Defined in

node_modules/@types/node/tls.d.ts:800
