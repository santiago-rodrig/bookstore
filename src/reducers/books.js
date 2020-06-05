const reducer = (() => {
  const ADD_BOOK = 'ADD_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  const findAvailableId = state => {
    const maxIndex = Math.max(...Object.keys(state));
    for (let i = 1; i <= maxIndex; i += 1) {
      if (!state[i]) return i.toString();
    }

    return (maxIndex + 1).toString();
  };

  const initialState = (() => {
    const books = window.localStorage.getItem('books');
    if (!books) {
      return {
        1: { category: 'action', title: 'Scooby Doo' },
        2: { category: 'biography', title: 'The Sons of Dune' },
        3: { category: 'history', title: 'The Lies of Julia' },
      };
    }
    return JSON.parse(books);
  })();

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
