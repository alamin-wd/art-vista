import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useState } from "react";
import CraftItem from "../CraftItem/CraftItem";

const Home = () => {

    const craftItems = useLoaderData();

    const [craftItemsLength, setCraftItemsLength] = useState(6);

    return (

        <div>

            <Banner></Banner>

            {/* Craft Items Section */}
            <div className="w-11/12 mx-auto my-10">

                <div className="text-center">
                    <h3 className="text-[#401F04] text-2xl md:text-4xl font-semibold md:font-bold">Discover a World of Crafting Delights</h3>

                    <p className="text-[#786c66] my-3">Unleash your creativity with our extensive range of craft items. From vibrant paper crafts and intricate beadwork to versatile <br /> fabric arts and charming DIY kits, we have everything you need to bring your imaginative projects to life.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-10">
                    {
                        craftItems.slice(0, craftItemsLength).map(craftItem => <CraftItem
                            key={craftItem._id}
                            craftItem={craftItem}
                        ></CraftItem>)
                    }

                </div>

                <div className="w-48 mx-auto mt-10">
                    <div className={craftItemsLength === craftItems.length && "hidden"}>

                        <Link to={"/allCraftCards"}>
                            <button onClick={() => setCraftItemsLength(craftItems.length)}
                                className="w-full mx-auto bg-[#6B2B06] hover:bg-[#8E4826] text-white py-2 rounded-lg font-medium">
                                View All Craft Items
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;