import { config } from "@/lib/config";
import axios, { type AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      withCredentials: true,
      baseURL: config.baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export const http = new Http().instance;
