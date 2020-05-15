'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(app)
  router.get('/', controller.home.index);
  router.post('/blog', controller.blog.getBlog);//新增文章
  router.get('/articles', controller.blog.getAllBlog);//查询全部文章
  router.get('/onearticle', controller.blog.findOneArticle);//查询一个文章
  router.get('/updatearticle', controller.blog.updateArticle);//修改一个文章
  router.post('/deletearticle', controller.blog.deleteArticle);//删除一个文章
  router.get('/user', controller.user.findAuthor);//获取作者
  router.get('/adduser', controller.user.adduser);//获取作者
  router.post('/updateuser', controller.user.updateuser);//获取作者
};
