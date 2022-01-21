import { FunctionComponent } from "react";
import "./index.scoped.scss";
import { fetchAddRandomDogThunk } from "@store/dogs/dogs.thunk";
import { removeDogById } from "@store/dogs/dogs.actionCreators";
import { useDispatch, useSelector } from "react-redux";
import State from "@store/state";
import { IconButton } from "rsuite";
import { Trash as TrashIcon, Plus as PlusIcon } from "@rsuite/icons";
import Loader from "@components/atoms/Loader";
import ImageLoader from "@components/atoms/ImageLoader";
import { LoaderSize } from "@components/atoms/Loader/props";

const DogsList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state: State) => state.dogs.dogs);
  const isLoading = useSelector((state: State) => state.dogs.isLoading);

  const _addRandomDog = () => {
    dispatch(fetchAddRandomDogThunk());
  };

  return (
    <div className="dogs-list">
      <div className="dogs-list__header">
        <IconButton
          icon={<PlusIcon />}
          onClick={_addRandomDog}
          disabled={isLoading}
        >
          Add random dog
        </IconButton>
        {isLoading && <Loader size={LoaderSize.small} />}
      </div>
      <ul className="dogs-list__list">
        {dogs.map((dog) => {
          return (
            <li key={dog.id} className="dogs-list__item">
              <div className="dogs-list__item-image">
                <ImageLoader src={dog.image} width={200} height={200} />
              </div>
              <IconButton
                icon={<TrashIcon />}
                onClick={() => {
                  dispatch(removeDogById(dog.id));
                }}
              >
                Remove
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DogsList;
