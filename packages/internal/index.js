'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/extend-internal.cjs.prod.js');
} else {
  module.exports = require('./dist/extend-internal.cjs.js');
}
