import "./App.css";
import Foods from "./components/Foods";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="px-10 2xl:px-40 bg-black/[.035]">
      <Nav />
      <Foods />
      <Footer />
    </div>
  );
}

export default App;
