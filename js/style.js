const searchField = document.getElementById('search-field');
const displayContainer = document.getElementById('display-details');
const searchResul = document.getElementById('total-book')


const loadBook = () => {
    const searchText = searchField.value;

    // data fetch
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))

    // clear field 
    searchField.value = '';
}

//.slice(0, 10) 

const displayBook = (books) => {
    displayContainer.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-75 ">
                <img class="h-75" src=" https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg"> 
           <div class="card-body">
           
                 <h5 class="card-title"></h5>
                 <p class="card-text text-primary fs-2">Book Name : ${book.title}</p>
                 <p class="card-text text-primary fs-3">author_name : ${book.author_name}</p>
                <p class="card-text">Publish Date :${book?.publish_date }</p>
                <p class="card-text">Publisher :${book.publisher.slice(0, 5)}</p>
            </div>
        </div> 
        `
        displayContainer.appendChild(div);
        // console.log(book);
    })


    //  error handling for emply field 

    searchResul.innerText = `The result Found: ${books.length}  `;






}