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
exports.encrypt = void 0;
var jwt_decode_1 = require("jwt-decode");
var webcrypto_1 = require("@peculiar/webcrypto");
var utilts_1 = require("./utilts");
var generateKey = function (crypto) {
    return crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256
    }, true, ['encrypt']);
};
var _encrypt = function (crypto, payload, key, header, iv) { return __awaiter(void 0, void 0, Promise, function () {
    var algorithm, buffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                algorithm = {
                    name: 'AES-GCM',
                    iv: iv,
                    additionalData: utilts_1.stringToArrayBuffer(utilts_1.replace(JSON.stringify(header))),
                    tagLength: 128
                };
                return [4 /*yield*/, crypto.subtle.encrypt(algorithm, key, utilts_1.stringToArrayBuffer(JSON.stringify(payload)))];
            case 1:
                buffer = _a.sent();
                return [2 /*return*/, [buffer, key]];
        }
    });
}); };
function importKey(crypto, jsonWebKey) {
    return crypto.subtle.importKey('jwk', jsonWebKey, {
        name: 'RSA-OAEP',
        hash: {
            name: 'SHA-1'
        }
    }, false, ['wrapKey']);
}
function wrapKey(crypto, key, jsonWebKey) {
    return __awaiter(this, void 0, void 0, function () {
        var wrappingKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importKey(crypto, jsonWebKey)];
                case 1:
                    wrappingKey = _a.sent();
                    return [2 /*return*/, crypto.subtle.wrapKey('raw', key, wrappingKey, {
                            name: 'RSA-OAEP',
                            hash: {
                                name: 'SHA-1'
                            }
                        })];
            }
        });
    });
}
function build(crypto, buffer, key, iv, header, jsonWebKey) {
    return __awaiter(this, void 0, void 0, function () {
        var u, keyBuffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    u = buffer.byteLength - ((128 + 7) >> 3);
                    return [4 /*yield*/, wrapKey(crypto, key, jsonWebKey)];
                case 1:
                    keyBuffer = _a.sent();
                    return [2 /*return*/, [
                            utilts_1.replace(JSON.stringify(header)),
                            utilts_1.replace(utilts_1.arrayBufferToString(keyBuffer)),
                            utilts_1.replace(utilts_1.arrayBufferToString(iv)),
                            utilts_1.replace(utilts_1.arrayBufferToString(buffer.slice(0, u))),
                            utilts_1.replace(utilts_1.arrayBufferToString(buffer.slice(u)))
                        ].join('.')];
            }
        });
    });
}
exports.encrypt = function (data, context, index) {
    if (index === void 0) { index = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        var crypto, keyId, header, payload, iv;
        return __generator(this, function (_a) {
            crypto = new webcrypto_1.Crypto();
            keyId = jwt_decode_1["default"](context);
            header = {
                kid: keyId.flx.jwk.kid,
                alg: 'RSA-OAEP',
                enc: 'A256GCM'
            };
            payload = {
                data: data,
                context: context,
                index: index
            };
            iv = crypto.getRandomValues(new Uint8Array(12));
            return [2 /*return*/, generateKey(crypto)
                    .then(function (key) { return _encrypt(crypto, payload, key, header, iv); })
                    .then(function (data) {
                    var buffer = data[0], key = data[1];
                    return build(crypto, buffer, key, iv, header, keyId.flx.jwk);
                })];
        });
    });
};
