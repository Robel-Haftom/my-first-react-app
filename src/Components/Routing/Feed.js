import Post from "./Post";

const Feed = ({ posts }) =>{
    return(
        <ul className="post-list">
            {posts.map((item) =>
                <Post item={item} key={item.id}/>
            )}
        </ul>
    );
}

export default Feed;