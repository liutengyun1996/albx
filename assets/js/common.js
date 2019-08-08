var itcast = {
    getRouterName: (str) => {
        let index = str.indexOf('?')  //查询是否带参数
        let routerName = ''
        //判断路由地址是否带参数
        if (index = -1) {//说明没有带参数
            routerName = str.substring(str.lastIndexOf('/') + 1)
        } else {
            routerName = str.substring(str.lastIndexOf('/') + 1, str.indexOf('?'))
        }
        return routerName
    }
}