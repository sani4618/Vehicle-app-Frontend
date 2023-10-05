import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>

      <BrowserRouter>

      <Routes>

        <Route path="/" exact element={<Home/>} />
        <Route path="/reg" exact element={<Register/>}/>
        <Route path="/search" exact element={<Search/>}/>
        <Route path="/delete" exact element={<Delete/>}/>
        <Route path="/viewall" exact element={<ViewAll/>}/>

      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
