import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const MyCraftCards = ({ craftItem }) => {

    const { _id, craftItemName, price, customization, rating, stockStatus, imageURL, shortDescription } = craftItem;

    // const handleDelete = _id => {
    //     console.log(_id)
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to back this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Swal.fire({
    //             //     title: "Deleted!",
    //             //     text: "Your file has been deleted.",
    //             //     icon: "success"
    //             // });
    //             fetch(`http://localhost:5000/craftItem/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {

    //                     if (data.deletedCount > 0) {

    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your Coffee has been Deleted.",
    //                             icon: "success"
    //                         });

    //                         const remainingCraftItems = craftItem.filter(craftItem => craftItem._id !== _id);

    //                         setCraftItem(remainingCraftItems);
    //                     }
    //                 })
    //         }
    //     });
    // }

    return (

        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-2xl">

                <figure className="indicator">

                    <img className="w-96"
                        src={imageURL}
                        alt="CraftItemImage" />
                </figure>

                <div className="card-body">

                    <h4 className="text-xl font-bold">{craftItemName}</h4>

                    <p className="text-base text-[#706F6F]">{shortDescription}</p>

                    <div className="mt-2 flex justify-between items-center">
                        <h4 className="text-lg font-medium">Stock Status: <span>{stockStatus}</span></h4>

                        <h4 className="text-lg font-medium mr-3">Rating: <span>{rating}</span></h4>

                    </div>

                    <div className="mt-2 flex justify-between items-center">
                        <h4 className="text-lg font-medium">Customization: <span>{customization}</span></h4>

                        <h4 className="text-lg font-medium">Price: <span>${price}</span></h4>
                    </div>

                    <div className="my-4 flex gap-10 justify-center items-center">
                        
                        <Link to={`/updateItems/${_id}`}>
                            <button
                                className="border-2 border-[#8E4826] hover:bg-[#8E4826] font-medium text-[#6B2B06] hover:text-white px-4 py-2 rounded-lg">Update</button>
                        </Link>
                        {/* onClick={() => handleDelete(_id)} */}
                        <button 
                            className="border-2 border-[#8E4826] hover:bg-[#8E4826] font-medium text-[#6B2B06] hover:text-white px-5 py-2 rounded-lg">Delete</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

MyCraftCards.propTypes = {
    craftItem: PropTypes.node,
}

export default MyCraftCards;