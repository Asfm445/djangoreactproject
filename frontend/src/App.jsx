import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import ProtectedRoute from './components/protectedroute'
import Home from './pages/home'
import Login from './pages/login'
import NotFound from './pages/notFound'

export function Logout(){
  localStorage.clear()
  return <Navigate to="/login"></Navigate>
}
function RegisterAndLogout(){
  localStorage.clear()
  return <Register></Register>
}

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register'  element={<RegisterAndLogout />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
