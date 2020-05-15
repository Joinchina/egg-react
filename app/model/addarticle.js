'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const ArticleSchema = new Schema({
    "type_id" :Number,//0是文档1是视频
    "title" : String,
    "article_cointent" : String,
    "introduce" :String,
    "addTime" :String,
    "view_count" : Number
  })

  return mongoose.model('Article', ArticleSchema);
};
