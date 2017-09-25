const {browserHistory} = require('react-router');
const getRandom = (start = 0, end = 1) => {
    if (start >= end) {
        throw "start must less than end!";
    }
    return Math.random() * (end - start) + start;
};
const request = (method, url, body) => {
    method = method.toUpperCase();
    if (method === "GET") {
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            //'Access-Token': sessionStorage.getItem('access_token') || '' // 从sessionStorage中获取access token
        },
        body
    })
        .then(res => {
            if (res.status === 401) {
                browserHistory.push('/login');
                return Promise.reject('Unauthorized')
            } else {
                const token = res.headers.get('access-token');
                if (token) {
                    sessionStorage.setItem('access_token', token);
                }
                return res.json();
            }
        })
};
const setCookie = (name, value, days) => {
    const Days = days ? days : 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = `${name}=${encodeURI(value)};expires=${exp.toGMTString()};path=/;`
}
const utils = {
    getRandom,
    request,
    get: url => request("GET", url),
    post: (url, body) => request("POST", url, body),
    setCookie,
};

module.exports = utils;