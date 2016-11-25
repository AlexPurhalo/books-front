Instruction
- what I must do? - create application
- what the purpose of this application? - shows data about the books and their authors
- what the technologies can I use? - React (Redux), Bootstrap

Okay, let's start to plane a future code
I. Books page, front-end: /; back-end: /books, /books?genre=:genre_name;
     - at this point I must create the list contains with different books
     - every book should has the title and authors list
     - click to title brings to page of chosen book, /books/:id
     - click to author name brings to author's page, /authors/:id
     - also before list should be shown genres list with certain genre
     - click to genre shows only the books of chosen genre

II. Authors page, /authors
     - now I want create a authors list page that contains the different author's names      /authors
     - click to to author's name shows drop list, that contains link to author's page and list of his books with links to book's page

III. Author's page, /authors/:id
     - shows the author's name, biography, list of the his books with link to page of this book

IV. Book's page, /books/:id
     - shows the book's title, authors list with link to author's page, genre with link to chosen genre, brief
