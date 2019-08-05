//这个控制器完成所有与用户相关的业务操作
const usrModel=require('../models/userModel.js');
//用户登录验证
exports.login=(req,res)=>{
    //接收参数
    var obj=req.body
    //业务处理--调用数据模块
    usrModel.login(obj.email,(err,data)=>{
        if(err){
            res.json({code:400,msg:'服务器异常'})
        }else{
            //判断有没有查询到结果
            if(data){
                //在判断密码是否正确
                if(data.password==obj.password){

                    req.session.isLogin = 'true'
                    req.session.currentUser = data
                    res.json({code:200,msg:'登录成功'})
                }else{
                    res.json({code:400,msg:'密码输入错误'})
                }
            }else{
                res.json({code:400,msg:'邮箱输入错误'})
            }
        }
    });
}