import AppLayout from "./features/landing/components/app-layout";
import { router } from "./routes";
import "./styles/index.css";

import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </>
  );
}

export default App;
