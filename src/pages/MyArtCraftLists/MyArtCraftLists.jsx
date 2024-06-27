import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyCraftCards from "../MyCraftCards/MyCraftCards";


const MyArtCraftLists = () => {

    const craftItems = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);

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

    <div className="w-11/12 mx-auto my-10 ">
        <h2>{craftItems.length}</h2>

        <div>
            <Helmet>
                <title>My Art & Craft Items | Craft Items | Art Vista</title>
            </Helmet>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-10">
            {
                    craftItems.map(craftItem => <MyCraftCards
                        key={craftItem._id}
                        craftItem={craftItem}
                    ></MyCraftCards>)
                }
        </div>
    </div>
);
};

export default MyArtCraftLists;