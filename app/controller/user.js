'use strict';

const Controller = require('egg').Controller;
const deal =require('../middleware/dealData');//统一处理数据
class userController extends Controller {
  //新增老板
  async adduser() {
    const { ctx } = this;
    const data =await ctx.service.user.addUser();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  };
  //查询老板
  async findAuthor() {
    const {ctx}=this;
    const data =await ctx.service.user.getuser();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  };
  //修改老板
  async updateuser(){
    const {ctx}=this;
    const data =await ctx.service.user.updateuser();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  }
}

module.exports = userController;
