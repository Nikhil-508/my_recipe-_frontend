import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeItem from './RecipeCard';


const Home = () => {
  const [recipes,SetRecipes] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/recipe/recipes')
    .then(recipes => {
      SetRecipes(recipes.data)
      console.log(recipes.data,"recipeeee")
    }).catch(err => console.log(err))
  },[])
  return (
    <div>
    <h2 className="text-center">New <span className="badge bg-danger my-2">Recipes</span></h2>
    {recipes.map((recipe,index)=>{
        return <RecipeItem key={index} name={recipe.name} instruction={recipe.instruction} ingredients={recipe.ingredients} imageUrl={recipe.imageUrl} recipeId = {recipe._id}/>;
    })}
</div>
  )
}

export default Home
