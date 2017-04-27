export function selectBook(book){
  //every action should have a type
  //Types are usually pulled into a separate file
  return {
    type: 'BOOK_SELECTED',
    payload: book

  };
}
