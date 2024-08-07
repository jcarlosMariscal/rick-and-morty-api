import { AppProvider } from "./context/AppContext";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <AppProvider>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </AppProvider>
  );
};
