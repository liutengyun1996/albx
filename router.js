const express = require('express');


//添加路由配置
const userController = require('./controllers/userController');
const pagesController = require('./controllers/pagesController');
var router = express.Router()
//后台页面
router.get('/admin', pagesController.getAdminIndexPage)
    .get('/admin/categories', pagesController.getAdminCategoriesPage)
    .get('/admin/comments', pagesController.getAdminCommentsPage)
    .get('/admin/login', pagesController.getAdminLoginPage)
    .get('/admin/nav-menus', pagesController.getAdminNavMenusPage)
    .get('/admin/password-reset', pagesController.getAdminPasswordResetPage)
    .get('/admin/post-add', pagesController.getAdminPostAddPage)
    .get('/admin/posts', pagesController.getAdminPostsPage)
    .get('/admin/profile', pagesController.getAdminProfilePage)
    .get('/admin/settings', pagesController.getAdminSettingsPage)
    .get('/admin/slides', pagesController.getAdminSlidesPage)
    .get('/admin/users', pagesController.getAdminUsersPage)
    //前台页面
    .get('/', pagesController.getIndexPage)
    .get('/detail', pagesController.getDetailPage)
    .get('/list', pagesController.getListPage)
    //业务处理路由
    .post('/login', userController.login)

//暴露
module.exports = router

