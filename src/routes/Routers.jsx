import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Home/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllArtCraftItems from "../pages/AllArt&CraftItems/AllArtCraftItems";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/AllArt&CraftItems",
                element: <AllArtCraftItems></AllArtCraftItems>,
            },
            
            {
                path: "/signIn",
                element: <SignIn></SignIn>,
            },

            {
                path: "/SignUp",
                element: <SignUp></SignUp>,
            },
        ]
    },
]);

export default router;