import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/home/about/About';
import Notfound from './components/home/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      
      <Routes>

       <Route path='/' element = {<Home></Home> }> </Route>
       <Route path='/about' element = {<About></About> }> </Route>
       <Route path='*' element = {<Notfound></Notfound> }></Route>

      </Routes>
    </div>
  );
}

export default App;
