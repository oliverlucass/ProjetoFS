import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}
    });
}