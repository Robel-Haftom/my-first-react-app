import search from './Images/search.png'
import book3 from './Images/book3.png';
import emptyStar from './Images/empty-star.png'
import filledStar from './Images/filled-star-1.png'
import filter from './Images/filter.png'
const FavoriteBookDisplay = ({ books, favorite, setFavorite, handleFavorite, handleDelete, handleRead, searchBook, setSearchBook }) =>{   

    return(
       <div className='books-home-page'>
            <p className="main-title">My Favorite Books</p>
            {/* <div className="search-book">
                <div className='book-search-div'>
                    <input 
                        type='text'
                        className='book-search-input'
                        placeholder='Search Books...'
                        value={searchBook}
                        onChange={(e) =>setSearchBook(e.target.value)}
                    />
                    <img className="search-icon" src={search} />
                </div>
                <img className='filter-icon' src={filter}/>
            </div> */}
            {books.length ?
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
                :
                <p className="empty-book-list">Your Favorite List is Empty</p>
            }
        </div>
    );
}

export default FavoriteBookDisplay;