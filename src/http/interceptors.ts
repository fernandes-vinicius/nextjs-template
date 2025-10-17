import type { AxiosInstance } from "axios";

export function setupInterceptors(api: AxiosInstance) {
  api.interceptors.request.use((config) => {
    // const token = localStorage.getItem("session.token");

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  });

  api.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401) {
        // TODO
      }

      return Promise.reject(err);
    },
  );
}
