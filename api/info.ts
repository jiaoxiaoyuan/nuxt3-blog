import request from "../utils/request";

// 获取技术分类
export const getTechList = () => {
    return request({
        url: "/tag/getTagDictionary",
        method: "get",
    });
};
