let modal = document.getElementById('myModal');
let modalBtn = document.getElementById('modalBtn');
var span = document.getElementsByClassName("close")[0];
let form = document.querySelector('form');
let testModal = document.getElementById('modal');
let cancel = document.getElementById('close');
let submit = document.getElementById('submit');
let titleEntry = document.querySelector('#title');
let authorEntry = document.querySelector('#author');
let pagesEntry = document.querySelector('#pages');
let readEntry = document.querySelector('#read');


modalBtn.addEventListener('click', ()=>{
    testModal.setAttribute('open', 'true')
    
})
cancel.addEventListener('click', ()=>{
    testModal.removeAttribute('open')
})
submit.addEventListener('click', (event)=>{
    event.preventDefault();
    addBookToLibrary()
    displayBook(myLibrary);
    testModal.removeAttribute('open')
})



  let list = document.querySelector('.book-list');
function addBookToLibrary(){
    let title = titleEntry.value;
    let author = authorEntry.value;
    let pages = pagesEntry.value;
    let read = readEntry.value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}

function displayBook(myLibrary) {
list.innerHTML = ''; // Clear previous content
  
myLibrary.forEach(book => {
    let card = document.createElement('div');
    card.classList.add('book')
    let titleDiv = document.createElement('div')
    let authorDiv = document.createElement('div')
    let readDiv = document.createElement('div')
    let pagesDiv = document.createElement('div')
    let delBTN = document.createElement('button')
    delBTN.textContent = 'Delete Book'
    delBTN.classList.add('del')
    delBTN.addEventListener('click', ()=>{
        card.remove();
    })
    //   card.textContent = `Title: ${book.title} Author: ${book.author} Read: ${book.read} Pages: ${book.pages}`
    list.appendChild(card);
    titleDiv.textContent = `Title: ${book.title}`
    authorDiv.textContent = `Author: ${book.author}`
    if(book.read == true){
        readDiv.textContent = 'Finished: Yes.';
    } else{
        readDiv.textContent = 'Finished: Not yet.'
    }
    // readDiv.textContent = `Finished: ${book.read}`
    pagesDiv.textContent = `Pages: ${book.pages}`

    
      
    card.appendChild(titleDiv)
    card.appendChild(authorDiv)
    card.appendChild(pagesDiv)
    card.appendChild(readDiv)
    card.appendChild(delBTN)
});
}
  
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
  
let bloodMeridian = new Book('Blood Meridian', 'Cormac McCarthy', 340, true);
let eastOfEden = new Book('East of Eden', 'John Steinbeck', 748, true);
let cosmos = new Book('Cosmos', 'Carl Sagan', 250, true);
let slaughterHouseFive = new Book('Slaughter House Five', 'Kurt Vonnegut', 150, true);
  
let myLibrary = [bloodMeridian, eastOfEden, cosmos, slaughterHouseFive];
  
displayBook(myLibrary);
  