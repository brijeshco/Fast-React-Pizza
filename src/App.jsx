import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as updateOrderAction } from './Features/order/UpdateOrder';
import Error from './ui/Error';

import { loader as menuLoader } from './Features/menu/Menu';
import { action as createOrderAction } from './Features/order/CreateOrder';
import { loader as orderLoader } from './Features/order/Order';
import AppLayout from './ui/AppLayout';
import Loader from './ui/Loader';
import CreateOrder from './Features/order/CreateOrder';
import Menu from './Features/menu/Menu';
import Order from './Features/order/Order';
import Home from './ui/Home';
import Cart from './Features/cart/Cart';

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
