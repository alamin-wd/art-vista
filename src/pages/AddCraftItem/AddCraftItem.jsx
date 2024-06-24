import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCraftItem = () => {

    const handleAddCraftItem = event => {
        event.preventDefault();

        const form = event.target;

        const craftItemName = form.craftItemName.value;
        const sub_categoryName = form.sub_categoryName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processingTime = form.processingTime.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const imageURL = form.imageURL.value;
        const shortDescription = form.shortDescription.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const newCraftItem = { craftItemName, sub_categoryName, price, rating, processingTime, customization, stockStatus, imageURL, shortDescription, userName, userEmail };

        fetch('http://localhost:5000/craftItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCraftItem),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'Craft Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Next'
                    })
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (

        <div>

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
                        <h3 className="text-[#374151] text-2xl md:text-4xl font-semibold">Add New Craft Item</h3>

                        <p className="text-[#1B1A1AB3] text-sm md:text-base md:font-semibold mt-2">
                            Add your unique craft items by filling out the form. Showcase your masterpieces, set your price, and reach a wider audience. Join our community and let your creativity shine!
                        </p>
                    </div>

                    <form onSubmit={handleAddCraftItem}
                        className="md:grid md:grid-cols-2 justify-between items-center mt-6">

                        {/* Craft Item Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Item Name</span>
                            </label>
                            <input type="text" name="craftItemName"
                                // value={}
                                placeholder="Craft Item Name"
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Subcategory Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Subcategory Name</span>
                            </label>
                            <input type="text" name="sub_categoryName"
                                // value={}
                                placeholder="Sub_category Name" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Price Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Price</span>
                            </label>
                            <input type="number" name="price"
                                // value={}
                                placeholder="Craft Item Price" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Ratings Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Rating</span>
                            </label>
                            <input type="number" name="rating"
                                // value={}
                                placeholder="Rating" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Processing Time Field */}
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Processing Time</span>
                            </label>
                            <input type="text" name="processingTime"
                                // value={}
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
                            <input type="url" name="imageURL" placeholder="Image URL" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        {/* Description Filed */}
                        <div className="form-control mx-3 md:mx-5 col-span-2">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Short Description</span>
                            </label>

                            <input type="text"
                                name="shortDescription"
                                // value={}
                                placeholder="Short Description"
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <hr className="mt-6 mx-3 md:mx-5 col-span-2 border-[#6B2B06]" />

                        <div className="col-span-2 flex flex-col md:flex-row justify-between items-center">
                            {/* User Name Field */}
                            <div className="form-control w-11/12 md:w-1/2 mx-6">
                                <label className="label">
                                    <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">User Name</span>
                                </label>
                                <input type="text" name="userName"
                                    // value={}
                                    placeholder="Your Name"
                                    className="input input-bordered text-[#1B1A1ACC]" required />
                            </div>

                            {/* User Email Field */}
                            <div className="form-control w-11/12 md:w-1/2 mx-6">
                                <label className="label">
                                    <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">User Email</span>
                                </label>
                                <input type="email" name="userEmail"
                                    // value={}
                                    placeholder="Your Email"
                                    className="input input-bordered text-[#1B1A1ACC]" required />
                            </div>
                        </div>

                        <div className="mx-5 mt-10 col-span-2">
                            <input
                                className="w-full bg-[#6B2B06] hover:bg-[#8E4826] text-xl font-medium text-white px-4 py-2 rounded-lg "
                                type="submit"
                                value="Add This Item" />
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default AddCraftItem;