 //let books = require("../data/books")

function getTotalBooksCount(books) {
// return books length 
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books={}) {
  let counter = 0
books.forEach((bookObj)=>{
  const {borrows}= bookObj;
if(borrows[0].returned === false){
  counter++
 }
})
return counter;
}

function getMostCommonGenres(books) {
  let result = {};
  books.forEach((num) => {
   if (result[num.genre]) {
    result[num.genre]++;
   } else {
    result[num.genre] = 1;
   }
  });
  return Object.entries(result).map(([name, count]) => {
    return {name,count}}).sort((countA, countB) => countB.count - countA.count).slice(0, 5);
 }
 

function getMostPopularBooks(books) {
  books.sort((bookA,bookB)=>{
      return bookB.borrows.length - bookA.borrows.length 
  })

  const top5books = books.slice(0,5);
  const result = top5books.map((bookObj)=>{
    return {name : bookObj.title, count : bookObj.borrows.length}
  })

  return result;
}
   
function getMostPopularAuthors(books, authors) {
  let result = [];
    authors.forEach((author) => {
     let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
     };
     books.forEach((book) => {
      if (book.authorId === author.id) {
       theAuthor.count += book.borrows.length;
      }
     });
     result.push(theAuthor);
    });
    return result.sort((a, b) => b.count - a.count).slice(0, 5);
   }

module.exports = {//
 getTotalBooksCount,
 getTotalAccountsCount,
 getBooksBorrowedCount,
 getMostCommonGenres,
getMostPopularBooks,
 getMostPopularAuthors,
};
