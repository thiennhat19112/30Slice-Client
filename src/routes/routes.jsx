import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./protectedRoute";
import PrivateRoute from "./privateRoute";
import ProtectedCheckoutRoute from "./protectedCheckoutRoute";

import App from "../App";

// import page
import Booking from "../pages/booking";
import Products from "../pages/Products";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Checkout from "../pages/checkout";
import Checkout2 from "../pages/checkout/checkout2";
import Checkout3 from "../pages/checkout/checkout3";
import Checkout4 from "../pages/checkout/checkout4";
import Login from "../pages/login";
import Register from "../pages/Register";
import Profile from "../pages/profile";
import Order from "../pages/order";

const routes = createBrowserRouter([
  {
    path: "/",
    exact: true,
    children: [
      {
        path: "",
        exact: true,
        element: <App />,
        children: [
          {
            path: "",
            exact: true,
            element: <Home />,
          },
          {
            path: "booking",
            exact: true,
            element: <Booking />,
          },
          {
            path: "products",
            exact: true,
            element: <Products />,
          },
          {
            path: "products/:id",
            exact: true,
            element: <Detail />,
          },
          {
            path: "category",
            exact: true,
            element: <Category />,
          },
          {
            path: "category/:id",
            exact: true,
            element: <Category />,
          },
          {
            path: "cart",
            exact: true,
            element: <Cart />,
          },
          {
            path: "checkout",
            exact: true,
            element: (
              <ProtectedCheckoutRoute>
                <Checkout />
              </ProtectedCheckoutRoute>
            ),
          },
          {
            path: "checkout2",
            exact: true,
            element: (
              <PrivateRoute>
                <Checkout2 />
              </PrivateRoute>
            ),
          },
          {
            path: "checkout3",
            exact: true,
            element: (
              <PrivateRoute>
                <Checkout3 />
              </PrivateRoute>
            ),
          },
          {
            path: "order-success",
            exact: true,
            element: (
              <PrivateRoute>
                <Checkout4 />
              </PrivateRoute>
            ),
          },
          {
            path: "register",
            exact: true,
            element: <Register />,
          },
          {
            path: "login",
            exact: true,
            element: (
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            ),
          },
          {
            path: "profile",
            exact: true,
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "order",
            exact: true,
            element: (
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            ),
          }
          // {
          //   path: 'news',
          //   exact: true,
          //   element: <News />,
          // },
        ],
      },

      // {
      //   path: 'forget-password',
      //   exact: true,
      //   element: (
      //     <ProtectedRoute>
      //       <ForgetPassword />
      //     </ProtectedRoute>
      //   ),
      // },
      // {
      //   path: 'reset-password',
      //   exact: true,
      //   element: (
      //     <ProtectedRoute>
      //       <ResetPassword />
      //     </ProtectedRoute>
      //   ),
      // },
    ],
    errorElement: <Error />,
  },
]);

export default routes;
