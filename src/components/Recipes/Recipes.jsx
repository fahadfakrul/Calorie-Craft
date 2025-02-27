import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleAddToSidebar}) => {
   const [recipes,setrecipes] = useState([]);

    useEffect(() => {
        fetch("/recipes.json")
        .then((res) => res.json())
        .then((data) => setrecipes(data));
    },[]);
    
    
    return (
        <div className="md:w-7/12 p-6 gap-6 grid grid-cols-1 md:grid-cols-2 border border-[#28282833] rounded-2xl">
            {
                recipes.map((recipe) => <Recipe key={recipe.recipe_id}
                recipe={recipe} handleAddToSidebar={handleAddToSidebar}  ></Recipe>)
                
            }
        </div>
    );
};

Recipes.propTypes ={
    handleAddToSidebar: PropTypes.func
}
export default Recipes;