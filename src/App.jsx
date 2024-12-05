import './App.css'
import Contact from './Contact'
import About from './About'
import Skill from './Skill'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/Skill' element={<Skill></Skill>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
