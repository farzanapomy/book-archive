const loadBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))

    // console.log(url);
    searchField.value = '';
}

//.slice(0, 10) 

const displayBook = (books) => {
    const displayContainer = document.getElementById('display-details');
    console.log(books.length)
    // const totalBook = document.getElementById('total-book');
    // totalBook.innerText = `Result found : ${books.length}`;
    displayContainer.textContent = '';
    books.forEach(book=> {
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
        <img h-75 src=" https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg">
            
            <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">author_name : ${book.author_name}</p>
            <p class="card-text">Title :${book.subject}</p>
            <p class="card-text">Publish Date :${book.publish_date[0]}</p>
            
            </div>
        </div> 
        `
    displayContainer.appendChild(div);
    console.log(book);
})
const p = document.createElement('p');
p.innerText = `the result Found: ${data.docs.length}`;
displayContainer.appendChild(p);

    // books.forEach javascript


}