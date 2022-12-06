import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Homepage/Home';



<Header></Header>
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Home></Home>
    </div></BrowserRouter>
  );
}

export default App;
