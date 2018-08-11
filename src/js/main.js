var request = require("request");

var options = { method: 'GET',
  url: 'https://sandbox.apihub.citi.com/gcb/api/v1/utilities/metaData',
  qs: 
   { apiUri: 'REPLACE_THIS_VALUE',
     apiMethod: 'REPLACE_THIS_VALUE' },
  headers: 
   { client_id: 'b174d0e4-b3e8-4ba4-9f9c-52ccd28bf41d',
     accept: 'application/json',
     uuid: 'REPLACE_THIS_VALUE',
     authorization: 'REPLACE_THIS_VALUE' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});