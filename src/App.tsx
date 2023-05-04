import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import Error from "./pages/Error";
import { darkTheme } from "./themes/dark-theme";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/page",
        element: <Index />
      },
      {
        path: ":id/:title/details",
        element: <Details/>
      },
      {
        path: "category/:id/:category",
        element: <Category />
      },
      {
        path: "search",
        element: <Search/>
      }
    ],
    errorElement: <Error />
  }
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router ={router} />
    </ThemeProvider>
  )
}

export default App
