import BookStore from "./Components/Book Store App/BookStore";
import BookDisplay from "./Components/Book Store App/BookDisplay";
import Header from "./Components/Book Store App/Header";
import { useEffect, useState } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import FavoriteBookDisplay from "./Components/Book Store App/FavoriteBookDisplay";
import Genre from "./Components/Book Store App/Genre";

const BookStoreApp = () => {
    const API_URL = "http://localhost:3500/books";

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [isRead, setIsRead] = useState(false); 
    const [image, setImage] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [genre, setGenre] = useState("Unknown");
    const [searchBook, setSearchBook] = useState("");
    const [filterGenre, setFilterGenre] = useState("");

    const navigate = useNavigate();
    const randomChars = ['a','b','c','d','e','f','g','h','i','j',1,2,3,4,5,6,7,8,9,0];

    const [books, setBooks] = useState(JSON.parse(localStorage.getItem("books")) ||[]); 
    
    function handleRandomId(){
        let randomID = '';
        const randomNumberLength = 5;
        for(let i=0; i < randomNumberLength; i++){
           let randomIndex = Math.floor(Math.random() * randomChars.length);
           randomID += randomChars[randomIndex];
        }
        return randomID;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newBook = {
            id: handleRandomId(),
            title,
            author,
            pages,
            isRead,
            image,
            favorite,
            genre,
        };
        const allBooks = [...books, newBook];
        setTitle("");
        setAuthor("");
        setPages("");
        setIsRead(false);
        setImage("");
        setFavorite(false);
        setGenre("other");
        setBooks(allBooks);
        localStorage.setItem("books", JSON.stringify(allBooks));
        navigate("/");
    }

    const handleDelete = (id) =>{
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks)
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    const handleRead = (id) =>{
        const updatedBook = books.map(book =>
            book.id == id ? {...book, isRead: !book.isRead} : book);
        setBooks(updatedBook);
        localStorage.setItem("books", JSON.stringify(updatedBook));
    }

    const handleFavorite = (id) =>{
        const updatedBook = books.map(book =>
            book.id == id ? {...book, favorite: !book.favorite} : book);
        setBooks(updatedBook);
        localStorage.setItem("books", JSON.stringify(updatedBook));
        }
    

    return(
        <>
            <Header />
            <Routes>
                <Route
                    path="/addbook"
                    element={
                    <BookStore 
                        title={title}
                        author={author}
                        pages={pages}
                        isRead={isRead}
                        image={image}
                        genre={genre}
                        setTitle={setTitle}
                        setAuthor={setAuthor}
                        setPages={setPages}
                        setIsRead={setIsRead}
                        setImage={setImage}
                        setGenre={setGenre}
                        handleSubmit={handleSubmit}
                    />
                    } />
                <Route
                    path="/"
                    element={
                    <BookDisplay 
                        books={books.filter(book =>(
                            book.title.toLowerCase().includes(searchBook.toLocaleLowerCase()) 
                            ||
                            book.author.toLowerCase().includes(searchBook.toLowerCase())
                            ))}
                        favorite={favorite}
                        setFavorite={setFavorite}
                        handleFavorite={handleFavorite}
                        handleDelete={handleDelete}
                        handleRead={handleRead}
                        searchBook={searchBook}
                        setSearchBook={setSearchBook}
                        />
                    }
                />  
                <Route
                    path="/favorites"
                    element={
                    <FavoriteBookDisplay 
                        books={books.filter(book =>(
                            book.favorite == true))}
                        handleFavorite={handleFavorite}
                        handleDelete={handleDelete}
                        handleRead={handleRead}
                        />
                    }
                />  
                <Route 
                    path="/genre"
                    element={
                        <Genre
                            books={books.filter(book =>(
                                book.genre == filterGenre))}
                            setFilterGenre={setFilterGenre}
                            handleFavorite={handleFavorite}
                            handleDelete={handleDelete}
                            handleRead={handleRead}
                        />
                    }
                
                />
            </Routes>
           
        </>
    );
}

export default BookStoreApp;