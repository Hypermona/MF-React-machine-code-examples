import { createBrowserRouter } from "react-router-dom";
import Todo from "simpleTodo/Todo";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Todo />,
      },
    ],
  },
]);
