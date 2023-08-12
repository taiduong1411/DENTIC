import axios from "axios";

export const ApiClient = () => {
    // Create a new axios instance
    const api = axios.create({
        baseURL: "http://localhost:8000/api/user/",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    });

    // Add a request interceptor to add the JWT token to the authorization header
    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                config.headers.Authorization = token;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // // Add a response interceptor to refresh the JWT token if it's expired
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            const originalRequest = error.config;
            // If the error is a 401 and we have a refresh token, refresh the JWT token
            if (error.response.status === 401) {
                const refreshToken = localStorage.getItem("refreshToken");
                post('/refreshToken', { refreshToken })
                    .then((response) => {
                        localStorage.removeItem("accessToken");
                        localStorage.setItem("accessToken", response.accessToken);
                        // Re-run the original request that was intercepted
                        originalRequest.headers.Authorization = response.accessToken;
                        api(originalRequest)
                            .then((response) => {
                                // console.log('pass');
                                return response;
                            })
                            .catch((error) => {
                                // console.log(error);
                            });
                        return api(originalRequest)
                    })
                    .catch((err) => {
                        // If there is an error refreshing the token, log out the user
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("refreshToken");
                    });
            }
            // console.log('pass');
            // return Promise.reject(error)
        }
    );

    const get = (path) => {
        return api.get(path).then((response) => response);
    };

    const post = (path, data) => {
        return api.post(path, data).then((response) => response.data);
    };

    const put = (path, data) => {
        return api.put(path, data).then((response) => response.data);
    };

    const del = (path) => {
        return api.delete(path).then((response) => response);
    };
    return {
        get,
        post,
        put,
        del,
    };
};