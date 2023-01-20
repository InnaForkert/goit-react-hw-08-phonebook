import Login from 'pages/Login/Login';
import MainPage from 'pages/MainPage';
import SignUp from 'pages/SignUp/SignUp';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
};

export default App;
