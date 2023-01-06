import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8080',
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
};
axios.defaults.baseURL = axiosConfig.baseURL;
axios.defaults.headers = axiosConfig.headers;

class defaultAxios {
    constructor() {
        this.client = axios;
    }
}

export default defaultAxios;