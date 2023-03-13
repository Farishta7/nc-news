import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TopicsList from "./components/TopicsList";
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/topics' element={<TopicsList />}/>
      </Routes>
    
    </div>
  );
}

export default App;
