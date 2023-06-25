import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
// Layouts
import Main, { mainLoader } from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //once we hit that route this loader will take action
    loader: mainLoader,
    //this is interchangeble with {path:"*",element:<Error/>}
    errorElement: <Error />,
    children: [
      {
        index: true, // path: "/", will be another way to do the same
        element: <Dashboard />,
        //once we hit that route this loader will take action
        loader: dashboardLoader,
        //this is interchangeble with {path:"*",element:<Error/>}
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
