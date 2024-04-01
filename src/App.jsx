import Home from './Components/Home'
import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Create from './Create'
import Edit from './Components/Edit'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes> 
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/create' element={<Create></Create>}></Route>
      <Route path='/edit/:id' element={<Edit></Edit>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
