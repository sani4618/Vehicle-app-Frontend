import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div>

      <BrowserRouter>

      <Routes>

        <Route path="/" exact element={<Home/>} />
        <Route path="/reg" exact element={<Register/>}/>

      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
