[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / InterfaceAbi

# Type Alias: InterfaceAbi

> **InterfaceAbi**: `string` \| `ReadonlyArray`\<[`Fragment`](../classes/Fragment.md) \| [`JsonFragment`](../interfaces/JsonFragment.md) \| `string`\>

An **InterfaceAbi** may be any supported ABI format.

 A string is expected to be a JSON string, which will be parsed
 using ``JSON.parse``. This means that the value **must** be a valid
 JSON string, with no stray commas, etc.

 An array may contain any combination of:
 - Human-Readable fragments
 - Parsed JSON fragment
 - [[Fragment]] instances

 A **Human-Readable Fragment** is a string which resembles a Solidity
 signature and is introduced in [this blog entry](link-ricmoo-humanreadableabi).
 For example, ``function balanceOf(address) view returns (uint)``.

 A **Parsed JSON Fragment** is a JavaScript Object desribed in the
 [Solidity documentation](link-solc-jsonabi).

## Defined in

node\_modules/ethers/lib.commonjs/abi/interface.d.ts:159
