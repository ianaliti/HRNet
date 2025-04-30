import './App.css'
import { Routes, Route } from 'react-router-dom'
import EmployeeList from './pages/EmployeeList'
import CurrentEmployees from './pages/CurrentEmployees'

function App() {

  return (
   <Routes>
     <Route path="/" element={<EmployeeList />} />
     <Route path="/current-employee" element={<CurrentEmployees />} />
   </Routes>
  )
}

export default App
