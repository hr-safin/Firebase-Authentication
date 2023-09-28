import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  
  const router = createBrowserRouter([{
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/login",
        element : <Login />
      }
    ]
  }])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
