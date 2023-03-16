import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from './components/SingleArticle';
import {Route, Routes} from 'react-router-dom';
import TopicsList from './components/TopicsList';
import AllFootballArticles from './components/AllFootballArticles';
import AllCodingArticles from './components/AllCodingArticles';
import AllCookingArticles from './components/AllCookingArticles';

function App() {  
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles/:article_id' element={<SingleArticle  />}/>
        <Route path='/topics' element={<TopicsList />}/>
        <Route path='/topics/football' element={<AllFootballArticles />}/>
        <Route path='/topics/coding' element={<AllCodingArticles />}/>
        <Route path='/topics/cooking' element={<AllCookingArticles />}/>
      </Routes>
    
    </div>
  );
}

export default App;
