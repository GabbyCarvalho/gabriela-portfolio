import { RouterProvider } from "react-router-dom";
import router from "./router";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="appContainer">
        <RouterProvider router={router} />
      </div>
    </LanguageProvider>
  );
}

export default App;