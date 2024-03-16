import PropTypes from 'prop-types';
import clock from "../../assets/clock.png";
import fire from "../../assets/Fire.png";
import './Recipe.css'
const Recipe = ({recipe, handleAddToSidebar}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}= recipe;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            className="p-6 image "
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body font-fira-sans">
          <h2 className="card-title text-xl font-semibold text-[#282828]">{recipe_name}</h2>
          <p className="text-[#878787] font-normal mt-4">{short_description.slice(0,64)}</p>
          <h4 className="text-[#282828] text-lg font-medium mt-10">Ingredients:{ingredients.length}</h4>
          <ul className="list-disc text-[#878787] text-lg font-normal mt-4">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
          </ul>
          <div className="flex justify-between mt-10">
          <div className="flex gap-2">
            <img src={clock} alt="" />
            <p>{preparing_time}</p>
          </div>
          <div className="flex gap-2">
            <img src={fire} alt="" />
            <p>{calories}</p>
          </div>
          </div>

          <div className="card-actions mt-6">
            <button onClick={() => handleAddToSidebar(recipe)} className="btn bg-[#0BE58A] text-lg font-medium rounded-3xl px-6 title-color">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired,
    handleAddToSidebar: PropTypes.func,
    index: PropTypes.number
}
export default Recipe;
