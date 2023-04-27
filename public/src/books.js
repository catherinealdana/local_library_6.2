function findAuthorById(authors, id) {
//find in authors array if the author id match with the given id 
// and return the callback function 
 return authors.find((authorID)=>{
 return authorID.id === id;
})
 
}

function findBookById(books, id) {
  //find in books array if the author id match with the given id 
// and return the callback function 
  return books.find((bookID)=>{
    return bookID.id === id;
   })

}

function partitionBooksByBorrowedStatus(books ={}) {
  //declare a variable and filter books array 
  const returnedBooks = books.filter((bookObj) => {
// return borrows at index 0 that are true 
    return bookObj.borrows[0].returned === true;
  })
  // same with false 
  const notReturnedBooks = books.filter((bookObj)=>{
  
    return bookObj.borrows[0].returned === false;
  })
  //return both arrays in one 
  return [notReturnedBooks,returnedBooks];
}


function getBorrowersForBook(book, accounts) {
  //return an obj with 10 or less items 
  //let result = [];
// that obj has to have the ID accounts from the borrows book 
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id );
    return { ...borrow, ...account };
   }).slice(0,10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
