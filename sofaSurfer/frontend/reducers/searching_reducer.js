export const START_SEARCHING = 'START_SEARCHING';

const searchingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_SEARCHING:
      return true;
    default:
      return false;
  }
};

export default searchingReducer;
