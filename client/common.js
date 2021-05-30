'use strict';

const request = require('request');

const Client = (baseUrl) => {
  const method = (path, req, data) =>
    new Promise((resolve, reject) => {
      request(
        `${baseUrl}${path}`,
        { json: true, method: req, body: data },
        (err, res, body) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(body);
        },
      );
    });

  return {
    get: (path) => method(path, 'GET', null),
    post: (path, data) => method(path, 'POST', data),
    delete: (path, data) => method(path, 'DELETE', data),
    put: (path, data) => method(path, 'PUT', data),
  };
};

module.exports = { Client };
