import Dog from "@entities/dog.entity";
import {
  DOGS_ADD_DOG,
  DOGS_REMOVE_DOG_BY_ID,
  DOGS_SET_IS_LOADING,
} from "@store/dogs/dogs.actions";

export const addDog = (dog: Dog) => {
  return {
    type: DOGS_ADD_DOG,
    payload: {
      dog,
    },
  };
};

export const removeDogById = (id: string) => {
  return {
    type: DOGS_REMOVE_DOG_BY_ID,
    payload: {
      id,
    },
  };
};

export const setIsLoading = (loading: boolean) => {
  return {
    type: DOGS_SET_IS_LOADING,
    payload: {
      loading,
    },
  };
};
