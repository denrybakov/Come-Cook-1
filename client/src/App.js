
import { Routes, Route } from 'react-router-dom'

import Main from './components/MainPage/Main';
import SignIn from './components/Registration/SignIn/SignIn'

import UserIndex from './components/UserPage/UserIndex/UserIndex'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/auth/login' element={<SignIn />}></Route>
      <Route path='/profile' element={<UserIndex />}></Route>
      {/* <Route path='/profile/search' element={<UserIndex />}></Route>
      <Route path='/profile/order' element={<UserIndex />}></Route>
      <Route path='/profile/completed' element={<UserIndex />}></Route> */}
    </Routes>
  );
}

export default App;
