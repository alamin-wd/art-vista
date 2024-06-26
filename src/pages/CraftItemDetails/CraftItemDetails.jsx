import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';
import { BiDollar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
 
const CraftItemDetails = () => {

    const craftItem = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
    
    const { craftItemName, sub_categoryName, price, rating, processingTime, customization, stockStatus, imageURL, description } = craftItem;
    
    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (

        <div className="w-11/12 mx-auto md:p-10 my-10 bg-gradient-to-r from-[#D48165] via-[#F79D84] to-[#C37355]">
            <div>
                <Helmet>
                    <title>Craft Item Details || Craft Item || Art Vista</title>
                </Helmet>
            </div>

            <div className="flex flex-col md:flex-row md:gap-10 items-center">

                <div className="w-full md:w-1/3 space-y-4 md:space-y-20">

                    <img className="w-full" src={imageURL} alt="" />

                    <button
                        className="w-full mx-auto bg-[#6B2B06] hover:bg-[#8E4826] text-white py-2 rounded-lg font-medium">
                        Add to Cart
                    </button>

                </div>

                <div className="w-2/3">
                    <h4 className="text-xl font-bold">Name: <span className="text-lg font-semibold">{craftItemName}</span></h4>

                    <h4 className="text-xl font-bold my-2">Category: <span className="text-lg font-semibold">{sub_categoryName}</span></h4>

                    <p className="text-xl font-bold">Description: <span className="text-base font-normal">{description}</span></p>

                    <div className="overflow-x-auto w-full md:w-1/2 mt-4">
                        <table className="table">

                            <tbody>
                                <tr className="text-lg font-semibold">

                                    <td>Processing Time:</td>
                                    <td>{processingTime}</td>
                                </tr>
                                <tr className="text-lg font-semibold">

                                    <td>Customization:</td>
                                    <td>{customization}</td>
                                </tr>
                                <tr className="text-lg font-semibold">

                                    <td>Stock Status:</td>
                                    <td>{stockStatus}</td>
                                </tr>

                                <tr className="text-lg font-semibold">
                                    <td>Rating:</td>
                                    <td className="flex items-center gap-1">
                                        <FaStar />
                                        <span>{rating}</span>
                                    </td>
                                </tr>

                                <tr className="text-lg font-semibold">

                                    <td>Price:</td>
                                    <td className="flex items-center">
                                        <BiDollar />
                                        <span>{price}</span>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

CraftItemDetails.propTypes = {
    craftItem: PropTypes.node,
}
export default CraftItemDetails;