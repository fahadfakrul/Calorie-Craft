import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
   const [recipes,setrecipes] = useState([]);

    useEffect(() => {
        fetch("../../../public/recipes.json")
        .then((res) => res.json())
        .then((data) => setrecipes(data));
    },[]);
    
    console.log(recipes);
    return (
        <div className="md:w-2/3 p-6 gap-6 grid grid-cols-1 md:grid-cols-2 border border-[#28282833] rounded-2xl">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id}
                recipe={recipe} ></Recipe>)
                
            }
        </div>
    );
};

export default Recipes;