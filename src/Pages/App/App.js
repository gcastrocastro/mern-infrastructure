import './App.css';
import {useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import {Route, Routes} from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      { user ?
        <>
          <NavBar/>
          <Routes>
            {/* {Route Components Go Here} */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
