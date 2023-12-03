import { Route, Routes } from 'react-router';
import './App.css';
import Main from './components/home/Main';
import SingIn from './components/singIn/SingIn';

function App() {


  return (
       <Routes>
        <Route exact path='/' element={<SingIn/>} />
        <Route path='/logIn' element={<SingIn/>} />
        <Route path="/main" element={<Main />} />
      </Routes>
  );
}

export default App;
