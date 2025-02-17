import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./Context/ThemeContext";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";

function App() {
  const [theme, setTheme] = useState("dark"); 

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
        } min-h-[100vh]`}
      >
        <Header />
        <SearchBox />
        <Home />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
