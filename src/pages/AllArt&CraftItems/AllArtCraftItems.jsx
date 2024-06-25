import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllArtCraftItems = () => {

    const craftItems = useLoaderData();

    return (

        <div className="w-11/12 mx-auto">

            <div className="text-center mt-6">
                <h3 className="text-[#401F04] text-2xl md:text-4xl font-semibold md:font-bold">Explore Our All Art & Craft Items.</h3>

                <p className="text-[#786c66] my-3">
                    Discover a wide variety of art and craft supplies, perfect for every creative project and artistic endeavor. From paints and brushes <br /> to papers and tools, we have everything you need to bring your artistic visions to life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 my-10">
                {
                    craftItems.map(craftItem => <div
                        key={craftItem._id}
                    >

                        <div className="card card-compact bg-base-100 w-96 shadow-2xl">
                            <figure className="indicator">

                                <div className="indicator-item indicator-top indicator-start badge bg-[#F79D84] left-14 top-7 py-3 text-white font-medium text-sm">
                                    {craftItem.stockStatus}
                                </div>

                                <div className="indicator-item indicator-top indicator-right badge w-12 text-center bg-[#F79D84] right-10 top-7 py-3 text-white font-medium text-sm">
                                    <span className="flex items-center gap-1"><FaStar className="mb-1" /> {craftItem.rating} </span>
                                </div>

                                <img className="w-96"
                                    src={craftItem.imageURL}
                                    alt="CraftItemImage" />
                            </figure>

                            <div className="card-body">

                                <div className="flex justify-between items-center">
                                    <h5 className="text-lg font-medium">{craftItem.sub_categoryName}</h5>
                                    <h5 className="text-lg font-medium">Price: <span>${craftItem.price}</span></h5>
                                </div>

                                <h4 className="text-xl font-bold">{craftItem.craftItemName}</h4>

                                <p className="text-base text-[#706F6F]">{craftItem.shortDescription}</p>

                                <div className="mt-2 text-center">
                                    <Link to={"/itemDetails"}>
                                        <button className=" bg-[#6B2B06] hover:bg-[#8E4826] text-xl font-medium text-white px-4 py-2 rounded-lg">View Details</button>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllArtCraftItems;