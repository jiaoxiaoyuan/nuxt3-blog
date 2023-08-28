import axios, { Axios, AxiosResponse, AxiosRequestConfig } from "axios";
import {
    ElNotification,
    ElMessageBox,
    ElMessage,
    ElLoading,
} from "element-plus";

// 是否显示重新登录
export const isRelogin = { show: false };
let store: any = null;

const errorCode: any = {
    "401": "认证失败，无法访问系统资源",
    "403": "当前操作没有权限",
    "404": "访问资源不存在",
    default: "系统未知错误，请反馈给管理员",
};

// 创建axios实例
const service: AxiosInstance = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "https://api2.jiaoxiaoyuan.cn",
    // 超时
    timeout: 10000,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});

// request拦截器
service.interceptors.response.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200;
        // 获取错误信息
        const msg = errorCode[code] || res.data.msg || errorCode["default"];
        // 二进制数据则直接返回
        if (
            res.request.responseType === "blob" ||
            res.request.responseType === "arraybuffer"
        ) {
            return res.data;
        }
        if (code === 401) {
            if (!isRelogin.show) {
                isRelogin.show = true;
                ElMessageBox.confirm(
                    "登录状态已过期，您可以继续留在该页面，或者重新登录",
                    "系统提示",
                    {
                        confirmButtonText: "重新登录",
                        cancelButtonText: "取消",
                        type: "warning",
                    }
                )
                    .then(() => {
                        console.log("重新登录");
                    })
                    .catch(() => {
                        isRelogin.show = false;
                    });
            }
            return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
        } else if (code === 500) {
            ElMessage({
                message: msg,
                type: "error",
                duration: 5 * 1000,
            });
            return Promise.reject(res.data);
        } else if (code === 200) {
            return Promise.resolve(res.data);
        } else {
            ElMessage({
                message: msg,
                type: "error",
                duration: 5 * 1000,
            });
            return Promise.reject("error");
        }
    },
    (error) => {
        let { message } = error;
        if (message === "Network Error") {
            message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        ElMessage({
            message: message,
            type: "error",
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    }
);

export default service;
