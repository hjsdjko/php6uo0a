const base = {
    get() {
                return {
            url : "http://localhost:8080/php6uo0a/",
            name: "php6uo0a",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php6uo0a/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "微信课堂助手小程序"
        } 
    }
}
export default base
