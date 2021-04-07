"use strict";

var fetch = require('node-fetch');

var _require = require('./headers'),
    SEARCH_COOKIE = _require.SEARCH_COOKIE,
    USER_AGENT = _require.USER_AGENT;

var _require2 = require('../pokemon/node_modules/cs2-encryption/dist/index.js'),
    encrypt = _require2.encrypt; // change to dist to test production 


var findItem = function findItem(SKU) {
  var productSku, ENDPOINT, response;
  return regeneratorRuntime.async(function findItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          productSku = SKU.split('/')[4] || SKU; // filter SKU from link if finding with LINK

          ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/product?format=zoom.nodatalinks';
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(ENDPOINT, {
            headers: {
              "Content-type": "application/json",
              "accept": 'application/json',
              "access-control-allow-origin": "*",
              "Cookie": SEARCH_COOKIE,
              "accept-encoding": "gzip, deflate, br",
              "origin": "https://www.pokemoncenter.com",
              'authority': 'www.pokemoncenter.com',
              "sec-fetch-mode": "cors",
              "sec-fetch-dest": "empty",
              "sec-fetch-site": "same-origin",
              "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
              "user-agent": USER_AGENT
            },
            method: 'POST',
            body: JSON.stringify({
              productSku: productSku
            })
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            var states = data._items[0]._element.map(function (e) {
              return e._availability[0].state;
            });

            var sizes = data._items[0]._element.map(function (e) {
              return e._code[0].code;
            });

            var state_of_sizes = {
              sizes: sizes,
              states: states // returns status of each size

            };
            return {
              cookie: SEARCH_COOKIE,
              state: data._availability[0].state,
              stateSizes: state_of_sizes,
              images: data.images,
              pid: data._code[0].code,
              displayName: data._definition[0]["display-name"],
              reporting: data._definition[0]["reporting-properties"],
              listPrice: data._items[0]._element[0]._price[0]["list-price"],
              purchasePrice: data._items[0]._element[0]._price[0]["purchase-price"],
              variants: data._items[0]._element
            };
          }));

        case 5:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log({
            type: 'error',
            message: 'Something went wrong'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var findItemByKeyWord = function findItemByKeyWord(keyword) {
  var ROWS, START, PROPERTIES, ENDPOINT;
  return regeneratorRuntime.async(function findItemByKeyWord$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            ROWS = 30; // how many items shown

            START = 0; // beginning pos to get products
            // which properties to show 

            PROPERTIES = 'pid,title,brand,price,sale_price,promotions,thumb_image,sku_thumb_images,sku_swatch_images,url,price_range,sale_price_range,best_seller,sale_price,display_price,display_sale_price,reporting_product_name';
            ENDPOINT = "https://www.pokemoncenter.com/tpci-ecommweb-api/search?q=".concat(keyword, "&_br_uid_2=&ref_url=&rows=").concat(ROWS, "&start=").concat(START, "&url=www.pokemoncenter.com&fl=").concat(PROPERTIES, "&sort=&search_type=keyword");
            fetch(ENDPOINT, {
              headers: {
                'authority': 'www.pokemoncenter.com',
                "accept": "*/*",
                "Cookie": SEARCH_COOKIE,
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
                "referer": "https://www.pokemoncenter.com/",
                "user-agent": USER_AGENT
              },
              method: 'GET'
            }).then(function (res) {
              return res.json();
            }).then(function (data) {
              var numFound = data.response.numFound; // get products found

              if (numFound <= 0) return console.log({
                cookie: SEARCH_COOKIE,
                numFound: 0,
                message: "No products were found."
              });
              var items = data.response.docs;
              var logs = {
                cookie: SEARCH_COOKIE,
                numFound: numFound,
                items: items
              };
              console.log(logs);
            });
          } catch (e) {
            console.log({
              type: 'error',
              message: 'Something went wrong'
            });
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var addItemToCart = function addItemToCart(SKU, QUANTITY) {
  return regeneratorRuntime.async(function addItemToCart$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(!SKU || !QUANTITY)) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", console.log({
            isCarted: false,
            message: "Missing SKU or Quantity."
          }));

        case 2:
          findItem(SKU).then(function (response) {
            var ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/cart?type=product&format=zoom.nodatalinks';
            var states = response.stateSizes.states; // get states of product

            var expected_size = states.indexOf('AVAILABLE'); // get size available
            // out of stock

            if (expected_size === -1) {
              var _response = {
                isCarted: false,
                message: "Item ".concat(SKU, " does not have sufficient inventory.")
              };
              return console.log(_response);
            } // finding URL of size(available) 


            var uri = response.variants[expected_size]._addtocartform[0].self.uri;
            fetch(ENDPOINT, {
              headers: {
                "Content-type": "application/json",
                "accept": 'application/json',
                "access-control-allow-origin": "*",
                "Cookie": SEARCH_COOKIE,
                "accept-encoding": "gzip, deflate, br",
                "origin": "https://www.pokemoncenter.com",
                'authority': 'www.pokemoncenter.com',
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                "sec-fetch-site": "same-origin",
                "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
                "user-agent": USER_AGENT
              },
              method: 'POST',
              body: JSON.stringify({
                productURI: uri,
                quantity: QUANTITY
              })
            }).then(function (res) {
              // if(res.status != 200) throw Error('Something went swrong')
              return res.json();
            }).then(function (data) {
              var log = {
                cookie: SEARCH_COOKIE,
                isCarted: true,
                data: data
              };
              console.log(log);
            })["catch"](function (e) {
              console.log(e);
            });
          })["catch"](function (e) {
            console.log(e);
          });

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var setAddress = function setAddress() {
  var ENDPOINT, body;
  return regeneratorRuntime.async(function setAddress$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/address?format=zoom.nodatalinks'; // const EP2 = 'https://www.pokemoncenter.com/tpci-ecommweb-api/address/validate'

          body = {
            billing: {
              countryName: "US",
              email: "shinminah357159@gmail.com",
              extendedAddress: "",
              familyName: "NAM",
              givenName: "NGUYEN VAN",
              locality: "Berville",
              phoneNumber: "1 (323) 123-4567",
              postalCode: "48002",
              region: "MI",
              streetAddress: "2 Bak Road Street"
            },
            shipping: {
              // shipping address only for US, not supported for others
              countryName: "US",
              email: "shinminah357159@gmail.com",
              extendedAddress: "",
              familyName: "DUNG",
              givenName: "NGUYEN VAN",
              locality: "Berville",
              phoneNumber: "1 (323) 234-2345",
              postalCode: "48002",
              region: "MI",
              streetAddress: "2 Bak Road Street"
            }
          };
          !validateEmail('shinminah357159@gmail.com') ? console.log({
            error: {
              message: "Invalid email"
            }
          }) : fetch(ENDPOINT, {
            headers: {
              "Content-type": "application/json",
              "accept": 'application/json',
              "access-control-allow-origin": "*",
              "Cookie": SEARCH_COOKIE,
              "accept-encoding": "gzip, deflate, br",
              "origin": "https://www.pokemoncenter.com",
              'authority': 'www.pokemoncenter.com',
              "sec-fetch-mode": "cors",
              "sec-fetch-dest": "empty",
              "sec-fetch-site": "same-origin",
              "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
              "user-agent": USER_AGENT,
              "referer": 'https://www.pokemoncenter.com/checkout/address' // "referer": 'https://www.pokemoncenter.com/checkout/payment',

            },
            method: 'POST',
            body: JSON.stringify(body)
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            console.log(data);
          })["catch"](function (e) {
            console.log(e);
          });

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; // payment with PAYPAL method


var doPaypalMethod = function doPaypalMethod() {
  var ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/payment/paypal?format=zoom.nodatalinks';
  fetch(ENDPOINT, {
    headers: {
      "Content-type": "application/json",
      "accept": 'application/json',
      "access-control-allow-origin": "*",
      "Cookie": SEARCH_COOKIE,
      "accept-encoding": "gzip, deflate, br",
      "origin": "https://www.pokemoncenter.com",
      'authority': 'www.pokemoncenter.com',
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "sec-fetch-site": "same-origin",
      "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
      "user-agent": USER_AGENT,
      "referer": 'https://www.pokemoncenter.com/checkout/address'
    },
    method: 'GET' // body: JSON.stringify(body)

  }).then(function (res) {
    console.log(res.status);
    return res.json();
  }).then(function (data) {
    console.log(data);
  })["catch"](function (e) {
    console.log(e);
  });
};

var validateEmail = function validateEmail(email) {
  var ENDPOINT, _data, isValidEmail;

  return regeneratorRuntime.async(function validateEmail$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/email?format=zoom.nodatalinks';
          _data = {
            email: email
          };
          isValidEmail = false;
          _context5.next = 5;
          return regeneratorRuntime.awrap(fetch(ENDPOINT, {
            headers: {
              "Content-type": "application/json",
              "accept": 'application/json',
              "access-control-allow-origin": "*",
              "Cookie": SEARCH_COOKIE,
              "accept-encoding": "gzip, deflate, br",
              "origin": "https://www.pokemoncenter.com",
              'authority': 'www.pokemoncenter.com',
              "sec-fetch-mode": "cors",
              "sec-fetch-dest": "empty",
              "sec-fetch-site": "same-origin",
              "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
              "user-agent": USER_AGENT,
              "referer": 'https://www.pokemoncenter.com/checkout/address'
            },
            method: 'POST',
            body: JSON.stringify(_data)
          }).then(function (res) {
            if (res.status == 400) return false;
            return true;
          })["catch"](function (e) {
            console.log(e);
          }));

        case 5:
          isValidEmail = _context5.sent;
          return _context5.abrupt("return", isValidEmail);

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
}; // get methods to pay such as paypa, credit card,..


var getMethodsPayment = function getMethodsPayment() {
  var ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/cart?format=zoom.nodatalinks';
  fetch(ENDPOINT, {
    headers: {
      "Content-type": "application/json",
      "accept": 'application/json',
      "access-control-allow-origin": "*",
      "Cookie": SEARCH_COOKIE,
      "accept-encoding": "gzip, deflate, br",
      "origin": "https://www.pokemoncenter.com",
      'authority': 'www.pokemoncenter.com',
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "sec-fetch-site": "same-origin",
      "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
      "user-agent": USER_AGENT,
      "referer": 'https://www.pokemoncenter.com/checkout/payment'
    },
    method: 'GET' // body: JSON.stringify(body)

  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data._order[0]._paymenttypeinfo[0]._element);
  });
}; // do this function after validating card number in FE side


var tokens = function tokens(requestPayload, kid) {
  var ENDPOINT = 'https://flex.cybersource.com/flex/v2/tokens';
  fetch(ENDPOINT, {
    headers: {
      'Accept': '*',
      'Content-Type': 'application/jwt; charset=UTF-8',
      "Cookie": '__cfruid=3a4b8ce66d07d356f17d083267bdf947e4b973f6-1611465591; __cfruid=e8ceac76be0e1ea010fa733805f483029786f1c3-1611490284',
      "accept-encoding": "gzip, deflate, br",
      "origin": "https://flex.cybersource.com",
      'authority': 'flex.cybersource.com',
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "sec-fetch-site": "same-origin",
      "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
      "user-agent": USER_AGENT,
      "referer": "https://flex.cybersource.com/cybersource/assets/microform/0.11.3/iframe.html?keyId=".concat(kid)
    },
    method: 'POST',
    body: requestPayload
  }).then(function (res) {
    console.log(res.status);
    return res.text();
  }).then(function (data) {
    return console.log(data);
  })["catch"](function (e) {
    console.log(e);
  });
}; // provide paymentKey for doCreditCardMethod maybe ^^


var getPaymentToken = function getPaymentToken() {
  var ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=review&format=zoom.nodatalink'; // https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=get&format=zoom.nodatalinks referer payment

  var token = fetch(ENDPOINT, {
    headers: {
      "Content-type": "application/json",
      "accept": 'application/json',
      "access-control-allow-origin": "*",
      "Cookie": SEARCH_COOKIE,
      "accept-encoding": "gzip, deflate, br",
      "origin": "https://www.pokemoncenter.com",
      'authority': 'www.pokemoncenter.com',
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "sec-fetch-site": "same-origin",
      "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
      "user-agent": USER_AGENT,
      "referer": 'https://www.pokemoncenter.com/checkout/sumary'
    },
    method: 'GET' //s body: JSON.stringify(body)

  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data._order[0]._paymentmethodinfo[0]._paymentmethod[0].token;
  })["catch"](function (e) {
    console.log(e);
  });
  return token;
};

var getPaymentKey = function getPaymentKey(callback) {
  var ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/payment/key?microform=true&locale=en-US';
  fetch(ENDPOINT, {
    headers: {
      "Content-type": "application/json",
      "accept": 'application/json',
      "access-control-allow-origin": "*",
      "Cookie": SEARCH_COOKIE,
      "accept-encoding": "gzip, deflate, br",
      "origin": "https://www.pokemoncenter.com",
      'authority': 'www.pokemoncenter.com',
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "sec-fetch-site": "same-origin",
      "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
      "user-agent": USER_AGENT,
      "referer": 'https://www.pokemoncenter.com/checkout/sumary'
    },
    method: 'GET' //s body: JSON.stringify(body)

  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    //  console.log(data);
    callback(data);
  })["catch"](function (e) {
    console.log(e);
  });
};

var doCreditCardPayment = function doCreditCardPayment(nameOfCard) {
  try {
    if (!nameOfCard) throw Error();
    var ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/payment?microform=true&format=zoom.nodatalinks';
    getPaymentKey(function _callee(data) {
      var card, encrypted, token;
      return regeneratorRuntime.async(function _callee$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              card = {
                number: "4988438843884305",
                securityCode: "737",
                expirationMonth: "03",
                expirationYear: "2030",
                type: "001" // see declarations for card types 

              };
              _context6.prev = 1;
              _context6.next = 4;
              return regeneratorRuntime.awrap(encrypt(card, data.keyId));

            case 4:
              encrypted = _context6.sent;
              _context6.next = 7;
              return regeneratorRuntime.awrap(getPaymentToken());

            case 7:
              token = _context6.sent;
              _context6.next = 10;
              return regeneratorRuntime.awrap(tokens(encrypted.token, encrypted.kid));

            case 10:
              fetch(ENDPOINT, {
                headers: {
                  "Content-type": "application/json",
                  "accept": 'application/json',
                  "access-control-allow-origin": "*",
                  "Cookie": SEARCH_COOKIE,
                  "accept-encoding": "gzip, deflate, br",
                  "origin": "https://www.pokemoncenter.com",
                  'authority': 'www.pokemoncenter.com',
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-site": "same-origin",
                  "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
                  "user-agent": USER_AGENT,
                  "referer": "https://www.pokemoncenter.com/checkout/address"
                },
                method: 'POST',
                body: JSON.stringify({
                  paymentDisplay: "".concat(nameOfCard, " ").concat(card.expirationMonth, "/").concat(card.expirationYear),
                  paymentKey: data.keyId,
                  paymentToken: token
                })
              }).then(function (res) {
                return res.json();
              }).then(function (data) {
                return console.log(data);
              })["catch"](function (e) {
                return console.log(e.message);
              });
              _context6.next = 16;
              break;

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](1);
              console.log("Maybe invalid supplied headers");

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, [[1, 13]]);
    });
  } catch (e) {
    console.log({
      error: [{
        message: "Please check your supplied informations"
      }]
    });
  }
};

var getPurchaseForm = function getPurchaseForm() {
  var ENDPOINT, purchaseForm;
  return regeneratorRuntime.async(function getPurchaseForm$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=review&format=zoom.nodatalinks';
          purchaseForm = fetch(ENDPOINT, {
            headers: {
              "Content-type": "application/json",
              "accept": 'application/json',
              "access-control-allow-origin": "*",
              "Cookie": SEARCH_COOKIE,
              "accept-encoding": "gzip, deflate, br",
              "origin": "https://www.pokemoncenter.com",
              'authority': 'www.pokemoncenter.com',
              "sec-fetch-mode": "cors",
              "sec-fetch-dest": "empty",
              "sec-fetch-site": "same-origin",
              "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
              "user-agent": USER_AGENT,
              "referer": 'https://www.pokemoncenter.com/checkout/sumary'
            },
            method: 'GET'
          }).then(function (res) {
            // console.log(res.status);
            return res.json();
          }).then(function (data) {
            return data._order[0]._purchaseform[0].self.uri;
          });
          return _context7.abrupt("return", purchaseForm);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
}; // af


var confirmOrder = function confirmOrder() {
  var ENDPOINT, purchaseForm;
  return regeneratorRuntime.async(function confirmOrder$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/order?format=zoom.nodatalinks'; // https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=get&format=zoom.nodatalinks referer payment

          _context8.next = 3;
          return regeneratorRuntime.awrap(getPurchaseForm());

        case 3:
          purchaseForm = _context8.sent;
          fetch(ENDPOINT, {
            headers: {
              "Content-type": "application/json",
              "accept": 'application/json',
              "access-control-allow-origin": "*",
              "Cookie": SEARCH_COOKIE,
              "accept-encoding": "gzip, deflate, br",
              "origin": "https://www.pokemoncenter.com",
              'authority': 'www.pokemoncenter.com',
              "sec-fetch-mode": "cors",
              "sec-fetch-dest": "empty",
              "sec-fetch-site": "same-origin",
              "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
              "user-agent": USER_AGENT,
              "referer": 'https://www.pokemoncenter.com/checkout/sumary'
            },
            method: 'POST',
            body: JSON.stringify({
              purchaseForm: purchaseForm
            })
          }).then(function (res) {
            // console.log(res.status);
            return res.json();
          }).then(function (data) {
            console.log(data);
          }); // console.log(purchaseForm)

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
};

module.exports = {
  findItem: findItem,
  findItemByKeyWord: findItemByKeyWord,
  addItemToCart: addItemToCart,
  setAddress: setAddress,
  doPaypalMethod: doPaypalMethod,
  validateEmail: validateEmail,
  doCreditCardPayment: doCreditCardPayment,
  tokens: tokens,
  getMethodsPayment: getMethodsPayment,
  getPaymentToken: getPaymentToken,
  getPaymentKey: getPaymentKey,
  confirmOrder: confirmOrder,
  getPurchaseForm: getPurchaseForm
}; // after completing purchasing
// https://www.pokemoncenter.com/site/resourceapi/checkout/confirmation