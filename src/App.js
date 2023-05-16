import Categories from "./pages/categories";
import Electronics from "./pages/electronics";
import Essentials from "./pages/essentials";
import Footer from "./pages/footer";
import Menubar from "./pages/menubar";
import Navbar from "./pages/navbar";
import Options from "./pages/options";
import Slide from "./pages/slide";
import Smartphones from "./pages/smartphones";

function App() {
  return (
    <div>
    <Navbar/>
    <Menubar/>
    <Options/>
    <Slide/>
    <Smartphones/>
    <Categories/>
    <Electronics/>
    <Essentials/>
    <Footer/>
    </div>
  );
}

export default App;
