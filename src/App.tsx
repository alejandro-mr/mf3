import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Index/Index";
import Gallery from "./pages/Gallery/Gallery";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/galeria", element: <Gallery /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
