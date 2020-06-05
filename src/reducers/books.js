const reducer = (() => {
  const ADD_BOOK = 'ADD_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  let nextId = 4;

  const initialState = {
    1: { category: 'mistery', title: 'Scooby Doo' },
    2: { category: 'adventure', title: 'The Sons of Dune' },
    3: { category: 'romance', title: 'The Lies of Julia' },
  };

  return (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case ADD_BOOK:
        newState = {...state, nextId: action.book };
        nextId += 1;
        return newState;
      case REMOVE_BOOK:
        newState = {...state};
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
  };
})();

export default reducer;

