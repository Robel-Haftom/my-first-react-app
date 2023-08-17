import search from './Images/search.png'
import book3 from './Images/book3.png';
import emptyStar from './Images/empty-star.png'
import filledStar from './Images/filled-star-1.png'
import filter from './Images/filter.png'

const Genre = ({ books, setFilterGenre, handleFavorite, handleDelete, handleRead }) =>{
    return(
        <>
            <div className="genre">
                <p onClick={(e) => setFilterGenre(e.target.textContent )}>Adventure</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Biography</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Children Literature</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Comedy</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Crime Fiction</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Drama</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Dystopian</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Fantasy</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Graphic Novel</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Historical Fiction</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Horror</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Mystery</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Non-Fiction</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Other</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Philosophy</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Poetry</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Romance</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Science</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Science Fiction</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Self-Help</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Thriller</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Travel</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Unknown</p>
                <p onClick={(e) => setFilterGenre(e.target.textContent)}>Young Adult</p>
            </div>
            <div className="all-book-list">
            {books.map((book) => 
                <div className="each-book" key={book.id}>
                    <div className="upper-book-detail">
                        <div className="book-image">
                            <p className='book-genre'>Genre: {book.genre}</p>
                            <img src={book3} alt="book image here"/>
                        </div>
                        <div className="book-detail">
                            <p className="each-book-title">
                                Title: {book.title.length > 10 ? `${book.title.slice(0,9)}...` : book.title}</p>
                            <p className="each-book-author">
                                Author: {book.author.length > 10 ? `${book.author.slice(0,9)}...` : book.author}</p>
                            <p className="each-book-pages">Pages: {book.pages}</p>
                            <button
                                style={{
                                    backgroundColor: book.isRead ? 'green' : '#FF2400',
                                    color: "white",
                                    fontWeight:"300",
                                    border: book.isRead ? '1px solid green' : '1px solid red',
                                }}
                                className="each-book-read"
                                onClick={() =>handleRead(book.id)}>
                                {book.isRead? "Read":"To read"}
                            </button>
                            <button 
                                className="each-book-delete"
                                onClick={() =>handleDelete(book.id)}
                            >
                                Remove
                            </button>
                            <div 
                                className='book-favorite' >
                                <p
                                onClick={() =>handleFavorite(book.id)}
                                > Add to favorite </p>
                                <img src={book.favorite ? filledStar : emptyStar}
                                onClick={() =>handleFavorite(book.id)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    );
}

export default Genre;