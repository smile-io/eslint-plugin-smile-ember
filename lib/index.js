/**
 * @fileoverview smile.io's eslint rules for ember apps
 * @author Sivakumar Kailasam
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + '/rules'),
  configs: {
    app: require('./config/app'),
    addon: require('./config/addon'),
  },
};
