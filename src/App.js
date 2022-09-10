import logo from "./logo.svg";
import "./App.css";
import { Navbar, UserSection, UsersPics } from "./components";

function App() {
  return (
    <div className="overflow-x-hidden  mx-auto">
      <Navbar />
      <UserSection />
      <UsersPics />
    </div>
  );
}

export default App;
