export default function createReducer (initialState, map) {
  return (state = initialState, action = {}) => {
    const reducer = map[action.type];

    return reducer ? { ...state, ...reducer(state, action.payload) } : state;
  };
}
