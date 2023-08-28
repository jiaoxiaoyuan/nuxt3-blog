import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
    ElNotification,
    ElMessageBox,
    ElMessage,
    ElLoading,
} from "element-plus";

// 创建axios实例
const service: AxiosInstance = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "/",
    // 超时
    timeout: 10000,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});

// request拦截器
service.interceptors.response.use();

// 响应拦截器
