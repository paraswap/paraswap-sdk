const addresses: any = {
  1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  3: "0xc778417e063141139fce010982780140aa0cd5ab",
  4: "0xc778417e063141139fce010982780140aa0cd5ab",
  42: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
};

export class Weth {
  static getAddress(network: number = 1){
    return addresses[network];
  }
}
