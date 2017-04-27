// State argument is not the application state but only the state that is on this reducers

// if argument is undefined we should return null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
  //this is the default
}
