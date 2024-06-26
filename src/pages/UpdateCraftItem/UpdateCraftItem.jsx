import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";

const UpdateCraftItem = () => {

    const craftItem = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);

    const { craftItemName, sub_categoryName, price, rating, processingTime, customization, stockStatus, imageURL, shortDescription } = craftItem;


    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 800);
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (

        <div>

            <div>
                <Helmet>
                    <title>Update Craft Item | My Items | Art Vista</title>
                </Helmet>
            </div>

            <div className="w-10/12 mx-auto">

                <div className="flex items-center gap-2 my-3 text-[#374151]">
                    <Link to="/">
                        <span><FaArrowLeft /></span>
                    </Link>
                    <Link to="/">
                        <button className="font-medium">Back to Home</button>
                    </Link>
                </div>

                <div className="bg-gradient-to-r from-[#D48165] via-[#F79D84] to-[#C37355] p-10 mb-10">

                    <div className="w-full md:w-4/5 mx-auto text-center">
                        <h3 className="text-[#374151] text-2xl md:text-4xl font-semibold md:font-bold">Update Your Craft Item</h3>

                        <p className="text-[#1B1A1AB3] text-sm md:text-base md:font-semibold mt-2">
                            Add your unique craft items by filling out the form. Showcase your masterpieces, set your price, and reach a wider audience. Join our community and let your creativity shine!
                        </p>
                    </div>

                    <form
                        className="md:grid md:grid-cols-2 justify-between items-center mt-6">

                        {/* Craft Item Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Item Name</span>
                            </label>
                            <input type="text"
                                name="craftItemName"
                                defaultValue={craftItemName}
                                placeholder="Craft Item Name"
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Subcategory Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Subcategory Name</span>
                            </label>
                            <input type="text"
                                name="sub_categoryName"
                                defaultValue={sub_categoryName}
                                placeholder="Sub_category Name" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Price Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Price</span>
                            </label>
                            <input type="text"
                                name="price"
                                defaultValue={price}
                                placeholder="Craft Item Price" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Ratings Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Rating</span>
                            </label>
                            <input type="text"
                                name="rating"
                                defaultValue={rating}
                                placeholder="Rating" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Processing Time Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Processing Time</span>
                            </label>
                            <input type="text"
                                name="processingTime"
                                defaultValue={processingTime}
                                placeholder="Processing Time" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Customization Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Customization</span>
                            </label>
                            <select
                                name="customization"
                                className="input input-bordered text-[#1B1A1ACC]" required>
                                <option
                                    className="text-[#1B1A1ACC]"
                                    defaultValue={customization}></option>
                                <option
                                    className="text-[#1B1A1ACC]"
                                    value="yes">Yes</option>

                                <option
                                    className="text-[#1B1A1ACC]"
                                    value="no">No</option>
                            </select>
                        </div>

                        {/* Stock Status Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Stock Status</span>
                            </label>

                            <select name="stockStatus"
                                className="input input-bordered text-[#1B1A1ACC]" required>

                                <option
                                    className="text-[#1B1A1ACC]"
                                    defaultValue={stockStatus}></option>

                                <option
                                    className="text-[#1B1A1ACC]"
                                    value="inStock">
                                    In Stock
                                </option>

                                <option
                                    className="text-[#1B1A1ACC]"
                                    value="madeToOrder">
                                    Made to Order
                                </option>

                            </select>
                        </div>

                        {/* Photo URL Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Image URL</span>
                            </label>
                            <input type="url"
                                name="imageURL"
                                defaultValue={imageURL}
                                placeholder="Image URL" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Description Filed */}
                        <div className="form-control mx-3 md:mx-5 col-span-2">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Short Description</span>
                            </label>

                            <input type="text"
                                name="shortDescription"
                                defaultValue={shortDescription}
                                placeholder="Short Description"
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="mx-5 mt-10 col-span-2">
                            <input
                                className="w-full bg-[#6B2B06] hover:bg-[#8E4826] text-xl font-medium text-white px-4 py-2 rounded-lg "
                                type="submit"
                                value="Update This Item" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default UpdateCraftItem;