const CHANGE_FILTER = 'CHANGE_FILTER';

const reducer = (state = 'all', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
