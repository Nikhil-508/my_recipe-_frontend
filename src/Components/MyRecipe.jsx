import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeItem from './RecipeCard';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MyRecipe = () => {

  const navigate = useNavigate()
  const [recipe,setRecipe] = useState([])

  const id = window.localStorage.getItem('id')
  const url = `http://localhost:3001/recipe/my-recipe/${id}`;

  useEffect(()=>{
    axios.get(url)
    .then(result =>
       setRecipe(result.data))
    .catch(err => console.log(err))
  },[])

  
  //Recipe delete  function

  const handleDelete =  async (recipeId) => {
    const confirmDelete = window.confirm("Are you sure to delete this recipe?");
    if (confirmDelete) {
     await axios.delete(`http://localhost:3001/recipe/delete/${recipeId}`)
        .then((result) => {
          setRecipe(prevRecipe => prevRecipe.filter(item => item._id !== recipeId))
          console.log(result,"poooiii");
          alert("Deleted Successfully");
          navigate('/recipe/my-recipe');
        })
        .catch(err => console.log(err));
    }
  };
  
  return (
    <div>
      {recipe.length > 0 ? (
        recipe.map((item) => (
          <div key={item._id} className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={item.imageUrl ? item.imageUrl : item.imageUrl} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link to={`/read-recipe/${item._id}`} className='text-decoration-none'>
                <h5 className="card-title">{item.name.slice(0, 50)}</h5>
              </Link>
              <p className="card-text">{item.ingredients ? item.ingredients.slice(0, 90) : "More data about this recipe is not available right now"}</p>
              <p className="card-text">{item.instruction ? item.instruction.slice(0, 90) : "More data about this recipe is not available right now"}</p>
              <div>
                <button className="btn btn-primary mr-2" onClick={() => handleEdit(item._id)}>Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{color:'red'}}>Your recipe collection is empty! Start adding delicious recipes to fill it up...</div>
      )}
    </div>
  );
}

export default MyRecipe

