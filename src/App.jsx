import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
// import Cart from "./components/Cart";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";
// import Pizza from "./components/Pizza"; // Puedes descomentar cuando trabajes en este componente.

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}
      <Footer />
    </div>
  );
};

export default App;
