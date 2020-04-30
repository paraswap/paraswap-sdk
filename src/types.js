"use strict";
exports.__esModule = true;
var bignumber_js_1 = require("bignumber.js");
exports.ETHER_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
exports.UNLIMITED_ALLOWANCE = new bignumber_js_1["default"](2).pow(256).minus(1).toFixed();
var User = /** @class */ (function () {
    function User(address, network) {
        this.address = address;
        this.network = network;
    }
    return User;
}());
exports.User = User;
var Token = /** @class */ (function () {
    function Token(address, decimals, symbol, allowance) {
        this.address = address;
        this.decimals = decimals;
        this.symbol = symbol;
        this.allowance = allowance;
    }
    return Token;
}());
exports.Token = Token;
var EXCHANGES;
(function (EXCHANGES) {
    EXCHANGES["KYBER"] = "Kyber";
    EXCHANGES["UNISWAP"] = "Uniswap";
    EXCHANGES["BANCOR"] = "Bancor";
    EXCHANGES["Oasis"] = "Oasis";
    EXCHANGES["COMPOUND"] = "Compound";
    EXCHANGES["BZX"] = "Fulcrum";
    EXCHANGES["ZEROX"] = "0x";
    EXCHANGES["MakerDAO"] = "MakerDAO";
    EXCHANGES["CHAI"] = "Chai";
    EXCHANGES["PARASWAPPOOL"] = "ParaSwapPool";
    EXCHANGES["AAVE"] = "Aave";
})(EXCHANGES = exports.EXCHANGES || (exports.EXCHANGES = {}));
