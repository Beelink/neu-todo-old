import { combineReducers } from "redux";

import userReducer from "@store/user/user.reducer";
import dogsReducer from "@store/dogs/dogs.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  dogs: dogsReducer,
});

export default rootReducer;
