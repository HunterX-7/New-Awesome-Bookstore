const CHECK_STATUS = 'CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'UNDER CONSTRUCTION',
});

const reducerCategories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export { checkStatus };
export default reducerCategories;
