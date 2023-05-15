import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from "./views/About"
import Contact from "./views/Contact"
import Projects from "./views/Projects"
import NotFound from "./views/NotFound"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
