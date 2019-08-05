var mysql=require('mysql')
//创建连接
var connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu'
})

//这个控制器完成所有与用户相关的增加删除修改和查询


//实现登录验证
exports.login=(email,callback)=>{
    //创建sql语句
    var sql=`SELECT * FROM users WHERE email="${email}"`
    //调用Mysql模块
    connection.query(sql,(err,results)=>{
        if(err){
            callback(err)
        }else{
            callback(null,results[0])
        }
    })
}