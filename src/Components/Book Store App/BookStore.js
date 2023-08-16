import style from './bookstore.css'
const BookStore = ({ title, author, pages, isRead, image, setTitle, setAuthor, setPages, setIsRead, setImage, handleSubmit, handleImageChange }) =>{
    return(
        <div>
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
                    <div className='add-button'>
                        <button className="input-add-book" type="submit">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookStore;