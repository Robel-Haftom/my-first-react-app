// import style from './media.css';

const ListItem = ({ Item }) => {
    return(
        <li>
            <p>{JSON.stringify(Item)}</p>
        </li>
    );
}

export default ListItem;