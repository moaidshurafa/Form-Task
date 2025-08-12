import MainPage from "./components/MainPage";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <>
      <ThemeProvider>
        <header>
          <ThemeToggle />
        </header>
        <MainPage />
        <ToastContainer />{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
