import { fetchRandomDog } from "@api/dogs.api";
import { Dispatch } from "redux";
import { addDog, setIsLoading } from "./dogs.actionCreators";
import { toast } from "react-toastify";

export const fetchAddRandomDogThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchRandomDog()
      .then((response) => {
        dispatch(addDog(response.data));
      })
      .catch((error: Error) => {
        toast.error(error.message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};
