import { createAction, handleActions } from 'redux-actions';

// action names
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action functions
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// action with redux-actions
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// default state
const initialState = {
  number: 0,
};

// reducer
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// reducer with handle actions
const counter = handleActions({
  [INCREASE]: (state, action) => ({ number: state.number + 1 }),
  [DECREASE]: (state, action) => ({ number: state.number - 1 }),
}, initialState);

// default export only one
export default counter;
