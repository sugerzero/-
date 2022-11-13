import axios from 'axios'
import router from '../router';
import { Message } from 'element-ui'


//响应拦截器
axios.interceptors.response.use(success => {
    //业务逻辑错误
    if (success.status && success.status == 200) {
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
            Message.error({ message: success.data.message });
            return;
        }
        if (success.data.code) {
            Message.success({ message: success.data.message })
        }
    }
    return success.data;
}, error => {
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({ message: '服务器被吃了！' });
    } else if (error.response.code == 403) {
        Message.error({ message: '权限不足，无法进入' });
    } else if (error.response.code == 401) {
        Message.error({ message: '未登录，请先登录！' });
        router.replace('/');
    } else {
        if (error.response.data.message) {
            Message.error({ message: error.response.data.message });
        } else {
            Message.error({ message: '未知错误！' })
        }
    }
    return;

});

let base = '';
export const postRequest = (url, params) => {
    return axios({
        method: 'POST',
        url: `${base}${url}`,
        data: params
    })
}