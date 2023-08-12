import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { publicRouter } from './routes/route';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from '../src/pages/Home';
import Following from '../src/pages/Following';
import Login from '../src/pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/following' element={<Following />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
