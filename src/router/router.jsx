import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter(
    //method 1 for creating routes in which child route are created inside children Array
    [
        {
            path: "/",
            element: <HomePage />,
            // children: [
            //     {
            //         path: "team",
            //         element: <Team />,
            //         loader: teamLoader,
            //     },
            // ],
        },
    ]

    //method 2 for creating routes in which child routes are wrapped in parent route
    // createRoutesFromElements(
    //     <Route path="/" element={<HomePage />}>
    //         <Route path="dashboard" element={<Dashboard />} />
    //     </Route>
    // )
);

export default router;