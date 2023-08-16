import { Link } from "react-router-dom";


const Post = ({ item }) =>{
    return(
        <li key={item.id} className="post">
            <Link to={`/posts/${item.id}`} > 
                <h3>{item.title}</h3>
                <p>{item.body.length < 50 ? item.body : `${(item.body).slice(0, 50)}...`}</p>
            </Link>
        </li>
    );
}

export default Post;