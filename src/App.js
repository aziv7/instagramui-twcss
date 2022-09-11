import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Posts,
  ToggleSection,
  UserSection,
  UsersPics,
} from "./components";

function App() {
  return (
    <div className="overflow-x-hidden  mx-auto">
      <Navbar />
      <UserSection />
      <UsersPics />
      <ToggleSection />
      <Posts />
    </div>
  );
}

export default App;
