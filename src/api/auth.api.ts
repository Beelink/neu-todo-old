import axios, { AxiosResponse } from "axios";
import User from "@entities/user.entity";
import ApiResponse from "./types";

interface AuthApiResponse extends ApiResponse {
  data: User;
}

export const fetchSignin = async (
  email: string,
  password: string
): Promise<AuthApiResponse> => {
  const response: AxiosResponse<AuthApiResponse> = await axios.post<
    AuthApiResponse
  >(`${__config.api.apiPrefix}/auth/signin`, { email, password });

  return response.data;
};

export const fetchSignup = async (
  username: string,
  email: string,
  password: string
): Promise<AuthApiResponse> => {
  const response: AxiosResponse<AuthApiResponse> = await axios.post<
    AuthApiResponse
  >(`${__config.api.apiPrefix}/auth/signup`, { username, email, password });

  return response.data;
};
