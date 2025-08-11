import MainPage from "./components/MainPage";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <header>
            <ThemeToggle />
          </header>
          <MainPage />
          <ToastContainer />{" "}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
