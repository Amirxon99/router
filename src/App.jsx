
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <Router>
           <Routes>
             <Route path='/' element={Home} ></Route>
             <Route path='/about' element={About} ></Route>

           </Routes>


    </Router>
        
    </>
  )
}

export default App
