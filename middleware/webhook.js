/* jslint node: true */
'use strict';

module.exports.parsePayload = function (req, res, next) {
  var crowdflower = req.body;

  if (crowdflower.signal === 'unit_complete') {
    /**
     * If the `payload` is a stirng, we must parse the JSON object from it,
     * otherwise. Once we have the JSON object, we store it in the `req`
     * object for easy access.
     *
     * This is just incase Crowdflower ever fixes this.
     */
    if (typeof crowdflower.payload === 'string') {
      req.payload = JSON.parse(crowdflower.payload);
    }
    else if (typeof crowdflower.payload ===  'object'){
      req.payload = crowdflower.payload;
    }
  }

  if (req.payload) {
    next();
  }
  else {
    /**
     * If Crowdflower receives a non-200 response then they will keep trying
     * to send the data. This can cause problems, so if anything goes wrong here
     * we just send a 200.
     */
    res.status(200).send();
  }
};
