import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Profile from './Pages/Profile/Profile';



<Header></Header>
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     {/* <Home></Home> */}
     <Profile></Profile>
    </div></BrowserRouter>
  );
}

export default App;
