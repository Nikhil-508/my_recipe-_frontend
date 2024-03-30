import { useState } from 'react'
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Nav from './Components/Nav'
import CreateRecipe from './Components/CreateRecipe'
import ReadRecipe from './Components/ReadRecipe'
import MyRecipe from './Components/MyRecipe'
import EditRecipe from './Components/EditRecipe'


function App() {

  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/auth/register' element={<Register/>}></Route>
    <Route path='/auth/login' element={<Login/>}></Route>
    <Route path='/recipe/create-recipe' element={<CreateRecipe/>}></Route>
    <Route path='/read-recipe/:id' element={<ReadRecipe/>}></Route>
    <Route path='/recipe/my-recipe' element={<MyRecipe/>}></Route>
    <Route path='/recipe/edit-recipe/:id' element={<EditRecipe/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
