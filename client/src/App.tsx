import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
