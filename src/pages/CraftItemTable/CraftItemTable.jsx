import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CraftItemTable = ({ craftItem }) => {

    const {_id, craftItemName, sub_categoryName, imageURL, shortDescription } = craftItem;


    return (

        <div>

            <div>
                <Helmet>
                    <title>All Art & Crafts || Art Vista</title>
                </Helmet>
            </div>

            <div className="overflow-x-auto mt-10">

                <table className="table">

                    <tbody>
                        {/* row 1 */}
                        <tr className="w-full">

                            <td className="w-1/6 ">
                                <img className="w-40 h-24" src={imageURL} alt="" />
                            </td>

                            <td className="w-1/5 text-lg font-medium">
                                {craftItemName}
                            </td>

                            <td className="w-1/6 text-lg font-semibold">{sub_categoryName}</td>

                            <td className="w-1/3 font-medium">{shortDescription}</td>

                            <th className="w-1/6 ">

                                <Link to={`/itemDetails/${_id}`}>
                                    <button className="border border-[#D48165] text-[#401F04] hover:text-[#D48165] px-4 py-2 rounded-lg">View Details</button>
                                </Link>

                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CraftItemTable.propTypes = {
    craftItem: PropTypes.node,
}

export default CraftItemTable;