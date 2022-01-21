import User from "@entities/user.entity";
import {
  USER_SIGNIN,
  USER_SET_IS_LOADING,
  USER_LOGOUT,
  USER_CHANGE_PASSWORD,
} from "@store/user/user.actions";

type SigninAction = {
  type: typeof USER_SIGNIN;
  payload: {
    user: User;
  };
};

type SetIsLoadingAction = {
  type: typeof USER_SET_IS_LOADING;
  payload: {
    loading: boolean;
  };
};

type LogoutAction = {
  type: typeof USER_LOGOUT;
};

type ChangeUserPasswordAction = {
  type: typeof USER_CHANGE_PASSWORD;
  payload: {
    newPassword: string;
  };
};

type UserAction =
  | SigninAction
  | SetIsLoadingAction
  | LogoutAction
  | ChangeUserPasswordAction;

export default UserAction;
