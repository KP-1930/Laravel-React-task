import './App.css';
import Login from './pages/auth/Login';
import './index.css';
import Register from './pages/auth/Register';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
    <div className="App">

      {/* <Login /> */}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
