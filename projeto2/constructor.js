function CreateBook(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new CreateBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
 
console.log(book1);

// a diferença entre objetos e construtores é que os objetos são 
// criados usando a notação literal, enquanto os construtores são 
// funções que criam objetos usando a palavra-chave "new". 
// Os construtores permitem criar múltiplos objetos com as mesmas 
// propriedades e métodos, enquanto os objetos literais são únicos.