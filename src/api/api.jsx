import axios from "axios";
import React from "react";

const axiosParams = {
    baseURL: 'http://localhost:8010/api/v1/'
}

const axiosInstance = axios.create(axiosParams);

const LoginApi =  () =>{
    return(
        axios.post("http://localhost:8010/login",
            {username: localStorage.getItem("username"), password: localStorage.getItem("password")}
        ).then((response) => {
            localStorage.setItem("Authorization", response.headers["authorization"])
            return response
        }).catch((error) => {
            return error.response;
        })
    )
}

const api = {
        get: async (url, config = {}) => {
            try {
                const response = await axiosInstance.get(url, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response.data
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    await LoginApi()
                    const response = await axiosInstance.get(url, {
                        ...config,
                        headers: {
                            ...config.headers,
                            'Authorization': localStorage.getItem("Authorization"),
                        }
                    });
                    return response.data
                } else {
                    console.log("error in main get api")
                }
            }
        },

        delete: async (url, config = {}) => {
            try {
                const response = await axiosInstance.delete(url, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response.data
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    await LoginApi()
                    const response = await axiosInstance.delete(url, {
                        ...config,
                        headers: {
                            ...config.headers,
                            'Authorization': localStorage.getItem("Authorization"),
                        }
                    });
                    return response.data
                } else {
                    console.log("error in main delete api")
                }
            }
        },

    post: async (url, body, config = {}) => {
        try {
            const response = await axiosInstance.post(url, body, {
                ...config,
                headers: {
                    ...config.headers,
                    'Authorization': localStorage.getItem("Authorization"),
                }
            });
            return response.data
        } catch (error) {
            if (error.response && error.response.status === 403) {
                await LoginApi()
                const response = await axiosInstance.post(url, body, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response.data
            } else {
                console.log("error in main post api")
            }
        }
    },

    put: async (url, body, config = {}) => {
        try {
            const response = await axiosInstance.put(url, body, {
                ...config,
                headers: {
                    ...config.headers,
                    'Authorization': localStorage.getItem("Authorization"),
                }
            });
            return response.data
        } catch (error) {
            if (error.response && error.response.status === 403) {
                await LoginApi()
                const response = await axiosInstance.put(url, body, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response.data
            } else {
                console.log("error in main put api")
            }
        }
    }
}

export default api;