const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: Math.ceil(Math.random()*10000),
    author: "Sun Tzu",
    title: "The Art of War",
  },
  {
    id: Math.ceil(Math.random()*10000),
    author: "Homer",
    title: "Iliad",
  },
  {
    id: Math.ceil(Math.random()*10000),
    author: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    id: Math.ceil(Math.random()*10000),
    author: "Kentaro Miura",
    title: "Berserk",
  },
]

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const reducerBooks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export { addBook, removeBook };
export default reducerBooks;
