'use strict';
/*
* Merchant configuration properties are taken from Configuration module
*/
// common parameters

var AuthenticationType = 'http_signature';
var RunEnvironment = 'cybersource.environment.SANDBOX';
var MerchantId = 'testrest'; // http_signature parameters

var MerchantKeyId = '08c94330-f618-42a3-b09d-e1e43be5efda';
var MerchantSecretKey = 'yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE='; // jwt parameters

var KeysDirectory = 'Resource';
var KeyFileName = 'testrest';
var KeyAlias = 'testrest';
var KeyPass = 'testrest'; // logging parameters

var EnableLog = true;
var LogFileName = 'cybs';
var LogDirectory = '../log';
var LogfileMaxSize = '5242880'; //10 MB In Bytes
// Constructor for Configuration

function Configuration() {
  var configObj = {
    'authenticationType': AuthenticationType,
    'runEnvironment': RunEnvironment,
    'merchantID': MerchantId,
    'merchantKeyId': MerchantKeyId,
    'merchantsecretKey': MerchantSecretKey,
    'keyAlias': KeyAlias,
    'keyPass': KeyPass,
    'keyFileName': KeyFileName,
    'keysDirectory': KeysDirectory,
    'enableLog': EnableLog,
    'logFilename': LogFileName,
    'logDirectory': LogDirectory,
    'logFileMaxSize': LogfileMaxSize
  };
  return configObj;
}

module.exports = Configuration;