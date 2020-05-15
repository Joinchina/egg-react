/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  //配置端口号
  config.cluster = {
    listen: {
      path: '',
      port: 7005,
      hostname: '0.0.0.0', //localhost
    }
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589509705633_5464';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  return {
    ...config,
    ...userConfig,
  };
};
