import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <div>Landing page</div> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
