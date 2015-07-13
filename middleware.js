/* jslint node: true */
"use strict";

var Crowdflower = require('nodejs-crowdflower');
var apiKey = require('./apiKey');

module.exports.bonus = function (req, res, next) {
    var worker = Crowdflower.CrowdWorker(apiKey);
    worker.bonus(req.job_id, req.worker_id, req.amount, req.reason, next);
};

module.exports.reject = function (req, res, next) {
    var worker = Crowdflower.CrowdWorker(apiKey);
    worker.reject(req.job_id, req.worker_id, next);
};

module.exports.notify = function (req, res, next) {
    var worker = Crowdflower.CrowdWorker(apiKey);
    worker.notify(req.job_id, req.worker_id, req.message, next);
};

module.exports.flag = function (req, res, next) {
    var worker = Crowdflower.CrowdWorker(apiKey);
    var persist = true;
    worker.notify(req.job_id, req.worker_id, req.reason, persist, next);
};

module.exports.deflag = function (req, res, next) {
    var worker = Crowdflower.CrowdWorker(apiKey);
    worker.notify(req.job_id, req.worker_id, req.reason, next);
};

