const fetch = require('node-fetch')
const { SEARCH_COOKIE, USER_AGENT, HEADERS } = require('./headers')
const jwt_decode = require('jwt-decode')
let request = require('request-promise')
const cookieJar = request.jar()
request = request.defaults({ jar: cookieJar })
const { encrypt } = require('../pokemon/node_modules/cs2-encryption/dist/index.js') //dont forget install cs2-encryption package



const findItem = async (SKU) => {

    try {
        let productSku = SKU.split('/')[4] || SKU // filter SKU from link if finding with LINK
        const ENDPOINT = `https://www.pokemoncenter.com/tpci-ecommweb-api/product/${productSku}?format=zoom.nodatalinks`
        let response = await fetch(ENDPOINT, {
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-gpc": "1",
                "x-store-scope": "pokemon",
                "user-agent": USER_AGENT,
                "cookie": SEARCH_COOKIE
            },
            referrer: "https://www.pokemoncenter.com/category/home-and-office",
            referrerPolicy: "same-origin",
            method: "GET",
            mode: "cors"


        })
            .then(res => {
                if (res.status == 200 || res.status == 201)
                    return res.json()
                else
                    throw Error('Invalid provided informations.')
            })
            .then(data => {

                let states = data._items[0]._element.map(e => {
                    return e._availability[0].state
                })
                let sizes = data._items[0]._element.map(e => {
                    return e._code[0].code
                })
                let state_of_sizes = {
                    sizes, states // returns status of each size
                }
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

                }
            })

        return response
    } catch (e) {
        console.log({
            type: 'error',
            message: e.message
        });
    }
}

const findItemByKeyWord = async (keyword) => {

    try {
        const ROWS = 10;// how many items shown
        const START = 0; // beginning pos to get products
        // which properties to show 
        const PROPERTIES = 'pid,title,brand,price,sale_price,promotions,thumb_image,sku_thumb_images,sku_swatch_images,url,price_range,sale_price_range,best_seller,sale_price,display_price,display_sale_price,reporting_product_name'
        const ENDPOINT = `https://www.pokemoncenter.com/tpci-ecommweb-api/search?q=${keyword}&_br_uid_2=&ref_url=&rows=${ROWS}&start=${START}&url=www.pokemoncenter.com&fl=${PROPERTIES}&sort=&search_type=keyword`

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
        })
            .then(res => {
                if (res.status == 200 || res.status == 201)
                    return res.json()
                else
                    throw Error('Invalid provided informations.')
            })
            .then(data => {

                let numFound = data.response.numFound // get products found
                if (numFound <= 0) return console.log({
                    cookie: SEARCH_COOKIE,
                    numFound: 0,
                    message: "No products were found."
                });
                let items = data.response.docs
                let logs = {
                    cookie: SEARCH_COOKIE,
                    numFound: numFound,
                    items: items

                }
                console.log(logs);
            })
    } catch (e) {
        console.log({
            type: 'error',
            message: e.message
        });
    }
}

const addItemToCart = async (SKU, QUANTITY) => {
    if (!SKU || !QUANTITY) { // missing sku || quantity
        return console.log({
            isCarted: false,
            message: `Missing SKU or Quantity.`
        });
    }
    findItem(SKU)
        .then(response => {
            const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/cart?type=product&format=zoom.nodatalinks'
            const states = response.stateSizes.states // get states of product
            const expected_size = states.indexOf('AVAILABLE') // get size available

            // out of stock
            if (expected_size === -1) {
                let response = {
                    isCarted: false,
                    message: `Item ${SKU} does not have sufficient inventory.`
                }
                return console.log(response)
            }
            // finding URL of size(available) 
            const uri = response.variants[expected_size]._addtocartform[0].self.uri


            fetch(ENDPOINT, {
                headers: {
                    "Content-type": "application/json",
                    "accept": 'application/json', "access-control-allow-origin": "*",
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
                method: 'POST', body: JSON.stringify({ productURI: uri, quantity: QUANTITY })


            })
                .then(res => {
                    if (res.status == 200 || res.status == 201)
                        return res.json()
                    else
                        throw Error('Invalid provided informations.')
                })
                .then(data => {
                    let log = {

                        cookie: SEARCH_COOKIE,
                        isCarted: true,
                        data: data
                    }
                    console.log(log);
                }).catch((e) => {
                    console.log({
                        type: 'error',
                        message: e.message
                    });
                })

        }).catch((e) => {
            console.log({
                type: 'error',
                message: e.message
            });
        })

}

const setAddress = async (address) => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/address?format=zoom.nodatalinks'
    if (!address.shipping) // same shipping and billing address
        address.shipping = address.billing
    !validateEmail('shinminah357159@gmail.com') ? console.log({ error: { message: "Invalid email" } })
        : fetch(ENDPOINT, {
            headers: {
                "Content-type": "application/json",
                "accept": 'application/json', "access-control-allow-origin": "*",
                "Cookie": SEARCH_COOKIE,
                "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
                "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
                "user-agent": USER_AGENT,
                "referer": 'https://www.pokemoncenter.com/checkout/address',
            },
            method: 'POST',
            body: JSON.stringify(address)

        })
            .then(res => {
                if (res.status == 200 || res.status == 201)
                    return res.json()
                else
                    throw Error('Invalid provided informations.')
            })
            .then(data => {
                console.log(data);
            }).catch((e) => {
                console.log({
                    type: 'error',
                    message: e.message
                });
            })



}

// payment with PAYPAL method
const doPaypalMethod = () => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/payment/paypal?format=zoom.nodatalinks'
    fetch(ENDPOINT, {
        headers: {
            "Content-type": "application/json",
            "accept": 'application/json', "access-control-allow-origin": "*",
            "Cookie": SEARCH_COOKIE,
            "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": 'https://www.pokemoncenter.com/checkout/address',
        },
        method: 'GET',
        // body: JSON.stringify(body)
    })
        .then(res => {
            if (res.status == 200 || res.status == 201)
                return res.json()
            else
                throw Error('Invalid provided informations.')

        })
        .then(data => {
            console.log(data);
        }).catch((e) => {
            console.log({
                type: 'error',
                message: e.message
            });
        })
}

const validateEmail = async (email) => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/email?format=zoom.nodatalinks'
    let _data = {
        email: email
    }
    let isValidEmail = false;
    isValidEmail = await fetch(ENDPOINT, {
        headers: {
            "Content-type": "application/json",
            "accept": 'application/json', "access-control-allow-origin": "*",
            "Cookie": SEARCH_COOKIE,
            "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": 'https://www.pokemoncenter.com/checkout/address',
        },
        method: 'POST',
        body: JSON.stringify(_data)

    })
        .then(res => {
            if (res.status == 400)
                return false
            return true
        }).catch((e) => {
            console.log({
                type: 'error',
                message: e.message
            });
        })

    return isValidEmail
}

// get methods to pay such as paypa, credit card,..
const getMethodsPayment = () => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/cart?format=zoom.nodatalinks'

    fetch(ENDPOINT, {
        headers: {
            "Content-type": "application/json",
            "accept": 'application/json', "access-control-allow-origin": "*",
            "Cookie": SEARCH_COOKIE,
            "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": 'https://www.pokemoncenter.com/checkout/payment',
        },
        method: 'GET',
        // body: JSON.stringify(body)
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data._order[0]._paymenttypeinfo[0]._element);
        })
}



// do this function after validating card number in FE side
const tokens = (requestPayload, kid) => {
    const ENDPOINT = 'https://flex.cybersource.com/flex/v2/tokens'
    let result = fetch(ENDPOINT, {
        headers: {
            'Accept': '*',
            'Content-Type': 'application/jwt; charset=UTF-8',
            "Cookie": '__cfruid=61d143ce3e39602d45c58268bfdf581265d8f6e9-1612013018; __cfruid=24bf28b0d38f4a2ed26504df714b16f23b3308d0-1612190868',
            "accept-encoding": "gzip, deflate, br", "origin": "https://flex.cybersource.com", 'authority': 'flex.cybersource.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": `https://flex.cybersource.com/cybersource/assets/microform/0.11.3/iframe.html?keyId=${kid}`,
        },
        method: 'POST',
        body: requestPayload

    })
        .then(res => {
             if (res.status == 200 || res.status == 201)
                return res.text()
             else
                 throw Error('Invalid provided informations.')
        })
        .then(data => {
            return data
        })
        .catch((e) => {
            console.log({
                type: 'error',
                message: e.message
            });
        })
    return result
}

// provide paymentKey for doCreditCardMethod maybe ^^
const getPaymentToken = () => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=review&format=zoom.nodatalink'
    // https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=get&format=zoom.nodatalinks referer payment

    let token = fetch(ENDPOINT, {
        headers: {
            "Content-type": "application/json",
            "accept": 'application/json', "access-control-allow-origin": "*",
            "Cookie": SEARCH_COOKIE,
            "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": 'https://www.pokemoncenter.com/checkout/sumary',
        },
        method: 'GET',
        //s body: JSON.stringify(body)
    })
        .then(res => {
            if (res.status == 200 || res.status == 201)
                return res.json()
            else
                throw Error('Invalid provided informations.')
        })
        .then(data => {
            return data._order[0]._paymentmethodinfo[0]._paymentmethod[0].token

        }).catch((e) => {
            console.log({
                type: 'error',
                message: e.message
            });
        })
    return token
}
const getPaymentKey = (callback) => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/payment/key?microform=true&locale=en-US'

    fetch(ENDPOINT, {
        headers: {
            "Content-type": "application/json",
            "accept": 'application/json', "access-control-allow-origin": "*",
            "Cookie": SEARCH_COOKIE,
            "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": 'https://www.pokemoncenter.com/checkout/sumary',
        },
        method: 'GET',

    })
        .then(res => {
            if (res.status == 200 || res.status == 201)
                return res.json()
            else
                throw Error('Invalid provided informations.')
        })
        .then(data => {

            callback(data)

        }).catch((e) => {
            console.log({
                type: 'error',
                message: e.message
            });
        })
}
const doCreditCardPayment = async (card) => {
    try {
        if (!card) throw Error()
        const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/payment?microform=true&format=zoom.nodatalinks'
        getPaymentKey(async function (data) {

            try {
                //return encrypted card informations through capture context (data.keyId)
                let encrypted = await encrypt(card.data, data.keyId);
                // using encrypted above to make tokens
                let encoded = await tokens(encrypted.token, encrypted.keyId)
                // decode tokens above to get paymentToken(jti) in decoded 
                let decoded = jwt_decode(encoded);

                fetch(ENDPOINT, {
                    headers: {
                        "Content-type": "application/json",
                        "accept": '*/*',
                        "Cookie": SEARCH_COOKIE,
                        "accept-encoding": "gzip, deflate, br",
                        "path": "/tpci-ecommweb-api/payment?microform=true&format=zoom.nodatalinks",
                        "origin": "https://www.pokemoncenter.com",
                        "authority": 'www.pokemoncenter.com',
                        "sec-fetch-mode": "cors",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-site": "same-origin",
                        "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
                        "user-agent": USER_AGENT,
                        "referer": "https://www.pokemoncenter.com/checkout/payment",
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        // three optional paramaters 
                        paymentDisplay: `${card.nameOfCard} ${card.data.expirationMonth}/${card.data.expirationYear}`,
                        paymentKey: data.keyId,
                        paymentToken: decoded.jti
                    })

                })
                    .then(res => {
                        if (res.status == 200 || res.status == 201)
                            return res.json()
                        else
                            throw Error('Invalid provided informations.')
                    })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(e =>{
                        console.log({
                            type:'error',
                            message: e.message
                        });
                    })

            } catch (e) {
                console.log({
                    error: [
                        {
                            message: e.message
                        }
                    ]
                });
            }

        })
    } catch (e) {
        console.log({
            error: [
                {
                    message: "Please check your supplied informations."
                }
            ]
        });
    }

}
// this function gets uri of your order, it provides necessary paramaters for doCreditCardPayment function
const getPurchaseFormUri = async () => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=review&format=zoom.nodatalinks'
    let purchaseFormUri = fetch(ENDPOINT, {
        headers: {
            "Content-type": "application/json",
            "accept": 'application/json', "access-control-allow-origin": "*",
            "Cookie": SEARCH_COOKIE,
            "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": 'https://www.pokemoncenter.com/checkout/sumary',
        },
        method: 'GET',
    })
        .then(res => {
            if (res.status == 200 || res.status == 201)
                return res.json()
            else
                throw Error('Invalid provided informations.')
        })
        .then(data => {
            return data._order[0]._purchaseform[0].self.uri
        })
        .catch(e =>{
            console.log({
                type:'error',
                message: e.message
            });
        })
    return purchaseFormUri;
}


const confirmOrder = async () => {
    const ENDPOINT = 'https://www.pokemoncenter.com/tpci-ecommweb-api/order?format=zoom.nodatalinks'
    // https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=get&format=zoom.nodatalinks referer payment
    let purchaseFormUri = await getPurchaseFormUri()
    fetch(ENDPOINT, {
        headers: {
            "Content-type": "application/json",
            "accept": 'application/json', "access-control-allow-origin": "*",
            "Cookie": SEARCH_COOKIE,
            "accept-encoding": "gzip, deflate, br", "origin": "https://www.pokemoncenter.com", 'authority': 'www.pokemoncenter.com', "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "sec-fetch-site": "same-origin",
            "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
            "user-agent": USER_AGENT,
            "referer": 'https://www.pokemoncenter.com/checkout/sumary',
        },
        method: 'POST',
        body: JSON.stringify({
            purchaseForm: purchaseFormUri
        })
    })
        .then(res => {
            return res.json()
        
        })
        .then(data => {
            console.log(data.messages[0].data);
        })
        .catch(e =>{
            console.log({
                type:'error',
                message: e.message
            });
        })
    // console.log(purchaseForm)
}

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
    getPurchaseFormUri: getPurchaseFormUri

}
