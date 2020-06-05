const reducer = (() => {
  const ADD_BOOK = 'ADD_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  const findAvailableId = state => {
    const maxIndex = Math.max(...Object.keys(state));
    for (let i = 1; i <= maxIndex; i += 1) {
      if (!state[i]) return i;
    }

    return maxIndex + 1;
  };

  const initialState = {
    1: { category: 'mistery', title: 'Scooby Doo' },
    2: { category: 'adventure', title: 'The Sons of Dune' },
    3: { category: 'romance', title: 'The Lies of Julia' },
  };

  return (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case ADD_BOOK:
        newState = { ...state };
        newState[findAvailableId(state)] = action.book;
        return newState;
      case REMOVE_BOOK:
        newState = { ...state };
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
  };
})();

export default reducer;
