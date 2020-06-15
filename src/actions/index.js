const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';
const addBook = book => ({ type: ADD_BOOK, book });
const removeBook = id => ({ type: REMOVE_BOOK, id });
const changeFilter = filter => ({ type: CHANGE_FILTER, filter });

export { addBook, removeBook, changeFilter };
