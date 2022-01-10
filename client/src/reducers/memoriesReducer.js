import {
  FETCH_ALL,
  UPDATE,
  DELETE,
  CREATE,
} from "../constants/actionConstants";

export default (memories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    default:
      return memories;
  }
};
