[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TxOptions

# Interface: TxOptions

The options for initializing a [Transaction](../namespaces/Users_alexeyshchur_Desktop_Repos_paraswap-sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md).

## Properties

### allowUnlimitedInitCodeSize?

> `optional` **allowUnlimitedInitCodeSize**: `boolean`

Allows unlimited contract code-size init while debugging. This (partially) disables EIP-3860.
Gas cost for initcode size analysis will still be charged. Use with caution.

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:62

***

### common?

> `optional` **common**: [`Common`](../classes/Common.md)

A [Common](../classes/Common.md) object defining the chain and hardfork for the transaction.

Object will be internally copied so that tx behavior don't incidentally
change on future HF changes.

Default: [Common](../classes/Common.md) object set to `mainnet` and the default hardfork as defined in the [Common](../classes/Common.md) class.

Current default hardfork: `istanbul`

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:45

***

### freeze?

> `optional` **freeze**: `boolean`

A transaction object by default gets frozen along initialization. This gives you
strong additional security guarantees on the consistency of the tx parameters.
It also enables tx hash caching when the `hash()` method is called multiple times.

If you need to deactivate the tx freeze - e.g. because you want to subclass tx and
add additional properties - it is strongly encouraged that you do the freeze yourself
within your code instead.

Default: true

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/tx/types.d.ts:57
