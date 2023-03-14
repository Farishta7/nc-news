import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from './components/SingleArticle';
import {Route, Routes} from 'react-router-dom';
import { useState } from "react";

function App() {

    const [isLoading, setIsloading] = useState(true);

    

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home isLoading={isLoading} setIsloading={setIsloading}/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle isLoading={isLoading} setIsloading={setIsloading} />}/>
      </Routes>
    
    </div>
  );
}

export default App;
