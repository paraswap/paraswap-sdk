[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlobOptions

# Interface: BlobOptions

**`Experimental`**

## Properties

### endings?

> `optional` **endings**: `"transparent"` \| `"native"`

**`Experimental`**

One of either `'transparent'` or `'native'`. When set to `'native'`, line endings in string source parts
will be converted to the platform native line-ending as specified by `import { EOL } from 'node:os'`.

#### Defined in

node\_modules/@types/node/buffer.d.ts:139

***

### type?

> `optional` **type**: `string`

**`Experimental`**

The Blob content-type. The intent is for `type` to convey
the MIME media type of the data, however no validation of the type format
is performed.

#### Defined in

node\_modules/@types/node/buffer.d.ts:145
