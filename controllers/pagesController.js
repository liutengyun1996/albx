//这个模块主要用于返回用户所请求的页面
var querystring=require('querystring')
//约定:所有的后台页面请求都添加/admin


//前台页面
exports.getIndexPage=(req,res)=>{
    res.render('index.ejs')
};
exports.getDetailPage=(req,res)=>{
    res.render('detail.ejs')
};
exports.getListPage=(req,res)=>{
    res.render('list.ejs')
};


exports.getAdminIndexPage=(req,res)=>{
    if(req.session.isLogin&&req.session.isLogin=='true'){
        res.render('admin/index.ejs')
    }else{
        res.writeHead(301,{
            'Location':'/admin/login'
        })
        res.end()
    }

    // var mycookie = querystring.parse(req.headers.cookie)
    // if(mycookie.isLogin && mycookie.isLogin == 'true'){
    //     res.render('/admin')
    // }else{
    //     console.log(123)
    //     // res.redirect('/admin/login')
    //     res.writeHead(301,{
    //         'Location':'/admin/login'
    //     })
    //     res.end()
    // }
}


//后台管理页面
exports.getAdminIndexPage=(req,res)=>{
    res.render('admin/index.ejs')
};
exports.getAdminCategoriesPage=(req,res)=>{
    res.render('admin/categories.ejs')
};
exports.getAdminCommentsPage=(req,res)=>{
    res.render('admin/comments.ejs')
};
exports.getAdminLoginPage=(req,res)=>{
    res.render('admin/login.ejs')
};
exports.getAdminNavMenusPage=(req,res)=>{
    res.render('admin/nav-menus.ejs')
};
exports.getAdminPasswordResetPage=(req,res)=>{
    res.render('admin/password-reset.ejs')
};
exports.getAdminPostAddPage=(req,res)=>{
    res.render('admin/post-add.ejs')
};
exports.getAdminPostsPage=(req,res)=>{
    res.render('admin/posts.ejs')
};
exports.getAdminProfilePage=(req,res)=>{
    res.render('admin/profile.ejs')
};
exports.getAdminSettingsPage=(req,res)=>{
    res.render('admin/settings.ejs')
};
exports.getAdminSlidesPage=(req,res)=>{
    res.render('admin/slides.ejs')
};
exports.getAdminUsersPage=(req,res)=>{
    res.render('admin/users.ejs')
};

