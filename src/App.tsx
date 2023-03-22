import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Details from "./pages/Details";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import { darkTheme } from "./themes/dark-theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: ":id/:title",
        element: <Details/>
      }
    ]
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
