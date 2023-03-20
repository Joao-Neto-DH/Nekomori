import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Separator from "./components/Separator";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Separator />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router ={router} />
  )
}

export default App
