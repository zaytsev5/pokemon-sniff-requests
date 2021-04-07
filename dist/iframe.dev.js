"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Flex Microform v0.11.3
 * @copyright CyberSource 2016-2020
 */
!function (e, t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var n = t();

    for (var r in n) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[r] = n[r];
    }
  }
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 18);
  }([function (e, t, n) {
    "use strict";

    n.d(t, "k", function () {
      return c;
    }), n.d(t, "j", function () {
      return u;
    }), n.d(t, "g", function () {
      return s;
    }), n.d(t, "l", function () {
      return l;
    }), n.d(t, "e", function () {
      return f;
    }), n.d(t, "i", function () {
      return d;
    }), n.d(t, "f", function () {
      return p;
    }), n.d(t, "b", function () {
      return h;
    }), n.d(t, "q", function () {
      return y;
    }), n.d(t, "t", function () {
      return m;
    }), n.d(t, "d", function () {
      return E;
    }), n.d(t, "u", function () {
      return g;
    }), n.d(t, "m", function () {
      return b;
    }), n.d(t, "h", function () {
      return v;
    }), n.d(t, "p", function () {
      return A;
    }), n.d(t, "r", function () {
      return O;
    }), n.d(t, "s", function () {
      return T;
    }), n.d(t, "n", function () {
      return w;
    }), n.d(t, "c", function () {
      return R;
    }), n.d(t, "a", function () {
      return _;
    }), n.d(t, "o", function () {
      return S;
    }), n.d(t, "v", function () {
      return C;
    });
    var r = n(4),
        o = n.n(r);

    function a(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function c(e) {
      return null != e && "object" === i(e);
    }

    function u(e) {
      var t = i(e);
      return null != e && ("object" === t || "function" === t);
    }

    function s(e) {
      var t = u(e) ? Object.prototype.toString.call(e) : "";
      return "[object Function]" === t || "[object GeneratorFunction]" === t;
    }

    function l(e) {
      return "string" == typeof e || !Array.isArray(e) && c(e) && "[object String]" === Object.prototype.toString.call(e);
    }

    function f(e) {
      return !0 === e || !1 === e || "[object Boolean]" === Object.prototype.toString.call(e);
    }

    function d(e) {
      return "[object Number]" === Object.prototype.toString.call(e) && !isNaN(e);
    }

    function p(e) {
      return "object" === ("undefined" == typeof HTMLElement ? "undefined" : i(HTMLElement)) ? e instanceof HTMLElement : c(e) && 1 === e.nodeType && "string" == typeof e.nodeName;
    }

    function h(e) {
      return String.fromCharCode.apply(null, new Uint8Array(e));
    }

    function y(e) {
      for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0, o = e.length; r < o; r += 1) {
        n[r] = e.charCodeAt(r);
      }

      return t;
    }

    function m(e) {
      try {
        return atob(e.replace(/-/g, "+").replace(/_/g, "/"));
      } catch (e) {
        throw new Error("Failed to decode base64 string");
      }
    }

    function E() {
      window.getSelection && window.getSelection().empty ? window.getSelection().empty() : window.getSelection && window.getSelection().removeAllRanges ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
    }

    function g() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16);
      });
    }

    function b(e) {
      return l(e) && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
    }

    function v(e) {
      return l(e) && /^([-\w]+\.){2}[-\w]+$/.test(e);
    }

    function A(e) {
      return JSON.parse(JSON.stringify(e));
    }

    function O(e) {
      return "string" == typeof e ? e.replace(/\D/g, "") : "";
    }

    function T(e) {
      return "string" == typeof e ? e.replace(/\s/g, "") : "";
    }

    function w(e, t) {
      e.setAttribute("autocomplete", t), e.setAttribute("autocompletetype", t), e.setAttribute("x-autocompletetype", t);
    }

    function R(e) {
      if (!(e instanceof Set)) return [];
      if (Array.from) return Array.from(e);
      var t = [];
      return e.forEach(function (e) {
        return t.push(e);
      }), t;
    }

    function _(e, t) {
      return e instanceof Set && t instanceof Set && e.size === t.size && R(e).every(function (e) {
        return t.has(e);
      });
    }

    function S(e) {
      if (e instanceof Array && e.length > 0) for (var t, n, r = e.length; --r;) {
        n = ~~(Math.random() * (r + 1)), t = e[r], e[r] = e[n], e[n] = t;
      }
    }

    function C(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return t.map(function (t) {
        return t in e ? a({}, t, e[t]) : {};
      }).reduce(function (e, t) {
        return o()(e, t);
      }, {});
    }
  }, function (e, t, n) {
    "use strict";

    function r() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (!e.reason) throw new Error("Error reason required");
      if (!e.message) throw new Error("Error message required");
      this.name = "MicroformError", this.reason = e.reason, this.message = e.message, this.informationLink = e.informationLink || "https://www.cybersource.com/products/payment_security/secure_acceptance", this.correlationId = e.correlationId, this.details = e.details;
    }

    r.prototype = Object.create(Error.prototype), r.prototype.constructor = r;
    var o = r;
    t.a = {
      CAPTURE_CONTEXT_INVALID: function CAPTURE_CONTEXT_INVALID() {
        return new o({
          reason: "CAPTURE_CONTEXT_INVALID",
          message: "You have not supplied a valid capture context."
        });
      },
      CAPTURE_CONTEXT_EXPIRED: function CAPTURE_CONTEXT_EXPIRED() {
        return new o({
          reason: "CAPTURE_CONTEXT_EXPIRED",
          message: "Your capture context has expired."
        });
      },
      BROWSER_ENCRYPTION_FAILED: function BROWSER_ENCRYPTION_FAILED() {
        return new o({
          reason: "BROWSER_ENCRYPTION_FAILED",
          message: "In-browser encryption has failed."
        });
      },
      CREATE_FIELD_INVALID_FIELD_TYPE: function CREATE_FIELD_INVALID_FIELD_TYPE(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return new o({
          reason: "CREATE_FIELD_INVALID_FIELD_TYPE",
          message: 'Invalid field "'.concat(e, '". Supported values are [ ').concat(t.join(", "), " ]."),
          details: {
            message: "Supported values are [ ".concat(t.join(", "), " ].")
          }
        });
      },
      CREATE_FIELD_DUPLICATE: function CREATE_FIELD_DUPLICATE(e) {
        return new o({
          reason: "CREATE_FIELD_DUPLICATE",
          message: 'A "'.concat(e, '" field has already been created for this integration.')
        });
      },
      CREATE_TOKEN_NO_FIELDS_LOADED: function CREATE_TOKEN_NO_FIELDS_LOADED() {
        return new o({
          reason: "CREATE_TOKEN_NO_FIELDS_LOADED",
          message: "No fields have been loaded."
        });
      },
      CREATE_TOKEN_TIMEOUT: function CREATE_TOKEN_TIMEOUT(e) {
        var t = new o({
          reason: "CREATE_TOKEN_TIMEOUT",
          message: "Create token request timed out.",
          details: {}
        });
        return e && (t.details.fields = e), t;
      },
      CREATE_TOKEN_XHR_ERROR: function CREATE_TOKEN_XHR_ERROR() {
        return new o({
          reason: "CREATE_TOKEN_XHR_ERROR",
          message: "Could not create a token as the underlying XMLHttpRequest failed."
        });
      },
      CREATE_TOKEN_NO_FIELDS: function CREATE_TOKEN_NO_FIELDS() {
        return new o({
          reason: "CREATE_TOKEN_NO_FIELDS",
          message: "No fields for collection."
        });
      },
      CREATE_TOKEN_VALIDATION_PARAMS: function CREATE_TOKEN_VALIDATION_PARAMS() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return new o({
          reason: "CREATE_TOKEN_VALIDATION_PARAMS",
          message: "One or more params have a validation error.",
          details: e.map(function (e) {
            return {
              message: "Validation error",
              location: e
            };
          })
        });
      },
      CREATE_TOKEN_VALIDATION_FIELDS: function CREATE_TOKEN_VALIDATION_FIELDS() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return new o({
          reason: "CREATE_TOKEN_VALIDATION_FIELDS",
          message: "One or more fields have a validation error.",
          details: e.map(function (e) {
            return {
              message: "Validation error",
              location: e
            };
          })
        });
      },
      CREATE_TOKEN_UNABLE_TO_START: function CREATE_TOKEN_UNABLE_TO_START() {
        return new o({
          reason: "CREATE_TOKEN_UNABLE_TO_START",
          message: "Unable to trigger tokenization."
        });
      },
      FIELD_UNLOAD_ERROR: function FIELD_UNLOAD_ERROR() {
        return new o({
          reason: "FIELD_UNLOAD_ERROR",
          message: 'Field is not loaded. Call "load" before attempting to unload.'
        });
      },
      FIELD_ALREADY_LOADED: function FIELD_ALREADY_LOADED() {
        return new o({
          reason: "FIELD_ALREADY_LOADED",
          message: 'Field has already been loaded. Call "unload" before trying to re-load.'
        });
      },
      FIELD_LOAD_CONTAINER_SELECTOR: function FIELD_LOAD_CONTAINER_SELECTOR() {
        return new o({
          reason: "FIELD_LOAD_CONTAINER_SELECTOR",
          message: "Unable to locate a DOM node using the supplied selector string."
        });
      },
      FIELD_LOAD_INVALID_CONTAINER: function FIELD_LOAD_INVALID_CONTAINER() {
        return new o({
          reason: "FIELD_LOAD_INVALID_CONTAINER",
          message: "Invalid argument supplied to load. Supported values are [HTMLElement or a CSS selector string]."
        });
      },
      FIELD_SUBSCRIBE_UNSUPPORTED_EVENT: function FIELD_SUBSCRIBE_UNSUPPORTED_EVENT() {
        return new o({
          reason: "FIELD_SUBSCRIBE_UNSUPPORTED_EVENT",
          message: "Unsupported event name."
        });
      },
      FIELD_SUBSCRIBE_INVALID_CALLBACK: function FIELD_SUBSCRIBE_INVALID_CALLBACK() {
        return new o({
          reason: "FIELD_SUBSCRIBE_INVALID_CALLBACK",
          message: "The supplied callback is not a function."
        });
      },
      IFRAME_JWT_VALIDATION_FAILED: function IFRAME_JWT_VALIDATION_FAILED() {
        return new o({
          reason: "IFRAME_JWT_VALIDATION_FAILED",
          message: "Invalid JWT."
        });
      },
      IFRAME_UNSUPPORTED_FIELD_TYPE: function IFRAME_UNSUPPORTED_FIELD_TYPE(e) {
        return new o({
          reason: "IFRAME_UNSUPPORTED_FIELD_TYPE",
          message: "Unsupported field type:  ".concat(e, ".")
        });
      },
      MALFORMED_TOKENS_RESPONSE: function MALFORMED_TOKENS_RESPONSE() {
        return new o({
          reason: "MALFORMED_TOKENS_RESPONSE",
          message: "JWT returned on tokens request does not match expected format."
        });
      },
      UNKNOWN_REASON: function UNKNOWN_REASON(e) {
        return new o({
          reason: "UNKNOWN_REASON",
          message: "Microform could not handle the recieved Flex API reason code.",
          details: e
        });
      },
      API_INTERNAL_ERROR: function API_INTERNAL_ERROR() {
        return new o({
          reason: "API_INTERNAL_ERROR",
          message: "An unknown error has occurred."
        });
      },
      API_JSON_PARSER_ERROR: function API_JSON_PARSER_ERROR() {
        return new o({
          reason: "API_JSON_PARSER_ERROR",
          message: "There was a problem processing your request."
        });
      },
      API_JWE_PARSING_ERROR: function API_JWE_PARSING_ERROR() {
        return new o({
          reason: "API_JWE_PARSING_ERROR",
          message: "Unable create a token as the JWE contents could not be parsed."
        });
      },
      API_GATEWAY_ERROR: function API_GATEWAY_ERROR() {
        return new o({
          reason: "API_GATEWAY_ERROR",
          message: "The API gateway rejected your request."
        });
      },
      CREATE_TOKEN_DECRYPTION: function CREATE_TOKEN_DECRYPTION() {
        return new o({
          reason: "CREATE_TOKEN_DECRYPTION",
          message: "Unable create a token as the JWE contents could not be decrypted."
        });
      },
      CREATE_TOKEN_PLATFORM_ERROR: function CREATE_TOKEN_PLATFORM_ERROR() {
        return new o({
          reason: "CREATE_TOKEN_PLATFORM_ERROR",
          message: "There was a problem communicating with the tokenization service."
        });
      },
      CREATE_TOKEN_CAPTURE_CONTEXT_USED_TOO_MANY_TIMES: function CREATE_TOKEN_CAPTURE_CONTEXT_USED_TOO_MANY_TIMES() {
        return new o({
          reason: "CREATE_TOKEN_CAPTURE_CONTEXT_USED_TOO_MANY_TIMES",
          message: "The supplied capture context has exceeded its usage limits. Please request another before trying again."
        });
      },
      CREATE_TOKEN_CAPTURE_CONTEXT_NOT_FOUND: function CREATE_TOKEN_CAPTURE_CONTEXT_NOT_FOUND() {
        return new o({
          reason: "CREATE_TOKEN_CAPTURE_CONTEXT_NOT_FOUND",
          message: "The capture context could not be found. Please request another before trying again."
        });
      },
      CREATE_TOKEN_NO_DATA_SUBMITTED: function CREATE_TOKEN_NO_DATA_SUBMITTED() {
        return new o({
          reason: "CREATE_TOKEN_NO_DATA_SUBMITTED",
          message: "At least one non-empty field must be supplied for tokenization."
        });
      },
      CREATE_TOKEN_VALIDATION_SERVERSIDE: function CREATE_TOKEN_VALIDATION_SERVERSIDE(e) {
        var t = new o({
          reason: "CREATE_TOKEN_VALIDATION_SERVERSIDE",
          message: "Server-side validation has rejected your request.",
          details: []
        }),
            n = {
          "captureData.number": "number",
          "captureData.type": "type",
          "captureData.expirationMonth": "expirationMonth",
          "captureData.expirationYear": "expirationYear",
          "captureData.securityCode": "securityCode"
        };
        return Array.isArray(e) && e.forEach(function (e) {
          e.location && n[e.location] && t.details.push({
            location: n[e.location],
            message: e.message
          });
        }), t;
      }
    };
  }, function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "AUTOCOMPLETE", function () {
      return r;
    }), n.d(t, "BLUR", function () {
      return o;
    }), n.d(t, "CHANGE", function () {
      return a;
    }), n.d(t, "ERROR", function () {
      return i;
    }), n.d(t, "FOCUS", function () {
      return c;
    }), n.d(t, "INPUT_SUBMIT_REQUEST", function () {
      return u;
    }), n.d(t, "LOAD", function () {
      return s;
    }), n.d(t, "UNLOAD", function () {
      return l;
    }), n.d(t, "UPDATE", function () {
      return f;
    });
    var r = "autocomplete",
        o = "blur",
        a = "change",
        i = "error",
        c = "focus",
        u = "inputSubmitRequest",
        s = "load",
        l = "unload",
        f = "update";
  }, function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "NUMBER", function () {
      return r;
    }), n.d(t, "SECURITY_CODE", function () {
      return o;
    });
    var r = "number",
        o = "securityCode";
  }, function (e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */

    var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;

    function i(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }

    e.exports = function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

        for (var t = {}, n = 0; n < 10; n++) {
          t["_" + String.fromCharCode(n)] = n;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          r[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
      } catch (e) {
        return !1;
      }
    }() ? Object.assign : function (e, t) {
      for (var n, c, u = i(e), s = 1; s < arguments.length; s++) {
        for (var l in n = Object(arguments[s])) {
          o.call(n, l) && (u[l] = n[l]);
        }

        if (r) {
          c = r(n);

          for (var f = 0; f < c.length; f++) {
            a.call(n, c[f]) && (u[c[f]] = n[c[f]]);
          }
        }
      }

      return u;
    };
  }, function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return o;
    }), n.d(t, "d", function () {
      return a;
    }), n.d(t, "c", function () {
      return i;
    });
    var r = "autocompleteEdit",
        o = "clear",
        a = "tokenize",
        i = "error";
  }, function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return s;
    });
    var r = n(0);

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function a(e) {
      return new Error('Required parameter "'.concat(e, '" was not supplied'));
    }

    function i(e, t, n) {
      return new Error('Invalid value of "'.concat(t, '" for "').concat(e, '" parameter. Supported values are [').concat(n.join(", "), "]"));
    }

    function c(e, t, n) {
      return new Error('Invalid value typeof "'.concat(t, '" supplied for parameter "').concat(e, '". Expected typeof "').concat(n, '".'));
    }

    function u(e) {
      return new Error('Failed expression evaluation for parameter "'.concat(e, '".'));
    }

    function s(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = {};
      return Object.keys(t).forEach(function (s) {
        var l = t[s],
            f = e[s];

        if (void 0 === f) {
          if (l.required) throw a(s);
          if (void 0 === l["default"]) return;
          f = l["default"];
        }

        if (o(f) !== l.type) throw c(s, o(f), l.type);
        if (l.supportedValues && l.supportedValues.indexOf(f) < 0) throw i(s, f, l.supportedValues);
        if (Object(r.g)(l.expression) && !0 !== l.expression.call(null, f, e, t)) throw u(s);
        n[s] = f;
      }), n;
    }
  }, function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return a;
    });
    var r = n(0),
        o = /^http(s)?:\/\/.+(:\d+)?$/;

    function a(e, t, n) {
      if (!o.test(n)) throw new Error('Invalid origin "'.concat(n, '"'));
      var a = {},
          i = t,
          c = e,
          u = n;

      function s(e, t) {
        return !(!Object(r.l)(e) || !Object(r.g)(t)) && (a[e] || (a[e] = []), a[e].push(t), !0);
      }

      function l(e, t) {
        if (!Object(r.l)(e) || !Object(r.g)(t)) return !1;
        if (!a[e]) return !1;

        for (var n = a[e], o = 0; o < n.length; o += 1) {
          if (n[o] === t) return n.splice(o, 1), !0;
        }

        return !1;
      }

      function f(e, t, n) {
        var o = {
          event: e,
          channel: i,
          contentType: "application/x-telegram+json",
          data: t || {}
        };
        return "function" == typeof n && (o.reply = function (e) {
          var t = Object(r.u)();
          return s(t, function n(r) {
            l(t, n), e(r);
          }), t;
        }(n)), o;
      }

      function d(e) {
        var t = e.origin || e.originalEvent.origin;

        if ((u === t || "*" === u) && Object(r.j)(e.data) && "application/x-telegram+json" === e.data.contentType && "event" in e.data && !(!"application/x-telegram+json".indexOf(e.data.event) < 0 || void 0 !== e.data.channel && e.data.channel !== i && "*" !== e.data.channel)) {
          var n = [e.data.data || {}];
          e.data.reply && n.push(function (e) {
            return function (t, n) {
              var r = f(e.data.reply, t, n);
              e.source.postMessage(r, e.origin);
            };
          }(e)), function (e, t, n) {
            if (a[e]) for (var r = a[e].length, o = 0; o < r; o += 1) {
              a[e][o].apply(n, t);
            }
          }(e.data.event, n, e);
        }
      }

      function p() {
        return a = {}, !0;
      }

      return window.addEventListener("message", d, !1), {
        publish: function publish(e, t, n) {
          var r = f(e, t, n);

          try {
            (c instanceof HTMLIFrameElement ? c.contentWindow : c).postMessage(r, u);
          } catch (e) {
            throw new Error("Frame communication failed.");
          }
        },
        subscribe: s,
        unsubscribe: l,
        unsubscribeAll: p,
        teardown: function teardown() {
          window.removeEventListener("message", d, !1), p();
        }
      };
    }
  }, function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "default", function () {
      return f;
    });
    var r = [{
      name: "visa",
      brandedName: "Visa",
      cybsCardType: "001",
      spaces: [4, 8, 12],
      lengths: [13, 14, 15, 16, 17, 18, 19],
      securityCode: {
        name: "CVV",
        length: 3
      },
      luhn: !0,
      binRange: [4]
    }, {
      name: "mastercard",
      brandedName: "MasterCard",
      cybsCardType: "002",
      spaces: [4, 8, 12],
      lengths: [16],
      securityCode: {
        name: "CVC",
        length: 3
      },
      luhn: !0,
      binRange: [[51, 55], [2221, 2720]]
    }, {
      name: "amex",
      brandedName: "American Express",
      cybsCardType: "003",
      spaces: [4, 10],
      lengths: [15],
      securityCode: {
        name: "CID",
        length: 4
      },
      luhn: !0,
      binRange: [34, 37]
    }, {
      name: "maestro",
      brandedName: "Maestro",
      cybsCardType: "042",
      spaces: [4, 8, 12],
      lengths: [12, 13, 14, 15, 16, 17, 18, 19],
      securityCode: {
        name: "CVC",
        length: 3
      },
      luhn: !0,
      binRange: [50, [5600, 6010], [60111, 60111], [601150, 601173], [601175, 601176], [601180, 601185], [601200, 622125], [622926, 623999], [6270, 6281], [6289, 6439], [66, 69]]
    }, {
      name: "discover",
      brandedName: "Discover",
      cybsCardType: "004",
      spaces: [4, 8, 12],
      lengths: [16, 19],
      securityCode: {
        name: "CID",
        length: 3
      },
      luhn: !0,
      binRange: [60110, [60112, 60114], [601174, 601174], [601177, 601179], [601186, 601199], [622126, 622925], [644, 659], [81e4, 817199]]
    }, {
      name: "diners-club",
      brandedName: "Diners Club",
      cybsCardType: "005",
      spaces: [4, 10],
      lengths: [14, 16],
      securityCode: {
        name: "CVV",
        length: 3
      },
      luhn: !0,
      binRange: [[300, 305], 3095, 36, [38, 39]]
    }, {
      name: "jcb",
      brandedName: "JCB",
      cybsCardType: "007",
      spaces: [4, 8, 12],
      lengths: [16],
      securityCode: {
        name: "CVV",
        length: 3
      },
      luhn: !0,
      binRange: [[3528, 3589]]
    }, {
      name: "cup",
      brandedName: "China UnionPay",
      cybsCardType: "062",
      spaces: [4, 8, 12],
      lengths: [16, 19],
      securityCode: {
        name: "CVN2",
        length: 3
      },
      luhn: !0,
      binRange: [[62e4, 629999], [81e4, 817199]]
    }];

    function o(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            r = !0,
            o = !1,
            a = void 0;

        try {
          for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (e) {
          o = !0, a = e;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (o) throw a;
          }
        }

        return n;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    var i = function i(e, t) {
      var n = o(Array.isArray(e) ? [e[0], e[1] || e[0]] : [e, e], 2),
          r = n[0],
          a = n[1],
          i = parseInt(t, 10),
          c = r.toString().length,
          u = Math.pow(10, t.length - c),
          s = Math.floor(r * u),
          l = Math.floor(a * u) + (u >= 1 ? u - 1 : 0);
      return s <= i && i <= l;
    };

    function c(e) {
      return function (e) {
        if (Array.isArray(e)) return u(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return u(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    var s = {};

    function l(e) {
      var t = e.substr(0, 8),
          n = "".concat(t, "_").concat(e.length);
      if (Object.prototype.hasOwnProperty.call(s, n)) return s[n].slice();
      s[n] = [];

      for (var o = 0; o < r.length; o += 1) {
        if (!(e.length > Math.max.apply(Math, c(r[o].lengths)))) for (var a = 0; a < r[o].binRange.length; a += 1) {
          if (i(r[o].binRange[a], t)) {
            s[n].push(Object.assign({}, r[o]));
            break;
          }
        }
      }

      return s[n].slice();
    }

    function f(e) {
      var t = e.toString().replace(/\s+/g, ""),
          n = {
        cards: l(t),
        valid: !1,
        couldBeValid: !1
      };
      return n.cards.length > 0 && (n.cards.forEach(function (e) {
        e.valid = -1 !== e.lengths.indexOf(t.length) && (!e.luhn || function (e) {
          if ("string" != typeof e) throw new TypeError("Expected string input");
          if (!e) return !1;

          for (var t = 0, n = e.length, r = n % 2, o = 0; o < n; o += 1) {
            var a = parseInt(e.charAt(o), 10);
            o % 2 === r && (a *= 2), a > 9 && (a -= 9), t += a;
          }

          return t % 10 == 0;
        }(t)), e.couldBeValid = e.valid || t.length < Math.max.apply(Math, c(e.lengths));
      }), n.valid = n.cards.every(function (e) {
        return e.valid;
      }), n.couldBeValid = n.cards.some(function (e) {
        return e.couldBeValid;
      })), n;
    }
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    (function (r, o) {
      var a, i, c, u;
      /*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
      */

      u = function u() {
        "use strict";

        var e,
            t,
            n,
            r = Object.prototype.toString,
            a = void 0 !== o ? function (e) {
          return o(e);
        } : setTimeout;

        try {
          Object.defineProperty({}, "x", {}), e = function e(_e, t, n, r) {
            return Object.defineProperty(_e, t, {
              value: n,
              writable: !0,
              configurable: !1 !== r
            });
          };
        } catch (t) {
          e = function e(_e2, t, n) {
            return _e2[t] = n, _e2;
          };
        }

        function i(e, r) {
          n.add(e, r), t || (t = a(n.drain));
        }

        function c(e) {
          var t,
              n = _typeof(e);

          return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t;
        }

        function u() {
          for (var e = 0; e < this.chain.length; e++) {
            s(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
          }

          this.chain.length = 0;
        }

        function s(e, t, n) {
          var r, o;

          try {
            !1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = c(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r);
          } catch (e) {
            n.reject(e);
          }
        }

        function l(e) {
          var t,
              n = this;

          if (!n.triggered) {
            n.triggered = !0, n.def && (n = n.def);

            try {
              (t = c(e)) ? i(function () {
                var r = new p(n);

                try {
                  t.call(e, function () {
                    l.apply(r, arguments);
                  }, function () {
                    f.apply(r, arguments);
                  });
                } catch (e) {
                  f.call(r, e);
                }
              }) : (n.msg = e, n.state = 1, n.chain.length > 0 && i(u, n));
            } catch (e) {
              f.call(new p(n), e);
            }
          }
        }

        function f(e) {
          var t = this;
          t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, t.chain.length > 0 && i(u, t));
        }

        function d(e, t, n, r) {
          for (var o = 0; o < t.length; o++) {
            !function (o) {
              e.resolve(t[o]).then(function (e) {
                n(o, e);
              }, r);
            }(o);
          }
        }

        function p(e) {
          this.def = e, this.triggered = !1;
        }

        function h(e) {
          this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
        }

        function y(e) {
          if ("function" != typeof e) throw TypeError("Not a function");
          if (0 !== this.__NPO__) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var t = new h(this);
          this.then = function (e, n) {
            var r = {
              success: "function" != typeof e || e,
              failure: "function" == typeof n && n
            };
            return r.promise = new this.constructor(function (e, t) {
              if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
              r.resolve = e, r.reject = t;
            }), t.chain.push(r), 0 !== t.state && i(u, t), r.promise;
          }, this["catch"] = function (e) {
            return this.then(void 0, e);
          };

          try {
            e.call(void 0, function (e) {
              l.call(t, e);
            }, function (e) {
              f.call(t, e);
            });
          } catch (e) {
            f.call(t, e);
          }
        }

        n = function () {
          var e, n, r;

          function o(e, t) {
            this.fn = e, this.self = t, this.next = void 0;
          }

          return {
            add: function add(t, a) {
              r = new o(t, a), n ? n.next = r : e = r, n = r, r = void 0;
            },
            drain: function drain() {
              var r = e;

              for (e = n = t = void 0; r;) {
                r.fn.call(r.self), r = r.next;
              }
            }
          };
        }();

        var m = e({}, "constructor", y, !1);
        return y.prototype = m, e(m, "__NPO__", 0, !1), e(y, "resolve", function (e) {
          return e && "object" == _typeof(e) && 1 === e.__NPO__ ? e : new this(function (t, n) {
            if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
            t(e);
          });
        }), e(y, "reject", function (e) {
          return new this(function (t, n) {
            if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
            n(e);
          });
        }), e(y, "all", function (e) {
          var t = this;
          return "[object Array]" != r.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function (n, r) {
            if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
            var o = e.length,
                a = Array(o),
                i = 0;
            d(t, e, function (e, t) {
              a[e] = t, ++i === o && n(a);
            }, r);
          });
        }), e(y, "race", function (e) {
          var t = this;
          return "[object Array]" != r.call(e) ? t.reject(TypeError("Not an array")) : new t(function (n, r) {
            if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
            d(t, e, function (e, t) {
              n(t);
            }, r);
          });
        }), y;
      }, (c = void 0 !== r ? r : this)[i = "Promise"] = c[i] || u(), e.exports ? e.exports = c[i] : void 0 === (a = function () {
        return c[i];
      }.call(t, n, t, e)) || (e.exports = a);
    }).call(this, n(9), n(11).setImmediate);
  }, function (e, t, n) {
    (function (e) {
      var r = Function.prototype.apply;

      function o(e, t) {
        this._id = e, this._clearFn = t;
      }

      t.setTimeout = function () {
        return new o(r.call(setTimeout, window, arguments), clearTimeout);
      }, t.setInterval = function () {
        return new o(r.call(setInterval, window, arguments), clearInterval);
      }, t.clearTimeout = t.clearInterval = function (e) {
        e && e.close();
      }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
        this._clearFn.call(window, this._id);
      }, t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
      }, t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
      }, t._unrefActive = t.active = function (e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function () {
          e._onTimeout && e._onTimeout();
        }, t));
      }, n(12), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
    }).call(this, n(9));
  }, function (e, t, n) {
    (function (e, t) {
      !function (e, n) {
        "use strict";

        if (!e.setImmediate) {
          var r,
              o,
              a,
              i,
              c,
              u = 1,
              s = {},
              l = !1,
              f = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
          d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function r(e) {
            t.nextTick(function () {
              h(e);
            });
          } : !function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                  n = e.onmessage;
              return e.onmessage = function () {
                t = !1;
              }, e.postMessage("", "*"), e.onmessage = n, t;
            }
          }() ? e.MessageChannel ? ((a = new MessageChannel()).port1.onmessage = function (e) {
            h(e.data);
          }, r = function r(e) {
            a.port2.postMessage(e);
          }) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function r(e) {
            var t = f.createElement("script");
            t.onreadystatechange = function () {
              h(e), t.onreadystatechange = null, o.removeChild(t), t = null;
            }, o.appendChild(t);
          }) : r = function r(e) {
            setTimeout(h, 0, e);
          } : (i = "setImmediate$" + Math.random() + "$", c = function c(t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && h(+t.data.slice(i.length));
          }, e.addEventListener ? e.addEventListener("message", c, !1) : e.attachEvent("onmessage", c), r = function r(t) {
            e.postMessage(i + t, "*");
          }), d.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));

            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) {
              t[n] = arguments[n + 1];
            }

            var o = {
              callback: e,
              args: t
            };
            return s[u] = o, r(u), u++;
          }, d.clearImmediate = p;
        }

        function p(e) {
          delete s[e];
        }

        function h(e) {
          if (l) setTimeout(h, 0, e);else {
            var t = s[e];

            if (t) {
              l = !0;

              try {
                !function (e) {
                  var t = e.callback,
                      n = e.args;

                  switch (n.length) {
                    case 0:
                      t();
                      break;

                    case 1:
                      t(n[0]);
                      break;

                    case 2:
                      t(n[0], n[1]);
                      break;

                    case 3:
                      t(n[0], n[1], n[2]);
                      break;

                    default:
                      t.apply(void 0, n);
                  }
                }(t);
              } finally {
                p(e), l = !1;
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self);
    }).call(this, n(9), n(13));
  }, function (e, t) {
    var n,
        r,
        o = e.exports = {};

    function a() {
      throw new Error("setTimeout has not been defined");
    }

    function i() {
      throw new Error("clearTimeout has not been defined");
    }

    function c(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        n = a;
      }

      try {
        r = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        r = i;
      }
    }();
    var u,
        s = [],
        l = !1,
        f = -1;

    function d() {
      l && u && (l = !1, u.length ? s = u.concat(s) : f = -1, s.length && p());
    }

    function p() {
      if (!l) {
        var e = c(d);
        l = !0;

        for (var t = s.length; t;) {
          for (u = s, s = []; ++f < t;) {
            u && u[f].run();
          }

          f = -1, t = s.length;
        }

        u = null, l = !1, function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(e);
      }
    }

    function h(e, t) {
      this.fun = e, this.array = t;
    }

    function y() {}

    o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      s.push(new h(e, t)), 1 !== s.length || l || c(p);
    }, h.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function (e) {
      return [];
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    var r, o;
    /**
    * @file Web Cryptography API shim
    * @author Artem S Vybornov <vybornov@gmail.com>
    * @license MIT
    */

    o = "undefined" != typeof self ? self : this, void 0 === (r = function () {
      return function (e) {
        "use strict";

        if ("function" != typeof Promise) throw "Promise support required";
        var t = e.crypto || e.msCrypto;

        if (t) {
          var n = t.subtle || t.webkitSubtle;

          if (n) {
            var r = e.Crypto || t.constructor || Object,
                o = e.SubtleCrypto || n.constructor || Object,
                a = (e.CryptoKey || e.Key, e.navigator.userAgent.indexOf("Edge/") > -1),
                i = !!e.msCrypto && !a,
                c = !t.subtle && !!t.webkitSubtle;

            if (i || c) {
              var u = {
                KoZIhvcNAQEB: "1.2.840.113549.1.1.1"
              },
                  s = {
                "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
              };

              if (["generateKey", "importKey", "unwrapKey"].forEach(function (e) {
                var r = n[e];

                n[e] = function (o, a, u) {
                  var s,
                      l,
                      f,
                      h,
                      v = [].slice.call(arguments);

                  switch (e) {
                    case "generateKey":
                      s = y(o), l = a, f = u;
                      break;

                    case "importKey":
                      s = y(u), l = v[3], f = v[4], "jwk" === o && ((a = E(a)).alg || (a.alg = m(s)), a.key_ops || (a.key_ops = "oct" !== a.kty ? "d" in a ? f.filter(R) : f.filter(w) : f.slice()), v[1] = g(a));
                      break;

                    case "unwrapKey":
                      s = v[4], l = v[5], f = v[6], v[2] = u._key;
                  }

                  if ("generateKey" === e && "HMAC" === s.name && s.hash) return s.length = s.length || {
                    "SHA-1": 512,
                    "SHA-256": 512,
                    "SHA-384": 1024,
                    "SHA-512": 1024
                  }[s.hash.name], n.importKey("raw", t.getRandomValues(new Uint8Array(s.length + 7 >> 3)), s, l, f);
                  if (c && "generateKey" === e && "RSASSA-PKCS1-v1_5" === s.name && (!s.modulusLength || s.modulusLength >= 2048)) return (o = y(o)).name = "RSAES-PKCS1-v1_5", delete o.hash, n.generateKey(o, !0, ["encrypt", "decrypt"]).then(function (e) {
                    return Promise.all([n.exportKey("jwk", e.publicKey), n.exportKey("jwk", e.privateKey)]);
                  }).then(function (e) {
                    return e[0].alg = e[1].alg = m(s), e[0].key_ops = f.filter(w), e[1].key_ops = f.filter(R), Promise.all([n.importKey("jwk", e[0], s, !0, e[0].key_ops), n.importKey("jwk", e[1], s, l, e[1].key_ops)]);
                  }).then(function (e) {
                    return {
                      publicKey: e[0],
                      privateKey: e[1]
                    };
                  });
                  if ((c || i && "SHA-1" === (s.hash || {}).name) && "importKey" === e && "jwk" === o && "HMAC" === s.name && "oct" === a.kty) return n.importKey("raw", p(d(a.k)), u, v[3], v[4]);
                  if (c && "importKey" === e && ("spki" === o || "pkcs8" === o)) return n.importKey("jwk", b(a), u, v[3], v[4]);
                  if (i && "unwrapKey" === e) return n.decrypt(v[3], u, a).then(function (e) {
                    return n.importKey(o, e, v[4], v[5], v[6]);
                  });

                  try {
                    h = r.apply(n, v);
                  } catch (e) {
                    return Promise.reject(e);
                  }

                  return i && (h = new Promise(function (e, t) {
                    h.onabort = h.onerror = function (e) {
                      t(e);
                    }, h.oncomplete = function (t) {
                      e(t.target.result);
                    };
                  })), h = h.then(function (e) {
                    return "HMAC" === s.name && (s.length || (s.length = 8 * e.algorithm.length)), 0 == s.name.search("RSA") && (s.modulusLength || (s.modulusLength = (e.publicKey || e).algorithm.modulusLength), s.publicExponent || (s.publicExponent = (e.publicKey || e).algorithm.publicExponent)), e = e.publicKey && e.privateKey ? {
                      publicKey: new T(e.publicKey, s, l, f.filter(w)),
                      privateKey: new T(e.privateKey, s, l, f.filter(R))
                    } : new T(e, s, l, f);
                  });
                };
              }), ["exportKey", "wrapKey"].forEach(function (e) {
                var t = n[e];

                n[e] = function (r, o, a) {
                  var u,
                      s = [].slice.call(arguments);

                  switch (e) {
                    case "exportKey":
                      s[1] = o._key;
                      break;

                    case "wrapKey":
                      s[1] = o._key, s[2] = a._key;
                  }

                  if ((c || i && "SHA-1" === (o.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === r && "HMAC" === o.algorithm.name && (s[0] = "raw"), !c || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (s[0] = "jwk"), i && "wrapKey" === e) return n.exportKey(r, o).then(function (e) {
                    return "jwk" === r && (e = p(unescape(encodeURIComponent(JSON.stringify(E(e)))))), n.encrypt(s[3], a, e);
                  });

                  try {
                    u = t.apply(n, s);
                  } catch (e) {
                    return Promise.reject(e);
                  }

                  return i && (u = new Promise(function (e, t) {
                    u.onabort = u.onerror = function (e) {
                      t(e);
                    }, u.oncomplete = function (t) {
                      e(t.target.result);
                    };
                  })), "exportKey" === e && "jwk" === r && (u = u.then(function (e) {
                    return (c || i && "SHA-1" === (o.algorithm.hash || {}).name) && "HMAC" === o.algorithm.name ? {
                      kty: "oct",
                      alg: m(o.algorithm),
                      key_ops: o.usages.slice(),
                      ext: !0,
                      k: f(h(e))
                    } : ((e = E(e)).alg || (e.alg = m(o.algorithm)), e.key_ops || (e.key_ops = "public" === o.type ? o.usages.filter(w) : "private" === o.type ? o.usages.filter(R) : o.usages.slice()), e);
                  })), !c || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (u = u.then(function (e) {
                    return e = v(E(e));
                  })), u;
                };
              }), ["encrypt", "decrypt", "sign", "verify"].forEach(function (e) {
                var t = n[e];

                n[e] = function (r, o, a, c) {
                  if (i && (!a.byteLength || c && !c.byteLength)) throw new Error("Empy input is not allowed");
                  var u,
                      s = [].slice.call(arguments),
                      l = y(r);

                  if (!i || "sign" !== e && "verify" !== e || "RSASSA-PKCS1-v1_5" !== r && "HMAC" !== r || (s[0] = {
                    name: r
                  }), i && o.algorithm.hash && (s[0].hash = s[0].hash || o.algorithm.hash), i && "decrypt" === e && "AES-GCM" === l.name) {
                    var f = r.tagLength >> 3;
                    s[2] = (a.buffer || a).slice(0, a.byteLength - f), r.tag = (a.buffer || a).slice(a.byteLength - f);
                  }

                  s[1] = o._key;

                  try {
                    u = t.apply(n, s);
                  } catch (e) {
                    return Promise.reject(e);
                  }

                  return i && (u = new Promise(function (t, n) {
                    u.onabort = u.onerror = function (e) {
                      n(e);
                    }, u.oncomplete = function (n) {
                      if (n = n.target.result, "encrypt" === e && n instanceof AesGcmEncryptResult) {
                        var r = n.ciphertext,
                            o = n.tag;
                        (n = new Uint8Array(r.byteLength + o.byteLength)).set(new Uint8Array(r), 0), n.set(new Uint8Array(o), r.byteLength), n = n.buffer;
                      }

                      t(n);
                    };
                  })), u;
                };
              }), i) {
                var l = n.digest;
                n.digest = function (e, t) {
                  if (!t.byteLength) throw new Error("Empy input is not allowed");
                  var r;

                  try {
                    r = l.call(n, e, t);
                  } catch (e) {
                    return Promise.reject(e);
                  }

                  return r = new Promise(function (e, t) {
                    r.onabort = r.onerror = function (e) {
                      t(e);
                    }, r.oncomplete = function (t) {
                      e(t.target.result);
                    };
                  });
                }, e.crypto = Object.create(t, {
                  getRandomValues: {
                    value: function value(e) {
                      return t.getRandomValues(e);
                    }
                  },
                  subtle: {
                    value: n
                  }
                }), e.CryptoKey = T;
              }

              c && (t.subtle = n, e.Crypto = r, e.SubtleCrypto = o, e.CryptoKey = T);
            }
          }
        }

        function f(e) {
          return btoa(e).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
        }

        function d(e) {
          return e = (e += "===").slice(0, -e.length % 4), atob(e.replace(/-/g, "+").replace(/_/g, "/"));
        }

        function p(e) {
          for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
            t[n] = e.charCodeAt(n);
          }

          return t;
        }

        function h(e) {
          return e instanceof ArrayBuffer && (e = new Uint8Array(e)), String.fromCharCode.apply(String, e);
        }

        function y(e) {
          var t = {
            name: (e.name || e || "").toUpperCase().replace("V", "v")
          };

          switch (t.name) {
            case "SHA-1":
            case "SHA-256":
            case "SHA-384":
            case "SHA-512":
              break;

            case "AES-CBC":
            case "AES-GCM":
            case "AES-KW":
              e.length && (t.length = e.length);
              break;

            case "HMAC":
              e.hash && (t.hash = y(e.hash)), e.length && (t.length = e.length);
              break;

            case "RSAES-PKCS1-v1_5":
              e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
              break;

            case "RSASSA-PKCS1-v1_5":
            case "RSA-OAEP":
              e.hash && (t.hash = y(e.hash)), e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
              break;

            default:
              throw new SyntaxError("Bad algorithm name");
          }

          return t;
        }

        function m(e) {
          return {
            HMAC: {
              "SHA-1": "HS1",
              "SHA-256": "HS256",
              "SHA-384": "HS384",
              "SHA-512": "HS512"
            },
            "RSASSA-PKCS1-v1_5": {
              "SHA-1": "RS1",
              "SHA-256": "RS256",
              "SHA-384": "RS384",
              "SHA-512": "RS512"
            },
            "RSAES-PKCS1-v1_5": {
              "": "RSA1_5"
            },
            "RSA-OAEP": {
              "SHA-1": "RSA-OAEP",
              "SHA-256": "RSA-OAEP-256"
            },
            "AES-KW": {
              128: "A128KW",
              192: "A192KW",
              256: "A256KW"
            },
            "AES-GCM": {
              128: "A128GCM",
              192: "A192GCM",
              256: "A256GCM"
            },
            "AES-CBC": {
              128: "A128CBC",
              192: "A192CBC",
              256: "A256CBC"
            }
          }[e.name][(e.hash || {}).name || e.length || ""];
        }

        function E(e) {
          (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(h(e)))));
          var t = {
            kty: e.kty,
            alg: e.alg,
            ext: e.ext || e.extractable
          };

          switch (t.kty) {
            case "oct":
              t.k = e.k;

            case "RSA":
              ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach(function (n) {
                n in e && (t[n] = e[n]);
              });
              break;

            default:
              throw new TypeError("Unsupported key type");
          }

          return t;
        }

        function g(e) {
          var t = E(e);
          return i && (t.extractable = t.ext, delete t.ext), p(unescape(encodeURIComponent(JSON.stringify(t)))).buffer;
        }

        function b(e) {
          var t = A(e),
              n = !1;
          t.length > 2 && (n = !0, t.shift());
          var r = {
            ext: !0
          };

          switch (t[0][0]) {
            case "1.2.840.113549.1.1.1":
              var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
                  a = A(t[1]);
              n && a.shift();

              for (var i = 0; i < a.length; i++) {
                a[i][0] || (a[i] = a[i].subarray(1)), r[o[i]] = f(h(a[i]));
              }

              r.kty = "RSA";
              break;

            default:
              throw new TypeError("Unsupported key type");
          }

          return r;
        }

        function v(e) {
          var t,
              n = [["", null]],
              r = !1;

          switch (e.kty) {
            case "RSA":
              for (var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"], a = [], i = 0; i < o.length && o[i] in e; i++) {
                var c = a[i] = p(d(e[o[i]]));
                128 & c[0] && (a[i] = new Uint8Array(c.length + 1), a[i].set(c, 1));
              }

              a.length > 2 && (r = !0, a.unshift(new Uint8Array([0]))), n[0][0] = "1.2.840.113549.1.1.1", t = a;
              break;

            default:
              throw new TypeError("Unsupported key type");
          }

          return n.push(new Uint8Array(O(t)).buffer), r ? n.unshift(new Uint8Array([0])) : n[1] = {
            tag: 3,
            value: n[1]
          }, new Uint8Array(O(n)).buffer;
        }

        function A(e, t) {
          if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), t || (t = {
            pos: 0,
            end: e.length
          }), t.end - t.pos < 2 || t.end > e.length) throw new RangeError("Malformed DER");
          var n,
              r = e[t.pos++],
              o = e[t.pos++];

          if (o >= 128) {
            if (o &= 127, t.end - t.pos < o) throw new RangeError("Malformed DER");

            for (var a = 0; o--;) {
              a <<= 8, a |= e[t.pos++];
            }

            o = a;
          }

          if (t.end - t.pos < o) throw new RangeError("Malformed DER");

          switch (r) {
            case 2:
              n = e.subarray(t.pos, t.pos += o);
              break;

            case 3:
              if (e[t.pos++]) throw new Error("Unsupported bit string");
              o--;

            case 4:
              n = new Uint8Array(e.subarray(t.pos, t.pos += o)).buffer;
              break;

            case 5:
              n = null;
              break;

            case 6:
              var i = btoa(h(e.subarray(t.pos, t.pos += o)));
              if (!(i in u)) throw new Error("Unsupported OBJECT ID " + i);
              n = u[i];
              break;

            case 48:
              n = [];

              for (var c = t.pos + o; t.pos < c;) {
                n.push(A(e, t));
              }

              break;

            default:
              throw new Error("Unsupported DER tag 0x" + r.toString(16));
          }

          return n;
        }

        function O(e, t) {
          t || (t = []);
          var n = 0,
              r = 0,
              o = t.length + 2;

          if (t.push(0, 0), e instanceof Uint8Array) {
            n = 2, r = e.length;

            for (var a = 0; a < r; a++) {
              t.push(e[a]);
            }
          } else if (e instanceof ArrayBuffer) for (n = 4, r = e.byteLength, e = new Uint8Array(e), a = 0; a < r; a++) {
            t.push(e[a]);
          } else if (null === e) n = 5, r = 0;else if ("string" == typeof e && e in s) {
            var i = p(atob(s[e]));

            for (n = 6, r = i.length, a = 0; a < r; a++) {
              t.push(i[a]);
            }
          } else if (e instanceof Array) {
            for (a = 0; a < e.length; a++) {
              O(e[a], t);
            }

            n = 48, r = t.length - o;
          } else {
            if (!("object" == _typeof(e) && 3 === e.tag && e.value instanceof ArrayBuffer)) throw new Error("Unsupported DER value " + e);

            for (n = 3, r = (e = new Uint8Array(e.value)).byteLength, t.push(0), a = 0; a < r; a++) {
              t.push(e[a]);
            }

            r++;
          }

          if (r >= 128) {
            var c = r;

            for (r = 4, t.splice(o, 0, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c); r > 1 && !(c >> 24);) {
              c <<= 8, r--;
            }

            r < 4 && t.splice(o, 4 - r), r |= 128;
          }

          return t.splice(o - 2, 2, n, r), t;
        }

        function T(e, t, n, r) {
          Object.defineProperties(this, {
            _key: {
              value: e
            },
            type: {
              value: e.type,
              enumerable: !0
            },
            extractable: {
              value: void 0 === n ? e.extractable : n,
              enumerable: !0
            },
            algorithm: {
              value: void 0 === t ? e.algorithm : t,
              enumerable: !0
            },
            usages: {
              value: void 0 === r ? e.usages : r,
              enumerable: !0
            }
          });
        }

        function w(e) {
          return "verify" === e || "encrypt" === e || "wrapKey" === e;
        }

        function R(e) {
          return "sign" === e || "decrypt" === e || "unwrapKey" === e;
        }
      }(o);
    }.apply(t, [])) || (e.exports = r);
  }, function (e, t, n) {},,, function (e, t, n) {
    "use strict";

    n.r(t);
    n(10), n(14);
    var r = n(4),
        o = n.n(r),
        a = (n(15), n(1)),
        i = n(7),
        c = n(0),
        u = n(2),
        s = n(3),
        l = n(5),
        f = "aria-label",
        d = "aria-required",
        p = n(8);

    function h(e, t) {
      var n = Object.assign({}, e);
      return Object.keys(t).forEach(function (e) {
        void 0 === n[e] && (n[e] = {}), Object.assign(n[e], t[e]);
      }), n;
    }

    var y = {
      sn: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyPplg0WU2ETMcCQUrGn2RGzH8lmaau9lVDMvGwGaEsWKWezSxNFiwhdo4fqZ1eDEaCV9/6CColJyldF0rGNT4FSdZ+S2qk2wp/jZNVNaQh2IR8uhx7oIErfRKUUFICG9vW6NqT3leGwnKMBftR613+FZBI+Nqa58vkxc974LF6f/wyaPNOZD73V+/vXa7cXSW8Dl/3jEEITjX0+GKMOW+sn6lQC/aBftdnvFEdh02hyq0/2uO3BesuUtzkaIqZvZMR6EGOupCpChFx6lNa3SOsWQ5zxrrbPfcv1FOSOwXrsM/V0UpmpsSx/TThZwJAokJz1nWPBZY4JTZZ1I9QQvHQIDAQAB",
      j4: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjfLZPWMRfE2k/Hl6k1lyPr4es4QK6I94y3aCKjfh2LvKOoEdd8tWJvh4JU0la5kM6kCvp5j2T4ZLPksEYOJGny70+5OleZD5P+oagMmo5oq2q50IIk2b3TssVyGb/mJn6bSGXH8gtEht7MKaZdvXTflLOncxCF8QGwrA9bk9zW8IQvi1RXXZNHuqn95T/9XKGpussdReP9IgyGH3sCMk+Q/gXUJpUqQF/H1uJdm1A4Xe2zgokG8I/2BPFkEeO6DL1H3y+WN9EtAGtk47KH4jPYCVZoVqzpuz+qjcOGFuGiKxOKBzQ22lh3kDzf15b6A7m/SQ6m0vD2frMEGvlC7URQIDAQAB",
      "3g": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAir7Nl1Bj8G9rxr3co5v/JLkP3o9UxXZRX1LIZFZeckguEf7Gdt5kGFFfTsymKBesm3Pe8o1hwfkq7KmJZEZSuDbiJSZvFBZycK2pEeBjycahw9CqOweM7aKG2F/bhwVHrY4YdKsp/cSJe/ZMXFUqYmjk7D0p7clX6CmR1QgMl41Ajb7NHI23uOWL7PyfJQwP1X8HdunE6ZwKDNcavqxOW5VuW6nfsGvtygKQxjeHrI+gpyMXF0e/PeVpUIG0KVjmb5+em/Vd2SbyPNmenADGJGCmECYMgL5hEvnTuyAybwgVwuM9amyfFqIbRcrAIzclT4jQBeZFwkzZfQF7MgA6QQIDAQAB",
      zu: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAozmvkuGzWNHs9cEcC5PWwbG+dmSjPcoQFxEbqH/fBjkj/nfTTKshdiSq5ciulWEa/rrqQ2qwcSADNxtTzRR1qfud+NvsM8VltT7xDuVVqPTZoWLKa0BWXgQQ+1mCm1KdGltYWccB0R1LoF+rb3DEEZySsHvqErYzYt4M/rqjEiK5Y9y1h3k1h5Yk4zGLWchko3jiDS+pVevvWsQsN+Y3KuB19485G9P/MXLtfJWQ4wC4jlo9etdD/hgDfxX+hQy3wuwHfHifLdxvxiB8X5Is4m6DuY4/7hS5RwXAjO1QSd+zUYZNT/2yWVR56/jyiZEiOdgIm9QtLPZCTKzqsXoqZQIDAQAB",
      ln: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg1Rzx+fgWZRG85rr2BGDEllGL1ktK5i9d1+5yXmP5BKm9jgXuNobr2QyBIZoii5yfkRiswpqkflARJl9kmkOCFaZ0b5p0/h530V/DZyam9SrMfGST9jiNu7W7j/9iLHIVCRTeILeeW9/wBDWGeoEZCaBNIF+73zP08gzaQfEzvu37R2hqkk7MSh4HuWj8jXubUQYQxti89S1AfNoxKRYcTNBb/xYP9AeczjowU4QZwxFVKXn6//vCL5419fGPH+YQtGaJePHE0+u/PKV0GZxBzhR07DqjuuORmD6guLxejKAt/sSbvbVdJ7owhHYxZskVep1rfEekuSdxrHpJ6dm0QIDAQAB",
      wf: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmutlUOjmsHUaPlCyQCSrxpH1fOFwUwHTCtB3lTVVcabVPaF3Cv+RYgLY47VjxwucRoNz5w6/Eupfw4MDqC2vYOxHT5iCjyIZtm7EPWPsuJh/u2xBcRcez6lWrQuKx9h6Sf/uJFq7Xl6Edwv2/x2bHcZSRyAsSawvVNeOnFcA3JT3ax7P26psE90CHG4/1O3IdsttGttY64ynNUxKj9hNa/Iwgxu9fnaDbcObaT8v5AkfYD2l1j3J+s46g9OlMY6CZS0P8sDBkZ6C+7tIkB5NLrMo88JfbRSshUSKZmhWiYgMHcxUgwDs3cunI2aWIEegQZwgDNyiQxV2Xd2aQr2BEwIDAQAB"
    };

    function m(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            r = !0,
            o = !1,
            a = void 0;

        try {
          for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (e) {
          o = !0, a = e;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (o) throw a;
          }
        }

        return n;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return E(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    var g = {
      RS512: {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      },
      RS256: {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      }
    };

    var b = function b(e, t) {
      return window.crypto.subtle.importKey("spki", function (e) {
        for (var t = e.split("\n"), n = "", r = 0; r < t.length; r += 1) {
          n += t[r].trim();
        }

        return Object(c.q)(atob(n));
      }(e), t, !1, ["verify"]);
    },
        v = function v(e, t, n, r) {
      return window.crypto.subtle.verify(e, t, Object(c.q)(atob(n.replace(/-/g, "+").replace(/_/g, "/"))), Object(c.q)(r));
    };

    function A(e, t) {
      var n = document.createElement("input");
      return n.type = "text", n.name = e, n.id = "".concat(e, "-autocomplete"), n.className = "autocomplete", Object(c.n)(n, t), n.tabIndex = -1, n.setAttribute("aria-hidden", !0), n;
    }

    var O = function O(e, t, n, r) {
      if (e === s.NUMBER && "FORM" === t.nodeName) {
        Object(c.n)(n, "cc-number");
        var o = [A("name", "cc-name"), A("expirationMonth", "cc-exp-month"), A("expirationYear", "cc-exp-year")],
            a = !1,
            i = !1;
        o.forEach(function (e) {
          return e.addEventListener("change", d);
        }), n.addEventListener("input", function () {
          a && (a = !1, r.publish(l.a));
        });
        var f = document.createDocumentFragment();
        o.forEach(function (e) {
          return f.appendChild(e);
        }), t.appendChild(f);
      } else Object(c.n)(n, "off");

      function d() {
        i || (i = !0, setTimeout(function () {
          var e = o.reduce(function (e, t) {
            return t.value && (e[t.name] = t.value), e;
          }, {});
          (a = Object.keys(e).length > 0) && (r.publish(u.AUTOCOMPLETE, e), o.forEach(function (e) {
            e.value = "";
          })), i = !1;
        }, 5));
      }
    },
        T = [8, 9, 13, 27, 33, 34, 35, 36, 37, 39, 46, 110, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
        w = [65, 67, 86, 88, 187, 189],
        R = function R(e, t) {
      return t.indexOf(e) >= 0;
    },
        _ = function _(e) {
      var t;

      try {
        t = new Event("input");
      } catch (e) {
        (t = document.createEvent("HTMLEvents")).initEvent("input", !1, !1);
      }

      e.dispatchEvent(t);
    },
        S = function S(e) {
      e.stopPropagation(), e.preventDefault();
      var t = (e.clipboardData || window.clipboardData).getData("Text"),
          n = Object(c.r)(t),
          r = e.target,
          o = r.selectionStart,
          a = r.selectionEnd,
          i = e.target.value;
      setTimeout(function () {
        e.target.value = i.slice(0, o) + n + i.slice(a), _(e.target);

        for (var t = 0, r = n.length, c = 0; c <= r; c += 1) {
          " " === e.target.value.charAt(o + c) && (t += 1, r += 1);
        }

        var u = o + n.length + t;
        e.target.setSelectionRange(u, u);
      }, 0);
    },
        C = n(6),
        I = {
      microformId: {
        type: "string",
        required: !0,
        expression: function expression(e) {
          return Object(c.m)(e);
        }
      },
      fieldId: {
        type: "string",
        required: !0,
        expression: function expression(e) {
          return Object(c.m)(e);
        }
      },
      jwt: {
        type: "string",
        required: !0,
        expression: function expression(e) {
          return Object(c.h)(e);
        }
      },
      microformConfig: {
        type: "object",
        required: !1
      },
      config: {
        type: "object",
        required: !0
      },
      fieldType: {
        type: "string",
        required: !0,
        supportedValues: Object.keys(s).map(function (e) {
          return s[e];
        })
      }
    };

    void 0 === document.location.ancestorOrigins && (I.refererOrigin = {
      type: "string",
      required: !1
    });

    function N(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            r = !0,
            o = !1,
            a = void 0;

        try {
          for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (e) {
          o = !0, a = e;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (o) throw a;
          }
        }

        return n;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return j(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function j(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    var x = {
      name: "RSA-OAEP",
      hash: {
        name: "SHA-1"
      }
    };

    function L(e) {
      return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }

    function k(e, t) {
      return function (e) {
        var t = Object(c.p)(e);
        return /Edge/.test(window.navigator.userAgent) && delete t.use, window.crypto.subtle.importKey("jwk", t, x, !1, ["wrapKey"]);
      }(t).then(function (t) {
        return window.crypto.subtle.wrapKey("raw", e, t, {
          name: "RSA-OAEP",
          hash: {
            name: "SHA-1"
          }
        });
      });
    }

    function D(e, t, n, r) {
      if (Object.prototype.hasOwnProperty.call(t, "body")) {
        var o = {
          kid: t.body.flx.jwk.kid || "",
          alg: "RSA-OAEP",
          enc: "A256GCM"
        },
            a = {
          data: e,
          context: n,
          index: r
        },
            i = crypto.getRandomValues(new Uint8Array(12));
        return window.crypto.subtle.generateKey({
          name: "AES-GCM",
          length: 256
        }, !0, ["encrypt"]).then(function (e) {
          return function (e, t, n, r) {
            var o = {
              name: "AES-GCM",
              iv: r,
              additionalData: Object(c.q)(L(JSON.stringify(n))),
              tagLength: 128
            };
            return window.crypto.subtle.encrypt(o, t, Object(c.q)(JSON.stringify(e))).then(function (e) {
              return [e, t];
            });
          }(a, e, o, i);
        }).then(function (e) {
          var n = N(e, 2);
          return function (e, t, n, r, o) {
            var a = e.byteLength - 16;
            return k(t, o).then(function (t) {
              return [L(JSON.stringify(r)), L(Object(c.b)(t)), L(Object(c.b)(n)), L(Object(c.b)(e.slice(0, a))), L(Object(c.b)(e.slice(a)))].join(".");
            });
          }(n[0], n[1], i, o, t.body.flx.jwk || "");
        });
      }

      return Promise.reject(new Error("Invalid capture context"));
    }

    var P = "VALIDATION_ERROR",
        M = "RESOURCE_QUOTA_EXCEEDED",
        K = "TOKENIZATION_ERROR",
        U = "DECRYPTION_ERROR",
        B = "SIGNATURE_ERROR",
        F = "PROFILE_ERROR",
        V = "API_GATEWAY_ERROR",
        H = "JSON_PARSER_ERROR",
        q = "INTERNAL_ERROR";

    function Q(e) {
      switch (e.responseStatus && (e = e.responseStatus), e.reason) {
        case P:
          return function (e) {
            return "Cannot parse the POST body" === e.message ? a.a.API_JSON_PARSER_ERROR() : /^Cannot find private RSA key with keyId/.test(e.message) || "Cannot find the specified key" === e.message ? a.a.CREATE_TOKEN_CAPTURE_CONTEXT_NOT_FOUND() : "At least one non-empty field must be supplied for tokenization" === e.message ? a.a.CREATE_TOKEN_NO_DATA_SUBMITTED() : "One or more validation errors occurred" === e.message ? (e.details || []).map(function (e) {
              return e.location;
            }).indexOf("keyId") >= 0 ? a.a.CREATE_TOKEN_CAPTURE_CONTEXT_NOT_FOUND() : a.a.CREATE_TOKEN_VALIDATION_SERVERSIDE(e.details) : "Invalid JWE format" === e.message ? a.a.API_JWE_PARSING_ERROR() : a.a.CREATE_TOKEN_VALIDATION_SERVERSIDE();
          }(e);

        case M:
          return a.a.CREATE_TOKEN_CAPTURE_CONTEXT_USED_TOO_MANY_TIMES();

        case K:
          return a.a.CREATE_TOKEN_PLATFORM_ERROR();

        case U:
          return a.a.CREATE_TOKEN_DECRYPTION();

        case V:
          return a.a.API_GATEWAY_ERROR();

        case H:
          return a.a.API_JSON_PARSER_ERROR();

        case B:
        case F:
        case q:
          return a.a.API_INTERNAL_ERROR();

        default:
          return a.a.UNKNOWN_REASON(e);
      }
    }

    function G(e, t, n, r, o) {
      var i = e && e.body && e.body.flx && e.body.flx.origin && e.body.flx.path ? e.body.flx.origin + e.body.flx.path : "";
      D(n, e, t, r)["catch"](function () {
        return o(a.a.BROWSER_ENCRYPTION_FAILED());
      }).then(function (e) {
        return function (e, t, n) {
          if (!e) throw new Error("Error url required");
          if (!t) throw new Error("Error method required");
          var r = new XMLHttpRequest();
          return new Promise(function (o, a) {
            r.ontimeout = function () {
              return a({
                xhr: r,
                timeout: !0
              });
            }, r.onerror = function () {
              return a({
                xhr: r,
                error: !0
              });
            }, r.onload = function () {
              if (r.status >= 200 && r.status < 400) o(r.responseText);else {
                var e;

                try {
                  e = JSON.parse(r.responseText);
                } catch (t) {
                  e = r.responseText;
                }

                a({
                  xhr: r,
                  response: e
                });
              }
            }, r.open(t, e, !0), r.setRequestHeader("Content-Type", "application/jwt; charset=utf-8"), r.timeout = 3e4, Object(c.l)(n) ? r.send(n) : r.send();
            console.log(n);
          });
        }(i, "POST", e);
      })["catch"](function (e) {
        return o(function (e) {
          var t;
          if (t = !0 === e.error ? a.a.CREATE_TOKEN_XHR_ERROR() : !0 === e.timeout ? a.a.CREATE_TOKEN_TIMEOUT() : 4 === e.xhr.readyState && e.xhr.status && e.response ? Q(e.response) : a.a.API_INTERNAL_ERROR(), e.xhr.status && (t.status = e.xhr.status), e.xhr.getResponseHeader) try {
            t.correlationId = e.xhr.getResponseHeader("v-c-correlation-id");
          } catch (e) {}
          return t;
        }(e));
      }).then(function (e) {
        return o(Object(c.h)(e) ? e : a.a.MALFORMED_TOKENS_RESPONSE());
      });
    }

    var Y = ["color", "cursor", "font", "font-family", "font-kerning", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant", "font-weight", "line-height", "opacity", "text-rendering", "text-shadow", "transition", "-moz-osx-font-smoothing", "-moz-tap-highlight-color", "-moz-transition", "-o-transition", "-webkit-font-smoothing", "-webkit-tap-highlight-color", "-webkit-transition"];

    function W(e) {
      return (W = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function J(e) {
      var t = [];
      return "object" === W(e) && Object.keys(e).forEach(function (n) {
        var r;
        r = n, Y.indexOf(r) >= 0 ? t += "".concat(n, ":").concat(e[n], ";") : console.warn("Unsupported css property: '".concat(n, "'"));
      }), t;
    }

    function Z(e, t, n, r) {
      e.insertRule("".concat(t, " {").concat(J(n), "}"), r);
    }

    var z = window.location.origin,
        X = {
      postMessage: function postMessage(e) {
        for (var t = window.parent.frames, n = 0; n < t.length; n += 1) {
          try {
            t[n].location.origin === z && t[n].postMessage(e, z);
          } catch (e) {}
        }
      }
    };

    function $(e) {
      return ($ = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function ee(e) {
      return function (e) {
        if (Array.isArray(e)) return te(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return te(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return te(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function te(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    "function" != typeof Object.assign && (Object.assign = o.a);

    for (var ne = Object.keys(s).map(function (e) {
      return s[e];
    }), re = function (e) {
      try {
        var t = JSON.parse(decodeURIComponent(e));
        return Object(C.a)(t, I);
      } catch (e) {
        throw new Error("Error loading iframe");
      }
    }(window.location.hash.substr(1)), oe = re.jwt.split("."), ae = {
      header: JSON.parse(Object(c.t)(oe[0])),
      body: JSON.parse(Object(c.t)(oe[1])),
      signature: oe[2]
    }, ie = document.location.ancestorOrigins ? document.location.ancestorOrigins[0] : re.refererOrigin || "_", ce = -1, ue = 0; ue < ae.body.ctx.length; ue += 1) {
      if (/^mf-/.test(ae.body.ctx[ue].type)) {
        ce = ue;
        break;
      }
    }

    if (ce < 0) throw a.a.CAPTURE_CONTEXT_INVALID();
    if (ae.body.ctx[ce].data.targetOrigins.indexOf(ie) < 0) throw a.a.CAPTURE_CONTEXT_INVALID();
    var se = {
      jwt: ae,
      microformId: re.microformId,
      fieldId: re.fieldId,
      fieldType: re.fieldType,
      mfContextIndex: ce,
      ui: {
        deletionKeyPressed: !1,
        tabDirection: {},
        tokenizationInProgress: !1
      },
      microformConfig: re.microformConfig || {},
      fieldConfig: re.config || {},
      state: {
        empty: !0,
        couldBeValid: !1,
        valid: !1
      }
    },
        le = !/Android 7/i.test("undefined" != typeof navigator && navigator.userAgent) && !1 !== re.config.autoformat,
        fe = le ? 22 : 19,
        de = [3, 4],
        pe = {};
    pe[s.NUMBER] = "Card number", pe[s.SECURITY_CODE] = "Card security code";
    se.fieldType === s.NUMBER ? o()(se.state, {
      card: []
    }) : se.fieldType === s.SECURITY_CODE && (se.ui.securityCodeMaxLength = 3), function (e) {
      try {
        if (!Object(c.h)(e)) throw new Error();
        var t = m(e.split("."), 3),
            n = t[0],
            r = t[1],
            o = t[2],
            a = JSON.parse(atob(n));
        if (!a.kid || !a.alg || Object.keys(g).indexOf(a.alg) < 0) throw new Error();
        var i = g[a.alg];
        return Promise.resolve(y[a.kid]).then(function (e) {
          return b(e, i);
        }).then(function (e) {
          return v(i, e, o, "".concat(n, ".").concat(r));
        })["catch"](function () {
          return !1;
        }).then(function (e) {
          return !0 === e;
        });
      } catch (e) {
        return Promise.resolve(!1);
      }
    }(re.jwt).then(function (e) {
      if (!1 !== e) {
        var t = se.fieldType === s.NUMBER ? document.createElement("form") : document.createElement("div"),
            n = document.createElement("input"),
            r = document.createElement("div");
        r.classList.add("field-description");

        var o = Object(i.a)(window.parent, se.fieldId, ie),
            y = function (e, t) {
          if (!Object(c.l)(e)) throw new Error("Invalid microformId");
          if (!Object(c.l)(t)) throw new Error("Invalid fieldId");

          var n,
              r = {},
              o = function o(n) {
            n.data.microformId === e && n.data.fieldId !== t && r[n.data.topic] && r[n.data.topic].forEach(function (e) {
              return e(n.data.payload);
            });
          };

          try {
            (n = new BroadcastChannel(e)).onmessage = o;
          } catch (e) {
            n = X, window.addEventListener("message", o);
          }

          return {
            on: function on(e, t) {
              Object(c.l)(e) && Object(c.g)(t) && (r.hasOwnProperty.call(r, e) || (r[e] = []), r[e].push(t));
            },
            off: function off(e, t) {
              if (Object(c.l)(e) && Object(c.g)(t) && r.hasOwnProperty.call(r, e)) {
                var n = r[e].indexOf(t);
                n >= 0 && r[e].splice(n, 1);
              }
            },
            publish: function publish(r) {
              var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              Object(c.l)(r) && n.postMessage({
                microformId: e,
                fieldId: t,
                topic: r,
                payload: o
              });
            }
          };
        }(se.microformId, se.fieldId),
            m = /^(00[1-9]|0[1-9][0-9]|[1-9][0-9][0-9])$/,
            E = /^(0[1-9]|1[0-2])$/,
            g = /^(20[1-9][0-9])$/,
            b = ["type", "expirationMonth", "expirationYear"];

        switch (n.name = se.fieldType, r.id = "field-description-".concat(n.name), n.type = "tel", n.setAttribute("autocorrect", "off"), n.setAttribute("autocapitalize", "none"), n.spellcheck = !1, C(!1), I(), se.fieldType) {
          case s.NUMBER:
            n.setAttribute("maxLength", fe);
            break;

          case s.SECURITY_CODE:
            n.setAttribute("maxLength", 3);
            break;

          default:
            throw a.a.IFRAME_UNSUPPORTED_FIELD_TYPE(se.fieldType);
        }

        n.addEventListener("keypress", function (e) {
          return !(46 !== (n = (t = e).which ? t.which : t.keyCode) && n > 31 && (n < 48 || n > 57));
          var t, n;
        }), t.appendChild(M("start")), t.appendChild(n), O(se.fieldType, t, n, o), t.appendChild(M("end")), P(se.fieldType, se.fieldConfig), window.addEventListener("focus", function () {
          return setTimeout(function () {
            document.activeElement !== n && n.focus();
          }, 0);
        }), n.addEventListener("focus", function () {
          o.publish(u.FOCUS);
        }), n.addEventListener("blur", function (e) {
          switch ((e.relatedTarget || document.activeElement || {
            className: ""
          }).className) {
            case "focus-helper start":
              se.ui.tabDirection.focusShift = "previous";
              break;

            case "focus-helper end":
              se.ui.tabDirection.focusShift = "next";
              break;

            default:
              se.ui.tabDirection = {};
          }

          o.publish(u.BLUR, se.ui.tabDirection);
        }), n.addEventListener("keydown", function (e) {
          if (function (e) {
            var t = function (e) {
              return e.which || e.keyCode || 0;
            }(e),
                n = function (e, t) {
              return t.key ? /^\d+$/.test(t.key) : e >= 48 && e <= 57 || e >= 96 && e <= 105;
            }(t, e) || R(t, T) || R(t, w) && (!0 === e.ctrlKey || !0 === e.metaKey);

            return n || e.preventDefault(), n;
          }(e)) {
            var t = e.which || e.keyCode || 0;
            n.selectionStart !== n.selectionEnd || 8 !== t && 46 !== t ? se.ui.deletionKeyPressed = !1 : (n.selectionStart = function (e) {
              var t = n.selectionStart,
                  r = e.keyCode ? e.keyCode : e.which;

              if (8 === r) {
                if (" " === n.value.charAt(t - 2)) {
                  e.preventDefault();
                  var o = n.value;
                  n.value = o.slice(0, t - 2) + o.slice(t), t -= 2, _(e.target);
                }
              } else 46 === r && " " === n.value.charAt(t) && (t += 1);

              return t;
            }(e), n.selectionEnd = n.selectionStart, se.ui.deletionKeyPressed = !0);
          }
        }), n.addEventListener("keyup", function (e) {
          13 === (e.which || e.keyCode || 0) && o.publish(u.INPUT_SUBMIT_REQUEST);
        }), n.addEventListener("paste", S), n.addEventListener("input", function e(t) {
          t.target.value.length > 0 ? n.removeEventListener("input", e, !0) : t.stopImmediatePropagation();
        }, !0), se.fieldType === s.NUMBER ? n.addEventListener("input", N, !0) : se.fieldType === s.SECURITY_CODE && n.addEventListener("input", x, !0), se.fieldType === s.SECURITY_CODE && y.on("securityCodeLengthChange", function (e) {
          se.ui.securityCodeMaxLength = e.length, n.maxLength = se.ui.securityCodeMaxLength, n.value.length > 0 && (j(n.value.length, se.ui.securityCodeMaxLength), v());
        }), y.on("dataCollect", function (e) {
          y.publish(e.tokenizationId, A());
        }), o.subscribe(l.b, D), o.subscribe(l.d, K), o.subscribe(u.FOCUS, L), o.subscribe(u.BLUR, k), o.subscribe(u.UPDATE, function (e) {
          var t = P(se.fieldType, e);
          Object.keys(t).length > 0 && o.publish(u.UPDATE, t);
        }), document.body.appendChild(t), o.publish(u.LOAD);
      } else Object(i.a)(window.parent, se.fieldId, "*").publish(l.c, a.a.IFRAME_JWT_VALIDATION_FAILED());

      function v() {
        se.fieldType === s.NUMBER && y.publish("securityCodeLengthChange", {
          length: se.state.card.reduce(function (e, t) {
            return Math.max(e, t.securityCode.length);
          }, 3)
        }), o.publish(u.CHANGE, se.state);
      }

      function A() {
        var e = {
          field: se.fieldType,
          isValid: se.state.valid,
          data: {}
        };
        return se.fieldType === s.NUMBER ? (e.data.number = Object(c.s)(n.value), se.state.card.length >= 1 && (e.data.type = se.state.card[0].cybsCardType)) : e.data[se.fieldType] = n.value.trim(), e;
      }

      function C(e) {
        n.setAttribute("aria-invalid", !0 === e);
      }

      function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        n.setAttribute(f, e || pe[se.fieldType]);
      }

      function N(e) {
        var t,
            n,
            r = e.target.selectionStart,
            o = fe,
            a = Object(c.s)(e.target.value).slice(0, 19),
            i = Object(p["default"])(a);

        if (i.card = i.cards, delete i.cards, i.card.forEach(function (e) {
          return delete e.binRange;
        }), t = se.state, n = i, t.card.map(function (e) {
          return e.name + e.valid + e.couldBeValid;
        }).join() !== n.card.map(function (e) {
          return e.name + e.valid + e.couldBeValid;
        }).join() && (se.state = i, C(!se.state.couldBeValid)), se.state.empty = a.length < 1, se.state.card.length > 0 && (o = se.state.card.reduce(function (e, t) {
          var n = Math.max.apply(Math, ee(t.lengths));
          return le && (n += t.spaces.length), n > e ? n : e;
        }, 0)), e.target.maxLength = o, se.state.valid ? (e.target.classList.remove("invalid"), e.target.classList.add("valid")) : se.state.couldBeValid ? (e.target.classList.remove("invalid"), e.target.classList.remove("valid")) : (e.target.classList.remove("valid"), e.target.classList.add("invalid")), le && e.target.value.length > 0) {
          if (se.state.card.length > 0) {
            var u = function (e, t) {
              var n = t || [],
                  r = e.length;
              if (r < 1) return "";

              for (var o = "", a = 0, i = 0; i <= r; i += 1) {
                n.indexOf(a) > -1 && " " !== o.charAt(o.length - 1) && (o += " ");
                var c = e.charAt(i);
                " " !== c && (o += c, a += 1);
              }

              return o;
            }(a, function (e) {
              if (0 === e.length) return [];
              var t = e[0].spaces;
              if (1 === e.length) return t;
              var n = t.join();
              return e.every(function (e) {
                return e.spaces.join() === n;
              }) ? t : [];
            }(se.state.card));

            " " !== u.charAt(r) && " " !== u.charAt(r - 1) || !1 !== se.ui.deletionKeyPressed || (r += 1), e.target.value = u;
          } else e.target.value = a;

          e.target.setSelectionRange(r, r);
        }

        v();
      }

      function j(e, t) {
        se.state.empty = e < 1, se.state.couldBeValid = e > 0 && e <= t, se.state.valid = e === t;
      }

      function x(e) {
        e.target.value = Object(c.s)(e.target.value).slice(0, se.ui.securityCodeMaxLength), j(e.target.value.length, se.ui.securityCodeMaxLength), v();
      }

      function L() {
        n.focus();
      }

      function k() {
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
      }

      function D() {
        n.value && (t.reset ? t.reset() : n.value = "", _(n));
      }

      function P(e, o) {
        var i = ["placeholder", "title", "description", f, d, "disabled", "styles"];
        e === s.SECURITY_CODE && de.indexOf(o.maxLength) >= 0 && i.push("maxLength");
        var u,
            l,
            p = Object(c.v)(o, i);

        switch (se.fieldType) {
          case s.NUMBER:
            n.setAttribute("maxLength", fe);
            break;

          case s.SECURITY_CODE:
            n.setAttribute("maxLength", 3);
            break;

          default:
            throw a.a.IFRAME_UNSUPPORTED_FIELD_TYPE(se.fieldType);
        }

        Object(c.l)(p.placeholder) && function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          n.placeholder = e, n.setAttribute("aria-placeholder", e);
        }(p.placeholder), Object(c.l)(p.title) && function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          e ? n.title = e : n.removeAttribute("title");
        }(p.title), Object(c.l)(p.description) && function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          r.innerText = e || "", r.innerText ? (n.setAttribute("aria-describedby", r.id), t.appendChild(r)) : (n.removeAttribute("aria-describedby"), t.contains(r) && t.removeChild(r));
        }(p.description), Object(c.l)(p[f]) && I(p[f]), Object(c.e)(p[d]) && (u = p[d], n.setAttribute(d, !0 === u)), Object(c.e)(p.disabled) && function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          Object(c.d)();

          for (var n = (t || document).querySelectorAll("input"), r = 0; r < n.length; r += 1) {
            n[r].disabled = e;
          }
        }(p.disabled), Object(c.i)(p.maxLength) && (l = p.maxLength) !== se.ui.securityCodeMaxLength && (0 !== n.value && j(n.value.length, l), se.ui.securityCodeMaxLength = l, n.setAttribute("maxLength", l), n.value && v());
        var y = document.querySelectorAll("style"),
            m = y.length > 1;
        return m && "object" !== $(p.styles) || (m && (Object.prototype.hasOwnProperty.call(y[1], "remove") ? y[1].remove() : y[1].parentNode.removeChild(y[1])), se.fieldConfig.styles = h(se.fieldConfig.styles || {}, p.styles || {}), function (e) {
          if (null != e && !(Object(c.k)(e) && Object.keys(e).length < 1)) {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode("")), document.head.appendChild(t);
            var n = 0;

            if (Z(t.sheet, "input", e.input, n), Z(t.sheet, "input:disabled", e[":disabled"], n += 1), Z(t.sheet, "input:focus", e[":focus"], n += 1), Z(t.sheet, "input.valid", e.valid, n += 1), Z(t.sheet, "input.invalid", e.invalid, n += 1), e[":hover"] && Z(t.sheet, "input:hover", e[":hover"], n += 1), e["::placeholder"]) {
              n += 1;
              var r = e["::placeholder"];
              [":-ms-input-placeholder", "::-ms-input-placeholder", ":-moz-placeholder", "::-moz-placeholder", "::-webkit-input-placeholder", "::placeholder"].forEach(function (e) {
                try {
                  Z(t.sheet, "input".concat(e), r, n), n += 1;
                } catch (e) {}
              });
            }
          }
        }(h(se.microformConfig.styles || {}, se.fieldConfig.styles))), p;
      }

      function M(e) {
        var t = document.createElement("input");
        return t.className = "focus-helper ".concat(e), t.tabIndex = 0, t.readOnly = !0, Object(c.n)(t, "off"), t;
      }

      function K(e, t) {
        var n = new Set();
        if (e.fields.forEach(function (e) {
          ne.indexOf(e) >= 0 && n.add(e);
        }), n.size < 1) t(a.a.CREATE_TOKEN_NO_FIELDS());else {
          var r,
              o = Object(c.u)(),
              i = new Set(),
              u = new Set(),
              s = {},
              l = Object(c.v)(e.options, b),
              f = function e(f) {
            var d, p;

            if (f.field && f.data && !i.has(f.field) && (i.add(f.field), Object.assign(s, f.data), !0 !== f.isValid && u.add(f.field), Object(c.a)(n, i))) {
              r && clearTimeout(r), y.off(o, e), Object.assign(s, l);
              var h = (d = l, p = new Set(), void 0 === d.type || m.test(d.type) || p.add("type"), void 0 === d.expirationMonth || E.test(d.expirationMonth) || p.add("expirationMonth"), void 0 === d.expirationYear || g.test(d.expirationYear) || p.add("expirationYear"), Object(c.c)(p).sort());
              h.size > 0 ? t(a.a.CREATE_TOKEN_VALIDATION_PARAMS(Object(c.c)(h).sort())) : u.size > 0 ? t(a.a.CREATE_TOKEN_VALIDATION_FIELDS(Object(c.c)(u).sort())) : G(se.jwt, re.jwt, s, se.mfContextIndex, t);
            }
          };

          r = setTimeout(function () {
            y.off(o, f);
            var e = [];
            n.forEach(function (t) {
              i.has(t) || e.push(t);
            }), e.sort(), t(a.a.CREATE_TOKEN_TIMEOUT(e));
          }, 500), f(A()), y.on(o, f), y.publish("dataCollect", {
            tokenizationId: o
          });
        }
      }
    });
  }]);
});