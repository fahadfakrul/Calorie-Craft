import PropTypes from "prop-types";

const InSidebar = ({ wantToCook,index,handleRemoveToCooking }) => {
  const { recipe_name, preparing_time, calories,recipe_id } = wantToCook;
  return (
    
      <tr>
        {/* <!-- row 1 --> */}

        <th>{index+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button onClick={() => handleRemoveToCooking(recipe_id) } className="btn bg-[#0BE58A] text-lg font-medium rounded-3xl px-6 title-color">Preparing</button></td>
        
      </tr>
      
  );
};

InSidebar.propTypes = {
  wantToCook: PropTypes.object,
  index: PropTypes.number,
  handleRemoveToCooking: PropTypes.func
};
export default InSidebar;
