import './App.css'
import { Routes, Route } from 'react-router-dom'
import EmployeeList from './pages/EmployeeList'

function App() {

  return (
   <Routes>
     {/* <Route path="/" element={<Home/>} /> */}
     <Route path="/" element={<EmployeeList />} />
   </Routes>
  )
}

export default App
