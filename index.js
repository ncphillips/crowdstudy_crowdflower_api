/* jslint node: true */
'use strict';

module.exports = {
  middleware: {
    webhook: require('./middleware/webhook'),
    workers: require('./middleware/worker_api')
  }
};
