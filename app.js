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
     
      const bookCard = document.createElement("div");
      bookCard.classList.add("col-lg-3");
      
      //apply cover icon for bonus requirement 
      //use turnery operator when missing data in JSON
      const a=0
      bookCard.innerHTML = `
                        <div class="card">
                           <img class="image" src="https://covers.openlibrary.org/b/id/${book.cover_i!==undefined? book.cover_i:9317727}-M.jpg" class="card-img-top" alt="...">
                          <div class="card-body">
                             <h6 class="card-title">Book Name: <span>${book.title}</span></h6>
                             <p>Writer: <span>${book.author_name.length!==0? book.author_name[0]:"writer not found"}</span> <p>
                             <p>Publisher: <span>${book.publisher.length!==0?book.publisher[0]:"publisher not found"} </span></p>
                             <p>First published Year: <span>${book.first_publish_year>1?book.first_publish_year : "Published date not found" }<span> </p>
                         </div>
                        </div>
          `;
          bookParentDiv.appendChild(bookCard)
          
    
    });
  }
 
};



//--------THANKS TO YOU FOR YOUR TIME & SUPPORT-----------