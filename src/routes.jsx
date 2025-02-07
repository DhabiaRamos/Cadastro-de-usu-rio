import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUser from "./pages/ListUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/lista-de-usuarios",
        element: <ListUser />
    }

])

export default router;