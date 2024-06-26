import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";

const MyArtCraftLists = () => {

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
        
        <div>
            
        </div>
    );
};

export default MyArtCraftLists;