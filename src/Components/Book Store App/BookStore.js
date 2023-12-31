import style from './bookstore.css'
const BookStore = ({ title, author, pages, isRead, image, genre, setTitle, setAuthor, setPages, setIsRead, setImage, setGenre, handleSubmit }) =>{
    return(
        <>
            <p className='add-book-title'> Add new Book</p>
            <div className="book-store">
                <p className='book-store-title'>My Book Store</p>
                <form onSubmit={handleSubmit}>
                    <label              
                        className="book-label-title"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input  
                        className="book-input-title"
                        type="text" 
                        required 
                        id="title" 
                        placeholder='Title of the book...'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <label      
                        className="book-label-author"
                        htmlFor="author"
                    >
                        Author
                    </label>
                    <input  
                        className="book-input-author"
                        type="text" 
                        required 
                        id="author" 
                        placeholder='Name of the author...'
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                    <label  
                        className="book-label-pages"
                        htmlFor="pages"
                    >
                        Pages
                    </label>
                    <input  
                        className="book-input-pages"
                        type="number" 
                        required 
                        min="0" 
                        max="10000" 
                        placeholder='Number of pages of the book...'
                        id="pages" 
                        onChange={(e) => setPages(e.target.value)}
                        value={pages}
                    />
                    <div className="book-input-image">  
                        <label htmlFor='image'>Select Image</label>
                        <input 
                            className="book-image-select"
                            id='image'
                            type="file" 
                            accept='Image/*'
                            onChange={(e) => setImage('')}
                        />
                    </div>
                    <div className="book-input-read">  
                        <label htmlFor='read'>Have you read it?</label>
                        <input 
                            className="book-input-checked"
                            type="checkbox" 
                            id='read'
                            checked={isRead}
                            onChange={(e) => setIsRead(e.target.checked)}
                        />
                    </div>
                    <div className="book-input-genre">  
                        <label htmlFor='genre'>Select Genre</label>
                        <select
                            className="book-input-select"
                            id='genre'
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option>Adventure</option>
                            <option>Biography</option>
                            <option>Children Literature</option>
                            <option>Comedy</option>
                            <option>Crime Fiction</option>
                            <option>Drama</option>
                            <option>Dystopian</option>
                            <option>Fantasy</option>
                            <option>Graphic Novel</option>
                            <option>Historical Fiction</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Non-Fiction</option>
                            <option>Other</option>
                            <option>Philosophy</option>
                            <option>Poetry</option>
                            <option>Romance</option>
                            <option>Science</option>
                            <option>Science Fiction</option>
                            <option selected>Select</option>
                            <option>Self-Help</option>
                            <option>Thriller</option>
                            <option>Travel</option>
                            <option>Young Adult</option>
                        </select>
                    </div>
                    <div className='add-button'>
                        <button className="input-add-book" type="submit">Add Book</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default BookStore;