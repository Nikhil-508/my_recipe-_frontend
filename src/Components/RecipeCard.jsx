import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';


const RecipeItem = ({name,ingredients,instruction,imageUrl,recipeId}) => {
  
    return (

      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={imageUrl?imageUrl:imageUrl} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
    <Link to={`/read-recipe/${recipeId}`} className='text-decoration-none'>
      <h5 className="card-title ">{name.slice(0,50)}</h5>  
        </Link>
      <p className="card-text">{ingredients?ingredients.slice(0,90):"More data about this news is not available right now"}</p>
      <p className="card-text">{instruction?instruction.slice(0,90):"More data about this news is not available right now"}</p>
    </div>
  </div>
     
    
    )
  }
  
  export default RecipeItem