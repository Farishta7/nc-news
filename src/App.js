import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from './components/SingleArticle';
import {Route, Routes} from 'react-router-dom';
import TopicsList from './components/TopicsList';
import EachTopicArticles from './components/EachTopicArticles';


function App() {  
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles/:article_id' element={<SingleArticle  />}/>
        <Route path='/topics' element={<TopicsList />}/>
        <Route path='/topics/:topic' element={<EachTopicArticles />}/>

      </Routes>
    
    </div>
  );
}

export default App;
