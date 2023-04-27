function findAccountById(accounts, id) {
// use .find method to match existing id with given id
//find ids from account array and match those ids with the given id
return accounts.find((account) => account.id === id);
 
}



function sortAccountsByLastName(accounts) {
  //sort method and use tolowercase method to order it alphabetically
  //declare an empty variable and inside sort accounts array to get name and last
  //name alphabetically
let result = accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
);
 return result;
}

function getTotalNumberOfBorrows(account, books) {
  let accountId = account.id;
  // set a counter store vaiable
  let count = 0;
  // map all the elements on the books array
  books.map((book)=>{
  // filter borrows if the element given match with the 
  //on this function and if it does set count to +1
    book.borrows.filter((ele)=>{
      if (ele.id === accountId) count++
    })
  })
  //return the counter store variable 
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  // returns an array of objects 
 let booksCurrentlyCheckedOut = [];
 //check on the array of books if the borrows has the same id as the accounts id 
//  let bookId = books.filter((ele)=>{
//     borrows.filter((borrowObj)=>{
//      return borrowObj.id === account.id && borrowObj.returned === false
books.forEach((bookObj)=>{
  let author = authors.find((authorObj)=>{
    return authorObj.id === bookObj.authorId ;
  })
    bookObj.borrows.forEach((borrowObj)=>{
      if(borrowObj.id === account.id && borrowObj.returned === false){
        booksCurrentlyCheckedOut.push({...bookObj,author:{...author} });
      }
        
    })
   
  })
  return booksCurrentlyCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
