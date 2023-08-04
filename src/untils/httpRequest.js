import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);
const HttpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const response = await HttpRequest.get(path, option);
    return response.data;
};

export default HttpRequest;

// local / development
// test / stagring
// UAT
// production
