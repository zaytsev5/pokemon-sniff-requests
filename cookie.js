let request = require('request-promise')
// // const cookieJar = request.jar()
// // request = request.defaults({ jar: cookieJar })
// const fs = require('fs')
const {SEARCH_COOKIE,USER_AGENT} =require('./headers')
// // const {gzip, ungzip} = require('node-gzip');


// // async function main() {
// //   const options = {
   
// //   }
// //   // request.get({ url: "https://www.pokemoncenter.com", }, async function (e, r, body) {
// //   //   try {
// //       // console.log(body)
// //       const decompressed = await gzip("Hello nguyen van ahi");
// //       console.log( decompressed.toString('utf8'));
// //       // fs.writeFileSync('./sumary.html', decompressed.toString())
// //   //   } catch (error) {
// //   //     console.log(error.message);
// //   //   }
// //   // })
// //   // console.log(cookieJar.getCookieString('https://www.pokemoncenter.com'));
// // }
// // main()
//  var https = require("https");
//     zlib = require("zlib");
let headers = {
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
}

// function getGzipped(url, callback) {
//     // buffer to store the streamed decompression
//     var buffer = [];

//     http.get('https://www.pokemoncenter.com', function(res) {
//         // pipe the response into the gunzip to decompress
//         var gunzip = zlib.createGunzip();            
//         res.pipe(gunzip);

//         gunzip.on('data', function(data) {
//             // decompression chunk ready, add it to the buffer
//             buffer.push(data.toString())

//         }).on("end", function() {
//             // response and decompression complete, join the buffer and return
//             callback(null, buffer.join("")); 

//         }).on("error", function(e) {
//             callback(e);
//         })
//     }).on('error', function(e) {
//         callback(e)
//     });
// }
// var request = require('request')
// var zlib = require('zlib');
// const { clearLine } = require('readline');

request('https://www.pokemoncenter.com/',{encoding: null, headers:headers}, (err, response, body) => {
  // if(response.headers['content-encoding'] == 'gzip'){
  //   zlib.gunzip(body, (err, dezipped) => {
  //     // console.log(dezipped.toString())
  //   console.log(response.headers['set-cookie']);
  //   // fs.writeFileSync('./sumary.html',dezipped.toString('utf8'))
      
  //   })
  // } else {
  //   console.log(response.headers['set-cookie']);
  //   // fs.writeFileSync('./sumary.html',body.toString('utf8'))
  // }
  let headers = {
    'Cookie' : response.headers['set-cookie']
  }
  console.log(response.headers['set-cookie']);
  // request('https://www.pokemoncenter.com/cart',{encoding: null, headers : headers}, (err, response, body) => {
  //   console.log(body.toString('utf8'));
  // })
  
})

// })
// // getGzipped(url, function(err, data) {
// //    console.log(data);
// // });
// const options = {
//   headers: {
//     "Content-type": "application/json",
//     "accept": '*/*',
//     "Cookie": SEARCH_COOKIE,
//     "accept-encoding": "gzip, deflate, br",
//     "path":"/tpci-ecommweb-api/payment?microform=true&format=zoom.nodatalinks", 
//     "origin": "https://www.pokemoncenter.com", 
//     "authority": 'www.pokemoncenter.com', 
//     "sec-fetch-mode": "cors",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-site": "same-origin",
//     "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,fr-FR;q=0.6,fr;q=0.5,la;q=0.4",
//     "user-agent": USER_AGENT,
//     "referer": "https://www.pokemoncenter.com/checkout/payment",
// },
// };

// https.get('https://www.pokemoncenter.com',options, function(res) {
//   res.on('data', function(chunk) { console.log(chunk.toString('utf8')) });
// });
