[**@paraswap/sdk**](../../README.md) • **Docs**

***

[@paraswap/sdk](../../globals.md) / [\<internal\>](../README.md) / Schema

# Type Alias: Schema

> **Schema**: `object`

## Type declaration

### $anchor?

> `optional` **$anchor**: `string`

### $comment?

> `optional` **$comment**: `string`

### $defs?

> `optional` **$defs**: `object`

#### Index Signature

 \[`id`: `string`\]: [`Schema`](Schema.md)

### $id?

> `optional` **$id**: `string`

### $recursiveAnchor?

> `optional` **$recursiveAnchor**: `boolean`

### $recursiveRef?

> `optional` **$recursiveRef**: `string`

### $ref?

> `optional` **$ref**: `string`

### $schema?

> `optional` **$schema**: `string`

### $vocabulary?

> `optional` **$vocabulary**: `string`

### additionalItems?

> `optional` **additionalItems**: [`Schema`](Schema.md)

### additionalProperties?

> `optional` **additionalProperties**: [`Schema`](Schema.md)

### allOf?

> `optional` **allOf**: [`Schema`](Schema.md)[]

### anyOf?

> `optional` **anyOf**: [`Schema`](Schema.md)[]

### const?

> `optional` **const**: [`Json`](Json.md)

### contains?

> `optional` **contains**: [`Schema`](Schema.md)

### contentEncoding?

> `optional` **contentEncoding**: `string`

### contentMediaType?

> `optional` **contentMediaType**: `string`

### contentSchema?

> `optional` **contentSchema**: [`Schema`](Schema.md)

### default?

> `optional` **default**: [`Json`](Json.md)

### definitions?

> `optional` **definitions**: `object`

#### Index Signature

 \[`id`: `string`\]: [`Schema`](Schema.md)

### dependencies?

> `optional` **dependencies**: `object`

#### Index Signature

 \[`id`: `string`\]: `string`[] \| [`Schema`](Schema.md)

### dependentRequired?

> `optional` **dependentRequired**: `object`

#### Index Signature

 \[`id`: `string`\]: `string`[]

### dependentSchemas?

> `optional` **dependentSchemas**: `object`

#### Index Signature

 \[`id`: `string`\]: [`Schema`](Schema.md)

### deprecated?

> `optional` **deprecated**: `boolean`

### description?

> `optional` **description**: `string`

### discriminator?

> `optional` **discriminator**: `object`

### discriminator.mapping?

> `optional` **mapping**: `object`

#### Index Signature

 \[`value`: `string`\]: `string`

### discriminator.propertyName

> **propertyName**: `string`

### divisibleBy?

> `optional` **divisibleBy**: `number`

### else?

> `optional` **else**: [`Schema`](Schema.md)

### enum?

> `optional` **enum**: [`Json`](Json.md)[]

### eth?

> `readonly` `optional` **eth**: `string`

### examples?

> `optional` **examples**: [`Json`](Json.md)[]

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `number` \| `boolean`

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `number` \| `boolean`

### format?

> `optional` **format**: `string`

### id?

> `optional` **id**: `string`

### if?

> `optional` **if**: [`Schema`](Schema.md)

### items?

> `optional` **items**: [`Schema`](Schema.md) \| [`Schema`](Schema.md)[]

### maxContains?

> `optional` **maxContains**: `number`

### maximum?

> `optional` **maximum**: `number`

### maxItems?

> `optional` **maxItems**: `number`

### maxLength?

> `optional` **maxLength**: `number`

### maxProperties?

> `optional` **maxProperties**: `number`

### minContains?

> `optional` **minContains**: `number`

### minimum?

> `optional` **minimum**: `number`

### minItems?

> `optional` **minItems**: `number`

### minLength?

> `optional` **minLength**: `number`

### minProperties?

> `optional` **minProperties**: `number`

### multipleOf?

> `optional` **multipleOf**: `number`

### not?

> `optional` **not**: [`Schema`](Schema.md)

### oneOf?

> `optional` **oneOf**: [`Schema`](Schema.md)[]

### pattern?

> `optional` **pattern**: `string`

### patternProperties?

> `optional` **patternProperties**: `object`

#### Index Signature

 \[`pattern`: `string`\]: [`Schema`](Schema.md)

### properties?

> `optional` **properties**: `object`

#### Index Signature

 \[`id`: `string`\]: [`Schema`](Schema.md)

### propertyNames?

> `optional` **propertyNames**: [`Schema`](Schema.md)

### readOnly?

> `optional` **readOnly**: `boolean`

### required?

> `optional` **required**: `string`[] \| `boolean`

### then?

> `optional` **then**: [`Schema`](Schema.md)

### title?

> `optional` **title**: `string`

### type?

> `optional` **type**: `string` \| `string`[]

### unevaluatedItems?

> `optional` **unevaluatedItems**: [`Schema`](Schema.md)

### unevaluatedProperties?

> `optional` **unevaluatedProperties**: [`Schema`](Schema.md)

### uniqueItems?

> `optional` **uniqueItems**: `boolean`

### writeOnly?

> `optional` **writeOnly**: `boolean`

## Defined in

node\_modules/web3-validator/lib/commonjs/types.d.ts:21
