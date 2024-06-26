import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import CraftItem from "../CraftItem/CraftItem";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { TfiSupport } from "react-icons/tfi";
import CategoryCards from "../CategoryCards/CategoryCards";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const craftItems = useLoaderData();
    const [craftItemsLength, setCraftItemsLength] = useState(6);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
          setIsLoading(false); 
        }, 500); 
      }, []);
    
      if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
      }

    return (

        <div>
            <Helmet>
                <title>Home | Art Vista</title>
            </Helmet>

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

            {/* Category Section */}
            <div className="w-11/12 mx-auto">
                <div className="text-center">
                    <h3 className="text-[#401F04] text-2xl md:text-3xl font-semibold md:font-bold">Browse Painting and Drawing Art & Craft by Categories</h3>

                    <p className="text-[#786c66] my-3">Discover a diverse range of painting and drawing art and craft, organized by categories. Whether you're looking for watercolors, acrylics,<br /> sketches, or mixed media, find the perfect pieces to inspire your creativity and enhance your artistic journey at Art Vista.</p>
                </div>

                <div className="mt-10">
                    <CategoryCards></CategoryCards>
                </div>

            </div>

            {/* Services Section */}
            <div className="w-11/12 mx-auto mt-20 mb-10 grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center ps-10">
                <div>
                    <span className="text-6xl"><TbTruckDelivery /></span>
                    <h4 className="text-2xl text-[#401F04] font-bold mt-3">Free Delivery</h4>
                    <p className="text-[#786c66] mt-2">Free shipping for all orders</p>
                </div>

                <div>
                    <span className="text-6xl "><RiSecurePaymentLine /></span>
                    <h4 className="text-2xl text-[#401F04] font-bold mt-4">100% Payment Secure</h4>
                    <p className="text-[#786c66] mt-2">Payment 100% secured</p>
                </div>

                <div>
                    <span className="text-6xl"><TbTruckReturn /></span>
                    <h4 className="text-2xl text-[#401F04] font-bold mt-4">14 Days Return</h4>
                    <p className="text-[#786c66] mt-2">You have 14 days to return</p>
                </div>

                <div>
                    <span className="text-6xl"><TfiSupport /></span>
                    <h4 className="text-2xl text-[#401F04] font-bold mt-4">Support 24/7</h4>
                    <p className="text-[#786c66] mt-2">We support 24 hours a day</p>
                </div>
            </div>
        </div>
    );
};

export default Home;