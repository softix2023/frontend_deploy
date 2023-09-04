import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './screens/Login'
import Home from './screens/Home'
import Register from './screens/Register'
import NewEvent from './screens/AddEvent'
import Details from './screens/Details'
import Filters from './screens/Filters'
import { BrowserRouter, Routes, Route,HashRouter } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CookiesProvider>
        <HashRouter>

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event" element={<NewEvent />} /> {/* Here login check is implemented */}
          <Route path="/details" element={<Details />} />
          <Route path="/filter" element={<Filters />} />

          </Routes>
        </HashRouter>
        <ToastContainer />

    </CookiesProvider>
  );
}

export default App;
