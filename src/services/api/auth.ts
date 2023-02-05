import { axiosPublic } from "../helpers/axiosPublic";
import axios from "axios";
import { AxiosError } from "axios";

export async function loginWithEmail(userEmail: string, userPassword: string) {
  try {
    const response = await axiosPublic.post(
      "/auth/v1/token?grant_type=password",
      {
        email: userEmail,
        password: userPassword,
      }
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      console.log("AxiosError", error);
    } else {
      // Just a stock error
      console.log(error);
    }
  }
}

export async function refreshToken(refreshToken: string) {
  const response = await axiosPublic.post(
    "/auth/v1/token?grant_type=refresh_token",
    {
      refresh_token: refreshToken,
      //TODO headers
      headers: {},
    }
  );

  return response.data;
}
