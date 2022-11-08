    const books = [
    {
      id: 1,
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: 2,
      title: "JavaScript: The Good Parts",
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: 3,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]



    function renderBooks() {
        const bookBooks = document.getElementById("bookBooks")
        
        bookBooks.innerHTML = ""

        books.forEach(book => {
            bookBooks.innerHTML += 
            `
            <div class="book">
                <img src="${book.image}" alt="" class="imgBook">
                <p сlass="text">${book.title}</p>
                <p "text">${book.year}</p>
                <p "text">${book.authors}</p>
                <div class="buttonsBook">
                    <div class="hange-deleteBook">
                        <button>Изменить</button>
                    </div>
                    <div class="hange-deleteBook">
                        <button class="deleteBook" id ="deleteBook${book.id}">Удалить</button>
                    </div>
                 </div>   
             </div> 
            ` 
        })
    }

    function addEventListener (){
        books.forEach (book => {
            document.getElementById(`deleteBook${book.id}`).addEventListener('click',()=>{
                deleteBook(book.id)
            })
        }) 
    }

    function deleteBook(id) {
        const bookId = books.find((b)=>{
            return b.id === id
        })
        const bookIndex = books.indexOf(bookId)

        books.splice(bookIndex, 1)

        renderBooks()
        addEventListener ()
        
    }

    function openModal(){
        const modal = document.getElementById("addBookModal")
        modal.style.display="flex" 
    }

    function addBook() {
        const newTitle = document.getElementById("modalTaitl").value
        const newAuthors = document.getElementById("modalAuthors").value
        const newYear = document.getElementById("modalYear").value
        const newImag = document.getElementById("modalImg").value
        let idB = 5;
    

        const newBook ={
            id: idB++,
            title: newTitle,
            authors: newAuthors,
            year: newYear,
            image: newImag
        }

        books.push(newBook)

        console.log(books)

        renderBooks()
        clearModal()
        endModal()
        addEventListener()
    }

    function clearModal(){
        document.getElementById("modalTaitl").value = ""
        document.getElementById("modalAuthors").value =""
        document.getElementById("modalYear").value = ""
        document.getElementById("modalImg").value = ""
    }

    function endModal(){
        const modal = document.getElementById("addBookModal")
        modal.style.display="none" 
    }

    renderBooks()
    addEventListener ()
