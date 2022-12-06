import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./protectedRoute";
import PrivateRoute from "./privateRoute";
import ProtectedCheckoutRoute from "./protectedCheckoutRoute";

import App from "../App";

// import page
import Booking from "../pages/booking";
import Products from "../pages/products";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Error from "../pages/Error";
import Cart from "../pages/cart";
import Category from "../pages/Category";
import Checkout from "../pages/checkout";
import Checkout2 from "../pages/checkout/checkout2";
import Checkout3 from "../pages/checkout/checkout3";
import Checkout4 from "../pages/checkout/checkout4";
import Login from "../pages/login";
import Register from "../pages/signup";
import Profile from "../pages/profile";
import Order from "../pages/order";
import OrderInfo from "../pages/order/Info";
import BookedHistory from "../pages/booked-history";
import ForgetPassword from "../pages/forget-password";
import ResetPassword from "../pages/reset-password";
import BookingSuccess from "../pages/booking-success";
import About from "../pages/about/About";
import Contact from "../pages/contact";
import Combo from "../pages/combo";
import News from "../pages/news";

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
            element: (
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            ),
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
            path: "forget-password",
            exact: true,
            element: (
              <ProtectedRoute>
                <ForgetPassword />
              </ProtectedRoute>
            ),
          },
          {
            path: "reset-password",
            exact: true,
            element: (
              <ProtectedRoute>
                <ResetPassword />
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
          },
          {
            path: "order/:id",
            exact: true,
            element: (
              <PrivateRoute>
                <OrderInfo />
              </PrivateRoute>
            ),
          },
          {
            path: "booked-history",
            exact: true,
            element: (
              <PrivateRoute>
                <BookedHistory />
              </PrivateRoute>
            ),
          },
          {
            path: "booking-success/:id",
            exact: true,
            element: <BookingSuccess />,
          },
          {
            path: "news",
            exact: true,
            element: <News />,
          },
          {
            path: "about",
            exact: true,
            element: <About />,
          },
          {
            path: "contact",
            exact: true,
            element: <Contact />,
          },
          {
            path: "combo",
            exact: true,
            element: <Combo />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

export default routes;
