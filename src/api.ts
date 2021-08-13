import axios from "axios";

const api =
  <T>(method: "post" | "get", path: string) =>
  (data?: Record<string, unknown>): Promise<T> =>
    new Promise((res, rej) => {
      axios
        .request({
          url: `https://api.vultr.com/v2/${path}`,
          method,
          headers: {
            Authorization: `Bearer ${process.env.VULTR_API_KEY}`,
          },
          data,
        })
        .then(({ data }) => res(data))
        .catch((err) => {
          rej(err.response?.data ?? err);
        });
    });

export const createInstance = api<CreateInstance>("post", "instances");