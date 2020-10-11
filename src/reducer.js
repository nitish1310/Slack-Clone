export const initialState = {
  user: null,
};

//everytime  login set the user
export const actionTypes = {
  SET_USER: "SET_USER",
};

//state-datalayer look like, action  - what we are doing to datalayer
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        // get state currently looklike
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
