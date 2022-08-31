'use strict';

const requireIndex = require('requireindex');

module.exports = {
  rules: requireIndex(`${__dirname}/rules`),
  configs: {
    app: requireIndex(`${__dirname}/config/app`),
    addon: requireIndex(`${__dirname}/config/addon`),
  },
  utils: {
    ember: require('./utils/ember'),
  },
};
