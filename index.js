
const Pokemon = require('./functions')
const jwt_decode = require('jwt-decode')
const fetch = require('node-fetch')
const {SEARCH_COOKIE,USER_AGENT} =require('./headers')




function delay(t) {
    return new Promise(function(resolve) { 
        setTimeout(resolve,t)
    });
 }

        // Pokemon.doCreditCardPayment({
        //     data:{
        //         number: "5585558555855583",
        //         securityCode: "737",
        //         expirationMonth: "03",
        //         expirationYear: "2030",
        //         type: "002", // see declarations for card types 
        //     },
        //     nameOfCard: "Mastercard"
        // })


// Pokemon.confirmOrder()
// Pokemon.doCreditCardPayment("Mastercard")
// Pokemon.setAddress({
//     billing: {
//         countryName: "US",
//         email: "shinminah357159@gmail.com",
//         extendedAddress: "",
//         familyName: "HAI",
//         givenName: "NGUYEN VAN",
//         locality: "Berville",
//         phoneNumber: "1 (323) 123-4567",
//         postalCode: "48002",
//         region: "MI",
//         streetAddress: "2 Bak Road Street"
//     },
//     //adding shipping property like billing if billing and shipping address different
// })
Pokemon.findItem("710-07590").then(res => console.log(res))
// Pokemon.addItemToCart("701-07046",1)
// Pokemon.getPurchaseForm().then(res => console.log(res))
// Pokemon.findItemByKeyWord('t-shirt')
// Pokemon.getPurchaseFormUri().then(res => console.log(res))
// Pokemon.doPaypalMethod()