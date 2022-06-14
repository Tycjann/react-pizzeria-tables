// selectors
export const getLoading = ({ loadingFetching }) => loadingFetching;

// actions
const createActionName = actionName => `app/loading/${actionName}`;
const UPDATE_LOADING = createActionName('UPDATE_TABLES');

// action creators
export const updateLoading = payload => ({ type: UPDATE_LOADING, payload });

const loadingReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return action.payload;
    default:
      return statePart;
  }
}

export default loadingReducer;