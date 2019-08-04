//引入express
const express = require('express');
//引入router.js
const router=require('./router.js')



//创建服务器
const app = express();
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
});


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

//使用Router进行路由管理
app.use(router)