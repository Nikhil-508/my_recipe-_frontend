import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditRecipe = () => {

  const {id} = useParams()

  //recipe state initialization
  const [recipe,setRecipe] = useState({
    name:"",
    ingredients: "",
    instruction: "",
    imageUrl: "",
    userId: window.localStorage.getItem('id')

})

// sideEffect to get the current recipe data 
  useEffect(()=>{
    axios.get(`http://localhost:3001/recipe/edit-recipe/${id}`)
    .then(result => {
      const {imageUrl,ingredients,instruction,name} = result.data
      setRecipe({
        name: name,
        ingredients: ingredients,
        instruction: instruction,
        imageUrl: imageUrl,
        userIdL: window.localStorage.getItem('id')
      })
    })
    .catch(err => console.log(err))
  },[id])


const navigate = useNavigate()

    const handleChange = (event) => {
        const {name,value} = event.target
        setRecipe({...recipe,[name] : value})
    }


//update form submission
    const handleSubmit = (event) => {
      event.preventDefault()
      alert('Are you sure to update this recipe')
      axios.post(`http://localhost:3001/recipe/update-recipe/${id}`,recipe)
      .then((result)=>{
        navigate('/recipe/my-recipe')
      })
      .catch(err => console.log(err))
    }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='p-3 border-1 w-25'>
      <h4>Edit Recipe</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name </label>
          <input value={recipe.name} onChange={handleChange} name='name'  type="text" placeholder='Enter Name' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="ingredient" className="form-label">Ingredients </label>
          <input value={recipe.ingredients} onChange={handleChange} name='ingredients'  type="text" placeholder='Enter Ingredients' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions </label>
          <input value={recipe.instruction} onChange={handleChange} name='instruction'  type="text" placeholder='Enter instructions to make' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" >Image Url</label>
          <input value={recipe.imageUrl} onChange={handleChange} name='imageUrl'  type="text" placeholder='Enter Url' className="form-control"/>
        </div>
        <button className='mt-1 btn btn-primary w-100 mt-2 mb-3'> Update</button>
      </form>
    </div>
  </div>
  )
}

export default EditRecipe
