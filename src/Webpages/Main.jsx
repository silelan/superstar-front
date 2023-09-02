import { createBrowserRouter } from "react-router-dom";
import { ContentBox } from "./ContentBox";
import { FileUploader } from "./FileUploader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ContentBox />,
    },
    {
        path: "/chat",
        element: <FileUploader />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );