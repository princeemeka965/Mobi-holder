import { useState } from 'react'
import SplashScreen from './modules/SplashScreen'
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './modules/SignUp';
import Login from './modules/Login';
import PasswordReset from './modules/PasswordReset';

function App() {
  const [splash, setSplash] = useState(true);
  const navigate = useNavigate();

  const handleSplashScreen = () => {
    setSplash(false);
    navigate('/signup');
  }

  return (
    <>
      {splash ?
        <SplashScreen clearScreen={handleSplashScreen} />
        :
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<PasswordReset />} />
        </Routes>
      }
    </>
  )
}

export default App
