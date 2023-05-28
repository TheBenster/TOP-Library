card = document.querySelector('.book')
console.log(card)
container = document.querySelector('.container')
let para = document.createElement('p')
let modal = document.getElementById('#myModal');
let modalBtn = document.getElementById('modalBtn');
var span = document.getElementsByClassName("close")[0];
let form = document.querySelector('form')
let testModal = document.querySelector('#test')
let cancel = document.getElementById('#cancel')

cancel.addEventListener('click', ()=>{
    testModal.close();
    alert('test')
})
modalBtn.addEventListener('click', ()=>{
    testModal.showModal();
    
})



window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

bloodMeredian = new Book('Blood Meridian', 'Cormac McCarthy', 340, true);
eastOfEden = new Book('East of Eden', 'John Steinbeck', 748, true);
cosmos = new Book('Cosmos', 'Carl Sagan', 250, true);
slaughterHouseFive = new Book('Slaughter House Five', 'Kurt Vonnegut', 150, true);


myLibrary = [bloodMeredian, eastOfEden, cosmos, slaughterHouseFive];



function displayBook(myLibrary){
   
    myLibrary.forEach(book => {
        para.textContent = book.title;
        book.appendChild(para)        
    });
}
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



displayBook(myLibrary)