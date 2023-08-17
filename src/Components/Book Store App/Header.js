import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div className="header">
            <p className="header-title">The Book Store</p>
            <ul>
                <li><Link to="/" >Home </Link></li>
                <li><Link to="/addbook" >Add Book </Link></li>
                <li><Link to="/genre" >Genre</Link></li>
                <li><Link to="/favorites" >Favorites</Link></li>
            </ul>
        </div>
    );
}


export default Header;