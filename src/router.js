import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './components/Error/Error';
import Home from './pages/home/home';
import Todo from './pages/todo/todo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/:todo',
        element: <Todo />,
      },
    ],
  },
]);
