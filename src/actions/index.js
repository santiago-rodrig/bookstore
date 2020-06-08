const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const addBook = book => ({ type: ADD_BOOK, book });
const removeBook = id => ({ type: REMOVE_BOOK, id });

export { addBook, removeBook };
