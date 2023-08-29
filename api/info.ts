import request from "../utils/request";

// 获取技术分类
export const getTechList = () => {
    return request({
        url: "/tag/getTagDictionary",
        method: "get",
    });
};

// 获取倔强数据列表
export const getRecommendAll = () => {
    return new Promise((resolve, reject) => {
        useFetch(
            "https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7250374211875980839&spider=0",
            {
                method: "post",
                body: {
                    client_type: 2608,
                    cursor: "0",
                    id_type: 2,
                    limit: 20,
                    sort_type: 200,
                },
            }
        )
            .then(({ data, error, refresh }) => {
                // refresh()
                if (error.value) {
                    reject(error.value);
                    return;
                }
                const dataValue: any = data.value;
                resolve(dataValue);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
};

/**
 * 通过 id 获取文章详情
 * @param article_id
 * @returns {Promise}
 */
export const getArticleDetail = (article_id: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        useFetch("https://api.juejin.cn/content_api/v1/article/detail", {
            method: "post",
            body: {
                article_id,
            },
        })
            .then(({ data, error }) => {
                if (error.value) {
                    reject(error.value);
                    return;
                }
                resolve(data.value);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
};
