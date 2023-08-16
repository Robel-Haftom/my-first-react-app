import { useEffect, useState } from 'react';
// import style from './media.css'
import MediaList from './MediaList';
import Lists from './Lists';
import Table from './Table';

const Media = () => {
    const[reqType, setReqType] = useState('users');
    const [posts, setPosts] = useState([]);
    const API_URL = "https://jsonplaceholder.typicode.com";
    

    useEffect(() =>{
        const fetchData = async () =>{
            try {
            const postData = await fetch(`${API_URL}/${reqType}`);
            const result = await postData.json();
            console.log(result);
            setPosts(result);
            } catch (error) {
                console.log(error.message);
            } 
            }

            fetchData();
    }, [reqType]);

    return(
        <>
            <MediaList
                reqType = {reqType}
                setReqType = {setReqType}
            />
            {/* <Lists posts = {posts}/> */}
            <Table posts = {posts} />
        </>
    );

} 

export default Media;