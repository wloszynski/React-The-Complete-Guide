import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };
      console.log(state.persons);
      const updatedArray = [...state.persons];
      updatedArray.push(newPerson);
      return { persons: updatedArray };
    case actionTypes.DELETE_PERSON:
      const updatedArray2 = [...state.persons];
      const index = updatedArray2.findIndex((el) => el.id === action.id);
      updatedArray2.splice(index, 1);

      return { persons: updatedArray2 };

    default:
      return state;
  }
};

export default reducer;
