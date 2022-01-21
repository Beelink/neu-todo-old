import axios, { AxiosResponse } from "axios";
import Dog from "@entities/dog.entity";
import uniqid from "uniqid";
import ApiResponse from "./types";

interface IDogAapiResponse {
  message: string;
  status: string;
}

interface IDogResponse extends ApiResponse {
  data: Dog;
}

export const fetchRandomDog = async (): Promise<IDogResponse> => {
  const response: AxiosResponse<IDogAapiResponse> = await axios.get<
    IDogAapiResponse
  >("https://dog.ceo/api/breeds/image/random");
  return {
    error: false,
    message: "Dog retrieved successfully!",
    data: {
      id: uniqid(),
      image: response.data.message,
    },
  };
};
