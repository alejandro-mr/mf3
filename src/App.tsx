import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Index/Index";
import Gallery from "./pages/Gallery/Gallery";
import Events from "./pages/Events/Events";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/galeria", element: <Gallery /> },
      { path: "/eventos", element: <Events /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
