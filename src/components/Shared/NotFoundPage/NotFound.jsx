import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();
    const error = useRouteError();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (

        <div>
            <div className="w-1/2 mx-auto mt-40 text-center">
                <h2 className="text-4xl text-red-600 font-semibold my-6">Oops!!!</h2>

                <p className="text-4xl font-medium">Page {error.statusText || error.message}</p>

                <button onClick={handleGoBack}
                    className="my-4 font-medium hover:underline" >Go Back</button>
            </div>
        </div>
    );
};

export default NotFound;