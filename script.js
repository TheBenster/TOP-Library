let modalBtn = document.getElementById('modalBtn');
let testModal = document.getElementById('modal');
let cancel = document.getElementById('close');
let submit = document.getElementById('submit');
let titleEntry = document.querySelector('#title');
let authorEntry = document.querySelector('#author');
let pagesEntry = document.querySelector('#pages');
let readEntry = document.querySelector('#read');
let readChecked = document.querySelector('#read').checked


modalBtn.addEventListener('click', ()=>{
    testModal.setAttribute('open', 'true')
    
})
cancel.addEventListener('click', ()=>{
    testModal.removeAttribute('open')
})
submit.addEventListener('click', (event)=>{
    console.log(readChecked)
    event.preventDefault();
    if(titleEntry.length == 0){
        titleEntry.textContent = "you can't leave this blank sir"
    }
    addBookToLibrary()
    displayBook(myLibrary);
    testModal.removeAttribute('open')
})



let list = document.querySelector('.book-list');

// Assigns form values to variables and then instantiates to Book, and finally pushes to array.
// This is needed because the variables needs a way to save the values on the form.
function addBookToLibrary(){
    let title = titleEntry.value;
    let author = authorEntry.value;
    let pages = pagesEntry.value;
    let read = readEntry.value;
    if(title === ''||author === '' || pages === '' || read === ''){
        myLibrary.pop(newBook)
    }
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}

// This creates a div containing the variables above ^^^ 
// The reason for so many divs is to clean up what would otherwise be a jumbled mess.
function displayBook(myLibrary) {
list.innerHTML = ''; // clears previous content
  
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
    var x = document. createElement("INPUT"); x. setAttribute("type", "checkbox"); 
    list.appendChild(card);
    titleDiv.textContent = `Title: ${book.title}`
    authorDiv.textContent = `Author: ${book.author}`
    // For some reason if i didn't make this if statement, and i didn't read the book it would be "Finished: on"
    readDiv.textContent = 'Finished:'

    
    // readDiv.textContent = `Finished: ${book.read}`
    pagesDiv.textContent = `Pages: ${book.pages}`

    
      
    card.appendChild(titleDiv)
    card.appendChild(authorDiv)
    card.appendChild(pagesDiv)
    card.appendChild(readDiv)
    card.appendChild(x)
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
  