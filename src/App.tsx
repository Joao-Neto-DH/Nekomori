import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
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
