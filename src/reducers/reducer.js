const initialState = {
  history: [],
  squares: Array(9).fill(null),
  activeLetter: 'X'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'PLAYER_MOVE':
    let newState = {...initialState};
    console.log('PLAYER_MOVE action received');
    return state;
    break;
  default:
  return state;
    console.log('default triggered');
    break;
  }
};

export default reducer;
