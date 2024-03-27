import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
    const [recipe,setRecipe] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        imageUrl: "",
        userId: window.localStorage.getItem('id')

})

const handleChange = (event) => {
    const {name,value} = event.target
    setRecipe({...recipe,[name]: value }) 
}

const navigate = useNavigate()
const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:3001/recipe/create-recipe',recipe)
    .then(result => {
      navigate('/')
        console.log(result,"recipeeeee")
        alert('recipe created successfully')
    }).catch(error => console.log(error))
}

  return (

    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='p-3 border-1 w-25'>
      <h4>Create Recipe</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name </label>
          <input onChange={handleChange} name='name'  type="text" placeholder='Enter Name' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="ingredient" className="form-label">Ingredients </label>
          <input onChange={handleChange} name='ingredients'  type="text" placeholder='Enter Ingredients' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions </label>
          <input onChange={handleChange} name='instruction'  type="text" placeholder='Enter instructions to make' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" >Image Url</label>
          <input onChange={handleChange} name='imageUrl'  type="text" placeholder='Enter Url' className="form-control"/>
        </div>
        <button className='mt-1 btn btn-primary w-100 mt-2 mb-3'> Create</button>
      </form>
    </div>
  </div>

  )
}

export default CreateRecipe
