import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlog'
import Dashboard from './pages/Dashboard'
import UpdateBlog from './pages/UpdateBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} ></Route>
        <Route path="/:ID" element={<BlogDetails />}></Route>
        <Route path="/create" element={<AddBlog />}></Route>
        <Route path="/update/:Id" element={<UpdateBlog />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
