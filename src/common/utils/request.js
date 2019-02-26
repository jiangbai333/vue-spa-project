import axios from 'axios'

export const post = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: param,
        transformRequest: [function (data) {
            /*let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret*/
            return data
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
