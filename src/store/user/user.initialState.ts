import { UserState } from "@store/state";

const userInitialState: UserState = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
};

export default userInitialState;
