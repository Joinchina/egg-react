'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const userSchema = new Schema({
    "name" :String,
    "age" : Number,
    "company" : String,
    "description" :String,
  })

  return mongoose.model('user', userSchema);
};
