import { http } from "@/utils/http";

const URL = "auth";

export const authApi = {
  signUp(body: { email: string; name: string; password: string }) {
    return http.post<AuthResponse>(`${URL}/register`, body);
  },
  signIn(body: { email: string; password: string }) {
    return http.post<AuthResponse>(`${URL}/login`, body);
  },
};
