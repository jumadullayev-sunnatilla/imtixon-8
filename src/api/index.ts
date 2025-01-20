import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.BASE__URL,
});

export { request };
