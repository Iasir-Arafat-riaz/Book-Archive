const searchField = document.getElementById("search-field");


const searchButton = async () => {
  const fieldValue = searchField.value;
  const url = `http://openlibrary.org/search.json?q=${fieldValue}`;
  const respo = await fetch(url);
  const data = await respo.json();
  allBooks(data);
  searchField.value=""
};
const allBooks = (books) => {
  console.log(books);
  const bookParentDiv = document.getElementById("books-parent");
  bookParentDiv.textContent=""
  const bookFound = document.getElementById("bookFound")
  bookFound.innerText= `totalbook found ${books.numFound}`
  const booksArray = books.docs;
  booksArray.forEach((book) => {
    console.log(book)
    const bookCard = document.createElement("div");
    bookCard.classList.add("col-lg-3");
    
    bookCard.innerHTML = `
                      <div class="card">
                         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h4 class="card-title">Book Name: ${book.title}</h4>
                          <h6>Writer: ${book.author_name} </h6>
                          <p>Publisher: ${book.publisher.slice(0,50)}</p>
                          <p>First published Year: ${book.first_publish_year} </p>
                          
                        </div>
                      </div>
        `;
        bookParentDiv.appendChild(bookCard)
  });
};
