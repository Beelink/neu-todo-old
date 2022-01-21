import axios, { AxiosResponse } from "axios";
import User from "@entities/user.entity";
import ApiResponse from "./types";

interface IFetchCurrentUserResponse extends ApiResponse {
  data: User;
}

export const fetchCurrentUser = async (
  token: string
): Promise<IFetchCurrentUserResponse> => {
  const response: AxiosResponse<IFetchCurrentUserResponse> = await axios.get<
    IFetchCurrentUserResponse
  >(`${__config.api.apiPrefix}/user`, {
    headers: {
      [__config.api.userAccessTokenName]: token,
    },
  });

  return response.data;
};

export const fetchChangeUserPassword = async (
  token: string,
  oldPassword: string,
  newPassword: string
): Promise<ApiResponse> => {
  console.log(__config.api.userAccessTokenName);
  console.log(token);
  const response: AxiosResponse<ApiResponse> = await axios.post<ApiResponse>(
    `${__config.api.apiPrefix}/user/change-password`,
    {
      oldPassword,
      newPassword,
    },
    {
      headers: {
        [__config.api.userAccessTokenName]: token,
      },
    }
  );

  return response.data;
};
