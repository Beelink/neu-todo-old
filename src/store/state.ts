import User from "@entities/user.entity";
import Dog from "@entities/dog.entity";

export type UserState = {
  isLoggedIn: boolean;
  user: User | null;
  isLoading: boolean;
};

export type DogsState = {
  dogs: Dog[];
  isLoading: boolean;
};

type State = {
  user: UserState;
  dogs: DogsState;
};

export default State;
