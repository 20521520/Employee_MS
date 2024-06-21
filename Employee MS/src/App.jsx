import './App.css'
import Login from './component/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Home from './component/Home'
import Employee from './component/Employee'
import Category from './component/Category'
import Profile from './component/Profile'
import AddCategory from './component/AddCategory'
import AddEmployee from './component/AddEmployee'
import EditEmployee from './component/EditEmployee'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/dashboard/employee' element={<Employee/>}></Route>
        <Route path='/dashboard/category' element={<Category/>}></Route>
        <Route path='/dashboard/profile' element={<Profile/>}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
