  import { useState, useRef } from 'react';
  import Header from './Components/Routing/Header';
  import Nav from './Components/Routing/Nav'
  import Home from './Components/Routing/Home';
  import NewPosts from './Components/Routing/NewPosts';
  import PostPage from './Components/Routing/PostPage';
  import About from './Components/Routing/About'
  import Missing from './Components/Routing/Missing';
  import Footer from './Components/Routing/Footer';
  // import Style from './Components/Routing/routing.css';
  import { Route, Routes, Switch, useHistory } from 'react-router-dom';
  
  function RoutingApp() {
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([
      {
        id: 1,
        title: "My first Post",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis"
      },
      {
        id: 2,
        title: "My second Post",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi"
      },
      {
        id: 3,
        title: "My third POst",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda "
      },
      {
        id: 4,
        title: "My Fourth Post",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        id: 5,
        title: "My Fifth Post",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et"
      },
    ]
    );
    
    return(
      <>
      <Header title={"React JS Routing"} />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route 
          exact path='/' 
          element={<Home posts={posts}  setPosts={setPosts}/>} />
        <Route exact path='/posts' element={<NewPosts />} />
        <Route exact path='/posts/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
      </>
    )
  }

  export default RoutingApp;
