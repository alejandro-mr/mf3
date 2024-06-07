import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Index/Index";
import Worlds2024 from "./pages/Worlds2024/Worlds2024";
import Join from "./pages/Join/Join";
import Gallery from "./pages/Gallery/Gallery";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/worlds-2024", element: <Worlds2024 /> },
      { path: "/afiliate", element: <Join /> },
      { path: "/galeria", element: <Gallery /> },
      { path: "/eventos", element: <Events /> },
      { path: "/contacto", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
