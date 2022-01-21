import { fetchSignin, fetchSignup } from "@api/auth.api";
import { fetchCurrentUser, fetchChangeUserPassword } from "@api/user.api";
import { Dispatch } from "redux";
import {
  signin,
  setIsLoading,
  changeUserPassword,
} from "./user.actionCreators";
import { toast } from "react-toastify";

export const fetchUserSigninThunk = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchSignin(email, password)
      .then((response) => {
        if (response.error) {
          toast.error(response.message);
        } else {
          dispatch(signin(response.data));
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};

export const fetchUserSignupThunk = (
  username: string,
  email: string,
  password: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchSignup(username, email, password)
      .then((response) => {
        if (response.error) {
          toast.error(response.message);
        } else {
          dispatch(signin(response.data));
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};

export const fetchCurrentUserThunk = (token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchCurrentUser(token)
      .then((response) => {
        if (response.error) {
          toast.error(response.message);
        } else {
          dispatch(signin(response.data));
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};

export const fetchChangeUserPasswordThunk = (
  token: string,
  oldPassword: string,
  newPassword: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchChangeUserPassword(token, oldPassword, newPassword)
      .then((response) => {
        if (response.error) {
          toast.error(response.message);
        } else {
          dispatch(changeUserPassword(newPassword));
          toast.success(response.message);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};
