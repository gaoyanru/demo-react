import { createApp } from "@bone/web";
import 'antd/dist/antd.css'
// 引入各个页面组件
import Home from "./app/pages/home";
import NotFound from "./app/pages/not-found";
import Form from "./app/pages/form";

// 创建App实例
export default createApp({
    // 配置路由信息
    router: {
        routes: [{
            // 页面路径
            path: "/",
            // 页面组件
            page: Home
        }, {
            path: "/form",
            page: Form
        }],
        // routes中路由无法匹配时显示的404页面
        notFound: NotFound
    }
})