import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'

const ReadRecipe = () => {

  const {id} = useParams()
  const [recipe,setRecipe] = useState({})

  const url = `http://localhost:3001/recipe/read-recipe/${id}`;

  useEffect(()=>{
    axios.get(url)
    .then(result => {
      console.log(result,"resultt")
      setRecipe(result?.data?.result)
    }).catch(err => console.log(err))
  },[id])
 
  return (
    
  <>
  {recipe && (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-4'>
          <img src={recipe.imageUrl} alt="Recipe" className="img-fluid" />
        </div>
        <div className='col-md-8'>
          <div className='p-2'>
            <h2 style={{color:'blue'}}>{recipe.name}</h2>
          </div>
          <div className='p-2'>
            <h3>Instruction</h3>
            <p>{recipe.instruction}</p>
          </div>
          <div className='p-2'>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  )}
</>

  )
}

export default ReadRecipe
