 import ListItem from "./ListItem";
// import style from './media.css'
const Lists = ({ posts }) =>{
    return(
        <ul className="all-lists">
            {posts.map((item) => 
            <ListItem  key={item.id} Item={item} />
            )}
        </ul>
    );
}

export default Lists;