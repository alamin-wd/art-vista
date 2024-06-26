import { useLoaderData } from "react-router-dom";
import CraftItemTable from "../CraftItemTable/CraftItemTable";
import { Helmet } from "react-helmet-async";

const AllArtCraftItems = () => {

    const craftItems = useLoaderData();

    return (

        <div className="w-11/12 mx-auto">
            <div>
                <Helmet>
                    <title>All Art & Craft Items | Art Vista</title>
                </Helmet>
            </div>

            <div className="text-center mt-6">
                <h3 className="text-[#401F04] text-2xl md:text-4xl font-semibold md:font-bold">Explore Our All Art & Craft Items.</h3>

                <p className="text-[#786c66] my-3">
                    Discover a wide variety of art and craft supplies, perfect for every creative project and artistic endeavor. From paints and brushes <br /> to papers and tools, we have everything you need to bring your artistic visions to life.
                </p>
            </div>

            <div>
                {
                   craftItems.map(craftItem => <CraftItemTable
                   key={craftItem._id}
                   craftItem={craftItem}
                   ></CraftItemTable>) 
                }
            </div>

        </div>
    );
};

export default AllArtCraftItems;