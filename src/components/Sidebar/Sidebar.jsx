import PropTypes from 'prop-types';
const Sidebar = ({wantToCook}) => {
  return (
    <div className="md:w-1/3 p-6 lg:ml-6 border border-[#28282833] rounded-2xl">
      <h1 className="text-2xl font-semibold title-color text-center mt-8">
        Want to cook: {wantToCook.length}
      </h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
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
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes ={
    wantToCook: PropTypes.func
}
export default Sidebar;
