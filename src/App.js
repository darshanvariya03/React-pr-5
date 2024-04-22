import Header from "./Header/Header";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";


function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Header />
        </div>
      </div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
