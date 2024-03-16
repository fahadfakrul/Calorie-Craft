import PropTypes from "prop-types";

const InSidebar = ({ wantToCook }) => {
  const { recipe_name, preparing_time, calories } = wantToCook;
  return (
    
      <tr>
        {/* <!-- row 1 --> */}

        <th></th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button  className="btn bg-[#0BE58A] text-lg font-medium rounded-3xl px-6 title-color">Preparing</button></td>
        
      </tr>
      
  );
};

InSidebar.propTypes = {
  wantToCook: PropTypes.object,
};
export default InSidebar;
