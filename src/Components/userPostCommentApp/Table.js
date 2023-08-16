import Row from "./Row";
// import style from './media.css'

const Table = ({ posts }) => {
    return(
        <div className="table-container">
            <table>
                <tbody>
                    {posts.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;   