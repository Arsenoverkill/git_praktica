import "./App.css";
import Center from './components/Center';
import Header from "./components";
import Footer from "./components/Footer";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
     <Header/>
     <Center/>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
