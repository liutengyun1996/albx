//引入express
const express = require('express');
//引入router.js
const router=require('./router.js')
const bodyParser=require('body-parser')
const session=require('express-session')



//创建服务器
const app = express();

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
});
app.use(bodyParser.urlencoded({extended:false}))

//后期你可能会传递json格式字符串
app.use(bodyParser.json())


//4.添加路由配置
app.get('/', (req, res) => {
   res.render('index.ejs')
});

//5.托管静态页面
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

//6.配置ejs模板
app.set('view engine', 'ejs');
//所有的ejs资源-都会云指定的__dirname+"/views"
app.set('views', __dirname + "/views")

//在express中使用session中间件,因为默认情况下,express不会启用session的使用
app.use(session(
    {
        //加盐
        secret:'my_albx_35',//相当于一个加密秘钥,他的值可以是任何字符串
        resave:false, //强制session保存到session store中,不管Session有没有保存,都强制保存
        saveUninitialized:false //强制没(初始化)的session保存到storage中
    }
));
//添加全局的中间件,  每次请求都会经过这个中间件
app.use(function(req,res,next){
    //三种场合不用登陆
    //1.登录页
    //2.前面三个页面不用登录
    //3.有登录状态
    if(req.session.isLogin&&req.session.isLogin=='true'||req.url=='/admin/login'||req.url.indexOf('/admin')==-1){
        next()
    }  else{
        // redirect:实现重定向
        // /admin/login
        console.log(123)
        res.redirect('/admin/login')
    }
})


//使用Router进行路由管理
app.use(router)