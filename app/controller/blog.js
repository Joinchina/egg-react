'use strict';

const Controller = require('egg').Controller;
const deal =require('../middleware/dealData');//统一处理数据
class BlogController extends Controller {
  //新增一篇文章
  async getBlog() {
    const { ctx } = this;
    const data =await ctx.service.blog.allArtile();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  };
  //查询出所有的文章
  async getAllBlog() {
    const {ctx}=this;
    const data =await ctx.service.blog.findAllArticle();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  };
  //查询单个文章
  async findOneArticle() {
    const {ctx}=this;
    const data =await ctx.service.blog.findoneArticle();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  };
  //修改
  async updateArticle() {
    const {ctx}=this;
    const data =await ctx.service.blog.updateArticle();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  };
  //删除
  async deleteArticle() {
    const {ctx}=this;
    const data =await ctx.service.blog.deleteArticle();
    if(data!='出错了'){
        ctx.body = deal(0,data)
    }else{
        ctx.body = deal(-1,data)
    }
  };
}

module.exports = BlogController;
