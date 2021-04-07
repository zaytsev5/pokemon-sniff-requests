"use strict";

(function _callee() {
  var generate_key, _require, encrypt, context, data, encrypted;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          generate_key = require('./generate-key');
          _require = require('../pokemon/node_modules/cs2-encryption/dist/index.js'), encrypt = _require.encrypt; // change to dist to test production package

          context = "eyJraWQiOiIzZyIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiJsc2RrSUwvcXdLQmFYSU0xTHprdjVCQUFFRnlITnN0RVRLSjNKQTZPajFPUnN3cFdnSkFrTDFUTlgvSnhsRWNySmU4S21udUhjUURPV215K21oOXFJQ0RKSXVUODdRQWZ2c2h1MnpYUU1DOVRWVkVIZ3lnTmVzMVBodWI2WGx1Mk95YnYiLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJoYXdKRUYyazBNcEVsTWd2YnFmRHl4QWxyUmRMY2wwUDFDR0hxcXA5TXEyLXRYSnp1eGs2ZnhCV2wzdUhBQ0hBY1U0b2p1WUdEZWtVdlZkYi1VRk5pWWtEaWxFaEtVTUpST09XQXQtbjN0RFVheXJWcFpURjA4WHZiSTNKR3pPa1l3bEtyNHZWaGtFT0VHVUNHOVpOLVcyTFpSRUVGODg4N0Q3anM4NEJWZVBBLUs3N0xuQ0xhcWR0V0t1M25XOVZiWXIyd2U4dnNkbmh3Vk1uemtfS2xzU2JCdEFVTVU5NlN6Z1JVUnQxY2ZuVzRvMmZ5d0R4dG9kSlRCRWFrcGVPdm03dl9ZQXFQbFBUd3I3SGhLNDRZVUdfRjhwMlFxYVgyNjVKVjFza3Q2dXQ3bTBQMXZ3UmVZYWJMemNGY3RqdjZpWFFCNEt6VzlWRVVGYjVQb3JwQ3ciLCJraWQiOiIwODNsYnBWNUw3Q3NNNGxRQzdDRkVmMVp1UmFRSnFDdyJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cHM6Ly93d3cucG9rZW1vbmNlbnRlci5jb20iXSwibWZPcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSJ9LCJ0eXBlIjoibWYtMC4xMS4wIn1dLCJpc3MiOiJGbGV4IEFQSSIsImV4cCI6MTYxMTQ4MTM4NywiaWF0IjoxNjExNDgwNDg3LCJqdGkiOiJJdTgzRzF5RHh5alRTU2lSIn0.g9O1txKanD-RtwHuElAMUU63ooV2ezywrpNrDThqujPfcufmB323GHKRPIn5GHcKVj9S0YR4vBuuo8I65d_CCEX_Gvk47quj1acUbS3w7lEjyfQzjhQEBt-PCteC9B-C0pwvdCLJeB5808PC5MMwqFmG2Cto2C4wGx8mdGgkJc_ZTOouYyGlF-PJC5gzuTcAL-nXEwhsXUIk6XtuhC0amO5TPmFRoGC1Ug50kEDUitnzA4UvixAG0aQ2ovfvTprY-V_jph8ANX-ZYvog9-y7GjVTyqw4lFpY7uXCxHLL--n0j0uBtTqAy_UhmZw-YAKcDRSJdyovCPmjDh6jfc1Cmw";
          data = {
            number: "4221498696663526",
            securityCode: "291",
            expirationMonth: "12",
            expirationYear: "2025",
            type: "001" // see declarations for card types 

          };
          _context.next = 6;
          return regeneratorRuntime.awrap(encrypt(data, context));

        case 6:
          encrypted = _context.sent;
          console.log(encrypted);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
})();