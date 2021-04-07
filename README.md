 - findItem 
    + can find an item by LINK or SKU
    + passing LINK if finding by LINK and SKU if finfing by KSU
    + returns Promise
 - findItemByKeyWord
    + passing a keyword, for example 't-shirt'
 - addItemToCart
    + passing SKU and quantity
 - about 30 request/ per ip
 - Flows to get the checkout
  + validating email
  + validating informations
  + post request includes infos
  + get method pay via get request with paypal/credit card
  // https://www.pokemoncenter.com/tpci-ecommweb-api/payment/key?microform=true&locale=en-US 


  //flow of payment with credit card
   - Request URL: https://www.pokemoncenter.com/tpci-ecommweb-api/payment/key?microform=true&locale=en-US
   - _order[0]._paymentmethodinfo[0]._paymentmethod[0].token

   Request URL: https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=get&format=zoom.nodatalinks

   - Get review order https://www.pokemoncenter.com/tpci-ecommweb-api/order?type=review&format=zoom.nodatalinks referer summary
   - List of card types
      - 001: Visa
      - 002: Mastercard
      - 003: Amex
      - 004: Discover
      - 005: Diners
      - 006: Carte Blanche/Visa Debit
      - 007: JCB
      ....
      More types https://developer.cybersource.com/library/documentation/dev_guides/Retail_SO_API/html/Topics/app_card_types.htm
      For card testing https://docs.adyen.com/development-resources/test-cards/test-card-numbers#cartes-bancaires


