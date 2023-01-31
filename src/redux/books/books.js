const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const reducerBooks = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return (payload) => [
        ...state.splice(0, payload),
        ...state.splice(payload + 1, state.length),
      ];
    default:
      return state;
  }
};

export { addBook, removeBook };
export default reducerBooks;
