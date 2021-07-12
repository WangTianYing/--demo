import * as Types from '../action-types';

const initState = {
  count: 0,
  currentLocale: "en-US",
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return {
        count: state.count + 1,
      };
    case Types.DECREMENT:
      return {
        count: state.count - 1,
      };
    case Types.RESET:
      return {count: 0};
    default:
      return state;
  }
}
