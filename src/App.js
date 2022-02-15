import './style/main.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
     <Router>
       <Routes>
         <Route path='/' element={<Home />}>
         <Route index element={<About />} />
         <Route path='projects' element={<Projects />} />
         <Route path='skills' element={<Skills />} />
         <Route path='contact' element={<Contact />} />
         </Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
