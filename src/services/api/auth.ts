import { axiosInstance } from "../helpers/axiosInstance";

export async function loginWithEmail(userEmail: string, userPassword: string) {
  const response = await axiosInstance.post('/auth/v1/token?grant_type=password', {
    email: userEmail,
    password: userPassword,
  });

  return response.data;
}