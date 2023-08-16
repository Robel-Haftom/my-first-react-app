import Feed from "./Feed";


const Home = ({ posts }) => {
    return(
        <main className="all-lists">
            <Feed posts={posts} />
        </main>
    );
}

export default Home;