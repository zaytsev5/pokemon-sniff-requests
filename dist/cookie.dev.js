"use strict";

var MTProto = require('telegram-mtproto');

var phone = {
  num: '+84333157628',
  code: '21'
};
var api = {
  layer: 5,
  initConnection: 0x69796,
  api_id: 2445278
};
var server = {
  dev: true //We will connect to the test server.

}; //Any empty configurations fields can just not be specified

var client = MTProto({
  server: server,
  api: api
});

function connect() {
  var _ref, phone_code_hash, _ref2, user;

  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(client('auth.sendCode', {
            phone_number: phone.num,
            current_number: false,
            api_id: 2445278,
            api_hash: '3fd3e1895eee84a326445292aeb07705'
          }));

        case 2:
          _ref = _context.sent;
          phone_code_hash = _ref.phone_code_hash;
          _context.next = 6;
          return regeneratorRuntime.awrap(client('auth.signIn', {
            phone_number: phone.num,
            phone_code_hash: phone_code_hash,
            phone_code: phone.code
          }));

        case 6:
          _ref2 = _context.sent;
          user = _ref2.user;
          console.log('signed as ', user);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

connect();