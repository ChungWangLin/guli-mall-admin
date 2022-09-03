import axios from "axios";

import { Message } from 'element-ui';

const baseURL = "http://localhost:8090";

axios.interceptors.response.use(response => {

    if (response.data.code == "20000") {
        return response.data;
    } else {
        Message({
            message: response.data.message,
            type: 'error'
        })
        return Promise.reject(response);
    }

}, error => {
    Message({
        message: "服务器错误，请联系技术人员！",
        type: 'error'
    })
    return Promise.reject(error);
})

export const getRequest = (url) => {
    return axios({
        method: 'get',
        url: url,
        baseURL: baseURL
    })
}

export const postRequest = (url, data) => {
    return axios({
        method: 'post',
        data: data,
        url: url,
        baseURL: baseURL
    })
}
