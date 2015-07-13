/* jslint node: true*/
'use strict';
var controllers = require('./controllers');

/**
 * Adds new routes to the application passed in.
 * @param app
 */
module.exports = function (app) {
  // Webhook
  app.post('/');
};


