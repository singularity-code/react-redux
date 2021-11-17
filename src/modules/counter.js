// action names
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action functions
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// default state
const initialState = {
  number: 0,
};

// reducer
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
// default export only one
export default counter;
