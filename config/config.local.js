/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = {
    mongoose: {
        url: 'mongodb://127.0.0.1:27017/blog',
    },
    logger: {
        dir: 'logs'
    },
  };
  return config
};
