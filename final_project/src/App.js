import { Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import SignIn from './SignIn';
import Cart from './Cart';
import Main from './Products';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/SignIn/*' element={<SignIn />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
    </>

  );
}

export default App;
