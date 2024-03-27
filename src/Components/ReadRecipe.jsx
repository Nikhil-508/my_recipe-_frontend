import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadRecipe = () => {
  const {id} = useParams()
  const [recipe,setRecipe] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/recipe/recipe-by-id/'+id)
    .then(result => {
      setRecipe(result.data)
    }).catch(err => console.log(err))
  },[])
  if (!recipe) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }
  return (
    <div>
      <div>
        <h2>{recipe.name}</h2>
        <h3>instruction</h3>
        <p>{recipe.instruction}</p>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
        <img src= {recipe.imageUrl} alt="image" />

      </div>
    </div>
  )
}

export default ReadRecipe
