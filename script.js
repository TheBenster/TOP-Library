card = document.querySelector('.book')
console.log(card)


bloodMeredian = new Book('Blood Meridian', 'Cormac McCarthy', 340, true);
eastOfEden = new Book('East of Eden', 'John Steinbeck', 748, true);
cosmos = new Book('Cosmos', 'Carl Sagan', 250, true);
slaughterHouseFive = new Book('Slaughter House Five', 'Kurt Vonnegut', 150, true);


myLibrary = [bloodMeredian, eastOfEden, cosmos, slaughterHouseFive];



function displayBook(myLibrary){
    myLibrary.forEach(book => {
        book.forEach(()=>{
            book.textContent = 'atg'
        }
        )
        card.textContent = book.title
        console.log(book)
    });
}
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



displayBook(myLibrary)