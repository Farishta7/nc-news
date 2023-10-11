import './App.css';
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from './components/SingleArticle';
import {Route, Routes} from 'react-router-dom';
import TopicsList from './components/TopicsList';
// import EachTopicArticles from './components/EachTopicArticles';
import ScrollToTop from './components/ScrollToTop';
import AllCodingArticles from './components/AllCodingArticles';
import AllFootballArticles from './components/AllFootballArticles';
import AllCookingArticles from './components/AllCookingArticles';
import Weather from './components/Weather';

function App() {  
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<TopicsList />} />
        {/* <Route path="/topics/:topic" element={<EachTopicArticles />} /> */}
        <Route path="/topics/coding" element={<AllCodingArticles />} />
        <Route path="/topics/football" element={<AllFootballArticles />} />
        <Route path="/topics/cooking" element={<AllCookingArticles />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
