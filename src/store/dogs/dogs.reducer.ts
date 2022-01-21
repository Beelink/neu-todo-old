import dogsInitialState from "@store/dogs/dogs.initialState";
import {
  DOGS_ADD_DOG,
  DOGS_REMOVE_DOG_BY_ID,
  DOGS_SET_IS_LOADING,
} from "@store/dogs/dogs.actions";
import DogsAction from "@store/dogs/dogs.actionTypes";
import { DogsState } from "@store/state";

const dogsReducer = (
  state: DogsState = dogsInitialState,
  action: DogsAction
): DogsState => {
  switch (action.type) {
    case DOGS_ADD_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload.dog],
      };
    case DOGS_REMOVE_DOG_BY_ID:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== action.payload.id),
      };
    case DOGS_SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default dogsReducer;
