import React, { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as updateOrderAction } from './Features/order/UpdateOrder';
import Error from './ui/Error';

import { loader as menuLoader } from './Features/menu/Menu';
import { action as createOrderAction } from './Features/order/CreateOrder';
import { loader as orderLoader } from './Features/order/Order';
import AppLayout from './ui/AppLayout';
import Loader from './ui/Loader';

const Home = lazy(() => import('./ui/Home'));
const Menu = lazy(() => import('./Features/menu/Menu'));
const Cart = lazy(() => import('./Features/cart/Cart'));
const CreateOrder = lazy(() => import('./Features/order/CreateOrder'));
const Order = lazy(() => import('./Features/order/Order'));

const router = createBrowserRouter([
  {
    element: <Top />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

function Top() {
  return (
    <React.Suspense fallback={<Loader />}>
      <AppLayout />
    </React.Suspense>
  );
}

export default App;
