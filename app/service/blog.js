'use strict';
const Service = require('egg').Service;
class blogDataApi extends Service {
    //增加文章
    async allArtile(){
        const model=this.ctx.model.Addarticle;
        const add = new model(
            {
                "type_id" :0,//0是文档1是视频
                "title" : '我是标题',
                "article_cointent" : '我是内容',
                "introduce" :'描述',
                "addTime" :new Date(),
                "view_count" : 0
            }
        );
        const result=await add.save();
        if(result){
            return result
        }else{
            return '出错了'
        }
    };
    //查询全部文章
    async findAllArticle(){
        const model=this.ctx.model.Addarticle;
        const result=await model.find();
        if(result){
            return result
        }else{
            return '出错了'
        }
    };
    //根据_id查询单个文章
    async findoneArticle(){
        const model=this.ctx.model.Addarticle;
        const result=await model.find({_id:'5ebe43786cd924164cd644dd'});
        if(result){
            return result
        }else{
            return '出错了'
        }
    };
    //根据id修改某个文章
    async updateArticle(){
        const model=this.ctx.model.Addarticle;
        const result=model.update({_id:'5ebe43786cd924164cd644dd'},{'title':'为什么','type_id':1})
        if(result){
            return result
        }else{
            return '出错了'
        }
    };
    //删除数据
    async deleteArticle(){
        const model=this.ctx.model.Addarticle;
        const result=model.remove({_id:'5ebe43786cd924164cd644dd'})
        if(result){
            return result
        }else{
            return '出错了'
        }
    }
}
module.exports = blogDataApi
