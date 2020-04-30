"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var _ = require("lodash");
var bignumber_js_1 = require("bignumber.js");
var PriceFeedAbi = require("./abi/priceFeed.json");
var ParaswapFeed = /** @class */ (function () {
    function ParaswapFeed(network, web3Provider) {
        this.network = network;
        this.web3Provider = web3Provider;
    }
    ParaswapFeed.prototype.getRate = function (srcToken, destToken, srcAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, abi, address, contract, result_1, amount_1, bestRoute, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = PriceFeedAbi[this.network], abi = _a.abi, address = _a.address;
                        contract = new this.web3Provider.eth.Contract(abi, address);
                        return [4 /*yield*/, contract.methods.getBestPrice(srcToken, destToken, srcAmount).call()];
                    case 1:
                        result_1 = _b.sent();
                        amount_1 = new bignumber_js_1["default"](result_1.rate).toFixed();
                        bestRoute = _(result_1.distribution).keys()
                            .filter(function (k) { return _.isNaN(Number(k)); })
                            .reduce(function (acc, exchange) {
                            var percent = new bignumber_js_1["default"](result_1.distribution[exchange]);
                            var _destAmount = percent.times(amount_1).dividedBy(100).toFixed(0);
                            var _srcAmount = percent.times(new bignumber_js_1["default"](srcAmount)).dividedBy(100).toFixed(0);
                            acc.push({
                                amount: _destAmount,
                                srcAmount: _srcAmount,
                                percent: percent.toFixed(0),
                                exchange: exchange
                            });
                            return acc;
                        }, []);
                        return [2 /*return*/, { amount: amount_1, bestRoute: bestRoute }];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, { message: new Error(error_1).message }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ParaswapFeed;
}());
exports.ParaswapFeed = ParaswapFeed;
