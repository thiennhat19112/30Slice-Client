import { createBrowserRouter } from 'react-router-dom';
// import { lazy } from 'react';

// const ProtectedRoute = lazy(() => import('./protectedRoute'));
// const PrivateRoute = lazy(() => import('./privateRoute'));

// const App = lazy(() => import('../app/App'));
// const Login = lazy(() => import('../pages/login'));
// const Error = lazy(() => import('../pages/error'));
// const Dashboard = lazy(() => import('../pages/dashboard'));

import ProtectedRoute from './protectedRoute';
import PrivateRoute from './privateRoute';

import App from '../App';
import Login from '../pages/login';
import Error from '../pages/error';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';
import ForgetPassword from '../pages/forget-password';
import ResetPassword from '../pages/reset-password';
import Category from '../pages/category';
import Product from '../pages/product';
import News from '../pages/news';
import EditCategory from '../pages/category/edit';

const routes = createBrowserRouter([
  {
    path: '/',
    exact: true,
    children: [
      {
        path: '',
        exact: true,
        element: (
          <PrivateRoute>
            <App />
          </PrivateRoute>
        ),
        children: [
          {
            path: '',
            exact: true,
            element: <Dashboard />,
          },
          {
            path: 'item',
            exact: true,
            element: <div>Item</div>,
          },
          {
            path: 'products',
            exact: true,
            element: <Product />,
          },
          {
            path: 'profile',
            exact: true,
            element: <Profile />,
          },
          {
            path: 'category',
            exact: true,
            element: <Category />,
          },
          {
            path: 'category/:id',
            exact: true,
            element: <EditCategory />,
          },
          {
            path: 'news',
            exact: true,
            element: <News />,
          },
        ],
      },
      {
        path: 'login',
        exact: true,
        element: (
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: 'forget-password',
        exact: true,
        element: (
          <ProtectedRoute>
            <ForgetPassword />
          </ProtectedRoute>
        ),
      },
      {
        path: 'reset-password',
        exact: true,
        element: (
          <ProtectedRoute>
            <ResetPassword />
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default routes;
