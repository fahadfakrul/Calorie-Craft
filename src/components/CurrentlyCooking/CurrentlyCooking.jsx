import PropTypes from "prop-types";
const CurrentlyCooking = ({currentCook,index}) => {
    const { recipe_name, preparing_time, calories } = currentCook;
    return (
        <tr className="text-[#282828B2] font-fira-sans font-medium">
        {/* <!-- row 1 --> */}

        <th>{index+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        
        
      </tr>
    );
};

CurrentlyCooking.propTypes = {
    currentCook: PropTypes.object,
    index: PropTypes.number,
    
  };
export default CurrentlyCooking;