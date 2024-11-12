[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / FormatType

# Type Alias: FormatType

> **FormatType**: `"sighash"` \| `"minimal"` \| `"full"` \| `"json"`

The format to serialize the output as.

 **``"sighash"``** - the bare formatting, used to compute the selector
 or topic hash; this format cannot be reversed (as it discards ``indexed``)
 so cannot by used to export an [[Interface]].

 **``"minimal"``** - Human-Readable ABI with minimal spacing and without
 names, so it is compact, but will result in Result objects that cannot
 be accessed by name.

 **``"full"``** - Full Human-Readable ABI, with readable spacing and names
 intact; this is generally the recommended format.

 **``"json"``** - The [JSON ABI format](link-solc-jsonabi).

## Defined in

node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:94
