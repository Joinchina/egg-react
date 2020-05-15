'use strict';
const Service = require('egg').Service;
class userDataApi extends Service {
    //增加文章
    async addUser(){
        const model=this.ctx.model.User;
        const add = new model(
            {
                "name" :'张松涛',
                "age" : 26,
                "company" : '张松涛',
                "description" :'张松涛',
            }
        );
        const result=await add.save();
        if(result){
            return result
        }else{
            return '出错了'
        }
    };
    //获取数据库中的老板信息
    async getuser(){
        const model=this.ctx.model.User;
        const result=await model.find();
        if(result){
            return result
        }else{
            return '出错了'
        }
    };
    //修改
    async updateuser(){
        const model=this.ctx.model.User;
        const result=await model.update({_id:'5ebe4d63df087343f090f5ee'},{});
        if(result){
            return result
        }else{
            return '出错了'
        }
    }
}
module.exports=userDataApi
