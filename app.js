//Search input DOM
const searchField = document.getElementById("search-field");
//Book Cards parent Div DOM
const bookParentDiv = document.getElementById("books-parent");
//Tex Message DOM
const bookFound = document.getElementById("bookFound")
bookFound.innerText=""

//use Async & await for data load from api
const searchButton = async () => {
  
  const fieldValue = searchField.value;
  const url = `https://openlibrary.org/search.json?q=${fieldValue}`;
  const respo = await fetch(url);
  const data = await respo.json();
  
  allBooks(data);
  
  
};
//declare arrow function for bonus requirement
const allBooks = (books) => {
  
  //apply triple equal for bonus requirement  & Error handle when you don't input any data
  if(searchField.value===""){
    bookParentDiv.textContent=""
    bookFound.style.color="orange"
    bookFound.innerText="OOOPS..you did't write anything..please write book name"
    console.log("empty")
  }
  //apply triple equal for bonus requirement & Error handle when you input wrong book name
  else if(books.numFound===0){
    searchField.value=""
    bookParentDiv.textContent=""
    bookFound.style.color="red"
    bookFound.innerText="No result found"
    
   
  }
  else{
    searchField.value=""
    bookParentDiv.textContent=""
    bookFound.style.color="green"
    
    bookFound.innerText= `Total Book found: ${books.numFound}`
    const booksArray = books.docs;
    //apply forEach for bonus requirement
    booksArray.forEach((book) => {
      console.log(book)
      const bookCard = document.createElement("div");
      bookCard.classList.add("col-lg-3");
      
      //apply cover icon for bonus requirement 
      bookCard.innerHTML = `
                        <div class="card">
                           <img class="image" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                          <div class="card-body">
                             <h6 class="card-title">Book Name: <span>${book.title}</span></h6>
                             <p>Writer: <span>${book.author_name[0]}</span> <p>
                             <p>Publisher: <span>${book.publisher[0]} </span></p>
                             <p>First published Year: <span>${book.first_publish_year}<span> </p>
                         </div>
                        </div>
          `;
          bookParentDiv.appendChild(bookCard)
    });
  }
 
};



//--------THANKS TO YOU FOR YOUR TIME & SUPPORT-----------