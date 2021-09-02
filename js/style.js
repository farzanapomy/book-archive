const searchField = document.getElementById('search-field');
const displayContainer = document.getElementById('display-details');
const searchResul = document.getElementById('total-book');
const showBook = document.getElementById('error')


const loadBook = () => {
    const searchText = searchField.value;

    // error handle
    if (searchField.value === '') {
        showBook.innerText = "No result found.Please enter any book name";
    }
    else {
        error.innerText = ''
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBook(data));
    }

    searchField.value = '';
}





const displayBook = books => {
    searchResul.innerText = `The result Found: ${books.numFound}`;
    const bookDetails = books.docs;
    bookDetails.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-75  border border-3 border-warning rounded">
                 <img class="h-75 img-fluid" src=" https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg">
           <div class="card-body">
                 <p class="card-title"></p>
                 <p class="card-text text-primary fs-4">${book.title}</p>
                 <p class="card-text text-primary fs-5">Author Name : ${book.author_name}</p>
                 <p class="card-text fs-5">Publish Year :${book?.publish_year}</p>
                 <p class="card-text fs-5">Publisher :${book.publisher}</p>      
                 <a class="btn btn-primary px-3" target="_blank"  href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks-intl-ship&field-keywords=${book.title}" >
                 Buy Now
                </a>
            </div>
        </div>
        `
        displayContainer.appendChild(div);
    })
}


