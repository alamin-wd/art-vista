import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Home/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllArtCraftItems from "../pages/AllArt&CraftItems/AllArtCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import CraftItemDetails from "../pages/CraftItemDetails/CraftItemDetails";
import MyArtCraftLists from "../pages/MyArtCraftLists/MyArtCraftLists";
import AllCraftCards from "../pages/AllCraftCards/AllCraftCards";
import UpdateCraftItem from "../pages/UpdateCraftItem/UpdateCraftItem";
import NotFound from "../components/Shared/NotFoundPage/NotFound";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craftItems'),
            },

            {
                path: "/allItems",
                element: <AllArtCraftItems></AllArtCraftItems>,
                loader: () => fetch('http://localhost:5000/craftItems'),
            },

            {
                path: "/itemDetails/:id",
                element: <PrivateRoute><CraftItemDetails></CraftItemDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/craftItem/${params.id}`),
            },

            {
                path: "/addItem",
                element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
            },

            {
                path: "/craftItems/user/:userEmail",
                element: <MyArtCraftLists></MyArtCraftLists>,
                
            },

            {
                path: "/updateItems/:id",
                element: <UpdateCraftItem></UpdateCraftItem>,
                loader: ({ params }) => fetch(`http://localhost:5000/craftItem/${params.id}`),
            },

            {
                path: "/allCraftCards",
                element: <AllCraftCards></AllCraftCards>,
                loader: () => fetch('http://localhost:5000/craftItems'),
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