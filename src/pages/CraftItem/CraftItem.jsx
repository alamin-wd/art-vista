import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CraftItem = ({ craftItem }) => {
    
    const {_id, craftItemName, sub_categoryName, price, rating, stockStatus, imageURL, shortDescription } = craftItem;
    
    return (

        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-2xl">

                <figure className="indicator">

                    <div className="indicator-item indicator-top indicator-start badge bg-[#F79D84] left-14 top-7 py-3 text-white font-medium text-sm">
                        {stockStatus}
                    </div>

                    <div className="indicator-item indicator-top indicator-right badge w-12 text-center bg-[#F79D84] right-10 top-7 py-3 text-white font-medium text-sm">
                        <span className="flex items-center gap-1"><FaStar className="mb-1" /> {rating} </span>
                    </div>

                    <img className="w-96"
                        src={imageURL}
                        alt="CraftItemImage" />
                </figure>

                <div className="card-body">

                    <div className="flex justify-between items-center">
                        <h5 className="text-lg font-medium">{sub_categoryName}</h5>
                        <h5 className="text-lg font-medium">Price: <span>${price}</span></h5>
                    </div>

                    <h4 className="text-xl font-bold">{craftItemName}</h4>

                    <p className="text-base text-[#706F6F]">{shortDescription}</p>

                    <div className="mt-2 text-center">
                        <Link to={`/itemDetails/${_id}`}>
                            <button className=" bg-[#6B2B06] 
                            hover:bg-[#8E4826] text-xl font-medium text-white px-4 py-2 rounded-lg">View Details</button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

CraftItem.propTypes = {
    craftItem: PropTypes.node,
}
export default CraftItem;