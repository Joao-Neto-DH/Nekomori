import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <p>Naruto Uzumaki</p>
      },
      {
        path: "/naruto",
        element: <p>Naruto Uzumaki</p>
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
