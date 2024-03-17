import PropTypes from "prop-types";
import InSidebar from "../InSidebar/InSidebar";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";


const Sidebar = ({ wantToCook,handleRemoveToCooking,currentCook}) => {
    
   
   
  return (
    <div className="md:w-5/12 p-6 lg:ml-6 border border-[#28282833] rounded-2xl">
      <h1 className="text-2xl font-semibold title-color text-center mt-8">
        Want to cook: {wantToCook.length}
      </h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table secondary-color">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wantToCook.map((wantToCook,index) => (
                
              <InSidebar
                key={wantToCook.recipe_id}
                wantToCook={wantToCook}
                index={index}
                handleRemoveToCooking={handleRemoveToCooking}
                
              ></InSidebar>
              
            ))}
          </tbody>
        </table>
        <h1 className="text-2xl font-semibold title-color text-center mt-8">
          Currently cooking: {currentCook.length}
        </h1>
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table secondary-color">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              
            </tr>
          </thead>
          <tbody>

            {currentCook.map((currentCook,index) => (
                <CurrentlyCooking 
                key={currentCook.recipe_id}
                currentCook={currentCook}
                index={index}
                ></CurrentlyCooking>
              
            ))}
          </tbody>
          <tfoot>
            <tr className="text-[#282828CC]">
              <th></th>
              <th></th>
              <th>Total time= <br /> {currentCook.reduce((total, recipe) => total + parseInt(recipe.preparing_time), 0)} minutes</th>
              <th>Total Calories= <br /> {currentCook.reduce((total, recipe) => total+parseInt(recipe.calories),0)} calories</th>
              
            </tr>
          </tfoot>
        </table>
        
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  wantToCook: PropTypes.array,
  currentCook: PropTypes.array,
  handleRemoveToCooking: PropTypes.func,
 
};
export default Sidebar;
