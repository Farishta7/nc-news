import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from './components/SingleArticle';
import {Route, Routes} from 'react-router-dom';

function App() {  
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles/:article_id' element={<SingleArticle  />}/>
      </Routes>
    
    </div>
  );
}

export default App;
