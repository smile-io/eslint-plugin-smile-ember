'use strict';

const ember = require('eslint-plugin-ember/lib/utils/ember');
const {
  componentClassDefaultProps,
  reportUnorderedProperties,
  addBackwardsPosition,
  componentLifeCycleHooks,
} = require('../utils/property-order');

const ORDER = [
  ...componentClassDefaultProps,
  'service',

  'public:property',
  'public:single-line-function',
  'public:multi-line-function',
  'public:empty-method',

  'private:property',
  'private:single-line-function',
  'private:multi-line-function',
  'private:empty-method',

  'observer',
  'method',
  'ember-concurrency-task',
  ...componentLifeCycleHooks,
  'actions',
];

//------------------------------------------------------------------------------
// Organizing - Organize your components and keep order in objects
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforces proper order of properties in components',
      category: 'Stylistic Issues',
      recommended: false,
      url:
        'https://github.com/ember-cli/eslint-plugin-ember/tree/master/docs/rules/order-in-components.md',
    },
    fixable: 'code', // or "code" or "whitespace"
  },

  create(context) {
    const options = context.options[0] || {};
    let order = options.order
      ? addBackwardsPosition(options.order, 'empty-method', 'method')
      : ORDER;
    order = order.slice(0);

    const indexOfLifecycleHook = order.indexOf('lifecycle-hook');

    if (indexOfLifecycleHook !== -1) {
      order.splice(indexOfLifecycleHook, 1, componentLifeCycleHooks);
    }

    const filePath = context.getFilename();

    return {
      CallExpression(node) {
        if (!ember.isEmberComponent(node, filePath)) return;

        reportUnorderedProperties(node, context, 'component', order);
      },
    };
  },
};
