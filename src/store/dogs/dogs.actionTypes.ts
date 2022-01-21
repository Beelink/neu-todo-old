import Dog from "@entities/dog.entity";
import {
  DOGS_ADD_DOG,
  DOGS_REMOVE_DOG_BY_ID,
  DOGS_SET_IS_LOADING,
} from "@store/dogs/dogs.actions";

type AddDogAction = {
  type: typeof DOGS_ADD_DOG;
  payload: {
    dog: Dog;
  };
};

type RemoveDogByIdAction = {
  type: typeof DOGS_REMOVE_DOG_BY_ID;
  payload: {
    id: string;
  };
};

type SetIsLoadingAction = {
  type: typeof DOGS_SET_IS_LOADING;
  payload: {
    loading: boolean;
  };
};

type DogsAction = AddDogAction | RemoveDogByIdAction | SetIsLoadingAction;

export default DogsAction;
