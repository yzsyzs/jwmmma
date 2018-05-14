import axios from 'axios'
export let setAxios = (store) => {
    axios.interceptors.request.use(function (config) {
        store.dispatch('loading_show')
        return config
    }, function (error) {
        return Promise.reject(error)
    })
    axios.interceptors.response.use(function (response) {
        store.dispatch('loading_hide')
        return response
    }, function (error) {
        return Promise.reject(error)
    })
}


