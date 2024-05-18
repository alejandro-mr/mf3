import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Index/Index";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Index /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
