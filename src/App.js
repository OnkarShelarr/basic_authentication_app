import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import About from './About';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';

function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path='/'         element={ <SignUp/> } />
              <Route path='/login'    element={ <Login/> } />
              <Route path='/home'     element={ <Home/> } />
              <Route path='/about'    element={ <About/> } />
              <Route path='/fp'       element={ <ForgotPassword/> } />
              <Route path='/cp'       element={ <ChangePassword/> } />
              <Route path='*'         element={ <SignUp/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
