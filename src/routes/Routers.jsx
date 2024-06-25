import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Home/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllArtCraftItems from "../pages/AllArt&CraftItems/AllArtCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import CraftItemDetails from "../pages/CraftItemDetails/CraftItemDetails";
import MyArtCraftLists from "../pages/MyArtCraftLists/MyArtCraftLists";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <CraftItemDetails></CraftItemDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/craftItem/${params.id}`),
            },

            {
                path: "/addItem",
                element: <AddCraftItem></AddCraftItem>,
            },

            {
                path: "/myItems",
                element: <MyArtCraftLists></MyArtCraftLists>,
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