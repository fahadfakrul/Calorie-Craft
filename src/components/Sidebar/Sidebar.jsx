import PropTypes from "prop-types";
import InSidebar from "../InSidebar/InSidebar";


const Sidebar = ({ wantToCook,handleRemoveToCooking }) => {
    
   

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
              <th>Job</th>
              <th>Favorite Color</th>
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
          Currently cooking: 00
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
              <th>Job</th>
              <th>Favorite Color</th>
              
            </tr>
          </thead>
          <tbody>
            {wantToCook.map((wantToCook,index) => (
              <InSidebar
                key={wantToCook.recipe_id}
                wantToCook={wantToCook}
                index={index}
              ></InSidebar>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  wantToCook: PropTypes.array,
  handleRemoveToCooking: PropTypes.func
};
export default Sidebar;
